'use strict';
let link = 'https://api.github.com/repos/HackYourFuture/';
function createAndAppend(name, parent, innerHTML) {
    const child = document.createElement(name);
    parent.appendChild(child);
    if (innerHTML !== undefined) {
        child.innerHTML = innerHTML;
    }
    return child;
}

const div = createAndAppend('div', this.root);
const input = createAndAppend('input', div);
input.setAttribute('type', 'text');
input.setAttribute('style', 'width:250px;height:30px;border:1px solid red')
input.setAttribute('placeholder', 'Please enter the name of the repository,');

const button = createAndAppend('button', div, 'search');
button.setAttribute('style', 'width:70px;height:32px;color:white;background-color:red')
button.addEventListener('click', () => getData(input.value));

let root = document.getElementById('root');
root.setAttribute('style', 'display:inline-flex');

function fetchJSON(url, callBack) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => callBack(xhr.response);
    xhr.onerror = () => callBack(new Error(xhr.statusText));
}

function workOnData(Data) {
    let resultDiv = createAndAppend('div', root);
    let ul = createAndAppend('li', resultDiv);
    let newDiv = createAndAppend('div', root);
    newDiv.setAttribute('style', 'width:50%;')
    for (let key in Data) {
        createAndAppend('li', ul, ` ${key} :  ${Data[key]}`);
        if (key === 'contributors_url') {
            console.log(Data[key]);
            fetchJSON(Data[key], (data) => {
                if (data === Error) {
                    console.log(Error)
                }
                else {
                    createAndAppend('h1', newDiv, 'contributors')
                    for (let dataKey in data) {
                        let returnObjects = data[dataKey];
                        // console.log(returnObjects);
                        for (let Keys in returnObjects) {
                            createAndAppend('li', newDiv, ` ${Keys}  : ${returnObjects[Keys]}`)
                        }

                    }

                }

            })
        }
    }
}
function getData(value) {

    fetchJSON(link + value, (data) => {
        if (data === Error) {
            console.log(Error)
        } else {
            workOnData(data);
        }
    });
}
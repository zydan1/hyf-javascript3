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

function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () => resolve(xhr.response);
        xhr.onerror = () => reject(new Error(xhr.statusText));
    })
}

function workOnData(Data) {
    let resultDiv = createAndAppend('div', root);
    let ul = createAndAppend('ul', resultDiv);
    let newDiv = createAndAppend('div', root);

    newDiv.setAttribute('style', 'width:50%;')
    for (let key in Data) {

        if (key === 'contributors_url') {

            makeRequest(Data[key]).then(data => {
                createAndAppend('h1', newDiv, 'contributors')
                for (let dataKey in data) {
                    let returnObjects = data[dataKey];

                    for (let Keys in returnObjects) {

                        if (Keys === "avatar_url") {
                            let img = document.createElement('img');
                            img.src = returnObjects[Keys];
                            newDiv.appendChild(img);
                        } else if (Keys === "login" || Keys === "id" || Keys === "html_url" || Keys === "followers_url" || Keys === "repos_url" || Keys === "type" || Keys === "contributions") {
                            createAndAppend('h2', newDiv, ` ${Keys}: `);
                            createAndAppend('h3', newDiv, `${returnObjects[Keys]}`);
                            createAndAppend('hr', newDiv)

                        }

                    }

                }


            }).catch(err => alert(err))



        } else if (key === "html_url") {
            let Link = createAndAppend('a', ul, `${key}`);
            Link.href = Data[key]
        }
        else if (key === "id" || key === "name" || key === "full_name" || key === "private" || key === "description" || key === "downloads_url" || key === "subscribers_count") {
            createAndAppend('h2', resultDiv, ` ${key}: `);
            createAndAppend('h3', resultDiv, ` ${Data[key]}`);
            createAndAppend('hr', resultDiv);

        }
    }
}
function getData(value) {

    makeRequest(link + value).then(data => {
        workOnData(data)
    }).catch(err => console.log(err))
}

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
function fetchJSON(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = () => data(xhr.response);
    xhr.onerror = () => data(new Error(xhr.statusText));
}
function data(Data) {
    let ul = createAndAppend('li', root)
    if (Data !== Error) {
        for (let key in Data) {
            createAndAppend('li', ul, `:${Data[key]}`);
        }
    } else (
        console.log(Error)
    )
}
function getData(value) {
    fetchJSON(link + value);
}
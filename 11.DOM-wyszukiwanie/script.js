// 11 DOM -  wyszukiwanie
document.addEventListener('DOMContentLoaded', () => {
    // Zadanie 1.
    let searchLi = document.querySelectorAll('.list');

    // Zadanie 2.
    let findTags = function(tagName) {
        return document.querySelectorAll(tagName);
    }
    let find = findTags('ul');

    // Zadanie 3.
    let save = document.querySelector('#list');

    // Zadanie 4.
    let printElement = (elem) => console.log(elem);

    let one = document.querySelectorAll('li');
    let two = document.querySelectorAll('ul');
    let three = document.querySelectorAll('span');
    let four = document.querySelectorAll('div.list > span');
    let five = document.querySelectorAll('div#spans > span');
    printElement(one);
    printElement(two);
    printElement(three);
    printElement(four);
    printElement(five);
});
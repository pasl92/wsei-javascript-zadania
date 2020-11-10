document.addEventListener('DOMContentLoaded', () => {

    // Zad 1

    //a
    console.log(document.querySelector('#buz').parentElement);
    //b
    console.log(document.querySelector('#baz').previousElementSibling);
    //c
    console.log(document.querySelector('#foo').children);
    //d
    console.log(document.querySelector('#foo').parentElement);
    //e
    console.log(document.querySelector('#foo').children[0]);
    //f
    console.log((function() {
        let foo = document.querySelector('#foo');
        let numOfChilds = foo.children.length -1;
        let middleElement = Math.round(numOfChilds / 2);
        return foo.children[middleElement];
    })());

    // Zad 2
    let addEvent = function(elementId) {
        let element = document.querySelector(`#${elementId}`);
        element.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }
    addEvent('ex2');

    // Zad 3
    document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            event.target.nextElementSibling.style.display = event.target.nextElementSibling.style.display == 'none' ? 'block' : 'none';
        });
    });

    // Zad 4
    document.querySelector('#ex3').querySelectorAll('button').forEach((element) => {
        element.addEventListener('click', (event) => {
            let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            event.target.parentElement.style.backgroundColor = randomColor;
        });
    });

    //Zad 5 
    let ex5 = document.querySelector('#ex5');
    let divs = ex5.querySelectorAll('div');
    let list = ex5.querySelectorAll('ul>li');

    //a
    function a(e) {
    list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    //b
    function b(e) {
    list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
    }
    //c
    function c(e) {
    Array.from(list)
        .filter((value) => value.innerHTML % 2 === 0)
        .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    //d
    function d(e) {
    list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
    }
    //e
    function e(e) {
    ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
    }

    divs.forEach((div) => {
    div.addEventListener('mouseover', d)});
    

    // Zad 6

    //a
    let val  = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;
    //b
    let val2 = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
    //c
    let val3 = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;
});
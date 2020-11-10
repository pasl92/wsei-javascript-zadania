document.addEventListener('DOMContentLoaded', () => {

    //Zad 1
    document.querySelector('#test-event').addEventListener('click', (event) => console.log(event));
    document.addEventListener('mousemove', (event) => console.log(event));
    document.querySelector('#test-event').addEventListener('mouseover', (event) => console.log(event));
    document.addEventListener('keypress', (event) => console.log(event));
    document.addEventListener('scroll', (event) => console.log(event));
    document.querySelector('#input-test').addEventListener('change', (event) => console.log(event));
    //Zad 2

    document.querySelector('#ex2').addEventListener("click", function(){
        let element = document.querySelector('#ex2');
        let dataAttribute = element.dataset.text;
        let span = document.querySelector('#span-ex2')
        span.innerHTML = dataAttribute;
    });

    //Zad 3
    document.querySelector('#ex3').addEventListener('mouseover', (event) => event.target.style.backgroundColor = 'blue');
    document.querySelector('#ex3').addEventListener('mouseout', (event) => event.target.style.backgroundColor = 'red');
    // nie udało mi się zrobić jedną funkcją

    //Zad 4 
    function inputTest(target) {
        let input = target.value;
        let re = /^[a-zA-Z]+$/

        return re.test(input);
    }
    document.querySelector('#input-test').addEventListener('change', (event) => {
        let isValid = inputTest(event.target);
        let errorSpan = document.querySelector('#ex3-err');

        if (isValid == false) {
            errorSpan.innerText = "Only letters allowed.";
            return;
        }
        errorSpan.innerText = "";
    });

    //Zad 5 
    let counter = 0;

    function click (event) {
        let target = event.target;
        document.querySelector('#ex5').innerText = ++counter;
        if (counter >= 10) {
            target.removeEventListener('click', click);
        }
    }
    document.querySelector('#ex5-button').addEventListener('click', click);

    //Zad 6
    document.addEventListener('scroll', (event) => {
        let position = window.scrollY;
        let body = document.querySelector('body');

        if (position > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    });

    //Zad 7
    let calcInput = document.querySelector('#calculator > input');
    let nextClickIsClear = false;
    let nextClick = false;

    document.querySelectorAll('#calculator > div > button').forEach((element) => {
        element.addEventListener('click', (event) => {
            if (nextClickIsClear == true) {
                calcInput.value = "";
                nextClickIsClear = false;
            }
            calcInput.value = calcInput.value + event.target.innerText;
            if (nextClick == true) {
                calcInput.value = eval(calcInput.value);
                nextClick = false;
                nextClickIsClear = true;
            }
            if (['/', '*', '+', '-'].includes(event.target.innerText)) {
                nextClick = true;
            }
        });
    });
});
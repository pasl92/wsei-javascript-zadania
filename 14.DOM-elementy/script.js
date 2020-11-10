document.addEventListener('DOMContentLoaded', () => {

    //Zadanie 1
    let tags = [];
    document.querySelectorAll('.more-divs').forEach((element) => {
        if (!tags.includes(element.tagName)) {
            tags.push(element.tagName);
        }
    });
    console.log(tags);

    //Zadanie 2
    function show(element) {
        console.log(element.innerHTML);
        console.log(element.outerHTML);
        console.log([...element.classList].join(','));
        console.log([...element.classList]);
        console.log(element.dataset)
    }

    show(document.querySelector('.short-list'));

    //Zadanie 3
    function result(...num) {
        return {
            add: num.reduce((prev, curr) => parseInt(prev) + parseInt(curr)),

            substract: num.reduce((prev, curr) => prev - curr),
        }
    }

    let data = document.querySelector('#datasetCheck').dataset;
    console.log(result(data.numberone, data.numbertwo, data.numberThree));

    //Zadanie 4
    document.querySelector('#spanText').innerText = "random";

    //Zadanie 5
    document.querySelector('#spanText').classList.add('moreRadom');

    //Zadanie 6
    function doSomeMagic(classList)
    {
        let arr = [...classList];

        arr.forEach((element) => console.log(element));
        console.log(arr.join('+'));
    }

    let el = document.querySelector('#classes');
    doSomeMagic(el.classList);
    el.classList = '';
    console.log('Usunięto wszystkie klasy.');

    //Zadanie 7
    let search = document.querySelector('#longList').querySelectorAll('li');

    search.forEach((element) => {
        if (element.dataset.text == null) {
            element.dataset.text = "text";
        }
    });

    //Zadanie 8
    let strToObj = (str) => { 
        return {
            newClass: str
        };
     };

    let objToStr = (obj) => {
        return obj.newClass;
    };

    let obj = strToObj('string');
    let str = objToStr(obj);
    document.querySelector(`#myDiv`).classList.add(str);

    //Zadanie 9
    function rndNums(num) {
        let element = document.querySelector('#numbers');
        let cssClass = num % 2 == 0 ? 'even' : 'odd';
        element.classList = cssClass;
    }
    let rndNum = Math.round(Math.random() * 10);

    rndNums(rndNum);

    //Zadanie 10
    let longList = document.querySelector('#longList');
    
    function valuesFromLongList(longList) {
        let arr = [];
        longList.querySelectorAll('li').forEach((element) => {
            arr.push(element.innerText.trim());
        });
        return arr;
    }

    console.log(valuesFromLongList(longList));

    //Zadanie 11
    function kidnap(children) {
        let childrenInOrder = [...children];
        childrenInOrder.forEach((element) => {
            let rndNum = Math.round(Math.random() * 10);
            element.dataset.oldValue = element.innerText.trim();
            element.innerText = randNumber;
        });
    }

    let children = document.querySelector('#longList').children;
    kidnap(children);
});
//6 Funkcje
//Zad 1

const randomName = () => {
    console.log("Udało się!");
  
}

randomName();

//zad 2
let x = 2;

const randomName = (x) => {
    console.log(x);
  
}

randomName(x);

//ZADANIE 3 

const x = (param) =>{
    return param;
}
x([1,2,3]);

//zad 4

const func2 = (str) => {
    let c = 0;
    let time = setInterval(() => {
        console.log(str);
    if (++c >= 5) {
        clearInterval(time);
        console.log('Koniec');
    }                     
    }, 3000)
}

func2('string');

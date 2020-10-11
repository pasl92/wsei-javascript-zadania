// Zadanie 1
let n1 = 15,
    n2 = 6;

if(n1 > n2){
  console.log(n1);
} else {

    console.log(n2);
}

//Zadanie 2
let n1 = 2,
n2 = 4,
n3= 5;

/*
if(2 > 4 && 2> 5) => 2 jest największe
else if(4 > 2 && 4 > 5) => to 4 jest największe
else => 5 jest największe
*/


if(n1>n2 && n1>n3){
    console.log(n1 + ' jest największe');
}else if ( n2>n1 && n2>n3) {
    console.log(n2 + ' jest najwieksze');
} else{
  console.log( n3+ ' jest najwiekszy');
} 

//Zadanie 3
for (let i=0; i<10; i++) {
    console.log("Lubię Java");
}

//zadanie 4
let result = 0;
for(i=0; i<=10; i++){
    result += i;
}
console.log(result);


//Zadanie 5
var n = 5;
for(let i=0; i<n; i++){
    if (i%2 === 0){
        console.log(i + " parzysta");
    }else{
        console.log(i + " nieparzysta");
    }
}

//Zadanie 6
for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
        console.log("i= " + i + ", j= " + j);
    }
}


//Zadanie 7.

for(let i = 0; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0){
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0){
        console.log(`${i} Buzz`);
    } else{
        console.log(`${i}`);
    }
}

//Zadanie 8

//a

/**
for(var i=1; i<=5; i++){
    console.log("*".repeat(i));
 }
*/

let star = 5;
let result = '';

for(let i = 1; i <= star; i++){
    for(let j = 0; j < i; j++){
         result += "*";
    }
    console.log(result);
    result = ""
}

//b

let star = 5;
let result = '';


for(let i = 1; i <= star; i++){

    for(let x = 5; x > i; x--)
    {
      result += " ";
    }
         result += "*";
    for(let g = 1; g < i; g++)
    {
      result += " *";
    }
    console.log(result);
    result = ""
}

//c

//d

//e
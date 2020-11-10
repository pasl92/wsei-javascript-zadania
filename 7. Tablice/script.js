//7 tablice 
//zad 1
    const tab = ["Bartek", "ma", "długopis"];
    console.log( tab[0] ); 
    console.log( tab[1] ); 
    console.log( tab[2] );     

//zad 2

          const tab = ["Bartek", "ma", "długopis", 3, 5];
    console.log( tab[0] ); 
    console.log( tab[1] ); 

console.log(tab[tab.length - 1]);
        
for(let i=0;i<tab.length;i++)
    {
        console.log(tab[i]);
    }
for(let i=0;i<tab.length;i+=2)
    {
        console.log(tab[i]);
    }

tab.forEach(el => {
    if(typeof(el) === 'string'){
        console.log(el);
    }
});

tab.forEach(el => {
    if(typeof(el) === 'number'){
        console.log(el);
    }
});

//Zad 3

const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
//1
const sum = t2.reduce((acc, number) => (acc + number));
console.log(sum)
//2
const dif = t2.reduce((acc, number) => (acc - number));
console.log(dif)
//3

const avg = sum / t2.length;
console.log(avg);

//4
t2.forEach((el) => {
	if (el % 2 === 0) {
		console.log(el);
	}
});

//5
t2.forEach((el) => {
	if (el % 2 !== 0) {
		console.log(el);
	}
});
//6
const result = t2.sort((a,b) => a - b);
console.log('max:', result[result.length - 1])

//7
t2.sort((a,b ) => b - a );
console.log('min', result[result.length - 1])

//8
t2.reverse().forEach(el => console.log(el))

//zad 4
const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
const func = tab => tab.reduce((a,b)=>a+b);
console.log(func(t2));

//zad 5
const t2 = [1, 2, 3, 4, 5, 22, 33, 44];
const func = tab => tab.reduce((a,b)=>a+b);
function A(tab){
    const sum = tab.reduce((a,b)=>a+b);
    const avg = sum / tab.length;
    const result = tab.map(el => console.log(el * avg))
}

A(t2)

///zad 6


const averageArrFunc1 = (arr = []) => {
    let counter = 0,
        value = 0;

    arr.forEach(el => {
        if (el % 2 === 0) {
            value += el;
            counter++;
        }
    });

    return Math.round(value / counter);
};

console.log(averageArrFunc1([9, 1, 7, 2, 1, 1, 6, 3, 2]));

//zad 7

function foo(arr){
    return (arr.sort((a, b) => a - b));
}
console.log(foo([5,3,2,10,8]));

// zad 8


function foo(x,y){ 
    return (x.length + y.length);
    
}
console.log(foo([1,2,3,4,5],[5,4,3,2,1]));

//Zad 9 

function foo(x,y){ 
    return x.filter(z => z != y);
}
console.log(foo([1,2,3,4,5],3));

//Zad 10

function foo(arr){
    return arr.map((val) => -val);
}
console.log(foo([1,-2,3,-4,5]));
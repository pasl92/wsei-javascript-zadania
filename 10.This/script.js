//Zad 1 
let person = {name:"Pawel",
    surename:"Salata",
    age: 90, country:"PL",
    city:"Krakow",
    showAge:  function(){
    this.age++;
    return this.age;
    }
}

let person2 = {
    name:"Janusz",
    surename:"Tracz",
    age: 20, country:"RUS",
    city:"Moskwa",
    showAge:  function(){
        this.age++;
        return this.age;
    }
}

Object.keys(person).forEach((key) => console.log(`${key}: ${person[key]}`));
console.log("-------");
Object.keys(person2).forEach((key) => console.log(`${key}: ${person2[key]}`))

console.log(person.showAge());
console.log(person.showAge());

console.log(person2.showAge());
console.log(person2.showAge());

//Zad 2 

person.array =['meat','pasta','soup'];
person2.array =['kebab','spaghetti','ramen'];

console.log(person.array);
console.log(person2.array);

person.addValueToArray = function(val){
    person.array.push(val);
}
person.addValueToArray('scrubled-eggs');

person2.addValueToArray = function(val){
    person2.array.push(val);
}
person2.addValueToArray('cake');

console.log(person.array);
console.log(person2.array);

//Zad 3

let calc = { 
    valueA: 0,
    valueB: 0,
    saveValues: function(valA,valB){
        this.valueA = valA;
        this.valueB = valB;
    },
    addValues: function(){
        return this.valueA + this.valueB;
    },
    subtractValues: function(){
        return this.valueA - this.valueB;
    },
    multiplyValues: function(){
        return this.valueA * this.valueB;
    },
    divideValues: function(){
        if(this.valueB != 0){
            return this.valueA / this.valueB;
        }else{
            return "Can't divide by 0";
        }
    }
}

calc.saveValues(5,0);
console.log(calc.addValues());
console.log(calc.subtractValues());
console.log(calc.multiplyValues());
console.log(calc.divideValues());

//Zad 4 

let ladder = {
    currentStep: 0,
    moveUp: function() {
        this.currentStep++;
    },
    
    moveDown: function() {
        if (this.currentStep <= 0) {
            this.currentStep = 0;
            console.info("You are at the bottom already.");
            
            return;
        }
        this.currentStep--;
    },

    writeCurrentStep: function() {
        console.log(`Current Step: ${this.currentStep}`);
    }
};
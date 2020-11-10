//9 Konstruktory

class Person{
    constructor(name, lastname, age, country, city, language){
        this.name = name;
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
        this.language = language;
    }
    changeAge(age) {
        if (age < 0) throw Error('Enter correct Age');
        this.age = age;
    }
    
    changeCity(city) {
        this.city = city;
    }
}
const person1 = new Person('Damian', 'Nazwisko', 21, 'Poland', 'Wrocław', 'PL');
const person2 = new Person('Adam', 'Nazwisko1', 25, 'UK', 'London', 'EN');
const person3 = new Person('Ola', 'Nazwisko2', 19, 'Poland', 'Wrocław', 'PL');
const person4 = new Person('Ela', 'Nazwisko3', 40, 'Germany', 'Berlin', 'DE');
const person5 = new Person('Jan', 'Nazwisko4', 50, 'Poland', 'Wrocław', 'PL');

person2.changeAge(569);
person3.changeAge(34);
person5.changeCity("Opole");

console.log(person2);
console.log(person5);

//Zadanie 2 

class Calc{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    add(x, y){
        this.result = x + y;
        this.addToHistory(x,y, '+');
        return this.result;

    }
    subtract(x, y){
        this.result = x - y;
        this.addToHistory(x,y, '-');
        return this.result;
    }
    multiply(x, y){
        this.result = x * y;
        this.addToHistory(x,y, '*');
        return this.result;
    }
    divide(x, y){
        if( y === 0) throw Error('Impossible operation - dividing by 0');
        this.result = x / y;
        this.addToHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    addToHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}

const calc1 = new Calc();
const calc2 = new Calc();

console.log(calc1.add(1, 5));
console.log(calc2.divide(10,2));

//Zadanie 3

class Game{
    randomize() {
        Game.prototype.x = setInterval(function(){Game.prototype.num = Math.round(Math.random() * (10 - 1) + 1);}, 1000);
    }
    winCheck() {
      Game.prototype.winCheckInterval= setInterval(function(){
          if (Game.prototype.num > 5) {
          console.log('Win')
          clearInterval(Game.prototype.x);
          clearInterval(Game.prototype.winCheckInterval);       
          } else {
          console.log('Not')
        }}, 1000);
    }
  }
  const game1 = new Game();
  const game2 = new Game();
  
  game1.randomize();
  game2.winCheck();
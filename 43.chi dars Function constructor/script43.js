"use strict";

// const number = new Function()//eski yo'li
// console.dir(number);

function Car(name, color) {
    this.name = name;
    this.color = color;
    this.isAirbag = true;
}

const bmw = new Car("bmw", "red");
console.log(bmw);

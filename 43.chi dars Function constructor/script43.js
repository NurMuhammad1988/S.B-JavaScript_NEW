"use strict";

// const number = new Function()//eski yo'li
// console.dir(number);

function Car(name, color, mph) {
    this.name = name;
    this.color = color;
    this.mph = mph;
    this.isAirbag = true;
    this.speed = function () {
        console.log(`Speed of car ${this.name} is ${this.mph}`);
    };
}

const bmw = new Car("bmw", "red", 200);
const merc = new Car("merc", "black", 300);
bmw.speed()
merc.speed()

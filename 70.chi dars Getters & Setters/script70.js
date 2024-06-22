"use strict";

////Getter va Setter

const car = {
    name: "bmw",
    color: "black",

    get carName() {
        return this.name;
    },

    set carName(name) {
        this.name = name;
    },
};
console.log(car.carName); //car objectini faqatgina name qiymatini olib beradi
console.log((car.carName = "merc"));

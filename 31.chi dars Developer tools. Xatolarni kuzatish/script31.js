"use strict";

//browserdagi cosole logdagi sourse yani debagerham(debugger) deb ataladi yani har hil hatolarni ko'rish

function sayHello() {
    console.log("Good Morning");
    // debugger
}
sayHello();

function sayBye() {
    console.log("Good Bye");
}
sayBye();

const arr = [1, 34, 14, -56, 98],
    sorted = arr.sort(compareNum);
    
function compareNum(a, b) {
    return a - b;//shu funksiya nimaga yozilganini tushunmadim
}
console.log(sorted);

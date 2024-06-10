"use strict";
////Promise yani vada

const isFrendCome = false;

const meetingRequest = new Promise(
    (resolve,
    (reject) => {
        if (isFrendCome) {
            const msg = "Friend I'm there";
            resolve(msg);
        } else {
            const err = "I can't come there";
            reject(err);
        }
    })
); //promise object hissoblanadi promis ikkita parametr qabul qiladi yani resolve va reject ikkalasiham qanaqadur qiymat qaytaradi  so'rov omadli bo'lsa resolve qaytaradi omadsiz bo'lsa reject bo'ladi

// setTimeout(function() { myFunction("I love You !!!"); }, 9000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

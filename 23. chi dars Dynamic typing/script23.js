"use strict";

////Dynamic typing

/////////////////////////////////////////////////Dynamic to STRING///////////////////////////////

// //1-)//Dynamic to STRING yani number malumot turlaridan matin malumot turlariga o'tish
// console.log(typeof String(4)); //yani string malumot turi

// //2-)//Dynamic to STRING yani number malumot turlaridan matin malumot turlariga o'tish
// console.log("Nurik " + 35); //yani string
// console.log(typeof ("Nurik " + 35)); //bu holatda numberham stringga qo'shilib ketadi yani hammasi string hissoblanadi

// //3-)//Dynamic to STRING yani number malumot turlaridan matin malumot turlariga o'tish
// const youtubeChannel = 10;
// console.log(`youtube.com/channel/` + youtubeChannel);

// //////////////////////////////////////////Dynamic to NUMBER/////////////////////////////////////

// //1-)//Java Scriptdagi default Number objecti bilan
// console.log(typeof Number("4")); //aslida esa run codeda string malumot turini qaytarish kerak edi lekin Number objecti sabab (typeof) number qaytardi

// //2-) bu yerda + yani pilus sababliham number malumot turiga o'tish mumkun
// console.log(typeof +"5"); //pilus sababli bu "5" ham number malumot turi hissoblanadi

// //3-) parseInt() metodi orqaliham stringni  Numberga o'tqazish va chaqirish mumkun
// console.log(typeof parseInt("15"));

// //4-)parseInt va prompt orqali stringni numberga o'tqazish
// const names = parseInt(prompt("age"));
// console.log(typeof names); //console.logga qaralsin

///////////////////////////////////////////////////Dynamic to BOOLEAN///////////////////////////////

//0, "", null, undefined, NaN, === har doim false qaytaradi

////1-)
const age1 = 0;
if (age1) {
    console.log("a");   
}

let age2 = 0;
if (age2) {
    console.log("a");
}
age2 = 18;
if (age2) {
    console.log("a");
}

////2-)
console.log(typeof Boolean("4")); //yani malumot turini Boolean qilib beradi

////3-)
console.log(typeof !!"4"); //yani malumot turini Boolean qilib beradi

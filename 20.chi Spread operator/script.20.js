"use strict";

// Spread operator (es9 dan boshlab shunday uchta nuqta ... qilib yozish sintaksisi chiqgan )

// const calc = [1, 2, 3];
// function logger(x, y, z) {
//     console.log(x + y + z); //yani parametrlar bir biriga qo'shildi
// }
// // logger(1, 2, 3);//yani orginal function
// logger(...calc); //yani ... nuqta spread operatori//yani bu holatda logger nomli function yaratilib parametriga x,y,z yozildi va function ichida x+y+z bo'lsin deb buyurildi yani argumentlar bir biriga qo'shilsin deyildi (javob 6) keyin logger functioni chaqirilganda argumentiga uchta nuqta bilan yani spread operatori bilan  massivdan iborat bo'lgan calc o'zgaruvchisi chaqirildi shunda spread operatori calcni ichidagi massivni va qiymati 1 2 3 ni loggerni argumentiga qo'ydi yani copiy qildi va javob yana 6

//////
// const arr = ["x", "y"];
// const newArr = [...arr];
// //console.log(arr);
// console.log(newArr);//yani spread operatori yordamida arr o'zgaruvchidagi massivni newarr o'zgaruvchiga copy qilindi yani spread operatori newArr ga arr ni kopiyasini tushurib berdi

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Spread operatorini objectlarda ishlatish {}
// const numbers = {
//     x: 10,
//     y: 5,
// };
// const newNumbers = { ...numbers };//spread operatori uchta nuqta ... 
// console.log(numbers);
// console.log(newNumbers); //yani spread operatori yordamida numbers o'zgaruvchidagi objectnu newNumbers o'zgaruvchiga copy qilindi yani spread operatori newNumbergs ga numbers objectini kopiyasini tushurib berdi

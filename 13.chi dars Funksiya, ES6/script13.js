"use strict";

// console.log("Open Modal");
///////////////////////////////////////////////////////////////
// sayHelloWorld("Hello Junior");//funksiyani yozilgan qatoridan tepadaham chaqirish mumkun
// function sayHelloWorld(text) {
//     //bu joyda tex parametr yani funksiya yozilib parametriga kerakli narsa yozilib logda chiqarib funksiyani chaqirganda () <shuni ichiga kerakli narsani masalan textni qo'shib chaqirish mumkun yani funksiyani ichiga kop narsa yozib hohlagan joyda shu funksiyani ichidagi kerakli parametirni alohida chaqirib ishlatish mumkun har safar chaqirib chaqirish parametiriga  hohlagancha kerakli narsa yozish mumkun
//     console.log(text);
// }
// sayHelloWorld("Hello World"); //funcsiyani chaqirish sayHelloWorld() funcsiyani shunday chaqirmasa ishlamaydi ishlashi uchun alohida shunday chaqirish kerak
// sayHelloWorld("Hello JavaScript");
// sayHelloWorld("Hello Junior"); //har safar chaqirganda boshqa parametirini chaqirish mumkun yoki har safar chaqirish parametiriga boshqa narsa chaqirish mumkun
////////////////////////////////////////////////////////////
// function calc(a, b, c) {
//     //yani funksiya parametiriga a, byozildi bu degani logda a+b qilinsa bu nima bo'lsaham qo'shib beradi yani qo'shishni iloji bor narsa bo'ldi qo'shib bera oladi masalan funksiyani chaqirish parametirida 10 , b yozilishi a 10 b 5 degani javob esa 15 agar funksiyani chaqirishda string malumot turlari bo'lsaham qo'shib beradi
//     console.log(a + b + c);
// }
// calc("10 ", 5, " salom");
///////////////////////////////////////////////////////////////
// function calc(a, b) {

//     console.log(a + b);
// }
// calc(10, 5);
// calc(9, 10)
///////////////////////////////////////////////////////////////

// function sayMyName(name, nickname) {//name va nickname parametrlarni becit ichida chaqirish mumkun yonigab string malumotlarham qo'shish  mumkun
//     console.log(`My name is ${name} my nickname is ${nickname} `);// `bectik` aynan manashu narsa uchun kerak
// }
// sayMyName("Nur,", "Dev.");
///////////////////////////////////////////////////////////////////

// function sayMyName(name, nickname) {
//     let age = 30//yani funksiyani ichida o'zgaruvchi elon qilinganda u o'zgaruvchi faqat funksiyani ichida chaqirilganda ishlaydi funksiyadan tashqarida chaqirilganda ishlamaydi yani bu holat local variable yani mahalliy o'zgaruvchi bu faqat funksiyani ichida ishlaydi va faqat funksiyani ichida chaqirilishi kerak
//     console.log(`My name is ${name} my nickname is ${nickname} `);
//     console.log(age);
// }
// sayMyName("Nur,", "Dev.");

///////////////////////////////////////////////////////////////////
// let age = 30;
// function sayMyName(name, nickname) {
//     let age = 20;//bu local o'zgaruvchi
//     console.log(`My name is ${name} my nickname is ${nickname} `);
//     console.log(age);
// }//funksiyani ichida mahalliy o'zgaruvchi yaratilganda birinchi shu  funksiyani o'zini ichidan izleydi agar funksiyani ichida io'zgaruvchini topolmasa keyin tashqariga chiqib izlaydi
// sayMyName("Nur,", "Dev.");
// console.log(age);
////////////////////////////////////////////////////////////////////////

// let age = 30;//bu global o'zgaruvchi
// function sayMyName(name, nickname) {
//     age = 20//bu local o'zgaruvchi
//     console.log(`My name is ${name} my nickname is ${nickname} `);
//     console.log(age);
// }
// sayMyName("Nur,", "Dev.");
// console.log(age);//yani funksiyadan tashqarida age=30 global o'zgaruvchi bor va funksiyani ichida age=20 local o'zagruvchi bor logda birinchi funksiyani ichidagi local o'zgaruvchi chaqirildi va u o'zgaruvchi 20 ga teng keyin funksiyadan pastda age=30 global o'zgaruvchi yana chaqirildi va local o'zgaruvchini ichidagi log global o'zgaruvchiga tasir qilib ikkala o'zgaruvchiniham qiymatini 20 ga teng qilib qo'ydi???????????????? chunki
/////////////////////////////////////////////////////////////////////////////

// function calc1(a , b ) {
// return a + b// return yani return yozilganda funksiya shu joyida to'htaydi returndan keyin shu funksiydaniichida yozilgan kod ishlameydi return eng ohirida yozilishi kerak yani funksiyada kerakli hamma narsa yozilib bo'lgandan keyin ohirida return yoziladi// va yana returni global o'zgaruvchini chaqirishdaham yordam beradi masalan
// }
// console.log(calc1(10,5));// yani returndan keyin funksiyani emas log bilan chaqirish kerak masalan calc1()<shunday qilib chaqirib bo'lmaydi
// console.log(calc1(111,4));
/////////////////////////////////////////////////////////////////////////////////

function calc1(a, b) {
    return a + b;
}
console.log(calc1(10, 5));
const sumOfAandB = calc1(10,10)//returnni yana bir yahshi tarafi returinni boshqa bit funksiyagaham alohida chaqirib olib qiymatlarini o'zgartirish va bitta funksiydan qayta qayta foydalanish imkonini beradi
console.log(sumOfAandB);
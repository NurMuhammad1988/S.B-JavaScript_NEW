"use strict";
//21 chi dars OOP asoslari

// //OOP (Object-oriented programming) yani objectga yo'naltirilgan dasturlash degani yani qisqartmasi
// //JavaScriptda hamma narsa objectlardan tashkil topgan bo'ladi
// const firstName = "Nur"
// const str = new String(firstName)//YANI BU JSDAGI ASIL STRING yani bu string object hissoblanadi OOP shu//yani aslida oddiy stringham objectdan tashkil topgan bo'ladi stringni Prototypesida srtingga aloqador metodlar va Prototype ichida esa Prototype object bor va stringniham Prototypesida object va metodlariham bor yani object ichida object hammasi object ustiga qurilgan hissoblanadi
// console.log(firstName);
// console.log(str);

// console.log(typeof firstName);//bu esa string
// console.log(typeof str);//bu object yani stringham aslida metodlari bilan object hissoblanadi yani fundamentida object bor bo'ladi

//JavaScripda nima qilinsaham birinchi object bo'ladi keyin biz foydalanishni hohlagan malumot turi bo'ladi keyin browserga chiqarib beradi yani har qanday malumot turiga oid funksiya yaratilsaham asosiy qismi yani fundamenti JSda yozib qo'yilgan o'z metodlariga ega alohida object hissoblanadi

//Quyida array misolida OOP ni ko'rinishi
// console.dir([1, 2, 3]); //browserga qaralsin!!!
// console.log(new String ("1"));//browserga qaralsin

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// const car = {
//     //yani bu o'zimiz yasagan Prototype hissoblanadi
//     motor: "x",
//     color: "red",
//     isAirbag: true,
//     isSpead: function () {
//         console.log(320);
//     },
// };

// const gm = {
//     isAirbag: false,
// };

// gm.__proto__ = car;//lekin bu juda eski usuli hissoblanadi!!!
// console.log(gm); //yani bu holatda car nomli object yaratildi va gm nomli objectga proto qilindi yani ulandi zanjir kabi va logda gm objectni o'zi chaqirildi va run codeda isAirbag: false chiqdi yani gm o'zgaruvchini qiymati chiqdi lekin browserdagi logda isAirbag: false ning Prototypesida car objectni Prototype sifatida saqlanib qoldi yani bu holatda car objecti  o'zimiz yasagan Prototype hissoblanadi va logda bu holatdaham fundament object va metodlari hissoblanadi
// console.log(gm.color); //yani run codeda javob red lekin aslida gm o'zgaruvchida color qiymati yo'q lekin gm ni Prototype hissoblangan car o'zgaruvchida color qiymati bor bu qiymatlar hamma narsa bo'lishu mumkun masalan bu pastdagi holatda isSpead functsiyasi
// gm.isSpead();//yani aslida gm o'zgaruvchida isSpead funcsiyasi yo'q lekin gm ni Prototypesida bu functsiya bor
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// const car = {
//     //yani bu o'zimiz yasagan Prototype hissoblanadi
//     motor: "x",
//     color: "red",
//     isAirbag: true,
//     isSpead: function () {
//         console.log(320);
//     },
// };

// const gm = {
//     isAirbag: false,
// };

// Object.setPrototypeOf(gm, car)//setPrototypeOf yani ichidagi narsani yuklab beradi//bu yuqorida qilingan huddi shu darsni qisqa kodlisi yani yangisi yani Object.setPrototypeOf metodi orqali proto qilindi
// console.log(gm);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const car = {
//     motor: "x",
//     color: "red",
//     isAirbag: true,
//     isSpead: function () {
//         console.log(320);
//     },
// };

// const gm = {
//     isAirbag: false,
// };

// const bmw = Object.create(car); //yani faqat objectni yaratib beradi 
// console.log(bmw);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/

//bu 76 chi Try Catch darsi takrorlanayotganda npx webpacke shu papkaga kirib  ishlatilishi kerak
///////////////////////try chatch
// console.log(a);//a o'zgaruvchi aslida yo'q bo'lgani uchun pastdagi hello worldham isjlamaydi yani butun loyihada bitt a hato bo'lsa hamma kod ishlamay qoladi agar try chatch qilinsa bu holatdan qochish mumkun
// console.log("Hello world");

//try catch

// try {
//     console.log("Working code");
//     console.log(a); //tryni ichida shu hatodan keyin pastdagi proccesing logini o'qimasdan hatoni topish uchun to'htaydi lekin try chatchdan tashqaridagi kodlarga masalan done logiga tasir qilmaydi
//     console.log("Proccesing");
// } catch (error) {
//     //errorga yabni catchga object keladi
//     console.log("Error code");//yani hato chiqganda chatchdan olindagian habar "error code"
// }

// console.log("Done");
///////////////////////////////////////////////////////////////////////////////////////////////////

// try {
//     console.log("Working code");
//     console.log(a);
//     console.log("Proccesing");
// } catch (error) {
//     ////error har hil habarlar qaytaradi yani tyni ichidagi hatolarni chatchda ko'rish mumkun va buni hodilsar bilan funksiyalar bilan yozib bu hatolarni usergaham ko'rsatish mumkun

//     // console.log(error.name);//1//error.name yani hatoni nomini aytadi "ReferenceError" yani noto'gri havola berildi degani

//     // console.log(error.message); //2//yani hatoni message nima hato ekanligini habar qiladi "a is not defined" yani a o'zgaruvchi topilmadi degani

//     console.log(error.stack);//3// stack hato qayerda qaysi papkada qaysi qatordaligigacha ko'rsatadi va o'sha joyga olib boradi logda
// }

// console.log("Done");
///////////////////////////////////////////////////////////////////////////////////////////////////

// //yani bu holatda bundli.jsga ulangan index76.html filedagi buttonga hodisa ilindi va asosiy papkaga yana bitta about.html fileham ochildi va bundle js about.htmlgaham ulab qo'yildi shunda index76.html papkaga click bosilganda about.htmlda TypeError: Cannot read properties of null (reading 'addEventListener') hatosi chiqdi yani byndle.js webpacke yani js papkalarni ulaydi yani jslarda yozilgan js kodlar htmllarga tasir qiladi about.htmlgaham bundle.js ulangani uchun index75.jsda yozilgan hodisa tasir qildi faqat about.htmlda click classli button yo'qligi sabab about.htmlda hato chiqdi
// const btn = document.querySelector(".click");
// btn.addEventListener("click", () => {
//     console.log("Click");
// });
///////////////////////////////////////////////////////////////////////////////////////////////////

try {
    const btn = document.querySelector(".click");
    btn.addEventListener("click", () => {
        console.log("Click");
    });
} catch (error) {
    console.log(error.message); //Cannot read properties of null (reading 'addEventListener')//yani hatoni chatch blokida ushlab olindi
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map
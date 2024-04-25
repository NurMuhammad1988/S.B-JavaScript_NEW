"use strict";

//objectni delete metodi
// const theif = {
//     jacket:"black",
//     height:1.7,
//     colors:{
//         hair:"gray",
//         style:"curley",
//     }
// }

// console.log(theif.height);
// delete theif.jacket//objectni delete metogi//yani objectni ichidan hohlagan qiymatni alohida udalit qilish mumkun
// console.log(theif); //jacket metodini udalit bo'lganini ko'rish mumkun
/////////////////////////////////////////////////////////////////////////////////////////////////////

//objectni keys metodi va lenght
// const theif = {
//     jacket:"black",
//     height:1.7,
//     colors:{
//         hair:"gray",
//         style:"curley",
//     }
// }

// console.log(Object.keys(theif).length);//yani Object keys metodi bilan objectni ichidagi qiymatlarni(property) massivga olib keyin length bilan uzunligini bilish mumkun chunki objectni metodlarida length metodi yo'q lekin length metodi massivda bor shu sabab objectni keys metodi bilan massiv qilib olib keyin massivni lengthini olish mumkun

//////////////////////////////////////////////////////////////////////////////////////////////////////

//objectlar bilan intirgatsa yani tsikl key in metodi
// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
// };
// console.log(Object.keys(theif).length);
// for (let key in theif) {
//     //yani let bu joyda o'zgaruvchi let key in bilan objectni tsiklga qo'yish mumkun yani objectni intirgatsa qilish mumkun (run codega qaralsin) shunda lengthi 3 va property va valuelari olindi lekin objectni ichidagi colors objectiga tasir qilmadi yani colors objectini property va valulari olinmadi
//     // console.log(`Property ${key} has value ${typeof theif[key]}`);//birinchsi string ikkinchisi number uchinchisi object chiqmoqda yani uchinchi objectni ichidagi valuelar intrigatsa yani tsikilga tushmadi

//     if (typeof theif[key] === "object") {
//         for (let i in theif[key]) {
//             console.log(`Property ${i} has value ${theif[key][i]}`);
//         } //yani bu bilan objectni ichidagi colors objectini valuelariham olindi
//     } else {
//         console.log(`Property ${key} has value ${theif[key]}`);
//     }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////

// //for in objectlar bilan ishlaydi for of massivlar bilan ishlaydi
// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },
// };
// let count = 0;

// for (let key in theif) {
// count++;//intirigatsa 0 dan 3 gacha
// }
// console.log(count);
// //for in objectlar bilan ishlaydi for of massivlar bilan ishlaydi

////////////////////////////////////////////////////////////////////////////////////////////////////////

//metodni qo'lda yozish yani javascript dasturlash tilida yozilmagan metod yani dasturchi o'zi yozadigan metod
// const theif = {
//     jacket: "black",
//     height: 1.7,
//     colors: {
//         hair: "gray",
//         style: "curley",
//     },

//     howOut: function () {
//         //qo'lda yozilgan metod

//         console.log("Fast with help doors"); //yani objectni ichiga funksiyani metod sifatidaham yozish mumkun
//     },
// };
// theif.howOut();//qo'lda yozilgan metodniham huddi funksiyani chaqirganday chaqiriladi
///////////////////////////////////////////////////////////////////////////////////////////////////

//Destruptizatsiya yani objectni ichidagi narsalarni tortib olish
const theif = {
    jacket: "black",
    height: 1.7,
    colors: {
        hair: "gray",
        style: "curley",
    },
    howOut: function () {
        console.log("Fast with help doors");
    },
};
theif.howOut();
const { hair, style } = theif.colors; //Destruptizatsiya mana shunday yoziladi yani objectni ichidan kerakli valueni boshqa o'zgaruvchi ichiga olish bu joyda theif objectni ichidagi colors objectini ichidagi gray bilan curley olindi
console.log(hair, style);

"use strict";

// //objectni delete metodi
// const theif = {
//     jacket:"black",
//     height:1.7,
//     colors:{
//         hair:"gray",
//         style:"curley",
//     }
// }

// console.log(theif.height);
// delete theif.jacket//objectni delete metodi//yani objectni ichidan hohlagan qiymatni alohida udalit qilish mumkun yani delete objectni umumiy chaqirishdan oldin ishlatilishi kerak
// console.log(theif); //jacket metodini udalit bo'lganini ko'rish mumkun
// //for in objectlar bilan ishlaydi for of massivlar bilan ishlaydi
// /////////////////////////////////////////////////////////////////////////////////////////////////////

// //objectni keys metodi va lenght
// const theif = {
//     jacket:"black",
//     height:1.7,
//     colors:{
//         hair:"gray",
//         style:"curley",
//     }
// }

// console.log(Object.keys(theif).length);//yani Object keys metodi bilan objectni ichidagi qiymatlarni(property) massivga olib keyin length bilan uzunligini bilish mumkun chunki objectni metodlarida length metodi yo'q lekin length metodi massivda bor shu sabab objectni keys metodi bilan massiv qilib olib keyin massivni lengthini olish mumkun yani javob 3 chunki objectni asosiy 3 ta keyi bor
// //for in objectlar bilan ishlaydi for of massivlar bilan ishlaydi

//////////////////////////////////////////////////////////////////////////////////////////////////////

// //objectlar bilan intirgatsa yani tsikl for key in metodi
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
//     //console.log(`Property ${key} has value ${typeof theif[key]}`);//SHU OBJECTNI ISHLATGANDA SHU LOGNIHAM ISHLATIBKO'RISHNI TAFSIYA QILAMAN //birinchsi string ikkinchisi number uchinchisi object chiqmoqda yani uchinchi keyni yani  ichidagi valuelar yani colors objectini ichidagi valuelari intrigatsa yani tsikilga tushmadi
//     //objectni tsikilga yani forga qo'yilganda objectni ichidagi objectni to'g'ridan to'g'ri tsikilga qo'yib bo'lmaydi objectni ichidagi objectni tsikilga qo'yish uchun quyidagi holatda if elsdan foydalaniladi
//     if (typeof theif[key] === "object") {
//         //yani agar theif objectini typeofi yani keyi yani ichidagi keylari objectga qattiy teng bo'lsa for tsikli bilan let i in qilib theif objectini keyini yani qiymati olinsin va logda bectik bilan text propertydan keyin i qilib yana text qilib keyin theif objectini keyi i yani intirigatsa bo'lsin yani tsikilga qo'yilsin yani key stringda object bo'lsa
//         for (let i in theif[key]) {
//             //yani bu bilan objectni ichidagi colors objectini valuelariham olindi
//             console.log(`Property ${i} has value ${theif[key][i]}`); //yani biz objectni tsikilga oldik ichidagi colors objectinham oldik  va colorsni ichidagi valularniham oldik//yani bu bilan objectni ichidagi colors objectini valuelariham olindi
//         } //yani bu bilan objectni ichidagi colors objectini valuelariham olindi
//     } else {
//         console.log(`Property ${key} has value ${theif[key]}`);
//     }
// } //yani bu joyda objectni ichidagi object tsikil yani intirgatsa qilindi
// //for in objectlar bilan ishlaydi for of massivlar bilan ishlaydi

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
// let count = 0;//GLOBAL!!!

// for (let key in theif) {
// count++;//intirigatsa 0 dan 3 gacha
// }
// console.log(count);
// //for in objectlar bilan ishlaydi for of massivlar bilan ishlaydi

////////////////////////////////////////////////////////////////////////////////////////////////////////

// metodni qo'lda yozish yani javascript dasturlash tilida yozilmagan metod yani dasturchi o'zi yozadigan metod
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
// //// console.log(theif);
// ///////////////////////////////////////////////////////////////////////////////////////////////////

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
// theif.howOut();
const { hair, style } = theif.colors; //Destruptizatsiya mana shunday yoziladi yani objectni ichidan kerakli valueni boshqa o'zgaruvchi ichiga olish bu joyda theif objectni ichidagi colors objectini ichidagi gray bilan curley olindi //Destruptizatsiya mana shunday yoziladi yani objectni o'zgaruvchi ichiga olib property va valuelarini nusxalab olish Destruptizatsiya deyiladi
//Destruptizatsiya massivni yoki objectni  yo'q qilmaydi. U objectni arrayni topshiriq va malumotlari bilan hech narsa qilmaydi  uning vazifasi faqat kerakli qiymatlarni o'zgaruvchilarga nusxalashdir
console.log(hair,style);

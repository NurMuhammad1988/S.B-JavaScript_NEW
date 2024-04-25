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

//objectlar bilan intirgatsa yani tsikl key in m
const theif = {
    jacket: "black",
    height: 1.7,
    colors: {
        hair: "gray",
        style: "curley",
    },
};
console.log(Object.keys(theif).length);
for (let key in theif) {
    console.log(`Property ${key} has value ${theif[key]}`);
}

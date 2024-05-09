"use strict";
const adv = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    wrapper = document.querySelector(".promo__bg"),
    seriesList = document.querySelector(".promo__interactive-list");
const seriesDB = {
    series: [
        "OMAR",
        "THE FINAL LEGACY",
        "ERTUGRUL",
        "MAGNIFICENT CENTURY",
        "THE GREAT SELJUCKS GUARDIANS...",
    ],
};
// console.log(adv);
adv.forEach((item) => {
    item.remove();
}); //yani adv o'zgaruvchi ichidagi promo__adv classini ichidagi img lar udalit qilindi yani bittada foreach metodi bilan intrigatsa qilib udalit qilindi
genre.textContent = "Comedy"; //yani genre o'zgaruvchi ichidafi promo__genre clasidagi drama texti dynamic tarzda comedyga o'zgardi
wrapper.style.backgroundImage = 'url("img/1.jpg")'; //yani wrapper o'zgaruvchi ichidagi promo__bg clasiga cssda berilgan background imge dynamic tarzda boshqa imga o'zgartirildi
console.log((seriesList.innerHTML = "")); //yani serieslist o'zgaruvchi ichidagi promo__interactive-list ona divli classni innerHTML qiymati bilan (innerHtml qiymati dynamic tazda textlar qo'shadi lekin bu yerda bo'sh katak "" berilgani uchun promo__interactive-list classidagi html textlar yo'q bo'ldi yani ko'rinmay qoldi chunki innerHTML  doim string qaytaradi stringni esa " bu bilan ichiga yozmay bo'sh qilib qo'yish mumkun")
seriesDB.series.forEach((item, index) => {
    seriesList.innerHTML += `
    <li class="promo__interactive-item"> ${index + 1} ${item}
    <div class="delete"></div>
</li>
    `;
}); //yani seriesdb objecti foreach meofi bilan  intrigatsa qilinib ichidagi itemlar innerHTML qiymati orqali promo__interactive-item clasiga itrigatsa bo'lgan objectdagi itemlar yani qiymatlar dynamic tarzda kiritib qo'yildi  seriesdbdagi series massiv bo'lgani uchun tartib raqamlar noldan boshlanadi shu uchun massivni indexlariham olinib userga tushunarli bo'lishu uchun 1 dan boslanadigan qilib qo'yildi>>${index + 1}


























// ///////////////////////////O'ZIM BAJARGANIM////////////////////////////////////////////////
// const deleteAdv = document.querySelectorAll(".promo__adv img");
// deleteAdv.forEach((item) => {
//     item.remove();
// }); //yani html documentdagi promo__adv clasini yani ona divini deleteAdv o'zgaruvchiga chaqirib ichidagi imgni foreach metodi bilan intrigatsa qilib remove metodi orqali imglarni hammasini bittada dynamic tarzda udalit qilindi

// const genre = document.querySelector(".promo__genre");
// genre.textContent = "comedy"; //yani genre nomli o'zgaruvchiga html documentdagi .promo__genre classli div chaqirib olinib ichidagi drama texti textContent qiymati bilan comedyga dynamic o'zgartirildi

// const promoBg = document.querySelector(".promo__bg");
// promoBg.style.backgroundImage = 'url("img/1.jpg")'; //yani promoBg o'zgaruvchiga htmldan promo__bg nomli classli div chaqirib olindi va style bilan background imgi dynamic o'zgartirildi yani cssda aslida promo__bg clasida boshqa rasim turipti

// const seriesList = document.querySelector(".promo__interactive-list");
// const seriesDB = {
//     series: [
//         "Omarrrr",
//         "The Final Legacyyyy",
//         "Ertugrullll",
//         "Magnificent Centuryyyy",
//         "The Great Seljuks: Guardianssss...",
//     ],
// };
// seriesDB.series.forEach((item, idx) => {
//     seriesList.innerHTML += `
//     <li class="promo__interactive-item">${idx + 1} ${item}
//       <div class="delete"></div>
//     </li>
//   `;
// });

// const deleteHtml = document.querySelectorAll(".promo__interactive-item");
// deleteHtml[0].remove();
// deleteHtml[1].remove();
// deleteHtml[2].remove();
// deleteHtml[3].remove();
// deleteHtml[4].remove();
// ///////////////////////////O'ZIM BAJARGANIM////////////////////////////////////////////////

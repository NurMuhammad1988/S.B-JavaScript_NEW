"use strict";
////oddiy iboralar (regular expression)

//// new RegExp("pattern", "flag")//eski holatda yozilishi//eski sintaksiz

//// /pattern/flag //yangi sintaksiz

////flagglar i va g flaglari bor
////g flagi global degani yani texni hammasini ichidan izlaydi

// const firstName = prompt("What is your name", "")
// const regex = /a/ //RegExpni yangi sintaksizda yozilishi yani RegExp ikkita parametr qabul qiladi birinchisi pattern bu holatda /a/ ikkinchisi esa flag bu holatda /a/dan keyin yoziladi masalan /g/ bu global degani yani bu holatda  What is your name degan savolga user kiritadigan javobni ichidan a harfini global izlaydi yani hamma hariflar ichidan izlaydi lekin bu holatda faqat 1 chi malumotni qaytarayapti chunki search metodi izlangan harifni faqat birinchisini qaytaradi//bu holatda patternga yozilgan a faqat kichkina harf bo'lgani uchun regexp faqat kichkina harifni izlaydi agar /a/i yozilsa katta harf kichkina harif farqi yoq umumiy a harfini izlash buyurlgan hissoblanadi /a/gi yoki /a/ig qilibham flaglarni aralashtirib yozish mumkun
// //// RegExp konstruktori ikkita parametr qabul qiladi bu holatda modalda What is your name degan savolga berilgan javob ichidan a harfini izlaydi yani regex o'zgaruvchida /a/ yozib regex o'zgaruvchini logda search metodi bilan chaqirilganda savolga javobni ichidan a harfini izlaydi va search metodi faqat birinchi malumotni qaytaradi yani javob ichida 3 ta a harfi bo'lsaham faqat bittasini yani birinchisini qaytaradi
// console.log(firstName.search(regex));
//////////////////////////////////////////////////////////////////////

// const firstName = prompt("What is your name", "");
// const regex = /a/g
// console.log(firstName.match(regex));//yani bu holatda match metodi a harfini izlaydi yani faqat kichkina a harfini savolga javobni hammasidan izlaydi va nechta a harfi bo'lsaham g yani global sabab hamma a harfini topib beradi
////////////////////////////////////////////////////////////////////////

// const firstName = prompt("What is your name", "");
// const regex = /a/gi
// console.log(firstName.match(regex));//bu holatda esa i sabab a harfini katta harifayokida kichkina harifda bo'lsaham izlayveradi yani global sabab hamma textdan i sabab katta kichik bo'lsahamizlab massiv qilib olib beradi
////////////////////////////////////////////////////////////////////////

////replace metodi (yani malumotni o'zgartirish)
// const password = prompt("Your password");
// console.log(password.replace(/./g, "*"));//parolni yashirish//YANI REPLACE METODIni parametrida regexni ishlatish bu holatda modalga kiritiladigan password malumotini qiymatini yani hariflarini * qlib qo'yildi bu /./ promptga yoziladigan hamma narsa degani yani harifmi numbermi belgilarmi farqi yo'q modalda promptga yozilgan hamma narsani nazarda tutadi g esa global yani hamma narsani "*"yulduzcha esa shu hamma narsani ustiga string holatda yozildi yani yozilgan parolni texti ko'rinmeydigan qilindi
/////////////////////////////////////////////////////////////////////////

////special characters
// const password = prompt("Your password");
// console.log(password.replace(/\|/g, "*")); //yani special characterslarga belgilar kiradi  yani RegExp shunaqa mahsus belgilarniham izlaydi masalan /?\|$%^& yani shunaqa belgilar bilan RegExpda ishlash
// //   /\|/yani bu holatda RegExp ni ichidagi  bu | belgini izlash va faqat shu belgini usiga yulduzcha qo'yildi yani bu\belgidan keyin qanaqadur  belgi qo'yilsa masalan | shuni ustiga yulduzcha qo'yib beradi
// ///////////////////////////////////////////////////////////////////////

// const number = "12-34-56-78-90"
// console.log(number.replace(/-/g, ":"));//bu holatda replace metodida RegExpni ishlatish yani endi 12-34-56-78-90 orasidagi bu>> - belgini bu belgiga>> : o'zgartirdik natija>> 12:34:56:78:90
//////////////////////////////////////////////////////////////////////////

////test metodi
// const name = prompt("Name", "");
// const regexp = /nur/g;
// console.log(regexp.test(name)); //yani bu test metodi bilan RegExpda yozilgan /nur/ texti global bor bo'lsa yani promptga yozilgan textni ichida nur bor bo'lsa true yo'q bo'lsa false qaytaradi
////////////////////////////////////////////////////////////////////////////

//test metodi
// const name = prompt("Name", "");
// const regexp = /nur/gi;
// if (regexp.test(name)) {
//     //yani bu test metodi bilan RegExpda yozilgan /nur/ texti global bor bo'lsa yani promptga yozilgan textni ichida nur bor bo'lsa true yo'q bo'lsa false qaytaradi
//     //yani agarda nameda /nur/ texti bor bo'lsa yani true bo'lsa logda welcome nur chiqadi yo'q bo'lsa false chiqsin (i borligi uchun katta kichkina harfmi farqi yo'q) yokida logda you are not admin texti chiqsin yani false o'rniga you are not admin texti chiqsin
//     console.log("Welcome Nur");
// } else {
//     console.log("you are not admin");
// }
/////////////////////////////////////////////////////////////////////////////

////probelham qo'yish mumkun
// const name = prompt("Name", "");
// const regexp = / /gi; //probelham qo'yish mumkun yani buni>>/ /ichiga hech narsa yozmasdan ochib qo'yilsa bo'sh katak bo'ladi yani endi promptga hech narsa yozmasdanham bitta bo'sh katak yozilsa welcome probel chiqaveradi agar bo'sh katak yozilmasa you are not popbel texti chiqadi
// if (regexp.test(name)) {
//     console.log("Welcome Probel");
// } else {
//     console.log("you are not popbel");
// }
//////////////////////////////////////////////////////////////////////////////

const name = prompt("Name", "");
const regexp = /\d/gi; //bu joyga d,w,s va D,W,S qiymatlariham qo'yib hammasini sinab ko'rish mumkun
console.log(name.match(regexp)); //yani logda raqamlarni ko'rsatadi yani modalga raqam yozilsa aynan yozilgan raqamlarni ko'rsatadi yani text ichida raqam bor yani butun textdan faqat raqamlarni ajratib olib massiv qilib qaytaradi

//   \d   RegExpda /d/ yozilsa faqat sonlarni izlaydi     d-number
//   \w   RegExpda /w/ yozilsa faqat hariflarni qidiradi  w-word
//   \s   RegExpda /s/ yozilsa bo'sh joyni qidiradi       s-space

//   \D   RegExpda /D/ not a number                       D-NaN
//   \W   RegExpda /W/ not a word yani harif yoki so'z emas
//   \S   RegExpda /S/ not a space yani bo'sh joy emas
//yani katta hariflardagi hususiyatlar kichkina harfilar hususiyatlarini teskarisi

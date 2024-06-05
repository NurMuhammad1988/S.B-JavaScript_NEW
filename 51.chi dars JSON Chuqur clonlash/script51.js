"use strict";
////JSON (JavaScript Object Notation)

////server hech qachon oddiy objectni qabul qilmaydi yani tushunmeydi
////serverga object yuborilsa har doim json formatda yuborilishi kerak

////objectni json filega o'girish
////JSON.stringify metodi
// const car = {
//     name: "bmw",
//     color: "red",
// };
// const objToJson = JSON.stringify(car)//yani stringify metodi objectni json failga o'giradi object qiymatlari doim ikkita qo'shtirnoq ichida bo'ladi>>>{"name":"bmw","color":"red"}<<<shu ko'rinish json filega ishora qiladi server esa doim va faqat shu ikkita qo'shtornoq ichidagi malumotlarni qabul qiladi
// console.log(objToJson);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// ////serverdan keladigan json formatdagi malumotni js tushadigan formatga o'girish
// ////jsonni object filega o'girish
// ////JSON.parse metodi
// const carr = {
//     name: "bmw",
//     color: "red",
// };
// const objToJsonn = JSON.stringify(carr); //yani bu holatda carr nomli o'zgaruvchi yaratildi va objToJsonn nomli yangi o'zgaruvchi yaratib JSON objecti stringify metodi bilan chaqirildi bu joyda stringify metodini parametriga carr objecti qo'yildi va stringify metodi carr objectini js filedan server tushunadigan ikkita qo'shtirnoqli>>>{"name":"bmw","color":"red"}objectga aylantirdi yani stringify metodi bilan serverga malumotlarni json format ko'rinishida jo'natish mumkun chunki server faqat json fileni yani ikkita qo'shtirnoq bilan yozilgan filelarni taniydi

// const jsonToObject = JSON.parse(objToJsonn); //bu holatda jsonToObject nomli o'zgaruvchi yaratilib unga JSON js objectini parse metodi bilan chaqirildi va parametriga jsonga aylantirilib serverga ketgan objToJsonn o'zgaruvchsi qo'yildi yani server faqat json qabul qiladi va json qaytaradi bu holatda parse metodi json fileni yana js tushunadigan filega aylantirdi (qo'shtirnoqlariga etibor ber>>>{ name: 'bmw', color: 'red' }//yanni serverdan qandaydur malumotlar kelganda albatta parse metodi bilan js filega yani objectga aylantirilishi kerak
// console.log(objToJsonn);
// console.log(jsonToObject);
//////////////////////////////////////////////////////////////////////////////////////////////////////

////Chuqur clonlash yani objectni ichidagi objectni clonlash JSON parse va JSON stringify metodlari bilan
// const carr = {
//     name: "bmw",
//     color: "red",
//     extra: {
//         //yani carr objectini icxhidagi local object OOP!
//         isAirbag: false,
//         tires: 5,
//     },
// };
// const clone = JSON.parse(JSON.stringify(carr)); //yani bu holatda clone deb nomlangan yangi o'zgaruvchi yaratib JSON objectini parse metodini chaqirdik bu parse metodi bu holatda ichma ich objectdan iborat carr objectni butunlay nusxalaydi parse metodini parametrida esa stringify metodi chaqirildi(shu joyiga izoh yo'q)??? //hullas js filedan json filega json filedan js filega aralashtirilib bir nimalar qilib hullas objectni ichidagi objectham clonlandi mana>>>{ name: 'bmw', color: 'red', extra: { isAirbag: false, tires: 10 } }
// clone.extra.tires = 10;
// console.log(clone); //{ name: 'bmw', color: 'red', extra: { isAirbag: false, tires: 10 } }//yani objectni ichidagi local objectham clonlandi
// console.log(carr);

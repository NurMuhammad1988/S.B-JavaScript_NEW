"use strict";

////Massiv metodlari
// //Massivni Map metodi //map metodi doim yangi massiv qaytaradi
// const car = ["MErs", "BmW", "RolLS-RoyCe"];
// const arr = car.map((item) => item.toLowerCase()); //=> bu belgi yani teng va katta belgilari callback funksiya degani yani return aftamatik tarzda yozilgan bo'ladi va bu funksiya intrigatsa qiladi yani cardagi har bir qiymatni//bu holatda car massividagi qiymatlarni map metodi bilan tolowercase metodi bilan hammasini kichkina harif qilindi lekin bu map yangiu massiv qaytaradi yani nusxa olib yangisini qaytaradi//yani yangi arr o'zgaruvchi yaratib arrga car massivinini map metodi bilan chaqirib itemlariga yani carni itemlarini tolowercase bilan hariflarini kichkina qildik bu holatda oddiy lowercaseni o'zi  bilanmas lowercaseni mapni parametrida chaqirib tolowercase ishlatildi shunda carni itemlari yangi massivda kichkina hariflarda qaytdi
// console.log(arr); //map metodi doim yangi massiv qaytaradi eski massivni qiymatini o'zgartirib
// //
// //yana yangi o'zgaruvchi ochmasdan bitta o'zgaruvchini o'zi bilan ishlash yani yangi massivda qaytarib berishini yahshiroq ko'rish
// let car = ["MErs", "BmW", "RolLS-RoyCe"];
// car = car.map((item) => item.toLowerCase());
// console.log(car);
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Massivni Filter metodi// filter metodiham massivni filter qilib doim yangi massiv qaytaradi
// const car1 = ["Mercedes-Benz", "bmw", "audi", "rolls-royce"];
// const arr1 = car1.filter((item) => item.length < 5); //yani car1 massivni filter metodi bilan chaqirildi va car1 ni itemlariga length metodi bilan car1ni qiymatlari ichidan 5 dan kichiklarini chiqarib ber deyildi shunda car1 massividagi uzuligi 5 dan kichkina bo'lgan qiymatlar yani harflar soni yani uzunligi 5 dan kichkina bo'lgan qiymatlar yani "bmw" va "audi" qiymatlarini chiqarib beradi yani yangi massivda chiqarib beradi
// console.log(arr1);
////
////yana yangi o'zgaruvchi ochmasdan bitta o'zgaruvchini o'zi bilan ishlash yani yangi massivda qaytarib berishini yahshiroq ko'rish
// let car1 = ["Mercedes-Benz", "bmw", "audi", "rolls-royce"];
// car1 = car1.filter((item) => item.length < 5);
// console.log(car1);
////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Massivni Some metodi boolean qiymat qaytaradi
// const arr2 = [1, "nur", false]
// console.log(arr2.some(item => typeof(item) === "number"));//some metodi agar arr2 massividagi qiymatlardagi malumot turlaridan birotasi bor bo'lsa true yo'q bolsa falseni ko'rsatadi masalan bu holatda arr2ni itemlarida typoefi yani malumot turlarini ichida number bor bo'lsa yani qattiy teng bo'lsa trueni agar arr2ni ichida number malumot turi yo'q bo'lsa falseni qaytaradi some metodini chaqirib qattiy tengmi deyilib ikkita qo'shtirniq yozilgandan yani malumot turi yozilmoqchi bo'lgndan jsdagi hamma malumot turlari kelib chiqadi yani default holatdagi malumot turlaridanham bilsa bo'ladiki some metodi agar massivda number malumot turi bor bo'lsa true bo'lmasa false qatradi yani some metodi mantiqiy boolean malumot turini qaytaradi yani bu holatda massivda bitta bo'lsaham number malumot turi bor bo'lsa true agar bo'lmasa false qaytaradi
////////////////////////////////////////////////////////////////////////////////////////////////////

////MassivniEvery metodiham boolean qiymat qaytaradi every metodi massivni hammasini tekshiradi va qattiy tengdan keyingi malumot turidan boshqa malumot turi bor bo'lsa false qaytaradi
const arr3 = [1, "nur", false];
//// const arr3 = [1,2,3,4,]//bu holatda every metodi trueni qaytaradi chunki massivdagi hamma malumot turi number
console.log(arr3.every((item) => typeof item === "number")); //yani bu holatda every metodi massivdagi har bir qiymatni tekshiradi va agar arr3 massividagi har bir qiymat number malumot turiga oid bo'lmasa false qaytaradi yani every metodi uchun massivdagi hamma qiymatlar number bo'lsagina true agar bittaham boshqa malumot turi bo'lsa false qaytaradi
///////////////////////////////////////////////////////////////////////////////////////////////////////

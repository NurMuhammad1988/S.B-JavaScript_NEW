"use strict";

//Massiv metodlari
//Massivni Map metodi //map metodi doim yangi massiv qaytaradi //map intiratsa metodi hissoblanadi(callback)
const car = ["MErs", "BmW", "RolLS-RoyCe"];
const arr = car.map((item) => item.toLowerCase()); //=> bu belgi yani teng va katta belgilari callback funksiya degani yani return aftamatik tarzda yozilgan bo'ladi va bu funksiya intrigatsa qiladi yani cardagi har bir qiymatni//bu holatda car massividagi qiymatlarni map metodi bilan tolowercase metodi bilan hammasini kichkina harif qilindi lekin bu map yangi massiv qaytaradi yani nusxa olib yangisini qaytaradi//yani yangi arr o'zgaruvchi yaratib arrga car massivinini map metodi bilan chaqirib itemlariga yani carni itemlarini tolowercase bilan hariflarini kichkina qildik bu holatda oddiy lowercaseni o'zi  bilanmas lowercaseni mapni parametrida chaqirib tolowercase ishlatildi shunda carni itemlari yangi massivda kichkina hariflarda qaytdi
console.log(arr); //map metodi eski massivni qiymatini o'zgartirib doim yangi massiv qaytaradi
//
//yana yangi o'zgaruvchi ochmasdan bitta o'zgaruvchini o'zi bilan ishlash yani yangi massivda qaytarib berishini yahshiroq ko'rish
let carr = ["MErs", "BmW", "RolLS-RoyCe"];
carr = carr.map((item) => item.toLowerCase());
console.log(carr);
//////////////////////////////////////////////////////////////////////////////////////////////////////

///Massivni Filter metodi// filter metodiham massivni filter qilib doim yangi massiv qaytaradi  //folter intiratsa metodi hissoblanadi(callback)
const car1 = ["Mercedes-Benz", "bmw", "audi", "rolls-royce"];
const arr1 = car1.filter((item) => item.length < 5); //yani car1 massivi filter metodi bilan chaqirildi va car1 ni itemlariga length metodi bilan car1ni qiymatlari ichidan 5 dan kichiklarini chiqarib ber deyildi shunda car1 massividagi uzuligi 5 dan kichkina bo'lgan qiymatlar yani harflar soni yani uzunligi 5 dan kichkina bo'lgan qiymatlar yani "bmw" va "audi" qiymatlarini chiqarib beradi yani yangi massivda chiqarib beradi
console.log(arr1);
//
//yana yangi o'zgaruvchi ochmasdan bitta o'zgaruvchini o'zi bilan ishlash yani yangi massivda qaytarib berishini yahshiroq ko'rish
let car2 = ["Mercedes-Benz", "bmw", "audi", "rolls-royce"];
car2 = car2.filter((item) => item.length < 5);
console.log(car2);
//////////////////////////////////////////////////////////////////////////////////////////////////////

//Massivni Some metodi boolean qiymat qaytaradi //some intiratsa metodi hissoblanadi(callback)
const arr2 = [1, "nur", false];
console.log(arr2.some((item) => typeof item === "number")); //some metodi agar arr2 massividagi qiymatlardagi malumot turlaridan birotasi bor bo'lsa true yo'q bolsa falseni ko'rsatadi masalan bu holatda arr2ni itemlarida typoefi yani malumot turlarini ichida number bor bo'lsa yani qattiy teng bo'lsa trueni agar arr2ni ichida number malumot turi yo'q bo'lsa falseni qaytaradi some metodini chaqirib qattiy tengmi deyilib ikkita qo'shtirniq yozilgandan yani malumot turi yozilmoqchi bo'lgndan jsdagi hamma malumot turlari kelib chiqadi yani default holatdagi malumot turlaridanham bilsa bo'ladiki some metodi agar massivda number malumot turi bor bo'lsa true bo'lmasa false qatradi yani some metodi mantiqiy boolean malumot turini qaytaradi yani bu holatda massivda bitta bo'lsaham number malumot turi bor bo'lsa true agar bo'lmasa false qaytaradi
//////////////////////////////////////////////////////////////////////////////////////////////////

//Massivni Every metodiham boolean qiymat qaytaradi every metodi massivni hammasini tekshiradi va qattiy tengdan keyingi malumot turidan boshqa malumot turi bor bo'lsa false qaytaradi //every intiratsa metodi hissoblanadi(callback)
const arr3 = [1, "nur", false];
//// const arr3 = [1,2,3,4,]//bu holatda every metodi trueni qaytaradi chunki massivdagi hamma malumot turi number
console.log(arr3.every((item) => typeof item === "number")); //yani bu holatda every metodi massivdagi har bir qiymatni tekshiradi va agar arr3 massividagi har bir qiymat number malumot turiga oid bo'lmasa false qaytaradi yani every metodi uchun massivdagi hamma qiymatlar number bo'lsagina true agar bittaham boshqa malumot turi bo'lsa false qaytaradi
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Massivni Reduce metodi bitta qandaydur qiymat qaytaradi //reduce intiratsa metodi hissoblanadi(callback)//bu holatda reduce metodi number malumot turi bilan bajarildi
const arr4 = [4, 32, 1, 3];
//                       0   +  4
//                       4   +  32
//                       36  +  1
//                       37  +  3
//                       40  +  0
const res1 = arr4.reduce((sum, current) => sum + current); //bu holatda arr4 o'zgaruvchidagi 4,32,1,3 qiymatlar yangi res1 o'zgaruvchiga reduce metodi bilan chaqirildi reduce metodi ikkita parametr qabul qiladi bu yerda birinchi parametriga sum va current yozildi va intiratsada sumni currentga qo'shish buyurildi shunda arr4 o'zgaruchi intrigatsa bo'lganda birinchi 0 ni aftamatik ravishda qo'yadi va currentga arr4ni 1 chi qiymatini qo'yadi va intrigatsa davom etib pastga tushganda sum 4 ga ayalanadi va current 32 ga va yana pastga tushganda sum 36 ga current qiymat novbatri bo'yicha 1 ga aylanadi va shu tartibda intrigatsa tugagancha davom  va javob ohirida 40 chiqadi yani reduce metodi massivdagi hamma qiymatlarni yuqoridagi tartibda qo'shib ohirida jami hosil bo'lgan qiymatni qaytaradi
console.log(res1);
////
const arr5 = [4, 32, 1, 3];
//                       10  +   4
//                       14  +   32
//                       46  +   1
//                       47  +   3
//                       50  +   0
const res2 = arr5.reduce((sum, current) => sum + current, 10); //reduce metodi ikkinchi parametriga default qiymatni qabul qiladi yani bu yerda 10 boshlang'ich qiymat hissoblanadi yani endi boshidagi nolmas 10 bo'ladi shunda javob 50 bo'ladi
console.log(res2);
//
//bu holatda reduce metodi string malumot turi bilan bajarildi
const arr6 = ["bmw", "mers", "audi"];
const res3 = arr6.reduce((sum, current) => `${sum}, ${current}`);
console.log(res3);

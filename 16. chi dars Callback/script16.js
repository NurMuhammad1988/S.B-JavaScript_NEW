"use strict";

// //Callback yani bu qaysidur belgilab qo'yiladigan funksya  ishga tushgandan keyin ishga tushadigan funksiya
// function first() {
//     //yani masalan loyihada shu funksiya birinchi bo'lib ishlashi kerak aks holda loyiha buzulib ketishi yoki juda kech ishlashi mumkun
//     //masalan bu joyga code yoziladi
//     setTimeout(() => {
//         //settimeout qilib bu birinchi ishlashi kerak bo'lgan funksiyani 1000 ms ga suniy kechiktirdik setTimeout funksiyasi vaqtlar bilan ishlaydi   //YANI MASALAN FIRST FUNKSIYASI BIRINCHI ISHLASHI KERAK EDI LEKIN TASSAVUR QILAMIZ BIRINCHI ISHLASHI KERAK BO'LGAN FIRST FUNKSIYASI SERVERDA KELAYOTGANDA NECHCHIDIR ML SIKUNNDA KELADI SHUNDA JS BIRINCHI FUNKSIYADAGI MALUMOTLAR SERVERDAN KELGANCHA IKKINCHI YANI SECONd FUNKSIYASINI CHAQIRIB ISHLATIB YUBORADI MASALAN JORIY HOLATDA RUN CODDA BIRINCHI BO'LIB SECOND FUNKSIYASI ISHLADI 1000 MS DAN KEYIN ESA IKKINCHI SECON FUNKSIYASI ISHLADI CHUNKI BROWSER CODNI 1 CHI QATORDAN BOSHLAB O'QIB KELADI shu sabab bu holat HATO YANI NOTO'G'RI HISSOBLANADI chunki kodlar ketma ket yozilgan masalan 1 chi 2 chi qator qilib run codedaham kodlar huddi shunday 1 chi 2 chi bo'lib ishlash kerak
//         console.log(1);
//     }, 1000);
// }
// function second() {
//     //masalan bu joyga code yozildi
//     console.log(2);
// }

// first(); // bu ikkinchi bo'lib ishladi  CHUNKI TIMEOUT FUNKSIYASI BOR!!!
// second(); //bu birinchi bo'lib ishladi

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //Callback yani bu qaysidur  funksiya ishga tushgandan keyin ishga tushadigan funksiya
// 1 chi sintaksis qisqasi
// function edu(subject, callback) {
//     //yani bu joyda ichida callback funksiyasi bor edu funksiya ishga tushgandan keyin callback funksiyasi ishga tushdi
//     console.log(`I want to teach ${subject}`);
//     callback(); //yani funksiyani ichiga funksiani chaqirib qo'ydik
// }
// edu("JavaScript", function () {
//     // bu yerda "JavaScript" birinchi parametr yani subject hissoblanadi ikkinchi parametrda esa ananim funksiya
//     //ananim funksiya bilan yozilgani
//     console.log("That`s great");
// });

////////

// //2 chi sintaksis
// function edu(subject, callback) {
//     console.log(`I want to teach ${subject}`);
//     callback(); // yani bu joyda subjectdagi object done funksiyasidan oldin kelayapti sabab  callback aslida birinchi i want to teach, thats great chiqishi kerak edi lekin subjectdagi object yani "JavaScript" bu joyda ikkinchi bo'lib kelayapti aslida esa 3 chi bo'lib kelishi kerak edi
// }
// function done() {
//     //ananim funksiyasiz yozilgani
//     console.log("That`s great");
// }
// edu("JavaScript", done);// yani callback funksiya hech qachon chaqirilmaydi chunki chaqirilsa aftamatik tarza ishlab ketadi shu sabab done dan keyin () qo'yilmadi done ni o'zi yozildi
//YANI CALLBACK FUNKSIYA

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function first(cb) {
    //code //yani suniy ravsishda huddi serverdan kechikib kelayotgan funksiyaga o'hshtilgan code
    setTimeout(() => {
        //suniy ravsishda huddi serverdan kechikib kelayotgan funksiyaga o'hshtildi
        console.log(1);
        cb();
    }, 1000);
}

function second() {
    //code
    console.log(2);
} //yani bir sikunddan keyinikkala funksiya birga ishladi

first(second); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!yani first funksiyasi birinchi bo'lib second funksiyasini ishlatdi callback funksiya yordamida shunda first funkiya serverdan ichidagi narsalarini yuklab kelguncha second funksiya kutib turdi va bir sikunddan keyin birga ishladi
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//run codega qaralsin!!! yani second funksiyasi first funksiyani kutib turib birga  ishladi yani second funksiyasi first funksiyani 1 ms kechikgan holatida kutib turib birga  ishladi tassavur qilamiz first funksiyasi serverdan keladi kelgancha esa 1 ms vaqt o'tadi shu vaqtda pastdagi qolgan funksiyalar ishlab ketmaydi serverdan keladigan first funksiyani kutib turadi aks holda loyiha bzulishi kerakli componentlar ishlamasligi stylelar sochilib ketishi mumkun bu vaqt orasiga biror narsaham qo'yish mumkun masalan kutib turadigan yuklanishga o'hshagan loading iconlar

//CALLBACKLAR
//callback qaysidur funksyani boshqa hamma funksiydan oldin ishlatish uchun kerak
//chunki serverdan keladigan malumot har doim kechroq keladi shu kelish jarayonida kutish bo'lib qoladi bu holatda sayt buzulib ketadi shu sabab callback funksiya ishlatiladi callback funksiya aynan qaysudir funksiyani birinchi ishlatadi mazkur holatda masalan loader funksiyani birinchi ishlatadi yani serverdan hamma malumotlar yetib kelguncha

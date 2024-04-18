"use strict";

//string malumot turi propeytisi va metodlari

// //length string malumot turini propertiysi
// const user = "Nur";
// console.log(user.length); //length propert hissoblanadi yani string malumot turini bittagin apropertiysi bor buham bo'lsa lenght hissoblanadi yani logda funksiya bilan birga chaqiriladi va funksiyda yozilgan string malumot turini necht aekanligini sanaydi yani uzunligini necht aelement borligini  sanaydi
// const arr = [1, 2, 3, 4];
// console.log(arr.length);//yani bu joyda 4 ta element borligini sanab berdi yani arrayni uzunligi 4 ta

///////////////////////////////////////////////////////////////////////////////////////////////
//
// const user = "Nur";
// const arr = [1, 2, 3, 4];
// console.log(user[2]);//yani bu joyda r chiqadi yani nurdai r ni yani 3 chi elementni oldi chunki noldan boshlanadi stringni ichidagi har qanday harifni shunday olish mumkun
// console.log(arr[2]);//javobi 3 chiqadi yani arraylarniham huddi shunday keraklisini belgilab alohida olish mumkun
//////////////////////////////////////////////////////////////////////////////////////////////////

// //metodlar toUpperCase() string malumot turini metodi
// const user = "nur";
// console.log(user.toUpperCase()); //toUpperCase() bu metod user o'zgaruvchidagi string malumot turi bo'lgan nurni hammaharifini katta harif qilib beradi metodlar huddi funksiya kabi chaqirilishi kerak manashunday>>>()
// const toUpperCaseUser = user.toUpperCase(); //yani toUpperCase() metodi user o'zgaruvchidagi asosiy qiymatni o'zgartirmaydi yani toUpperCase metodi yani qiymatni olib keladi yangi qiymatni esa toUpperCaseUser o'zgaruvchiga olib qaytadan ishlash mumkun// bu massivdaham ishlaydi
// console.log(toUpperCaseUser);
// console.log(user);//bu asosiy chaqirilgani bunda hech narsa o'zgarmaydi chunki toUpperCase() metodidangi qiymatni o'zgartiradi asosiy qiymatni emas
////////////////////////////////////////////////////////////////////////

//metodlar toLowerCase() string malumot turini metodi
// const user1 = "NUR";
// console.log(user1.toLowerCase()); //toLowerCase() yani string malumot turini hamma hariflarini kichkina harf qilib beradi
// // const toUpperCaseUser1 = user1.toUpperCase();
// // console.log(toUpperCaseUser1);
// console.log(user1); //bu asosiy chaqirilgani bunda hech narsa o'zgarmaydi chunki toUpperCase() metodidangi qiymatni o'zgartiradi asosiy qiymatni emas
/////////////////////////////////////////////////////////////////////////////////

// //metodlar indexOf() yani string malumot turi ichidan kerakli harifni izlaydigan stringni metodi
// const greating = "Hello world"
// console.log(greating.indexOf("w"));//yani indexOf() metodi qavus ichiga qaysi harf yozilsa o'sha harifni o'z o'zgaruvchsi ichidan izlab nechchinchi raqamda ekanligini aytib beradi masalan bu joyda w harifi 6 chi joyda tuript agar o'zgaruvchi ichida izlangan harf bo'lmasa -1 javobini qaytaradi bu esa falsega teng hissoblanadi //bu massivdaham ishlaydi
////////////////////////////////////////////////////////////////////////////////

// // metodlar slice() metodi yani string malumot turini metodi
// const greating = "Hello world";
// console.log(greating.slice(6, 11)); //slice() yani kesib olish metodi o'zgaruvchi ichidagi string malumot turini indexsiga qarab kerakli joyini kesib olish yani indexsiga yani raqamiga qarab 6 chi harf bilan 11 chi harf orasidagi hariflarni kesib oldi yani  world ni  agar 0 bilab 5 belgilansa shularni orasida bo'lgan hello ni qiriq oladi
// console.log(greating.slice(-6, -1));//yani minus bilanham ishlatish mumkun shunda ohiridan sanab keladi masalan worldni d harfidan hissoblab qirqadi
////////////////////////////////////////////////////////////////////////////////////

// metodlar substring() metodi yani string malumot turini metodi
// const greating = "Hello world";
// console.log(greating.substring(2,11)); //substring() slice metodi bilan bir hil faqat bitta farqi bor substring - minusni qabul qilmaydi

//yana substr() metodiham bor juda kam ishlatiladi va eski hissoblanadi
////////////////////////////////////////////////////////////////////////////////


//number malumot turi metodlari

// //numberni math objecti bilan round() metodi
// const num = 8.5
// console.log(Math.round(num));//math bu yerda global object hissoblanadi yani jsda math matematik amalyotlar uchun ishlatiladigan global object hissoblanadi round metodini ishlatish uchun parametiriga ishlatilishi kerak bo'lgan o'zgaruvchi chaqiriladi mathni round metodi esa 8.8 ni 9 qilib beradi yani qoldiq son qoldirmaydi qoldiq beshta bo'lsa 9 qilib eradi agar 4 ta bo'lsa 8 qilib beradi
////////////////////////////////////////////////////////////////////////////////


// //number malumot turi metodlari parseInt()
// const borderWidth = "13.8px"
// console.log(parseInt(borderWidth));//parseInt()yani bu metod qoldiqlarni stringni number qilib hariflarni olib tashlab yani faqat numberni qoldirib numberdanham qoldiqlarni olib tashlab faqat to'liq sonni olib beradi
////////////////////////////////////////////////////////////////////////////////

// //number malumot turi metodlari parseFloat()
// const borderWidth = "13.8px"
// console.log(parseFloat(borderWidth));//yani parseFloat() metodi o'zgaruvchidagi string malumot turida yozilgan numberni number malumot turiga aylantiradi va qoldiqlarga teginmasdan 13.8 mi shuni o'zini olib beradi
////////////////////////////////////////////////////////////////////////////////

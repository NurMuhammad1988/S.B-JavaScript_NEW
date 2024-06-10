"use strict";
////Promise yani vada

// const isFrendCome = false;
// const meetingRequest = new Promise((resolve, reject) => {
//     if (isFrendCome) {
//         const msg = "Friend I'm there";
//         resolve(msg);
//     } else {
//         const err = "I can't come there";
//         reject(err);
//     }
// });
// meetingRequest
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("I'm colling you"));
// // console.dir(meetingRequest);////objectligini ko'rish uchun yozildi
// ////promise object hissoblanadi promis ikkita parametr qabul qiladi yani resolve va reject ikkalasiham qanaqadur qiymat qaytaradi  so'rov omadli bo'lsa resolve qaytaradi omadsiz bo'lsa reject bo'ladi //yani bu holatda isFrendCome nomli o'zgaruvchi yaratilib unga false qiymati berildi (boolean) va meetingRequest nomli o'zgaruvchi yaratilib unga Promisi js objecti new kalit so'zi bilan chaqirildi Promisi objecti vada manosini beradi yanni Promise objecti ikkita parametr qabul qiladi resolve va recect resolve meetingRequest chaqirilganda ohirida meetingRequest. nuqta qo'yilsa promisni parametrlari chiqadi masalan bu holatda .then resolvni nazarda tutadi .catch  rejectni nazarda tutadi .finally esa natija resolve(omadli) yoki recject(omadsiz) bo'lgan taqdirdaham yani nima bo'lgan taqdirdaham qanaqadur natijani beradi //yani bu holatda promise objecti chaqirilib parametriga o'zini ikkita qiymati resolve va reject chaqirildi va agar isfriendcome o'zgaruvchida holat resolve yani omadli bo'lsa resolve(msg)>>>"Friend I'm there" yokida omadsiz bo'lsa reject(err)>>"I can't come there" berildi va promise chaqirilgan meetingRequest objectidan keyin nuqta qo'yilib promisni chaquruvchi metodlar ishga solindi masalan then resolveni yani omadlini parametri hissoblanadi chunki promise chaqirilganda parametrida birinchi resolve turipti masalan .thendan keyin agar omadli bo'lsa qanday habar chiqishi aytildi yani (msg) .catch esa rejectni yani omadsizni parametri hissoblanadi promise chaqirilganda parametrida ikkinchi reject turipti masalan .catchdan keyin agar omadsiz bo'lsa qanday habar chiqishi aytildi yani (err) va ohirgi parametr finally hissoblanadi yani bu parametr tepadagi then va catch parametrlari ishlagan va ishlamagan taqdirdaham bitta javobni qaytaradi masalan bu holatda logda "I'm colling you" //Yani bu promise objecti server bilan ishlash uchun judaham kerak masalan serverdan malumot kelayotganda qandaydur holatlar sodir bo'lsa masalan server javob bermasa yoki kechiksa va hakozo holatlarda shu promise objecti bilan userga kerakli hodislarni ilish mumkun
// ////const isFrendCome = true; qilinsa "Friend I'm there" javobini yani resolveni .then javobidagi msg ni olish mumkun
///////////////////////////////////////////////////////////////////////////////////////////////////////////

////agar Promise objectni ishlatilmasa kodlarni qanday yozilishi



///////////////////////////////////////////////////////////////////////////////////////////////////////////
////W3Schools dan olingan kod
// setTimeout(function() { myFunction("I love You !!!"); }, 9000);
// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

"use strict";
////Promise metodlari all() va race() metodlari
////Promise objectini all metodi

const request1 = (time) => {////yani oddiy const o'zgaruvchisi callback bilan yozildi
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time); //bu holatda settimeoutni keyingi holatdaham qayta qayta ishlatadigan qilib kod qisqa usulda yozildi
    });
};
request1(1000).then(() => console.log("Request 1000 ms"));
request1(2000).then(() => console.log("Request 2000 ms"));
request1(3000).then(() => console.log("Request 3000 ms"));
//// har bir so'rov novbati bilan keldi bu oddiy holatda chaqirilishi yani all metodisiz ishlangadagi holati
///////////////////////////////////////////////////////////////////////////////////////////////

const request2 = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};
Promise.all([request2(1000), request2(2000), request2(3000)]).then(() =>
    console.log("All here1")
);////Promise objectini all() metodi Promise.all() array qabul qiladi va noldan hissoblaydi agar serverdan so'rovlar bitta emas bir nechta bo'lganda serverdan keladigan javoblarni kutib turib hammasi tayyor holatga kelgandan keyingina .thenni ishlatadi  maslan bu holatda 3 ta requestni kutib 3 sekunddan keyin all here textini berdi yani .thenni ishlatdi serverdan keladigan 3 ta so'rovni javobini kutib uchchalasiniham bitta qilib berdi bu server bilan ishlashda agar serverlar ko'proq bo'lsa masalan serverlar har hil linkda yani manzilda bo'lganda juda kerak mavzu
///////////////////////////////////////////////////////////////////////////////////////////////

////Promise objectini race metodi
const request3 = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};
Promise.race([request3(1000), request3(2000), request3(3000)]).then(() =>
    console.log("All here2")
);////yani race metodi (poyga) Promiseni race metodi bir nechta serverlardan keladigan so'rovlarni qaysi biri birinchi kelsa o'shani ishlatadigan metod hissoblanadi bu holatda All here texti yani .then 3 sekunddan keyinmas 1 sekunddan keyin ishladi chunki so'rovlarni birinchisi bir sekunddan keyin ishga tushadigan qilib yozilgan

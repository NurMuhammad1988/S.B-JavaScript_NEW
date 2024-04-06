"use strict";

const numberOfSeries = +prompt("Nechta serial ko'rdingiz?", ""); //+ promptda + belgisi javoblar asosan number malumot turi bo'lganligi sababli qo'yildi

const seriesDB = {
    count: numberOfSeries, //yani birnchi nechta serial ko'rdingizsavolini javobini shu object ichiga qiymat sifatida berib qo'yildi shunda logga savolga berilgan javob chiqadi yani numberOfSeriesda berilgan savolni javobi shu countni ichiga tushadi // bu +prompt bo'lgani uchun agar javob number malumot turi bo'lmasa NaN chiqadi yani not a number
    series: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("Ohirgi ko'rgan serialingiz?"),
    b = prompt("Nechchi baho berasiz?"),
    c = prompt("Ohirgi ko'rgan serialingiz?"),
    d = prompt("Nechchi baho berasiz?");

seriesDB.series[a] = b; //objectga tashqarida hususiyat berilganda masalan bu holatda [a] shunday to'rtburchak qavus ichida berilishi kerak yani [a] va [c] o'zgaruvchilardagi savollarga javoblar seriesDBni ichidagi series objectiga tushurib olindi va b va d o'zgaruvchilarga tushgan javoblarham seriesDBga tenglashtirib qo'yildi
seriesDB.series[c] = d; //objectga tashqarida hususiyat berilganda masalan bu holatda [a] shunday to'rtburchak qavus ichida berilishi kerak yani [a] va [c] o'zgaruvchilardagi savollarga javoblar seriesDBni ichidagi series objectiga tushurib olindi va b va d o'zgaruvchilarga tushgan javoblarham seriesDBga tenglashtirib qo'yildi
//shunda bitta o'zgaruvchini ichiga yana 3 ta jami 4 ta o'zgaruvchi ochildi

/////////misol
const theif = {
    jacket: "black",
};
const property = "age",
    value = 30;
theif[property] = value;
console.log(theif);
/////////misol

console.log(seriesDB);

////////////////////////////////////////////////////////////////////////////

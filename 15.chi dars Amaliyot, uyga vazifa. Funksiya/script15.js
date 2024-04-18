"use strict";
let numberOfSeries;

function startApp() {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?", ""); //+ promptda + belgisi javoblar asosan number malumot turi bo'lganligi sababli qo'yildi
}
startApp()
const seriesDB = {
    count: numberOfSeries, //yani birnchi nechta serial ko'rdingiz savolini javobini shu object ichiga qiymat sifatida berib qo'yildi shunda logga savolga berilgan javob chiqadi yani numberOfSeriesda berilgan savolni javobi shu countni ichiga tushadi // bu +prompt bo'lgani uchun agar javob number malumot turi bo'lmasa NaN chiqadi yani not a number
    series: {},
    actors: {},
    genres: [],
    private: false,
};
for (let i = 0; i < 2; i++) {
    //yani tsikil faqat 2 martta ishlaydi 0 va 1
    const a = prompt("Ohirgi ko'rgan serialingiz?"),
        b = prompt("Nechchi baho berasiz?"); //yani tsikl yordamida savollarni ikki marttadan berildi yani a o'zgaruvchidagi savol berildi javobi esa  seriesDB.series[a] = b; ga verib qo'yildi yani a va b o'zgaruvchidagi savollar seriesDB ni ichidagi seeies objectiga berib qo'yildi shunda user savollarga javob berganda javoblari seriesDBni ichidagi series objectiga borib tushadi

    if (a != null && b != null && a != "" && b != "") {
        //agarda a o'zgaruvchini javobi null bo'masa va b o'zgaruvchini javobiham null bo'masa va a o'zgaruvchiniham javobi "" bo'lmasa va b o'zgaruvchiniham javobi "" bo'lmasa seriesDBni ichidagi seriesga chaqirilgab a va b o'zgaruvchilari chaqirilib logda Done chiqsin yoki logda error chiqsin va savol orqaga qaytsin yani takrorlansin bu kodlar 4 qator pastda yozilgan
        seriesDB.series[a] = b; //objectga tashqarida hususiyat berilganda masalan bu holatda [a] shunday to'rtburchak qavus ichida berilishi kerak yani [a] va [c] o'zgaruvchilardagi savollarga javoblar seriesDBni ichidagi series objectiga tushurib olindi
        console.log("Done");
    } else {
        //yani userni savollarga javob berishga majbur qilindi aks holda error chiqadi agar savollarga to'liq javob bersda done chiqadi
        console.log("Error");
        i--;
    }
}

if (seriesDB.count < 5) {
    //yani seriesDB o'zgaruvchi ichidagi countda  numberOfSeries o'zgaruvchsi bor yani count: numberOfSeries o'zgaruvchsidagi +prompt bilan berilgan savolni javobi seriesDB o'zgaruvchini ichidagi countga tushadi shu uchun agar seriesDB.countni javobi 5 dan kichik bo'lsa kam serial ko'ripsiz
    console.log("Kam serial ko'ripsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
    //yani agar seriesDB countga tushaydigan javob 5 ga teng yoki 5 dan katta va yoki 10 dan kichik bo'lsa
    console.log("Siz classik tomoshabin ekansiz");
} else if (seriesDB.count >= 10) {
    console.log("Siz serialchi zvezda ekansiz");
}else{
    console.log("Error");//error baribir ishlamaydi chunki if (seriesDB.count < 5) deyilganda 5 dan kichik har qanday son deyilgan yani +prompt qilib birinchi savol berilgan agar javob number malumot turi bo'lmasa aftamatik tarzda javob nol bo'ladi yani nolham agar user savollargga javob berishda number string turdagi javoblargaham har qanday javobni bergan taqdirdaham 5 dan kichik deganda nolham raqam hissoblanadi AGAR   vatsikilda savollarga javob berish userga majburiy qilib qo'yilgan
}

console.log(seriesDB);

////////////////////////////////////////////////////////////////////////////

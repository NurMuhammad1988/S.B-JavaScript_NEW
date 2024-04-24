"use strict";
let numberOfSeries; //global o'zgaruvchi yani buni pastda hohlagancha o'zgartirrish boshqa funksiyalarham qo'shish mumkun

function startApp() {
    numberOfSeries = +prompt("Nechta serial ko'rdingiz?", ""); //+ promptda + belgisi javoblar asosan number malumot turi bo'lganligi sababli qo'yildi
    while (
        //yani while if elsni boshqacha ko'rinishi
        numberOfSeries == "" ||
        numberOfSeries == null ||
        isNaN(numberOfSeries) //isNaN()bu metod yani javob agar number bo'lmasa javobni qabul qilmaydi yani odalda faqat raqamni qabul qiladi
    )
        //yani agar numberOfSeriesdagi savolni javobi "" bo'sh katak bo'lsa yani ok bosgan bo'lsa yokida null bo'lsa yani otmenni bosgan bo'lsa yokida isNaN bo'lsa yani javob raqam bo'lmasa yani oddiy harif bo'lsa ogohlantirish bilan savolni qaytadan berish//SHunda user modalda ochilgan savolga javob berishga majbur qilinadi aks holda saytda boshqa ish harakatini qila  olmaydi
        numberOfSeries = +prompt(
            "Nechta serial ko'rdingiz? savoliga javob bermadingiz Nechta serial ko'rdingiz?",
            ""
        );
}
startApp();
const seriesDB = {
    count: numberOfSeries, //yani birnchi nechta serial ko'rdingiz savolini javobini shu object ichiga qiymat sifatida berib qo'yildi shunda logga savolga berilgan javob chiqadi yani numberOfSeriesda berilgan savolni javobi shu countni ichiga tushadi // bu +prompt bo'lgani uchun agar javob number malumot turi bo'lmasa NaN chiqadi yani not a number
    series: {},
    actors: {},
    genres: [],
    private: false,
};

function rememberMySeries() {
    //yani for tsikli funksiya ichiga yozildi masalan endi bu funksiyani boshqa har qanday joyda ishlatish kerak bo'lsa shunchaki chaqirib qo'yilsa bo'ldi
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
}
rememberMySeries();

function detectLevelSeries() {
    //yani userni nechta serial ko'rganligi haqidagi savollarga javobiga qarab nechta serial ko'rganligini aniqlab beruvchi funksiya buniham endi har qanday joyda chaqirib ishlatish mumkun
    ////yani funksiya ichiga yozildi masalan endi bu funksiyaniham boshqa har qanday joyda ishlatish kerak bo'lsa shunchaki chaqirib qo'yilsa bo'ldi
    if (seriesDB.count < 5) {
        //yani seriesDB o'zgaruvchi ichidagi countda  numberOfSeries o'zgaruvchsi bor yani count: numberOfSeries o'zgaruvchsidagi +prompt bilan berilgan savolni javobi seriesDB o'zgaruvchini ichidagi countga tushadi shu uchun agar seriesDB.countni javobi 5 dan kichik bo'lsa kam serial ko'ripsiz
        console.log("Kam serial ko'ripsiz");
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
        //yani agar seriesDB countga tushaydigan javob 5 ga teng yoki 5 dan katta va yoki 10 dan kichik bo'lsa
        console.log("Siz classik tomoshabin ekansiz");
    } else if (seriesDB.count >= 10) {
        console.log("Siz serialchi zvezda ekansiz");
    } else {
        console.log("Error"); //error baribir ishlamaydi chunki if (seriesDB.count < 5) deyilganda 5 dan kichik har qanday son deyilgan yani +prompt qilib birinchi savol berilgan agar javob number malumot turi bo'lmasa aftamatik tarzda javob nol bo'ladi yani nolham agar user savollargga javob berishda number string turdagi javoblargaham har qanday javobni bergan taqdirdaham 5 dan kichik deganda nolham raqam hissoblanadi AGAR   vatsikilda savollarga javob berish userga majburiy qilib qo'yilgan
    }
}

detectLevelSeries();

function showDb(hidden) {
    //shu joyiga tushunmadim???????????????
    if (!hidden) {
        console.log(seriesDB); //bu saytni asosiy ishlatib turgan o'zgaruvchi
    }
}
showDb(seriesDB.private); //yani showDb chaqiriliganda seriesDB.private birga keladi

function writeGenres() {
    for (let i = 0; i <= 2; i++) {
        const genre = prompt(`Yahshi ko'rgan janiringiz? ${i + 1}`);
        seriesDB.genres[i] = genre;
    } //boshqacha sintaksisiham bor masalan>>>
    //for (let i = 1; i <= 3; i++) {
    //const genre = prompt(`Yahshi ko'rgan janiringiz? ${i}`);
    //seriesDB.genres[i - 1] = genre;//shunda user uchun baribir savol 1 raqamidan boshlanadi
    // }
} //yani writeGenres degan funksiya yaratildi(kerak bolsa boshqa joydaham shu funksiyani chaqirib qayta qayta ishlatish mumkun) writeGenres funksiyasida for tsikli ochilib unga (let i = 0; i <= 2; i++) qilib uch martta savol berish buyurildi genre degan local o'zgaruvchi ochib prompt bilan becetni ichiga Yahshi ko'rgan janiringiz? deb uch martta so'ralish buyurildi va ${i + 1} qilib salov user uchun modalda noldanmas 1 dan boshlanishi buyurildi va seriesDb.genres[i] = genre qilib seriesDb o'zgaruvchi ichidagi countdagi asosiy let o'zgaruvchi ichidagi genres massiviga intrigatsa qilib genresni genre o'zgaruvchiga teng qilib qo'yildi shunda Yahshi ko'rgan janiringiz? degan savolga user tomondan berilgan javoblar shu seriesDb o'zgaruvchi ichidagi genres arrayiga yani massiviga birib tushadi konsolda javoblarni ko'rish mumkun

//// kodnisal qisqaroq sintaksisi>>>>
//for (let i = 0; i <= 2; i++) {
//seriesDB.genres[i] = prompt(`Yahshi ko'rgan janiringiz? ${i + 1}`);
//}

writeGenres();
////////////////////////////////////////////////////////////////////////////

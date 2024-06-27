"use strict";
////BU LOYIHA BUTUNLAY TUGAGANDAN KEYIN HAMMA KODLARNI JS VA CSS KODLARNI HTMLGA SOLISHTIRIB LOYIHANI 100 FOIZ TUSHUNMAGANCHA BOSHQA DARSGA O'TMA YANI DARSDA TUSHUNMASANG BOSHQA JOYDAN IZLANIB BO'LSHAMAM  LOYIHANI 100 FOIZ TUSHUNIB BO'LGANDAN KEYINGINA BOSHQA DARSGA O'T
import clas from "../modules/class";
import form from "../modules/form";
import loader from "../modules/lodaer";
import modal, { openModal } from "../modules/modal"; //importni eng qisa yo'li aftamatik qo'yib beradi
import slider from "../modules/slider";
import tab from "../modules/tab";
import timer from "../modules/timer";

window.addEventListener("DOMContentLoaded", () => {
    //yani butun window bo'yicha DOMContentLoaded hodisasi qo'shildi yani html DOMdocumentlar butunlay ochilib bo'lgandan keyingina js kodlarimiz ishlaydi
    const modalTimerId = setTimeout(
        () => openModal(".modal", modalTimerId),
        5000 //yani bu holatda  modalTimerId o'zgaruvchisiga clearinterval berib qo'yildi yani bu clearinterval 5000 milli sekunddan keyin modalni sekin ishlatadi//////yani bu "hidden" holatida modal oyna ochilganda bodyga diynamic tarzda ovwerflow css classi berildi yani modal chiqgandan keyin orqasini ko'rinmeydigan yanaham to'g'rirog'i qimillameydigan qiladi yani scrollni hidden qiladi yani sayt qimirlamaydi////
    ); ////IQ above the SKY!!!

    clas();
    form("form", modalTimerId); // yani modalTimerId o'zgaruvchi formgaham berib qo'yildi yani form.jsdagi form functionni parametrida chaqirilgan/yuborilgan
    loader();
    modal("[data-modal]", ".modal", modalTimerId); //COMMENTLARI MODAL,JSda
    
    slider({
        container: ".offer__slider",
        nextArrow: ".offer__slider-next",
        prevArrow: ".offer__slider-prev",
        slide: ".offer__slide",
        totalCounter: "#total",
        currentCounter: "#current",
        wrapper: ".offer__slider-wrapper",
        field: ".offer__slider-inner",
    });
    tab(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        "tabheader__item_active"
    );
    timer(".timer", "2026-12-31");

    ////webpacke kutubhonasi bilan script78.js filedagi loyihani uzun kodini har bir ishga aloqador funksiyalarni alohida alohida modullarga ajratib chiqildi endi dastur real loyihaga o'hshadi yani webpacke yuklanganda dist papka bilan keladi va disk papkada webpacke kutubhonasi bundle jsda hamma kodlarni tartiblab ishlatib beradi va asosiy script78.js fileda yuqoridagi kabi chaqiriladi yani require funksiyasi bilan chaqiriladi window.addEventListener("DOMContentLoaded" ichiga yozilishini sababi endi hamma kodlar modulga ajratilgan bo'lsada shu window.addEventListener("DOMContentLoaded"ni ichida ishlasa doimgiday ishlayveradi yani birinchi html csslar ochilib bo'lgandan keyingina ichidagi modullarga bo'lingan kodlarni ishlatadi

    //// Webpack
    ////////////////////////////////////////////////
    ////npx webpack //endi webpacketni ishlatish uchun loyihani ochganda npx webpack buyrug'ini yozish kerak
    /////////////////////////////////////////////////
    ////npx json-server --watch db.json //db.jsonni ishlatish uchun json-server npm packeti skachat qilingan shu sabab endi xamppda har safar bu loyiha ochilganda npx json-server --watch db.json shu buyruq bilan ochilishi kerak LEKIN AGAR XAMPP LOCAL SERVER PORTI BO'SH BO'LSA YANI XAMMPNI SAYTIDA DASHBOARDDA BOSHQA LINK BO'LMASA YANI BO'SH BO'LSA  SERVER LOCAL BO'LIB ISHLAYVERADI LEKIN HAFSIZ BO'LMAYDI
    ////Webpack

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!LOYIHA BUTUNLAY TUGAGANDAN KEYIN OHIRGI DARSDAN KEYIN ALOHIDA TAYYORLAB CHERNAVIK CODLARNI UDALIT QILIB FAQAT AMALDA ISHLAB TURGAN KODLARNI YAHSHILAB QAYTADAN O'QIB TUSHUNIB COMMENTLARINI YAHSHILAB TEKSHIRIB TO'LDIRIB GITHUBGA ALOHODA JOYLA NETLIFYGAHAM
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    ////PASTDAGI 60 CHI VA 64 CHI DARSLAR LOYIHADA QAYTADAN DARSLARDA QILINGAN SHUNING UCHUN WEBPACK, CONFIG DARSIDA modules PaPKaGa QO'SHILMADI LEKIN BULAR DARSLIK BO'LGANI UCHUN ASOSIy JS FILENI O'ZIDA QOLDIRILDI
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //60. chi dars  (Web loyiha 12 chi darsi) JSON Server
    ////server-json bilan ishlashni darsi shu loyihadan foydalanib shunchaki yozib turildi
    // fetch("http://localhost:3000/menu")
    //     .then((data) => data.json())
    //     .then((res) => console.log(res));
    // ///fetch metodi bilan db.json filedan local server sifatida foydalanildi
    // //60. chi dars  (Web loyiha 12 chi darsi) JSON Server
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //64.chi dars (Web loyiha 16 chi darsi) Slider
    //Slider
    // const slides = document.querySelectorAll(".offer__slide"), //massiv qaytaradi yani offer__slide classlari 5 ta //htmlda offer ona divini ichida 5 ta odder__slide classlari bor ichida 5 ta card bor img descrepshini bilan
    //     next = document.querySelector(".offer__slider-next"),
    //     prev = document.querySelector(".offer__slider-prev"),
    //     total = document.querySelector("#total"),
    //     current = document.querySelector("#current"); //sliderga aloqador html documentlar jsga chaqirib olindi
    // let slideIndex = 1;
    // showSlides(slideIndex); //slideondex o'zgaruvchi showSlides funksiyasini  parametrida chaqirilidi yani bu showSlides bilan slideIndex bir biriga ulandi
    // if (slides.length < 10) {
    //     //agar slidesni uzunligi 10 dan kichik bo'lsa total yani htmldagi default 5 ni oldiga 0 va undan keyin slidesni uzunligi qo'yildi yani shunda htmldagi total classi bor spanda avval yozilgan default qiymatlar dynamic tarzda qo'yildi va totaldagi oddiy html qiymatlar o'chirildi(yani total classi bor spanda default qiymatlar yozilgandi yani sliderni sonini ko'rsatib turgandi)
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     //yokida total slidesni uzulgi dynamic qo'shilsin  yani total classi bor spanda default qiymatlar yozilgandi yani sliderni sonini ko'rsatib turgandi endi shu raqamlar dynamic tarzda keladi htmlda spandagi default holatda yozilgan raqamlar o'chirildi shundaham dynmaic keldi
    //     total.textContent = slides.length;
    // }
    // function showSlides(index) {
    //     if (index > slides.length) {
    //         //bu joyga indexni qo'yilishiga sabab slides foreach qilingan shu sabab asosan slides bor joyda index deyilganda slidesni massivlar indexlari tushunladi //agarda index yani showslides funksiyadagi indexlar ko'p bo'lsa slidesdan yani slidesda massiv bor htmldagi beshtda offer__slide classlari massiv holatida kelgan yani indexlar yani massivlarni uzunligi yani soni ko'p bo'lsa  slidesni ichidagi massivlaridan(yani umuman massivlar sonidan)ko'p bo'lsa slideIndex o'zgaruvchini qiymati 1 ga teng bo'lsin bu yerda uzunlik 5 ga teng shunda oltinchi martta bosilganda birinchi elementga qaytib qoladi va yana qaytadan birdan beshgacha davom etadi
    //         slideIndex = 1;
    //     }
    //     if (index < 1) {
    //         //yokida index 1 dan kichkina bo'lsa yani 0 bo'lib qolsa slideindex o'zgaruvchi teng bo'lsin slides o'zgaruvchini uzunligiga yani agar slider orqaga bosilsa va nol bo'b qosa slidesni uzunligiga teng bo'lsin deyildi yani shunda orqaga bosilganda noldan naryoqga o'tmasdan yana umumiy uzunlikga yani beshga o'tib qolish buyurildi shunda sllider orqaga bosilgandaham noldan keyin yana beshga qaytib qoladi
    //         slideIndex = slides.length;
    //     }
    //     slides.forEach((item) => (item.style.display = "none")); //slides bu holatda massiv shu uchun foreach qilinepti//slides o'zgaruvchida chaqirilgan offer__slide classlarini (5ta) itemlariga yani qiymatlariga dynamic tarzda display none css classini berdik shunda htmldagi 5 ta offer__slide classini hammasi display none bo'lib ko'rinmay turipti hozircha endi faqat bitta slider yani birinchi slider kerak yani htmldagi birinchi slider kerak defaul holat uchun
    //     slides[slideIndex - 1].style.display = "block"; ////yuqorida   showSlides(slideIndex); qilib slideIndex o'zgaruvchi showslides funksiyasiga ulab qo'yilgan ////slides massiviga yani htmldan kelgan 5 ta offer__slide classlari bor  slides o'zgaruvchiga yuqoridagi qiymatida 1 bor slideIndex o'zgaruvchi massiv qilib chaqirib olindi va -1 yani dasturlashda sonlar nodan boshlanadi shu sabab -1 nol degani bo'ladi bu holatdagi -1 htmldan kelgan slidesni 1 chisini ifoda qiladi yani shu birinchi elementga default qilib dynamic tarzda display block classi berildi yani shunda htmldagi 5 ta offer__slide classlari bor bo'lsaham faqat birinchisi defaul bo'lib turadi endi shu showSlides funksiyasi ishga tushganda birinchi hama sliderlarni display none qiladi va displayda faqat birinchi slider ishga tushib default holatda bo'lib turadi
    //     if (slides.length < 10) {
    //         //////agar slidesni uzunligi 10 dan kichik bo'lsa current yani htmldagi default 3 ni oldiga 0 va undan keyin slidesni uzunligi qo'yildi yani shunda htmldagi current classi bor spanda avval yozilgan default qiymatlar dynamic tarzda qo'yildi va totaldagi oddiy html qiymatlar o'chirildi(yani total classi bor spanda default qiymatlar yozilgandi yani sliderni sonini ko'rsatib turgandi)//yani currentda birinchi qiymat turadi bu holatda birinchi qiymat slideIndexni qiymati yani 1 oldiga  nol dynamic qo'yildi slideIndexga esa slides ulangan
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }
    // function plusSlides(index) {
    //     showSlides((slideIndex += index));
    //     ////bu holatda plusslider funksiyasi yuqoridagi showslides funksiyani ishga tushuradi va parametrida yuqoridagi qiymatida 1 bor slideIndex o'zgaruvchiga endi birmas boshqa indexlarniham qo'shadi yani qolgan 4 ta indexniham qo'shadi chunki slideIndex o'zgaruvchini nolinchi elementi showSlides o'zgaruvchida chaqirilgan endi plusSlider funksiyasi chaqirilganda sliderlar pilus minus bo'lib o'zgaradi shu sabab plus sliderga index berilgan yani
    // }
    // next.addEventListener("click", () => {
    //     plusSlides(1);
    //     ////bu holatda htmldan chaqirilgan next yani bossa keyingi sliderga o'tish uchun yaratilgan o'ng tomonga strelkasi bor .offer__slider-next classiga hodisa ilinepti yani .offer__slider-next classiga yani o'ng strelkaga click hodisasi sodir bo'lganda plusSlider funksiyasi ishga tushsin va plussliderni indexi yani ichidagi elementlar tartib raqami bir bo'lsin deyildi shunda slides[slideIndex - 1].style.display = "block" funksiyasi bo'yicha nolinchi elementdan birinchi elementga o'tadi  yani plusSlider funksiyasi yuqoridagi showslides funksiyani ishga tushuradi va parametrida yuqoridagi qiymatida 1 bor slideIndex o'zgaruvchiga endi birmas boshqa indexlarniham qo'shadi yani qolgan 4 ta indexniham qo'shadi chunki slideIndex o'zgaruvchini nolinchi elementi showSlides o'zgaruvchida chaqirilgan endi plusSlider funksiyasi chaqirilganda sliderlar pilus minus bo'lib o'zgaradi
    // });
    // prev.addEventListener("click", () => {
    //     plusSlides(-1);
    //     ////next.addEventListener ga yozilgan coment bilan bir hil faqat orqaga ishleydi yani - ga
    // });
    //64.chi dars (Web loyiha 16 chi darsi) Slider
});
////npx json-server --watch db.json //db.jsonni ishlatish uchun json-server npm packeti skachat qilingan shu sabab endi xamppda har safar bu loyiha ochilganda npx json-server --watch db.json shu buyruq bilan ochilishi kerak
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!LOYIHA BUTUNLAY TUGAGANDAN KEYIN OHIRGI DARSDAN KEYIN ALOHIDA TAYYORLAB CHERNAVIK CODLARNI UDALIT QILIB FAQAT AMALDA ISHLAB TURGAN KODLARNI YAHSHILAB QAYTADAN O'QIB TUSHUNIB COMMENTLARINI YAHSHILAB TEKSHIRIB TO'LDIRIB GITHUBGA ALOHODA JOYLA NETLIFYGAHAM

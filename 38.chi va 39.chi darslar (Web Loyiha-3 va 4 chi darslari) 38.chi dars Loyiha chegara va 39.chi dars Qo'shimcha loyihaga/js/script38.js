"use strict";
////BU LOYIHA BUTUNLAY TUGAGANDAN KEYIN HAMMA KODLARNI JS VA CSS KODLARNI HTMLGA SOLISHTIRIB LOYIHANI 100 FOIZ TUSHUNMAGANCHA BOSHQA DARSGA O'TMA YANI DARSDA TUSHUNMASANG BOSHQA JOYDAN IZLANIB BO'LSHAMAM  LOYIHANI 100 FOIZ TUSHUNIB BO'LGANDAN KEYINGINA BOSHQA DARSGA O'T
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////34.chi dars (Web Loyiha-1 chi darsi) Loyiha, Tab darsi

window.addEventListener("DOMContentLoaded", () => {
    //yani butun window bo'yicha DOMContentLoaded hodisasi qo'shildi yani html DOMdocumentlar butunlay ochilib bo'lgandan keyingina js kodlarimiz ishlaydi

    const tabsParent = document.querySelector(".tabheader__items"), //htmldagi preview katta ona dividagi tabheader__items bola divi chaqirib olindi yani bu bola div saytdagi  Category Of Series bolimi hissoblanadi Category Of Series bo'limi esa preview bo'limini boshi yani catrgoryalarni tanlash bo'limi hissoblanadi
        tabs = document.querySelectorAll(".tabheader__item"), //tabheader__item classli divlar categoreylarni nomi yani comedy sport fantastic bo'limlarga olib o'tish uchun kerak bo'ladigan html documentlar chaqirib olindi
        tabsContent = document.querySelectorAll(".tabcontent"), //htmldagi tabcontent classlari yani divlari 5 ta bo'lgani uchun komentariyga olingan edi endi esa komentariydan chiqariladi chunki js bilan dynamic tarzda o'zgartirilishlar kiritilishi kerak yani Category Of Series bo'limidagi categoriylarga bosilganda yani har biriga bosilgada shu categoriyga tegishli content tabcontent diviga asoisy bo'lib kelishi kerak !!!console.log(tabParent)!!!
        loader = document.querySelector(".loader"); //htmldagi section divini classi loaderga cssda ichiga paper man nomli animatsya berilgan

    ////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi
    ////LOADER
    setTimeout(() => {
        loader.style.opacity = "0"; //yani loader o'zgaruvchi ichidagi htmlda ichida animatsya bor loader classli div chaqirib olingan settimeout funksiyani ichida shu loader o'zgaruvchi chaqirib olinib dynamic tarzda opacityi nol qilindi yani 2000mlsdan keyin animatsiyani opacitysi 0 bo'lib qoladi yani ko'rinmey qoladi  va ikkinchi settimeotga esa yana shu loader o'zgaruvchiga dynamic tarzda style none berildi yani 2000mlsdan keyin 500 mls davomida yani sekiiin animatsya ekrandan yo'q bo'ldi bu holatni logdaham ko'rish mumkun yani elementda classlarni qo'shilishini!!!
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); //yani bu holatda birinchi settimeout funksiyasi loader o'zgaruvchi ichidagi loader paper man animatsiyasini 2000msldan keyin o'chirishni va  loaderni opaciyiysini 0 qilishni bajardi va ikkinchi settimeoutda esa shu ekrandan animatsiyani o'chirish uchun display none dynamic tarzda qo'shildi va shu o'chirilish 500mls vaqt davomida bo'lishi buyurildi shunda animatsya sekiiin yo'q bo'ldi
    }, 2000);
    ////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi

    ////TAB
    function hideTabContent() {
        tabsContent.forEach((item) => {
            //item bu yerda querySelectorAll bilan chaqirilgan massivni ichidagi elementlar yani tabcontent classlari
            item.classList.add("hide");
            item.classList.remove("show", "fade"); //fade bu joyda animatsya yani show classi udalit bo'layotganda sekinroq chiroyliroq udalit bo'ladi
        }); //yani bu holatda hidetabContent nomli local funksiya yaratib tabsContent o'zgaruvchida chaqirilgan tabcontent classli  5 ta divni foreach metodi yordamida display none qildik yani cssdagi hide clasida none buyrug'i bor yani hamma 5 ta divni ekranda ko'rinmeydigan qiladican css buyruqni dynamic tarzda yozdik shunda saytda htmldagi tabheader divini o'zi qoldi yani  Category Of Series bo'limi
        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active"); //bu holatda htmldagi tabheader__item classlar yani Category Of Series bo'limidagi categorylardagi hariflari ajralib turgan Drama classi udalit qilindi chunki user qaysudur categoriyga bosganda o'sha categoriyni contenti chiqishi kerak
        });
    }
    function showTabContent(i = 0) {
        //yani none holatidan chiqib show classiga o'tgan divlarni 0 chi elementi default holatda bo'lsin
        //bu  holatda (i) yani local funksiyani parametriga indexni berdik chunki tabscontent va tabs o'zgaruvchilar massiv bo'lgani uchun chunki massivni indexlari yani raqamlari kerak edi
        tabsContent[i].classList.add("show", "fade"); //tabsContent o'zgaruvchi ichidagi tabcontent divlar none classli holatidan show classli holatiga o'tdi va tabheader__item dividagi tabheader__item_active clasi add metodi bilan qo'shildi va shu showTabContent funksyiasi chaqirilganda parametriga bu class yani tabheader__item_active classi qaysi indexdda yani tabheader__items ona divini qaysi divida turishi aytildi default holatda 0 chi indexga berildi yani Drama texti bor divga////show classi qo'shilgandan keyin cssdagi fade animatsiyasi qo'shildibu animatsiya divdan divga o'tayotgan holatini sekinroq qilib chiroyliroq qilib beradi
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent(); //hideTabContent funskiyasi htmldagi tabcontent classli divlarni udalit qilib beradi
    showTabContent(); //showTabContent funksiyasi htmldagi tabcontent classli divlarga 0 chi elementiga tabheader__item_active classini qo'shib beradi

    tabsParent.addEventListener("click", (event) => {
        //bu holatda tabsParent o'zgaruvchi ichidagi tabheader__items ona diviga click hodisasi qo'shilmoqda va hodisa ichida target nomli o'zgaruvchi yaratilib  addEventListenerda chaqirilgan ona divni event targeti chaqirildi va target nomli o'zgaruvchi ichiga saqlab olindi yani event target html jsga ulangandan keyin htmlni har bir elementi objetga aylantirilganda ichida nimalar  yani qanday metodlar borligini tekshirib beradi yoki chaqirib beradi desaham bo'ladi
        const target = event.target;
        if (target && target.classList.contains("tabheader__item")) {
            //shunda agar target o'zgaruvchidagi elementlarni classlarida tabheader__item classi bor bo'lsa yani categoriylar yozilgan divlar bor bo'lsa tabs o'zgaruvchida querySelectorAll qilib chaqirilgan tabheader__item classlarini item va indexlari yani tartib raqamlari foreach metodi bilan intrigatsa qilinib agar  tabsdagi tabheader__item classlani itemi >>pastda>>>
            tabs.forEach((item, idx) => {
                if (target == item) {
                    //agarda tabsni targeti yani bosayotgan knopkamiz teng bo'lsa o'zini itemiga  showTabContent funksiyasini chaqir deyildi shunda har bir  tabheader__itemni indexiga bosilganda showTabContent funksiyasi ishga tushib o'sha bosilgan itemni indexiga tabsParentdagi yani ona divdagi classlarni indexiga qarab chaqirib beradi
                    hideTabContent();
                    showTabContent(idx);
                }
            });
        }
    });

    //////////////////////////34.chi dars (Web Loyiha-1 chi darsi) Loyiha, Tab darsi

    //38.chi va 39.chi darslar (Web Loyiha-3 va 4 chi darslari) 38.chi dars Loyiha chegara va 39.chi dars Qo'shimcha loyihaga
    //Timer
    // console.log(Date.parse("2022-08-11"));//run kodega qaralsin//yani 1970 chi yildan buyog'iga yani parse metodini parametridagi dategacha bo'lgan vaqtni millisekundda olib beradi >>1660176000000 millisekund//yani 11 chi avgustgacha bo'lgan vaqtni milliskundda olib beradi
    const deadLine = "2026-12-31";
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;//bitta let o'zgaruvchi ichida bir nechta o'zgaruvchi yaratish!!! 
        const timer = Date.parse(endtime) - Date.parse(new Date()); //yani bu joyda parse metodi date bilan birga kelgani sabab parametrdagi stringni object holatiga aylantiradi//yani ikkinchi new Dateda hozirgi joriy vaqt yashiringan//yani bu holatda joriy vaqt bilan 1970 yil oralig'idagi vaqt olindi
        if (timer <= 0) {
            //yani belgilangan muddat tugagandan keyin kun soat daqiqa soniyalar 00 ga aylanadi yani - minusga qarab ketmaydi
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(timer / (1000 * 60 * 60 * 24)); //yani timer o'zgaruvchidagi 1970 chi yildan hozir shu koment yozilayotgan kungacha bo'lgan vaqtni millisekunga bo'lib uni 60 ga kopeytirib yani 60 s0niyaga ko'peytirib 60 soniyani esa 60 daqiqaga yani soatga ko'peytirib 60 daqiqani esa 24 ga ko'ytridik shunda timer o'zgaruvchidagi 1970 yil 00:00 dan boshlanib shu coment yozilgan vaqtgacha o'tgan millisekundda hissoblanadigan vaqtni soniyaga soatga kunga bo'lib oldik
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24); //yani bu holatda timerni ichidagi vaqtni soatga bo'lib oldik
            minutes = Math.floor((timer / 1000 / 60) % 60); //yani bu holatda timerni ichidagi vaqtni soatdan minutga yani 60 minutga bo'lib oldik
            seconds = Math.floor((timer / 1000) % 60);
        }
        return {
            // total,//????????????????????
            days,
            hours,
            minutes,
            seconds,
        }; //return qilingani uchun bu funksiyani boshqa o'zgaruvchigaham chaqirib ishlatish mumkun //yani getTimeRemaining local funksiyasi bizga object qaytaradi
    }
    function setClock(selector, endtime) {
        //selector yani tomer o'zgaruvchi ichidagi ona div hissoblanadi
        const timer = document.querySelector(selector), //yani parametrdagi selector ona div bo'lgani uchun ichidagi hamma html elementlarni olish mumkun
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.timer <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            //agar num katta yokida teng bo'lsa nolga yokida num 10 dan kichkina bo'lsa
            return `0${num}`;
        } else {
            return num;
        }
    } //yani getzero funksiyasini updateClock funksiyasiga ulab qo'ydik yani 10 dan kichkina sonlarda  09 08 07 05 04 03 02 01 00 bo'lib chiqadi
    setClock(".timer", deadLine); //bu joyda .timer ni nuqta bilan yozilishini sababi htmldagi timer ona classi selector ko'rinishida kelgani uchun jsga classligi aytilmagan edi shu uchun .timer deb jsga bu class deyildi
    //38.chi va 39.chi darslar (Web Loyiha-3 va 4 chi darslari) 38.chi dars Loyiha chegara va 39.chi dars Qo'shimcha loyihaga
});

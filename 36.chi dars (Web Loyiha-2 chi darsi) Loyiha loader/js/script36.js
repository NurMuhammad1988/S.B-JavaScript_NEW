"use strict";
////BU LOYIHA BUTUNLAY TUGAGANDAN KEYIN HAMMA KODLARNI JS VA CSS KODLARNI HTMLGA SOLISHTIRIB LOYIHANI 100 FOIZ TUSHUNMAGANCHA BOSHQA DARSGA O'TMA YANI DARSDA TUSHUNMASANG BOSHQA JOYDAN IZLANIB BO'LSHAMAM  LOYIHANI 100 FOIZ TUSHUNIB BO'LGANDAN KEYINGINA BOSHQA DARSGA O'T
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////34.chi dars (Web Loyiha-1 chi darsi) Loyiha, Tab BOSHLANDI!!

window.addEventListener("DOMContentLoaded", () => {
    //yani butun window bo'yicha DOMContentLoaded hodisasi qo'shildi yani html DOMdocumentlar butunlay ochilib bo'lgandan keyingina js kodlarimiz ishlaydi

    const tabsParent = document.querySelector(".tabheader__items"), //htmldagi preview katta ona dividagi tabheader__items bola divi chaqirib olindi yani bu bola div saytdagi  Category Of Series bolimi hissoblanadi Category Of Series bo'limi esa preview bo'limini boshi yani catrgoryalarni tanlash bo'limi hissoblanadi
        tabs = document.querySelectorAll(".tabheader__item"), //tabheader__item classli divlar categoreylarni nomi yani comedy sport fantastic bo'limlarga olib o'tish uchun kerak bo'ladigan html documentlar chaqirib olindi
        tabsContent = document.querySelectorAll(".tabcontent"), //htmldagi tabcontent classlari yani divlari 5 ta bo'lgani uchun komentariyga olingan edi endi esa komentariydan chiqariladi chunki js bilan dynamic tarzda o'zgartirilishlar kiritilishi kerak yani Category Of Series bo'limidagi categoriylarga bosilganda yani har biriga bosilgada shu categoriyga tegishli content tabcontent diviga asoisy bo'lib kelishi kerak !!!console.log(tabParent)!!!
        loader = document.querySelector(".loader"); //htmldagi section divini classi loaderga cssda ichiga paper man nomli animatsya berilgan

    ////LOADER  
    ////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi
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
});
//////////////////////////34.chi dars (Web Loyiha-1 chi darsi) Loyiha, Tab darsi
//va
//////////////////////////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi
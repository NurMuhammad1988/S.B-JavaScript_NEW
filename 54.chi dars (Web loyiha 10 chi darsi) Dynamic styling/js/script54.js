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
        let days, hours, minutes, seconds; //bitta let o'zgaruvchi ichida bir nechta o'zgaruvchi yaratish!!!
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

    //41.chi dars va 42.chi darslar (Web loyiha 5 va 6 chi darslar) Modal va Optimize qilish
    ////Modal
    const modalTrigger = document.querySelectorAll("[data-modal]"), //data atribut bilan modal oynaga aloqador buttonlarni jsga chaqirvoldik data atributlar htmlda bir nechta bo'lsa querySelector bilan chaqirilganda js codlar faqat birinchisiga tasir qilar ekan va agar htmlda data atributlar yozilib lekin jsda ishlatilmasaham hech narsa qilmaydi chunki data atributlar birinchi qiymati falsga teng bo'ladi yani hech narsaga tasir qilmaydi //querySelectorAll bilan chaqirilganda esa htmldagi hamma data-modal atributlarni jsga chaqirib oladi
        modal = document.querySelector(".modal"); //yani modal ona divini jsga chaqirvoldik

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide"); //yani openModal funksiyasi chaqirilganda modal ona divini  classiga show classini qo'sh va hide clasini udalit qil deyildi va overflovga hidden yani scrollni ko'rinmey turishi buyurildi
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId); //yani bu holatda pastroqda yozilgan modalTimerId o'zgaruvchisiga clearinterval berib qo'yildi yani bu clearinterval 5000 milli sekunddan keyin modalni sekin ishlatadi//////yani bu "hidden" holatida modal oyna ochilganda bodyga diynamic tarzda ovwerflow css classi berildi yani modal chiqgandan keyin orqasini ko'rinmeydigan yanaham to'g'rirog'i qimillameydigan qiladi yani scrollni hidden qiladi yani sayt qimirlamaydi////
    }
    function closeModal() {
        modal.classList.add("hide"); //yani modal ona diviga hide classi qo'shilganda show classini udalit qilish buyurildi
        modal.classList.remove("show");
        document.body.style.overflow = ""; //yani hide classi ishga tushganda overflow hiddenmas yani bo'sh qilib qo'yiladi shunda bodyda scroll qiymati paydo bo'ladi
    }
    modalTrigger.forEach((item) => {
        //yani madal bo'yicha asosiy  o'zgaruvchi hissoblangan modalTrigger o'zgaruvchisini itemlarini yani elementlari foreach metodi bilan intirgatsa qilib shu itemlar yani elementlarga click hodisasi sodir bo'lganda openmodal funksiyasi ishga tushirilsin deyildi
        item.addEventListener("click", openModal); //yani bitta click hodisasini barcha data-modal atributibor elementlarga berib chiqdik va keyinchalik faqat bitta joyda data atributni qoldirdik???=> sababi bir nechta buttongaham bitta funksiyasni ishlatib ko'rdik
    });

    modal.addEventListener("click", (e) => {
        ////bu joydagi(e) butun displayni nazarda tutadi yani event target yani userga ko'rinib turgan butun display
        if (e.target == modal || e.target.getAttribute("data-close") == "") {
            //distruptatsa//
            ////x yani o'chirish tugmasiga bosilganda modal yopiladi //yani event targetda yani butunlay html documentda modal o'zgaruvchi ichidagi modal ona divi bor bo'lsa va event targetga yani umumiy documentga getAttribute metodi bilan data-close attributi bor bo'lsa "" bo'sh katak yani shunda data close atributidagi stiker x ga bosilganda ekrandan o'chadi //data-close atributi teng bo'lsa bo'sh katakga??  yani closeModal funksiyasi ishga tushadi  ////Element interfeysining getAttribute() metodi elementda belgilangan atributning qiymatini qaytaradi  agar berilgan atribut mavjud bo'lmasa qaytarilgan qiymat null bo'ladi

            //yani modalga click hodisasi sodir bo'lganda yani umumiy html documentda modal classi yani o'zgaruvchisi aktiv bo'lsa closeModal funksiyasi chaqirilsin deyildi
            //yani agar e.target ichida yani document ichida modal o'zgaruvchi yani modal o'zgaruvchini html elementlari bor bo'lsa yani butun html documentda event targetda pastdagi classlar bor bo'lsa click hodisasi sodir bo'lganda pastdagi classlar ishlasin
            closeModal(); //bu joyda closeModal addEventListener funksiyasi parametrda chaqirilmagani sabab alohida(shu) bilan chaqiriladi
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    }); //bu holatdaesc klyavaturasi bosilgandahan closeModal funksiyasi chaqirilsin deyildi////yani agar butun document bo'ylab keydown hodisasi sodir bo'lganda yani claviyaturalar bosilganda clyavituralardan espace bosilganda yani evenni kodi espage bo'lganda va modalni classlilarida show degan class bor bo'lganda closeModal funksiyasi ishga tushsin //yani modal chiqganda escni bosibham modalda chiqib ketish mumkun
    const modalTimerId = setTimeout(openModal, 5000); //bu holatda modalTimerId nomli o'zgaruvchi yaratilib unga settimeout funksiyasi chaqirildi va argumentiga open modsal funksiyasi 5000 millisikund bo'lganda openmodal funksiyasi ishga tushsin deyildi
    ////////////////////////////////////////////////////////////////////////////////////////////
    // console.log(window.pageYOffset); //darsda pageYOffset qiymati bilan qilindi lekin bu jsda eskirgan o'rniga yangisi scrollY qiymati bo'lgan//bu scrollY bo'yiga o'lchasa scrollX eniga o'lchaydi
    // console.log(window.scrollY + document.documentElement.clientHeight);//yani bu holatda scrolly bilanyani ekrani tepadan pastga ko'rinib turgan qismi bilan butun documentni bo'yi qo'shildi shunda saytni butun bo'yi nechchi pixel ekanligi bilinadi//bu scrollY bo'yiga o'lchasa scrollX eniga o'lchaydi
    ////////////////////////////////////////////////////////////////////////////////////////////
    function showModalByScroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            //yani bu holatda showModalByScroll nomli local function yaratilib umumiy windowni umumiy uzunligi bo'lgan scrollY qiymatiga document elementdan clientheigh qiymati qo'shilib va documentda element scrollheightdan -1px qilindi va agar shu yuqoridagi holat sodir bo'lganda openModal funksiyasi chaqirildi
            openModal();
            window.removeEventListener("scroll", showModalByScroll); //yani open modal bir martta ishlagandan keyingi qatorda removeEventListener metodi ishga tushib openmodalni o'chiradi
        }
    }
    window.addEventListener("scroll", showModalByScroll); //yani bu holatda windowga scroll hodisasi berilganda showModalByScroll funksiyasi chaqirildi showModalByScroll local funksiyasi esa yuqorida yozilgan yani user saytni eng ohiriga tushganda openModal funksiyasi yana ishga tushadi
    //41.chi dars va 42.chi darslar (Web loyiha 5 va 6 chi darslar) Modal va Optimize qilish

    //47.chi dars (Web loyiha 7 chi darsi) Class darsi va 48.chi dars (Web loyiha 8 chi darsi) Loyiha. Rest operator darsi
    ////Class
    class MenuCard {
        //jsda classlar doim katta hariflar bilan yoziladi shunda js Carni class component ekanligini tushunadi
        ////rest operator constructorni parametrida eng ohirida yoziladi agar constructorni parametrida rest operatordan keyin birita parametryozilsa rest operator uni massivni ichiga yozvoradi
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            //bu holatda MenuCard nomli class yaratilib unga konstructor chaqirildi va parametriga kelejakda ishlatilishi rejalashtirilgan qiymatlar berib chiqildi this contex bilan har biri chaqirildi
            this.src = src; //rasim uchun atribut
            this.alt = alt; //rasim  uchun atribut
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; //yani bu massivg ateng chunki rest operator massiv qaytaradi
            this.parent = document.querySelector(parentSelector);
            this.transfer = 12000; //dollorni so'mga ko'paytirish
            this.changeToUZS(); //yani har safar menucard classi ishlaganda bu metodham ishlaydi
        }
        changeToUZS() {
            //qo'lda yozilgan metod
            this.price = this.price * this.transfer; //yani endi pricega qandaydir narh qo'shsak transferdagi 12000 ga ko'paytiriliadi
        }
        render() {
            //qo'lda yozilgan metod
            const element = document.createElement("div");

            //// console.log(this.classes);
            if (this.classes.length === 0) {
                //yani massivni uzunligi 0 bo'lsa
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach((classname) =>
                    element.classList.add(classname)
                ); //yani rest operator yordamida classlar diynamic qo'shildi yani rest operator(...)bor classes parametri massiv qaytaradi shu classes parametrini foreach bilan intirgatsa qilib element o'zgaruvchi ichidagi classnamelarga add qilib classnamelarni qo'shdik endi new MenuCardlardagi ohirgi parametr hissoblangan "menu__item" classi qayerga chaqirilsaham doim yangi classlarni qo'shadi
            }

            //element.inerhtml ichidagi menu__item classi olib tashlandi chunki endi rest operator orqali classlar qo'shildi
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
            </div>
          `; //innerhtmlda htmlda classlari yozilgan elementlar chaqirildi stylelar shu sabab ishlayapti chunki shu stylelar yozilgan css papka js ulangan htmlda chaqiriligan (link)!!! dynamic tarzda kelgan bu html css filga jsda dynamic tarzda pastda yozilgan new menucardlarni qiymatlari interpalatsiya bilan (becet) berib qo'yilgan va hohlagancha yangi cartani new menucard qilib ochib qiymatlarini o'zgartirib qo'ysa bo'ladi yani cardlarni ko'paytirsa bo'ladi
            this.parent.append(element); //yani bu holatda menucard classiga dynamic tarzda html element qo'shildi yani menucardda parentselector bor constructori ichida esa  this.parent = document.querySelector(parentSelector); qilib ona div chaqirilgan va parentga append qilib yangi dynamic yaratilgan divi  bor element nomli o'zgaruvchi kiritilgan
        }
    }

    new MenuCard( //birnchi card
        "img/tabs/1.png",
        "vegy",
        "Plan 'Usual'",
        "1-BU BIRINCHI DYNAMIC CARD Loremmm ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum innnn.",
        10,
        ".menu .container"
        //default bo'yicha rest operatori sabab bu joyda class menu__item yo'q yani default holatida massivni nolinchi elementiga class berib qo'yildi yuqoridagi if else bilan
    ).render();

    new MenuCard( //ikkinchi card
        "img/tabs/2.jpg",
        "elite",
        "Plan 'Premium'",
        "2-BU IKKINCHI DYNAMIC CARD Loremmm ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum innnn.",
        20,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuCard( //uchinchi card
        "img/tabs/3.jpg",
        "post",
        "Plan 'VIP'",
        "3-BU UCHINCHI DYNAMIC CARD Loremmm ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditate beatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum innnn.",
        30,
        ".menu .container",
        "menu__item"
    ).render(); //new MenuCard ga parametr sifatida MenuCard classidagi parametrlar chaqirilgan bu parametrlarda esa css qiymatlar mavjud shu ona divlar sabab>>>.menu .container

    //MenuCard nomli class yaratib parametrlariga src, alt, title, descr, price, parentSelector nomli qiymatlar berib chiqildi bular htmldagi atributlar yani atrtibutlar bilan html elementlar chaqirildi masalar src=imgni atributi alt=imgni atributi???  descr=descrni titeli va hakozo bu htmldagi filelarni atribut va atributsizham jsga kelishiga sabab this.parent = document.querySelector(parentSelector); shu bilan ona div .menu va .container classlarini olib kelinishi sabab quereselector bilan parentselector qilib ona div chaqirilganda ichidagi elementlar 0 dan boshlab 0,1,2,3 bo'lib massivda keladi shu sabab har bir html element alohida chaqirib o'tirilmadi uchta cardni classlari esa cssda yozib qo'yilgan va shu sabab yangi ochilgan element o'zgaruvchidagi yangi divga innerhtml bilan yozilgani uchun classlarham keldi

    //48.chi dars (Web loyiha 8 chi darsi) Loyiha. Rest operator darsi kospekti
    ////rest operatori argumentlarni bitta joyga massiv ichiga yig'ib beradi misollar>>>
    // function logger(a, b, ...rest) {
    //     console.log(a, b, rest);
    // }
    // logger(1, 2, 3, 4, 5, 6, 7, 8, 9);
    // //sukut rrejimi yani default rejimi
    // function calc(number, def = 10) {
    //     //def = 10 yangi sintaksiz (esmascript6)
    //     def = def || 10; //eski sintaksiz
    //     console.log(number + def);
    // }
    // calc(10);
    //48.chi dars (Web loyiha 8 chi darsi) Loyiha. Rest operator darsi konspekti
    //47.chi dars (Web loyiha 7 chi darsi) Class darsi va 48.chi dars (Web loyiha 8 chi darsi) Loyiha. Rest operator darsi

    ////53.chi dars (Web loyiha 9 chi dars (server))  Ma'lumot yuborish
    ////malumot yuborish bu 53 chi darsda yozilgan server bilan muloqot kodlari eskiroq usullar hissoblanadi
    ////FORM  //Form darsi xamppda ochilishi kerak bo'lmasa hato ishlaydi yani xampp local server yani tushunishimcha xampp bilan server sotib olmasdan o'z kompyuterimdan server sifatida foydalanashim uchun  kerak dastur yani masalan pullik server kompyuterlar kuchli himoyalangan va uzluksiz tok bilan taminlanib ishlab turadi bu joyda esa xammp shu vazifada yani local server sifatida ishlaydigan dastur lekin bitta savolim ochiq qoldi js server bilan ishlashda serverni hafsiz yoki hafsuz emasligini qayerdan biladi masalan xammpda ochmaganimcha form darsida qilingan narsalar o'hshamadi yani open live servisda ishlamadi lekin xammp local hostda ochganimda ishladi shu savol???

    ////53 chi darsni takrorlayotganda xamppda ochish shart bo'lmasa form datalar bilan ishlash darsini natijalarini ko'rib bo'lmaydi agar aynan form data darsi kerak bo'lsa yani shu 53 chi dars kerak bo'lsa bu failni xamppda ochib ishlatish kifoya (yani dars qilinayotganda github uchun  S B failida bajarildi va yozilgan kodlar xamppdagi huddi shu 53 chi dars filega yozib turildi va xampdan bu yerga copy qilib qo'yildi)

    const forms = document.querySelectorAll("form"); ////forms o'zgaruvchisida html documentdan formlarni hammasini ALL qilib ovoldik htmlda order va modal classlari bor formalar bor bular saytga kirganda contact us buttonlariga bosilganda va sayt ishga tushgandan keyin 5 sekunddan keyin chiqadigan modal oyna (МЫ СВЯЖЕМСЯ С ВАМИ КАК МОЖНО БЫСТРЕЕ!)

    forms.forEach((form) => {
        ///intrigatsada parametrda form yozildi chunki bu form pastda postdata funksiyasida chaqiriladi shunda bu joyda intirigatsa bo'lgan[] form classlarga post datada hodisa ilinadi
        postData(form); ////yani endi ALL qilib chaqirilganda kelgan hamma massiv ichidagi form classlar endi postdata funksiyasiga tushadi
    });

    // console.log(forms);////formani ishlayotgan yoki ishlamayotganini tekshirish uchun yozildi logda ikkita formni kelganini ko'rish mumkun

    const msg = {
        //user form bilan ishlab submitlar qilganda yani malumotlar kirgizganda oladigan habarlari va sodir bo'ladigan hodislar davomi pastda nimaga pastda chunki bu kodni boshi bilan ohirini orasida serverga malumot jo'natish kodlari bor yani user serververga malumotlarni jonatganda yani jonatishga harakat qilgandan song chiqishi kerak bo'lgan malumot bo'lganligi sababli bu objectni qanday ishlashi pastda yani server user malumot almashinib bo'lgandan keyingina chiqadi shu sabab pastga yozildi (kod o'qish tartibi)
        loading: "img/spinner.svg", //yani bu holatda serverdan keladigan javob 200 javobi kelguncha img papkani ichida spinner svg file ishlab turadi
        success: "Thank's for submiting our form",
        failre: "Something went wrong",
    };

    function postData(form) {
        form.addEventListener("submit", (e) => {
            ////form o'zgaruvchisida ALL qilib chaqirilgan va postdataga form qilib berib qo'yilgan form classlariga submit hodisasi ilinepti chunki formda submit qilish bor (yani malumot jo'natilganda)
            e.preventDefault(); ////preventdefault metodi kerakli documentlarga submit bo'lganda faqat kerakli joyni qayta yuklaydigan metod ////parametrda submitdan keyn (e) yani event olindi yani browserni odatiy holatdan chiqarish uchun masalan submit hodisasi sodir bo'lganda sahifa yangilanmasdan faqat shu form classlarini o'zi yangilanadi shunda sayt butunlay qayta yuklanmaydi

            const statusMessage = document.createElement("img"); ////yani bu holatda yuqoridagi msg o'zgaruvchisi yani user bilan server malumot almashunuvi jarayoni uchun yaratilgan msg o'zgaruvchisi uchun yangi img elementi dynamic tarzda yaratildi
            statusMessage.src = msg.loading; ////yani bu holatda serverdan keladigan javob 200 javobi kelguncha img papkani ichida spinner svg file ishlab turadi bu esa shu spinnerni dynamic tarzda qo'shilgan stylelari   statusMessage.style.cssText = `display: block;margin: 0 auto;`
            //yani server bilan muloqot jarayoni aftamatik tarzda loading bo'ladi yani kutiladi masalan internet sekin bo'lsa yoki serverda muammo bo'lsa shu holat uchun spinner ishlatildi
            statusMessage.style.cssText = `
           display: block;
           margin: 0 auto;`;
            form.insertAdjacentElement("afterend", statusMessage); //endi shu loading hodisasida sodir bo'lishi kerak bo'lgan hodisani statusmesseg o'zgaruvchiga insertAdjacentElement metodi bilan joylashtirdik statsusmessege o'zgaruvchida esa yangi img bor bu imgga esa msg o'zgaruvchidagi qiymatlardan loading qiymatidagi img qo'shib qo'yildi bu joyda afterend parametri spinnerni ohirida chiqishini nazarda tutadi yani insertAdjacentHTML metodi ikkita parametr qabul qiladi birinchi parametr pozitsiyasi ikkinchi parametri html texti yani bu holatda insertAdjacentHTML metodi statusmessageni formdan keyinga qo'shib berdi yani loading sodir bo'layotgda spinner.svg form classiga aloqador divdan keyin pastda turadi margin 0 spinnerni o'rtada turishini taminlaydi

            const request = new XMLHttpRequest(); //yani bu XMLHttpRequest objecti server bilan ishlash objecti yani yangi constructor yani XMLHttpRequest o'zida constructor objectni saqlaydi yani bundan object keladi
            request.open("POST", "server.php"); // xamppda ochilgani sababi serverga so'rov yuborish birinchi parametr metod qabul qiladi post yoki get bu joyda post ishlatilyapti chunki serverga malumot jo'natilepti ikkinchi parametr esa url qabul qiladi url esa doim serverni manzili bo'lishi kerak bu holatda server.php bo'lib turipti yani local server esa xampp bo'lib turipti shunda server.php faqat url vazifasida turipti

            const formData = new FormData(form); //yani bu holatda FormDataga form classlarni malumotlari berildi yani FormData bu HTML formasi malumotlarini ko'rsatish objektidir yani serverga ko'rsatadi    yani FormData objecti formdagi o'ziga kirtilgan elementdagi namelarga qaraydi bu holatda htmldagi inputlarni namelariga qaraydi yani atributlarni nomlariga qarab malumotlarni serverga moslaydi??? yani masalan name atributi formdata objectini name hususiyatiga teng bo'ladi formdata objecti yani html atributlarni nomlariga mos o'z qiymatlariga ega construktor (huddiki this.name va hakozo) shu uchun forms o'zgaruvchisi all qilinib chaqirildi va foreach qilindi va form holatida formdatani parametriga kiritildi va bu formdata objecti o'zini parametridagi malumotlarni server taniydigan mlumot turiga aylantiradi lekin json emas yani shunda formga kelgan malumot serverga jo'natishga serverbop malumot turiga aylantirilib tayyor qilindi yani FormData objecti formga yoziladigan client kirtgan malumotlarni va faillarni serverga server tushunadigan tilda tayyorlab beradi lekin json fileda emas ////FormData html form classidan yuboriladigan malumotlar formatlaridan biridir. Xususan, u shaklga kiritilgan qiymatlarni name: value juftlari sifatida kodlaydi va ularni Content-Type sarlavhasi bilan  multipart/form-data ga yuboradi FormDtaning asosiy xususiyatlariga quyidagilar kiradi: Faqat matnni emas, balki fayllarni ham yuborish imkoniyati.////form data objectiga sarlavha qo'yish shartmas (setRequestHeadern) chunki formdata objectida sarlavga aftamatik qo'yiladi
            request.send(formData); //yani bu holatda request o'zgaruvchi ichidagi constructor (XMLHttpRequest) va open metodlari bilan tayyor qilingan va formData o'zgaruvchi ichida FormData objecti bilan serverga jo'natishga tayyor qilingan formDta objecti send qilindi yani inputni ichiga tushadigan datalarni serverga jonatish sodir bolepti
            request.addEventListener("load", () => {
                //yani request o'zgaruvchidagi server bilan muloqot jarayonidagi load holati bu joyda load hodisani parametrlaridan biri hissoblanadi yani js biladi server bilan muloqot paytida qanchadur vaqt o'tishini va shu vaqt uchun js hodilalarda alohida load parametri mavjud
                //yani hodisa ichiga hodisa osilayapti
                if (request.status === 200) {
                    //yani agar request o'zgaruvchida jonatilgan malumotlar statusi 200 kodiga ega bo'lsa yani omadli jo'natilsa logda request o'zgaruvchini response parametri bilan ko'ramiz yani formga malumot kiritilganda server buni qabul qilsa logda ko'rinadi//////FormData objecti bilan ishlanayotgani sababli form data objectiga sarlavha qo'yish shartmas (setRequestHeadern) chunki formdata objectida sarlavga aftamatik qo'yiladi
                    console.log(request.response); ////serverga jo'natilgan malumotlarni logda ko'rish uchun
                    showThanksModal(msg.success); //endi agar hammasi to'g'ri bo'lsa yani 200 bo'lsa statusmeesagega textcontent bilan msgni .success qiymati berildi yani server bilan muloqot omadli bo'lsa// yani bu holatda showthanksmodal funksiyasi pastda yozilgan yani shu modal oynani dynamic holatda ishlaydigan qilingan pastda yozilgan funksiya yani showThanksModal funksiyasi birinchi chaqirilib parametriga msg o'zgaruvchini success qiymati chaqirilib qo'yildi

                    form.reset(); ////JavaScript-da reset() metodi HTMLni tiklash tugmasi  form elementlarining barcha qiymatlarini tozalash uchun ishlatiladi. U qiymatlarni sukut bo'yicha o'rnatish uchun ishlatilishi mumkin. U hech qanday parametr qiymatlarini talab qilmaydi va hech qanday qiymatni qaytarmaydi va Elektron qurilmadagi reset tugmasi nima qiladi? Qayta tiklash tugmasi apparat yoki dasturiy ta'minot mexanizmi bo'lib, qurilma yoki tizimni asl holatiga qaytarish yoki noto'g'ri ishlash yoki muzlatish holatlarida uni qayta ishga tushirish imkonini beradi . Qayta tiklash tugmasini bosish orqali siz qurilmani qayta o'rnatish jarayonini boshlashingiz mumkin. yani malumotlar formga kiritilgandan keyin contact us ga bosilganda formlardagi inputlarni reset qiladi yani sukut default holatiga qaytaradi
                    setTimeout(() => {
                        //asinhron//yani bu holatda formga reset berildi yani yani resetda settimeout funksiyasi bilan  status messagga yani formga submit hodisasi sodir bo'lgandan keyin statusmessegdan kelgan malumotni 2 sekunddan keyin remove yani udalit qilish buyurildi
                        statusMessage.remove();
                    }, 2000);
                } else {
                    showThanksModal(msg.failre); ////yokida //endi agar hammasi to'g'ri bo'lmasa yani 200 bo'lmasa statusmeesagega textcontent bilan msgni .failre qiymati berildi yani server bilan muloqot omadsiz bo'lsa// yani bu holatda showthanksmodal funksiyasi pastda yozilgan yani shu modal oynani dynamic holatda ishlaydigan qilingan pastda yozilgan funksiya
                }
            });
        });
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    ////agar serverimiz json fileda yani hozirgiday phpda bo'lmaganda kodni yozilishi// phpdaham json fileni buyrug'i yozildi agar phpni o'zida ishlatilganda php faildagi json nastroyka o'chirilib turishi kerey bo'lmasa serverga userni malmumotlarini jo'natishda hatolik sodir bo'ladi

    // const forms = document.querySelectorAll("form");
    // forms.forEach((form) => {
    //     postData(form);
    // });
    // const msg = {
    //     loading: "Loading...",
    //     success: "Thank's for submiting our form",
    //     failre: "Something went wrong",
    // };
    // function postData(form) {
    //     form.addEventListener("submit", (e) => {
    //         e.preventDefault();
    //         const statusMessage = document.createElement("div");
    //         statusMessage.textContent = msg.loading;
    //         form.append(statusMessage);
    //         const raequest = new XMLHttpRequest();
    //         raequest.open("POST", "server.php");
    //         raequest.setRequestHeader("Content-Type", "application/json");
    //         const obj = {};
    //         const formData = new FormData(form);
    //         formData.forEach((val, key) => {
    //             obj[key] = val;
    //         });
    //         const json = JSON.stringify(obj);
    //         raequest.send(json);
    //         raequest.addEventListener("load", () => {
    //             if (raequest.status === 200) {
    //                 console.log(raequest.response);
    //                 statusMessage.textContent = msg.success;
    //                 form.reset();
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 2000);
    //             } else {
    //                 statusMessage.textContent = msg.failre;
    //             }
    //         });
    //     });
    // }
    ////agar serverimiz json fileda yani hozirgiday phpda bo'lmaganda kodni yozilishi// phpdaham json fileni buyrug'i yozildi agar phpni o'zida ishlatilganda php faildagi json nastroyka o'chirilib turishi kerey bo'lmasa serverga userni malmumotlarini jo'natishda hatolik sodir bo'ladi

    //////////////////////////////////////////////////////////////////////////////////////////////////

    ////53.chi dars (Web loyiha 9 chi dars (server))  Ma'lumot yuborish

    ////54.chi dars Dynamuc styling
    ////54 chi darsni takrorlayotganda xamppda ochish shart bo'lmasa  Dynamic styling(54) dars natijalarini ko'rib bo'lmaydi agar aynan  dynamic styling darsi kerak bo'lsa yani shu 54  dars kerak bo'lsa bu failni xamppda ochib ishlatish kifoya (yani dars qilinayotganda github uchun  S B failida bajarildi va yozilgan kodlar xamppdagi huddi shu 54 chi dars filega yozib turildi va xampdan bu yerga copy qilib qo'yildi)

    function showThanksModal(message) {
        ///madal oynani "THANK'S FOR SUBMITING OUR FORM" texti
        const prevModalDialog = document.querySelector(".modal__dialog"); //yani modal dialogni eski holati ////yani bu holatda htmldagi modal__dilaog classi yani sayt ochilganda va contact us buttoni bosilganda chiqadigan serverga clientni malumotlarini jo'natadigan modal__dialog classi chaqirib olindi va classlist parametri va add metodi bilan cssdagi hide classi qo'shildi yani yo'q qilib qo'yildi cssdagi hide classida   display: none; qiymati bor
        prevModalDialog.classList.add("hide"); //display: none;
        openModal(); //yani modal oyna yuqorida hide classi bilan yopilib bu ancha yuqorida boshida yozilgan openmodal functsiyasi bilan yana ochildi
        const thanksModal = document.createElement("div"); //va dynamic yangi div ochib classiga modal__dialog classsi yana qo'shildi yani endi modal oyna dynamic tarzda qo'shilepti
        thanksModal.classList.add("modal__dialog");
        //// thanksModal.innerHTML bilan dynamic content qo'shish yani htmldagi modal dynamic tarzda shu joyda yozildi va htmlagi kodlar shu tartibda `becet` ichiga yoziladi shunda innerhtml parametri bilan js kodlar ichida html taglarni yozish mumkun
        thanksModal.innerHTML = `
      <div class="modal__content">
      <div data-close class="modal__close">&times;</div>
      <div class="modal__title">${message}</div>
      </div>
        `; //// cssdagi .modal__title classida bu messejni style classlari bor etibor ber masalan text-align: center;font-size: 22px;text-transform: uppercase;
        document.querySelector(".modal").append(thanksModal); //endi user dynamic tarzda qo'shilgan modal__dialog classi bor divdagi inputlarga hohlagancah malumotni serverga jo'natishi mumkun va bu holatdaham serverni linki hato bo'lsa yoki bu dars xamppda ochilmasa yani local serverda ochilmasa something went wrong texti chiqadi yani bu showThanksModal funksiyasi thanksModal o'zgaruvchiga append qilindi yani qo'shildi thanksModal o'zgaruvchiga esa yangi div createelement qilinib modal__dilaog classi add qilib qo'shilgan
        setTimeout(() => {
            thanksModal.remove(); //yannisettimeout funksiyasi bilan 4 sekunddan keyin dynamic tarzda qo'shilhan thanksmodal o'zgaruvchini udalit qildik yani shunda user serverga malumotlarni jo'natgandan keyin 4 sekunddan keyin modal oyna aftamatik tarzda yopiladi
            prevModalDialog.classList.add("show"); // display: block;//va add qilib ichida modal__dialog classlari chaqirilgan  prevModalDialog o'zgaruvchi classini qo'shdik
            prevModalDialog.classList.remove("hide"); //display: none;//yani endi yuqorida hide qilingan ichida modal__dialog classlari chaqirilgan  prevModalDialog o'zgaruvchini hide classini remove qildik yani udalit qildik va shundan so'ng closemodal funksiyasini chaqirib qo'ydik bu close modal funksiyasi modalni inputlari bilan tozalab yopadi
            closeModal();
        }, 4000);
    } ///yani endi user modal oynaga malumot kiritib contact us buttoniga bosgandan keyin 4 sekund vaqt o'tib modal yopiladi va modal yana qaytadan malumot jo'natish uchun top tozza holatga qaytadi

    ////54.chi dars Dynamuc styling
});
////npx json-server --watch db.json //db.jsonni ishlatish uchun json-server npm packeti skachat qilingan shu sabab endi xamppda har safar bu loyiha ochilganda npx json-server --watch db.json shu buyruq bilan ochilishi kerak //YANI ENDI 53 CHI DARSdan boshlab loyiha OCHILGANDA DOIM XAMPPDA VA 60 CHI DARSDAN BOSHLAB --WATCH DB.JSON DA OCHILISHI KERAK BO'LMASA SERVERLAR ISHLAMAYDI!!!!!!!!!!!!
////BU 53 CHI DARSDAN BOSHLAB LOYIHA XAMPPDA OCHILISHI KERAK AKS HOLDA SERVER ISHLAMAYDI!!!!!!!!!!!!!
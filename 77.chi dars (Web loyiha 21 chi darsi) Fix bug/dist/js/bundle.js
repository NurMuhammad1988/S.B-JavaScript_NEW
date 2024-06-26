/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/class.js":
/*!******************************!*\
  !*** ./src/modules/class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clas(){

     //47.chi dars (Web loyiha 7 chi darsi) Class darsi va 48.chi dars (Web loyiha 8 chi darsi) Loyiha. Rest operator darsi va  62.chi dars (Web loyiha 14 chi darsi)  Get request darsi
    ////Class
    class MenuCard {
        //jsda classlar doim katta hariflar bilan yoziladi shunda js Carni class component ekanligini tushunadi
        ////rest operator constructorni parametrida eng ohirida yoziladi agar constructorni parametrida rest operatordan keyin birorta parametr yozilsa rest operator uni massivni ichiga yozvoradi
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            //bu holatda MenuCard nomli class yaratilib unga konstructor chaqirildi va parametriga kelejakda ishlatilishi rejalashtirilgan qiymatlar berib chiqildi this contex bilan har biri chaqirildi
            this.src = src; //rasim uchun atribut
            this.alt = alt; //rasim  uchun atribut
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; //yani bu massivga teng chunki rest operator massiv qaytaradi
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
          `; //innerhtmlda htmlda classlari yozilgan elementlar chaqirildi stylelar shu sabab ishlayapti chunki shu stylelar yozilgan css papka js ulangan htmlda chaqiriligan (link)!!! dynamic tarzda kelgan bu html css filga jsda dynamic tarzda db.jsonda yozilgan
            this.parent.append(element); //yani bu holatda menucard classiga dynamic tarzda html element qo'shildi yani menucardda parentselector bor constructori ichida esa  this.parent = document.querySelector(parentSelector); qilib ona div chaqirilgan va parentga append qilib yangi dynamic yaratilgan divi  bor element nomli o'zgaruvchi kiritilgan
        }
    }
    //62.chi dars (Web loyiha 14 chi darsi)  Get request va //63.chi dars (Web loyiha 15 chi darsi) Axios

    //63.chi dars (Web loyiha 15 chi darsi) Axios
    //Axios get qilayotganda>>then(data => console.log(data)) doimo bject qaytaradi agar bunday holatda yozilsa massiv qaytaradi>>>(data => console.log(data.data))
    axios.get("http://localhost:3000/menu").then((data) => {
        ////db.jsondagi menuga get so'rovni axios bilan qilingani
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descr,
                price,
                ".menu .container" //endi db.jsondan cartalar dynamic tarzda keladi// yani bu holatda data yani db.jsondagi menu json objecti foreach bilan intrigatsa qilinib foreachni parametriga destruptizatsiya qilindi yani datani bu {img, altimg, title, descr, price} qiymatlari nusxalab olindi va menucard classiga css classlari bilan birga render qilindui yani obshi datalarni foreach qilib menucardaga berib qo'yildi menucard classida esa (menucard classi yuqoriroqda) bu cartalar bilan ishlash classlarni diynamic berish kodlari bor// Destruptizatsiya massivni yoki objectni  yo'q qilmaydi. U objectni arrayni topshiriq va malumotlari bilan hech narsa qilmaydi  uning vazifasi faqat kerakli qiymatlarni o'zgaruvchilarga nusxalashdir
            ).render(); //render metodi yani ko'rsatish nimani ko'rsatish????>>> htmlni ko'rsatish
        });
    });

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clas);


/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js");


function form(modalTimerId) {
    ////57.chi dars (Web loyiha 11 chi darsi) Fetch API va 61.chi dars (Web loyiha 13 chi darsi) Async va Await 54.chi dars (Web loyiha 10 chi darsi) Dynamic styling
    ////API  yani Application Programming Interface
    ////API turlari DOM API, Google map API, Google place API, va Fetch API bu fetch api browserda bo'ladi yani bu fetch api browserdan tashqaridagi apilarga so'rov yuborishga yordam beradigan interface hissoblanadi masalan server bilan
    //// tekin tajriba api saytlar https://jsonplaceholder.typicode.com/ Free fake api
    //// tekin tajriba api internet magazin uchun Free fake api sayt  https://rapidapi.com/collection/shopping-products-apis   bu tekin apilar browserda bor fetch api bilan hamkorlikda ishlaydi yani fetch api bilan boshqa apilarga so'rov jonatish mumkun
    ////fetch function metodi ikkita parametr qabul qiladi birinchi parametr url yani so'rovni urli va //fetch function metodi Promise qaytaradi fetch default yani sukut holatda doim get so'rov jo'natadi fetch api bilan server ishlarini bajarish XMLHttpRequest objectidan ko'ra qulayroq hissoblanadi
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name: "Nur" }),
    // })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));//bu holatda  tekin tajriba serverlari bor jsonplaceholder.typicode.com saytidagi 100 ta posti bor posts papkasiga 101 chi post qilib Nur objecti qo'shildi
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    const forms = document.querySelectorAll("form"); ////forms o'zgaruvchisida html documentdan formlarni hammasini ALL qilib ovoldik htmlda order va modal classlari bor formalar bor bular saytga kirganda contact us buttonlariga bosilganda va sayt ishga tushgandan keyin 5 sekunddan keyin chiqadigan modal oyna (МЫ СВЯЖЕМСЯ С ВАМИ КАК МОЖНО БЫСТРЕЕ!)
    forms.forEach((form) => {
        ///intrigatsada parametrda form yozildi chunki bu form pastda postdata funksiyasida chaqiriladi shunda bu joyda intirigatsa bo'lgan[] form classlarga post datada hodisa ilinadi
        bindPostData(form); ////yani endi ALL qilib chaqirilganda kelgan hamma massiv ichidagi form classlar endi bindpostdata funksiyasiga tushadi
    });
    // console.log(forms);////formani ishlayotgan yoki ishlamayotganini tekshirish uchun yozildi logda ikkita formni kelganini ko'rish mumkun
    const msg = {
        //user form bilan ishlab submitlar qilganda yani malumotlar kirgizganda oladigan habarlari va sodir bo'ladigan hodislar davomi pastda nimaga pastda chunki bu kodni boshi bilan ohirini orasida serverga malumot jo'natish kodlari bor yani user serververga malumotlarni jonatganda yani jonatishga harakat qilgandan song chiqishi kerak bo'lgan malumot bo'lganligi sababli bu objectni qanday ishlashi pastda yani server user malumot almashinib bo'lgandan keyingina chiqadi shu sabab pastga yozildi (kod o'qish tartibi)
        loading: "img/spinner.svg", //yani bu holatda serverdan keladigan javob 200 javobi kelguncha img papkani ichida spinner svg file ishlab turadi
        success: "Thank's for submiting our form",
        failre: "Something went wrong",
    };

    ////async va await functionlari async va await funksiya doim birga ishlaydi bittasi chaqirilib bittasi chaqirilmasligi mumkunmas bu holatda async bu postdatani asinhron funksiya qiladi await res o'zgaruvchidagi fetchni urlga so'rov jo'natishini kutishni buyuradi
    async function postData(url, data) {
        const res = await fetch(url, {
            ////fetch promise qaytaradi va bu promiseni res nomli o'zgaruvchiga oldik
            ////fetch api bilan yozilganda server linki fetch apini parametriga birinchi yoziladi
            method: "POST", ////yani fetchni post metodidan foydalanish bu metod post qilisni fetchdan post qilish yani formga post,yani userni post qilishini nazarda tutadi
            headers: {
                "Content-Type": "application/json", ////sarlavha chunki server json bilan ishlanganda sarlavha yoziladi  agar yozilmasa js fetchni ishlataolmaydi tushunmaydi
            },
            body: data, //yani POST, PUT,  va hokazo kabi HTTP usullaridan foydalanganda DETELE, so'rovi bilan birga bazi malumotlarni yuborishingiz kerak Bu malumotlar bazasidan ochirmoqchi bo'lgan obekt identifikatori yoki malumotlar bazasida saqlamoqchi bo'lgan yangi obekt bo'lishi mumkin. Bu ma'lumotlarning barchasi body obektiga kiradi shuning uchun body fetchda chaqiriladi
        });

        if (!res.ok) {
            //serverdan fetch qilinaolmaganda hatoni qo'lda to'g'irlash yani fetch faqat statusni ko'rsatadi bu kod esa hato bo'lganda ststusni ko'rsatish
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json(); ////db.json filega so'rov jo'natish funksiyasi////yani json metodi bilan serverga boradigan javobni json formatga o'tqizvoldik  yani bu holatda postdata nomli async (asinhron) funksiya yaratilib parametriga url chaqirildi yani bu url dynamic hissoblanadi
    }

    function bindPostData(form) {
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
            const formData = new FormData(form); //yani bu holatda FormDataga form classlarni malumotlari berildi yani FormData bu HTML formasi malumotlarini ko'rsatish objektidir yani serverga ko'rsatadi    yani FormData objecti formdagi o'ziga kirtilgan elementdagi namelarga qaraydi bu holatda htmldagi inputlarni namelariga qaraydi yani atributlarni nomlariga qarab malumotlarni serverga moslaydi??? yani masalan name atributi formdata objectini name hususiyatiga teng bo'ladi formdata objecti yani html atributlarni nomlariga mos o'z qiymatlariga ega construktor (huddiki this.name va hakozo) shu uchun forms o'zgaruvchisi all qilinib chaqirildi va foreach qilindi va form holatida formdatani parametriga kiritildi va bu formdata objecti o'zini parametridagi malumotlarni server taniydigan mlumot turiga aylantiradi lekin json emas yani shunda formga kelgan malumot serverga jo'natishga serverbop malumot turiga aylantirilib tayyor qilindi yani FormData objecti formga yoziladigan client kirtgan malumotlarni va faillarni serverga server tushunadigan tilda tayyorlab beradi lekin json fileda emas ////FormData html form classidan yuboriladigan malumotlar formatlaridan biridir. Xususan, u shaklga kiritilgan qiymatlarni name: value juftlari sifatida kodlaydi va ularni Content-Type sarlavhasi bilan  multipart/form-data ga yuboradi FormDtaning asosiy xususiyatlariga quyidagilar kiradi: Faqat matnni emas, balki fayllarni ham yuborish imkoniyati.////form data objectiga sarlavha qo'yish shartmas (setRequestHeadern) chunki formdata objectida sarlavga aftamatik qo'yiladi

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //metod ichida metod//yani bu holatda formDatada chaqirilgan FormData global objecti doim massiv qaytaradi bu holatda enteries massivni yana massiv qilib beradi fromenteries esa massivni object qilib beradi JSON.stringify esa bu objectni json formatga o'girib beradi yani FormData objectidan keladigan (yani formga yozilganda keladigan) massiv malumotlarni objectga va jsonga aylantirdik yani server tushunadigan malumot turi hissoblangan jsonga aylantirdik

            //Object.entries metodi
            // const obj = {x:10, y:20}
            // console.log(Object.entries(obj));//entres metodi jsda global Objectni metodi hissoblanadi yani objectni massivga o'girib beradi yani obj objectidagi qiymatlarni har birini alohida ishlasa bo'ladigan massivga o'girib beradi

            // const obj = {}; ////yani serverga borgan malumotlar object ko'rinishida shu bo'sh objectga tushadi
            // formData.forEach((val, key) => {
            //     ////yani formdata o'zgaruvchidagi FormData js objecti parametridagi form FormDataga intirigatsa qilinib formDatani valulari FormData objectiga keylariham FormDatani keylariga intirigatsa qilindi yani ulandi desaham bo'ladi shudna FormData objecti formga yanni parametrridagi formdan kelgan malumotlarni shunday context thizga o'hshab tartiblaydi va logda userni kiritgan malumotlariga qaralganda tartib bilan value keylari bilan tushadi
            //     obj[key] = val;
            // })
            postData("http://localhost:3000/request", json) //yani server (db.json) bilan ishlash unversal async postdata funksiyasiga db.jsondagi server linki ichidagi request papkaga post jo'natish va uni (FormData objecti massiv qaytaradi ) massivni objectga aylantiradigan  json o'zgaruvchi bilan chaqirdik
                // fetch("http://localhost:3000/request", {
                //     ////fetch api bilan yozilganda server link fetch apini parametriga birinchi yoziladi
                //     method: "POST", ////yani fetchni post metodidan foydalanish
                //     headers: {
                //         "Content-Type": "application/json", ////sarlavha chunki server json bilan ishlanganda sarlavha yoziladi
                //     },
                //     body: JSON.stringify(obj), ///yani serverga jo'natilgan userni malumotlari jsonda object ko'rinisha o'tib obj objectiga jo'natilishi
                // })
                //     .then((data) => data.text()) //bu holatda .then Promise objectini metodi hissoblanadi lekin fetch bilan ishlaganda promiseni o'zini chaqirish shartmasmi??? yani .then va formni ifoda qiladigan data va text metodi bilan serverdan keladigan malumotni shunchaki text qilindi yani jsonmas shunchaki text //bu holatda data formData o'zgaruvchida chaqirilgan FormData objecti parametrida chaqirilgan All qilib htmldan chaqirilgan form classlarni  foreach qilinib yig'ilgan formalarni ifoda etadi
                .then((data) => {
                    console.log(data); ////yani tepadagi text metodi sabab formni inputlariga user tomonidan kiritiladigan malumotlar serverga jo'natilganda text holatida logda ko'rish uchun yozildi
                    showThanksModal(msg.success); ////server urli hato bo'lganda shu funksiya ishlamasligi kerak edi lekin ishlab ketepti??? sabab fetch faqat urllarga yani server ssilkalarga faqat so'rov jo'natadi holos yani  fetch api faqatgina statusni ko'rsatib beradi yani linklarga so'rovlarni jo'natib faqat statusni ko'rsatib beradi va fetch net o'chiq bo'lsa yani offline bo'lsagina hatoniham ko'rsatadi (something went wrong) yani offline holatida bo'lganda fetch api server.php ga so'rov yubormaydi shu sabab hatoni ko'rsatadi agar online bo'lsa so'rov jo'natilgani sabab hato ko'rsatmeydi
                    statusMessage.remove(); ////yani server malumotlarni omadli jo'natib bo'lgandan keyin spinner rasimi remove yani udalit qilindi aks holda spinner ishlab turaveradi yani contact us buttoniga qaytadan bosilgandaham spinner ishlab turgan bo'ladi shu sabab success holati sodir bo'lgandan keyin bu statsumessege o'zgaruvchi udalit qilinadi
                })
                .catch(() => {
                    ///promise//yani agar server bilan muloqot yani serverga malumot jo'natish omadsiz bo'lsa  failre: "Something went wrong" qiymati ishga tushadi chunki .chatch metodi false bo'lgandagina ishga tushadi promiseni
                    showThanksModal(msg.failre);
                })
                .finally(() => {
                    form.reset(); //user serverga malumot jo'natib bo'lgandan keyin formni reset yani udalit qilib tozalab qo'yish reset metodi bilan buyurilib qo'yildi //user serverga malumot jo'natib bo'lgandan keyin formni reset yani udalit qilib tozalab qo'yish reset metodi bilan buyurilib qo'yildi yani promiseni .finally metodi yani nima bo'lgandaham server bilan bordi keldi omadli yoki omadsiz o'tgandaham form tozalansin yani reset qilinsin
                });
            // console.log(obj); ////yani bu log text metodi bo'lsaham aslida jsda hamma narsa object ekanligini ko'rish uchun yani OOP objectga yo'naltirilgann programmalash
            ////server bilan muloqotni fetch api json  bilan qilingani json bilan ishlanganda server.php filedagi json nastroyka yoqib qo'yilishi kerak
        });
    }

    ////54.chi dars (Web loyiha 10 chi darsi) Dynamic styling
    ////54 chi darsni takrorlayotganda xamppda ochish shart bo'lmasa  Dynamic styling(54) dars natijalarini ko'rib bo'lmaydi agar aynan  dynamic styling darsi kerak bo'lsa yani shu 54  dars kerak bo'lsa bu failni xamppda ochib ishlatish kifoya (yani dars qilinayotganda github uchun  S B failida bajarildi va yozilgan kodlar xamppdagi huddi shu 54 chi dars filega yozib turildi va xampdan bu yerga copy qilib qo'yildi)

    function showThanksModal(message) {
        ///madal oynani "THANK'S FOR SUBMITING OUR FORM" texti
        const prevModalDialog = document.querySelector(".modal__dialog"); //yani modal dialogni eski holati ////yani bu holatda htmldagi modal__dilaog classi yani sayt ochilganda va contact us buttoni bosilganda chiqadigan serverga clientni malumotlarini jo'natadigan modal__dialog classi chaqirib olindi va classlist parametri va add metodi bilan cssdagi hide classi qo'shildi yani yo'q qilib qo'yildi cssdagi hide classida   display: none; qiymati bor
        prevModalDialog.classList.add("hide"); //display: none;
        (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)(".modal", modalTimerId); //yani modal oyna yuqorida hide classi bilan yopilib bu ancha yuqorida boshida yozilgan openmodal functsiyasi bilan yana ochildi
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
            (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)(".modal");
        }, 4000);
    } ///yani endi user modal oynaga malumot kiritib contact us buttoniga bosgandan keyin 4 sekund vaqt o'tib modal yopiladi va  modal yana qaytadan malumot jo'natish uchun top tozza holatga qaytadi
    ////54.chi dars (Web loyiha 10 chi darsi) Dynamic styling

    ////57.chi dars (Web loyiha 11 chi darsi) Fetch API va 61.chi dars (Web loyiha 13 chi darsi) Async va Await 54.chi dars (Web loyiha 10 chi darsi) Dynamic styling
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./src/modules/lodaer.js":
/*!*******************************!*\
  !*** ./src/modules/lodaer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader() {
    ////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi
    loader = document.querySelector(".loader"); //htmldagi section divini classi loaderga cssda ichiga paper man nomli animatsya berilgan
    setTimeout(() => {
        loader.style.opacity = "0"; //yani loader o'zgaruvchi ichidagi htmlda ichida animatsya bor loader classli div chaqirib olingan settimeout funksiyani ichida shu loader o'zgaruvchi chaqirib olinib dynamic tarzda opacityi nol qilindi yani 2000mlsdan keyin animatsiyani opacitysi 0 bo'lib qoladi yani ko'rinmey qoladi  va ikkinchi settimeotga esa yana shu loader o'zgaruvchiga dynamic tarzda style none berildi yani 2000mlsdan keyin 500 mls davomida yani sekiiin animatsya ekrandan yo'q bo'ldi bu holatni logdaham ko'rish mumkun yani elementda classlarni qo'shilishini!!!
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); //yani bu holatda birinchi settimeout funksiyasi loader o'zgaruvchi ichidagi loader paper man animatsiyasini 2000msldan keyin o'chirishni va  loaderni opaciyiysini 0 qilishni bajardi va ikkinchi settimeoutda esa shu ekrandan animatsiyani o'chirish uchun display none dynamic tarzda qo'shildi va shu o'chirilish 500mls vaqt davomida bo'lishi buyurildi shunda animatsya sekiiin yo'q bo'ldi
    }, 2000);
    ////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModal: () => (/* binding */ openModal)
/* harmony export */ });
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector); //yani modal ona divini jsga chaqirvoldik
    //openModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu openModal ishlamayapti chunki openModal form.js ga chaqirilmagan endi openModal funksiyani o'zini alohida form.js ga chaqirish kerak bu faqat 74 chi darsga aloqador comment
    modal.classList.add("show");
    modal.classList.remove("hide"); //yani openModal funksiyasi chaqirilganda modal ona divini  classiga show classini qo'sh va hide clasini udalit qil deyildi va overflovga hidden yani scrollni ko'rinmey turishi buyurildi
    document.body.style.overflow = "hidden";

    // console.log(modalTimerId);

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    //yani bu holatda pastroqda yozilgan modalTimerId o'zgaruvchisiga clearinterval berib qo'yildi yani bu clearinterval 5000 milli sekunddan keyin modalni sekin ishlatadi//////yani bu "hidden" holatida modal oyna ochilganda bodyga diynamic tarzda ovwerflow css classi berildi yani modal chiqgandan keyin orqasini ko'rinmeydigan yanaham to'g'rirog'i qimillameydigan qiladi yani scrollni hidden qiladi yani sayt qimirlamaydi////
}
function closeModal(modalSelector) {
    //closeModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu closeModal ishlamayapti chunki closeModal form.js ga chaqirilmagan endi closeModal funksiyani o'zini alohida form.js ga chaqirish kerak bu faqat 74 chi darsga aloqador comment
    const modal = document.querySelector(modalSelector); //yani modal ona divini jsga chaqirvoldik

    modal.classList.add("hide"); //yani modal ona diviga hide classi qo'shilganda show classini udalit qilish buyurildi
    modal.classList.remove("show");
    document.body.style.overflow = ""; //yani hide classi ishga tushganda overflow hiddenmas yani bo'sh qilib qo'yiladi shunda bodyda scroll qiymati paydo bo'ladi
}

/////////////////////////////////////////////////////////////////////////////////////////


function modal(triggerSelector, modalSelector, modalTimerId) {
    //41.chi dars va 42.chi darslar (Web loyiha 5 va 6 chi darslar) Modal va Optimize qilish
    ////Modal
    const modalTrigger = document.querySelectorAll(triggerSelector), //data atribut bilan modal oynaga aloqador buttonlarni jsga chaqirvoldik data atributlar htmlda bir nechta bo'lsa querySelector bilan chaqirilganda js codlar faqat birinchisiga tasir qilar ekan va agar htmlda data atributlar yozilib lekin jsda ishlatilmasaham hech narsa qilmaydi chunki data atributlar birinchi qiymati falsga teng bo'ladi yani hech narsaga tasir qilmaydi //querySelectorAll bilan chaqirilganda esa htmldagi hamma data-modal atributlarni jsga chaqirib oladi
        modal = document.querySelector(modalSelector); //yani modal ona divini jsga chaqirvoldik

    // function openModal() {
    //     //openModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu openModal ishlamayapti chunki openModal form.js ga chaqirilmagan endi openModal funksiyani o'zini alohida form.js ga chaqirish kerak bu faqat 74 chi darsga aloqador comment
    //     modal.classList.add("show");
    //     modal.classList.remove("hide"); //yani openModal funksiyasi chaqirilganda modal ona divini  classiga show classini qo'sh va hide clasini udalit qil deyildi va overflovga hidden yani scrollni ko'rinmey turishi buyurildi
    //     document.body.style.overflow = "hidden";
    //     clearInterval(modalTimerId); //yani bu holatda pastroqda yozilgan modalTimerId o'zgaruvchisiga clearinterval berib qo'yildi yani bu clearinterval 5000 milli sekunddan keyin modalni sekin ishlatadi//////yani bu "hidden" holatida modal oyna ochilganda bodyga diynamic tarzda ovwerflow css classi berildi yani modal chiqgandan keyin orqasini ko'rinmeydigan yanaham to'g'rirog'i qimillameydigan qiladi yani scrollni hidden qiladi yani sayt qimirlamaydi////
    // }
    // function closeModal() {
    //     //closeModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu closeModal ishlamayapti chunki closeModal form.js ga chaqirilmagan endi closeModal funksiyani o'zini alohida form.js ga chaqirish kerak bu faqat 74 chi darsga aloqador comment
    //     modal.classList.add("hide"); //yani modal ona diviga hide classi qo'shilganda show classini udalit qilish buyurildi
    //     modal.classList.remove("show");
    //     document.body.style.overflow = ""; //yani hide classi ishga tushganda overflow hiddenmas yani bo'sh qilib qo'yiladi shunda bodyda scroll qiymati paydo bo'ladi
    // }
    modalTrigger.forEach((item) => {
        //yani madal bo'yicha asosiy  o'zgaruvchi hissoblangan modalTrigger o'zgaruvchisini itemlarini yani elementlari foreach metodi bilan intirgatsa qilib shu itemlar yani elementlarga click hodisasi sodir bo'lganda openmodal funksiyasi ishga tushirilsin deyildi
        item.addEventListener("click", () => openModal(modalSelector, modalTimerId)); //yani bitta click hodisasini barcha data-modal atributibor elementlarga berib chiqdik va keyinchalik faqat bitta joyda data atributni qoldirdik???=> sababi bir nechta buttongaham bitta funksiyasni ishlatib ko'rdik
    });

    modal.addEventListener("click", (e) => {
        ////bu joydagi(e) butun displayni nazarda tutadi yani event target yani userga ko'rinib turgan butun display
        if (e.target == modal || e.target.getAttribute("data-close") == "") {
            //distruptatsa//
            ////x yani o'chirish tugmasiga bosilganda modal yopiladi //yani event targetda yani butunlay html documentda modal o'zgaruvchi ichidagi modal ona divi bor bo'lsa va event targetga yani umumiy documentga getAttribute metodi bilan data-close attributi bor bo'lsa "" bo'sh katak yani shunda data close atributidagi stiker x ga bosilganda ekrandan o'chadi //data-close atributi teng bo'lsa bo'sh katakga??  yani closeModal funksiyasi ishga tushadi  ////Element interfeysining getAttribute() metodi elementda belgilangan atributning qiymatini qaytaradi  agar berilgan atribut mavjud bo'lmasa qaytarilgan qiymat null bo'ladi

            //yani modalga click hodisasi sodir bo'lganda yani umumiy html documentda modal classi yani o'zgaruvchisi aktiv bo'lsa closeModal funksiyasi chaqirilsin deyildi
            //yani agar e.target ichida yani document ichida modal o'zgaruvchi yani modal o'zgaruvchini html elementlari bor bo'lsa yani butun html documentda event targetda pastdagi classlar bor bo'lsa click hodisasi sodir bo'lganda pastdagi classlar ishlasin
            closeModal(modalSelector); //bu joyda closeModal addEventListener funksiyasi parametrda chaqirilmagani sabab alohida(shu) bilan chaqiriladi
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    }); //bu holatdaesc klyavaturasi bosilgandahan closeModal funksiyasi chaqirilsin deyildi////yani agar butun document bo'ylab keydown hodisasi sodir bo'lganda yani claviyaturalar bosilganda clyavituralardan espace bosilganda yani evenni kodi espage bo'lganda va modalni classlilarida show degan class bor bo'lganda closeModal funksiyasi ishga tushsin //yani modal chiqganda escni bosibham modalda chiqib ketish mumkun
    // const modalTimerId = setTimeout(openModal, 5000); //bu holatda modalTimerId nomli o'zgaruvchi yaratilib unga settimeout funksiyasi chaqirildi va argumentiga open modsal funksiyasi 5000 millisikund bo'lganda openmodal funksiyasi ishga tushsin deyildi
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
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll); //yani open modal bir martta ishlagandan keyingi qatorda removeEventListener metodi ishga tushib openmodalni o'chiradi
        }
    }
    window.addEventListener("scroll", showModalByScroll); //yani bu holatda windowga scroll hodisasi berilganda showModalByScroll funksiyasi chaqirildi showModalByScroll local funksiyasi esa yuqorida yozilgan yani user saytni eng ohiriga tushganda openModal funksiyasi yana ishga tushadi
    //41.chi dars va 42.chi darslar (Web loyiha 5 va 6 chi darslar) Modal va Optimize qilish
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
    //65.chi dars (Web loyiha 17 chi darsi) Carousel va 66.chi dars (Web loyiha 18 chi darsi)  Dot Carousel va 69.chi dars (Web loyiha 19 chi darsi) RegExp
    ////Carousel
    const slides = document.querySelectorAll(".offer__slide"), //massiv qaytaradi yani offer__slide classlari 5 ta //htmlda offer ona divini ichida 5 ta odder__slide classlari bor ichida 5 ta card bor img descrepshini bilan
        next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"), //yani offer__slider-wrapper ona divini ichidagi ikkinchi ona div yani 5 ta carousel qilinishi kerak bo'lgan cardsalarni birinchi ona divi
        width = window.getComputedStyle(slidesWrapper).width, //yani htmldan slidesWrapper o'zgaruvchida chaqirilgan offer__slider-wrapper classini widthi olindi yani carouselga aloqador ona divni ovoldik
        // console.log(width); //offer__slider-wrapper ona divini widthini olinganini logda ko'rish uchun yozildi
        slider = document.querySelector(".offer__slider"); //offer slider yani sliderlarni eng katta ona divi

    let slideIndex = 1;

    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%"; //bu holatda slidesFieldda chaqirilgan carousel cardlarni yani 5 ta cardni 100ga ko'paytirib foiz berib qo'yildi shunda 5 ta card ekranda 500 foiz (width) joyni egalladi
    slides.forEach((slide) => {
        slide.style.width = width; //bu holatda sariq bilan yozilgan ohirgi width o'zgaruvchi nomi!!! endi slides o'zgaruvchida chaqirilgan eng katta ona divni widthi ekran eni bilan bir hil bo'ldi yani endi 500 foizmas//foreachni parametridagi slide bu ilmoq yani foreachni bergan natijasi yani bu holatda slidesni qiymatlarini massiv holati bu holatga style berib widthini width o'zgaruvchidagi qiymatga teng qilib qo'yildi yani ekran eniga
    });
    //indikator nuqtalar yani sliderni qaysi sliderda turganini ko'rsatib turadigan va hohglagan sliderga tanlab o'tib ketish mumkun bo'lhan sliderni nuqtalari
    const indicators = document.createElement("ol"); //yangi order list yani ol html class jsdadynamic tarzda yaratildi
    const dots = []; //dynamic yaratilgan dot o'zgaruvchini dots massiviga push qilindi
    indicators.classList.add("carousel-indecators"); //dynamic yaratilgan inticators o'zgaruvchiga cssdagi "carousel-indecators" classi qo'shildi
    slider.append(indicators); //va slider ona diviga dynamic ochilgan indicators ol html tage dynamic qo'shildi append metodi dynamic qo'shadi
    for (let i = 0; i < slides.length; i++) {
        //yani slider 5 ta bu tsikil tush beshta nuqtani qo'yib beradi let i = 0 bu let i yangi o'zgaruvchi qiymati yani indexsi nolga teng va agar shu qiymat yani nol kichkina bo'lsa slides o'zgaruvchida kelgan 5 ta cardni uzunligidan indexga ++ qilib qo'shamoz nimani qo'shamiz? tsikilni ichidagi yangi elementni
        const dot = document.createElement("li"); //yani li html tagi dynamic yaratildi va
        dot.setAttribute("data-slide-to", i + 1); //bu holatda "i + 1" massivlar noldan boshlangani uchun no;danmas birdan boshlashni nazarda tutadi va data-slide-to bu dynamic qo'shilgan atribut hissoblanadi yani dotga yani dotda dynamic qo'shilgan lilarda endi dynamic data-slide-to atributi bor yani data atributlar
        dot.classList.add("carousel-dot"); //dynamic yaratilgan dot o'zgaruvchiga cssdagi "dot" classi qo'shildi
        if (i == 0) {
            dot.style.opacity = 1;
        } //agar tsikilga qo'yilgan qiymatlar 0 ga teng bo'lsa opacity css qiyamto 1 bo'lsin yani nol bo'lsa qolgan nuqtalar yani dotdagi nuqtalarni opasitisi 1 bo'lib turadi yani shunda bosilganini rangi to'q qolganni esa opasitesi bir bo'lib hira bo'lib turadi
        indicators.append(dot); //dynamic yaratilgan li lar dynamic yaratilgan ol ga dynamic qo'shildi
        dots.push(dot); //dynamic yaratilgan dot o'zgaruvchini dots massiviga push qilindi yani endi dots massiviga hodisa ilish mumkun
        // console.log(dots);//dotsda nima borligini ko'rish uchun yozildi
    }

    slidesField.style.display = "flex"; //slidesfield o'zgaruvchida chaqiriligan offer__slider-inner classli ona divni bollari yani 5 ta card//endi cardalar flex sabab bir qator bo'lib turadi
    slidesWrapper.style.overflow = "hidden"; //yani bu holatda endi overflow sabab faqat birinchi card ekranda qoladi lqekin aslida hammasi ekranda bor bo'ladi faqar overflow css classi sabab slidesWrapperda chaqirilgan .offer__slider-wrapper ona divni ekran endi ko'rinayapti holos qolgani esa hidden qilindi overflow sishlashiga sabab esa getComputedStyle metodida slideswrapper borligi yani overfllow ekran enidan tashqari hamma narsani hidden qildi holos nimasini hidden qildi scrollini hidden qildi holos yani ekran uzoqlashtirilsa scroll bo'lmasaham qolgan 4 ta card turganligini ko'rish mumkun
    slidesField.style.transition = ".5s ease all";

    ////RegExpni alohida funksiyada yozildi va kerakli joylarda chaqirilib parametridagi width o'zgaruvchida ishlatildi
    ////darsda shu>>(/D\/g, "") sintaksizdan foydalanildi lekin ishlamadi shu sabab bu>>(/D/g, "") sontaksiz ishlatildi
    ////deleteNotDigits bilan carouseldagi eski bagham yo'q bo'ldi
    function deleteNotDigits(str) {
        //yani stringni numberga aylatrildi
        return parseInt(str.replace(/D/g, ""));
    }
    ////RegExpni alohida funksiyada yozildi va kerakli joylarda chaqirilib parametridagi width o'zgaruvchida ishlatildi
    next.addEventListener("click", () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`; //yani endi next buttoni bosilganda content chapga suriladi yani trnaslate x minusga ishlatildi va ofsset o'zgaruvchi berildi//yani bu holatda slideFieldda chaqirilgan offer__slider-wrapper ona diviga style dynamic berilepti va stylega tranform css qiymati chaqirilib minusga ishlatrish buyurilepti va har safar next buttonga click bo'lganda offset o'zgaruvchini qiymati berib qo'yildi yani nol. shunda har safar click qilinganda slidesField 0 bo'ladi yani o'z widthida qoladi yani har safar aftamatik tarzda nolga aylanadi
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = ".5")); //yani endi hamma nuqtalarni opasitisi 0.5 bo'lib turadi yani dotsni ichidagi hamma indexlar yani qiymatlar yani ol li lar faqat endi birinchi elementini opasitisi 1 bo'lib turadi rangi to'q bo'lib turadi
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`; //yani endi next buttoni bosilganda content chapga suriladi yani trnaslate x minusga ishlatildi va ofsset o'zgaruvchi berildi//yani bu holatda slideFieldda chaqirilgan offer__slider-wrapper ona diviga style dynamic berilepti va stylega tranform css qiymati chaqirilib minusga ishlatrish buyurilepti va har safar next buttonga click bo'lganda offset o'zgaruvchini qiymati berib qo'yildi yani nol. shunda har safar click qilinganda slidesField 0 bo'ladi yani o'z widthida qoladi yani har safar aftamatik tarzda nolga aylanadi
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach((dot) => (dot.style.opacity = ".5")); //yani endi hamma nuqtalarni opasitisi 0.5 bo'lib turadi yani dotsni ichidagi hamma indexlar yani qiymatlar yani ol li lar faqat endi birinchi elementini opasitisi 1 bo'lib turadi rangi to'q bo'lib turadi
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to"); //yani dots foreach qilinib ichidagi dotga yani dotsga push qilingan dotga hodisa ilindi

            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach((dot) => (dot.style.opacity = ".5")); //yani endi hamma nuqtalarni opasitisi 0.5 bo'lib turadi yani dotsni ichidagi hamma indexlar yani qiymatlar yani ol li lar faqat endi birinchi elementini opasitisi 1 bo'lib turadi rangi to'q bo'lib turadi
            dots[slideIndex - 1].style.opacity = 1;
        });
    });

    //65.chi dars (Web loyiha 17 chi darsi) Carousel va 66.chi dars (Web loyiha 18 chi darsi)  Dot Carousel va 69.chi dars (Web loyiha 19 chi darsi) RegExp
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tab() {
    ////34.chi dars (Web Loyiha-1 chi darsi) Loyiha, Tab darsi

    const tabsParent = document.querySelector(".tabheader__items"), //htmldagi preview katta ona dividagi tabheader__items bola divi chaqirib olindi yani bu bola div saytdagi  Category Of Series bolimi hissoblanadi Category Of Series bo'limi esa preview bo'limini boshi yani catrgoryalarni tanlash bo'limi hissoblanadi
        tabs = document.querySelectorAll(".tabheader__item"), //tabheader__item classli divlar categoreylarni nomi yani comedy sport fantastic bo'limlarga olib o'tish uchun kerak bo'ladigan html documentlar chaqirib olindi
        tabsContent = document.querySelectorAll(".tabcontent"); //htmldagi tabcontent classlari yani divlari 5 ta bo'lgani uchun komentariyga olingan edi endi esa komentariydan chiqariladi chunki js bilan dynamic tarzda o'zgartirilishlar kiritilishi kerak yani Category Of Series bo'limidagi categoriylarga bosilganda yani har biriga bosilgada shu categoriyga tegishli content tabcontent diviga asoisy bo'lib kelishi kerak !!!console.log(tabParent)!!!
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
    ////34.chi dars (Web Loyiha-1 chi darsi) Loyiha, Tab darsi

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tab);

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(){

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

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/js/script77.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/class */ "./src/modules/class.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/form */ "./src/modules/form.js");
/* harmony import */ var _modules_lodaer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/lodaer */ "./src/modules/lodaer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/slider */ "./src/modules/slider.js");
/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/tab */ "./src/modules/tab.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/timer */ "./src/modules/timer.js");

////BU LOYIHA BUTUNLAY TUGAGANDAN KEYIN HAMMA KODLARNI JS VA CSS KODLARNI HTMLGA SOLISHTIRIB LOYIHANI 100 FOIZ TUSHUNMAGANCHA BOSHQA DARSGA O'TMA YANI DARSDA TUSHUNMASANG BOSHQA JOYDAN IZLANIB BO'LSHAMAM  LOYIHANI 100 FOIZ TUSHUNIB BO'LGANDAN KEYINGINA BOSHQA DARSGA O'T









window.addEventListener("DOMContentLoaded", () => {
    //yani butun window bo'yicha DOMContentLoaded hodisasi qo'shildi yani html DOMdocumentlar butunlay ochilib bo'lgandan keyingina js kodlarimiz ishlaydi
    const modalTimerId = setTimeout(
        () => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(".modal", modalTimerId),
        5000
    );

    (0,_modules_class__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_1__["default"])(modalTimerId);
    (0,_modules_lodaer__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])("[data-modal]", ".modal", modalTimerId); //openModal va closeModal funksiyasi shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu openModal va closeModal funksiyalari ishlamayapti chunki openModal va closeModal funksyalari form.js ga chaqirilmagan endi openModal va closeModal funskiyalarini  o'zini alohida form.js ga chaqirish kerak shu hato sabab logdagi hato habari>>>form.js:109 Uncaught (in promise) ReferenceError: openModal is not definedat showThanksModal (form.js:109:1)at form.js:92:1
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_tab__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();

    ////webpacke kutubhonasi bilan script77.js filedagi loyihani uzun kodini har bir ishga aloqador funksiyalarni alohida alohida modullarga ajratib chiqildi endi dastur real loyihaga o'hshadi yani webpacke yuklanganda dist papka bilan keladi va disk papkada webpacke kutubhonasi bundle jsda hamma kodlarni tartiblab ishlatib beradi va aosiy script77.js fileda yuqoridagi kabi chaqiriladi yani require funksiyasi bilan chaqiriladi window.addEventListener("DOMContentLoaded" ichiga yozilishini sababi endi hamma kodlar modulga ajratilgan bo'lsada shu window.addEventListener("DOMContentLoaded"ni ichida ishlasa doimgiday ishlayveradi yani birinchi html csslar ochilib bo'lgandan keyingina ichidagi modullarga bo'lingan kodlarni ishlatadi
    ////74.chi dars Webpack
    ////npx webpack //endi webpacketni ishlatish uchun loyihani ochganda npx webpack buyrug'ini yozish kerak
    ////npx json-server --watch db.json //db.jsonni ishlatish uchun json-server npm packeti skachat qilingan shu sabab endi xamppda har safar bu loyiha ochilganda npx json-server --watch db.json shu buyruq bilan ochilishi kerak LEKIN AGAR XAMPP LOCAL SERVER PORTNI BO'SH BO'LSA YANI XAMMPNI SAYTIDA DASHBOARDDA BOSHQA LINK BO'LMASA YANI BO'SH BO'LSA  SERVER LOCAL BO'LIB ISHLAYVERADI LEKIN HAFSIZ BO'LMAYDI
    ////74.chi dars Webpack

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

/******/ })()
;
//# sourceMappingURL=bundle.js.map
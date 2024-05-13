"use strict";

//Delegatsiya
// const btn = document.querySelector(".btn-block");
// btn.addEventListener("click", () => {//htmldagi btn-block ona divi classida click hodisasi sodir bo'lganda logda bosildi texti chiqsin
//     console.log("bosildi");
// });

//event.target
// const btn = document.querySelector(".btn-block");
// btn.addEventListener("click", (event) => {
//     // console.log(event.target);//event targetni log holata chaqirilganda ona divga bosilganda ona div bola button elementlarga bosilganda elementlari chiqdi
//     console.dir(event.target);//event targetlo dir holatidda object chiqadi bu holatda ona divga bosilganda ona div bola button elementlarga bosilganda elementlari object ko'rinishida metodlari va propertiylari bilan birga chiqdi yani elementni nimalari bor ekanliginiham ko'rish mumkun
// });

// const btn = document.querySelector(".btn-block");
// btn.addEventListener("click", (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {//yani agarda bosilayotgan tagneme yani elementda event target bor bo'lsa va event targetni tagname button bo'lsa, BUTTON katta hariflarda yoziladi chunki tagnamelar js objectida katta hariflar bilan yoziladi shudna js button elementini tagnamesidagi buttonni taniydi//yani agarda bosilayotgan tagneme yani elementda event target bor bo'lsa va event targetni tagname button bo'lsa, console logda btn bosildi degan text chiqsin//shunda ona divmas elemetiga click hodisasi sodir bo'lgandagina click hodisasi sihlab logdagi vazifa bajariladi//yani ona divdan bola divlarga hodisa qo'shish bo'ldi //yani event va target addEventListener metodini (aslida addEventListener object funksiya hissoblanadi) qiymatlari desaham bo'ladi //YANI addEventListener FUNKSIYASINI PARAMETRIDA MAQSAD YANI MAQSADIDAGI ELEMENTDA YOKI ELEMENTLARDA TAGNEMI BUTTON BO'LSA!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         console.log("btn bosildi");
//     }
// });

const btn = document.querySelector(".btn-block");
btn.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("blue")) {
        //yani agar addEventListener funksya metodini maqsadi bo'lgan click hodisasida (event yani voqelikda) blue classi bor bo'lsa logda 'blue classli btn bosildi' textni chiqsin//yani classListida blue classi bor bo'lsa yani containsida yani blue classiga o'ralgan bo'lsa //YANI CLASSLIST, CONTAINS QIYMAT VA METODLARI HTMLDAN ULANGAN HAR QANDAY ELEMENTI OBJECT QILIB OLADI CHUNKI YANI BU HOLATDA MASSIV ASLIDA MASSIVHAM OBJECTNI BOSHQACHA TURI HISSOBLANADI  YANI BU HOLATDA CLASSLIST VA CONTAINSLAR BLUE OBJECTINI BOR YO'QLIGINI DOMDAN BILIB OLDI YANI HTML JS GA ULANGANDA HAMMASI JS GA MOSLASHADI OBJECT KO'RINISHIDA OBJECTDA ESA HAMMA MAYDA DETALLARGACHA HATTO BO'SH KATAKLARGACHA DALNILAR BOR HTMLDAGI ALL HTMLDA BU KO'RINIB TURIPTI SHU SABABHAM AGAR HODISA SODIR BO;O'LISHI KERAK BO'LGAN ELEMENTDA BLUE CLASSI BOR BO'LSA LOGDA TEXT CHIQSIN DEGAN BUYRUQ BAJARILDI BU !!!MENIMCHAAAAAA!!!  
        console.log("blue classli btn bosildi");

    }
});

console.dir(btn);
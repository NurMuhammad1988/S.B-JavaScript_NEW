"use strict";
const p = document.querySelectorAll("p");
console.log(p); //yani bu holatda htmldagi script tegi p teglaridan yuqorida ekanligida p teglar console logda ko'rinmadi sababi script tagi p elementlaridan oldingi qatorda ekanligida
//lekin script tegida defer atributu yozilgandan keyin p teglarimniz ishladi yani logda ko'rindi chunki defer atributi scriptlarni qayysi qatorda turgan bo'lsaham ohirida ishlashini taminlaydi yani DOM (html) elementi butunlay yuklanib bo'lishini kutadi va ohirida js kodlarni ishlatadi shunda defer atributi bilan scriptlarni bodydan tashqariga linklar oldigaham bemmalol qo'yish mumkun /deser atributi bilan nechta bo'lsaham script teglarni ulash va ohirida ishlatish mumkun yani defer jsdagi DOMContentLoaded hodisasini aftamatik tarzda kutadi yani dom yuklab bo'lingandan keyin js kodlarni ishlatadi

//async atributi yaniagar projectda bir nechta js filelar bor bo'lsa asyngham huddi deferday ishlaydi va deferdan bitta farqi asyng script filelarni ishlatishdi birinchi megabayti yani o'lchami kamini ishlatadi

//LEKIN ENG YAHSHISI SCRIPT KODLARNI HTMLNI ENG PASTIGA QO'YGAN AFZAL CHUNKI BAZI KUTUBHONALAR ISHLATGANDA HATO CHIQISHI MUMKUN

const script = document.createElement("script");
script.src = "js/second.js";//yani scriptni src atributiga
document.body.append(script);//yani bu holatda createElement metodi bilan scriptni dynamic tarzda qo'shdik va append metodi bilan scripti bodyga export qildik desakham bo'ladi

function loadScript (src){//doim qayta qayta scriptlar qo'shish uchun yaratilgan funksiya
    const script = document.createElement("script");
    script.src = src//yani scriptni src atributiga//bu funksiyada sync atributi aftamatik holatda ishlaydi yani qo'shilgan bo'ladi
    script.async =false//yani shunday yo'l bilan agar kerak bo'lsa asyng atributi o'chirib qo'yiladi
    document.body.append(script);//yani bu holatda createElement metodi bilan scriptni dynamic tarzda qo'shdik va append metodi bilan scripti bodyga export qildik desakham bo'ladi
    
}
loadScript("js/second.js")
loadScript("js/third.js")

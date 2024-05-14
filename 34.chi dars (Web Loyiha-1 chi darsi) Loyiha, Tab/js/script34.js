"use strict";
////BU LOYIHA BUTUNLAY TUGAGANDAN KEYIN HAMMA KODLARNI JS VA CSS KODLARNI HTMLGA SOLISHTIRIB LOYIHANI 100 FOIZ TUSHUNMAGANCHA BOSHQA DARSGA O'TMA YANI DARSDA TUSHUNMASANG BOSHQA JOYDAN IZLANIB BO'LSHAMAM  LOYIHANI 100 FOIZ TUSHUNIB BO'LGANDAN KEYINGINA BOSHQA DARSGA O'T
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {//yani butun window bo'yicha DOMContentLoaded hodisasi qo'shildi yani html DOMdocumentlar butunlay ochilib bo'lgandan keyingina js kodlarimiz ishlaydi

    const tabParent = document.querySelector(".tabheader__items"),//htmldagi preview katta ona dividagi tabheader__items bola divi chaqirib olindi yani bu bola div saytdagi  Category Of Series bolimi hissoblanadi Category Of Series bo'limi esa preview bo'limini boshi yani catrgoryalarni tanlash bo'limi hissoblanadi
    tabs = document.querySelectorAll(".tabheader__item"),//tabheader__item classli divlar categoreylarni nomi yani comedy sport fantastic bo'limlarga olib o'tish uchun kerak bo'ladigan html documentlar chaqirib olindi
    tabsContent = document.querySelectorAll(".tabcontent")//htmldagi tabcontent classlari yani divlari 5 ta bo'lgani uchun komentariyga olingan edi endi esa komentariydan chiqariladi chunki js bilan dynamic tarzda o'zgartirilishlar kiritilishi kerak yani Category Of Series bo'limidagi categoriylarga bosilganda yani har biriga bosilgada shu categoriyga tegishli content tabcontent diviga asoisy bo'lib kelishi kerak !!!console.log(tabParent)!!!

    function hidetabContent(){
        tabsContent.forEach(item =>{
            item.style.display = "none"
        })
    }

    hidetabContent()

    function showtabContent(){}

});

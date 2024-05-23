"use strict";
// const box = document.querySelector(".box");
// const width = box.clientWidth;//cssdagi box sizing border box sabab clientWidth lar to'g'ri ishlaydi
// const height = box.clientHeight;//clientWidth va clientHeight qiymatlari bilan windowdagi yani ekrandagi clientga ko'rinadigan joy aytiladi yani bu qiymatlarni jsda cssdan olib dynamic kodlar yozish mumkun
// console.log(width);
// console.log(height);

// const width = box.offsetWidth;
// const height = box.offsetHeight;
// console.log(width);
// console.log(height);

// const height = box.scrollHeight; //yani bu scrollHeight parametri windowni ichini yani belgilangdan divni ichini yani scrolini uunligini aniqlab olib beradi va keyin shu jsga olingan window scroli bilan windowga dynamic stylelar berish mumkun masalan progress barlar yoki //yani bu holatda htmldagi box classli div ichidagi scrollni bo'yini aniqlab oldik agar cssdagi scroolni o'chirib qo'yilsa shuncha text 400 ga 350 px joyga sig'magan bo'lardi//yani overflow: scroll; classi sabab text juda ko'p bo'lsaham 400ga 350 pxlni ichiga sig'gan yani scroll qilib pastga textni ohirigacha tushish mumkun const height = box.scrollHeight holatida esa shu scrollni asil uzunligini bilib olish mumkun
// console.log(height);

//scrollHeight qiymati
// const box = document.querySelector(".box"),
//     btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     box.style.height = box.scrollHeight + "px";//yani scrollHeight bu joyda boxni asil bo'yini uzunligini ko'rsatadi va + "px" bilan numberni stringga o'girvoldik
// });
// console.log(box.scrollHeight); //yani bu holatda box nomli o'zgaruvchi yaratib ichiga htmldagi box divini jsga ovoldik va yana btn nomli o'zgaruvchi yaratib htmldagi buttonni jsga chaqirvoldik va btnga click hodisasi sodir bo'lganda box o'zgaruvchi ichidagi box classiga height qo'shamiz ysni boxni ichidagi elementlar butunlay ko'rinadi yani asil uzunligini ko'rsatadi

//scrollTop qiymati
// const box = document.querySelector(".box"),
//     btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     console.log(box.scrollTop);
// });

// //getComputedStyle metodi
// const style = window.getComputedStyle(box)
// // console.log(style);
// console.log(style.display);

////documentElement qiymati
// console.log(document.documentElement.clientWidth); //yani ekranni butun uzunligi
// // console.log(document.documentElement.clientHeight); //yani ekranni bo'yini butun uzunligi

// ////console logda scrollga aloqador buyruqlar
// // document.documentElement.scrollTop = 0// bu holatda ekranda qayerda bo'lsaham topga yani tepaga 0 chi pixelga olib chiqish kodi
// window.scrollBy(0, 500)//yani ekranda qaysi pixeldan boshlab ko'rsatilsin degan buyruqga 0 dan boshlab 500 chi pixelgacha ko'rsatilsin deyildi

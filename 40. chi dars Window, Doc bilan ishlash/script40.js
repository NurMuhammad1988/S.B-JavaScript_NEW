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

// const height = box.scrollHeight//yani bu scrollHeight parametri windowni ichini yani belgilangdan divni ichini yani scrolini uunligini aniqlab olib beradi va keyin shu jsga olingan window scroli bilan windowga dynamic stylelar berish mumkun masalan progress barlar yoki //yani bu holatda htmldagi box classli div ichidagi dcrollni bo'yini niqlab oldik
// console.log(height);

const box = document.querySelector(".box"),
    btn = document.querySelector("button");
btn.addEventListener("click", () => {
    box.style.height = box.scrollHeight + "px";
});
console.log(box.scrollHeight);

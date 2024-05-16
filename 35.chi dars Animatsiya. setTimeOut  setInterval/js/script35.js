"use strict";

// //setTimeout callback funksiyasi
// //// 1-sintaksis)
// setTimeout(() => {
//     //setTimeout callback funksiya hissoblanadi
//     console.log("set time out 1"); //1000 ms dan keyin set time out texti logda ko'rindi
// }, 1000);

// //// 2-sintaksis)
// setTimeout(
//     (text) => {
//         //settimeout funksiyasi parametridaham narsa qabul qilib callback funksiyani qavusidan keyin uchinchi parametridaham textni qabul qiladi
//         console.log(text);
//     },
//     2000,
//     "set time out 2"
// );

// //// 3-sintaksis)
// setTimeout(logger,3000)
// function logger(){
//   console.log("set time out 3");
// }


////setTimeout va clearInterval funksiyasi

const btn = document.querySelector("#btn");

let timerId;

btn.addEventListener("click", () => {
     timerId = setTimeout(logger, 1000);//bu holatda timerid local o'zgaruvchi hissoblanadi
});
clearInterval(timerId);
function logger() {
    //lekin real loyihalarda settimeout funksiyasini o'zgaruvchi ichiga yozgan yahshi chunki clearinterval funksiyasi bilan settimeoutni to'htatish kerak bo'ladi
    console.log("set time out ");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const btn = document.querySelector('#btn');
// function myAnimation() {
//   const car = document.querySelector('.car');
//   let pos = 0;
//   const timerId = setInterval(frame, 10);
//   function frame() {
//     if (pos === 700) {
//       clearInterval(timerId);
//     } else {
//       pos++;
//       car.style.left = pos + 'px';
//     }
//   }
// }
// btn.addEventListener('click', myAnimation);

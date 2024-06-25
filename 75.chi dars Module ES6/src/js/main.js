"use strict";
////ES6 DA IMPORT EXPORTLAR
//// bu 75 chi Module ES6 darsi takrorlanayotganda npx webpacke shu papkaga kirib  ishlatilishi kerak

////boshqa js failga o'zgaruvchini export qilish

////birinchi yo'li export
// const firstVar = "Hello World first"
// export{firstVar}//export

////ikkinchi yo'li export
// export const secondVar = "Hello World second"//funksiya yoki o'zgaruvchini oldiga export kalit so'zi yozlishi yani  aftamatik tarzda export qiladi

////uchinchi yo'li export default
// export default function logger() {
//     console.log("Hello World third");
// } //export defaultni yuqoridagi ikki hil export qilishdan farqi export defaultda bitta filedan faqat bitta funksiyani yoki o'zgaruvchini export default qilib export qilish mumkun bu holatda main.jsdan faqat bitta shu logger funksiyani export qilishi mumkun yani agar main.jsdan faqat bitta narsa export qilish kerak bo'lsa export defaultdan foydalanish mumkun lekin main.jsdan bir nechta o'zgaruvchi yoki funksiya export qilish kerak bo'lsa yuqoridagi birinchi yo'ldan foydalangan maqul
///////////////////////////////////////////////////////

//// bir nechta funksya yoki o'zgaruvchini export qilishni yahshi yo'li
// const firstVar1 = "Hello World first-1";
// const secondVar2 = "Hello World second-2";
// const thirdVar3 = "Hello World third-3 ";
// export { firstVar1, secondVar2,thirdVar3 };
///////////////////////////////////////////////////////

////* as Bir nechta funksya yoki o'zgaruvchini export qilishni yahshi yo'lini import qilishni * as usuli
const firstVar1 = "Hello World first-1";
const secondVar2 = "Hello World second-2";
const thirdVar3 = "Hello World third-3 ";
export { firstVar1, secondVar2,thirdVar3 };
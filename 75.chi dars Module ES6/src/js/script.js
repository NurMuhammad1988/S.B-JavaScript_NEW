"use strict";
////ES6 DA IMPORT EXPORTLAR
//// bu 75 chi Module ES6 darsi takrorlanayotganda npx webpacke shu papkaga kirib  ishlatilishi kerak

////boshqa js filedan o'zgaruvchini import qilish

////birinchi yo'li import
// import { firstVar } from "./main";
// console.log(firstVar);

////ikkinchi yo'li import
// import { secondVar } from "./main";
// console.log(secondVar);

////uchinchi yo'li import
// import logger from "./main";
// logger();
///////////////////////////////////////////////////

//// bir nechta funksya yoki o'zgaruvchini import qilishni yahshi yo'li
// import { firstVar1, secondVar2, thirdVar3 } from "./main";
// console.log(firstVar1, secondVar2, thirdVar3);
///////////////////////////////////////////////////

////* as Bir nechta funksya yoki o'zgaruvchini import qilishni yahshi yo'lini import qilishni * as usuli
import  * as main  from "./main";
console.log(`${main.firstVar1} ${main.secondVar2} ${main.thirdVar3}`);
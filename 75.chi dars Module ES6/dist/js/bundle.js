/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstVar1: () => (/* binding */ firstVar1),
/* harmony export */   secondVar2: () => (/* binding */ secondVar2),
/* harmony export */   thirdVar3: () => (/* binding */ thirdVar3)
/* harmony export */ });

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
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");

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

console.log(`${_main__WEBPACK_IMPORTED_MODULE_0__.firstVar1} ${_main__WEBPACK_IMPORTED_MODULE_0__.secondVar2} ${_main__WEBPACK_IMPORTED_MODULE_0__.thirdVar3}`);
/******/ })()
;
//# sourceMappingURL=bundle.js.map
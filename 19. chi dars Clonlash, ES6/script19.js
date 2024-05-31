"use strict";
////Clonlash, ES6 copiy yani nusxalash
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//numberda copiy qilish yani clonlash

// let x = 10
// let y = x//yani y ga x copiy qilindi

// y = y + 5
// console.log(x);
// console.log(y);//yani bu joyda x nomli o'zgaruvchi yaratib unga 10 qiymati berildi va yana y nomli o'zgaruvchi yaratib unga x qiymatini berdik yani o'zidan oldingi qatorda yaratilgan x o'zgaruvchini qiymatini qo'ydik yani x o'zgaruvchidagi 10 qiymatini qo'ydik va y = y qilib unga 5 ni qo'shganimzda y o'zgaruvchini qiymati 15 bo'ldi sabab: y o'zgaruvchidagi x 10 ga teng yani x o'zgaruvchini qiymatini y  o'zgaruvchiga nusxaladik
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////booleanda copiy qilish yani clonlash
// let isMarried = false;
// let isArray = isMarried;//yani isarrayga ismarried copy qilindi
// isArray = true;

// console.log(isMarried);
// console.log(isArray); //copy sababidan false true bo'ldi yani copy qilingan o'zgaruvchi true qilinidi false o'zgaruvchini esa asil qiymati o'zgarmasdan turipti
//////////////////////////////////////////////////////////////////////////////////////////////////////////

////objectda va arrayda muvaffaqiyatsiz, hato copiy qilish yani clonlash
// const number = {
//     x: 10,
//     y: 5,
// };
// const newNumber = number; //bu joyda number o'zgaruvchini nusxasi olinmadi shunchaki havolasi olindi bu esa hato yani copy qilinmadi yani clonlanmadi
// newNumber.x = 15; //bu hato pastki qatordagi komentni o'qi
// console.log(number);
// console.log(newNumber); //yani bu holatda number o'zgaruvchini newNumber o'zgaruvchiga copy qilmoqchi bo'ldik lekin copymas faqat havolasi yani ssilkasi kelarkan yani number o'zgaruvchini newNumber o'zgaruvchiga copy qilmoqchi bo'lib newNumberni .x qilib 15 qildik lekin logda ikkala o'zgaruvchini qiymatiham o'zgarib ketdi yani 15 ga o'zgarib ketdi yani mewNumber.x=15 o'zini asli bo'lgan number o'zgaruvchiniham qiymatini o'zgartirib yubordi sababi objectda bu usul bilan yani number malumot turidagi yoki boolean malumot turidagi kabi clonlanmaydi yani copy qilinmaydi

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
////objectda va arrayda copiy qilish yani clonlash !!!!!!!!!!BU QIYIN YO'LI!!!!!!!!!!
// function nusxaObject(obj) {
//     //yani bu obj argument yani bu functsia nusxaObject()qilib pastda  chaqirilganda va parametiriga qaysi object yozilsa o'sha objectni intirigatsa qiladi yani tsikilga qo'yib qiymatlarini nusxasini oladi asl nusxaga esa tasir qilmaydi
//     //yani functsiya yordamida objectdan copy olish
//     let objNusxa = {}; //oddiy bo'sh object yani numberr (yani nusxaObject funksiyasi chaqirilganda argumentiga beriladigan objectni bu holatda numberr object o'zgaruvchisi) o'zgaruvchi tsikilga qo'yilganda yangi qiymatlar shu objNusxaga qo'yiladi
//     for (let key in obj) {
//         //yani nusxaObject ni parametriga berilgan objni for in bilan intrigatsa yani tsikilga qo'yildi
//         //for in yani faqat objectlarni tsikl qilish uchun ishlatiladi
//         objNusxa[key] = obj[key]; //yani bu joydagi holat yani tsikilga let objNusxa ni hususiyatlariga yani keylariga keylari berib chiqildi va nusxaObject ni parametridagi objni keylari berib chiqildi
//     }
//     return objNusxa; //qaytarish esa objectni nusxasi hissoblanadi
//     //yani umuman aytganda bu joyda nusxaObject nomli functsiya yaratilib uni parametriga obj berib qo'yildi va shu object uchun functsiyani ichida let objNusxa nomli alohi object yaratildi (yani tsiklda nusxalangan objectlar shu yani objNusxa nomli objectga tushadi) va for in tsikli parametriga asosiy nusxaObject  funksiyadagi obj keylari tsikilga qo'yildi va forni ichida objNusxani keylariga obj ni keylari berib chiqildi shunda nusxaObject funksiyasini parametriga qanaqadur object yoki array berilsa object yoki arrayni nusxasini oladi linkini emas nusxasini oladi va bu nusxaObject functsiyani har qanday joyda qayta qayta chaqirib object va arraylarni nusxasini olish mumkun
// }
// const numbers = {
//     x: 10,
//     y: 5,
// };
// const newNumbers = nusxaObject(numbers); //yani numbersdan newnumbersga numbersni qiymatlarini nusxaladik yani nusxasi olinishi kerak bo'lgan object yoki array nusxaObjectni parametrida chaqirilishi kerak
// newNumbers.x = 15; //yani bu bilan nusxalangan objectni qiymati o'zgartirildi yani numbers objectdagi x ni qiymati 15 ga tenglashtirilib qo'yildi bu holatda numbersda x qiymatni asil qiymati yani 10 o'zgarmadi yani nusxalangan qiymati 15 ga o'zgartirildi
// console.log(numbers);
// console.log(newNumbers); //yani nusxaObject funksiyasi yordamida numbers objectini qiymatlarini o'zgartirmasdan yangi newNumbers o'zgaruvchisiga copy qildik yani clonladikBU nusxaObject funksiyasi bilan object array numberlarni clonlash mumkun
// //bu object va arrayni clonlashni eng qiyin yo'li ekan!!!
// //////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////objectda va arrayda copiy qilish yani clonlash NUMBERS OBJECTINI ICHIDAGI Z OBJETCTINI QIYMATLARINI CLONLASH YANI OBJECTNI ICHKI HUSUSIYATLARINI CLONLASH YANI>>>(DEEB OBJECT)
// function nusxaObject(obj) {
//     //yani bu obj argument yani bu functsia nusxaObject()qilib pastda  chaqirilganda va parametiriga qaysi object yozilsa o'sha objectni intirigatsa qiladi yani tsikilga qo'yib qiymatlarini nusxasini oladi asl nusxaga esa tasir qilmaydi
//     //yani functsiya yordamida objectdan copy olish
//     let objNusxa = {}; //oddiy bo'sh object yani numberr (yani nusxaObject funksiyasi chaqirilganda argumentiga beriladigan objectni bu holatda numberr object o'zgaruvchisi) o'zgaruvchi tsikilga qo'yilganda yangi qiymatlar shu objNusxaga qo'yiladi
//     for (let key in obj) {
//         //yani nusxaObject ni parametriga berilgan objni for in bilan intrigatsa yani tsikilga qo'yildi
//         //for in yani faqat objectlarni tsikl qilish uchun ishlatiladi
//         objNusxa[key] = obj[key]; //yani bu joydagi holat yani tsikilga let objNusxa ni hususiyatlariga yani keylariga keylari berib chiqildi va nusxaObject ni parametridagi objni keylari berib chiqildi
//     }
//     return objNusxa;//qaytarish esa objectni nusxasi hissoblanadi
//     //yani umuman aytganda bu joyda nusxaObject nomli functsiya yaratilib uni parametriga obj berib qo'yildi va shu object uchun functsiyani ichida let objNusxa nomli alohi object yaratildi (yani tsiklda nusxalangan objectlar shu yani objNusxa nomli objectga tushadi) va for in tsikli parametriga asosiy nusxaObject  funksiyadagi obj keylari tsikilga qo'yildi va forni ichida objNusxani keylariga obj ni keylari berib chiqildi shunda nusxaObject funksiyasini parametriga qanaqadur object yoki array berilsa object yoki arrayni nusxasini oladi linkini emas nusxasini oladi va bu nusxaObject functsiyani har qanday joyda qayta qayta chaqirib object va arraylarni nusxasini olish mumkun
// }
// const numbers = {
//     x: 10,
//     y: 5,
//     z:{//BUNI CLONLASHNI BOSHQA METODLARI  BOR
//         a:1,
//         b:2
//     }
// };
// const newNumbers = nusxaObject(numbers);//yani numbersdan newnumbersga numbersni qiymatlarini nusxaladik yani nusxasi olinishi kerak bo'lgan object yoki array nusxaObjectni parametrida chaqirilishi kerak
// newNumbers.x = 15;//yani bu bilan nusxalangan objectni qiymati o'zgartirildi yani numbers objectdagi x ni qiymati 15 ga tenglashtirilib qo'yildi bu holatda numbersda x qiymatni asil qiymati yani 10 o'zgarmadi yani nusxalangan qiymati 15 ga o'zgartirildi
// newNumbers.z.a = 10//lekin numbers objectini ichidagi z objectini a qiymati baribir o'zgarmadi yani copiy qilinmadi yani faqat linki keldi yani nusxaObject numbers objectni ichidagi objectga tasir qilamdi yani a ni asil qiymati o'zgarib ketdi yani copiy qilinmasdan faqat linki bilan o'zgarib ketdi
// console.log(numbers);
// console.log(newNumbers); //yani nusxaObject funksiyasi yordamida numbers objectini qiymatlarini o'zgartirmasdan yangi newNumbers o'zgaruvchisiga copy qildik yani clonladik
// //bu object va arrayni clonlashni eng qiyin yo'li ekan!!!
// //////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ES6  clonlash  Object.assign() metodi bilan
// const numbers = {
//     x: 10,
//     y: 5,
// };
// const newNumbers = Object.assign({}, numbers);//yani object assign metodi ikkita parametr qabul qiladi birinchisiga target object yani nusxalangan objectni solib beradi yani {} qo'yilsa nusxalarni bo'sh objectga solib beradi nimani yani ikkinchi manbani yani bu holatda numbers objectni yani assignni ikkinchi parametridagi objectni
// console.log(numbers);
// newNumbers.x = 15;
// console.log(newNumbers); //yani Object.assign() metodi bilan es6 da clonlash juda oson
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // ES6  clonlash  Object.assign() metodi bilan ikkita objectni birlashtirish yani bir biriga qo'shish
// const numbers = {
//     x: 10,
//     y: 5,
// };
// const addNumber = {
//     z: 15,
// };
// const allNumbers = Object.assign(numbers, addNumber);//yani object assign metodi ikkita parametr qabul qiladi birinchisi target object yani nusxalangan objectni solib beradi yani {} qo'yilsa nusxalarni bo'sh objectga solib beradi nimani yani ikkinchi manbani yani bu holatda addnumberni yani objectni birlashtiradi natijani bitta shu allNumbersga solib beradi
// console.log(numbers);
// console.log(allNumbers); //yani Object.assign() metodi bilan es6 da clonlash juda oson
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arraylarda clonlash slice metodi
// const arr = [1, 2, 3];
// const numbers = arr.slice(); //yani arrayni clonlash slice() metodi bilan amalga oshiriladi yani bu joyda numbers nomli yangi o'zgaruvchi ochib shu yangi o'zgaruvchiga arr massivini slice metodi bilan kopiya yani clonlab olindi
// console.log(arr); //yani asosiy arrayni logi
// console.log(numbers); //yani yangi numbers nomli o'zgaruvchiga arr o'zgaruvchisdan kopiya qilingan holati uchun log

// //////
// const arr2 = [1, 2, 3, 4];
// const numbers2 = arr2.slice(1, 2);
// console.log(arr2);
// console.log(numbers2); //yani bu holatda slice metodini argumentiga asosiy arr2 massividan clonlaganda hamma massivnimas faqat tanlangan kerakli massivlarniham noldan boshlab alohida yuklab olish mumkun masalan bu holatda arr2 arrayni qiymatidan 0 bilan 2 chini orasini clonla degan buyruq berildi

//////
// const arr3 = [1, 2, 3];
// const numbers3 = arr3.slice();
// numbers3[1] = "Nur"; //yani slice metodi bilan numbers3 o'zgaruvchisiga arr3 o'zgaruvchisadan massivni copy qildik va  numbers3 ni  yani massivni nusxasi bor o'zgaruvchini chaqirganda shu to'rt burchak qavus bilan [] ichiga massivni kerakli itemni (raqamda) yozib uni o'zgartirdik yani "Nur" ga yani  massiv noldan bsohlanadi bu holatda 1 chi element o'zgartirildi yani 1 dan bsohlab sanaganda 2 o'zgartirildi lekin dasturlash bo'yicha raqamlar noldan boshlangani uchun 1 o'zgartirildi
// console.log(arr3);
// console.log(numbers3);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////Spread operatori ... yani (aylantirish operatori) yani massivni shunchaki yangi massivga aylantirib beradi
// const liverpool = ["Salah", "Mane"];
// const manCity = ["Mahrez"]
// const mixPlayer = [...liverpool, ...manCity]//yani mixPlayer o'zgaruvchi yuqoridagi liverpool va mancity o'zgaruvchilaridagi qiymatlarni nusxalab yani aynann nusxalab shunchaki linkini emas nusxasini oldi va spread yani uchta nuqta operatori bilan liverpool va mancity o'zgaruvchilarni birlashtirib yubordi shunda mixplayer o'zgaruvchida yuqiridagi ikkala o'zgaruvchidagi qiymatlarni nusxasi birlashtirildix //spread operatorini yozilish belgisi yani chaqirish belgisi uchta nuqta hissoblanadi yani bitta massivga ikkita massivni joylab qo'yildi yani nusxalari bitta arrayga joylab qo'yildi
// console.log(liverpool);
// console.log(manCity);
// console.log(mixPlayer);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

////objectda va arrayda copiy qilish yani clonlash !!!!!!!!!!BU QIYIN YO'LI!!!!!!!!!!
//commentsiz tushunish uchun yozilgani
// function nusxaObject(obj) {
//     let objNusxa = {};
//     for (let key in obj) {
//         objNusxa[key] = obj[key];
//     }
//     return objNusxa;
// }
// const numbers = {
//     x: 10,
//     y: 5,
// };
// const newNumbers = nusxaObject(numbers);
// newNumbers.x = 15;
// console.log(newNumbers);
/////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6  clonlash  Object.assign() metodi bu OSON YO'LI!!!!!!
// const numbers = {
//     x: 10,
//     y: 5,
// };
// const newNumbers = Object.assign({}, numbers);
// newNumbers.x = 15;
// console.log(newNumbers); //yani Object.assign() metodi bilan es6 da clonlash juda oson
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ES6  clonlash  Object.assign() metodi bilan ikkita objectni birlashtirish yani bir biriga qo'shish
// const numbers = {
//     x: 10,
//     y: 5,
// };
// const addNumber = {
//     z: 15,
// };
// const allNumbers = Object.assign(numbers, addNumber);
// console.log(allNumbers);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arraylarda clonlash slice metodi
// const arr = [1, 2, 3];
// const numbers = arr.slice();
// console.log(numbers);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///slice metodi bilan arrayni ichidan tanlab olib nusxalash
///////////// 0  1  2  3
const arr2 = [1, 2, 3, 4];
/////////////////////////// 0  3 yani 2 ni o'zini alohida nusxalab oldi
const numbers2 = arr2.slice(1, 2);
console.log(numbers2);

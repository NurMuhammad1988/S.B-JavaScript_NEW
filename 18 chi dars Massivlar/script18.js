"use strict";
//Massivlar

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//length metodi
// const arr = [1,2,3,4,5,6]
// console.log(arr.length);//yani arrayni yani massivni uzunligini aniqlash
// //pop  methodi
// const arr1 = [1,2,3,4,5,6]
// arr1.pop()//pop metodi arrayni ohirgi elementini o'chirib tashlaydi yani 6 ni udalit qildi
// console.log(arr1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //push metodi
// const arr2 = [1,2,3,4,5,6]
// arr2.push(7)//push metodi massivni ohiriga bitta yangi element qo'shadi sanoq bo'yicha yani 7 ni qo'shdik lekin hohlagan raqamni qo'shish mumkun
// console.log(arr2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //shift metodi deyali ishlatilmaydi ishlatilsaham buzish uchun ishlatiladi
// const arr3 = [1,2,3,4,5,6]
// arr3.shift()//shift metodi massivni boshidagi 1 chi elementni udalit qiladi
// console.log(arr3);
// ////unshift metodi deyali ishlatilmaydi ishlatilsaham buzish uchun ishlatiladi
// const arr5 = [1,2,3,4,5,6]
// arr5.unshift(0)//unshift metodi massivni boshiga yangi nolinchi elementni qo'shib qo'yadi
// console.log(arr5);
// ////bu shift va unshift metodlari deyarli ishlatilmaydi ishlatmaslik tafsiya qilinadi chunki masalan serverdan massiv kelsa masalan kattaroq massiv kelsa shift metodi bilan 1 chi element udalit qilinsa qolgan elementlarni tartib raqami udalit bo'lib ketadi yani indexlari o'zgaradi qaytadan noldan raqamlab chiqiladi masalan 0 chi element udalit bo'lsa massivlar qaytadan yuklanadi va serverda qo'yilgan tartib o'zgarib ketadi  unshiftham shu massivni boshiga 0 chi elementni qo'shganda bu joydaham huddi yuqoridagidaqa holat takrorlanadi

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //massivni  tsikil qilish yani intirgatsa qilish yani massivni ichidagi elementlari olish
// const arr6 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr6.length; i++) {//yani arr6 ni lengthni intirigatsa qil
//     console.log(arr6[i]);//yani [i] bilan aftamatik intirgatsa bo'ladi
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for of tsikili bilan for of bilan massivni intirgatsa qilish
// const arr7 = [1, 2, 3, 4, 5, 6];
// for (let value of arr7) {
//     console.log(value);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //length metodi massivlarni uzunligini berish holati
// const arr8 = [1, 2, 3, 4];
// console.log(arr8.length);//yani length massivni uzunligini o'lchaganda 0 dan hissoblab ohiriga 1 ni qo'shib umumiy javobni aytadi chunki dasturlashda raqamlar noldan boshlanadi mazkur arr8 o'zgaruvchisidagi massivlar esa 4 ta length birinchi 0 deydi ikkinchi 1 deydi uchunchi 2 deydi to'rtinchi 3 deydi va ohirgi 3 ga 1 ni qo'shib massivni uzunligi 4 deydi yani 0 chi elementni ohirida hissoblab qo'shvoradi bu javob esa to'g'ri hissoblanadi

////////////////////////////////////////////////////////////////////////////////////////////////////////
//length metodi massivlarni uzunligini berish holatidagi lengthni hato keltirib chiqaradigan holati
// const arr9 = [1, 2, 3, 4];
// arr9[99] = 0;//yani arraylarga bunaqa qiymat berish hato hissoblanadi chunki >>//yani bu holatda arr8 o'zgaruvchisida tushuntirilganday arr9 ga 99 chi element qo'shilganda length ohiriga 1 ni qo'shib arrayni lengthsini 100 qilib qo'ydi bu arrayni buzib yuboradi
// console.log(arr9.length);

///////////
// const arrr = [1, 2, 3, 4];

// arrr[99] = 0; //yani arraylarga bunaqa qiymat berish hato hissoblanadi chunki >>//yani bu holatda arr8 o'zgaruvchisida tushuntirilganday arr9 ga 99 chi element qo'shilganda length ohiriga 1 ni qo'shib arrayni lengthsini 100 qilib qo'ydi bu arrayni buzib yuboradi
// console.log(arrr); //yani [99] hatosi sababli 95 ta empty yani bo'sh items yani element paydo bo'ldi yani 1 2 3 4 orada bo'sh 95 ta items va 99 chi elementga length 1 qo'shib jami 100 ta

////////////////////////////////////////////////////////////////////////////////////////////////////////
//forEach metodi eng ko'p ishlatiladigan intirgatsa yani tsikli qilib bberadigan metod hozirgi kunda eng ko'p ishlatiladi
// const arr10 = [1, 2, 3, 4];
// arr10.forEach(function (item, index) {
//     //yani foreach metodi array functsiya bilan 3 ta parametr qabul qiladi  1 chi parameter VALUE    yani qiymati 2 chi parameetr INDEX 3 parameter butun MASSIVNI  o'zi!!! //foreach metodi array function qabul qiladi parametridagi 1 chi parametr item arr10 o'zgaruvchi ichidagi qiymatlar hissoblanadi 2 chi parametr esa index esa yani arr10ni raqamalari hissoblanadi uchinchi 3 chi parametr esa o'zgaruvchi yani arr10
//     console.log(`${index} : ${item} into arr ${arr10}`);
//     //logni javobi pastda yani yani 0 dan boshlab indexni qaytarayapti 1 dan boshlab qiymatni qaytarayapti va arr10 ni to'liq yozilgan holida qaytarayapti
//     //0 : 1 into arr 1,2,3,4
//     //1 : 2 into arr 1,2,3,4
//     //2 : 3 into arr 1,2,3,4
//     //3 : 4 into arr 1,2,3,4
// }); //foreachni afzal tarafi yani callback qaytaradi yani bu callback function massiv uchun har safar intirigatsa bo'lganda ishlaydi foreachni for of va for in dan farqi for of va for in larda break va continu qilsa bo'ladi

////////////////////////////////////////////////////////////////////////////////////////////////////////
//split metodi yani matn malumot turini massivga o'tkazadi
// const movies = prompt("What's your favorute movies?" , "");
// const userMovies = movies.split(", ")//yani bu joyda split metodi bilan har vergul va probeldan keyingi matnni massivga olish buyurildi
// console.log(userMovies);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// //join metodi matnlarni orasini - <<<manashu bilan bo'lib beradi
// const movies1 = prompt("What's your favorute movies?" , "");
// const userMovies1 = movies1.split(", ")
// console.log(userMovies1.join('- '));////join metodi matnlarni orasini - <<<manashi bilan bo'lib beradi yani yani split bilan matndan massivga join metodi bilan esa massivdan matinga o'tkazishimiz mumkun

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//sort metodi yani  hariflarni alphabet shaklida (alfabet)  a, b  qilib beradi yani alfabet shaklida tartibida terib beradi
const movies2 = prompt("What's your favorute movies?" , "");
const userMovies2 = movies2.split(", ")
userMovies2.sort()//sort metodi alfabet shaklida a dan boshlab terib beradi sartirofka qilib
console.log(userMovies2.join('- '));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////sort metodi array number malumot turlari bilan ishlaganda
// const arr11 = [2, 13, 14, 25, 8, 0];
// arr11.sort();////sort metodi array number malumot turlari bilan ishlaganda tartiblashni noldan boshlaydi masalan bu joyda javob [ 0, 13, 14, 2, 25, 8 ] chunki sort metodi array ichidagi numberlarni 1 dan boshlab matematik tartib bilan tartiblab chiqadi
// console.log(arr11);

///////////////////////////////////////////////////////////////////////////////////////////////////////
//sort metodi array number malumot turlari bilan ishlaganda
// const arr12 = [2, 13, 14, 25, 8, 0];
// arr12.sort(compereFn);////sort metodi array number malumot turlari bilan ishlaganda tartiblashni noldan boshlaydi masalan bu joyda javob [ 0, 13, 14, 2, 25, 8 ] chunki sort metodi array ichidagi numberlarni 1 dan boshlab  tartib bilan tartiblab chiqadi
// console.log(arr12);
// function compereFn(a , b){//yani sort metodi va function compereFn array funksiyasi bilan raqamlarni shunday tartibda [ 0, 2, 8, 13, 14, 25 ] yani array ichidagi numberlarni haqiqiy matematik yo'l bilan 0 dan boshlab 1 2 3 4 5 6 qilib tartiblab chiqadi
//     return a - b
// }
/// sort va function compereFn ni yozilishini ikkinchi sintaksisi yani qisqa yozilishi
// const arr13 = [2, 13, 14, 25, 8, 0];
// arr13.sort((a, b) => a - b);//yani compereFn array functionni qisqa yozilishi
// console.log(arr13);

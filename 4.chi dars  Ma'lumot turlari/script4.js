"use strict";
//js da malumot turlari ikki turga bo'linadi yani Primitive va Object primitivga:boolen, null, undefind, number, string, sybol, va yangi qo'shilgani bigint Object malumot turlariga esa array, object, function, regex, date malumot turlari kiradi

//Number malumot turi
let number = 5.6; // data type number
//number malumot turini ichida yana ikkita qiymati bor infinitiy va nan
console.log(-8 / 0); //infinity yani cheksiz javob infinitiy minus qo'yilsa -infinity chiqadi
console.log("Nur" * 8); //NaN yani not a number yani raqam emas (number malumot turi emas) qisqartirib NaN deyiladi nan ikkihil malumot turi bir biriga qo'shilganda chiqadi

//String

const clientName = "Nur"; //string qo'shtirnoq ichida yoziladigan malumot ruri yani asosan text
const clientName1 = `Nur`; //stringni shu bektegni ichiga yozsaham bo'ladi buni sababi begtegni ichiga boshqa qiymatlarham yozish mumkun masalan class va js kodlar

// boolen (mantiqiy)
const isMarried = false; //yoki true qilib qo'yish mumkun //true degani ha | to'g'ri degani false degani yo'q | noto'g'ri degani

//Null
console.log(clientAge); //yani yo'q o'zgaruvchi chaqirilganda yaani ishlatilganda  logda null malumot turi chiqadi

//Undefined
let und; //agar o'zgaruvchi elon qilingan va logda chaqirilgan lekin o'zgaruvchi ichida hech qanday malumot yo'q yani o'zgaruvchini qiymati yo'q bunday holatdqa undefind chiqadi yani bunday holatda logdan kelgan malumor undefind malumot deyiladi
console.log(und);

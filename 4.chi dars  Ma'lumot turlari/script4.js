"use strict";
//js da malumot turlari ikki turga bo'linadi yani Primitive va Object primitivga:boolen, null, undefind, number, string, sybol, va yangi qo'shilgani bigint Object malumot turlariga esa array, object, function, regex, date malumot turlari kiradi

//Number malumot turi
let number = 5.6 + 4.4; // data type number yani number malumot turi
console.log(number);
//number malumot turini ichida yana ikkita qiymati bor infinitiy va nan
console.log(-8 / 0); //infinity yani cheksiz javob infinitiy minus qo'yilsa -infinity chiqadi yani matematikada yo'q narsani bajarish so'ralsa infinity chiqadi
console.log("Nur" * 8); //NaN yani not a number yani raqam emas (number malumot turi emas) qisqartirib NaN deyiladi nan ikkihil malumot turi bir biriga qo'shilganda chiqadi yani bu yerda string malumot turini number malumot turiga ko'paytirish yozilgan bu holatda NaN chiqadi

//String
const clientName = "Nur"; //string qo'shtirnoq ichida yoziladigan malumot turi yani asosan text
console.log(clientName);
const clientName1 = `Nur`;
console.log(clientName1); //stringni shu bektegni ichiga yozsaham bo'ladi buni sababi begtegni ichiga boshqa qiymatlarham yozish mumkun masalan class va js kodlar

// boolean (mantiqiy)
const isMarried = false; //yoki true qilib qo'yish mumkun //true degani ha | to'g'ri degani false degani yo'q | noto'g'ri degani

//Null
console.log(clientAge); //yani yo'q o'zgaruvchi chaqirilganda yani ishlatilganda  logda null malumot turi chiqadi chunki  clientAge degan o'zgaruvchi hech qayerda elon qilinmagan yani log qilib birorta item chaqirilgan lekin esa aslida yaratilmagan bu holatda null chiqadi

//Undefined
let und; //agar o'zgaruvchi elon qilingan va logda chaqirilgan lekin o'zgaruvchi ichida hech qanday malumot yo'q yani o'zgaruvchini qiymati yo'q bunday holatdqa undefind chiqadi yani bunday holatda logdan kelgan malumot undefind malumot deyiladi
console.log(und);

//Object
//objectni ichiga har qanday malumot turlarini yozish mumkun masalan pastdagi theif o'zgaruvchisida number, string, boolean malumot turlarini bor
const theif = {
    //key yani kaliti : value yani qiymat
    age: 30, //number
    jacket: "black", //string
    isLong: false, //boolean
};

//yani age: jacket: isLong: key yani Objectni kalit so'zlari 30 "black" false value yani Objeckni qiymatlari
console.log(theif); //objectni butunligicha chaqirish
console.log(theif.age); // objectni chaqirib nuqta qo'ilsa ichidagi qiymatlari chiqadi kerak bo'lsa har bir qiymatni alohida chaqirish mumkun objectni kerakli qiymatini unga berilgan property yani keyi orqali alohida chaqirish mumkun
console.log(theif.jacket); // objectni chaqirib nuqta qo'ilsa ichidagi qiymatlari chiqadi kerak bo'lsa har bir qiymatni alohida chaqirish mumkun objectni kerakli qiymatini unga berilgan propert yani keyi orqali alohida chaqirish mumkun
console.log(theif.isLong); // objectni chaqirib nuqta qo'ilsa ichidagi qiymatlari chiqadi kerak bo'lsa har bir qiymatni alohida chaqirish mumkun objectni kerakli qiymatini unga berilgan propert yani keyi orqali alohida chaqirish mumkun

//Array
//arraydaham string number massiv va abject malumotlariniham qo'shish mumkun arrayham objectday ko'p narsani o'z ichiga oladi
//yani arrayda jsni o'zi kalit so'zlarni raqam bilan beradi bu raqamlar esa 0 dan boshlanadi
//                0       1        2      3   4   5    
const colors = ["red", "black", "green", 10, [], {}];
console.log(colors[0])//arrayda ichidagi qiymatlarni alohida chaqirish uchun shu >[] qavusdan foydalanish kerak yani []<shuni yozib ichiga 0 dan boshlab raqamlar bilan arrayni ichidagi malumotlarni chaqirish mumkun bu yerda 0 chaqirildi shunda red chaqirilgan hissoblanadi chunki dasturlashda 0 ham raqam hissoblanadi 

console.log(colors[1]);//bu yerda black chiqadi
console.log(colors); //bu holatda hamma massiv chaqiriladi
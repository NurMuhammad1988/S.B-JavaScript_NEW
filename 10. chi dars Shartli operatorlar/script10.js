"use strict";

// const age = +prompt("How old are you", "");
// if (age > 18) {//yani agar age o'zgaruvchida berilgansavolni javobi 18 dan katta bo'lsa welcome
//     console.log("Welcome");
// }else{
//         console.log("No entry");//yokida 18 dan kichik bo'lsa no entry
// }
/////////////////////////
// const age = +prompt("How old are you", "");
// if (age > 18) {//yani agar age o'zgaruvchida berilgansavolni javobi 18 dan katta bo'lsa welcome
//     console.log("Welcome");
// }else{
//     console.log("Welcomsss");///yani yosh 18 da kattaham kichikham emas roppa rosssa 18 bo'lsa welcomsss
// }
////////////////////////////
// const age = +prompt("How old are you", "");

// if (age > 25) {
//     //yani agar yoshi 25 dan baland bo'lsa harror films

//     console.log("Horror films");
// } else if (age > 18 ) {
//     //yoki agar yoshi 18 dan katta va  25 dan kichik bo'lsa action films

//     console.log("Action films");
// } else {
//     console.log("Cartoon");// yani 18 dan past holatda cartoon
// }
///////////////////////////////////

//terminalni operator yani uchtalik operator
// const age = +prompt("How old are you", "");
// age > 25 ? console.log("Horror films") : console.log("Cartoon"); //bu terminalni operatorda qisqartirib yozilishi

//switch case yani buham shart qo'yish if else o'hshagan lekin farqalari bor

const color = "red";

switch (// switch case doim hardoim faqat va faqat qatti rejimda tekshiradi yani === shu uchta teng belgisi bilan tekshiradi

    color //switch casega < katta > kichik belgilarni qo'yib bo'lmaydi
) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Goo");
        break;
    case "yellow":
        console.log("Slowly");
        break;
    default:
        console.log("Traffic jam");
        break;
} //yani switch caseda har bir topshiriq bajarilgandan keyin break qo'yiladi yani jarayonni to'htatish kerrak bu joyda agar o'zgaruvchidagi qiymat red bo'lsa stop green bo'lsa goo yellow bo'lsa slowly buyrug'i yozildi default esa shu uchta holatdan boshqa har qanday holatda masalan o'zgaruvchidagi qiymat crash bo'lsa ishlaydi yani default shu uchta yozilgan holatdan boshqa har qanday holatga ishlaydi yani o'zgaruvchidagi holat crash bo'lsa traffic jam yani probka degan manoda ishlaydi

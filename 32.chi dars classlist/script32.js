"use strict";
const btns = document.querySelectorAll("button"); //yani bu holatda querySelectorAll metodi bilan htmldagi button elementlarini hammasini oldik
// console.log(btns);//yani querySelectorAll doim nodelistda massiv qaytaradi
//length metodi
// console.log(btns[0].classList.length);//yani btns o'zgaruvchida  chaqirilgan button elementlarini 1 chisi yani massiv bo'yicha 0 chi elementini classlist qiymatlarini sonini chiqarib berish buyurildi chunki classlist qiymat length qiymat yani massivni qiymatlari yani oddiyroq qilib aytganda metodlari
////item metodi
// console.log(btns[0].classList.item(0));//item metodi //yani bu holatda btns o'zgaruvchida chaqirilgan buttonlarni 0 chi elementini classlisti yani 0 chi itemi yani elementi chiqarib berdi yani nolinchi classini yani htmldagi blue classini
// console.log(btns[0].classList.item(1));//item metodi //yani bu holatda btns o'zgaruvchida chaqirilgan buttonlarni 0 chi elementini classlisti yani 1 chi itemi yani elementi chiqarib berdi yani birinchi classini yani htmldagi some classini
// btns[1].classList.add("blue"); //yani bu holatda btns o'zgaruvchisi ichida chaqirilgan htmldagi buttonslarni 2 chi elementi yani array bo'yicha 1 chi elementiga classlist qiymati bilan add metodi orqali yangi blue classi dynamic tarzda berildi va bu blue classi cssda yozib qo'yilgan
// btns[0].classList.remove("blue")//yani bu holatda htmldagi buttonlarni nolinchi elementidagi blue classi dynamic tarzda udalit qilindi va logda qaralsa faqat some classi qoldi
// btns[3].classList.add("red");//yani bu holatda btns o'zgaruvchisi ichida chaqirilgan htmldagi buttonslarni 4 chi elementi yani array bo'yicha 3 chi elementiga classlist qiymati bilan add metodi orqali yangi red classi dynamic tarzda berildi va bu red classi cssda yozib qo'yilgan
////remove metodi
// btns[3].classList.remove("red");//yani bu holatda htmldagi buttonlarni 3 chi elementidagi red classi dynamic tarzda udalit qilindi 
//// add metodi
// btns[1].classList.add("blue" , "some");//yani  html elementga classlarni dynamic tarzda qo'shayotganda vergul bilan bir nechta classlarniham qo'shish mumkun

////togle metodi////
// btns[0].classList.remove("blue");
// btns[0].classList.toggle("blue")//yani bu holatda toggle metodi bundan bir qator oldin yozilgan koddagi udalit yani remove bo'lgan blue classini o'rniga qo'shildi yani toggle shunaqa narsaki agar biriktirilgan elementiga yani shuni ichidagi elementga>>[0] boradi va ichiga qareydi agar ichida blue degan class bor bo'lsa udalit qib tashaydi yo'q bo'lsa qo'shib qo'yadi false true bo'yicha ishlaydi bu holatda esa toggle parametrida blue classi bilan 0 chi elementga bordi borsa 0 chi elementdagi blue classi remove metodi bilan udalit qilingan ekan shu sabab bo'sh joyga yana blue classini qo'ydi

////contains metodi////
if(btns[0].classList.contains("blue")){//yani agar btns o'zgaruvchi ichidagi chaqirilgan buttonlarni 0 chi elementida blue classi bor bo'lsa logda yeap texti chiqsin//yani bu holatda contains metodi parametridagi class 0 chi elementda bor bo'lsa nimanidur qo'shib berishi mumkun//yani contains metodi qaysudir elementni ichida qaysudur class bormi yoki yo'qmi shuni tekshiradi
    console.log("yeap");
}



















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////Ustoz bajargani tayyor file///////////////////////////////////
// const wrapper = document.querySelector(".btn-block"),
//     btns = document.querySelectorAll("button");

// btns[0].addEventListener("click", () => {
//     btns[1].classList.toggle("red");
// });

// wrapper.addEventListener("click", (event) => {
//     if (event.target && event.target.matches("button.red")) {
//         console.log("btn click");
//     }
// });

// //// btns.forEach((item) => {
// ////   item.addEventListener('click', () => {
// ////     console.log('clicked')
// ////   })
// //// })

// const btn = document.createElement("button");
// btn.classList.add("red");
// wrapper.append(btn);
//////////////////////////////////////////Ustoz bajargani tayyor file///////////////////////////////////

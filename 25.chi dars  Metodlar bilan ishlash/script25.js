"use strict";


////IDlar bilan Dynamic stylelar qo'shish
// const box = document.querySelector("#box"); //yani html documentdagi box nomli id jsga box nomli o'zgaruvchiga chaqirib olindi dynapic stylelar berish uchun lekin aslida htmldagi box idni style25.css da o'zini stylrlari bor lekin jsda const box = document.querySelector("#box") bilan diyna,ic tarzda stylelarni o'zgartiramiz yani DOM bilan oddiy html css documentga js bilan harakat qo'shamiz yani jonlantiramiz
// // console.dir(box); //yani console logga qaralsa htmldan JSga import qilingan html documentni ichida juda ko'p hususiyatlar metodlar poydo bo'ldi bu bilan endi oddiy html css sahifaga stylelarni dynamic tarzda berib sahifani jonlatirish mumkun
// box.style.backgroundColor = "red";//yani bu joyda style huddi kalit so'zday //yani htmldagi box id diviga dynamic tarzda style berildi box id divini backgroundi limon rang edi box.style.backgroundColor = "red" << shunday tarzda rangi qizilga yani dynamic tarzda qizilga o'zgartirildi  buni console logda elementsni ichida classni o'zgarganini ko'rish mumkun cosole logdagi elementsda csslarda element.style daham classni o'zgarganini yani eski klasni ustidan o'chirib yuqorisiga element.style clasi ostida styleni background color lamedan element.style {background-color: red;} ga o'zgarganini ko'rish mumkun
// box.style.height = "60px";//yani style25.cssda height va widthlari aslida 150 px edi console logdagi elementsda cssda style25.cssda berilgan stylelar ustifa cgizilgan holatda o'chib yangi jsda berilgan dynamic stylelar ishlayapti  //yani bu joyda style huddi kalit so'zday//bu joydaham o'zgargan styleni console logdagi elementsda html documentda va elementsda element.style {background-color: red;height: 60px;width: 60px;} daham umumiy o'zgargan holatini va har safar shu id ga berilgan dynamic stylelarni ko'rish mumkun
// box.style.width = "60px";//yani style25.cssda height va widthlari aslida 150 px edi console logdagi elementsda cssda style25.cssda berilgan stylelar ustifa cgizilgan holatda o'chib yangi jsda berilgan dynamic stylelar ishlayapti //yani bu joyda style huddi kalit so'zday//bu joydaham o'zgargan styleni console logdagi elementsda html documentda va elementsda element.style {background-color: red;height: 60px;width: 60px;} daham umumiy o'zgargan holatini va har safar shu id ga berilgan dynamic stylelarni ko'rish mumkun
//////////////////////////////////////////////////////////////////////////////////////////////////

////Buttonlarga (html tage namelarga) Dynamic stylelar qo'shish

// const buttons = document.querySelectorAll("button")
// console.log(buttons);//NodeListda massivda html documentdagi button teglari jsga chaqirib olindi yani import qilindi desaham bo'ladi
// buttons[0].style.width = "200px"//yani bu buttons html tag namlari ko'plikda yani All bo'lib kelayotgani uchun html documentni ichida saqlagan yani buttons o'zgaruvchi style berish uchgun chaqirilganda ayan qaysi elementni 0 dan boshlanadigan tartib raqami bilan belif=gilam qo'yish kerak mana bunday holatda>>[0] yani bu holatda htmldagi button elementlarni birinchisini widthi dynamic tarzda o'zgartirildi yani style15.css da width 80 px edi endi esa 200 px ga dynamic tarzda o'zgardi //yani styleni []<<shuni ichida aniq tiniq qaysi elementga berayoptganimizni aytishimiz kerak
////////////////////////////////////////////////////////////////////////////////////////////////////

////Htmlda berilgan classlarga Dynamic stylelar qo'shish

const circles =  document.querySelectorAll(".circle")//bu holatdaham o'zgarishlarni console logda elements va elements csslarda element.style failida yellowga o'zgarganini ko'rish mumkun
circles[1].style.backgroundColor = "yellow"//LEKIN!!! [1,2,3] qilib circle classlari ichidan bazilarini tanlab olib sttyle berib bo'lmaydi agar shuday qilinsa doim faqat ohiri kiritilgan tartib raqamidagi elementga ishlaydi yani o'zgarishlar faqat ohirgi raqam ostidagi elemetga tasir qiladi YANI faqat bittagina elementga tasir qiladi
























///////////////////////////////////////////////////////////////////////////////////////////
// const box = document.querySelector("#box");
// const buttons = document.querySelectorAll("button");
// const circles = document.querySelectorAll(".circle");
// const circle = document.querySelector(".circle");
// const hearts = document.querySelectorAll(".heart");
// const circleWrapper = document.querySelector(".circle__wrapper");

// box.style.cssText = "background-color: red; width: 100px; height: 100px";

// buttons[0].style.width = "100px";
// circles[1].style.backgroundColor = "yellow";
// circle.style.backgroundColor = "yellow";

// //// for (let i = 0; i < hearts.length; i++) {
// ////   hearts[i].style.backgroundColor = 'green'
// //// }

// //// hearts.forEach((item) => {
// ////   item.style.backgroundColor = 'gray'
// //// })

// const btn = document.createElement("button");
// //// const text = document.createTextNode('I am text')

// document.body.append(btn);

// const myCircle = document.createElement("div");

// myCircle.classList.add("circle");

// //// circleWrapper.append(myCircle)
// //// circleWrapper.before(myCircle)
// ////circleWrapper.after(myCircle)
// //// circles[0].after(myCircle)
// //// circles[1].remove()
// //// circles[1].replaceWith(myCircle)
// //// circleWrapper.append(myCircle)
// //// myCircle.innerHTML = '<pre>E</pre>'
// //// myCircle.textContent = 'E'
// //// circleWrapper.insertAdjacentHTML('beforeend', '<pre>E</pre>')
///////////////////////////////////////////////////////////////////////////////////////////

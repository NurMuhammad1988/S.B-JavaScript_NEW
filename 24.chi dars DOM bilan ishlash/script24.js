"use strict";

////(OLD WAY)

//By Id bilan idlarni olish (OLD WAY)
// const box = document.getElementById("box"); //htmldan id ni chaqirish//yani DOM (Document Object Model) yani  Html documentni object modeliga yani js objectiga (OOP) o'tqazish
// console.log(box); //consolega va html ga qaralsin

//Tag name orqali DOM larni olish (OLD WAY)
// const buttons = document.getElementsByTagName("button"); //yani bu holatda getElementsByTagName bo'lgani uchun yani ko'likda bo'lgani uchun massiv yani array qatradi yani bundan usul bilan hamma masiivni olib hammasiga stayllar berish mumkun lekin ichida bittasiga alohida stayl berib bo'lmaydi yani getElementsByTagName har doim faqat massiv qaytaradi hattoki htmldagi element bir dona bo'lsaham o'sha bir donani massivga 0 chi element qilib oladi // HTMLCollectionni Node listdan farqi HTMLCollectionda metodlar kamroq hissoblanadi
// console.log(buttons);

//Tag name orqali DOM ni olish (OLD WAY)
// const buttons1 = document.getElementsByTagName("button")[3];//yani bu holatda getElementsByTagName bilan htmldan buttonlarni ichidan 0 dan boshlangan tartib bilan alohida bittasini chaqirib olish mumkun yani getElementsByTagName doim faqat massiv qaytargani uchun [3] bilan ichiga kerakli html elementni tartib raqamini olish, alohida chaqirish mumkun yani huddi massivdan elementlar qanday olinsa huddi shudnay olinadi
// console.log(buttons1);

// //By Clasname orqali claslarni olish (OLD WAY)
// const cercles = document.getElementsByClassName("circle")//getElementsByClassName ham ko'plikda va buham doim massiv qaytaradi
// console.log(cercles);

// const cercles1 = document.getElementsByClassName("circle")[2]//getElementsByClassNamedaham html elementni DOMga [2] shunday holatda alohida yakka o'zini chaqirish mumkun
// console.log(cercles1);

////NEW WAY
////querySelector
// const hearts = document.querySelector("heart");//yani null qaytaradi chunki querySelectorga htmldan qanday typedagi elementni olish aytilishui kerak masalan . bo'lsa class # bo'lsa id tagnamelar bo'lsa tagnemalarni yozish kerak masalan button yoki boshqa html tagnamelar
// console.log(hearts);

// const hearts1 = document.querySelector(".heart");//yani bu yerda htmldan heart nomli classni olish buyurildi lekin querySelector doim faqat birinchi elementni oladi yani htmldagi documentni 0 chi elementini oladi
// console.log(hearts1);

const wrapper = document.querySelector(".wrapper"); //yani bu holatda querySelector butun document bo'yicha yani html bo'yicha shu classni wrapperni izlaydi pastdagi wrapper1 o'zgaruvchida esa wrapperni ichidagi heartni olish buyurildi yani aniqroq adrees bo'yicha buyruq berildi
console.log(wrapper);
const wrapper1 = wrapper.querySelector(".heart"); //yani aftamatic tarzda birinchi elementni oladi
console.log(wrapper1); //yani bu joyda wrapper o'zgaruvchini ichidan heartni old deyildi yani yangi o'zgaruvchiga eski o'zgaruvchini ulab ichidagini old deyish mumkun ekan

////querySelectorAll
// const hearts2 = document.querySelectorAll(".heart")//yani hamma html documentlarni massivga olinishi yani massivda nodeListga olinadi HTML.Collectiondan farqi faqat ichidagi qiymatlarda yani propertylarda console logda ko'rinadi yani NodeListda ko'roq metodlar bor
// console.log(hearts2);
// const hearts3 = document.querySelectorAll(".heart")[2]; //querySelectorAll  heart nom;li hamma elementni html documentdan massivga oladi yani 0 dan  boshlanadigan tartib raqam bilan  agar html elementlardan aynan qaysidur kerak bo'lsa [2] bilan hohlaganini alohida olish mumkun
// console.log(hearts3);

////NodeList va HTMLCollectionni farqi yani forEach metodi haqida
// const hearts4 = document.querySelectorAll(".heart");
// console.log(hearts4);
// hearts4.forEach((item) => {
//     console.log(item);
// });//yani NodeListning afzalligi NodeListda forEach metodi bor yani massivdan elementni olish uchun intrigatsa qilib olish kerak yani foreach metodi bilan

//////////////////////////////////////////////////////////////////////////////////////////////////////






























////////////////////////////////////////////////////////////////////////////////////////////////////
// "use strict";

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
//////////////////////////////////////////////////////////////////////////////////////////////////////

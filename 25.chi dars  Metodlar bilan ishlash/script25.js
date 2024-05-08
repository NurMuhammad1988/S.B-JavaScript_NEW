"use strict";

////IDlar bilan Dynamic stylelar qo'shish

// const box = document.querySelector("#box"); //yani html documentdagi box nomli id jsga box nomli o'zgaruvchiga chaqirib olindi dynapic stylelar berish uchun lekin aslida htmldagi box idni style25.css da o'zini stylrlari bor lekin jsda const box = document.querySelector("#box") bilan diyna,ic tarzda stylelarni o'zgartiramiz yani DOM bilan oddiy html css documentga js bilan harakat qo'shamiz yani jonlantiramiz
// // console.dir(box); //yani console logga qaralsa htmldan JSga import qilingan html documentni ichida juda ko'p hususiyatlar metodlar poydo bo'ldi bu bilan endi oddiy html css sahifaga stylelarni dynamic tarzda berib sahifani jonlatirish mumkun
// box.style.backgroundColor = "red";//yani bu joyda style huddi kalit so'zday //yani htmldagi box id diviga dynamic tarzda style berildi box id divini backgroundi limon rang edi box.style.backgroundColor = "red" << shunday tarzda rangi qizilga yani dynamic tarzda qizilga o'zgartirildi  buni console logda elementsni ichida classni o'zgarganini ko'rish mumkun cosole logdagi elementsda csslarda element.style daham classni o'zgarganini yani eski klasni ustidan o'chirib yuqorisiga element.style clasi ostida styleni background color lamedan element.style {background-color: red;} ga o'zgarganini ko'rish mumkun
// box.style.height = "60px";//yani style25.cssda height va widthlari aslida 150 px edi console logdagi elementsda cssda style25.cssda berilgan stylelar ustifa cgizilgan holatda o'chib yangi jsda berilgan dynamic stylelar ishlayapti  //yani bu joyda style huddi kalit so'zday//bu joydaham o'zgargan styleni console logdagi elementsda html documentda va elementsda element.style {background-color: red;height: 60px;width: 60px;} daham umumiy o'zgargan holatini va har safar shu id ga berilgan dynamic stylelarni ko'rish mumkun
// box.style.width = "60px";//yani style25.cssda height va widthlari aslida 150 px edi console logdagi elementsda cssda style25.cssda berilgan stylelar ustifa cgizilgan holatda o'chib yangi jsda berilgan dynamic stylelar ishlayapti //yani bu joyda style huddi kalit so'zday//bu joydaham o'zgargan styleni console logdagi elementsda html documentda va elementsda element.style {background-color: red;height: 60px;width: 60px;} daham umumiy o'zgargan holatini va har safar shu id ga berilgan dynamic stylelarni ko'rish mumkun

// //cssText tegi bilan idga umumiy dynamic style berish
// box.style.cssText = "background-color:white; width:300px; border-radius:10px; border:2px solid red; height:300px"//yani cssText tegi bilan box o'zgaruvchi ichidagi IDga umumiy style berildi cssText tegi sabab yuqoridagiga o'hshab har bir classni alohida alohida yozib o'tirish shartmas//YANI QISQA KOD YOZIB STYLELARNI YOZISH//yani shu qatordagi dynamic style codlar ishladi yuqoridagilar emas chunki dasturlashda kodlar yuqoridan o'qib kelinadi yani kompyuter kodlarni birinchi qatordan boshlab o'qib keladi va ohirgi qatorda yuqoridagi kodlarni o'zgartiradigan kodlar bo'lsa ohirgi qatordagi kodlar ishlaydi shu sabab box IDga berilgan kodlarni eng pastidagi yani shu koment yozilgan koddagi dynamic stylelar ishladi(BU QATORDAGI KODLARNI CHERNAVIKGGA OLIB TURIB DARS TAKRORLANSIN!!!!!!!!!!)
//////////////////////////////////////////////////////////////////////////////////////////////////

////Buttonlarga (html tage namelarga) Dynamic stylelar qo'shish

// const buttons = document.querySelectorAll("button")
// console.log(buttons);//NodeListda massivda html documentdagi button teglari jsga chaqirib olindi yani import qilindi desaham bo'ladi
// buttons[0].style.width = "200px"//yani bu buttons html tag namlari ko'plikda yani All bo'lib kelayotgani uchun html documentni ichida saqlagan yani buttons o'zgaruvchi style berish uchgun chaqirilganda ayan qaysi elementni 0 dan boshlanadigan tartib raqami bilan belif=gilam qo'yish kerak mana bunday holatda>>[0] yani bu holatda htmldagi button elementlarni birinchisini widthi dynamic tarzda o'zgartirildi yani style15.css da width 80 px edi endi esa 200 px ga dynamic tarzda o'zgardi //yani styleni []<<shuni ichida aniq tiniq qaysi elementga berayoptganimizni aytishimiz kerak

// //cssText tegi bilan Buttonga umumiy dynamic style berish
// buttons[0].style.cssText = "background-color:white; width:100px; border-radius:10px; border:2px solid red; height:100px"//yani cssText tegi bilan buttons o'zgaruvchi ichidagi tegnemga umumiy style berildi cssText tegi sabab yuqoridagiga o'hshab har bir classni alohida alohida yozib o'tirish shartmas//YANI QISQA KOD YOZIB STYLELARNI YOZISH//yani shu qatordagi dynamic style codlar ishladi yuqoridagilar emas chunki dasturlashda kodlar yuqoridan o'qib kelinadi yani kompyuter kodlarni birinchi qatordan boshlab o'qib keladi va ohirgi qatorda yuqoridagi kodlarni o'zgartiradigan kodlar bo'lsa ohirgi qatordagi kodlar ishlaydi shu sabab box buttonsga berilgan kodlarni eng pastidagi yani shu koment yozilgan koddagi dynamic stylelar ishladi(BU QATORDAGI KODLARNI CHERNAVIKGGA OLIB TURIB DARS TAKRORLANSIN!!!!!!!!!!)
////////////////////////////////////////////////////////////////////////////////////////////////////

////Htmlda berilgan classlarga Dynamic stylelar qo'shish

// const circles = document.querySelectorAll(".circle"); //bu holatdaham o'zgarishlarni console logda elements va elements csslarda element.style failida yellowga o'zgarganini ko'rish mumkun
// // console.log(circles);//yani NodeLinstda chiqadi ichida ko'plab metodlar bor foreach metodiham bor va bu metod juda kerak
// circles[1].style.backgroundColor = "yellow"; //yani All umumiy massiv qaytaradi shu uchun massivdagi qaysi yani nechchinchi elementga style berishni aytish kerak yani manabunday>>[1]//LEKIN!!! [1,2,3] qilib circle classlari ichidan bazilarini tanlab olib sttyle berib bo'lmaydi agar shuday qilinsa doim faqat ohiri kiritilgan tartib raqamidagi elementga ishlaydi yani o'zgarishlar faqat ohirgi raqam ostidagi elemetga tasir qiladi YANI faqat bittagina elementga tasir qiladi

// // cssText tegi bilan HTML CLASSGA umumiy dynamic style berish
// circles[1].style.cssText = "background-color:brown; width:100px; border-radius:10px; border:2px solid red; height:100px; color:red"//yani cssText tegi bilan circles o'zgaruvchi ichidagi tegnemga umumiy style berildi cssText tegi sabab yuqoridagiga o'hshab har bir classni alohida alohida yozib o'tirish shartmas//YANI QISQA KOD YOZIB STYLELARNI YOZISH//yani shu qatordagi dynamic style codlar ishladi yuqoridagilar emas chunki dasturlashda kodlar yuqoridan o'qib kelinadi yani kompyuter kodlarni birinchi qatordan boshlab o'qib keladi va ohirgi qatorda yuqoridagi kodlarni o'zgartiradigan kodlar bo'lsa ohirgi qatordagi kodlar ishlaydi shu sabab box buttonsga berilgan kodlarni eng pastidagi yani shu koment yozilgan koddagi dynamic stylelar ishladi(BU QATORDAGI KODLARNI CHERNAVIKGGA OLIB TURIB DARS TAKRORLANSIN!!!!!!!!!!)

// const circle = document.querySelector(".circle");
// circle.style.backgroundColor = "black"; //yani bu holatda querySelector ni o'zi bilan  chaqirilganda faqat bittasini yani birinchisi keladi va style dynamic tarzda o'zgaradi

/////////////////////////////////////////////////////////////////////////////////////////////////

//// for tsikli yordamida clasllarni intirgatsa qilish yani NodeList sabab hamma claslarga birday style berish (All) buni ikkita yo'li bor for tsikli va forEach metodi orqali
// const hearts = document.querySelectorAll(".heart");
// console.log(hearts); //yani NodeLinstda chiqadi ichida ko'plab metodlar bor foreach metodiham bor va bu metod juda kerak
// //for tsikli orqali htmldan massiv holatda keladigan classlarga bittada dynamic style berish
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "green"; //yani for tsikli bilan hearts o'zgaruvchi ichidagi html documenlar hammasi intrigatsa qilinib bittada stylelariga dynamic umumiy style berildi
//     hearts[i].style.cssText =
//         "background:white; padding:20px; margin-right:30px";//endi yuqoridagi "green" style o'rniga cssText orqali umumiy berilgan backgroundi white bo'lgan style ishladi (kod yuqoridan o'qib kelinishi hissobiga)
// }

// //forEch tsikli orqali htmldan massiv holatda keladigan classlarga bittada dynamic style berish
// hearts.forEach((item) => {
//     item.style.backgroundColor = "brown";
//     // item.style.cssText =
//     //         "background:white; padding:20px; margin-right:30px";//endi yuqoridagi "brown" style o'rniga cssText orqali umumiy berilgan backgroundi white bo'lgan style ishladi (kod yuqoridan o'qib kelinishi hissobiga) foreachda yuqoridagi umumiy style berishlardan farqi umumiy styleni o'zgaruvchini o'ziga emas metodni argumentidagi elementlarga yani itemga berish kerak
// }); //yani forEch metodi bilab umumiy style berish oson va ko'p ishlatiladigan yo'li hissoblanadi

/////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////Dynamic tarzda html elementlar ochish yani html documentda divlar va buttonlar ochish va metodlari

////createTextNode() metodi
// const text = document.createTextNode("I am a text");//yani dynamic tarzda text qo'shish metodi
// console.log(text);

////createElement() metodi va append() metodi
// const btn = document.createElement("button");
// // console.log(btn);
// document.body.append(btn); // yani bu holatda html documentga umumiy bodyni ichiga tartib bo'yicha eng pastiga yangi button tegi dynamic tarzda qo'shildi

////createElement() metodi va append() va add() metodi
// const circleWrapper = document.querySelector(".circle__wrapper"); //yani html documentdagi ona divi chaqirildi
// const myCircle = document.createElement("div"); //yani yangi div ochildi
// console.log(btn);
// myCircle.classList.add("circle"); //yangi divni classnameni classList qiymati bilan add metodi bilan circle qildik
// circleWrapper.append(myCircle); //yani myCircle o'zgaruvchini ichiga yangi div ochib claslist va add metodi bilan divga circle degan classname berib ichida yangi divi va divini classi bor tayyor myCircle o'zgaruvchini append metodi bilan circleWrapper o'zgaruvchiga chaqirildi//yani circleWrapper o'zgaruvchida ona div bor yani ona divni ichiga  myCircle o'zgaruvchi chaqirildi
//////yani bu holatda circleWrapper nomli o'zgaruvchi yaratilib unga document.querySelector metodi bilan html documentdagi circle__wrapper classi chaqirildi va myCircle nomli o'zgaruvchi yaratilib unda createElement metodi bilan html documentga bitta div dynamic tarzda qo'shildi va myCircle o'zgaruvchiga (yani ichida yangi divi bor o'zgaruvchiga) clastlist qiymati va append metodi bilan htmlda mavjud bo'lgan (yani 4 dona circle nomli classlar bor) cercle classlariga yangi circle classi berildi (yani yangi divga circle clasi berildi bu degani htmlda endi circle 4 emas 5 ta degani va cssdagi classlar bu beshinchi yangi dynamic tarzda berilgan  divga yani circle nomli divgaham tasir qiladi va browserdagi dumaloqchalar bittaga ko'payadi) va circleWrapper o'zgaruvchiga append metodi bilan append metodini argumentiga  myCircle o'zgaruvchi chaqirildi

//yani bunday holatda yani ona div ichiga yangi div dynamic qo'shilgandaham tartib bo'yicha ohiriga borib turadi

// circleWrapper.before(myCircle); //before metodi bilan yangi divni joyini o'zgartirdik//yani bu holatda circle__wrapper ona dividan tashqariga chiqadi yani oldinga chiqdi

// circleWrapper.after(myCircle); //after metodi bilan yangi divni joyini o'zgartirdik//yani bu holatda circle__wrapper ona dividan tashqariga chiqadi yani ona divdan pastda chiqdi

// const circles = document.querySelectorAll(".circle"); //yani bu holatda circles o'zgaruvchida html documentda chaqirilgan circle classlari ichida yangi dynamic tarzda qo'shilgan divni joylarini o'zgartirish
// circles[0].before(myCircle);// bu holatda circlesni ichidagi divlarni 1 chisi eng birinchi turadi
// circles[0].after(myCircle);//bu holatda circlesni ichidagi divlarni 1 chisi 1 chisidan keyinga yani  2 chi bo'lib turadi
//before va after metodlari bilan ona divni ichidagi elementlarni shu bilan>>[] ichiga tartib raqamlarini berib joylarini hohlagancha o'zgartirish mumkun

// circles[1].remove()//remov metodi bilan circles o'zgaruvchini ichidagi elementlarni shu bilan >>[] ichiga tartib raqamini yozib udalit qilish mumkun//LEKIN DYNAMIC TARZDA QO'SHILGAN DIVNI BROWSERDA NECHCHANCHI O'RINDA TURGAN BO'LSAHAM  YANIBEFOR AFTER METODLARI BILAN JOYLARI O'ZGARTIRILGAM BO'LSAHAM DIYNAMIC TARZDA QO'SHILGAN DIV DOIM OHIRGI TARTIB RAQAMIDA BO'LADIMASALAN BU HOLATDA [4] ELEMENT BO'LIB TURIPTI YANI NOLDAN BOSHLANGANDA [4] CHI ELEMENT HISSOBLANADI

// circles[2].replaceWith(myCircle)//yani replaceWith metodi bilan circles o'zgaruvchi ichidagi 2 chi elementni o'rniga yani dynamic tarzda ochilib qo'shilgan myCircle o'zgaruvchi ichidagi yangi divni qo'ydik yani replaceWith metodi boshqa bir divni ustiga argumentidagi divni qo'yib beradi

// myCircle.innerHTML = "E"; //yani bu holatda myCircle ichidagi dynamic holatda qo'shilgan divga yozuv qo'shdik innerHTML bilan qo'shilgan yozuvga myCircle ni ichidagi classga yani cssdagi circle classiga berilgan stylelarham  umumiy amal qiladi

// myCircle.innerHTML = "<pre>E</pre>";
// myCircle.innerHTML = "<h6>E</h6>"; //yani innerHTML qiymati bilan shuni ichiga>> "" html teglarniham yozishxam mumkun masalan bold, p, h1, h6 va hakozo yani js ni ichida bemmalol htmlni teglarni ishlatishxam mumkun ekan

// myCircle.textContent = "J"; //textContent qiymatiham huddi innerHTML qiymati kabi ishlaydi faqat textContentda html taglar ishlamaydi imkon qadar shu textContentdan foydalanish kerak masalan yaniqsa inputda
// myCircle.textContent = "<pre>J</pre>"; //browserga qaralsin

// circleWrapper.insertAdjacentHTML("afterbegin" , "<pre>p</pre>")//insertAdjacentHTML metodi ikkita parametr qabul qiladi birinchi parametr pozitsiyasi ikkinchi parametri html texti yani bu holatda insertAdjacentHTML metodi p harfini circleWrapper ichida ona divni boshiga qo'shib berdi yani circleWrapper o'zgaruvchi ichidagi ona divni ichida boshiga p harfini qo'shib beradi
// circleWrapper.insertAdjacentHTML("beforeend" , "<pre>p</pre>")//insertAdjacentHTML metodi ikkita parametr qabul qiladi birinchi parametr pozitsiyasi ikkinchi parametri html texti yani bu holatda insertAdjacentHTML metodi p harfini circleWrapper ichida ona divni ohiriga qo'shib berdi yani circleWrapper o'zgaruvchi ichidagi ona divni ichida ohiriga p harfini qo'shib beradi
// circleWrapper.insertAdjacentHTML("beforebegin" , "<pre>p</pre>")//insertAdjacentHTML metodi ikkita parametr qabul qiladi birinchi parametr pozitsiyasi ikkinchi parametri html texti yani bu holatda insertAdjacentHTML metodi p harfini circleWrapper tashqarisida circleWrapperni ichidagi ona divdan oldinga qo'shib berdi
// circleWrapper.insertAdjacentHTML("afterend" , "<pre>p</pre>")//insertAdjacentHTML metodi ikkita parametr qabul qiladi birinchi parametr pozitsiyasi ikkinchi parametri html texti yani bu holatda insertAdjacentHTML metodi p harfini circleWrapper tashqarisida circleWrapperni ichidagi ona divdan keyinga qo'shib berdi

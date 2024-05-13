"use strict";

// console.log("Nur " + "Yorov");//ikkita string malumot + bilan bir biriga qo'shilib ketadi
// console.log(6 + " Yorov");//ikkita  malumot + bilan bir biriga qo'shilib ketadi va string qaytaradi
// console.log(6 + +" Yorov");//bu holatda NaN chiqadi chunki ikkita pilus qattiy qo'shishni bildiradi lekin bu holatda 6 number malumot turiga string malumot turi qo'shilmaydi shu uchun run codeda bu holat NaN bo'lib chiqadi yani not a number
// console.log(6 + +"9");// bu holatda esa string malumotni ichida raqam bo'lgani sababli  ikkita pilus opeatori bilan (yani qattiy qo'shuv) javob 15 chiqadi chunki js biladi stringni ichidagi malumot raqam yani number malumot turi ekanligini shu sabab qo'shib beradi
// console.log(6 + "3");// bu holatda number bilan string malumoti yonma yon qo'yilayapti holos yani js bu yerda stringni number deb hissoblamaydi faqatgina ikkita pilus belgisi qo'yilsagina stringni ichidagi raqamni number balumot turi deb hissoblaydi bu holatda faqat oddiy matn deb hissoblaydi buni sababi pilus ikkita emasligi yani qattiy qo'shuv buyrug'i yo'q ekanligida shu uchun javob 63 chiqadi yani bu joyda 6 number 3 esa string malumot turi bo'lib qolaveradi javob esa string holatda 63 chiqadi

// incr,  Increment (++) yani Increment qo'shadi
// decr, Decrement (--) yani Decrement ayiradi
// let incr = 10;
// let decr = 10;
// incr++; //ikkita pilus yani qattiy pilus birni qo'shib beradi shunda incr o'zgaruvchiga qattiy tarzda bir qo'shildi javob esa 11
// decr--; //ikkita minus yani qattiy minus birni ayirib beradi shunda decr o'zgaruvchidan qattiy tarzda bir ayirib tashlandi javob esa 9
// console.log(incr); //11
// console.log(decr); //9

// let incr = 10;
// let decr = 10;

// console.log(incr++); //logda 10 lekin keyingi chaqirishda tasir qilib qattiy pilus bo'lib javobi 11 chiqadi
// console.log(decr--); //logda 10 lekin keyingi chaqirishda tasir qiladi qattiy minus bo'lib javobi 9 chiqadi

// console.log(incr++); // logda 11
// console.log(decr--); // loga 9

// console.log(incr); //12
// console.log(decr); //8
// // //lekin logni ichida incr decr qilingadan shu logdan pastda alohida chaqirilmasa javob o'zgarmasdan turaveradi qachonki logdagi incr decr day qayta chaqirilsa qo'shish ayirish holatdi ishlaydi buni qayta qayta qilsaham qayta qayta qo'shib ayiraveradi
// // //yani logda boshida 10, 10 yani default holati keyin esa incr++ va decr-- qilindi javob 11, 9 va yana incr++ va decr-- qilinsa javob 12, 8

//foiz%%%%%%%%%%%%%%%%%%%%%
// console.log(5 % 2);// javob 1 yani qoldiq shu belgi% bilan % hissoblanadi yani 5 ni 2 ga bo'lsa 1 qoldiq qoladi
// console.log(10 % 3);// bu holatdaham qoldiq 1 chiqadi

// console.log(5 * 5 == 25); //javob true yani 5 kara besh 25 mi degan savol berildi javobda esa true bo'ldi
// console.log(5 * 5 == "25");// 5 kara 5 number malumot turiga oyid lekin "25" string malumot turiga oyid lekin javob true chiqadi bu esa hato chunki == ikkita teng belgisi faqat qiymatiga qaraydi yani yozilishi to'g'ri bo'lsa bo'ldi truni qaytaradi agarda javob ham qiymati ham malumot turi to'g'ri bo'lsin desak === teng belgisini uchta qo'yishimiz kerak shunda qattiy tengmi degan savol bergan bo'lamiz shunda javob false bo'ladi
// console.log(5 * 5 === "25");//agarda javob ham qiymati ham malumot turi to'g'ri bo'lsin desak === teng belgisini uchta qo'yishimiz kerak shunda qattiy tengmi degan savol bergan bo'lamiz shunda javob false bo'ladi
// //hullas  2 ta == teng belgisi faqat qiymat bilan solishtiradi 3 ta === belgsi esa ham qiymat ham malumot turi bilanham solishtiradi

// //&&=va ||=yoki yani va, yoki
// const isAge = true;
// const isClose = true;
// console.log(isAge && isClose);//javob true//&& va,da hamma narsa true bo'lishi kerak

// const isAge = true;
// const isClose = false;
// const isCheked = false;
// console.log(isAge || isClose || isCheked);//javob true // vada bitta true bo'lsaham javob true bo'ladi

// const isAge = true;
// const isClose = true;
// const isCheked = false;
// console.log(isAge && isClose && isCheked);//javob false//yokida yani orda ichida bitta false bo'lsaham javob false bo'ladi vani ishlatganda hammasi true bo'lishi kerak shunda javob true bo'ladi lekin yokida bitta bo'lsaham false bo'lsa javob hammasi false bo'ladi


const isAge = true;
const isClose = true;
const isCheked = false;
console.log(isAge && isClose && !isCheked);//bu belgi ! yani undov falseni teskarisiga yani truega almashtiradi isCheked false ekanligiga etibor ber ! undov belgisi faqat falseni turuga aylantirib beradi
console.log(!isCheked);//true ! shu belgi sabab aslida esa bu false edi

// console.log(2 + 2 * 2 === 8); //birinchi ko'paytiruv amalyotini bajaradi yani 2 * 2 = 4; 4 + 2 = 6 javobi 6 lekin savolda 2 + 2 * 2 === 8 javob sakkiz to'g'rimi deyildi javob esa yo'q false bo'ladi chunki js birinchi ko'paytiruvni hissoblaydi

// console.log(2 + 2 * 2 != 8); //yani ! bu belgi 6 8 bilan teng emasmi degan savolni qo'yadi javob ture yani  ha teng emas //yani bu yerda true chunki ! belgisi falseni true qilib beradi

// console.log(2 + 2 * 2 !== "6"); // true yani 2 * 2 = 4; 4 + 2 = 6; "6" ga qattiy teng emasmi (==) ha qattiy teng  javob true

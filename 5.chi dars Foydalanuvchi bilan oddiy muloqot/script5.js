"use strict";
// //Alert()
// alert("Hello JavaScript");// sayt refresh bo'lganda madal bo'lib string malumot chiqadi

// //Confirm()
// const place = confirm("Are you here?"); //Confirm (eng-tasdiqlash) funksiyasi JavaScript-dagi tasdiqlash funktsiyasi xabar va ikkita tugmachali modal dialog oynasini ko'rsatish uchun ishlatiladi: "OK" va "Bekor qilish" . U odatda veb-ilovadagi harakat yoki qaror uchun foydalanuvchi tasdiqlashini olish uchun ishlatiladi
// console.log(place); //confirmni alertdan farqi savolga ok yoki bekor qilishni bosganda bu javobni yani qiymatni shu place o'zgaruvchisiga saqlab qolish mumkun confirm faqat ikkita qiymat qaytaradi true va false  ok bo'lsa true bekor qilish bo'lsa false chiqadi yani confirim boolean malumot turi asosida ishlaydi

// //Prompt()
// const currentPlace = prompt("Where are you" , "Nur:");//prompt yani (eng-taklif)  ikkita malumot qabul qiladi ikkinchisiga default qiymat berib qo'ysaham bo'ladi masalan "Nur"
// console.log(currentPlace);//yani log qilib modal oynada promptga yozilgan malumotniham olish mumkun yani bu holatda prompt bilan userga savol berish va javobni currentPlace o'zgaruvchiga olish mumkun

// console.log(typeof(currentPlace));//userdan olinadigan har qanday malumot doim string malumot turi ko'rinishida bo'ladi {hattoki raqam yozilgan taqdirdaham} //JavaScript-dagi Typeof malumot turini tekshirish uchun ishlatiladigan operator bo'lib, unga yozilgan o'zgaruvchini ma'lumot turini qaytaradi  typeof operatori yordamida malumot turi  har qanday o'zgaruvchi, funksiya yoki object bo'lishi mumkin

// const age1 = prompt("How old are you", "18")
// // console.log( typeof age1 + 10);//yani typeof buyrug'i bilan age1ni qanday malumot turiga mansub ekanligini bildik yani string promptdagi default holatdaham user yozishi mumkun bo'lgan holatdaham malumot turi string hissoblanadi
// console.log( age1 + 10);//yani string malumot turi bilan number malumot turi qo'shiladi yani "18" + 10 = 1810

////+Prompt()
// const age2 = +prompt("How old are you", "18")// + belgisi yordamida promptda kelayotgan string malumot turini number malumot turiga o'zgartirish mumkun ekan va +prompt yani prompt pilus belgisi bilan yozilganda string malumot turi bilan number malumot turini realni qo'shib beradi yani logda  "18" + 10 = 28
// console.log( typeof age2 + 10);//yani typeof buyrug'i bilan ageni qanday malumot turiga mansub ekanligini bildik yani string promptdagi default holatdaham user yozishi mumkun bo'lgan holatdaham malumot turi string hissoblanadi
// console.log( age2 + 10);//+prompt yani  prompt pilus belgisi bilan yozilganda string malumot turi bilan number malumot turini realni qo'shib beradi yani logda  "18" + 10 = 28  
// console.log( typeof age2 );// yani endi malumot turi +prompt sabab numberga aylandi

// //Array + prompt
// const favoriteColor = []; //bo'sh array ochib pasda alohida arrayni raqamli keylariga 0 dan boshlab alohida alohida savol berish mumkun keylar to'rtburchak qavusni ichiga yoziladi
// favoriteColor[0] = prompt("What's your favorite color #1", ""); // agar massivni 1 chi elementdan boshlab chaqirilsa malumotlar buzulib ketadi yani 0 chi element empty yani bo'sh bo'lib qoladi bu malumotlar ketma ketligini buzib tashlaydi //bo'sh qo'shtirnoq qoldirlishini sababi user aslida shu qo'shtirnoqni ichiga yozadi yani user yozgan malumot shu qo'shtirnoqni ichiga tushadi
// favoriteColor[1] = prompt("What's your favorite color #2", ""); //bo'sh qo'shtirnoq qoldirlishini sababi user aslida shu qo'shtirnoqni ichiga yozadi yani user yozgan malumot shu qo'shtirnoqni ichiga tushadi
// favoriteColor[2] = prompt("What's your favorite color #3", ""); //bo'sh qo'shtirnoq qoldirlishini sababi user aslida shu qo'shtirnoqni ichiga yozadi yani user yozgan malumot shu qo'shtirnoqni ichiga tushadi
// console.log(favoriteColor);
// console.log(typeof favoriteColor);//yani bu holatda arrayni ichidagi malumotlar object malumot turi hissoblanadi yanni massiv object malumot turini bir qismi hissoblanadi

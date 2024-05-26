"use strict";

// const number = new Function()//eski yo'li
// console.dir(number);

////Construktor
////Constructorda class yozilganda doim kattahariflar bilan yozilishi kerak!!!
function Car(name, color, mph) {
    //construktor  bu o'zgaruvchining objekt namunasini yaratadigan va ishga tushiradigan maxsus funktsiya  JavaScriptda ob'ekt new kalit so'zi yordamida yaratilganda konstruktor chaqiriladi Konstruktorning maqsadi yangi ob'ekt yaratish va har qanday mavjud objekt xususiyatlari uchun qiymatlarni o'rnatishdir //huddi cssdagi rootga o'hshar ekan
    this.name = name;
    this.color = color;
    this.mph = mph;
    this.isAirbag = true;
    this.speed = function () {
        console.log(`Speed of car ${this.name} is ${this.mph}`);
    };
} //yani construktor class  funksiya yaratildi bunda har bir this huddi rootga o'hshab ichiga qiymat yani funksiyani argumentidagi qiymatni qabul qiladi va boshqa o'zgaruvcilarga argumentiga chaqirilganda shu thislar ishlaydi bu construktorni ichiga hatto local funksiyalar va metodlarniham chaqirib ishlatish mumkun

const bmw = new Car("bmw", "red", 200); //bu holatda constructor funksiyadago thislar qanday chaqirilishi ko'rsatilgan//yani new kalit so'zi bilan chaqiriladi//new kalit so'zi huddiki Car constructor funksiyasiga new yani yangi qiymatlar qo'shish deganday
const merc = new Car("merc", "black", 300); //bu holatda constructor funksiyadago thislar qanday chaqirilishi ko'rsatilgan//yani new kalit so'zi bilan chaqiriladi//new kalit so'zi huddiki Car constructor funksiyasiga new yani yangi qiymatlar qo'shish deganday
//// console.log(bmw);//yani agar constructor funksiyani ichida local funksiya bor bo'lsa joriy holatdagiday faqat logni o'zi bila chaqirilmaydi pastki qatordagiday qilib local funksiyaham kitobidagiday chaqiriladi!!!
Car.prototype.sayHello = function () {
    console.log(`Car name of ${this.name} say hello`);
}; //bu holatda sayhello qo'lda yozilgan metod funksiya kabi bo'ladi yani Car constructor class funksiyasi chaqirilib qiymatiga yani umumiy object ichiga qo'shimcha metod funksiya yozildi va bu metod funksiyani ichigaham global Car constructor objectini qiymatlari yani thislar bu joydaham ishladi bu metod local funksiyaham tashqarida odatdagi funksiyalar kabi chaqiriladi //bu local metod funksiya chaqirilganda shu funksiyaga bog'langan bmw va merc const o'zgaruvchilardan keyin chaqirilishi kerak aks holda birnchi chaqirilgda hali bmw va merc o'zgaruvchilarni o'qimagani uchun ishlamaydi
bmw.sayHello();
merc.sayHello();
////console.log(merc);//yani agar constructor funksiyani ichida local funksiya bor bo'lsa joriy holatdagiday faqat logni o'zi bila chaqirilmaydi pastki qatordagiday qilib local funksiyaham kitobidagiday chaqiriladi!!!
bmw.speed(); //bu holatda constructor funksiyani ichida local funksiya bo'lgani sababli shunday ham o'zgaruvchi va local funksiya alohida chaqiriladi
merc.speed();
// console.dir(bmw);//dir bilan objectni ichigacha kirib ko'rish mumkun
// console.dir(merc);//dir bilan objectni ichigacha kirib ko'rish mumkun

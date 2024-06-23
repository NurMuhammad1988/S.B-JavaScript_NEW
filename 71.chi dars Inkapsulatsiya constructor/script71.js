"use strict";

////Inkapsulatsiya constructor

////tashqaridan turib objectni malumotlarini oddiy o'zgartirish
// function Car(name, color) {//class konstructor konstructor doim Katta harif bilan boshlanishi Kerak!!!
//     this.name = name;
//     this.color = color;

//     this.info = function () {
//         console.log(`Name of car ${this.name}, color is ${this.color}.`);
//     };
// }

// const bmw = new Car("bmw", "black")

// bmw.name = "merc"//yani car constructorni qiymati tashqaridan o'zgartrildi chunki bu Car objectdir//real loyihalarda shunday yozilsa Car constructorni malumotlari o'zgarib ketadi masalan name bmw edi bu holatda mercga o'zgardi yani oson o'zgardi shu sabab  Carni yani objectni qiymatlarini tashqariga metod bilan chiqarish kerak
// bmw.info();
//////////////////////////////////////////////////////////////////////////////////////////////////

////tashqaridan turib objectni malumotlarini oddiy o'zgartirishni oldini olish
// function Car(name, color) {
//     let name = name;//yani bu holatda name qiymati faqat carni ichida turadi va faqat metod yordamida tashqariga chiqarish mumkun
//     this.color = color;

//     this.info = function () {
//         console.log(`Name of car ${this.name}, color is ${this.color}.`);
//     };
// }

// const bmw = new Car("bmw", "black");

// bmw.name = "merc"; //yani car constructorni qiymati TASHQARIDAN o'zgartrilmadi chunki Car constructordagi name qiymati let o'zgaruvchiga olindi//real loyihalarda shunday yoziladi endi Car constructorni malumotlari o'zgarib ketmadi masalan name bmw edi bu holatda bmwligicha qoldi  sabab bu holatda yani let holatida Carni yani objectni qiymatlariga tashqaridan tasir qilib bo'lmaydi endi faqatgina metod yozib faqat metod orqali tashqariga chaqirish mumkun
// console.log(bmw.name);//SyntaxError: Identifier 'name' has already been declared Yani endi name let o'zgarmas o'zgaruvchida yozilgani uchun hato qaytaradi
// bmw.info();
/////////////////////////////////////////////////////////////////////////////////////////////////

// ////tashqaridan turib objectni malumotlari metod orqali olish yani tashqaridan metod orqali constructorni malumotlarini o'zgartirish yani qiyin o'zgartirish yani this ishlatmasdan
// function Car(name, color) {
//     let carName = name; //yani bu holatda carName qiymati faqat Carni ichida turadi va faqat metod yordamida tashqariga alohida chiqarish mumkun yani letni tashqariga this kabi chiqarib bo'lmaydi
//     this.color = color;
//     this.info = function () {
//         console.log(`Name of car ${carName}, color is ${this.color}.`);
//     };
//     this.getName = function () {
//         ////local qo'lda yozilgan metod
//         return carName; //yani bu joyda Cardagi let carName = name; ni qiymatini yani pastdagi bmwni birinchi parametrini qaytaradi va getName metoddaham qaytaradi
//         //run codeda birinchi bo'lib qaytaradi chunki let carName birinchida turipti shu sabab mingginchi qatorda chaqirilsaham logda birinchi qatorda chiqaveradi//yani endi carName qayoqqadur chaqirilsa faqat getName metodi ichida ishlaydi
//     };
// }
// const bmw = new Car("bmw", "black"); //Car constructori bmw nomli o'zgaruvchiga chaqirildi yani newCar kalit so'zi bilan va parametrlariga yani name va colorga bmw va black yozildi
// console.log(bmw.getName());//yani Car constructordan nuzxalangan bmw o'zgaruvchi ichida getName metodi chaqirildi yani faqat birinchi parametrni bmw ni o'zini qaytaradi //run codedagi birinchi bmw shu logdan qaytayapti yani getname qo'lda yozilgan metod bilan carName return qilingan
// bmw.info(); //logda ((Name of car bmw, color is black.)) ni qaytaradi chunki info Carni qiymati yani hususiyati hissoblanadi
/////////////////////////////////////////////////////////////////////////////////////////////////

// ////
function Car(name, color, bonus) {
    this.name = name;
    this.color = color;
    let extraBonus = bonus; //extraBonus qiymati qandaydur mahfiyroq yani tashqaridan hech kim malumotni olishi kerakmas yoki qo'osonlikcha yetishi kerakmas
    this.info = function () {
        console.log(`Name of car ${this.name}, color is ${this.color}.`);
    };
    this.getName = function () {
        ////local qo'lda yozilgan metod
        if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
            ////yani agar let extraBonusni contexsidagi bonusni malumot turi number malumot turiga qattiy teng bo'lsa va let extraBonusni contexsidagi bonus 0 dan katta bo'lsa va let extraBonusni contexsidagi bonus 100 dan kichkina bo'lsa yani shu narsalar true bo'lsa extraBonusga bonusni berib yani teng qilib qo'yildi yani extraBonus shu if holatidagi shartlar to'g'ri bo'lgandagina bonusga teng bo'ladi yokida "Something went wrong"  (if birinchi faqat true bo'lsa ishlarmidi???)
            extraBonus = bonus
        } else{
            console.log("Something went wrong");
        }
    };
    this.setName = function (bonus) {
        ////local qo'lda yozilgan metod
        carName = name;
    };
}
const bmw = new Car("bmw", "black", 10);
console.log(bmw.getName());
bmw.info();

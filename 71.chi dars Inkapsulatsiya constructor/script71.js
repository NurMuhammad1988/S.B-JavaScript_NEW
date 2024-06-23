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

////tashqaridan turib objectni malumotlari metod orqali olish yani tashqaridan metod orqali constructorni malumotlarini o'zgartirish yani qiyin o'zgartirish yani this ishlatmasdan
// function Car(name, color) {
//     let carName = name; //yani bu holatda carName qiymati faqat Carni ichida turadi va faqat metod yordamida tashqariga alohida chiqarish mumkun yani letni tashqariga this kabi chiqarib bo'lmaydi yani Car constructorni birinchi parametri let carNamega tenglashtib qo'yildi
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
// console.log(bmw.getName());//yani Car constructordan nusxalangan bmw o'zgaruvchi ichida getName metodi chaqirildi yani faqat birinchi parametrni bmw ni o'zini qaytaradi //run codedagi birinchi bmw shu logdan qaytayapti yani getname qo'lda yozilgan metod bilan carName return qilingan
// bmw.info(); //logda ((Name of car bmw, color is black.)) ni qaytaradi chunki info Carni qiymati yani hususiyati hissoblanadi
/////////////////////////////////////////////////////////////////////////////////////////////////

// ////Inkapsulatsiya constructor yakuniy kodi
// function Car(name, color, bonus) {
//     ////yani endi Car constructor qanaqadur o'zgaruvchida chaqirilganda masalan bu holatda bmw o'zgaruvchida chaqirilib parametriga  shunday holatda>>const bmw = new Car("bmw", "black", 10); chaqirilganda shu parametrlarga yozilgan qiymatlar ishlaydi
//     this.name = name;
//     this.color = color;
//     let extraBonus = bonus; //extraBonus qiymati huddiki qandaydur mahfiyroq yani tashqaridan hech kim malumotni olishi kerakmas yoki qo'li osonlikcha yetishi kerakmas masalanmanga o'hshagan chala junyor bittada loyihani buzvorishikerakmas shu sabab buni o'zgartirish qiyinroq bo'lishi kerak
//     this.info = function () {
//         console.log(
//             //             parametr-1             parametr-2                         parametr-3
//             `Name of car ${this.name}, color is ${this.color}, There is some bonus ${extraBonus}`
//         );
//     };

//     this.getBonus = function () {
//         ////local qo'lda yozilgan metod
//         ////yani bu getBonus let extraBonusni yani uchinchi parametrga berilgan qiymatni qaytaradi
//         return extraBonus;
//     };

//     this.setBonus = function (bonus) {
//         //// setBonusni parametridagi (bonus) setBonus chaqiralganda parametriga nima yozilsa shuni chiqaradi bu holatda pastdagi if elseni shartiga to'g'ri kelgan narsani chiqaradi yani faqat raqam bo'lsa va 0 dan katta va 100dan kichik bo'lsa
//         if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
//             ////yani agar let extraBonusni contexsiga beriladigan  bonusni yani uchinchi parametrga beriladigan bonusni malumot turi number malumot turiga qattiy teng bo'lsa va let extraBonusni contexsidagi bonus 0 dan katta bo'lsa va let extraBonusni contexsidagi bonus 100 dan kichkina bo'lsa yani shu narsalar true bo'lsa extraBonusga bonusni berib yani teng qilib qo'yildi yani extraBonus shu if holatidagi shartlar to'g'ri bo'lgandagina bonusga teng bo'ladi yokida "Something went wrong"  (if birinchi faqat true bo'lsa ishlarmidi???)
//             extraBonus = bonus; //yani ifdagi shartlarga to'g'ri kelgandagina extraBonus bonusga yani bu holatda Car constructorni nusxasi bo'lgan bmw o'zgaruvchini uchinchi parametri number bo'lsa va 0 dan katta va 100dan kichik bo'lsagina teng bo'lsin yokida 100dan katta bo'lsa yani ifni true shartiga to'g'ri kelmasa something went wrong chiqsin
//         } else {
//             console.log("Something went wrong");
//         }
//     };
// }
// //                  par-1   par-2   par-3
// const bmw = new Car("bmw", "black", 10);
// console.log(bmw.getBonus());//yani getBonusni birinchi parametri 10 bo'ladi sababi bmwda birinchi 10 yozilgan yani uchinchi parametr default holatda 10ga teng
// bmw.setBonus(20);//RUN CODE>>Name of car bmw, color is black, There is some bonus 20 //yani endi uchinchi parametrdagi 10 setBonus sabab 20 ga o'zgardi//yani mahfiyroq bo'ldi dasturchi endi extraBonusni to'g'ridan to'g'ri o'zgartira olmaydi faqat get va set metodlari bilangina o'zgartiraoladi//yani agar setbonusni parametridagi number malumot 100dan katta bo'lsa something went wrong chiqadi//shunday qilib Car constructorni bmw o'zgaruvchiga nusxalangan holatida bmwni ichida setbonusni chaqirib uchinchi parametrni qiymatni o'zgartirsa bo'ladi
// bmw.info();
/////////////////////////////////////////////////////////////////////////////////////////////////

////Inkapsulatsiya constructor yuqoridagi yakuniy kodi qaytadan izohlar bilan yozilgani yani darsni asosiy qismi
function Car(name, color, bonus) {
    this.name = name;
    this.color = color;
    let extraBonus = bonus;
    this.info = function () {
        console.log(
            `Name of car ${this.name}, color is ${this.color}, There is some bonus ${extraBonus}`
        );
    };
    this.getBonus = function () {
        return extraBonus;
    };
    this.setBonus = function (bonus) {
        if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
            extraBonus = bonus;
        } else {
            console.log("Something went wrong");
        }
    };
}
const bmw = new Car("bmw", "black", 10);
console.log(bmw.getBonus());
bmw.setBonus(20);
bmw.info();
//Name of car bmw, color is black, There is some bonus 20

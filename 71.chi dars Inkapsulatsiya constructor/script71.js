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

////Inkapsulatsiya constructor//yuqoridagi yakuniy kodni qaytadan izohlar bilan yozilgani yani darsni asosiy qismi
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
///////////////////console.log(bmw)
////bmw.getBonus()ni javobi>>>10
////bmw.info()ni javobi>>>Name of car bmw, color is black, There is some bonus 20
//Car nomli constructor class yaratildi va parametriga 3 ta argument berildi name, color, bonus va name va color argumentlari oddiy this contexga olindi bonus esa let o'zgaruvchida extraBonusga teng qilindi va Car constructorga 4 chi qiymat qilib info nomli local function metod yaratildi va logda yuqoridagi 3 ta hususiyatlar interpalatsa ichida yozildi va Carga 5 chi qiymat qilib this contexda getBonus local function metod yaratildi va extraBonusni return qilish aytildi va Carga 6 chi qiymat qilib setBonus local function metod yaratildi setbonusga chaqirilganda beriladigan joyi yani argumentiga bonus berildi va agar bonusni yani setbonus chaqirilganda parametridagi malumotni turi "number" malumot turiga teng bo'lsa va bonusni yani setbonus chaqirilganda parametridagi qiymat 0 katta bo'lsa va bonusni yani setbonus chaqirilganda parametridagi qiymat 100dan kichik bo'lagina extraBonus o'zgaruvchiga bu setBonusdagi if else shartiga mos bonus teng bo'lsin deyildi yokida logda "Something went wrong" chiqsin yani number bo'lmasa  0 dan katta bo'lmasa 100dan katta bo'lsa "Something went wrong" chiqsin deyildi va endi bmw nomli yangi const o'zgaruvchi yaratib unga Car constructorni new kalit sozi bilan chaqirdik va birinchi parametr namega "bmw" ikkinchi parametr colorga "black" uchinchi parametr bonusga 10 qiymatini yozdik shunda logda oddiy holatda shu odatiy javob chiqdi Car {name: 'bmw', color: 'black', (logdan qaytgan ananim funskiyalar o'chirildi chalg'itmaslik uchun)} va logda bmw o'zgaruvchini ichida getBonus function metodi bilan chaqirildi javob>>10 va bmwni ichida setBonus parametriga 20 yozilib chaqirildi javob>>Name of car bmw, color is black, There is some bonus 20 chunki setBonusda shartlar to'g'ri bo'lsa extraBonus bosunsga teng yani endi setBonus chaqirilganda parametridagi malumot number bo'lsa 0 dan katta 100dan kichkina bo'lsa parametridagi qiymatni uchunchi parametrga qo'shadi

////bmw.getBonus()dan kelayotgan default 10
////           1-par=bmw     2-par=bmw                  3-par=setBonus
////Name of car bmw, color is black, There is some bonus 20
//yani let esxtraBonusga tushadigan malumot setBonusni ichiga olindi
"use strict";
////ECMAScript 2015 yilda chiqgan
////JavaScript classlari JavaScript obyektlari uchun shablondir
////JavaScript classlari objekt emas bu JavaScript obyektlari uchun shablondir

////JavaScript Classlar
// class Car {
//     //jsda classlar doim katta hariflar bilan yoziladi shunda js Carni class component ekanligini tushunadi
//     constructor(name, color, speed) {
//         //constructor
//         this.name = name;
//         this.color = color;
//         this.speed = speed;
//     }
//     calcSpeed() {
//         //bunday ko'rinishda yozilgan metod faqat constructor funksiyani ichida ishlaydi
//         //bu dasturchi tomonidan qo'lda yozilgan metod hissoblanadi
//         return this.speed * 100; //speed = yani bu joyda car konstruktorni qiymati hissoblanadi
//     }
// }
// const bmw = new Car("BMW", "Black", 200); //(OOP)!!! //yanibu holatda new car qilib car class konstrucktordan object nusxalandi
// const merc = new Car("MERC", "Red", 100);
// console.log(bmw.calcSpeed()); //javob 20.000//yani 200 ko'paytirildi 100ga
// console.log(merc.calcSpeed()); //javob 10.000//yani 100 ko'paytirildi 100ga
// // console.log(bmw);
// // console.log(merc);//bu joyda Car classi object qaytarib berdi//yani  class o'z konstruktoridan istalgan narsani qaytarishi mumkin lekin asosan class objektni yoki undefinedni qaytarishi kerak  aks holda TypeError qaytaradi
/////////////////////////////////////////////////////////////////////////////////////////////////

// class Car {
//     //jsda classlar doim katta hariflar bilan yoziladi shunda js Carni class component ekanligini tushunadi
//     constructor(name, color, speed) {
//         //constructor//Konstruktor  bu classning objekt namunasini yaratadigan va ishga tushiradigan maxsus funktsiya JavaScriptda kalit new so'zi yordamida objekt yaratilganda konstruktor chaqiriladi
//         this.name = name;
//         this.color = color;
//         this.speed = speed;
//     } //bu holatda Car nomli class yaratilib unga konstructor chaqirildi va parametriga kelejakda ishlatilishi rejalashtirilgan qiymatlar berib chiqildi this contex bilan har biri chaqirildi
//     calcSpeed() {
//         //bu holatda calcspeed metodi speed qiymatiga kiritiladigan numberni 100ga ko'paytirib beradi returnni sababi esa shuni speed * 100 qaytar degani //bunday ko'rinishda yozilgan metod faqat constructor funksiyani ichida ishlaydi
//         //bu dasturchi tomonidan qo'lda yozilgan metod hissoblanadi
//         return this.speed * 100; //speed = yani bu joyda car konstruktorni qiymati hissoblanadi
//     }
// }
// //extends bilan ishlash(uzatmalar)
// class Spark extends Car {//extends (yani uzatma) Car ona classdan vorislanadigan alohida objectga nimadur qo'shimcha qo'shish kerak bo'lganda chaqiriladigan kalit so'z hissoblanadi yani bu holatda car ona classida yo'q lekin sparkk classiga qo'shilishi kerak bo'lgan qiymatlar isairbag va extratire qiymatlarini qo'shish uchun chaqirildi
//     //yani bu holatda spark classi car classidan vorislanadi yani nusxa oladi lekin spark bola classiga bazi qiymatlar qo'shilishi kerak yani ona Car classida yo'q qiymatlarni qo'shish kerak
//     constructor(name, color, isAirbag, extraTire) {//Car ona classida yoq qiymatlar isairbag va extrtire
//         super(name, color); //bu super constructor doim extends classni eng boshida turish kerak//yani bu holatda spark extends classi cardan vorislandi va constructorda cardagi faqat kerakli elementlar olindi yani hammasi emas speed olinmadi faqat name va color qiymatlari olindi va super constructor bilan shu name va colorga qo'shimcha yangi qiymatlar qo'shish kerak bu holatda yangi qiymatlar isairbag va extratire hissoblanadi
//         this.isAirbag = isAirbag;
//         this.extraTire = extraTire;
//     }
//     logger() {//logger metodi constructorni ichida yozilgan own metod// yani bu holatda logger metodni logiga Car ona classidan nusxalangan name va color qiymatlari chaqirildi va davomiga spark bola classida yozilgan isairbag va extratire qiymatlari interpalatsa bilan yozildi
//         console.log(
//             `Name of car ${this.name}, color is ${this.color}. Is air bag there ${this.isAirbag}. Are there extra tire ${this.extraTire}`
//         );
//     }
// }
// const aboutCar = new Spark("Spark", "White", true, 5);//aboutcar nomli o'zgaruvchi yaratilib aboutcarga new kalit so'zi bilan spark classi chaqirildi va parametriga birnchi qiymatga this.namega sapark, ikkinchi qiymatga this.colorga white, uchinchi spark classi tomondan qo'shilgan yangi qiymatga this.isairbagga true, vato'rtinchi spark classi tomonidan yangi qo'shilgan extratire qiymatga this.extratriga 5 qiymatlari berib chiqildi shunda extends va super constructor yordamida asosiy class hissoblangan yani poydevor hissoblangan Car ona classini boshqa o'zgaruvchiga chaqirganda qiymatlarini qo'shish yoki ayirish mumkun ekan
// aboutCar.logger();
// console.log(aboutCar);//object sifatida ko'rish uchun yozilgan log browserda car ona classidagi calcSpeed funskiyasidni undefined bo'lib turganini ko'rish mumkun
/////////////////////////////////////////////////////////////////////////////////////////////////////

class Car {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    calcSpeed() {
        return this.speed * 100;
    }
}
class Spark extends Car {
    constructor(name, color, speed, isAirbag, extraTire) {
        super(name, color, speed);
        this.isAirbag = isAirbag;
        this.extraTire = extraTire;
    }
    logger() {
        console.log(
            `Name of car ${this.name}, color is ${this.color}. Is air bag there ${this.isAirbag}. Are there extra tire ${this.extraTire}`
        );
    }
}
const aboutCar = new Spark("Spark", "White", 20, true, 5);
aboutCar.logger();
console.log(aboutCar.calcSpeed()); //javob 2000 chunki 20ni 100ga ko'paytirdik//bu holatda asosiy ona class hissoblangan Carda yozilgan calcspeed metodini bola car sparkda nusxalangan aboutcar o'zgaruvchisada calcspeedni qanday chaqirish ko'rsatilgan
console.log(aboutCar);//object sifatida ko'rish uchun yozilgan log browserda car ona classidagi calcSpeed funskiyasidni undefined bo'lib turganini ko'rish mumkun

"use strict";

////Getter va Setter

const car = {
    name: "bmw",
    color: "black",

    get carName() {//bu holatda carName metod emas bu oddiy objectni hususiyati hissoblanadi belgidi qavus ohirida vewrgul qo'yilishida
        return this.name;//yani bmw ni qaytaradi
    },

    set carName(name) {
        this.name = name;//yani thisni contexsi o'zi yozilgan objectga teng yani endi bu set chaqirilganda parametri thisga teng qilingani sabab thisni chaqirganda parametriga hohlagan qiymatni berib chaqirish mumkun bu holatda bu qiymat pastdagi logdagi merc hissoblanadi
    },
};
console.log(car.carName); //car objectini faqatgina name qiymatini olib beradi
console.log((car.carName = "merc"));//yani  set carName bo'lgani uchun yani set qiymat borligi uchun  catName parametriga "merc" ni qabul qildi yani bu merc set carName(name)<<shu joydagi name yani carName set bo'lgani uchun parametrida name bo'lgani uchun chaqirilganda parametriga mercni qabul qilepti
//// console.log(this);
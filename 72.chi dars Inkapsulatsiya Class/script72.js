"use strict";
//// Inkapsulatsiya Class (_ladash yoki lodash)

class Car {
    constructor(name, color, bonus) {
        this.name = name;
        this.color = color;
        this._extraBonus = bonus; //lodash_ yoki ladash dasturchilar orasidagi belgi yani Inkapsulatsiya belgisi yani dasturni yozgan dasturchi shu>>_ belgini classda constructor ichida qo'ygan bo'lsa tashqaridan o'zgartirilmasin degani bo'ladi shunda dasturda ishlayotgan keyingi dasturchi lodashni ko'rganda tashqaridan to'g'ridan to'g'ri o'zgartirilmasin qandaydur metodlar bilan olib o'zgartirilsin degan manoni tushunadi
    }

    info() {
        console.log(
            `Name of car ${this.name}, color is ${this.color}, There is some bonus ${this._extraBonus}`
        );
    }

    get bonus() {
        return this._extraBonus;
    }

    set bonus(bonus) {
        if (typeof bonus === "number" && bonus > 0 && bonus < 100) {
            this._extraBonus = bonus;
        } else {
            console.log("Something went wrong");
        }
    }
    //Inkapsulatsiya class constructorni ichida  getter va setter funksiyalari bilan ishlatiladi
}

const bmw = new Car("bmw", "black", 10);
// console.log(bmw.extraBonus);//undefined yani ladash qo'yilmasa olib bo'lmaydi
console.log(bmw.bonus);
console.log((bmw.bonus = 90));
bmw.info();
////71.chi dars Inkapsulatsiya constructor darsidagi commentlar bilan deyarli bir hil yani Inkapsulatsiya darslarni takrorlamoqchi bo'lsang 71 chi darsni yahshilab tushunib kelib keyin bu darsga qara shunda comment shartmasligi aniq bo'ladi

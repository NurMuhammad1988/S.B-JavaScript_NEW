"use strict";
////////////Vaqt malumotlarini olish
// const now = new Date()
// console.log(now);

// const now = new Date(0)
// console.log(now);

// const now = new Date("2024-05-16");
// console.log(now.getFullYear());//joriy yilni oladi
// console.log(now.getMonth());//joriy oyni oladi va dasturlashda oylarham 0 dan boshlanadi yani yanvar oyi0 chi oy hissoblanadi shunda febral birinchi oy hissoblanadi
// console.log(now.getDate());//bugungi kunni oladi
// console.log(now.getDay()); //bugungi kunni oladi //va yakshanba dasturlashda 0 chi kun hissoblanadi
// console.log(now.getTime());//yani bu bugungi vaqtni millisekundda oladi yani 24 soatni ichidagi shu vaqtgacha o'tgan vaqtni millisekundda oladi
// console.log(now.getHours());//ayni vaqtdagi soatni oladi vaqt mintaqasi bo'yicha yani visual codeda vaqt hissobi boshqacharoq
// console.log(now.getUTCHours());//yanivisual studiyo turgan joyni vaqtini vaqt mintaqasisiz oladi buham 0 dan boshlanadi // yuqoridagi hamma getlardan keyin oraga utcni qo'ysa vaqt mintaqasisiz oladi bularham 0 dan boshlanadi

////////////Vaqt malumotlarini yuklash
// const now = new Date();
// console.log(now.setHours(18));//yani vaqni o'zimiz hohlagan vaqtga o'zgartirdik logda aniqroq ko'rinadi chunki log bu holatda turgan hududga qarab vaqtni belgilaydi
// console.log(now);
///////////////////////////////////////////////////////////////////////////////////////////////
let start = new Date();//yani Date DateConstructori bilan hozirgi yani amaldagi joriy online vaqt olindi
for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //yani i ni 3 ga ko'paytirish
}
let end = new Date();//endi esa Date DateConstructori bilan hozirgi yani amaldagi joriy online vaqt olindi 
console.log(start.getTime());//start o'zgaruvchini boshlangan vaqti gettime metodi bilan olindi
console.log(end.getTime());//end o'zgaruvchini boshlangan vaqti gettime metodi bilan olindi bu ikkala o'zgaruvchilar orasida esa tsikil bor 
alert(`Tsikl jarayoni ${end - start} milli sekundda tugatildi`); //shu for tsiklini nechchi secund davom etganini bilish//yani alertga end o'zgaruvchini ishlagan vaqtidan start o'zgaruvchini ishlagan vaqti ajratildi yani shunda tsikil nechchi sekund ishlagani chiqadi yani har safar har hil chiqadi internet tezligigaham bog"liq alertda shuni hissoblab aniq raqamini chiqaradi 
////yani Date DateConstructor hissoblanadi bu Constructorni object hissoblanadi va vaqt bilan ishlaydigan get.. deb boshlanadigan ko'plab metodlari bor jsda Constructor new kalit so'zi bilan chaqiriladi ///bu holatda birinchi qatorda start nomli o'zgaradigan o'zgaruvchi yaratilib Date construktor objecti chaqirildi va keyingi qatorda for tsikli bilan katta tsikil yaratildi yani ishlashi uchun qanchadur vaqt ketadigan tsikil yaratildi(yani real loyihalarda tsikil serverdan kelishi kelish vaqti esa cho'zilishi va bu vaqtni ko'rish) va keyin esa yana end nomli o'zgaruvchan o'zgaruvchi yaratilib Date new kalit so'zi bilan chaqirildi keyin logda start o'zgaruvchini chaqirib start o'zgaruvchida chaqirilgan Date constructorni gettime metodi chaqirildi gettime bilan start o'zgaruvchini ishlashni boshlagan vaqti olindi va huddi shunday end o'zgaruvchiniham ishlashni boshlagan vaqti olindi keyin alerda becet ichida end o'zgaruvchidan  start o'zgaruvchi - minus bilan ayirildi bu holatda -minus operatori ikkala o'zgaruvchini bir biriddan ayiradi nimasini ayiradi bu o'zgaruvchilarda faqt gettimelar bor demak vaqtini ajratadi yani dasturlashda browser kodni birinchi qatordan o'qib keladi yani bu holatda ikkala o'zgaruvchini orasidagi tsikl qancha vaqt davom etganini bildik va alertda becet bilan shu javobni oldik//logga qaralsin
///////////////////////////////////////////////////////////////////////////////////////////////


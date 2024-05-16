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

let start = new Date()
for (let i = 0; i < 100000; i++){
let some = i ** 3
}
let end = new Date()
console.log(start.getTime());
console.log(end.getTime());
alert(`Loop competed in ${end - start} milliseconds`)
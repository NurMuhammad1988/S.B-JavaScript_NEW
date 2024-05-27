"use strict";

////Contex this =  har doim  har doim nimagadur qaram hissoblanadi yani osiladi

// //1-) oddiy funksiyani contexti yani this har doim window global objectiga qaram bo'ladi (qattiy rejim yoniq bo'lsa undefinedga teng bo'ladi)
// function logger() {
//     //qattiy rejimni o'chiribham qarab ko'rish kerak//this agar hech qanday objectga qaram qilinmasa sukut holatida window global objectiga qaram bo'ladi yani osiladi//yani faqat function kalit so'zi bor va objectni ichidagi local funksya va  metod  funksiyalardagina  windowga qaram bo'ladi yani osiladi
//     console.log(this); //bu holatda undefined chunki hech narsaga qaram emas//lekin qattiy rejim o'chiq bo'lsa bu contex this doim window global objectiga osiladi
// }
// logger();
// // console.dir(logger);

//2-)
function logger(a, b) {
    console.log(this);//javob undefined chunki qattiy rejim yoniq agar o'chirilsa bu holatdaham window global objectiga osiladi
    function sum() {
       console.log(this);//javob undefined chunki qattiy rejim yoniq agar o'chirilsa bu holatdaham window global objectiga osiladi//yani local funskiyadaham thisni o'zi qattiy rejimda undefind agar qattiy rejim yo'q bo'lsa windowga osiladi
        // return this.a + this.b;//bu holatda esa a va b qiymatlar sum funskiani ichida yo'qligi sabab hech narsa topilmayapti
        return a + b;// bu holatda esa bu a va b qiymatlar logger funksiyani parametrida borligi sabab va logger funksiya chaqirilganda parametrida 1 va 2 yozilgan javob 3 chiqadi sabab return qilib a+b yani + operatori borligi sabab//yani bu holatdaham closure holati a va b qiymatlar local funksiyda bo'lsaham aslida ona logger funksiyani parametrida a va b borligi sabab js a va b qiymatlarni localdan olib tashqi funksiyani parametriga berdi 
    }
    console.log(sum());
}
logger(1,2);
// console.dir(logger);

//3-)Closure
// const ass = 4;
// function log1() {
//     console.log(ass); // closure tushunchasi// agar funksiyani ichida logda funksiyadan tashqaridagi o'zgaruvchi chaqirilsa js birinchi shu log yozilgan funksiyani ichidan izlaydi agar topaolmasa tashqaridan izlaydi joriy holatda esa log1 funksiyasida logda tashqaridagi ass nomli o'zgaruvchi chaqirildi va javob tashqaridagi ass o'zgaruvchi bo'ldi 
// }
// log1(); 
// const a1 = 4;
// function log2() {//yani bu holatda log2 funksiyani ichidagi logga a1 o'zgaruvchini topish buyurildi bu holatda log birinchi shu funksiyani o'zini ichidan izlaydi va javob 5 chiqadi chunki jsda funksiyani ichida biror o'zgaruvchi chaqirilsa birinchi shu funksiyani o'zini ichidan izlaydi agar bor bo'lsa shuni chiqaradi masalan bu holatda log2 funksiyasidan tashqarida global a1 o'zgaruvchiham bor lekin js tashqaridagi global a1 o'zgaruvchini emas funksiya ichkarisidagi local o'zgaruvchni birinchi o'qidi agar local funksiyada a1 o'zgaruvchi bo'lmaganda tashqaridagi global o'zgaruvchini(4) o'qigan bo'lardi yuqoridagi log1 funskiyasida esa global o'zgaruvchini o'qidi 
//     const a1 = 5;
//     console.log(a1);
// }
// log2();

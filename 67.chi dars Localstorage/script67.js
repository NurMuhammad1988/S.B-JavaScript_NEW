"use strict";

//Localstoragni metodlari
// const email = document.querySelector("#email"),
//     firstNmae = document.querySelector("#name"),
//     formSubmit = document.querySelector("form"), //bu holatda form html tag bo'lgani uchun . yoki # qo'yish shartmas agar bu holatda htmlda nechta form bo'lsaham querySelector holatida faqat birinchisini agar querySelectorAll bo'lsa hamma formlarni oladi
//     doc = document.querySelector("#doc"), //yani htmldan oddiy spandag   i doc idsi olib kelindi
//     remove = document.querySelector("#remove"); //localstoragedagi malumotni udalit qilish removeItem yokida clear metodi bilan (pastda 26 chi qatordan boshlangan dars uchun bu remove idisi bor hrmldagi buttonham chernavikka olib turildi tepadagi bu darsni takrorlash uchun htmnldagi remove idsi bor button chernavikdan chiqarilishi)

// ////1-setItem setitem metodi bilan localstoragega qandaydur malumotni yuklab qo'yish mumkun setItemni birinchi parametri key yani kalit so'z hissoblanadi yani qiymatni olish uchun key kerak bo'ladi ikkinchi parametri esa qiymatni o'zi hissoblanadi
// localStorage.setItem("name", "Nur");
// ////2-getItem metodi localstoragedagi malumotni olib beradi getItem faqatgina bitta parametr qabul qiladi yani string holatda setitemdagi keyni qabul qiladi shunda keydan biladiki nimani get qilishni yani qabul qilishni
// const names = localStorage.getItem("name"); //getitemga key berilishi kerak yani setitemgda yozilgan key nimani olish kerak nameni olish kerak //yani setitem qilingan malumotni getitem qilib names nomli o'zgaruvchiga oldik yani shunda setitem qilib o'rnatilgan yani localstoragega jo'natilgan malumotni keyi name yani getitem faqat keyni qabul qilib uni qiymatini yani setitemni ikkinchi parametrini qiymatinni olib beradi
// console.log(names); //yani logda Nurni oldi yani localstoragega setitem metodi bilan joylangan Nurni names o'zgaruvchida string qilib  logda oldi
// doc.textContent = `${names}`; //doc o'zgaruvchi ichida kelgan ichida document texti bor bo'lgan spanni texti yani document degan texsi names o'zgaruvchida get qilingan namega o'zgardi yani Nurga textcontent (html qiymatlarga oddiy texni qo'shadi ) endi browserda console log refresh qilingandaham malumot yani Nur texti yo'qolib qomeydi chunki endi malumot localstorageda turipti yani browserda turipti
// ////3- metod removeItem
// remove.addEventListener("click", () => {
//     // localStorage.removeItem("name"); //removeItem metodiga key berilishi kerak yani keyi orqali tanib localstoragedagi malumotni udalit qiladi yani enndi localstoragedaham logda browserdaham Nur string malumoti o'chib ketdi buni ko'rish uchun    setitem va get itemlarni o'chirib turush kerak bo'lmasa refresh bo'lib qaytadan yuklanib qolavoradi

//     ////3- metod removeItem
//     localStorage.clear()//clear metodi hamma keylarnu udalit qilib tashlaydi
// });

/////////////////////////////////////////////////////////////////////////////////////////

const email = document.querySelector(".email"),
    firstName = document.querySelector(".names"),
    formSubmit = document.querySelector("form");

formSubmit.addEventListener("submit", (e) => {
    //e yani event global object yani butun html yani bu holatda  e.preventDefault(); metodi bilan sign in buttoni bosilgadanaham butun sayt refresh bo'maydi
    e.preventDefault();

    const user = {
        email: email.value,
        names: firstName.value,
    };

    console.log(user);
});

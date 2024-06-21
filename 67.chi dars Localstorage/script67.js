"use strict";

////Localstoragni metodlari
// const email = document.querySelector(".email"),
//     firstNmae = document.querySelector(".name"),
//     formSubmit = document.querySelector("form"), //bu holatda form html tag bo'lgani uchun . yoki # qo'yish shartmas agar bu holatda htmlda nechta form bo'lsaham querySelector holatida faqat birinchisini agar querySelectorAll bo'lsa hamma formlarni oladi
//     doc = document.querySelector(".doc") ,
//     remove = document.querySelector(".remove"); //localstoragedagi malumotni udalit qilish removeItem yokida clear metodi bilan (pastda 26 chi qatordan boshlangan dars uchun bu remove classi bor htmldagi buttonham chernavikka olib turildi tepadagi bu darsni takrorlash uchun htmnldagi remove classi bor button chernavikdan chiqarilishi kerak)

// ////1-setItem setitem metodi bilan localstoragega qandaydur malumotni yuklab qo'yish mumkun setItemni birinchi parametri key yani kalit so'z hissoblanadi yani qiymatni olish uchun key kerak bo'ladi ikkinchi parametri esa qiymatni o'zi hissoblanadi yani endi name classi bor inputga malumot kirgizilganda local storgega borib tushadi birinchi parametr yani key bu holatda inputga berilgan va firstName o'zgaruvchida chaqirilgan name classi hissoblanadi (yani key qiymatni keyichalik olish uchun kerak bo'ladi)
// // localStorage.setItem("name", "Nur");

// // ////2-getItem metodi localstoragedagi malumotni olib beradi consolega olib beradi getItem faqatgina bitta parametr qabul qiladi yani string holatda setitemdagi keyni qabul qiladi shunda keydan biladiki nimani get qilishni yani qabul qilishni
// // const name = localStorage.getItem("name"); //getitemga key berilishi kerak yani setitemgda yozilgan key nimani olish kerak nameni olish kerak //yani setitem qilingan malumotni getitem qilib name nomli o'zgaruvchiga oldik yani shunda setitem qilib o'rnatilgan yani localstoragega jo'natilgan malumotni keyi name yani getitem faqat keyni qabul qilib uni qiymatini yani setitemni ikkinchi parametrini qiymatini olib beradi yani logga olib beradi
// // console.log(name); //yani logda Nurni oldi yani localstoragega setitem metodi bilan joylangan Nurni name o'zgaruvchida string qilib  logda oldi
// // doc.textContent = `${name}`;//dog o'zgaruvchida chaqirilgan doc classli spanni qiymatini name o'zgaruvchi qilib qo'ydik yani shunda spandagi document texini o'rniga local storegega yuklangan nur texti bor name o'zgaruvchi dynamic berib qo'yildi //doc o'zgaruvchi ichida kelgan ichida document texti bor bo'lgan spanni texti yani document degan texsi name o'zgaruvchida get qilingan namega o'zgardi yani Nurga textcontent (html qiymatlarga oddiy texni qo'shadi ) endi browserda console log refresh qilingandaham malumot yani Nur texti yo'qolib qomeydi chunki endi malumot localstorageda turipti yani browserda turipti//remove o'zgaruvchini tekshirayotganda bu kod o'chiq turishi kerak
// // // ////3- metod removeItem
// // remove.addEventListener("click", () => {
// //     localStorage.removeItem("name"); //removeItem metodiga key berilishi kerak yani keyi orqali tanib localstoragedagi malumotni udalit qiladi yani endi localstoragedaham logda browserdaham Nur string malumoti o'chib ketdi buni ko'rish uchun    setitem, console.log(name) va get itemlarni o'chirib turush kerak bo'lmasa refresh bo'lib qaytadan yuklanib qolavoradi//asosan removeitemdan foydalanish kerak malumotlarni hammasini behosdan udalit qilib tashlamaslik uchun chunki clear metodi hamma malumotlarni udalit qilibtashlaydi removeitem esa faqat tanlanganini udalit qiladi

// //     ////3- metod removeItem
// //     // localStorage.clear(); //clear metodi hamma keylarni udalit qilib tashlaydi
// // });

/////////////////////////////////////////////////////////////////////////////////////////

////localstoragedagi malumotlarni object ko'rinishida olish bu objectni serverga olishxam mumkun
const email = document.querySelector(".email"),
    firstName = document.querySelector(".name"),
    formSubmit = document.querySelector("form"),
    doc = document.querySelector(".doc");

formSubmit.addEventListener("submit", (e) => {
    //htmldagi obshi form tagiga hodisa ilish
    //e yani event global object yani butun html yani bu holatda  e.preventDefault(); metodi bilan sign in buttoni bosilgadanaham butun sayt refresh bo'maydi yani obshi formni ichiga submit hodisasi sodir bo'lganda butun sayt refresh bo'lmaydi//yani formga hodisa umumiy olindi shu sabab form tageni ichida submit type bor bo'lgan button ishlaydi yani bu hodisa formni ichidagi sumbit type bor elementlarga tasir qiladi bu holatda formni ichida bitta sumbit typiga ega button bor yani Sign in texli button yani bu hodisa shu submit type bor buttonga click bo'lganda butun sayt refresh bo'lmaydi
    e.preventDefault();

    const user = {
        email: email.value, //yani email o'zgaruvchidagi email classli inputni qiymati
        name: firstName.value, //yani firstName o'zgaruvchidagi name classi bor inputni qiymati yani user inputga kiritadigan malumotlar
    };

    e.target.reset(); //yani   umumiy documentdagi hamma malumotlar yangilanadi yani aslida submit bo'lgandan keyin yani user inputlarga malumotlarni kirgizib sig in qilgandan keyin malumotlar inputlardan o'chib ketadi yani submit hodisasi bo'lgandan keyin inputlar yana malumot yozish uchun tozalanadi
    // console.log(user); //user objectiga kelib tushadigan userni malumotlarini ko'rish uchun

    localStorage.setItem("user", JSON.stringify(user)); //yani bu holatda server bilan ishlash// yani bu holatdagi "user" kalit so'z yani user objecti chaqirildi va json global objecti bilan userni local soragega string malumot turi qilib yuborildi chunki server js objecti tushunmaydi shu sabab userni malumotlari json bilan string qilinib keyion jo'natildi
});

// // const user = localStorage.getItem("user");
// // console.log(user); //!!!typoef strsing!!!// bu holatda localstoragedan string (json) kelepti lekin aslida object olinishi kerak

const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);//parse metodi sabab jsondan object mslumot turiga o'tildi
doc.textContent = `${user.name}`; //yani endi doc o'zgaruvchiga yanni htmldagi spanda document texti bor o'zgaruvchiga textcontent bilan dynamic tarzda userni name qiymati berildi shunda bu spannni malumot yani qiymati userni name qiymatiga o'zgaradi (refrashdan keyin) agar refrash qilinmasdanham bu holat bo'lishi uchun yuqoridagi e.preventDefault(); holati o'chirib turilishi kerak shunda spanni qiymati userga o'zgartirilgandan aftamatik tarzda spanni qiymati o'zgaradi//yani endi local data bazada yani localstorageda malumotlar saqlanib turipti endi sayt refresh qilinsaham malumot saqlanib turavoradi
//doc.textContent = `${user.email}`//yani bittasi ishlaydi chunki span bitta yoki name qiymati yoki email qiymati spanga olinishi mumkun

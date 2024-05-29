"use strict";

// function logger(){
//     console.log(this);//undefined// agar qattiy rejim o'chirilsa window global objectiga osiladi window global objecti run codeda ko'rinmeydi chunki window objecti browserda qo'llab quvvatlanadi////window objekti barcha brauzerlar tomonidan qo'llab-quvvatlanadi u brauzer ekranini ifodalaydi barcha global js objektlari funktsiyalari va o'zgaruvchilari avtomatik ravishda window objektining azolariga aylanadi yani window faqat browserda ishlaydi
// }
// logger()

//call metodi
// function logger() {
//     //funksiya
//     console.log(this);//pastdagi call metodi sabab bu this endi pastdagi car objectiga teng
// }
// const car = {
//     //object//car objectni yuqoridagi logger funksiyaga contex sifatida berish//yani logger funksiyadagi contex thisga san car objectiga osil yani car objectidan nusxa ol vorsilan deyildi
//     name: "BMW",
//     color: "Black",
// };
// logger.call(car); //call metodi yani joriy objektni boshqa objektga almashtirib objekt usulini yani nusxasini chaqiradi//yani bu holatda call metodi bilan logger funksiyani ichidagi contex thisga car objectiga osil yani car objetni nusxala deyildi yani bu holatda js call metodi bilan carni loggerdan izlaydi loggerda esa this bor bo'lgani uchun thisni topadi va carni call qiladi yani chqirib berradi shunda this bu car objectini nusxalaydi yani car objectidan vorislanadi   ////yani logger funksiyaga car objectini contexini ulab qo'y deyildi//yani dasturchi tomonidan qo'lda yozildi

// function logger() {
//     //funksiya
//     console.log(this); //pastdagi call metodi sabab bu this endi pastdagi car objectiga teng
//     console.log(this.name);//yani sinash uchun yozildi logda bmw yozuvi chiqdi chunki logda this.name deyildi nameni esa call metodi sabab cardan vorsilangani uchun bu this nameni yani bmwni chiqarib beradi agar this.color deyilsa color black qiymatini qaytarib beradi
//     console.log(this.color);
// }
// const car = {
//     //object//car objectni yuqoridagi logger funksiyaga contex sifatida berish//yani logger funksiyadagi contex thisga san car objectiga osil yani car objectidan nusxa ol vorsilan
//     name: "BMW",
//     color: "Black",
// };
//  logger.call(car); //call metodi yani joriy objektni boshqa objektga almashtirib objekt usulini yani nusxasini chaqiradi//yani bu holatda call metodi bilan logger funksiyani ichidagi contex thisga car objectiga osil yani car objetni nusxala deyildi yani bu holatda js call metodi bilan carni loggerdan izlaydi loggerda esa this bor bo'lgani uchun thisni topadi va carni call qiladi yani chaqirib beradi shunda this bu car objectini nusxalaydi yani car objectidan vorislanadi   ////yani logger funksiyaga car objectini contexini ulab qo'y deyildi//yani dasturchi
// //logger()//bu holatda bu logger funksiya ishlatilsa undefined va boshqa hatolar kelib chiqadi chunki bu logger bu joyda hali carni call bilan ulanganini bilmaydigan holatda yani loggerni yonida call yuqorida chaqirilgan

////apply metodi yani call metodi bilan apply metodini farqi
// function logger(speed) {
//     //funksiya
//     console.log(this);
//     console.log(
//         `My car is ${this.name} color is ${this.color}. max speead ${speed}`
//     ); //yani sinash uchun yozildi logda bmw yozuvi chiqdi chunki logda this.name deyildi nameni esa call metodi sabab cardan vorsilangani uchun bu this nameni yani bmwni chiqarib beradi //interpalatsa orqali ishlatilgani tepadagi thisdan farqi yo'q faqat interpalatsa ishlatilgan holos
// }
// const car = {
//     //object//car objectni yuqoridagi logger funksiyaga contex sifatida berish//yani logger funksiyadagi contex thisga san car objectiga osil yani car objectidan nusxa ol vorsilan
//     name: "BMW",
//     color: "Black",
// };
// // logger.call(car); //call metodi yani joriy objektni boshqa objektga almashtirib objekt usulini yani nusxasini chaqiradi//yani bu holatda call metodi bilan logger funksiyani ichidagi contex thisga car objectiga osil yani car objetni nusxala deyildi yani bu holatda js call metodi bilan carni loggerdan izlaydi loggerda esa this bor bo'lgani uchun thisni topadi va carni call qiladi yani chqirib beradi shunda this bu car objectini nusxalaydi yani car objectidan vorislanadi   ////yani logger funksiyaga car objectini contexini ulab qo'y deyildi//yani dasturchi
// ////logger()//bu holatda bu logger funksiya ishlatilsa undefined va boshqa hatolar kelib chiqadi chunki bu logger bu joyda halicarni call bilan ulanganini bilmaydigan holatda yani loggerni yozinida call yuqorida chaqirilgan
// logger.call(car, 200);//call va apply metodlarini farqi //agar logger ona funksyani parametriga nimadur berilsa logger chaqirilganda call metodini parametrida shu ko'rinishda chaqirish mumkun
// logger.apply(car, [300]);//call va apply metodlarini farqi //agar logger ona funksyani parametriga nimadur berilsa logger chaqirilganda apply metodini parametrida shu ko'rinishda yani massiv ko'rinishida >>shuni[] ichiga berilishi kerak yani faqat sintaksis boshqacharoq

//Bind metodi yani yangi funksiyani qaytarib beradi
// function calc(number) {
//     return this * number; //returndan keyin hamma narsaham ishlayvermaydi masalan log ishlameydi
// }
// const multiple2 = calc.bind(2);//bind doim yangi funksiya qaytaradi
// console.log(multiple2(10)); //bu holatda calc nomli funksiya yaratib ichiga return qilib contex thisni calcni parametridagi numberga ko'paytridik va multiple2 nomli yangi o'zgaruvchi yaratib unga calc funksiyani bind metodi bilan chaqirdik va bind metodini parametriga 2 ni yozdik bu holatda endi calc chaqirilganda contex this doim 2 bo'lib keladi yani return this contex number deyilgan yani number ko'paytrilsin deyilgan va calc bind bilan chaqirilganda bind metodiga calcni parametri this ko'paytirsin 2 ni deyilgan va multiple2 logda chaqirilganda parametriga 10 yozildi va shunda 2 ni 10ga ko'paytirish holati yuzaga keldi javob (typeof number 20) ////////yani endi contex this 2 ga teng
// console.log(multiple2(100));
// console.log(multiple2(150));//va buni hohlagancha ko'paytrib yozsa bo'ladi

///////////////////////////////////////////////////////////////////////////////

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     console.log(this); //contex this bu holatda yani addEventListener metodi bilan callback funskiya ichida  qattiy rejim yoniq yoki o'chiq bo'lsaham window objectidan vorislanadi
// });

// const btn = document.querySelector("button")
// btn.addEventListener("click", function (){
//     console.log(this);//bu holatda esa callback funnksiyamas oddiy funksiya bilan yozilgani uchun qattiy rejim yoniq yoki o'chiq bo'lsaham buttonni qaytaradi //yani bu holatda contex this btnga o'zgaruvchiga qaram hissoblanadi
// })

// const btn = document.querySelector("button")
// btn.addEventListener("click", function (){//yani callbacksiz shunday yozilgan oddiy funksiyada contex this shu elementni o'ziga teng bo'ladi yani bu holatda btn o'zgaruvchiga teng//lekin bu sintaksiz real loyihalarda juda kam uchrar ekan
//     this.style.width="400px"
//     this.style.backgroundColor = "red"
//     this.style.color = "white"
//     this.style.justifyContent ="center"
// })

// const obj = {
//     x: 10,
//     y: 15,
//     sum: function () {
//         //bu joyda sum: obj ni qiymatidagi oddiy local funksiya>>>(:)//bu sum funksiyani contexti obj ga teng shu sabab logger callback funksiyani contexti obj ga teng hissoblanadi
//         const logger = () => {
//             // funksya function bilan emas callback (=>)bilan yozilganda contex this objectni o'ziga teng bo'ladi yani thisni undefined bo'lishi yoki qattiy rejimni yoniq o'chiq bo'lishidan qattiy nazar agar funksiya callback qilinib const o'zgaruvchi bilan yozilsa contex this objectni o'ziga teng bo'ladi bu holatda obj objectiga teng
//             console.log(this);
//             console.log(this.x); //endi
//             console.log(this.y); //console.log(this.)
//             // qilibham alohida alohid achaqirish mumkun
//         };
//         logger(); //bu holatda sum: qiymatiga tegishli oddiy funksiyani ichida logger strelkali yani const callback funksiyada contex this chaqirildi//yani callback funksiyada o'zini contexsi bo'lmaydi//ODDIY funksiya bilan const>>>(=>) callback funskiyani farqi calback funksiyada o'zini shaxsiy contexsi bo'lmaydi shu sabab contex thisni o'ziga contex qilib olib thisni objectni o'ziga teng qilib qo'yadi
//     },
// }; //js functionni aniq o'zini contexti bor yani window objecti lekin callback const bilan yoziladigan funksiyada o'zini contexti yo'q const callback funksiya har doim o'zini tepasiga yani ona funksiyaga yoki ona objectga qaram bo'ladi yani osiladi shu sabab undefined yoki qattiy rejim muammolari yo'q
// //strelkali callback funksiya hech qanday contexga ega emas u har doim o'zini tepasidagi contexga qaram bo'ladi
// obj.sum();

////////////////////////////////////// yuqoridagi darslar hulosasi
//error
// const btn = document.querySelector("button"); //lekin bu holatda callback funksiyani hech qanday contexti bo'lmagani sabab hato beradi chunki callback strelkali funsiyani contextida window objecti yoq shu sabab pastki btn1 o'zgaruvchida (e) target bilan qilingani to'g'ri hissoblanadi
// btn.addEventListener("click", () => {
//     this.style.width = "800px";
// });

// const btn1 = document.querySelector("button");
// btn1.addEventListener("click", (e) => {
//     e.target.style.width = "900px";
// });

///////////////////////////Darsga qo'shimcha
// const calc = (a) => a + 10; //bu agar funksiya shunday bitta vazifani bajaradigan bo'lsa shunday qilib callback funksiyani qisqartrib yozish mumkun yani returnsiz chunki => shu strelkadan keyin return aftamatik tarzda yozilgan bo'ladi
// console.log(calc(10)); //yani bu holatda bu >>>(10) const calcni parametridagi (a) hissoblanadi yani endi parametrdagi 10ga funksiyadagi 10 qo'shilayapti //javob 20

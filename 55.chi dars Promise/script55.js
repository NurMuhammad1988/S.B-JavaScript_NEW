"use strict";
////Promise yani vada
// const isFrendCome = false;
// const meetingRequest = new Promise((resolve, reject) => {
//     if (isFrendCome) {
//         const msg = "Friend I'm there";
//         resolve(msg);
//     } else {
//         const err = "I can't come there";
//         reject(err);
//     }
// });
// meetingRequest
//     .then((msg) => console.log(msg))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("I'm colling you"));
// // console.dir(meetingRequest);////objectligini ko'rish uchun yozildi
//// Promis objectini 2 ta parametri va 3 ta metodi bor metodlari then, catch, finally
// ////promise object hissoblanadi promis ikkita parametr qabul qiladi yani resolve va reject ikkalasiham qanaqadur qiymat qaytaradi  so'rov omadli bo'lsa resolve qaytaradi omadsiz bo'lsa reject bo'ladi //yani bu holatda isFrendCome nomli o'zgaruvchi yaratilib unga false qiymati berildi (boolean) va meetingRequest nomli o'zgaruvchi yaratilib unga Promis js objecti new kalit so'zi bilan chaqirildi Promis objecti vada manosini beradi yani Promise objecti ikkita parametr qabul qiladi resolve va recect resolve meetingRequest chaqirilganda ohirida meetingRequest. nuqta qo'yilsa promisni parametrlari chiqadi masalan bu holatda .then resolvni nazarda tutadi .catch  rejectni nazarda tutadi .finally esa natija resolve(omadli) yoki recject(omadsiz) bo'lgan taqdirdaham yani nima bo'lgan taqdirdaham qanaqadur natijani beradi //yani bu holatda promise objecti chaqirilib parametriga o'zini ikkita qiymati resolve va reject chaqirildi va agar isfriendcome o'zgaruvchida holat resolve yani omadli bo'lsa resolve(msg)>>>"Friend I'm there" yokida omadsiz bo'lsa reject(err)>>"I can't come there" berildi va promise chaqirilgan meetingRequest objectidan keyin nuqta qo'yilib promisni chaquruvchi metodlar ishga solindi masalan then resolveni yani omadlini parametri hissoblanadi chunki promise chaqirilganda parametrida birinchi resolve turipti masalan .thendan keyin agar omadli bo'lsa qanday habar chiqishi aytildi yani (msg) .catch esa rejectni yani omadsizni parametri hissoblanadi promise chaqirilganda parametrida ikkinchi reject turipti masalan .catchdan keyin agar omadsiz bo'lsa qanday habar chiqishi aytildi yani (err) va ohirgi parametr finally hissoblanadi yani bu parametr tepadagi then va catch parametrlari ishlagan va ishlamagan taqdirdaham bitta javobni qaytaradi masalan bu holatda logda "I'm colling you" //Yani bu promise objecti server bilan ishlash uchun judaham kerak masalan serverdan malumot kelayotganda qandaydur holatlar sodir bo'lsa masalan server javob bermasa yoki kechiksa va hakozo holatlarda shu promise objecti bilan userga kerakli hodislarni ilish mumkun
// ////const isFrendCome = true; qilinsa "Friend I'm there" javobini yani resolveni .then javobidagi msg ni olish mumkun bu holatda if parametridagi object birinchi doim true bo'lishi kerak bu holatda false bo'lgani uchun promise biladiki so'rov bajarilmadi shu sabab catchni ishga tushuradi va err o'zgaruvchini qiymati bo'lgan I can't come there textini qaytarib beradi .finally esa so'rov true yokida false bo'lsaham finally o'ziga kiritilgan malumotni qaytarib beradi yani bu server bilan ishlashda juda qulay hissoblanadi yani faqat if else bilanmas uchunchi finally metodiham bor

///////////////////////////////////////////////////////////////////////////////////////////////////////////
////agar Promise objectni ishlatilmasa kodlarni qanday yozilishi
// console.log("Request data..."); //sync kod//yani kod o'qilish tartibi bo'yicha ketmaketlikda ishga tushadi
// setTimeout(() => {
//     ////async kod//yani bu holatda kod o'qilish tartibidan tashqariga chiqib settimeout funksiyasi bilan aytilgan vaqtda ishga tsuhsadi yani kod o'qilish tartibini chetlab o'tadi parametrida nechchi sekunddan keyin ishlash buyurilsa o'sha vaqtdagina ishlaydi
//     console.log("Processing data...");
//     const product = {
//         name: "car",
//         color: "Black",
//     };
//     setTimeout(() => {////asinhron kodlar yozish mumkun bo'lgan settimeout funksiyasini ichidaham yana asinhron kod yozish mumkun
//         ////async kod
//         product.status = "Order";////yani birinchi asinhron koddan keyin birinchi asinhron kodni malumotlari o'zgarib kelepti masalan endi birinchi koddan ikki sekund vaqt o'tib endi status order qiymati va logda asosoiy product objectiham chaqirilepti qo'shilepti
//         console.log(product);
//     }, 2000);
// }, 2000); ////yani bu holatda birinchi logda synhron tarzda yani oddiy kod o'qilishi tartibida logda "Request data..." chiqsin va asnhron tarzda yani run kodedan keyin 2 sekund vaqt o'tib logda "Processing data..." chiqsin va yana asnhron kodda product o'zgaruvchini statusu "order" va logda product objecti chiqsin deyildi
//yani bu holatda "Request data..." sinhron, "Processing data..." asinhron,  console.log(product) asinhron hissoblanadi yani sinhron kod bir boshidan o'qib kelinadi asinhron kod esa bu holatda settomeout funksiyasi bilan yozildi
//yani Promis objectisiz ishlaganda settimeout bilan ishlasa bo'ladi lekin bitta minus tomoni bor serverdan keladigan malumotlarni qancha vaqtda kelishini hech kim bilmaydi masalan bu holatda 2000 millisekunddan keyin ishlashlar buyurlgan bo'lsada aslida serverdan malumotlarni kelishi bu vaqtdan farq qilishi mumkun lekin Promise objecti bilan ishlaganda vaqtnimas jarayonni yozib qo'yiladi yani masalan agar bunday holatda manabu(.then) yokida manabu(.catch) yokida nima bo'lgandaham esa manabu(.finally) yani vaqtni ahamiyati yo'q serverdan keladigan malumotga qarab promise objecti hodisalarni boshqaradi

//////////////////////////////////////////////////////////////////////////////////////////////////////////
////Yuqoridagi promis objectisiz yozilgan kodni endi promise objecti bilan yozilishi

// console.log("Request data..."); //sync kod//
// const req = new Promise((resolve) => {
//     ////bu holatda reject yo'q chunki hamma narsa aniq yozilepti yani serverdan malumot kelmay qolsa degan gap yo'q desaham bo'ladi
//     setTimeout(() => {
//         ////async kod////data so'rov yuborildi va ikki sekunndan keyin kelishi aytildi
//         const product = {
//             name: "car",
//             color: "Black",
//         };
//         resolve(product);
//     }, 2000);
// });
// req.then((data) => console.log(data)).finally(() =>
//     console.log("Fetching and")
// );
////then resolve parametrini ifoda qiladi yani thenni resolveni birinchi parametri desaham bo'ladi ////bu holatda data, req o'zgaruvchi ichida chaqirilgan Promise objectini datalari yani malumotlari hissoblanadi yani bu holatda product objectini datalari hissoblanadi////yani sinhron kod console.log("Request data...") dan 2 sekunndan keyin  resolve keyin esa .finally Fetching and

////////////////////////////////////////////////////////////////////////////////////////////////////
////Promise ichida promise faqat resolve parametri bilan yozilishi
// console.log("Request data..."); //darrov ishleydi
// const req = new Promise((resolve) => {
//     setTimeout(() => {
//         //yani serverga so'rov jonatildi shunga farazan ikki sekund vaqt ketadi
//         const product = {
//             name: "car",
//             color: "Black",
//         };
//         console.log("Procssesing data... "); //ikki sekunddan keyin ishleydi
//         resolve(product);
//     }, 2000);
// });
// req.then(
//     (data) =>
//         new Promise((resolve) => {
//             //yani product objectdan kelayotgan resolveniham ichiga promise yozsa bo'ladi masalan bu holatda
//             setTimeout(() => {
//                 //datalarni serverga asinhron  jo'natish
//                 ////async kod
//                 data.status = "ordered";
//                 console.log("Get data..."); //yana ikki sekunddan keyin jami to'rt sekunddan keyin ishleydi
//                 resolve(data); //yani omadli yani serverga so'rov omadli jo'natildi
//             }, 2000);
//         })
// )
//     .then((result) => console.log(result))
//     .finally(() => console.log("Fetching and"));

////promislar bir biridan vorislanib ishlaydi
//////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
////Promise ichida promise faqat reject parametri bilan yozilishi
console.log("Request data..."); //darrov ishleydi
const req = new Promise((resolve) => {
    setTimeout(() => {
        const product = {
            name: "car",
            color: "Black",
        };
        console.log("Procssesing data... ");
        resolve(product);
    }, 2000);
});
req.then(
    (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                data.status = "ordered";
                console.log("Get data...");
                reject();
            }, 2000);
        })
)
    .then((result) => console.log(result))
    .catch(() => console.log("Something went wrong!"))////bu holatda run codeda shu "Something went wrong!" textini chiqishiga sabab reject() borligi hissoblanadi////yani get data qamalga oshmadi something went wrong bo'ldi degan manoda
    .finally(() => console.log("Fetching and"));

////promislar bir biridan vorislanib ishlaydi
////////////////////////////////////////////////////////////////////////////////////////////////////

////W3Schools dan olingan kod
// setTimeout(function() { myFunction("I love You !!!"); }, 9000);
// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

// console.log("Request data...");
// const req = new Promise((resolve) => {
//     setTimeout(() => {
//         const product = {
//             name: "car",
//             color: "Black",
//         };
//         console.log("Procssesing data... ");
//         resolve(product);
//     }, 2000);
// });
// req.then(
//     (data) =>
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 data.status = "ordered";
//                 console.log("Get data...");
//                 resolve(data);
//             }, 2000);
//         })
// )
//     .then((result) => console.log(result))
//     .finally(() => console.log("Fetching and"));

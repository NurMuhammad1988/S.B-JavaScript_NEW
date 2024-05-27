"use strict";

// function logger(){
//     console.log(this);//undefined// agar qattiy rejim o'chirilsa window global objectiga osiladi window global objecti run codeda ko'rinmeydi chunki window objecti browserda qo'llab quvvatlanadi////window objekti barcha brauzerlar tomonidan qo'llab-quvvatlanadi u brauzer ekranini ifodalaydi barcha global JS objektlari funktsiyalari va o'zgaruvchilari avtomatik ravishda window objektining azolariga aylanadi yani window faqat browserda ishlaydi
// }
// logger()


////call va apply metodlari
// function logger() {
//     //funksiya
//     console.log(this);//pastdagi call metodi sabab bu this endi pastdagi car objectiga teng
// }
// const car = {
//     //object//car objectni yuqoridagi logger funksiyaga contex sifatida berish//yani logger funksiyadagi contex thisga san car objectiga osil yani car objectidan nusxa ol vorsilan
//     name: "BMW",
//     color: "Black",
// };
// logger.call(car); //call metodi yani joriy objektni boshqa objektga almashtirib objekt usulini yani nusxasini chaqiradi//yani bu holatda call metodi bilan logger funksiyani ichidagi contex thisga car objectiga osil yani car objetni nusxala deyildi yani bu holatda js call metodi bilan carni loggerdan izlaydi loggerda esa this bor bo'lgani uchun thisni topadi va carni call qiladi yani chqirib berradi shunda this bu car objectini nusxalaydi yani car objectidan vorislanadi   ////yani logger funksiyaga car objectini contexini ulab qo'y deyildi//yani dasturchi 

function logger() {
    //funksiya
    console.log(this);//pastdagi call metodi sabab bu this endi pastdagi car objectiga teng
    console.log(this.name);//yani sinash uchun yozildi logda bmw yozuvi chiqdi chunki logda this.name deyildi nameni esa call metodi sabab cardan vorsilangani uchun bu this nameni yani bmwni chiqarib beradi
}
const car = {
    //object//car objectni yuqoridagi logger funksiyaga contex sifatida berish//yani logger funksiyadagi contex thisga san car objectiga osil yani car objectidan nusxa ol vorsilan
    name: "BMW",
    color: "Black",
};
logger.call(car); //call metodi yani joriy objektni boshqa objektga almashtirib objekt usulini yani nusxasini chaqiradi//yani bu holatda call metodi bilan logger funksiyani ichidagi contex thisga car objectiga osil yani car objetni nusxala deyildi yani bu holatda js call metodi bilan carni loggerdan izlaydi loggerda esa this bor bo'lgani uchun thisni topadi va carni call qiladi yani chqirib berradi shunda this bu car objectini nusxalaydi yani car objectidan vorislanadi   ////yani logger funksiyaga car objectini contexini ulab qo'y deyildi//yani dasturchi 



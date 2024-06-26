//unversal openModal va closeModal funksiyalari form.jsga export qilish uchun unversal qilingan
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector); //yani modal ona divini jsga chaqirvoldik
    //openModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu openModal ishlamagandi chunki openModal form.js ga chaqirilmagan edi openModal funksiyani unversal qlib modal.jsdaham va form.jsgaham unversal function qilib chaqirilgan
    modal.classList.add("show");
    modal.classList.remove("hide"); //yani openModal funksiyasi chaqirilganda modal ona divini  classiga show classini qo'sh va hide clasini udalit qil deyildi va overflovga hidden yani scrollni ko'rinmey turishi buyurildi
    document.body.style.overflow = "hidden";

    // console.log(modalTimerId);

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
    //yani bu holatda pastroqda yozilgan modalTimerId o'zgaruvchisiga clearinterval berib qo'yildi yani bu clearinterval 5000 milli sekunddan keyin modalni sekin ishlatadi//////yani bu "hidden" holatida modal oyna ochilganda bodyga diynamic tarzda ovwerflow css classi berildi yani modal chiqgandan keyin orqasini ko'rinmeydigan yanaham to'g'rirog'i qimillameydigan qiladi yani scrollni hidden qiladi yani sayt qimirlamaydi////
}
function closeModal(modalSelector) {
    //closeModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu closeModal ishlamagandi chunki closeModal form.js ga chaqirilmagan edi closeModal funksiyani unversal qlib modal.jsdaham va form.jsgaham unversal function qilib chaqirilgan
    const modal = document.querySelector(modalSelector); //yani modal ona divini jsga chaqirvoldik

    modal.classList.add("hide"); //yani modal ona diviga hide classi qo'shilganda show classini udalit qilish buyurildi
    modal.classList.remove("show");
    document.body.style.overflow = ""; //yani hide classi ishga tushganda overflow hiddenmas yani bo'sh qilib qo'yiladi shunda bodyda scroll qiymati paydo bo'ladi
}

//unversal openModal va closeModal funksiyalari form.jsga export qilish uchun unversal qilingan
/////////////////////////////////////////////////////////////////////////////////////////

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector), //data atribut bilan modal oynaga aloqador buttonlarni jsga chaqirvoldik data atributlar htmlda bir nechta bo'lsa querySelector bilan chaqirilganda js codlar faqat birinchisiga tasir qilar ekan va agar htmlda data atributlar yozilib lekin jsda ishlatilmasaham hech narsa qilmaydi chunki data atributlar birinchi qiymati falsga teng bo'ladi yani hech narsaga tasir qilmaydi //querySelectorAll bilan chaqirilganda esa htmldagi hamma data-modal atributlarni jsga chaqirib oladi
        modal = document.querySelector(modalSelector); //yani modal ona divini jsga chaqirvoldik

    modalTrigger.forEach((item) => {
        //yani madal bo'yicha asosiy  o'zgaruvchi hissoblangan modalTrigger o'zgaruvchisini itemlarini yani elementlari foreach metodi bilan intirgatsa qilib shu itemlar yani elementlarga click hodisasi sodir bo'lganda openmodal funksiyasi ishga tushirilsin deyildi
        item.addEventListener("click", () =>
            openModal(modalSelector, modalTimerId)
        ); //yani bitta click hodisasini barcha data-modal atributibor elementlarga berib chiqdik va keyinchalik faqat bitta joyda data atributni qoldirdik???=> sababi bir nechta buttongaham bitta funksiyasni ishlatib ko'rdik
    });

    modal.addEventListener("click", (e) => {
        ////bu joydagi(e) butun displayni nazarda tutadi yani event target yani userga ko'rinib turgan butun display
        if (e.target == modal || e.target.getAttribute("data-close") == "") {
            //distruptatsa//
            ////x yani o'chirish tugmasiga bosilganda modal yopiladi //yani event targetda yani butunlay html documentda modal o'zgaruvchi ichidagi modal ona divi bor bo'lsa va event targetga yani umumiy documentga getAttribute metodi bilan data-close attributi bor bo'lsa "" bo'sh katak yani shunda data close atributidagi stiker x ga bosilganda ekrandan o'chadi //data-close atributi teng bo'lsa bo'sh katakga??  yani closeModal funksiyasi ishga tushadi  ////Element interfeysining getAttribute() metodi elementda belgilangan atributning qiymatini qaytaradi  agar berilgan atribut mavjud bo'lmasa qaytarilgan qiymat null bo'ladi

            //yani modalga click hodisasi sodir bo'lganda yani umumiy html documentda modal classi yani o'zgaruvchisi aktiv bo'lsa closeModal funksiyasi chaqirilsin deyildi
            //yani agar e.target ichida yani document ichida modal o'zgaruvchi yani modal o'zgaruvchini html elementlari bor bo'lsa yani butun html documentda event targetda pastdagi classlar bor bo'lsa click hodisasi sodir bo'lganda pastdagi classlar ishlasin
            closeModal(modalSelector); //bu joyda closeModal addEventListener funksiyasi parametrda chaqirilmagani sabab alohida(shu) bilan chaqiriladi
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    }); //bu holatdaesc klyavaturasi bosilgandahan closeModal funksiyasi chaqirilsin deyildi////yani agar butun document bo'ylab keydown hodisasi sodir bo'lganda yani claviyaturalar bosilganda clyavituralardan espace bosilganda yani evenni kodi espage bo'lganda va modalni classlilarida show degan class bor bo'lganda closeModal funksiyasi ishga tushsin //yani modal chiqganda escni bosibham modalda chiqib ketish mumkun
    // const modalTimerId = setTimeout(openModal, 5000); //bu holatda modalTimerId nomli o'zgaruvchi yaratilib unga settimeout funksiyasi chaqirildi va argumentiga open modsal funksiyasi 5000 millisikund bo'lganda openmodal funksiyasi ishga tushsin deyildi
    ////////////////////////////////////////////////////////////////////////////////////////////
    // console.log(window.pageYOffset); //darsda pageYOffset qiymati bilan qilindi lekin bu jsda eskirgan o'rniga yangisi scrollY qiymati bo'lgan//bu scrollY bo'yiga o'lchasa scrollX eniga o'lchaydi
    // console.log(window.scrollY + document.documentElement.clientHeight);//yani bu holatda scrolly bilanyani ekrani tepadan pastga ko'rinib turgan qismi bilan butun documentni bo'yi qo'shildi shunda saytni butun bo'yi nechchi pixel ekanligi bilinadi//bu scrollY bo'yiga o'lchasa scrollX eniga o'lchaydi
    ////////////////////////////////////////////////////////////////////////////////////////////
    function showModalByScroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            //yani bu holatda showModalByScroll nomli local function yaratilib umumiy windowni umumiy uzunligi bo'lgan scrollY qiymatiga document elementdan clientheigh qiymati qo'shilib va documentda element scrollheightdan -1px qilindi va agar shu yuqoridagi holat sodir bo'lganda openModal funksiyasi chaqirildi
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll); //yani open modal bir martta ishlagandan keyingi qatorda removeEventListener metodi ishga tushib openmodalni o'chiradi
        }
    }
    window.addEventListener("scroll", showModalByScroll); //yani bu holatda windowga scroll hodisasi berilganda showModalByScroll funksiyasi chaqirildi showModalByScroll local funksiyasi esa yuqorida yozilgan yani user saytni eng ohiriga tushganda openModal funksiyasi yana ishga tushadi
}

export default modal;
export { openModal, closeModal }; //// bu modal.js filedagi unversal funksiyalarni export qilish

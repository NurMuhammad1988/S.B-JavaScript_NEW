//unversal openModal va closeModal funksiyalari form.jsga export qilish uchun unversal qilingan
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector); //yani modal ona divini jsga chaqirvoldik>>>".modal" YANI MODAL FUNKSIYANI BIRINCHI PARAMETRIGA BERILIB MODAL FUNKSIYA script78.jsda CHAQIRILGANDA CHAQURUV QAVUSI ICHIDA CHAQIRILGAN(".modal") ona divi!!!
    //openModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu openModal ishlamagandi chunki openModal form.js ga chaqirilmagan edi openModal funksiyani unversal qlib modal.jsdaham va form.jsgaham unversal function qilib chaqirilgan
    modal.classList.add("show");
    modal.classList.remove("hide"); //yani openModal funksiyasi chaqirilganda modal ona divini  classiga show classini qo'sh va hide clasini udalit qil deyildi va overflovga hidden yani scrollni ko'rinmey turishi buyurildi
    document.body.style.overflow = "hidden";
    // console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}
function closeModal(modalSelector) {
    //yani modal ona divini jsga chaqirvoldik>>>".modal" YANI MODAL FUNKSIYANI BIRINCHI PARAMETRIGA BERILIB MODAL FUNKSIYA script78.jsda CHAQIRILGANDA CHAQURUV QAVUSI ICHIDA CHAQIRILGAN(".modal") ona divi!!!
    //closeModal shu modal.js da yaratilgan va form.js daham ishlatilgan shu sabab form jsda bu closeModal ishlamagandi chunki closeModal form.js ga chaqirilmagan edi closeModal funksiyani unversal qlib modal.jsdaham va form.jsgaham unversal function qilib chaqirilgan
    const modal = document.querySelector(modalSelector); //yani modal ona divini closeModal uversal funksiya ichiga chaqirvoldi

    modal.classList.add("hide"); //yani modal ona diviga hide classi qo'shilganda show classini udalit qilish buyurildi
    modal.classList.remove("show");
    document.body.style.overflow = ""; //yani hide classi ishga tushganda overflow hiddenmas yani bo'sh qilib qo'yiladi shunda bodyda scroll qiymati paydo bo'ladi
}

//unversal openModal va closeModal funksiyalari form.jsga export qilish uchun unversal qilingan
/////////////////////////////////////////////////////////////////////////////////////////

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector), //data atribut bilan modal oynaga aloqador buttonlarni jsga chaqirvoldik data atributlar htmlda bir nechta bo'lsa querySelector bilan chaqirilganda js codlar faqat birinchisiga tasir qilar ekan va agar htmlda data atributlar yozilib lekin jsda ishlatilmasaham hech narsa qilmaydi chunki data atributlar birinchi qiymati falsga teng bo'ladi yani hech narsaga tasir qilmaydi //querySelectorAll bilan chaqirilganda esa htmldagi hamma data-modal atributlarni jsga chaqirib oladi//  YANI BU MODAL FUNKSIYA CHAQIRILGANDA (BU LOYIHDA script66.js FAILIDA CHAQIRILGAN) BIRINCHI PARAMETRI triggerSelector "[data-modal]"GA TENG QILINGAN YANI SHUNDA modalTrigger O'ZGARUVCHIDA  triggerSelector YANI MODAL FUNKSIYANI BIRINCHI PARAMETRI CHAQIRILGANDA HUDDIKI "[data-modal]"NI YANI HTMLDAGI DATA ATRIBUTNI CHAQIRGAN BO'LADI  modalSelector ESA IKKINCHI PARAMETR YANI HTMLDAGI ".modal" CLASS HISSOBLANADI SHUNDA MODAL FUNKSIYA CHAQIRILGANDA PARAMETRIGA BIRINCHI triggerSelectorni IKKINCHI modalSelectorni QABUL QILADI UCHINCHISIHAM HUDDI SHUNDAY FARQI FAQAT modalTimerId script78.jsdan chaqirilgan   ENDI QAYERDA SHU UCHCHALA (triggerSelector, modalSelector, modalTimerId) PARAMETRLARNI KO'RSANG SHU COMMENTGA KELIB QAYTA O'QIB CHIQ
        modal = document.querySelector(modalSelector);  //yani modal ona divini jsga chaqirvoldik>>>".modal" YANI MODAL FUNKSIYANI BIRINCHI PARAMETRIGA BERILIB MODAL FUNKSIYA script78.jsda CHAQIRILGANDA CHAQURUV QAVUSI ICHIDA CHAQIRILGAN(".modal") ona divi!!!

    modalTrigger.forEach((item) => {
        //yani madal bo'yicha asosiy  o'zgaruvchi hissoblangan modalTrigger o'zgaruvchisini itemlarini yani elementlari foreach metodi bilan intirgatsa qilib shu itemlar yani elementlarga click hodisasi sodir bo'lganda openmodal funksiyasi ishga tushirilsin deyildi
        item.addEventListener("click", () =>
            openModal(modalSelector, modalTimerId)
        ); //yani bitta click hodisasini barcha data-modal atributibor elementlarga berib chiqdik va keyinchalik htmlda faqat bitta joyda data atributni qoldirdik???=> sababi bir nechta buttongaham bitta funksiyasni ishlatib ko'rdik
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
    }); //bu holatda esc klyavaturasi bosilgandahan closeModal funksiyasi chaqirilsin deyildi////yani agar butun document bo'ylab keydown hodisasi sodir bo'lganda yani claviyaturalar bosilganda clyavituralardan espace bosilganda yani evenni kodi espage bo'lganda va modalni classlilarida show degan class bor bo'lganda closeModal funksiyasi ishga tushsin //yani modal chiqganda escni bosibham modalda chiqib ketish mumkun
    function showModalByScroll() {
        if (
            //user saytni eng pastiga tushganda modalani yana ko'rsatish
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

//the end for today
export default modal;
export { openModal, closeModal }; //// bu modal.js filedagi unversal funksiyalarni export qilish

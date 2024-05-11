"use strict";
document.addEventListener("DOMContentLoaded", () => {
    //addEventListener metodi bilan asosiy js filega DOMContentLoaded hodisasini qo'shdik yani bu DOMContentLoaded hodisasi web saytning css va html faillari to'liq yulab bo'lingandan keyingina JS kodlarni ishga tushuradi masalan rasimlar serverdan kelishi mumkun yoki bazi funksiyalardagi malumotlar serverdan kelishi mumkun shunda shu kelish ochish vaqtida js ishlamay turadi funksiyalar to'g'ri ishlashi va yuklanishi uchun yani DOMContentLoaded DOM elementlar to'liq yuklanib bo'lgandan keyin to'liq ishga tayyor bo'lgandan keyin JS kodlar ishga tushadi
    const adv = document.querySelectorAll(".promo__adv img"),
        genre = document.querySelector(".promo__genre"),
        wrapper = document.querySelector(".promo__bg"),
        seriesList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add"),
        inputVal = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector("[type='checkbox']");
    const seriesDB = {
        series: [
            "OMAR",
            "THE FINAL LEGACY",
            "ERTUGRUL",
            "MAGNIFICENT CENTURY",
            "THE GREAT SELJUCKS GUARDIAN...",
        ],
    };

    addForm.addEventListener("submit", (event) => {
        event.preventDefault(); //yani bu holatda addEventListener metodi bilan addForm o'zgaruvchi ichidagi formni add classidagi formga elementiga submit yani harakat bosilganda event parametriga preventDefault hodisasi qo'shildi yani submit bo'lganda sayt qayta yuklanmasdan faqat bosilgan submit formini o'zi yuklanadi va bu JS hissoblanadi yani saytni faqat kerakli joyini ishlatish yani har saafar qandaydur hodisa sodir etilganda saytni qayta qayta yklamasdan tez ishlashi uchun kerak metodlar

        let newSeries = inputVal.value; //letni const bilan farqi constni o'zgartirish qiyin letni esa o'zgartirish oson //yani bu holatda newSeries nomli yangi o'zgaruvchi ochilib ichiga inputVal nomli o'zgaruvchi ichida chaqirilgan addForm o'zgaruvchi ichidagi yani htmlda form elementi ichidagi adding__input classi olinib unga yani form ichidagi inputga yoziladigan yani tushadigan qiymat yani valuesi olindi//logga qaralsin
        const favorite = checkbox.checked; //yani  bu holatda favorite nomli o'zgaruvchi yaratilib ichiga checkbox o'zgaruvchi ichidagi addForm o'zgaruvchidan chaqirilgan [type='checkbox'] atributi checked qilindi yani htmldagi input elementidagi checkbox atributi shunday hususiyatga egaki yani false va true operatori bilan ishlaydi  yani checked to'g'ri bo'lsa true hato bo'lsa false qaytaradi shu true yoki falseni checked qiymati bilan olindi//logga qaralsin
        //// console.log(newSeries);
        //// console.log(favorite);

        if (newSeries) {
            //yani if else operatoridi parametrida (argumentida) shu ichida>>()mantiqan nimadur qilinishi kerak bo'lgan o'zgaruvchi yoki funksiya yoziladi

            if (newSeries.length > 18) {
                //yani agar inputni ichi bo'sh bo'lmasa yani true bo'lsa yani biror narsa yozilgan bo'lsagina pastdagi metod va funcsiyalar ishlasin false bo'lsa ishlamasin
                newSeries = `${newSeries.substring(0, 18)}...`; //yani agar let newSeries o'zgaruvchi ichidagi inputVal o'zgaruvchisi ichida chaqirilgan .adding__input classli inputga user tomonidan kiritiladigan textlar 19 tadan ko'p bo'lsa substring metodi bilan qolganini yashirib text 19 tadan uzun ekanligini bildirish uchun uchta nuqta qo'yildi yani becet ichida interpalatsa orqali yozildi
            }

            if (favorite) {
                //yani agar checked true bo'lsa yani checkedda >>>✔ bo'lsa logda sevimli serial qo'shildi texti chiqsin
                console.log("Sevimli serial qo`shildi");
            }

            seriesDB.series.push(newSeries);
            sortArr(seriesDB.series); //yani bu funksiya seriesDB ichidagi arraylardagi ro'yhatni alphabet bo'yicha a, z qilib terib beradi yani har safar yangi text qo'shilgandaham doim bosh hariflar alphabet tartibida tartiblanadi yani bu faqat yangi qo'shiladigan arraylarga tegishli
            createSeriesList(seriesDB.series, seriesList);
        }

        event.target.reset(); //yani inputda yozilgan qiymatni yani eventni preventDefault hodisasi sodir bo'lganda reset metodi bilan udalit qiladi//yani reset metodi formlar bilan udalit qilishda ishlaydi
    });

    const deleteAdv = (arr) => {
        adv.forEach((item) => {
            item.remove();
        }); //yani adv o'zgaruvchi ichidagi promo__adv classini ichidagi img lar udalit qilindi yani bittada foreach metodi bilan intrigatsa qilib udalit qilindi//va bu ish deleteAdv nomli functsiya ichiga olindi chunki???
    };

    const makeChanges = () => {
        genre.textContent = "Comedy"; //yani genre o'zgaruvchi ichidafi promo__genre clasidagi drama texti dynamic tarzda comedyga o'zgardi
        wrapper.style.backgroundImage = 'url("img/1.jpg")'; //yani wrapper o'zgaruvchi ichidagi promo__bg clasiga cssda berilgan background imge dynamic tarzda boshqa imga o'zgartirildi va bu ish makeChanges nomli functsiya ichiga olindi chunki???
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createSeriesList(series, parent) {
        //createSeriesList (parent), ona divlarga berildi
        parent.innerHTML = ""; //yani serieslist o'zgaruvchi ichidagi promo__interactive-list ona divli classni (ul) innerHTML qiymati bilan (innerHtml qiymati dynamic tazda textlar qo'shadi lekin bu yerda bo'sh katak "" berilgani uchun promo__interactive-list classidagi html textlar yo'q bo'ldi yani ko'rinmay qoldi chunki innerHTML  doim string qaytaradi stringni esa "" bu bilan ichiga yozmay bo'sh qilib qo'yish mumkun")
        sortArr(series)
        series.forEach((item, index) => {
            parent.innerHTML += `
    <li class="promo__interactive-item"> ${index + 1} ${item}
    <div class="delete"></div>
</li>
    `;
        }); //yani seriesDB objecti foreach metodi bilan  intrigatsa qilinib ichidagi itemlar innerHTML qiymati orqali promo__interactive-item clasiga itrigatsa bo'lgan objectdagi itemlar yani qiymatlar dynamic tarzda kiritib qo'yildi  seriesdbdagi series massiv bo'lgani uchun tartib raqamlar noldan boshlanadi shu uchun massivni indexlariham olinib userga tushunarli bo'lishi uchun 1 dan boshlanadigan qilib qo'yildi>>${index + 1}
        document.querySelectorAll(".delete").forEach((trash, idx) => {
            trash.addEventListener("click", () => {
                trash.parentElement.remove();
                seriesDB.series.splice(idx, 1);
                // console.log(seriesDB.series);
                createSeriesList(series, parent);
            });
        });
    }

    sortArr(seriesDB.series);
    deleteAdv(adv);
    makeChanges();
    createSeriesList(seriesDB.series, seriesList);
});

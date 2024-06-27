function clas() {
    class MenuCard {
        //jsda classlar doim katta hariflar bilan yoziladi shunda js Carni class component ekanligini tushunadi
        ////rest operator constructorni parametrida eng ohirida yoziladi agar constructorni parametrida rest operatordan keyin birorta parametr yozilsa rest operator uni massivni ichiga yozvoradi
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            //bu holatda MenuCard nomli class yaratilib unga konstructor chaqirildi va parametriga kelejakda ishlatilishi rejalashtirilgan qiymatlar berib chiqildi this contex bilan har biri chaqirildi
            this.src = src; //rasim uchun atribut
            this.alt = alt; //rasim  uchun atribut
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; //yani bu massivga teng chunki rest operator massiv qaytaradi
            this.parent = document.querySelector(parentSelector);
            this.transfer = 12000; //dollorni so'mga ko'paytirish
            this.changeToUZS(); //yani har safar menucard classi ishlaganda bu metodham ishlaydi
        }
        changeToUZS() {
            //qo'lda yozilgan metod
            this.price = this.price * this.transfer; //yani endi pricega qandaydir narh qo'shsak transferdagi 12000 ga ko'paytiriliadi
        }
        render() {
            //qo'lda yozilgan metod
            const element = document.createElement("div");
            //// console.log(this.classes);
            if (this.classes.length === 0) {
                //yani massivni uzunligi 0 bo'lsa
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach((classname) =>
                    element.classList.add(classname)
                ); //yani rest operator yordamida classlar diynamic qo'shildi yani rest operator(...)bor classes parametri massiv qaytaradi shu classes parametrini foreach bilan intirgatsa qilib element o'zgaruvchi ichidagi classnamelarga add qilib classnamelarni qo'shdik endi new MenuCardlardagi ohirgi parametr hissoblangan "menu__item" classi qayerga chaqirilsaham doim yangi classlarni qo'shadi
            }
            element.innerHTML = `
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Price:</div>
              <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
            </div>
          `; //innerhtmlda htmlda classlari yozilgan elementlar chaqirildi stylelar shu sabab ishlayapti chunki shu stylelar yozilgan css papka js ulangan htmlda chaqirilgan (link)!!! dynamic tarzda kelgan bu html css filga jsda dynamic tarzda db.jsonda yozilgan
            this.parent.append(element); //yani bu holatda menucard classiga dynamic tarzda html element qo'shildi yani menucardda parentselector bor constructori ichida esa  this.parent = document.querySelector(parentSelector); qilib ona div chaqirilgan nimani ona divi chaqirilgan??? src, alt, title, descr, price,(.menu .container MenuCardga chaqirilganiga etibor qarat) atributlari bor divni va src, alt, title, descr, price, nomli atributlari (.menu .container MenuCardga chaqirilganiga etibor qarat) bor  parentga append qilib yangi dynamic yaratilgan divi  bor element nomli o'zgaruvchi kiritilgan
        }
    }

    //Axios get qilayotganda>>then(data => console.log(data)) doimo object qaytaradi agar bunday holatda yozilsa massiv qaytaradi>>>(data => console.log(data.data))
    axios.get("http://localhost:3000/menu").then((data) => {
        ////db.jsondagi menuga get so'rovni axios bilan qilingani yani db.jsondagi cardlarni html documentga dynamic chaqirish
        data.data.forEach(({ img, altimg, title, descr, price }) => {
            new MenuCard(
                img,
                altimg,
                title,
                descr,
                price,
                ".menu .container" //endi db.jsondan cartalar dynamic tarzda keladi// yani bu holatda data yani db.jsondagi menu json objecti foreach bilan intrigatsa qilinib foreachni parametriga destruptizatsiya qilindi yani datani bu {img, altimg, title, descr, price} qiymatlari nusxalab olindi va menucard classiga css classlari bilan birga render qilindi yani obshi datalarni foreach qilib menucardaga berib qo'yildi menucard classida esa (menucard classi yuqoriroqda) bu cartalar bilan ishlash classlarni diynamic berish kodlari bor// Destruptizatsiya massivni yoki objectni  yo'q qilmaydi. U objectni arrayni topshiriq va malumotlari bilan hech narsa qilmaydi  uning vazifasi faqat kerakli qiymatlarni o'zgaruvchilarga nusxalashdir
            ).render(); //render metodi yani ko'rsatish nimani ko'rsatish????>>> htmlni ko'rsatish
        });
    });
}
//the end for today
export default clas;

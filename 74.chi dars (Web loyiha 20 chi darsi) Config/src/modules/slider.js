function slider() {
    //65.chi dars (Web loyiha 17 chi darsi) Carousel va 66.chi dars (Web loyiha 18 chi darsi)  Dot Carousel va 69.chi dars (Web loyiha 19 chi darsi) RegExp
    ////Carousel
    const slides = document.querySelectorAll(".offer__slide"), //massiv qaytaradi yani offer__slide classlari 5 ta //htmlda offer ona divini ichida 5 ta odder__slide classlari bor ichida 5 ta card bor img descrepshini bilan
        next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current"),
        slidesWrapper = document.querySelector(".offer__slider-wrapper"),
        slidesField = document.querySelector(".offer__slider-inner"), //yani offer__slider-wrapper ona divini ichidagi ikkinchi ona div yani 5 ta carousel qilinishi kerak bo'lgan cardsalarni birinchi ona divi
        width = window.getComputedStyle(slidesWrapper).width, //yani htmldan slidesWrapper o'zgaruvchida chaqirilgan offer__slider-wrapper classini widthi olindi yani carouselga aloqador ona divni ovoldik
        // console.log(width); //offer__slider-wrapper ona divini widthini olinganini logda ko'rish uchun yozildi
        slider = document.querySelector(".offer__slider"); //offer slider yani sliderlarni eng katta ona divi

    let slideIndex = 1;

    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + "%"; //bu holatda slidesFieldda chaqirilgan carousel cardlarni yani 5 ta cardni 100ga ko'paytirib foiz berib qo'yildi shunda 5 ta card ekranda 500 foiz (width) joyni egalladi
    slides.forEach((slide) => {
        slide.style.width = width; //bu holatda sariq bilan yozilgan ohirgi width o'zgaruvchi nomi!!! endi slides o'zgaruvchida chaqirilgan eng katta ona divni widthi ekran eni bilan bir hil bo'ldi yani endi 500 foizmas//foreachni parametridagi slide bu ilmoq yani foreachni bergan natijasi yani bu holatda slidesni qiymatlarini massiv holati bu holatga style berib widthini width o'zgaruvchidagi qiymatga teng qilib qo'yildi yani ekran eniga
    });
    //indikator nuqtalar yani sliderni qaysi sliderda turganini ko'rsatib turadigan va hohglagan sliderga tanlab o'tib ketish mumkun bo'lhan sliderni nuqtalari
    const indicators = document.createElement("ol"); //yangi order list yani ol html class jsdadynamic tarzda yaratildi
    const dots = []; //dynamic yaratilgan dot o'zgaruvchini dots massiviga push qilindi
    indicators.classList.add("carousel-indecators"); //dynamic yaratilgan inticators o'zgaruvchiga cssdagi "carousel-indecators" classi qo'shildi
    slider.append(indicators); //va slider ona diviga dynamic ochilgan indicators ol html tage dynamic qo'shildi append metodi dynamic qo'shadi
    for (let i = 0; i < slides.length; i++) {
        //yani slider 5 ta bu tsikil tush beshta nuqtani qo'yib beradi let i = 0 bu let i yangi o'zgaruvchi qiymati yani indexsi nolga teng va agar shu qiymat yani nol kichkina bo'lsa slides o'zgaruvchida kelgan 5 ta cardni uzunligidan indexga ++ qilib qo'shamoz nimani qo'shamiz? tsikilni ichidagi yangi elementni
        const dot = document.createElement("li"); //yani li html tagi dynamic yaratildi va
        dot.setAttribute("data-slide-to", i + 1); //bu holatda "i + 1" massivlar noldan boshlangani uchun no;danmas birdan boshlashni nazarda tutadi va data-slide-to bu dynamic qo'shilgan atribut hissoblanadi yani dotga yani dotda dynamic qo'shilgan lilarda endi dynamic data-slide-to atributi bor yani data atributlar
        dot.classList.add("carousel-dot"); //dynamic yaratilgan dot o'zgaruvchiga cssdagi "dot" classi qo'shildi
        if (i == 0) {
            dot.style.opacity = 1;
        } //agar tsikilga qo'yilgan qiymatlar 0 ga teng bo'lsa opacity css qiyamto 1 bo'lsin yani nol bo'lsa qolgan nuqtalar yani dotdagi nuqtalarni opasitisi 1 bo'lib turadi yani shunda bosilganini rangi to'q qolganni esa opasitesi bir bo'lib hira bo'lib turadi
        indicators.append(dot); //dynamic yaratilgan li lar dynamic yaratilgan ol ga dynamic qo'shildi
        dots.push(dot); //dynamic yaratilgan dot o'zgaruvchini dots massiviga push qilindi yani endi dots massiviga hodisa ilish mumkun
        // console.log(dots);//dotsda nima borligini ko'rish uchun yozildi
    }

    slidesField.style.display = "flex"; //slidesfield o'zgaruvchida chaqiriligan offer__slider-inner classli ona divni bollari yani 5 ta card//endi cardalar flex sabab bir qator bo'lib turadi
    slidesWrapper.style.overflow = "hidden"; //yani bu holatda endi overflow sabab faqat birinchi card ekranda qoladi lqekin aslida hammasi ekranda bor bo'ladi faqar overflow css classi sabab slidesWrapperda chaqirilgan .offer__slider-wrapper ona divni ekran endi ko'rinayapti holos qolgani esa hidden qilindi overflow sishlashiga sabab esa getComputedStyle metodida slideswrapper borligi yani overfllow ekran enidan tashqari hamma narsani hidden qildi holos nimasini hidden qildi scrollini hidden qildi holos yani ekran uzoqlashtirilsa scroll bo'lmasaham qolgan 4 ta card turganligini ko'rish mumkun
    slidesField.style.transition = ".5s ease all";

    ////RegExpni alohida funksiyada yozildi va kerakli joylarda chaqirilib parametridagi width o'zgaruvchida ishlatildi
    ////darsda shu>>(/D\/g, "") sintaksizdan foydalanildi lekin ishlamadi shu sabab bu>>(/D/g, "") sontaksiz ishlatildi
    ////deleteNotDigits bilan carouseldagi eski bagham yo'q bo'ldi
    function deleteNotDigits(str) {
        //yani stringni numberga aylatrildi
        return parseInt(str.replace(/D/g, ""));
    }
    ////RegExpni alohida funksiyada yozildi va kerakli joylarda chaqirilib parametridagi width o'zgaruvchida ishlatildi
    next.addEventListener("click", () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`; //yani endi next buttoni bosilganda content chapga suriladi yani trnaslate x minusga ishlatildi va ofsset o'zgaruvchi berildi//yani bu holatda slideFieldda chaqirilgan offer__slider-wrapper ona diviga style dynamic berilepti va stylega tranform css qiymati chaqirilib minusga ishlatrish buyurilepti va har safar next buttonga click bo'lganda offset o'zgaruvchini qiymati berib qo'yildi yani nol. shunda har safar click qilinganda slidesField 0 bo'ladi yani o'z widthida qoladi yani har safar aftamatik tarzda nolga aylanadi
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        dots.forEach((dot) => (dot.style.opacity = ".5")); //yani endi hamma nuqtalarni opasitisi 0.5 bo'lib turadi yani dotsni ichidagi hamma indexlar yani qiymatlar yani ol li lar faqat endi birinchi elementini opasitisi 1 bo'lib turadi rangi to'q bo'lib turadi
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener("click", () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`; //yani endi next buttoni bosilganda content chapga suriladi yani trnaslate x minusga ishlatildi va ofsset o'zgaruvchi berildi//yani bu holatda slideFieldda chaqirilgan offer__slider-wrapper ona diviga style dynamic berilepti va stylega tranform css qiymati chaqirilib minusga ishlatrish buyurilepti va har safar next buttonga click bo'lganda offset o'zgaruvchini qiymati berib qo'yildi yani nol. shunda har safar click qilinganda slidesField 0 bo'ladi yani o'z widthida qoladi yani har safar aftamatik tarzda nolga aylanadi
        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
        dots.forEach((dot) => (dot.style.opacity = ".5")); //yani endi hamma nuqtalarni opasitisi 0.5 bo'lib turadi yani dotsni ichidagi hamma indexlar yani qiymatlar yani ol li lar faqat endi birinchi elementini opasitisi 1 bo'lib turadi rangi to'q bo'lib turadi
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
            const slideTo = e.target.getAttribute("data-slide-to"); //yani dots foreach qilinib ichidagi dotga yani dotsga push qilingan dotga hodisa ilindi

            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach((dot) => (dot.style.opacity = ".5")); //yani endi hamma nuqtalarni opasitisi 0.5 bo'lib turadi yani dotsni ichidagi hamma indexlar yani qiymatlar yani ol li lar faqat endi birinchi elementini opasitisi 1 bo'lib turadi rangi to'q bo'lib turadi
            dots[slideIndex - 1].style.opacity = 1;
        });
    });

    //65.chi dars (Web loyiha 17 chi darsi) Carousel va 66.chi dars (Web loyiha 18 chi darsi)  Dot Carousel va 69.chi dars (Web loyiha 19 chi darsi) RegExp
}
module.exports = slider

import { openModal, closeModal } from "../modules/modal"; //modal.jsdagi openModal va closeModal funksiyalarni unverssal qilinib form.jsga import qilindi chunki form.jsdagi showThanksModal funksiyasida modal.jsda yaratilgan openmodal va closemodal dunksiyalari ishlatilgan

function form(modalTimerId) {
    ////API  yani Application Programming Interface
    ////API turlari DOM API, Google map API, Google place API, va Fetch API bu fetch api browserda bo'ladi yani bu fetch api browserdan tashqaridagi apilarga so'rov yuborishga yordam beradigan interface hissoblanadi masalan server bilan

    const forms = document.querySelectorAll("form"); ////forms o'zgaruvchisida html documentdan formlarni hammasini ALL qilib ovoldik htmlda order va modal classlari bor formalar bor bular saytga kirganda contact us buttonlariga bosilganda va sayt ishga tushgandan keyin 5 sekunddan keyin chiqadigan modal oyna (МЫ СВЯЖЕМСЯ С ВАМИ КАК МОЖНО БЫСТРЕЕ!)
    forms.forEach((form) => {
        ///intrigatsada parametrda form yozildi chunki bu form pastda postdata funksiyasida chaqiriladi shunda bu joyda intirigatsa bo'lgan[] form classlarga post datada hodisa ilinadi
        bindPostData(form); ////yani endi ALL qilib chaqirilganda kelgan hamma massiv ichidagi form classlar endi bindPostData funksiyasiga tushadi
    });
    // console.log(forms);////formani ishlayotgan yoki ishlamayotganini tekshirish uchun yozildi logda ikkita formni kelganini ko'rish mumkun
    const msg = {
        //user form bilan ishlab submitlar qilganda yani malumotlar kirgizganda oladigan habarlari va sodir bo'ladigan hodislar davomi pastda nimaga pastda chunki bu kodni boshi bilan ohirini orasida serverga malumot jo'natish kodlari bor yani user serverga malumotlarni jonatganda yani jonatishga harakat qilgandan song chiqishi kerak bo'lgan malumot bo'lganligi sababli bu objectni qanday ishlashi pastda yani server user malumot almashinib bo'lgandan keyingina chiqadi shu sabab pastga yozildi (kod o'qish tartibi)
        loading: "img/spinner.svg", //yani bu holatda serverdan keladigan javob 200 javobi kelguncha img papkani ichida spinner svg file ishlab turadi
        success: "Thank's for submiting our form",
        failre: "Something went wrong",
    };

    ////async va await functionlari async va await funksiya doim birga ishlaydi bittasi chaqirilib bittasi chaqirilmasligi mumkunmas bu holatda async bu postdatani asinhron funksiya qiladi await res o'zgaruvchidagi fetchni urlga so'rov jo'natishini kutishni buyuradi
    async function postData(url, data) {
        const res = await fetch(url, {
            ////fetch promise qaytaradi va bu promiseni res nomli o'zgaruvchiga oldik
            ////fetch api bilan yozilganda server linki fetch apini parametriga birinchi yoziladi shu sabab parametrda birinchi url
            method: "POST", ////yani fetchni post metodidan foydalanish bu metod post qilishni fetchdan post qilish yani formga post,yani userni post qilishini nazarda tutadi
            headers: {
                "Content-Type": "application/json", ////sarlavha chunki server json bilan ishlanganda sarlavha yoziladi  agar yozilmasa js fetchni ishlataolmaydi tushunmaydi
            },
            body: data, //yani POST, PUT,  va hokazo kabi HTTP usullaridan foydalanganda DETELE, so'rovi bilan birga bazi malumotlarni yuborishingiz kerak Bu malumotlar bazasidan ochirmoqchi bo'lgan obekt identifikatori yoki malumotlar bazasida saqlamoqchi bo'lgan yangi obekt bo'lishi mumkin. Bu ma'lumotlarning barchasi body obektiga kiradi shuning uchun body fetchda chaqiriladi
        });

        if (!res.ok) {
            //serverdan fetch qilinaolmaganda hatoni qo'lda to'g'irlash yani fetch faqat statusni ko'rsatadi yani qanday hato ekanligini ko'rsatmaydi bu kod esa hato bo'lganda ststusni ko'rsatish uchun
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json(); ////db.json filega so'rov jo'natish funksiyasi////yani json metodi bilan serverga boradigan javobni json formatga o'tqizvoldik  yani bu holatda postdata nomli async (asinhron) funksiya yaratilib parametriga url chaqirildi yani bu url dynamic hissoblanadi
    }

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            ////form o'zgaruvchisida ALL qilib chaqirilgan va postdataga form qilib berib qo'yilgan form classlariga submit hodisasi ilinepti chunki formda submit qilish bor (yani malumot jo'natilganda)
            e.preventDefault(); ////preventdefault metodi kerakli documentlarga submit bo'lganda faqat kerakli joyni qayta yuklaydigan metod ////parametrda submitdan keyn (e) yani event olindi yani browserni odatiy holatdan chiqarish uchun masalan submit hodisasi sodir bo'lganda sahifa yangilanmasdan faqat shu form classlarini o'zi yangilanadi shunda sayt butunlay qayta yuklanmaydi
            const statusMessage = document.createElement("img"); ////yani bu holatda yuqoridagi msg o'zgaruvchisi yani user bilan server malumot almashunuvi jarayoni uchun yaratilgan msg o'zgaruvchisi uchun yangi img elementi dynamic tarzda yaratildi
            statusMessage.src = msg.loading; ////yani bu holatda serverdan keladigan javob 200 javobi kelguncha img papkani ichida spinner svg file ishlab turadi bu esa shu spinnerni dynamic tarzda qo'shilgan stylelari   statusMessage.style.cssText = `display: block;margin: 0 auto;`
            //yani server bilan muloqot jarayoni aftamatik tarzda loading bo'ladi yani kutiladi masalan internet sekin bo'lsa yoki serverda muammo bo'lsa shu holat uchun spinner ishlatildi
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;`;
            form.insertAdjacentElement("afterend", statusMessage); //endi shu loading hodisasida sodir bo'lishi kerak bo'lgan hodisani statusmessege o'zgaruvchiga insertAdjacentElement metodi bilan joylashtirdik statsusmessege o'zgaruvchida esa yangi img bor bu imgga esa msg o'zgaruvchidagi qiymatlardan loading qiymatidagi img qo'shib qo'yildi bu joyda afterend parametri spinnerni ohirida chiqishini nazarda tutadi yani insertAdjacentHTML metodi ikkita parametr qabul qiladi birinchi parametr pozitsiyasi ikkinchi parametri html texti yani bu holatda insertAdjacentHTML metodi statusmessageni formdan keyinga qo'shib berdi yani loading sodir bo'layotgda spinner.svg form classiga aloqador divdan keyin pastda turadi dynamic margin 0 spinnerni o'rtada turishini taminlaydi
            const formData = new FormData(form); //yani bu holatda FormDataga form classlarni malumotlari berildi yani FormData bu HTML formasi malumotlarini ko'rsatish objektidir yani serverga ko'rsatadi    yani FormData objecti formdagi o'ziga kirtilgan elementdagi namelarga qaraydi bu holatda htmldagi inputlarni namelariga qaraydi yani atributlarni nomlariga qarab malumotlarni serverga moslaydi yani masalan name atributi formdata objectini name hususiyatiga teng bo'ladi formdata objecti yani html atributlarni nomlariga mos o'z qiymatlariga ega construktor (huddiki this.name va hakozo) shu uchun forms o'zgaruvchisi all qilinib chaqirildi va foreach qilindi va form holatida formdatani parametriga kiritildi va bu formdata objecti o'zini parametridagi malumotlarni server taniydigan mlumot turiga aylantiradi lekin json emas yani shunda formga kelgan malumot serverga jo'natishga serverbop malumot turiga aylantirilib tayyor qilindi yani FormData objecti formga yoziladigan client kirtgan malumotlarni va faillarni serverga server tushunadigan tilda tayyorlab beradi lekin json fileda emas ////FormData html form classidan yuboriladigan malumotlar formatlaridan biridir. Xususan, u shaklga kiritilgan qiymatlarni name: value juftlari sifatida kodlaydi va ularni Content-Type sarlavhasi bilan  multipart/form-data ga yuboradi FormDtaning asosiy xususiyatlariga quyidagilar kiradi: Faqat matnni emas, balki fayllarni ham yuborish imkoniyati.////form data objectiga sarlavha qo'yish shartmas (setRequestHeadern) chunki formdata objectida sarlavga aftamatik qo'yiladi

            const json = JSON.stringify(Object.fromEntries(formData.entries())); //metod ichida metod//yani bu holatda formDatada chaqirilgan FormData global objecti doim massiv qaytaradi bu holatda enteries massivni yana massiv qilib beradi fromenteries esa massivni object qilib beradi JSON.stringify esa bu objectni json formatga o'girib beradi yani FormData objectidan keladigan (yani formga yozilganda keladigan) massiv malumotlarni objectga va jsonga aylantirdik yani server tushunadigan malumot turi hissoblangan jsonga aylantirdik

            //Object.entries metodi
            // const obj = {x:10, y:20}
            // console.log(Object.entries(obj));//entres metodi jsda global Objectni metodi hissoblanadi yani objectni massivga o'girib beradi yani obj objectidagi qiymatlarni har birini alohida ishlasa bo'ladigan massivga o'girib beradi

            postData("http://localhost:3000/request", json) //yani server (db.json) bilan ishlash unversal async postdata funksiyasiga db.jsondagi server linki ichidagi request papkaga post jo'natish va uni (FormData objecti massiv qaytaradi ) massivni objectga aylantiradigan  json o'zgaruvchi bilan chaqirdik
                .then((data) => {
                    console.log(data); //// user tomonidan kiritiladigan malumotlar serverga jo'natilganda text holatida logda ko'rish uchun yozildi
                    showThanksModal(msg.success); ////server urli hato bo'lganda shu funksiya ishlamasligi kerak edi lekin ishlab ketepti??? sabab fetch faqat urllarga yani server ssilkalarga faqat so'rov jo'natadi holos yani  fetch api faqatgina statusni ko'rsatib beradi yani linklarga so'rovlarni jo'natib faqat statusni ko'rsatib beradi va fetch net o'chiq bo'lsa yani offline bo'lsagina hatoniham ko'rsatadi (something went wrong) yani offline holatida bo'lganda fetch api server.php ga so'rov yubormaydi shu sabab hatoni ko'rsatadi agar online bo'lsa so'rov jo'natilgani sabab hato ko'rsatmeydi
                    statusMessage.remove(); ////yani server malumotlarni omadli jo'natib bo'lgandan keyin spinner rasimi remove yani udalit qilindi aks holda spinner ishlab turaveradi yani contact us buttoniga qaytadan bosilgandaham spinner ishlab turgan bo'ladi shu sabab success holati sodir bo'lgandan keyin bu statsumessege o'zgaruvchi udalit qilinadi
                })
                .catch(() => {
                    ///promise//yani agar server bilan muloqot yani serverga malumot jo'natish omadsiz bo'lsa  failre: "Something went wrong" qiymati ishga tushadi chunki promiseni .chatch metodi false bo'lgandagina ishga tushadi
                    showThanksModal(msg.failre);
                })
                .finally(() => {
                    form.reset(); //user serverga malumot jo'natib bo'lgandan keyin formni reset yani udalit qilib tozalab qo'yish reset metodi bilan buyurilib qo'yildi yani promiseni .finally metodi yani nima bo'lgandaham server bilan bordi keldi omadli yoki omadsiz o'tgandaham form tozalansin yani reset qilinsin
                });
            // console.log(obj); ////yani bu log text metodi bo'lsaham aslida jsda hamma narsa object ekanligini ko'rish uchun yani OOP objectga yo'naltirilgann programmalash
        });
    }

    function showThanksModal(message) {
        ///madal oynani "THANK'S FOR SUBMITING OUR FORM" texti
        const prevModalDialog = document.querySelector(".modal__dialog"); //yani modal dialogni eski holati ////yani bu holatda htmldagi modal__dilaog classi yani sayt ochilganda va contact us buttoni bosilganda chiqadigan serverga clientni malumotlarini jo'natadigan modal__dialog classi chaqirib olindi va classlist parametri va add metodi bilan cssdagi hide classi qo'shildi yani yo'q qilib qo'yildi cssdagi hide classida   display: none; qiymati bor
        prevModalDialog.classList.add("hide"); //display: none;
        openModal(".modal", modalTimerId); //yani modal oyna yuqorida hide classi bilan yopilib modal.jsda yozilgan va bu form.jsga import qilingan openmodal functsiyasi bilan yana ochildi
        const thanksModal = document.createElement("div"); //va dynamic yangi div ochib classiga modal__dialog classsi yana qo'shildi yani endi modal oyna dynamic tarzda qo'shilepti
        thanksModal.classList.add("modal__dialog");
        //// thanksModal.innerHTML bilan dynamic content qo'shish yani htmldagi modal dynamic tarzda shu joyda yozildi va htmlagi kodlar shu tartibda `becet` ichiga yoziladi shunda innerhtml parametri bilan js kodlar ichida html taglarni yozish mumkun
        thanksModal.innerHTML = `
      <div class="modal__content">
      <div data-close class="modal__close">&times;</div>
      <div class="modal__title">${message}</div>
      </div>
        `; //// cssdagi .modal__title classida bu messejni style classlari bor etibor ber masalan text-align: center;font-size: 22px;text-transform: uppercase;
        document.querySelector(".modal").append(thanksModal); //endi user dynamic tarzda qo'shilgan modal__dialog classi bor divdagi inputlarga hohlagancha malumotni serverga jo'natishi mumkun va bu holatdaham serverni linki hato bo'lsa yoki bu dars xamppda ochilmasa yani local serverda ochilmasa something went wrong texti chiqadi yani bu showThanksModal funksiyasi thanksModal o'zgaruvchiga append qilindi yani qo'shildi thanksModal o'zgaruvchiga esa yangi div createelement qilinib modal__dilaog classi add qilib qo'shilgan
        setTimeout(() => {
            thanksModal.remove(); //yani settimeout funksiyasi bilan 4 sekunddan keyin dynamic tarzda qo'shilgan thanksmodal o'zgaruvchini udalit qildik yani shunda user serverga malumotlarni jo'natgandan keyin 4 sekunddan keyin modal oyna aftamatik tarzda yopiladi
            prevModalDialog.classList.add("show"); // display: block;//va add qilib ichida modal__dialog classlari chaqirilgan  prevModalDialog o'zgaruvchi classini qo'shdik
            prevModalDialog.classList.remove("hide"); //display: none;//yani endi yuqorida hide qilingan ichida modal__dialog classlari chaqirilgan  prevModalDialog o'zgaruvchini hide classini remove qildik yani udalit qildik va shundan so'ng closemodal funksiyasini chaqirib qo'ydik bu close modal funksiyasi modalni inputlari bilan tozalab yopadi
            closeModal(".modal");
        }, 4000);
    } ///yani endi user modal oynaga malumot kiritib contact us buttoniga bosgandan keyin 4 sekund vaqt o'tib modal yopiladi va  modal yana qaytadan malumot jo'natish uchun top tozza holatga qaytadi
}
//the end for today
export default form;

////async va await functionlari async va await funksiya doim birga ishlaydi bittasi chaqirilib bittasi chaqirilmasligi mumkunmas bu holatda async bu postdatani asinhron funksiya qiladi await res o'zgaruvchidagi fetchni urlga so'rov jo'natishini kutishni buyuradi
async function postData(url, data) {//url bu holatda dynamic hissoblanadi//unversal funksya faqat url datalarga bo'gliq yani aynan qandaydur linkka emas yani bu funskiya chaqirilganda parametriga alohida linklarni berib bu funksiyani yana ishlatish mumkun???
    const res = await fetch(url, {
        //server bilan ishlaydigan funskiya
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
//loyihada serverga post so'rovni fetch function bilan jo'natadigan postData async funksiyasi  alohida server.js filega olindi va va form.jsga export qilindi
//the end for today
export { postData };

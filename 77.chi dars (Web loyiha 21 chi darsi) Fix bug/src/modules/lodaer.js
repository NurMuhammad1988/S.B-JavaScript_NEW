function loader() {
    ////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi
    loader = document.querySelector(".loader"); //htmldagi section divini classi loaderga cssda ichiga paper man nomli animatsya berilgan
    setTimeout(() => {
        loader.style.opacity = "0"; //yani loader o'zgaruvchi ichidagi htmlda ichida animatsya bor loader classli div chaqirib olingan settimeout funksiyani ichida shu loader o'zgaruvchi chaqirib olinib dynamic tarzda opacityi nol qilindi yani 2000mlsdan keyin animatsiyani opacitysi 0 bo'lib qoladi yani ko'rinmey qoladi  va ikkinchi settimeotga esa yana shu loader o'zgaruvchiga dynamic tarzda style none berildi yani 2000mlsdan keyin 500 mls davomida yani sekiiin animatsya ekrandan yo'q bo'ldi bu holatni logdaham ko'rish mumkun yani elementda classlarni qo'shilishini!!!
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); //yani bu holatda birinchi settimeout funksiyasi loader o'zgaruvchi ichidagi loader paper man animatsiyasini 2000msldan keyin o'chirishni va  loaderni opaciyiysini 0 qilishni bajardi va ikkinchi settimeoutda esa shu ekrandan animatsiyani o'chirish uchun display none dynamic tarzda qo'shildi va shu o'chirilish 500mls vaqt davomida bo'lishi buyurildi shunda animatsya sekiiin yo'q bo'ldi
    }, 2000);
    ////36.chi dars (Web Loyiha-2 chi darsi) Loyiha loader darsi
}
export default loader
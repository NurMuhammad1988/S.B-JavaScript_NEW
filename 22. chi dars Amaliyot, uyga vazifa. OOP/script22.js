"use strict";

const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
        while (
            seriesDB.count == "" ||
            seriesDB.count == null ||
            isNaN(seriesDB.count)
        ) {
            seriesDB.count = +prompt(
                "Nechta serial ko'rdingiz? savoliga javob bermadingiz Nechta serial ko'rdingiz?",
                ""
            );
        }
    },

    rememberMySeries: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Ohirgi ko'rgan serialingiz?"),
                b = prompt("Nechchi baho berasiz?");
            if (a != null && b != null && a != "" && b != "") {
                seriesDB.series[a] = b;
                console.log("Done");
            } else {
                console.log("Error");
                i--;
            }
        }
    },

    detectLevelSeries: function () {
        if (seriesDB.count < 5) {
            console.log("Kam serial ko'ripsiz");
        } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
            console.log("Siz classik tomoshabin ekansiz");
        } else if (seriesDB.count >= 10) {
            console.log("Siz serialchi zvezda ekansiz");
        } else {
            console.log("Error");
        }
    },

    showDb: function () {
        if (!seriesDB.private) {
            console.log(seriesDB);
        }
    },

    visibleDb: function () {
        if (seriesDB.private) {
            seriesDB.private = false;
        } else {
            seriesDB.private = true;
        }
    },

    writeGenres: function () {
        // for (let i = 0; i <= 2; i++) {
        //     // const genre = prompt(`Yahshi ko'rgan janringiz? ${i + 1}`);
        //     // if (genre === "" || genre === null) {
        //     //     console.log("Siz noto'g'ri malumot kiritdingiz!");
        //     //     i--;
        //     // } else {
        //     //     seriesDB.genres[i] = genre;
        //     // }
        // }//yani tsikil bilan promptdagi savol 3 martta qayta berilgan edi

        let genres = prompt(
            "Yahshi ko'rgan janringizni vergul yordamida yozing"
        ).toLowerCase(); //foydalanuvchini hamma kirtigan malumotlarini kichkina hariflarga aylatrib oldik//pastdagi sort metodi faqat kickina hariflarni tartiblab bera oladi (katta ariflarni esa birinchiga qo'yadi yani tartibni boshiga qo'yadi) shu sabab promptga kirgizilgan javoblarni kichkina harif qilib oldik yani genresga tushadigan javobnlarni
        // console.log(genres);

        if (genres === "" || genres === null) {
            console.log("Siz noto'g'ri malumot kiritdingiz!");
            i--;
        } else {
            seriesDB.genres = genres.split(", "); //yani split metodi stringni arrayga o'girib beradi yani aylantirib beradi //yani bu holatda vergul va probeldan keyin massivga o'girib beradiva massivga joylab beradi yani genres massiviga masiivga ega foreach metodi orqali chiqarib berayapti
            seriesDB.genres.sort(); //yani bu harflarni tartiblab beradi yani alphabet tartibida a....z qilib tartib bo'yicha terib beradi
        }

        seriesDB.genres.forEach((item, idx) => {
            console.log(`Yahshi ko'rgan janringiz? ${idx + 1} - nomi  ${item}`);
        });
    },
};

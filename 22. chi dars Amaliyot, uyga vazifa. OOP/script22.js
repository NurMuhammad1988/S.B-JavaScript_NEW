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
        for (let i = 0; i <= 2; i++) {
            const genre = prompt(`Yahshi ko'rgan janringiz? ${i + 1}`);
            if (genre === "" || genre === null) {
                console.log("Siz noto'g'ri malumot kirgizdingiz!");
                i--;
            } else {
                seriesDB.genres[i] = genre;
            }
        }

        seriesDB.genres.forEach((item, idx) => {
            console.log(`Yahshi ko'rgan janringiz? ${idx + 1} - nomi  ${item}`);
        });
    },
};

module.exports = {
    mode: "development",
    entry: "./src/js/script79.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js",
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["@babel/preset-env", { targets: "defaults" }],
                        ],
                    },
                },
            },
        ],
    },
};

//79.chi dars Babel JS

//Babel JS yangi kodlarni eski kodlarga o'girib beradi chunki  birirta loyiha masalan shu loyiha qilinayotganda Google Chrome browserini eng ohirigi versiyasidan foydalandik chunki Google doi yagilanib turadi doim yangilanganda eski frontend kodlarga moslashmasligi mumkun shu uchun loyihani eski kodga o'girish kerak yani loyiha pradakshinga chiqganda userlarni Gogle browwseri yoki boshqa har qanday browseri qaysi versiyada ekanligini bilmeydmiz shu sabab eskiroq hamma browserlar qo'llab quvvatlaydigan js code versiyasiga loyihani kodlarini o'girib olish kerak babel js (npm install --save-dev @babel/core @babel/cli @babel/preset-env) shu command bilan yuklanadi va webpack.config.js (module:{}) da nastroyka qilinadi lekin babel.config.js nomli fail ochibham nastroyka qilish mumkun lekin bu loyihada webpack.config.jsda babel jsni nastroyka qildik pastdagi chernavikdagi kod ustoz bilan qilingan babel/core/js nastroykasi lekin ishlamadi shu sabab babelni saytidagi nastroyka yozildi balki sintaksiz yangilangandur lekin dist papkani ichidagi bundle.js file hajmi kattalashmadi yani kodlar eski kodga o'girilmadi (nazarimda)
////////////////////////////////////////////////////////////////////////////

// module: {
//     rules: [
//         {
//             test: /\.m?js$/, //bu sintaksiz hamma js filelarni testga olib beradi
//             exclude: / (node_modules) /, //bu sintaksiz aytilgan js fileni olmaslik kerakligi bildiradi yani node_modulesni testdan chiqarib tashlash aytildi  |<<shu tikka slash bilandavomiga yana boshqa faillarniham qo'shish mumkun alohida>>(shuni ichiga) masalan>>/ (node_modules|bower_components) /
//             use: {
//                 loader: "babel-loader", //"babel-loader" babelni kutubhonasi yani kuzatuvchi yani babel ishga tushgandan keyin shu loader kuzatib turadi>>npm i babel-loader qilib yuklandi
//                 options: {
//                     presets: [
//                         [
//                             "@babel/preset-env",
//                             {
//                                 debug: true,
//                                 corejs: 3, //npm i core-js yuklandi//core-js JavaScript uchun polifilllarni taqdim etadigan eng mashhur kutubxonadir Polifill - bu zamonaviy kodni eski brauzerlarda ishlashga imkon beruvchi adapter. Agar polifilllar bo'lmaganida kodlarni browserlar tushunaolishi uchun eski js versiylarida yozilgan bo'lardi
//                                 useBuiltIns: "usage",
//                             },
//                         ],
//                     ],
//                 },
//             },
//         },
//     ],
// },

//79.chi dars Babel JS

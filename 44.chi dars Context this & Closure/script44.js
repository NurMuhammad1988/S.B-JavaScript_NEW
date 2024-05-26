// "use strict";    
////Contex this = har doim nimagadur qaram hissoblanadi yani osiladi

function logger(){//qattiy rejimni o'chiribham qarab ko'rish kerak//this agar hech qanday objectga qaram qilinmasa sukut holatida windowga objectiga qaram bo'ladi yani osiladi
    console.log(this);//bu holatda undefined chunki hech narsaha qaram emas
}

logger()
console.dir(logger);


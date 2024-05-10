"use strict";
//DOM darahti bo'yicha sarguzash darsi

// console.log(document.head);//logga qaralsin//yani header tegini ichidagi narsalarni chiqarib beradi
// console.log(document.body);//logga qaralsin//yani bodydagi dacumentlarni chiqarib beradi

// console.log(document.body.childNodes);//logga qaralsin//yani childNodesda butun html body chiqaadi yani hamma html elementlar chiqadi hattoki bo'sh qatorlarham shunday >>#text ko'rinishida chiqadi

// console.log(document.body.firstChild);//logga qaralsin//#text bo'lib chiqadi
// console.log(document.body.lastChild);//logga qaralsin//htmldagi eng ohirgi element bo'lib chiqadi bu holatda esa script tegi chiqadi

// console.log(document.body.firstElementChild);//logga qaralsin//yani aynan elementni o'zini chaqirish
// console.log(document.body.lastElementChild);//logga qaralsin//yani aynan elementni o'zini chaqirish

// console.log(document.querySelector("#btn").parentNode);//logga qaralsin//yani bu holatda #btn idisi turgan divni ona divini olib beradi yani bu holatda overley classli divni olib beradi
// console.log(document.querySelector("#btn").parentNode.parentNode);//logga qaralsin//yani bu holatda #btn nomli idni overley classli divini ona dividan oldingi elementni yani body elementini chiqarib beradi html va logga qaralsin yani qayta qayta parennode qilish ichkaridan tashqariga qarab yuradi yani ichkaridan ona divga ona divni yana ona diviga hullas bodygacha yuradi

// console.log(document.querySelector("#btn").parentElement);//logga qaralsin//yanibtn idni ona divini oladi element sifatida

// console.log(document.querySelector("[data-current='b']"));//logga qaralsin// yani es6 da data atributlar bor yani htmldagi divga data atribut qo'shiladi va shu atribut bilan element JSga chaqiriladi (htmlga qaralsin!!!) atributga huddi classga nom berilganday nom beriladi yani data deb yozilgandan keyin hohlagan nomni kirgi'zish masalan shundan keyi>>data-(hohlagan nom!!!) va unga qiymatham berib o'sha qiymatni JSga chaqirib bu data atribut diviga qiymatiga tasir qilish mumkun yani class id berib o'tirmasdan kerakli joyda shu data atributlar bilanham jsga html elementlarni chaqirish mumkun//data atrubutlarni jsda ishlatganda qo'shtirniqlar bir hil bo'lmasligi kerak

// console.log(document.querySelector("[data-current='b']").nextSibling);//logga qaralsin//yani bu holatda htmldagi data atributdagi b elementdan keyingi element olindi yani #text yani htmldagi bo'sh katak (probel) yani data-current='b'dan keyin htmlda bo'sh katak bor>>>(probel)
// console.log(document.querySelector("[data-current='b']").previousSibling);//logga qaralsin//yani data atributdan oldingi probelni #text ni olib beradi

// console.log(document.querySelector("[data-current='b']").nextElementSibling);//logga qaralsin//yani data current b elementidan keyingi elementni olib beradi yani bo'sh katakni emas (probelni emas)aynan elementni o'zini olib beradi yani bu holatda htmldagi buttonni ichida c textni bor buttonni olib beradi
// console.log(document.querySelector("[data-current='b']").previousElementSibling);//logga qaralsin//yani bu holatda esa data current atributidan oldingi overley classli divni olib beradi yani elementni

// for (let node of document.body.childNodes) {
//     if (node.nodeName == "#text") {
//         continue;
//     }
//     console.log(node);
// }//yani body childNodesdagi nodenamelarni intrigatsa qilish ichida #text lar yani bo'sh kataklar bor shu bo'sh kataklarni for tsikli bilan udalit qilib tozza html documentni o'zini olish yani agar nodeni nodenamedagi textlar "#text"ga teng bo'lsa contine yani to'htatilsin (udalit qilinsin)

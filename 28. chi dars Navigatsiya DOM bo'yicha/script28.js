"use strict";
// console.log(document.head);//logga qaralsin
// console.log(document.body);//logga qaralsin
// console.log(document.body.childNodes);//logga qaralsin
// console.log(document.body.firstChild);//logga qaralsin
// console.log(document.body.firstChild);//logga qaralsin
// console.log(document.body.lastChild);//logga qaralsin
// console.log(document.body.firstElementChild);//logga qaralsin
// console.log(document.body.lastElementChild);//logga qaralsin
// console.log(document.querySelector("#btn").parentNode);//logga qaralsin
// console.log(document.querySelector("#btn").parentElement);//logga qaralsin
// console.log(document.querySelector("#btn").parentNode.parentNode);//logga qaralsin
// console.log(document.querySelector("[data-current='b']").nextSibling);//logga qaralsin
// console.log(document.querySelector("[data-current='b']").previousSibling);//logga qaralsin
// console.log(document.querySelector("[data-current='b']").nextElementSibling);//logga qaralsin
// console.log(document.querySelector("[data-current='b']").previousElementSibling);//logga qaralsin

for (let node of document.body.childNodes) {
    if (node.nodeName == "#text") {
        continue;
    }
    console.log(node);
}

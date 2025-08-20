//DOM navigation = The process of navigating through the structure of an html document using javascript
/*

1 -> .firstElementChild 

example:----------------------------------------

const ele = document.getElementById("fruits");
const firstchild = ele.firstElementChild;
firstchild.style.background = "yellow";

//using queryselectorall:

const ulelement = document.querySelectorAll("ul");
ulelement.forEach(ulele => {
    const firstchild = ulele.firstElementChild;
    firstchild.style.background = "yellow";
});
---------------------------------------------------

2 -> .lastElementChild 

example:----------------------------------------
const ele = document.getElementById("desserts");
const lastchild = ele.lastElementChild;
lastchild.style.background = "skyblue";

const ulelement = document.querySelectorAll("ul");
ulelement.forEach(ulele => {
    const lastchild = ulele.lastElementChild;
    lastchild.style.background = "blue";
});
--------------------------------------------------


3 -> .nextElementSibling
example:------------------------------------------
const ele1 = document.getElementById("fruits");
const nextsibling = ele1.nextElementSibling;
nextsibling.style.background = "lightgreen";
--------------------------------------------------

4 -> .previousElementSibling
example:------------------------------------------
const ele2 = document.getElementById("d2");
const prevsibling = ele2.previousElementSibling;
prevsibling.style.background = "lightgreen";
--------------------------------------------------

5 -> .parentElement 
example:--------------------------------------------------
const ele3 = document.getElementById("f1");
const parent = ele3.parentElement;
parent.style.background = "skyblue";
----------------------------------------------------------
6 -> .children 
example:--------------------------------------------------
const ele4 = document.getElementById("vegetables");
const children = ele4.children;
console.log(children);

//typecasting to array
Array.from(children).forEach(child => {
    child.style.background = "skyblue";
});

//accessing single
children[1].style.background = "yellow";
----------------------------------------------------------
*/

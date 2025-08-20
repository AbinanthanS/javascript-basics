//DOM - object that represents the page we see in the browser and provides API to interact with it
//web browser constucts dom when it loads an HTML document, abd structures all the elements in 
//tree like representation,js can access the DOM to dynamically change the 
//content,structure and style of a web page.
/*
eg:1
document.title= "js_practise";
console.dir(document);
eg:2
document.body.style.backgroundColor = "blue";
eg:3
const usrname = "";
const message = document.getElementById("msg"); 
message.textContent += usrname === ""?"guest":usrname;
_____________________________________________________________________________________________________________
/*element selector = methods used to target and manipulate HTML elements. 
                 allow you to select one or multiple html elements from the dom.

1.) document.getElementById()        //ELEMENT OR NULL
_____________________________
eg:---------------------------------------------------------------------------------- 
const heading =  document.getElementById("msg");
heading.style.backgroundColor = "blue";
heading.style.textAlign = "center";
console.log(heading);

2.)document.getElementsByClassName()   //html collection  (dont have built in for each method)
______________________________________
eg:---------------------------------------------------------------------------------------
const fruits = document.getElementsByClassName("fruits");
//fruits[0].style.backgroundColor = "red"; //(or) use for loop
for(let fruit of fruits){
    fruit.style.backgroundColor = "red";
} 
//or use Array.from(fruits).forEach(fruit =>{fruit.style.backgroundColor = "purple";}); //typecasted to array to use for each method 

3.)document.getElementsByTagName()  //html collection
___________________________________
eg:----------------------------------------------------------------------------------------------
const h4ele = document.getElementsByTagName("h4");
const liele = document.getElementsByTagName("li");
//h4ele[0].style.backgroundColor = "red"; (or)
for (let h of h4ele) h.style.backgroundColor = "green";
for (let li of liele) li.style.backgroundColor = "lightgreen";
console.log(h4ele);

//typecast to array to use for each
Array.from(h4ele).forEach(h=>{h.style.backgroundColor = "blue";});
Array.from(liele).forEach(l=>{l.style.backgroundColor = "lightblue";});


4.)document.querySelector()     //returns first matching element or null
___________________________________
eg:----------------------------------------------------------------------------------------------

const element = document.querySelector("h4"); //query selector returns only one match
element.style.backgroundColor = "yellow";

5.)document.querySelectorAll()  //returns NODELIST [are static(i.e:they do not upadate automatically in DOM)]
//it has built in for each method and we no need to typecast to array
___________________________________
eg:----------------------------------------------------------------------------------------------

const fruits = document.querySelectorAll(".fruits");
//fruits[0].style.backgroundColor = "skyblue";
for (let c of fruits) c.style.backgroundColor = "lightgreen";
console.log(fruits);

const ele = document.querySelectorAll("ul");
ele[1].style.backgroundColor = "yellow";
console.log(ele);

const foods = document.querySelectorAll("li");
foods.forEach(food=>{food.style.backgroundColor = "lightblue";});

*/


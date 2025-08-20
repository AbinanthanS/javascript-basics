/*
eventListener - Liste for specific events to create interactive web pages (EL are added to html elements)
events: click,mouseover,mouseout
.addEventListener(event, callback); //you can pass ( callback or anonymous  or arrow ) function

example 1:

const mybox = document.getElementById("mybox");

function changeColor(event){
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "clicked !!";
}

mybox.addEventListener("click",changeColor);


*/

const mybox = document.getElementById("mybox");

const mybutton = document.getElementById("mybtn");

mybutton.addEventListener("click", event =>{
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "clicked !!";
});

mybutton.addEventListener("mouseover",event =>{
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "do it";
});

mybutton.addEventListener("mouseout",event =>{
    mybox.style.backgroundColor = "skyblue";
    mybox.textContent = "Click me :)";
});
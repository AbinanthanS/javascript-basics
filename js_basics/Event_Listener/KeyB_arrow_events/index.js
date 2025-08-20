/*
eventListener - Listen for specific events to create interactions web pages
                events: keydown, keyup
                document.addEventListener(event, callback);


example 1:---------------------------------------
document.addEventListener("keydown", event => {
    console.log(`keydown = ${event.key}`);
});
document.addEventListener("keyup", event => {
    console.log(`keyup = ${event.key}`);
});
--------------------------------------------------
example 2:----------------------------------
document.addEventListener("keydown", event => {
    mybox.textContent = ": |";
    mybox.style.backgroundColor = "lightgreen";
});
document.addEventListener("keyup", event => {
    mybox.textContent = ": )";
    mybox.style.backgroundColor = "lightblue";
});
--------------------------------------------
*/

const mybox = document.getElementById("mybox");

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    mybox.textContent = ": o";
    mybox.style.backgroundColor = "lightgreen";
});
document.addEventListener("keyup", event => {
    mybox.textContent = ": )";
    mybox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown",event =>{
    
    if (event.key.startsWith("Arrow")){

        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;

        }
        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
});

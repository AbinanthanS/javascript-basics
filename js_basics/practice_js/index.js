/*
document.getElementById("h1").textContent=`hello WORLD !!! `;
document.getElementById("p1").textContent = `hello world how r u doin ?`;

let a = 10;
let f = 1.2;
console.log(typeof f);
console.log(`a is ${a}`);
console.log(`f is ${f}`);
console.log("a is",a);

let a = "cat";
let b = false;
console.log(`hello ${b}`,typeof b)

let name = "Abinanthan";
let age = 18;
let title = "HELLO";
document.getElementById("h1").textContent = title;
document.getElementById("p1").textContent = `my name is ${name}`;
document.getElementById("p2").textContent = `my age is ${age}`;

operator precedance:
1.)parenthesis
2.)exponents
3.)multiplication & division & modulo
4.)addition and substraction

user input:
//easy way = window prompt

let a;
a = window.prompt("enter a number : ");
console.log(a);5

//html way
let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("h1").textContent = `Hello ${username}`;
}

//COUNTER PROGRAM
let count = 0;
document.getElementById("b1").onclick = function(){
    count++;
    document.getElementById("h1").textContent = count;
}
document.getElementById("b2").onclick = function(){
    count--;
    document.getElementById("h1").textContent = count;
}
document.getElementById("b3").onclick = function(){
    count= 0;
    document.getElementById("h1").textContent = count;
}

//MATH MODULE

let x= 2.9;
let y = 3;
let a;
//a = Math.round(x);
//a Math.floor(x);
//a = Math.ceil(x);
//a = Math.trunc(x);
//a = Math.pow(x,y);
//a = Math.sqrt(x);
//a = Math.log(x);
//a = Math.sin(x);
//a = Math.cos(x);
//a = Math.tan(x);
//a = Math.abs(x);
//a = Math.sign(x);
//a = Math.max(x,y);
//a = Math.min(x,y);
console.log(a);

//RANDOM NUMBER
let max = 100;
let min = 50;
let rand = Math.floor(Math.random()*(max-min))+min;
console.log(rand);

//RANDOM

const mybutton = document.getElementById("btn");
const mylabel = document.getElementById("lbl");
let randomnum;
const min = 1;
const max = 100;

mybutton.onclick = function(){
    randomnum = Math.floor(Math.random()*(max-min))+min;
    console.log(mylabel.textContent = randomnum);
}

//ARRAY
let car = ["apple","carro","orange","mango","banana"];
//car.push("rollsrayce");
//car.pop();
//car.unshift("apple");
//car.shift();

//spread operator

let numbers = [1,2,3];
let usrname = "abinanthan";
let letters = [...usrname];
let letters1 = [...usrname].join("/");
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(letters);

let a = ["a","b","c"];
let b= ["F","h","j"];
let c = [...a,...b];
let d = [...a,...b,"i","k"];
console.log(d);

/*rest parameters --> used to work with 
a var of num of argu by bundling to arr
spread = expands an arr into elements
rest = bundles seperate elements into an arr
*/
/*
function openbox(...letters){
    console.log(...letters);
}

function openbox1(...letters){
    console.log(letters);
}

function openbox2(...letters){
    return letters;
}

function combstr(...name){
    return name.join(" ");
}

const fullname =  combstr("Mr.","Spongebob","Squarepants","!!");
const a1 = "abc";
const a2 = "abcd";
const a3 = "abcef";
const a4 = "abcefg";

console.log(fullname);

//callback = a function that is passed as argument to another function

//used to sync asynchronous operations: -> reading a file -> network request -> interacting with databases

hello(wait);

function hello(callback){
    console.log("hello");
    callback();

}
function wait(){
    console.log("wait");
}
function leave(){
    console.leave("leave");
}

function goodbye(){
    console.log("goodbye");
}

sum(displaypage,1,2);
function sum(callback,x,y){
    let result = x+y;
    callback(result);
}
function displayconsole(result){
    console.log(result);
}

function displaypage(result){
    document.getElementById("h1").textContent = result;

}


//for each
let num = [12,3,4,5];
num.forEach(double);
num.forEach(display);
function double(element,index,arr){
    arr[index] = element*2;
}
function display(element){
    console.log(element);
}

//map() = accepts callbacks and applies that function to each element of an new array
const num = [1,2,3,4];
const sq = num.map(squares);

console.log(sq);

function squares(element){
    return Math.pow(element,2);
}

const students = ["bob","sandy","hello"];
const a = students.map(uppercase);
console.log(a);
function uppercase(element){
    return element.toUpperCase();
}
//or

const students = ["bob","sandy","hello"];
const a = students.map(function (element){
    return element.toUpperCase();
});
console.log(a);



const dates = ["2024-09-20","2024-10-20"];
const a = dates.map(formatdates);
console.log(a);
function formatdates(element){
    const parts = element.split("-");
    return `${[parts[1]]}/${parts[2]}/${parts[0]}`;
}

//filter() = creates a new array by filtering out elements

let num =[1,2,4,5];
let evenum = num.filter(iseven);
console.log(evenum);
function iseven(element){
    return element%2 === 0;
}

const age = [20,20,30];
const a = age.filter(age1);
console.log(a);
function age1(element){
    return element >=18;
}

//reduce() reduce the elements of an array to a single value

const price = [15,34,45,65];
const total = price.reduce(sum);
console.log(`${total.toFixed(2)}`);
function sum(accumulator,element){
    return accumulator+element;

}

const grade = [20,54,65,68,78,98];

const max = grade.reduce(maximum);
console.log(max);

function maximum(accumulator,element){
    return Math.max(accumulator,element);
}


setTimeout(function(){
    console.log("hello");
},2000)


//arrow functions 

const hello =(name,age) => {console.log(`hello ${name}`) 
console.log(`you are ${age} old`)};

hello("bro",5);

const num = [2,3,4,5];
const sq = num.map((element) => Math.pow(element,2));
console.log(sq);

const num = ["bob","sandy","hello"];
const sq = num.map((element) => element.toUpperCase());
console.log(sq);

//object - A collection properties and/or methosds can represent real world objects
// object - {key:value()}

const person = {
    first_name: "spongebob",
    lastname: "sqaurepants",
    age: 30,
    isEmployed: true,
    sayhello: () => {console.log("hello")},
}

const person2 = {
    first_name: "patrik",
    lastname: "star",
    age: 28,
    isEmployed: true,
}

person.sayhello();

//this - reference to the object where THIS is used (the object depends on the immediate context)
// person.name = this.name
const person1 = {
    name: "spngebob",
    age: 30,
    hello: function(){console.log(`hello ${this.name}`)}
}
person1.hello();

//constructor - special method for defining the properties and methods of objects

function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,

    this.drive= function() {console.log(`you drive the ${this.model}`)}

}

const car1 = new Car("audi","Q3",2024,"black");

console.log(car1.make);

car1.drive();

//class - (ES6 feature) provides a more structuraland cleaner way to work 
//with objects compared to traditional constructor function 
// ex: static keyword,encapsulation,inheritance

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;

    }

    displayproduct(){
        console.log(`product ${this.name}`);
        console.log(`price ${this.price.toFixed(2)}`);
    }

    total_wtax(tax){
        return this.price + (this.price*tax);
    }


}
const tax = 0.03;
const product1 = new Product("shirt",500);
const product2 = new Product("pants",550);

const total = product2.total_wtax(tax);
console.log(`Total price (wiht tax): ${total.toFixed(2)}`)

//static - defines that properties or methods that belong to a class itself 
//rather than the objects created from that class (class owns anything static, not the objects)

(eg:1)
class Mathutil{
    static PI = 3.14159;
    static getDia(radius){
        return radius*2;
    }
    static getCir(radius){
        return 2*this.PI*radius;
    }
}


console.log(Mathutil.getCir(10));

(eg:2)
class User{
    static usercount = 0;

    constructor(username){
        this.username = username;
        User.usercount++;
        
    }
    static getusrcnt(){
        console.log(`there are ${User.usercount} users`);
    }
    sayhello(){
        console.log(`hello my usrname is ${this.username}`);
    }
}

const user1 = new User("spngebob");
const user2 = new User("spngebob2");

console.log(user1.username);
console.log(user2.username);
console.log(User.usercount);

user1.sayhello();
User.getusrcnt();


//Inheritance - allows a new class to inherit properties and methods from already existing class
//code-reusability

class Animal{
   
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
class Cow extends Animal{
    name(name){
        this.name = name;
    }
}
class Dog extends Animal{
    name = "bruce";
}

const cow = new Cow();
const dog = new Dog();

cow.name = window.prompt("enter name : ");
cow.eat();
dog.sleep();

//super = keyword is used in classes to call constructor or to sccess properties and methods of a superclass
//this = this object super = parent object

class Automob{
    constructor(name,wheel){
        this.name = name;
        this.wheel = wheel;
    }

    speed(speed){
        console.log(`${this.name} speed is ${speed} kmph`);
    }
}
class Car extends Automob{
    constructor(name,wheel,cspeed){
        super(name,wheel);
        this.cspeed = cspeed;
    }
    speed(){
        super.speed(this.cspeed);
    }
}
class Bike extends Automob{
    constructor(name,wheel,bspeed){
        super(name,wheel);
        this.bspeed = bspeed;        
    }
    speed(){
        super.speed(this.bspeed);
    }
}

const bike = new Bike("yamaha",2,80);
console.log(bike.bspeed);
bike.speed();


//getter = special method that make a property readable
//setter = special property that make a property writable

eg:1

class Circle{
    constructor(radius){
        this.radius = radius;
    }
    set radius(newradius){
        if (newradius>0){
        this._radius = newradius;
        }else{
            console.error("radius must be positive");
        }
    }
    get radius(){
        return `${this._radius.toFixed(1)} cm`;
    }
}

const c1 = new Circle(2);
console.log(c1.radius);

eg:2

class Person{
    constructor(firstN,lastN,age){
        this.firstN = firstN;
        this.lastN = lastN;
        this.age = age;
    }
    set firstN(newfirstN){
        if (typeof newfirstN === "string" && newfirstN.length>0){
            this._firstN = newfirstN;
        }else{
            console.error("must be non empty string");
        }
    }
    set lastN(newlastN){
        if (typeof newlastN === "string" && newlastN.length>0){
            this._lastN = newlastN;
        }else{
            console.error("must be non empty string");
        }
    }
    get firstN(){
        return this._firstN;
    }
    get lastN(){
        return this._lastN;
    }
}
const p1 = new Person("abc","def",18);
console.log(p1.firstN);
console.log(p1.lastN);
console.log(p1.age);



//destructing - extract values from arrays and objects,then  assign to variables in a convenient way
// [] - to perform array destructing, {} - to perform object destructing

//eg:1 swap two varialbes

let a= 1;
let b = 2;
[a,b] = [b,a];
console.log(a);console.log(b);

//eg:2 elements in an array

const colors = ["red","green","blue","violet"];
[colors[0],colors[1]] = [colors[1],colors[0]];
console.log(colors);

//eg:3 assign array elements to variables

const colors = ["red","green","blue","violet","white"];
const [firstcolor,secondcolor,thirdcolor,...extracolors] = colors;
console.log(firstcolor);
console.log(extracolors);

//eg:4 extract values from objects


const person1= {
    fN :"sponge",
    lN : "squarepants",

}
const person2= {
    fN :"bob",
    lN : "pants",
    age:35,
}
const {fN,lN,age =20} = person1;

console.log(age);

//eg:5 destructure in function parameters

function display({firstname,lastname,age}){
    console.log(`name :${firstname} ${lastname}`);
    console.log(`age :${age}`);
    
}
const person1= {
    firstname :"sponge",
    lastname : "squarepants",
    age:34,
}

display(person1);


//nested objects - objects that is inside another object,allows to represent more complex data structures
//child object is enclosed by parent object
//eg: Person(Address{},Age{}) , Car(color{},speed{})

const person2 = {
    first_name: "patrik",
    lastname: "star",
    age: 28,
    isEmployed: true,
    hobbies:["kungfu","sleeping"],
    adress: {
        street:"123 underwater",
        city:"oceana",
        country:"aqua"
    }
}
console.log(person2.hobbies[1]);
console.log(person2.adress.city);
console.log(person2.isEmployed);

for(const property in person2.adress){
    console.log(person2.adress[property]);
}

eg:2

class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}
class Address{
    constructor(street,city,country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("peter",30,"124 fhj St,",
                                       "oceana",
                                       "aqua");
const person2 = new Person("roger",34,"1234 louis St,",
                                       "oceanagateqat",
                                       "aqua2");
const person3 = new Person("squid",33,"1234 louis St,",
                                       "oceanagateqat",
                                       "aqua2");

console.log(person1.address);

//array of objects

const fruits = [{name:"apple",color:"red",calories:25},
                {name:"orange",color:"orange",calories:55},
                {name:"banana",color:"yellow",calories:75},
                {name:"lemon",color:"yellow",calories:65}];
//console.log(fruits[1].name);
fruits.push({name:"grapes",color:"green"});
//console.log(fruits[3]);
//fruits.pop();
//console.log(fruits);

//........foreach loop.................
fruits.forEach(fruit => console.log(fruit.color));
//........map()..............
const fruitname = fruits.map(fruit => fruit.name);
const fruitcolor = fruits.map(fruitc => fruitc.color);
console.log(fruitcolor);

//.......filter().........
const fruitgreen = fruits.filter(f => f.color === "yellow");
const fruitcalorie = fruits.filter(f => f.calories < 50);
console.log(fruitcalorie);

//........reduce()......
const maxfruit = fruits.reduce((max,fruit)=>fruit.calories>max.calories?fruit:max);
const minfruit = fruits.reduce((min,fruit)=>fruit.calories<min.calories?fruit:min);
console.log(minfruit);


//sort() used to sort elements of an array in place,sorts elements as strings in lexicographic order
//lexiographic = (alphabet+numbers+symbols) as strings

let fruits = ["apple","orange","coconut","pineapple"];
fruits.sort();//this same wont work for numbers
console.log(fruits);

let num = [1,5,46,3];
num.sort((a,b) =>  a-b);//asscending
num.sort((a,b)=>b-a);//descending
console.log(num);

const people = [{name:"nfkjsd",age:34},{name:"afsd",age:44},{name:"bjsd",age:37}];
//people.sort((a,b)=>a.age-b.age);
people.sort((a,b)=>a.name.localeCompare(b.name));//to compare to object strings for lexiographical order.for reverse change a and b
console.log(people);

//Fisher-Yates Algorithm

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
shuffle(cards);
function shuffle(arr){
    for (let i = arr.length-1;i>0;i--){
        const random = Math.floor(Math.random()*(i+1));
        [arr[i],arr[random]] = [arr[random],arr[i]];
    }
}
console.log(cards);

//closure - a function defined inside of another function,the inner functin has access to the variables
//and scope of the outer function.
//allow for sate maintainence and private variables

function outer(){
    let a = "hello";
    inner();
    function inner(){
        console.log(a);
    }
}
a = "hi";
outer();

eg:2

function counter(){
    let count = 0;
    function increment(){
        count++;
        console.log(count);
    }  
    function getcount(){
        return count;
    }
    return {increment,getcount};
}

const cntr = counter();
cntr.increment();

console.log(cntr.getcount());


function score(){
let score = 0;

function increment(points){
    score += points;
    console.log(`incremented ${points}`);
}
function decrement(points){
    score -= points;
    console.log(`decremented ${points}`);
}
function getscore(){
    console.log(score);
}
return {increment,decrement,getscore};
}

const s1 = score();

s1.increment(40);
s1.decrement(23);
s1.getscore();

//setTimeout - func in js that allows to schedule the execution of a func after a certain time
// setTimeout(callback,delay)
//cleaerTimeout(timeoutId) = can cancel a timeout before it triggers

const timeout = setTimeout(()=>window.alert("hello"),3000);
clearTimeout(timeout);

let timeid;
function startTimer(){
    timeid = setTimeout(()=>window.alert("hello"),2000);
    console.log("started")

}
function stopTimer(){
    clearTimeout(timeid);
    console.log("cleared")
}

//syncronous - executes line by line consecutively in a sequential manner,code that wait for an operation to complete
//asynchronous - allows multiple operatios to be performed consurrently without waiting does'nt block the execution flow 
//and allows the program to continue (I/O operations,network,requests,fetching data)
//handeled with Callbacks ,promises,Async/Await

//this code handles async using callback
function func1(callback){
    setTimeout(()=>{console.log("task1");callback()},3000)
}
function func2(){
    console.log("task2");
    console.log("task3");
}
func1(func2); 


//Error - An object that is created to represent a problem that occurs often with user 
//input or establishing a connection

//try{} = encloses code that might potentially cause an error
////catch{} = catch can handle any thrown errors from try{ }
//finally{ } = always executes,Used mostly for clean up ex.close files,close connections,release resources.
console.log("hello");

try{
    console.log("hi");
    //network errors
    //security errors
    //promise rejection
}
catch(error){
    console.error(error);
}
finally{
    //close files
    //close connections
    //release resources
    console.log("thid always executes");
}
console.log("you have reached the end ! ");

eg2:

try{
    const dividend = window.prompt("enter dividend : ");
    if (isNaN(dividend) || isNaN(divisor)) throw new Error("enter a number ")
    const divisor = window.prompt("enter a divisor : ");
    if (isNaN(dividend) || isNaN(divisor)) throw new Error("enter a number ")
    if (divisor == 0) throw new Error("can't divide by zero");
    const res = dividend/divisor;
    console.log(res);
}
catch(error){
    console.error(error);
}
console.log("program end")

//callback hell - situation in javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
//                old pattern to handle asynchronous functions. use promises + async/await to avoid callback hell

function task1(callback){

    setTimeout(() => {
        console.log("task 1 complete ");
        callback();
    },2000);
}
function task2(callback){
    setTimeout(() => {
        console.log("task 2 complete ");
        callback();
    },1000);
}
function task3(callback){
    setTimeout(() => {
        console.log("task 3 complete ");
        callback();
    },3000);
}
function task4(callback){
    setTimeout(() => {
        console.log("task 4 complete ");
        callback();
    },4000);
}

task1(() => {
    task2(()=>{
        task3(() => {
            task4(() => console.log("all task complete "));
        });
    });
});
task2();
task3();
task4();

//Promise - An object that manages asynchronous opertions.
            wrap a promisese object around (asynchronous code)
            it promisees to return a value
            pending -> resolved or rejected
            new promise ((resolve,reject) => {asynchronous code})

//DO these chores in order
1.) walk the dog
2.) clean the kitchen
3.) take out the trash
 

function walking(){
    

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const dogwalked =  true;
            if (dogwalked) resolve("you walk the dog");
            else reject("you walk the dog");
        },1500);
    });
}

function cleankitchen(){
    
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const kitchencleaned = true;
            if (kitchencleaned) resolve("you clean the kitchen");
            else reject("you didnt clean the kitchen");
        },2500);
    });
}

function takeouttrash(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const trashout = true;
            if (trashout) resolve("you take out the trash");
            else reject("you didnt takeout")
        }, 500);
    });
}

walking().then(value => {console.log(value); return cleankitchen()})
         .then(value => {console.log(value); return takeouttrash()})
         .then(value => {console.log(value); console.log("you finished all")})
         .catch(error => console.error(error));


Async/Await - Async = makes a function return a promise
              Await = makes an async function wait for a promise

              allows you write asynchronous code in a synchronous manner
              async doesnt have resolve or reject parameters
              everything after Await is placed in an event queue


function walking(){
    

    return new Promise((resolve,reject) => {

        setTimeout(() => {

            const dogwalked =  true;
            if (dogwalked) resolve("you walk the dog");
            else reject("you walk the dog");
        },1500);
    });
}

function cleankitchen(){
    
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const kitchencleaned = true;
            if (kitchencleaned) resolve("you clean the kitchen");
            else reject("you didnt clean the kitchen");
        },2500);
    });
}

function takeouttrash(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const trashout = true;
            if (trashout) resolve("you take out the trash");
            else reject("you didnt takeout")
        }, 500);
    });
}


async function dochores(){ //awasit depends on async

    try{
    const walkdogresult = await walking();
    console.log(walkdogresult);

    const cleankitchenresult = await cleankitchen();
    console.log(cleankitchenresult);

    const takeouttrashres = await takeouttrash();
    console.log(takeouttrashres);

    console.log("you finished all the chores");
    }
    catch(error){
        console.error(error);
    }
}

dochores();



*/


//-------------------------------------------------------------------------------------------------------------------------

//NODE.JS

const fs = require("fs");
fs.writeFile("message.txt","hello abinanthan", (err)=>{
    if (err) throw err;
    console.log("file saved");
});
fs.readFile("message.txt",'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});
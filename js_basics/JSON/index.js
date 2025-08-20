/*JSON - (javascript object notation) data interchange format used for exchanging data b/w 
a server and a web app JSON files {key:value} or {value1, value2, value3}

JSON.stringify() = convverts a JS object to a JSON string.-------------------------------

const names = ["abinanthan","patrick","squidward","spongebob"];

const person = {
    "name": "spongebob",
    "age": 20,
    "isemployed": true,
    "hobbies": ["writing","reading","drawing"]
}

const peoples = [
    {
    "name": "spongebob",
    "age": 20,
    "isemployed": true
    },
    {
    "name": "abinanthan",
    "age": 21,
    "isemployed": true
    },
    {
    "name": "patrick",
    "age": 22,
    "isemployed": true
    },
    {
    "name": "squidward",
    "age": 25,
    "isemployed": false
_]

const jsonstring = JSON.stringify(peoples);

console.log(jsonstring);

-----------------------------------------------------------------------------------



JSON.parse() = converts a JSON string to a JS object-----------------------------------

const jsonnames = `["abinanthan","patrick","squidward","spongebob"]`;
const jsonperson = `{ "name": "spongebob","age": 20,"isemployed": true,"hobbies": ["writing","reading","drawing"]}`;

const jsonpeoples = `[
                 {"name": "spongebob","age": 20,"isemployed": true},
                 {"name": "abinanthan","age": 21,"isemployed": true},
                 {"name": "patrick","age": 22,"isemployed": true},
                 {"name": "squidward","age": 25,"isemployed": false}
                ]`;

const parseddata = JSON.parse(jsonpeoples);
console.log(parseddata);
----------------------------------------------------------------------------------
fetch("people.json")
     .then(response =>response.json())
     .then(values => values.forEach(value => console.log(value.isemployed)))
     .catch(error => console.error(error))


fetch = function used for making requests to fetch resiurces.
        {JSON style data, images, files}
        simplifies asynchronous data fetching in JS and used for interacting
        with api's to retrieve and send data asynchronously over the web.
        fetch(url, {options})


example 1:
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
     .then(response => {
        if (!response.ok){
            throw new Error("could not fetch resource");
        }
        return response.json();
     })
     .then(data => console.log(data))
     .catch(error => console.error(error));
*/
//fetching data from an api using javascript

async function fetchdata(){
    try{

        const pokemonname = document.getElementById("pokemonname").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
        if (!response.ok){
            throw new Error("could not fetch resource");
        }
        const data = await response.json();
        const pokemonsprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonsprite")

        imgElement.src = pokemonsprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
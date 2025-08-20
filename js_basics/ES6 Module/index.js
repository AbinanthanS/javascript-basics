/*
//ES6 Module - An external file that contains resuable code
//that can be imported into other javascript files
//write resuable code for many different apps
//can contain variables,classes,functions...etc.,
*/ 
import {PI,getcircum,getarea,getVolume} from './MathUtil.js';
// console.log(PI);
const circum = getcircum(5);
const area = getarea(5);
const vol = getVolume(5);
console.log(circum);
console.log(area);
console.log(vol);

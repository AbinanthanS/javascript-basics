/**
 * ES6 Module Consumer (main.js)
 * Imports named exports and default export from math_utils.js
 */

import CircleGeometry, { PI, getCircumference, getArea, getSphereVolume } from './math_utils.js';

console.log("=== ES6 Module Import Test ===");
console.log("PI Constant Imported:", PI);
console.log("Circumference for r=5:", getCircumference(5));
console.log("Area for r=5         :", getArea(5));
console.log("Sphere Volume for r=5:", getSphereVolume(5));

// Browser UI bindings if running in browser
if (typeof document !== 'undefined') {
    const inputRadius = document.getElementById("input-radius");
    const btnCalc = document.getElementById("btn-calc");
    const resCircum = document.getElementById("res-circum");
    const resArea = document.getElementById("res-area");
    const resVol = document.getElementById("res-vol");

    function recalculate() {
        const r = parseFloat(inputRadius.value) || 0;
        const geom = new CircleGeometry(r);
        const summary = geom.calculateSummary();

        resCircum.textContent = summary.circumference;
        resArea.textContent = summary.area;
        resVol.textContent = summary.volume;
    }

    if (btnCalc) {
        btnCalc.addEventListener("click", recalculate);
        inputRadius.addEventListener("input", recalculate);
        recalculate(); // Initial run
    }
}

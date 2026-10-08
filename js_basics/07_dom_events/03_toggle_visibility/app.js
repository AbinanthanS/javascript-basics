/**
 * Toggle Visibility, Display, and Opacity
 */

const image = document.getElementById("target-image");
const stateReadout = document.getElementById("state-readout");

function updateStateDisplay() {
    const computed = window.getComputedStyle(image);
    stateReadout.innerHTML = `
        visibility: <span style="color:#38bdf8">${image.style.visibility || computed.visibility}</span><br>
        display:    <span style="color:#fbbf24">${image.style.display || computed.display}</span><br>
        opacity:    <span style="color:#ec4899">${image.style.opacity || computed.opacity}</span>
    `;
}

// 1. Toggle visibility: hidden vs visible
document.getElementById("btn-toggle-visibility").addEventListener("click", () => {
    if (image.style.visibility === "hidden") {
        image.style.visibility = "visible";
    } else {
        image.style.visibility = "hidden";
    }
    updateStateDisplay();
});

// 2. Toggle display: none vs block
document.getElementById("btn-toggle-display").addEventListener("click", () => {
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
    updateStateDisplay();
});

// 3. Toggle opacity: 0 vs 1
document.getElementById("btn-toggle-opacity").addEventListener("click", () => {
    if (image.style.opacity === "0") {
        image.style.opacity = "1";
    } else {
        image.style.opacity = "0";
    }
    updateStateDisplay();
});

// 4. Reset All
document.getElementById("btn-reset-all").addEventListener("click", () => {
    image.style.visibility = "visible";
    image.style.display = "block";
    image.style.opacity = "1";
    updateStateDisplay();
});

updateStateDisplay();

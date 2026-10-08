/**
 * NodeList Static Characteristics & Dynamic DOM Mutation
 */

const container = document.getElementById("buttons-container");
const storedCountLabel = document.getElementById("stored-count");
const domCountLabel = document.getElementById("dom-count");
const logBox = document.getElementById("node-log");

let buttonCounter = 4;

// Initial static querySelectorAll
let cachedNodeList = document.querySelectorAll(".node-btn");

function log(msg) {
    const time = new Date().toLocaleTimeString();
    logBox.textContent = `[${time}] ${msg}\n` + logBox.textContent;
    updateCounts();
}

function updateCounts() {
    storedCountLabel.textContent = cachedNodeList.length;
    domCountLabel.textContent = document.querySelectorAll(".node-btn").length;
}

function attachDeleteHandler(btn) {
    btn.addEventListener("click", () => {
        const text = btn.textContent.replace("✕ Delete", "").trim();
        btn.remove();
        
        // Re-query NodeList to update our cached reference:
        cachedNodeList = document.querySelectorAll(".node-btn");
        log(`Removed "${text}". NodeList re-queried.`);
    });
}

// Attach listeners to initial buttons
cachedNodeList.forEach(attachDeleteHandler);

// 1. Add New Button
document.getElementById("btn-add-item").addEventListener("click", () => {
    buttonCounter++;
    const newBtn = document.createElement("button");
    newBtn.className = "node-btn";
    newBtn.textContent = `Button #${buttonCounter}`;
    
    container.appendChild(newBtn);
    attachDeleteHandler(newBtn);

    // Note: Prior to re-querying, cachedNodeList does NOT include newBtn!
    log(`Appended Button #${buttonCounter}. Updating NodeList.`);
    cachedNodeList = document.querySelectorAll(".node-btn");
});

// 2. Color All with NodeList.forEach
document.getElementById("btn-color-all").addEventListener("click", () => {
    // Refresh list and iterate:
    cachedNodeList = document.querySelectorAll(".node-btn");
    const colors = ["#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#3b82f6"];
    
    cachedNodeList.forEach((btn, index) => {
        btn.style.backgroundColor = colors[index % colors.length];
    });
    log(`Iterated ${cachedNodeList.length} items using NodeList.prototype.forEach().`);
});

// 3. Reset List
document.getElementById("btn-reset-list").addEventListener("click", () => {
    container.innerHTML = `
        <button class="node-btn">Button #1</button>
        <button class="node-btn">Button #2</button>
        <button class="node-btn">Button #3</button>
        <button class="node-btn">Button #4</button>
    `;
    buttonCounter = 4;
    cachedNodeList = document.querySelectorAll(".node-btn");
    cachedNodeList.forEach(attachDeleteHandler);
    log("Reset list to default 4 buttons.");
});

updateCounts();

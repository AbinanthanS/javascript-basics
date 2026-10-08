/**
 * Mouse Events Handling
 */

const box = document.getElementById("interactive-box");
const btn = document.getElementById("trigger-btn");
const label = document.getElementById("box-label");
const tag = document.getElementById("event-tag");
const logBox = document.getElementById("mouse-log");

const cntClick = document.getElementById("cnt-click");
const cntHover = document.getElementById("cnt-hover");
const cntOut = document.getElementById("cnt-out");
const cntDown = document.getElementById("cnt-down");

let counters = { click: 0, hover: 0, out: 0, down: 0 };

function log(msg) {
    const time = new Date().toLocaleTimeString();
    logBox.textContent = `[${time}] ${msg}\n` + logBox.textContent;
}

function updateVisualState(bg, text, eventName, icon = "🖱️") {
    box.style.backgroundColor = bg;
    label.textContent = text;
    tag.textContent = `Event: ${eventName}`;
    box.querySelector(".box-icon").textContent = icon;
}

// 1. click
box.addEventListener("click", () => {
    counters.click++;
    cntClick.textContent = counters.click;
    updateVisualState("#16a34a", "Clicked Box! 🎉", "click", "⚡");
    log("Box clicked!");
});

// 2. mouseover
box.addEventListener("mouseover", () => {
    counters.hover++;
    cntHover.textContent = counters.hover;
    updateVisualState("#ea580c", "Mouse Entered! 👀", "mouseover", "🔥");
    log("Mouse entered box area.");
});

// 3. mouseout
box.addEventListener("mouseout", () => {
    counters.out++;
    cntOut.textContent = counters.out;
    updateVisualState("#1e293b", "Hover or Click Me!", "mouseout", "🖱️");
    log("Mouse left box area.");
});

// 4. mousedown
box.addEventListener("mousedown", () => {
    counters.down++;
    cntDown.textContent = counters.down;
    updateVisualState("#9333ea", "Mouse Button Pressed Down!", "mousedown", "💥");
    log("Mouse pressed down.");
});

// 5. Connecting External Button to Target Box
btn.addEventListener("click", () => {
    counters.click++;
    cntClick.textContent = counters.click;
    updateVisualState("#2563eb", "Triggered from External Button!", "external click", "🚀");
    log("External button triggered box state.");
});

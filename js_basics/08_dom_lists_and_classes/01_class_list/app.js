/**
 * classList API Methods: add, remove, toggle, replace, contains
 */

const heading = document.getElementById("demo-heading");
const buttons = document.querySelectorAll(".demo-btn");
const inspector = document.getElementById("inspector-output");
const logBox = document.getElementById("feedback-log");

function log(msg) {
    const time = new Date().toLocaleTimeString();
    logBox.textContent = `[${time}] ${msg}`;
    updateInspector();
}

function updateInspector() {
    inspector.textContent = `Heading classes: [ ${Array.from(heading.classList).join(", ")} ]`;
}

// 1. .add("enabled")
document.getElementById("btn-add-enabled").addEventListener("click", () => {
    heading.classList.add("enabled");
    buttons.forEach(b => b.classList.add("enabled"));
    log('classList.add("enabled") -> Applied to heading and buttons.');
});

// 2. .toggle("glow")
document.getElementById("btn-toggle-glow").addEventListener("click", () => {
    const isNowGlow = heading.classList.toggle("glow");
    buttons.forEach(b => b.classList.toggle("glow"));
    log(`classList.toggle("glow") -> Glow is now ${isNowGlow ? "ON" : "OFF"}.`);
});

// 3. .replace("enabled", "disabled")
document.getElementById("btn-replace-class").addEventListener("click", () => {
    if (heading.classList.contains("enabled")) {
        heading.classList.replace("enabled", "disabled");
        buttons.forEach(b => b.classList.replace("enabled", "disabled"));
        log('classList.replace("enabled", "disabled") -> Replaced successfully.');
    } else if (heading.classList.contains("disabled")) {
        heading.classList.replace("disabled", "enabled");
        buttons.forEach(b => b.classList.replace("disabled", "enabled"));
        log('classList.replace("disabled", "enabled") -> Replaced back to enabled.');
    } else {
        heading.classList.add("enabled");
        log('Neither class existed; added "enabled" as starting point.');
    }
});

// 4. .contains("disabled")
document.getElementById("btn-check-contains").addEventListener("click", () => {
    const hasDisabled = heading.classList.contains("disabled");
    log(`classList.contains("disabled") -> Result: ${hasDisabled}`);
});

// 5. Reset All
document.getElementById("btn-remove-all").addEventListener("click", () => {
    heading.className = "target-heading";
    buttons.forEach(b => b.className = "demo-btn");
    log("Reset all classes back to default.");
});

// Direct interactive click on buttons
buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("glow");
        log(`Button ${idx + 1} clicked directly! Toggled glow.`);
    });
});

updateInspector();

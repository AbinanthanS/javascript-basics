/**
 * DOM Tree Navigation & Traversal
 */

let currentElement = null;
const indicator = document.getElementById("current-focused");
const logBox = document.getElementById("nav-log");

function log(msg) {
    const time = new Date().toLocaleTimeString();
    logBox.textContent = `[${time}] ${msg}\n` + logBox.textContent;
}

function setActive(element, relationshipText = "") {
    if (!element) return;

    // Clear previous highlights
    document.querySelectorAll(".active-node").forEach(el => el.classList.remove("active-node"));

    currentElement = element;
    currentElement.classList.add("active-node");

    const desc = currentElement.id 
        ? `#${currentElement.id} (${currentElement.tagName.toLowerCase()})` 
        : currentElement.tagName.toLowerCase();

    indicator.textContent = desc;
    log(`Focused ${desc} ${relationshipText ? `via ${relationshipText}` : ''}`);
}

// Click to focus any item
document.querySelectorAll(".nav-node, .category-block").forEach(el => {
    el.addEventListener("click", (e) => {
        e.stopPropagation();
        setActive(el, "Direct Click");
    });
});

// Set default focus on #f2 (Orange)
setActive(document.getElementById("f2"), "Initial setup");

// 1. .parentElement
document.getElementById("btn-parent").addEventListener("click", () => {
    if (currentElement && currentElement.parentElement) {
        setActive(currentElement.parentElement, ".parentElement");
    } else {
        log("No parent element found!");
    }
});

// 2. .firstElementChild
document.getElementById("btn-first-child").addEventListener("click", () => {
    if (currentElement && currentElement.firstElementChild) {
        setActive(currentElement.firstElementChild, ".firstElementChild");
    } else {
        log("No first child found for current element.");
    }
});

// 3. .lastElementChild
document.getElementById("btn-last-child").addEventListener("click", () => {
    if (currentElement && currentElement.lastElementChild) {
        setActive(currentElement.lastElementChild, ".lastElementChild");
    } else {
        log("No last child found for current element.");
    }
});

// 4. .previousElementSibling
document.getElementById("btn-prev-sibling").addEventListener("click", () => {
    if (currentElement && currentElement.previousElementSibling) {
        setActive(currentElement.previousElementSibling, ".previousElementSibling");
    } else {
        log("No previous sibling available.");
    }
});

// 5. .nextElementSibling
document.getElementById("btn-next-sibling").addEventListener("click", () => {
    if (currentElement && currentElement.nextElementSibling) {
        setActive(currentElement.nextElementSibling, ".nextElementSibling");
    } else {
        log("No next sibling available.");
    }
});

// 6. Highlight .children
document.getElementById("btn-children").addEventListener("click", () => {
    if (currentElement && currentElement.children.length > 0) {
        const childrenArray = Array.from(currentElement.children);
        childrenArray.forEach(child => child.classList.add("active-node"));
        log(`Highlighted ${childrenArray.length} children of ${currentElement.tagName.toLowerCase()}`);
    } else {
        log("Current element has no children.");
    }
});

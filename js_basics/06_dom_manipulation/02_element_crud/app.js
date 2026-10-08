/**
 * DOM Element Creation & CRUD Operations
 */

const list = document.getElementById("fruits-list");
const input = document.getElementById("item-text");
const logBox = document.getElementById("log-box");

function log(msg) {
    const time = new Date().toLocaleTimeString();
    logBox.textContent = `[${time}] ${msg}\n` + logBox.textContent;
}

function createItemElement(text) {
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add("new-item");
    return li;
}

// 1. append() - Add to bottom
document.getElementById("btn-append").addEventListener("click", () => {
    const text = input.value.trim() || "Item (Default)";
    const newItem = createItemElement(text);
    list.append(newItem);
    log(`list.append("${text}") -> Added to the bottom.`);
});

// 2. prepend() - Add to top
document.getElementById("btn-prepend").addEventListener("click", () => {
    const text = input.value.trim() || "Item (Top)";
    const newItem = createItemElement(text);
    list.prepend(newItem);
    log(`list.prepend("${text}") -> Added to the top.`);
});

// 3. insertBefore() - Insert before reference node
document.getElementById("btn-insert-before").addEventListener("click", () => {
    const text = input.value.trim() || "Item (Inserted)";
    const newItem = createItemElement(text);
    const bananaRef = document.getElementById("banana");

    if (bananaRef) {
        list.insertBefore(newItem, bananaRef);
        log(`list.insertBefore(newItem, #banana) -> Placed immediately before Banana.`);
    } else {
        list.append(newItem);
        log(`Banana not found; appended item instead.`);
    }
});

// 4. remove() - Remove last child
document.getElementById("btn-remove-last").addEventListener("click", () => {
    if (list.lastElementChild) {
        const removedName = list.lastElementChild.textContent;
        list.lastElementChild.remove();
        log(`list.lastElementChild.remove() -> Removed "${removedName}".`);
    } else {
        log(`List is currently empty! Nothing to remove.`);
    }
});

/**
 * Keyboard Events & Arena Movement
 */

const player = document.getElementById("player");
const playerFace = document.getElementById("player-face");
const arena = document.getElementById("arena");

const posXLabel = document.getElementById("pos-x");
const posYLabel = document.getElementById("pos-y");
const lastKeyLabel = document.getElementById("last-key");
const btnReset = document.getElementById("btn-reset-pos");

const MOVE_STEP = 15;
let x = 20;
let y = 20;

function updatePlayerPosition() {
    // Keep avatar within arena bounds
    const maxBoundX = arena.clientWidth - player.clientWidth;
    const maxBoundY = arena.clientHeight - player.clientHeight;

    x = Math.max(0, Math.min(x, maxBoundX));
    y = Math.max(0, Math.min(y, maxBoundY));

    player.style.left = `${x}px`;
    player.style.top = `${y}px`;

    posXLabel.textContent = `${Math.round(x)} px`;
    posYLabel.textContent = `${Math.round(y)} px`;
}

// 1. keydown listener: change face and move
window.addEventListener("keydown", (event) => {
    lastKeyLabel.textContent = event.key;

    // Change avatar reaction during key down
    player.classList.add("active-press");
    playerFace.textContent = ":o";

    let moved = false;

    switch (event.key) {
        case "ArrowUp":
        case "w":
        case "W":
            y -= MOVE_STEP;
            moved = true;
            break;
        case "ArrowDown":
        case "s":
        case "S":
            y += MOVE_STEP;
            moved = true;
            break;
        case "ArrowLeft":
        case "a":
        case "A":
            x -= MOVE_STEP;
            moved = true;
            break;
        case "ArrowRight":
        case "d":
        case "D":
            x += MOVE_STEP;
            moved = true;
            break;
    }

    if (moved) {
        event.preventDefault(); // Prevent page scrolling while using arrow keys
        updatePlayerPosition();
    }
});

// 2. keyup listener: restore happy face
window.addEventListener("keyup", () => {
    player.classList.remove("active-press");
    playerFace.textContent = ":)";
});

// 3. Reset Button
btnReset.addEventListener("click", () => {
    x = 20;
    y = 20;
    updatePlayerPosition();
    lastKeyLabel.textContent = "Reset";
});

// Initial position setup
updatePlayerPosition();

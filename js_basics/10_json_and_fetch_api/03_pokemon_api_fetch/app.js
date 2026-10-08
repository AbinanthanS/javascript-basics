/**
 * Live PokéAPI Fetch Handler
 */

const input = document.getElementById("pokemon-name-input");
const btnSearch = document.getElementById("btn-fetch-pokemon");
const displayCard = document.getElementById("pokemon-display");
const statusMsg = document.getElementById("status-message");

const spriteImg = document.getElementById("pokemon-sprite");
const title = document.getElementById("pokemon-title");
const typesContainer = document.getElementById("types-container");
const statId = document.getElementById("stat-id");
const statHeight = document.getElementById("stat-height");
const statWeight = document.getElementById("stat-weight");
const statXp = document.getElementById("stat-xp");

function showStatus(text, type = "loading") {
    statusMsg.className = `status-message ${type}`;
    statusMsg.textContent = text;
    statusMsg.classList.remove("hidden");
}

function hideStatus() {
    statusMsg.classList.add("hidden");
}

async function fetchPokemon(nameOrId) {
    const query = String(nameOrId).trim().toLowerCase();
    if (!query) return;

    try {
        showStatus(`Searching PokéAPI for "${query}"...`, "loading");
        displayCard.style.opacity = "0.4";

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!response.ok) {
            throw new Error(`Pokémon "${query}" not found! (HTTP ${response.status})`);
        }

        const data = await response.json();
        hideStatus();

        // Populate Data
        title.textContent = data.name;
        spriteImg.src = data.sprites.front_default || data.sprites.other?.['official-artwork']?.front_default || "";
        statId.textContent = `#${data.id}`;
        statHeight.textContent = `${(data.height / 10).toFixed(1)} m`;
        statWeight.textContent = `${(data.weight / 10).toFixed(1)} kg`;
        statXp.textContent = data.base_experience || "N/A";

        // Render Types
        typesContainer.innerHTML = data.types.map(t => {
            return `<span class="type-pill">${t.type.name}</span>`;
        }).join("");

        displayCard.style.opacity = "1";
    } catch (err) {
        showStatus(err.message, "error");
        displayCard.style.opacity = "0.2";
    }
}

// Search Button
btnSearch.addEventListener("click", () => {
    fetchPokemon(input.value);
});

// Enter key in input
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetchPokemon(input.value);
    }
});

// Quick Pick Buttons
document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const pokeName = btn.dataset.pokemon;
        input.value = pokeName;
        fetchPokemon(pokeName);
    });
});

// Initial Search on page load
fetchPokemon("pikachu");

/**
 * Fetching Local JSON Files (fetch, response.json)
 */

const target = document.getElementById("render-target");

async function loadData(filename) {
    try {
        target.innerHTML = `<p style="color:#94a3b8">⏳ Fetching ${filename}...</p>`;
        
        const response = await fetch(`./${filename}`);
        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}: Failed to load ${filename}`);
        }
        
        const data = await response.json();
        return data;
    } catch (err) {
        target.innerHTML = `
            <div style="color:#ef4444; padding:1rem; border:1px solid #7f1d1d; border-radius:0.5rem; background:#450a0a">
                <strong>Fetch Error:</strong> ${err.message}<br>
                <small style="opacity:0.8">Ensure this page is opened via a local web server (http://) rather than file://.</small>
            </div>
        `;
        return null;
    }
}

// 1. Fetch person.json
document.getElementById("btn-fetch-person").addEventListener("click", async () => {
    const data = await loadData("person.json");
    if (!data) return;

    target.innerHTML = `
        <div class="user-card">
            <div>
                <strong>${data.name}</strong> (Age: ${data.age})<br>
                <small style="color:#94a3b8">Hobbies: ${data.hobbies ? data.hobbies.join(", ") : "N/A"}</small>
            </div>
            <span class="tag ${data.isemployed ? 'tag-employed' : 'tag-unemployed'}">
                ${data.isemployed ? 'Employed' : 'Unemployed'}
            </span>
        </div>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
});

// 2. Fetch people.json
document.getElementById("btn-fetch-people").addEventListener("click", async () => {
    const list = await loadData("people.json");
    if (!list) return;

    const cardsHtml = list.map(user => `
        <div class="user-card">
            <div>
                <strong>${user.name}</strong> (Age: ${user.age})
            </div>
            <span class="tag ${user.isemployed ? 'tag-employed' : 'tag-unemployed'}">
                ${user.isemployed ? 'Employed' : 'Unemployed'}
            </span>
        </div>
    `).join("");

    target.innerHTML = `
        <p style="margin-bottom:1rem; color:#94a3b8">Retrieved ${list.length} team members from <code>people.json</code>:</p>
        ${cardsHtml}
    `;
});

// 3. Fetch names.json
document.getElementById("btn-fetch-names").addEventListener("click", async () => {
    const names = await loadData("names.json");
    if (!names) return;

    target.innerHTML = `
        <p style="margin-bottom:1rem; color:#94a3b8">Names Array (length: ${names.length}):</p>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap">
            ${names.map(n => `<span style="background:#1e293b; padding:0.5rem 1rem; border-radius:0.5rem; border:1px solid #334155; font-weight:600">${n}</span>`).join("")}
        </div>
    `;
});

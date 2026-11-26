const healthContainer = document.getElementById("health-status");

async function checkBackendHealth() {
    try {
        const response = await fetch("http://localhost:8080/api/health");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        renderStatus(data);
    } catch (error) {
        renderError(error.message);
    }
}

function renderStatus(data) {
    healthContainer.replaceChildren(); // clears "Checking backend..."

    const title = document.createElement("h2");
    title.textContent = "Health Status";

    const badge = document.createElement("span");
    badge.className = "badge badge-up";
    badge.textContent = data.status;

    const details = document.createElement("p");
    details.textContent = `Service: ${data.service} | Kotlin Engine: ${data.kotlinEngine}`;

    const time = document.createElement("small");
    time.textContent = `Checked at: ${new Date(data.timestamp).toLocaleString()}`;

    healthContainer.append(title, badge, details, time);
}
function renderError(message) {
    healthContainer.replaceChildren();
    const title = document.createElement("h2");
    title.textContent = "Health Status";

    const badge = document.createElement("span");
    badge.className = "badge badge-error";
    badge.textContent = "DOWN";

    const details = document.createElement("p");
    details.textContent = `Backend unreachable (${message})`;

    healthContainer.append(title, badge, details);
}
checkBackendHealth()
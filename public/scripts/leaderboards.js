"use strict";

async function loadLeaderboards() {
    const response = await fetch("/public/data/leaderboards.json");
    const data = await response.json();

    const container = document.getElementById("leaderboards-container");

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    table.setAttribute("border", "1");

    const headers = ["Game", "Winner", "Date"];
    const headerRow = document.createElement("tr");

    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    data.forEach(({ game, winner, date }) => {
        const row = document.createElement("tr");

        [game, winner, date].forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
}

loadLeaderboards();

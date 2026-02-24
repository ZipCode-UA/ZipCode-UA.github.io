"use strict";
fetch('/public/data/leaderboards.json')
    .then(response => response.json())
    .then((data) => {
    const calendarContainer = document.getElementById('leaderboards-container');
    if (calendarContainer) {
        data.forEach(item => {
            const eventDiv = document.createElement('div');
            eventDiv.innerHTML = `
                    <h3>${item.date}</h3>
                    <p>${item.game}</p>
                    <p>${item.winner}</p>
                `;
            calendarContainer.appendChild(eventDiv);
        });
    }
});

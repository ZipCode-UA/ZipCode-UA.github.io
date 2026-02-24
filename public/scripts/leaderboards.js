"use strict";
fetch('/public/data/leaderboards.json')
    .then(response => response.json())
    .then((data) => {
    const leaderboardContainer = document.getElementById('leaderboards-container');
    leaderboard = "<table boarder='1'><tr><th>Date</th><th>Game</th><th>Winner</th></table>"
    //if (calendarContainer) {
    //    data.forEach(item => {
    //        const eventDiv = document.createElement('div');
    //        eventDiv.innerHTML = `
    //                <h3>${item.date}</h3>
    //                <p>${item.game}</p>
    //                <p>${item.winner}</p>
    //            `;
    //        calendarContainer.appendChild(eventDiv);
    //    });
    //}
    leaderboardContainer.innerHTML = leaderboard;
});

"use strict";
function fetchRosterData() {
    return new Promise((resolve, reject) => {
        fetch('/public/data/roster.json')
            .then(response => {
            if (!response.ok) {
                console.error('Error fetching roster data:', response.statusText);
                reject([]);
                return;
            }
            response.json().then((data) => {
                resolve(data);
            });
        })
            .catch(error => {
            console.error('Error parsing roster data:', error);
            reject([]);
        });
    });
}
function createRosterCard(member) {
    const card = document.createElement('div');
    card.classList.add('roster-card');
    const pfp = document.createElement('img');
    pfp.src = member.pfp || '/public/assets/defaults/default_zipcode_pfp.svg';
    card.appendChild(pfp);
    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = member.name;
    card.appendChild(name);
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = member.title || 'Member';
    card.appendChild(title);
    const button = document.createElement('button');
    button.textContent = 'View Profile';
    button.onclick = () => {
        window.location.href = `/public/pages/profile.html?id=${member.uaNetId}`;
    };
    card.appendChild(button);
    return card;
}
fetchRosterData()
    .then(data => {
    const officerContainer = document.getElementById('officer-container');
    const memberContainer = document.getElementById('member-container');
    if (officerContainer && memberContainer) {
        data.forEach(member => {
            const card = createRosterCard(member);
            if (member.isOfficer) {
                officerContainer.appendChild(card);
            }
            else {
                memberContainer.appendChild(card);
            }
        });
    }
});

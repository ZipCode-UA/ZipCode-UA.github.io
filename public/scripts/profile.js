"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('id');
    if (memberId) {
        fetch('/public/data/roster.json')
            .then(response => response.json())
            .then((data) => {
            const member = data.find((m) => m.uaNetId === memberId);
            if (member) {
                const profileContainer = document.getElementById('profile-container');
                if (profileContainer) {
                    profileContainer.innerHTML = `
                            <div class="roster-card">
                                <img src="${member.pfp || '/public/assets/defaults/default_zipcode_pfp.svg'}" alt="Profile Picture" class="pfp">
                                <div class="name">${member.name}</div>
                                <div class="title">${member.title || 'Member'}</div>
                                <div class="major">Major: ${member.major}</div>
                                <p>Graduation Year: ${member.graduationYear}</p>
                            </div>
                        `;
                }
            }
        });
    }
});

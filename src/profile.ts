type ZipCoder = {
    name: string;
    major: string;
    graduationYear: number;
    isOfficer: boolean;
    title: string;
    pfp: string;
    uaNetId: string;
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('id');

    if (!memberId) window.location.replace('/404.html')

    fetch('/public/data/roster.json')
        .then(response => response.json())
        .then((data: ZipCoder[]) => {
            const member = data.find((m: ZipCoder) => m.uaNetId === memberId);
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

});

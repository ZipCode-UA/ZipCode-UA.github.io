type ZipCoder = {
    name: string;
    major: string;
    graduationYear: number;
    isOfficer: boolean;
    title: string;
    pfp: string;
    uaNetId: string;
};

const ProfileContainerElementId = 'profile-container' as const;
const NotFoundRoute = '/404.html' as const;
const RosterDataRoute = '/public/data/roster.json' as const;
const ErrorHTML = '<div>Something went wrong and this page cannot be loaded.</div>' as const;

document.addEventListener('DOMContentLoaded', async () => {

    // Extract member ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('id');
    if (!memberId) {
        window.location.replace(NotFoundRoute);
        return;
    }

    // Retrieve container for profile content
    const profileContainer = document.getElementById(ProfileContainerElementId);
    if (!profileContainer) {
        window.location.replace(NotFoundRoute);
        return;
    }

    // Fetch roster data
    const response = await fetch(RosterDataRoute);
    if (!response.ok) {
        profileContainer.innerHTML = ErrorHTML;
        return;
    }
    const rosterData = await response.json() as ZipCoder[];

    // Retrieve member profile
    const member = rosterData.find((m: ZipCoder) => m.uaNetId === memberId);
    if (member) {
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

});

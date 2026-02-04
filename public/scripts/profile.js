"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ProfileContainerElementId = 'profile-container';
const NotFoundRoute = '/404.html';
const RosterDataRoute = '/public/data/roster.json';
const ErrorHTML = '<div>Something went wrong and this page cannot be loaded.</div>';
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
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
    const response = yield fetch(RosterDataRoute);
    if (!response.ok) {
        profileContainer.innerHTML = ErrorHTML;
        return;
    }
    const rosterData = yield response.json();
    // Retrieve member profile
    const member = rosterData.find((m) => m.uaNetId === memberId);
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
}));

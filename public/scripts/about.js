"use strict";
fetch('/public/data/about.json')
    .then(response => response.json())
    .then(data => {
    const aboutContent = document.getElementById('about-content');
    if (aboutContent) {
        aboutContent.textContent = data.description;
    }
});

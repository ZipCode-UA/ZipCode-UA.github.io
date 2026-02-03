const footerYear = document.getElementById("footerYear");

const currentTimestamp = Date.now();
const date = new Date(currentTimestamp);

footerYear.textContent = date.getFullYear();

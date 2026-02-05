/*
 * @file footer.js
 *
 * @brief Inserts the current the year into the footer.
 *
 * This script currently expects each footer to contain
 * a child element with an id of "footerYear"
*/

const footerYear = document.getElementById("footerYear");

const currentTimestamp = Date.now();
const date = new Date(currentTimestamp);

footerYear.textContent = date.getFullYear();

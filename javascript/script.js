
// Updates the text based on the search result

let searchResult = 500;
let infoParagraph = document.getElementById("options-info-text");
let infoText = `Plus de ${searchResult} logements sont disponibles dans cette ville`;
infoParagraph.innerHTML = infoText;

// Filter buttons toggle

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');})
    });
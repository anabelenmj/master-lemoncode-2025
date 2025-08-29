const text = document.getElementById('top-text') 
const mediaQuery = window.matchMedia("(max-width: 1280px)");

function changeQuery(element) {
    if (element.matches) {
        text.textContent = "3"
    } else {
        text.textContent = "5"
    }
}

changeQuery(mediaQuery);
mediaQuery.addEventListener("change", changeQuery);
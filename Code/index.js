// Speichere die ursprüngliche Reihenfolge der Elemente
const originalOrder = Array.from(document.querySelectorAll('.bild-text-box')).map(box => box.innerHTML);

// Funktion zum Wiederherstellen der ursprünglichen Reihenfolge
function restoreOriginalOrder() {
    const boxes = document.querySelectorAll('.bild-text-box');
    boxes.forEach((box, index) => {
        box.innerHTML = originalOrder[index];
    });
}

// Funktion zum Behandeln der Media Query
function handleMediaQuery(mediaQuery) {
    const boxes = document.querySelectorAll('.bild-text-box');
    if (mediaQuery.matches) {
        // Media Query ist erfüllt
        console.log("Media Query ist erfüllt");
        boxes.forEach(box => {
            const text = box.querySelector('.text');
            const bild = box.querySelector('.bild');
            if (bild.nextSibling !== text) {
                box.insertBefore(bild, text);
            }
        });
    } else {
        // Media Query ist nicht erfüllt
        console.log("Media Query ist nicht erfüllt");
        restoreOriginalOrder();
    }
}

// Definiere die Media Query, auf die du reagieren möchtest
const mediaQuery = window.matchMedia("(max-width: 720px)");

// Führe die Funktion beim Laden der Seite aus und füge einen Event-Listener hinzu,
// um auf Änderungen der Media Query zu reagieren
handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);
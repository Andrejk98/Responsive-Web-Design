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

// Code für Vorhernachher Slider
$('.ba-slider').beforeAfter();

//Bilder Karussell

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    /* setTimeout(showSlides, 3000); */ // Wechselt alle 3 Sekunden
}

function plusSlides(n) {
    showSpecificSlide(slideIndex += n);
}

function currentSlide(n) {
    showSpecificSlide(slideIndex = n);
}

function showSpecificSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
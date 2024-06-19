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
function handleMediaQuery(mediaQuery1, mediaQuery2) {
    const boxes = document.querySelectorAll('.bild-text-box');
    if (mediaQuery1.matches || mediaQuery2.matches) {
        // Eine der Media Queries ist erfüllt
        console.log("Eine der Media Queries ist erfüllt");
        boxes.forEach(box => {
            const text = box.querySelector('.text');
            const bild = box.querySelector('.bild');
            if (bild.nextSibling !== text) {
                box.insertBefore(bild, text);
            }
        });
    } else {
        // Keine der Media Queries ist erfüllt
        console.log("Keine der Media Queries ist erfüllt");
        restoreOriginalOrder();
    }
}

// Definiere die Media Queries, auf die du reagieren möchtest
const mediaQuery1 = window.matchMedia("(max-width: 720px)");
const mediaQuery2 = window.matchMedia("(max-width: 1024px)");

// Führe die Funktion beim Laden der Seite aus und füge Event-Listener für jede Media Query hinzu
handleMediaQuery(mediaQuery1, mediaQuery2);
mediaQuery1.addListener(() => handleMediaQuery(mediaQuery1, mediaQuery2));
mediaQuery2.addListener(() => handleMediaQuery(mediaQuery1, mediaQuery2));

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

/* Header Bild */
/* const video = document.getElementById('meinVideo');
const playButton = document.getElementById('playButton');

video.addEventListener('ended', () => {
    video.currentTime = video.duration;
});

function playVideo() {
    video.play();
    playButton.style.display = 'none'; // Verstecke den Button nach dem Starten des Videos
}

document.addEventListener('DOMContentLoaded', function() {
    video.load();

    // Event listener für das 'loadedmetadata'-Event, um das Poster zu setzen
    video.addEventListener('loadedmetadata', function() {
        video.currentTime = 0; // Setzt die aktuelle Zeit des Videos auf den Anfang
        video.pause(); // Pausiert das Video
    });
}); */
let isVideoPlaying = false;
const video = document.getElementById('meinVideo');
let scrollFactorDesktop = 0.5; // Scroll-Faktor für Desktops
let scrollFactorMobile = 1;  // Scroll-Faktor für mobile Geräte

// Überprüfen, ob das Gerät ein Touch-Gerät ist
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

// Auswahl des passenden Scroll-Faktors basierend auf dem Gerätetyp
const scrollFactor = isTouchDevice ? scrollFactorMobile : scrollFactorDesktop;

// Funktion zur Behandlung von Scroll-Ereignissen
function handleScroll(event) {
    if (!isVideoPlaying) {
        const deltaY = event.deltaY || calculateDeltaY(event); // Mausrad-Delta oder Touch-Delta
        const videoDuration = video.duration;

        // Berechnen des neuen Zeitpunkts im Video basierend auf der Scroll-Geschwindigkeit
        let newTime = video.currentTime + (deltaY * videoDuration * scrollFactor / 1000);
        newTime = Math.max(0, Math.min(videoDuration, newTime));

        // Setzen des neuen Video-Zeitpunkts
        video.currentTime = newTime;

        // Verhindern des normalen Scrollens
        event.preventDefault();
        event.stopPropagation();

        // Scrollposition auf den letzten Wert zurücksetzen
        window.scrollTo(0, 0);

        // Wenn das Video zu Ende ist, erlauben, weiter zu scrollen
        if (newTime >= videoDuration) {
            isVideoPlaying = true;
            removeScrollListeners();
        }
    }
}

// Funktion zur Berechnung der Scroll-Distanz bei Touch-Ereignissen
function calculateDeltaY(event) {
    if (lastTouchY !== null) {
        const touchY = event.touches[0].clientY;
        const deltaY = lastTouchY - touchY;
        lastTouchY = touchY;
        return deltaY;
    }
    return 0;
}

// Funktion zum Entfernen der Scroll-Event-Listener
function removeScrollListeners() {
    window.removeEventListener('wheel', handleScroll);
    window.removeEventListener('touchmove', handleScroll);
}

// Scroll-Event-Listener für Mausrad hinzufügen
window.addEventListener('wheel', handleScroll, { passive: false });

// Touch-Event-Listener für mobile Geräte hinzufügen
window.addEventListener('touchstart', function(event) {
    lastTouchY = event.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', handleScroll, { passive: false });

// Funktion zum manuellen Starten des Videos über den Button
function playVideo() {
    video.play();
    document.getElementById('playButton').style.display = 'none';
    isVideoPlaying = true;
}

// Video sollte stumm geschaltet bleiben und keine automatische Steuerung übernehmen
video.addEventListener('loadedmetadata', () => {
    video.pause();
    video.currentTime = 0;
});




/* End Button */
document.addEventListener('DOMContentLoaded',() =>{
    const openPopupButton = document.querySelector('.openPopup');
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close');
  
    openPopupButton.addEventListener('click', () => {
      popup.style.display = 'flex';
      console.log("geöffnet");
    });
  
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
      if(event.target === popup){
        popup.style.display = 'none';
      }
    });

    document.querySelector('.Repository').addEventListener('click', function() {
        window.open('https://github.com/Andrejk98/Responsive-Web-Design', '_blank');
    });
});
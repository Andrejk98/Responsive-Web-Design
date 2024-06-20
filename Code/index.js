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
const video = document.getElementById('meinVideo');
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
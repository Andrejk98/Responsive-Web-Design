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
/* hovern von controllern */
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;

    boxes.forEach(box => {
        const soundId = box.getAttribute('data-sound');
        const sound = document.getElementById(soundId);

        if (isTouchDevice) {
            box.addEventListener('click', function() {
                if (sound) {
                    sound.currentTime = 0; // Rewind to start of audio
                    sound.play();
                }
            });
        } else {
            box.addEventListener('mouseenter', function() {
                if (sound) {
                    sound.currentTime = 0; // Rewind to start of audio
                    sound.play();
                }
            });

            box.addEventListener('mouseleave', function() {
                if (sound) {
                    sound.pause();
                    sound.currentTime = 0; // Zurücksetzen auf den Anfang des Audios für das nächste Mal
                }
            });
        }
    });
});
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
    // setTimeout(showSlides, 3000); // Wechselt alle 3 Sekunden
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

// Add touch functionality
let startX;

document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
}, false);

document.addEventListener('touchend', function(event) {
    let endX = event.changedTouches[0].clientX;
    let deltaX = endX - startX;
    if (Math.abs(deltaX) > 50) { // Adjust the threshold as needed
        if (deltaX > 0) {
            // Swipe right
            plusSlides(-1);
        } else {
            // Swipe left
            plusSlides(1);
        }
    }
}, false);

/* Header Bild */
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('meinVideo');
    
    // Überprüfen, ob das Video geladen ist
    video.addEventListener('loadedmetadata', function() {
        video.play();
        video.playbackRate = 1.5; // Setzt die Wiedergabegeschwindigkeit auf das Doppelte
    });

    // Optional: Funktion zum manuellen Starten des Videos über den Button
    function playVideo() {
        video.play();
        video.playbackRate = 1.5; // Setzt die Wiedergabegeschwindigkeit auf das Doppelte
        document.getElementById('playButton').style.display = 'none';
    }
    
    // Button ist versteckt, da das Video automatisch abspielt
    document.getElementById('playButton').style.display = 'none';
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
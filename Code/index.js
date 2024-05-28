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
document.addEventListener("DOMContentLoaded", function() {
    initComparisons();

    function initComparisons() {
        var x, i;
        x = document.getElementsByClassName("img-comp-overlay");
        for (i = 0; i < x.length; i++) {
            compareImages(x[i]);
        }
        function compareImages(img) {
            var slider, img, clicked = 0, w, h;
            w = img.offsetWidth;
            h = img.offsetHeight;
            img.style.width = (w / 2) + "px";
            slider = document.createElement("DIV");
            slider.setAttribute("class", "img-comp-slider");
            img.parentElement.insertBefore(slider, img);
            slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
            slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
            slider.addEventListener("mousedown", slideReady);
            window.addEventListener("mouseup", slideFinish);
            slider.addEventListener("touchstart", slideReady);
            window.addEventListener("touchend", slideFinish);
            function slideReady(e) {
                e.preventDefault();
                clicked = 1;
                window.addEventListener("mousemove", slideMove);
                window.addEventListener("touchmove", slideMove);
            }
            function slideFinish() {
                clicked = 0;
            }
            function slideMove(e) {
                var pos;
                if (clicked == 0) return false;
                pos = getCursorPos(e);
                if (pos < 0) pos = 0;
                if (pos > w) pos = w;
                slide(pos);
            }
            function getCursorPos(e) {
                var a, x = 0;
                e = (e.changedTouches) ? e.changedTouches[0] : e;
                a = img.getBoundingClientRect();
                x = e.pageX - a.left;
                x = x - window.pageXOffset;
                return x;
            }
            function slide(x) {
                img.style.width = x + "px";
                slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
            }
        }
    }
});


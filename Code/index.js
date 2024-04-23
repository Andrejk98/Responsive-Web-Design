function handleMediaQuery(mediaQuery) {
    if (mediaQuery.matches) {
        // Media Query ist erfüllt
        console.log("Media Query ist erfüllt");
        // Füge hier deinen JavaScript-Code ein, der innerhalb der Media Query ausgeführt werden soll


        // Wähle alle Elemente mit der Klasse .bild-text-box aus
        const parentElements = document.querySelectorAll('.bild-text-box');

        // Iteriere über jedes übergeordnete Element
        parentElements.forEach(parentElement => {
            // Wähle die Elemente innerhalb des aktuellen übergeordneten Elements aus
            const textElement = parentElement.querySelector('.text');
            const bildElement = parentElement.querySelector('.bild');
            // Überprüfe, ob das Textelement vor dem Bildelement ist
            if (textElement.compareDocumentPosition(bildElement) & Node.DOCUMENT_POSITION_PRECEDING) {
                // Füge das Bild-Element vor dem Text-Element ein
                parentElement.insertBefore(bildElement, textElement);
            }
        });
        
    } 
    else {
        // Media Query ist nicht erfüllt
        console.log("Media Query ist nicht erfüllt");
        // Füge hier deinen JavaScript-Code ein, um die Änderungen rückgängig zu machen
        // Wähle alle Elemente mit der Klasse .bild-text-box aus
        const parentElements = document.querySelectorAll('.bild-text-box');
        // Iteriere über jedes übergeordnete Element
        parentElements.forEach(parentElement => {
            // Wähle die Elemente innerhalb des aktuellen übergeordneten Elements aus
            const textElement = parentElement.querySelector('.text');
            const bildElement = parentElement.querySelector('.bild');
            // Überprüfe, ob das Textelement vor dem Bildelement ist
            if (textElement.compareDocumentPosition(bildElement) & Node.DOCUMENT_POSITION_FOLLOWING) {
                // Füge das Text-Element vor dem Bild-Element ein
                parentElement.insertBefore(textElement, bildElement);
            }
        });
    }
}
// Definiere die Media Query, auf die du reagieren möchtest
const mediaQuery = window.matchMedia("(max-width: 720px)");
// Führe die Funktion beim Laden der Seite aus und füge einen Event-Listener hinzu,
// um auf Änderungen der Media Query zu reagieren
handleMediaQuery(mediaQuery);
mediaQuery.addListener(handleMediaQuery);
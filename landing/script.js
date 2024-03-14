document.addEventListener("DOMContentLoaded", function() {
    var popupOverlay = document.getElementById('popup-overlay');
    var dontShowAgainCheckbox = document.getElementById('dont-show-again');

    // Check if popup should be displayed
    var popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
        popupOverlay.style.display = 'block';
    }

    // Close popup
    window.closePopup = function() {
        popupOverlay.style.display = 'none';
        // Save choice if 'Don't show again' is checked
        if (dontShowAgainCheckbox.checked) {
            localStorage.setItem('popupShown', 'true');
        }
    };

    // Function to reset popup state (for testing purposes)
    window.resetPopupState = function() {
        localStorage.removeItem('popupShown');
    };
});

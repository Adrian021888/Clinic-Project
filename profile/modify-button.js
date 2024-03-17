document.addEventListener("DOMContentLoaded", function () {
    const modifyButton = document.getElementById('modifyButton');
    const saveButton = document.getElementById('saveButton');
    const inputs = document.querySelectorAll('input');
    const fieldContainers = document.querySelectorAll('.field-container');

    fieldContainers.forEach(container => {
        container.style.pointerEvents = 'none';
    });

    modifyButton.addEventListener('click', function () {
        inputs.forEach(input => {
            input.removeAttribute('readonly');
        });
        saveButton.removeAttribute('disabled');
        modifyButton.setAttribute('disabled', 'disabled');

        fieldContainers.forEach(container => {
            container.style.pointerEvents = 'auto';
        });
    });

    saveButton.addEventListener('click', function () {
        inputs.forEach(input => {
            input.setAttribute('readonly', 'readonly');
        });
        saveButton.setAttribute('disabled', 'disabled');
        modifyButton.removeAttribute('disabled');

        fieldContainers.forEach(container => {
            container.style.pointerEvents = 'none';
        });
    });
});

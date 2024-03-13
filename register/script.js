let currentStep = 1;

function nextStep() {
  document.getElementById(`step${currentStep}`).classList.remove('active');
  currentStep++;
  document.getElementById(`step${currentStep}`).classList.add('active');
}

function prevStep() {
  document.getElementById(`step${currentStep}`).classList.remove('active');
  currentStep--;
  document.getElementById(`step${currentStep}`).classList.add('active');
}

document.getElementById('multi-step-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
});
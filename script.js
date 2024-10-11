// DOMContent loaded. To make sure the page loads before all JS takes place
document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('registration-form')
const feedbackDiv = document.getElementById('form-feedback')
form.addEventListener('submit', function(){
    //Prevent form from submitting to the server
    event.preventDefault();
})
//Retrieve user inputs and trim whitespace
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
//Initialise validation variables
let isValid = true;
const messages = [];

//Username validation
if (username.length < 3) {
    isValid = false
    messages.push('username must be at least 3 characters long.');
}

//Email Validation
if (!email.includes('@')  || !email.includes('.')) {
    isValid = false
    messages.push('Please enter a valid email address.');
}

//Password validation
if (password.length < 8) {
    isValid = false
    messages.push('Password must be at least 8 characters long.');
}
//Make feedbackDiv visible
feedbackDiv.style.display = 'block';

if (isValid) {
    // If the form is valid
    feedbackDiv.textContent = 'Registration successful!';
    feedbackDiv.style.color = '#28a745'; // Success color (green)
  } else {
    // If the form is invalid
    feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with <br> tags
    feedbackDiv.style.color = '#dc3545'; // Error color (red)
  }




















})
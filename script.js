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























})
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { app } from './firebase-config.js';

const auth = getAuth(app);

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user's email, password, and confirm password
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Firebase Authentication sign up
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            var user = userCredential.user;
            // Redirect to the main web page
            window.location.href = 'web_page.html';
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
});

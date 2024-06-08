import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { app } from './firebase-config.js';

const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get user's email and password
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Firebase Authentication sign in
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
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

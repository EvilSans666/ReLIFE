document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (validateEmailOrPhone(emailValue) && passwordValue !== "") {
            window.location.replace('home.html'); // Redirect to home.html after successful login
        } else {
            errorMessage.style.display = 'block';
        }
    });

    function validateEmailOrPhone(input) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;
        return emailPattern.test(input) || phonePattern.test(input);
    }

    emailInput.addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });

    passwordInput.addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });

    const registerButton = document.querySelector('.register');
    registerButton.addEventListener('click', function() {
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Pre-fill the email input field in signup.html if email is passed in the URL
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const email = getQueryParameter('email');
    if (email) {
        document.getElementById('email').value = email;
    }

    // Attach an event listener to the form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the form from submitting normally

        // Get the values of the email and password input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log("Email:", email); // Debugging line
        console.log("Password:", password); // Debugging line

        // Ensure both email and password fields are filled
        if (email && password) {
            // Save email and password to Local Storage
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);

            // Redirect to the next page
            window.location.href = 'step2.html';  // Redirect to next page
        } else {
            alert('Please enter both email and password.');
        }
    });
});

function signIn() {
    // Check if inputs are filled (basic validation)
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        // Redirect to another HTML page upon clicking "Sign In"
        window.location.href = "home.html"; // Replace with your target HTML page
    } else {
        alert("Please enter your email and password.");
    }
}

// Function to handle redirection from front.html to signup.html with email in query string
function redirectToSignup() {
    const email = document.getElementById('emailInput').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation

    if (emailPattern.test(email)) {
        // Redirect to signup page with email as query parameter
        window.location.href = `signup.html?email=${encodeURIComponent(email)}`;
    } else {
        // Display a more detailed error message instead of alert
        showErrorMessage("Please enter a valid email address.");
    }
}

// Function to handle redirection to signin.html
function redirectToSignin() {
    window.location.href = "signin.html";
}

// Optional function to show error message dynamically in the UI (instead of using alert)
function showErrorMessage(message) {
    const errorContainer = document.createElement('div');
    errorContainer.textContent = message;
    errorContainer.style.color = "red";
    errorContainer.style.padding = "10px";
    errorContainer.style.marginTop = "10px";
    errorContainer.style.textAlign = "center";
    const emailInputContainer = document.querySelector('.hero');  // You can change this to any container where you want to display the error
    emailInputContainer.appendChild(errorContainer);

    // Optional: Hide the error message after 5 seconds
    setTimeout(() => {
        errorContainer.style.display = "none";
    }, 5000);
}
function toggleFAQ(faqBox) {
    // Check if the FAQ is already expanded
    const isActive = faqBox.classList.contains("active");

    // Collapse all FAQs
    document.querySelectorAll(".faqbox").forEach((box) => {
        box.classList.remove("active");
        const answer = box.querySelector(".faq-answer");
        if (answer) {
            answer.style.maxHeight = null;
            answer.style.opacity = 0;
        }
    });

    // If not active, expand the clicked FAQ
    if (!isActive) {
        faqBox.classList.add("active");
        const answer = faqBox.querySelector(".faq-answer");
        if (answer) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = 1;
        }
    }
}
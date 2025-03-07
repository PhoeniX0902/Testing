document.addEventListener('DOMContentLoaded', function () {
    const planData = JSON.parse(localStorage.getItem('selectedPlan'));
    
    if (planData) {
      // Display the selected plan price in payment.html
      const planPriceElement = document.querySelector('#plan-price');
      planPriceElement.textContent = planData.price + "/month";
      
      // Highlight the "Change" link
      const changeLink = document.querySelector('#change-plan');
      changeLink.style.display = 'block'; // Ensure the "Change" link is visible
    }
  });
  
// Wait for the page to load
window.addEventListener('load', function() {
    // Retrieve the selected plan from localStorage
    const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan'));
  
    // If a plan was selected, update the displayed plan name and price
    if (selectedPlan) {
      document.getElementById('planName').textContent = selectedPlan.name;  // Display the plan name
      document.getElementById('planPrice').textContent = selectedPlan.price;  // Display the plan price
    }
  
    // Handle the form submission
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
  
      // Redirect to next page after form submission
      window.location.href = "home.html"; // Replace 'nextpage.html' with your desired page
    });
  });
  
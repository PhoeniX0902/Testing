function selectPlan(planElement) {
  // Remove the 'selected' class from all plans
  const plans = document.querySelectorAll('.plan');
  plans.forEach(plan => plan.classList.remove('selected'));

  // Add the 'selected' class to the clicked plan
  planElement.classList.add('selected');
}

function goToNextPage() {
  // Check if a plan is selected, if not, you can either show a message or handle it accordingly.
  const selectedPlan = document.querySelector('.plan.selected');
  if (!selectedPlan) {
      alert("Please select a plan before proceeding.");
      return;
  }

  // Store plan name and price in localStorage
  const planName = selectedPlan.querySelector('.header').textContent.trim();
  const planPrice = selectedPlan.querySelector('.price').textContent.trim();
  const planData = {
    name: planName,
    price: planPrice
  };
  localStorage.setItem('selectedPlan', JSON.stringify(planData));

  // Redirect to the payment page
  window.location.href = "payment.html";
}

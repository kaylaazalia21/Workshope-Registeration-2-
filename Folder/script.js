// Selecting form and elements
const form = document.getElementById('registrationForm');
const messageDiv = document.getElementById('message');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const resetBtn = document.getElementById('resetBtn');
const submitBtn = document.getElementById('submitBtn');

// Function to handle form submission
submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent form submission and page reload
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Check if name and email are filled
  if (name && email) {
    // Display success message
    messageDiv.style.display = 'block';
    messageDiv.style.backgroundColor = '#CCEECC';
    messageDiv.style.color = 'black';
    messageDiv.textContent =
      'Thank you for your interest in our workshop. We will send you a confirmation mail if your name is added to the guest list.';
  } else {
    // Show error message if name or email is empty
    messageDiv.style.display = 'block';
    messageDiv.style.backgroundColor = '#EECCCC';
    messageDiv.style.color = 'black';
    messageDiv.textContent = 'Please fill in your name and email';
  }
});

// Function to handle form reset
resetBtn.addEventListener('click', function () {
  // Clear all fields and hide message
  messageDiv.style.display = 'none';
  nameInput.value = '';
  emailInput.value = '';
});

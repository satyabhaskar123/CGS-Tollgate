document.addEventListener('DOMContentLoaded', function() {
  // Initialize the login toast
  const loginToast = new bootstrap.Toast(document.getElementById('loginToast'));


  // Example login form submission handling
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      // Simulate login validation (replace with real logic)
      if (email === 'admin@example.com' && password === 'password123') {
          handleLoginSuccess(); // Show success toast and redirect
      } else {
          alert('Login failed. Please try again.');
      }
      
  });
});

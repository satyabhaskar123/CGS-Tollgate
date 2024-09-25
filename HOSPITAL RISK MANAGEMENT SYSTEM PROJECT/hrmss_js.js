document.addEventListener('DOMContentLoaded', function() {

  const loginToast = new bootstrap.Toast(document.getElementById('loginToast'));


  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      
      if (email === 'admin@example.com' && password === 'password123') {
          handleLoginSuccess();
      } else {
          alert('Login failed. Please try again.');
      }
      
  });
});

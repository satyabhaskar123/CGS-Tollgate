document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const role = document.querySelector('input[name="role"]:checked').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'satyabhaskar2021@gmail.com' && password === 'Bhaskar@123') {
      const successToast = new bootstrap.Toast(document.getElementById('successToast'));
      successToast.show();

      setTimeout(function() {
          window.location.href = 'http://127.0.0.1:5500/HRMS/HRMS/HRMS.html#';
      }, 2000);
  } else {
      const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
      errorToast.show();
  }
});
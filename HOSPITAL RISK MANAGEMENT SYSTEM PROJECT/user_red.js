
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Password validation
    const passwordError = document.getElementById('passwordError');
    if (password !== confirmPassword) {
        passwordError.style.display = 'block';
        return;  // Stop form submission
    } else {
        passwordError.style.display = 'none';
    }

    // Display the result
    const resultBox = document.getElementById('resultBox');
    const resultText = document.getElementById('resultText');

    resultText.innerHTML = 
        `<strong>First Name:</strong> ${firstName}<br>
        <strong>Last Name:</strong> ${lastName}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Role:</strong> ${role}`;

    resultBox.style.display = 'block';
});

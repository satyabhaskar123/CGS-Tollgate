fetch('login_page.json')
  .then(response => response.json())
  .then(data => {
    
    const users = data.users;

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const role = document.querySelector('input[name="role"]:checked') ? document.querySelector('input[name="role"]:checked').value : null;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            const successToast = new bootstrap.Toast(document.getElementById('successToast'));
            successToast.show();

            setTimeout(function() {
                if (user.role === 'admin') {
                    window.location.href = 'hrms.html'; 
                } else if (user.role === 'user') {
                    window.location.href = 'user_dash.html'; 
                } else if (user.role === 'User') {
                    window.location.href = 'user_dash3.html';
                } else if (user.role === 'User') {
                    window.location.href = 'user_dash2.html'; 
                } else {
                    const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
                    errorToast.show();
                }
            }, 2000);
        } else {
            const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));
            errorToast.show();
        }
    });

    function displayUserProfile(user) {
        const profileContainer = document.createElement('div');
        profileContainer.innerHTML = `
            <h2>Welcome, ${user.name}</h2>
            <p>Age: ${user.profile.age}</p>
            <p>Occupation: ${user.profile.occupation}</p>
            <p>Department: ${user.profile.department}</p>
            <p>Experience: ${user.profile.experience}</p>
        `;
        document.body.innerHTML = '';
        document.body.appendChild(profileContainer);
    }
  })
  .catch(error => console.error('Error loading JSON:', error));

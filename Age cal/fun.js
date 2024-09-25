function calculateAge() {
  let year = parseInt(document.getElementById('birthYear').value);
  let month = parseInt(document.getElementById('birthMonth').value);
  let date = parseInt(document.getElementById('birthDate').value);

  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1; 
  let currentDate = today.getDate();

  let age = currentYear - year;

  
  if (currentMonth < month || (currentMonth === month && currentDate < date)) {
      age--;
  }

  let resultText = `You are ${age} years old.`;


  let body = document.body;
  if (age < 13) {
      body.className = "bg-child"; 
  } else if (age >= 13 && age < 20) {
      body.className = "bg-teen";  
  } else if (age >= 20 && age < 60) {
      body.className = "bg-adult";  
  } else {
      body.className = "bg-senior";
  }

  document.getElementById('result').textContent = resultText;
}

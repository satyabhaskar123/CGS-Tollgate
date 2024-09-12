function convertTemperature() {
  const tempInput = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unitSelect').value;

  if (isNaN(tempInput)) {
      alert('Please enter a valid number');
      return;
  }

  let celsius, fahrenheit, kelvin;

  switch (unit) {
      case 'celsius':
          celsius = tempInput;
          fahrenheit = (celsius * 9/5) + 32;
          kelvin = celsius + 273.15;
          break;
      case 'fahrenheit':
          fahrenheit = tempInput;
          celsius = (fahrenheit - 32) * 5/9;
          kelvin = celsius + 273.15;
          break;
      case 'kelvin':
          kelvin = tempInput;
          celsius = kelvin - 273.15;
          fahrenheit = (celsius * 9/5) + 32;
          break;
      default:
          break;
  }

  document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)}°C`;
  document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
  document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
}

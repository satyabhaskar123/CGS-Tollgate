// Function to change the background color dynamically
function changeBackground() {
  const colorPicker = document.getElementById('colorPicker');
  const selectedColor = colorPicker.value;
  document.body.style.backgroundColor = selectedColor;
}

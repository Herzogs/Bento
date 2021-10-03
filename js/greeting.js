// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Cristian Feldman';

// Here you can change your greetings
const gree1 = 'Go to Sleep!  ';
const gree2 = 'Good morning!  ';
const gree3 = 'Good afternoon  ';

// Define the hours of the greetings
if (hour >= 22 && hour < 6) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 22) {
  document.getElementById('greetings').innerText = gree3 + name;
}

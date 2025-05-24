let currentHour = 0;
let currentMinute = 0;
let clock = new Clock("clock");

function generateRandomTime() {
  currentHour = Math.floor(Math.random() * 12) + 1; // 1–12
  currentMinute = Math.floor(Math.random() * 12) * 5; // 0, 5, ..., 55
  clock.setTime(currentHour, currentMinute);
}

document.getElementById("new-time-btn").addEventListener("click", generateRandomTime);

document.getElementById("check-btn").addEventListener("click", () => {
  const inputHour = parseInt(document.getElementById("hour-input").value, 10);
  const inputMinute = parseInt(document.getElementById("minute-input").value, 10);

  if (inputHour === currentHour && inputMinute === currentMinute) {
    alert("Richtig! Gut gemacht! 🎉");
    generateRandomTime();
  } else {
    alert("Leider falsch! Versuch es nochmal.");
  }
});

// Beim Start einmal initialisieren
generateRandomTime();
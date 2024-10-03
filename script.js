// Durée du compte à rebours (19 heures 50 minutes)
const countdownDuration = 19 * 60 * 60 * 1000 + 50 * 60 * 1000;
const countdownElement = document.getElementById('countdown');
const trailerContainer = document.getElementById('trailer-container');

// Récupérer la fin du compte à rebours depuis le localStorage
let countdownEndTime = localStorage.getItem('countdownEndTime');

if (!countdownEndTime) {
  // Si c'est la première visite, on initialise le compte à rebours
  countdownEndTime = Date.now() + countdownDuration;
  localStorage.setItem('countdownEndTime', countdownEndTime);
} else {
  countdownEndTime = parseInt(countdownEndTime);
}

function updateCountdown() {
  const now = Date.now();
  const remainingTime = countdownEndTime - now;

  if (remainingTime <= 0) {
    // Le compte à rebours est terminé, lancer le trailer
    countdownElement.textContent = "Le compte à rebours est terminé!";
    showTrailer();
    return;
  }

  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;

  // Mise à jour du compte à rebours chaque seconde
  setTimeout(updateCountdown, 1000);
}

function showTrailer() {
  // Animation en fondu vers le trailer
  trailerContainer.classList.add('show');
  trailerContainer.classList.remove('hidden');
}

updateCountdown();

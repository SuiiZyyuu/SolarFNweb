// Vérifier si une date de fin est déjà stockée dans le localStorage
let countdownDate = localStorage.getItem("countdownDate");

if (!countdownDate) {
    // Définir la date de fin du compte à rebours (5 jours à partir de maintenant)
    countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 5);
    localStorage.setItem("countdownDate", countdownDate);
} else {
    countdownDate = new Date(countdownDate);
}

// Mettre à jour le compte à rebours toutes les secondes
let countdownInterval = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    // Calcul des jours, heures, minutes et secondes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Afficher les résultats
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si le compte à rebours est terminé
    if (distance < 0) {
        clearInterval(countdownInterval);
        localStorage.removeItem("countdownDate"); // Supprimer la date de fin
        document.getElementById("countdown").innerHTML = "SolarFN est disponible!";
    }
}, 1000);

document.addEventListener("DOMContentLoaded", () => {
    const introAnimation = document.getElementById('intro-animation');
    const mainContent = document.getElementById('shop');

    // Après l'animation d'intro
    setTimeout(() => {
        introAnimation.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
    }, 3000); // Correspond à la durée de l'animation CSS (3s)
});

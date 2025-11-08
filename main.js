document.addEventListener('DOMContentLoaded', () => {
    
    // --- Logica per il Menu Hamburger ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            hamburger.classList.toggle('is-active');
        });
    }

    // --- NUOVA Logica per l'Header allo Scroll ---
    const header = document.querySelector('header');
    
    if (header) {
        // Funzione per gestire il cambio classe
        function handleScroll() {
            // Se l'utente ha scrollato più di 10px
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        
        // Aggiungi l'event listener allo scroll
        window.addEventListener('scroll', handleScroll);
    }

}); // Fine DOMContentLoaded
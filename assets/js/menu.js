/**
 * Gestion du menu mobile et des fonctionnalités interactives
 * Christophe Millot - 2026
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. GESTION DU MENU MOBILE ---
    const burger = document.getElementById('js-burger');
    const menu = document.getElementById('js-nav-menu');

    if (burger && menu) {
        burger.addEventListener('click', () => {
            menu.classList.toggle('is-open');
            burger.classList.toggle('is-active');
        });
    }

    // --- 2. GESTION DE LA COPIE DES GRADIENTS ---
    const copyButtons = document.querySelectorAll('.btn-copy');

    if (copyButtons.length > 0) {
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                // On récupère le code CSS stocké dans le data-attribute
                const codeToCopy = button.getAttribute('data-code');

                if (codeToCopy) {
                    navigator.clipboard.writeText(codeToCopy).then(() => {
                        // Feedback visuel
                        const originalContent = button.innerHTML;
                        button.innerHTML = '<i class="fas fa-check"></i> Copié !';
                        button.classList.add('is-copied');

                        // Reset après 2 secondes
                        setTimeout(() => {
                            button.innerHTML = originalContent;
                            button.classList.remove('is-copied');
                        }, 2000);
                    }).catch(err => {
                        console.error('Erreur lors de la copie : ', err);
                    });
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;

            // Mostrar u ocultar detalles
            if (details.classList.contains('hidden')) {
                details.classList.remove('hidden');
                details.style.display = 'block';
            } else {
                details.classList.add('hidden');
                details.style.display = 'none';
            }
        });
    });
});

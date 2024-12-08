document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Alternar la visibilidad de la respuesta
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                answer.style.display = 'block';
            } else {
                answer.classList.add('hidden');
                answer.style.display = 'none';
            }
        });
    });

    // Manejar el envío del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Gracias por contactar con nosotros. Responderemos pronto.');
        contactForm.reset();
    });
});

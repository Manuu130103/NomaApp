// Selecciona todos los iconos de preferencias y restricciones
const preferenceIcons = document.querySelectorAll('.preference-icons .icon');
const restrictionIcons = document.querySelectorAll('.restriction-icons .icon');

// Función para alternar la clase 'selected' y guardar preferencias en localStorage
function toggleSelectedAndSave(icons, storageKey) {
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('selected');

            // Obtener las selecciones actuales
            const selectedItems = Array.from(icons)
                .filter(icon => icon.classList.contains('selected'))
                .map(icon => icon.dataset.filter);

            // Guardar las selecciones en localStorage
            localStorage.setItem(storageKey, JSON.stringify(selectedItems));
        });
    });
}

// Aplica la funcionalidad para guardar preferencias y restricciones
toggleSelectedAndSave(preferenceIcons, 'selectedPreferences');
toggleSelectedAndSave(restrictionIcons, 'selectedRestrictions');

// Cargar preferencias y restricciones guardadas al entrar en perfil.html
function loadSelections(icons, storageKey) {
    const savedSelections = JSON.parse(localStorage.getItem(storageKey)) || [];
    icons.forEach(icon => {
        if (savedSelections.includes(icon.dataset.filter)) {
            icon.classList.add('selected');
        }
    });
}

// Cargar selecciones guardadas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    loadSelections(preferenceIcons, 'selectedPreferences');
    loadSelections(restrictionIcons, 'selectedRestrictions');
});

// Elementos del DOM
const addContactBtn = document.getElementById('add-contact-btn');
const contactForm = document.getElementById('contact-form');
const contactInfo = document.getElementById('contact-info');
const contactNameDisplay = document.getElementById('contact-name-display');
const contactPhoneDisplay = document.getElementById('contact-phone-display');
const editContactBtn = document.getElementById('edit-contact-btn');

// Mostrar el formulario para añadir contacto
addContactBtn.addEventListener('click', () => {
    addContactBtn.classList.add('hidden');
    contactForm.classList.remove('hidden');
});

// Guardar contacto y mostrarlo
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('contact-name').value;
    const surname = document.getElementById('contact-surname').value;
    const phone = document.getElementById('contact-phone').value;

    // Mostrar la información guardada
    contactNameDisplay.textContent = `${name} ${surname}`;
    contactPhoneDisplay.textContent = `Teléfono: ${phone}`;
    contactInfo.classList.remove('hidden');

    // Ocultar el formulario
    contactForm.classList.add('hidden');

    // Mostrar el botón de editar
    editContactBtn.classList.remove('hidden');
});

// Editar contacto
editContactBtn.addEventListener('click', () => {
    contactInfo.classList.add('hidden');
    contactForm.classList.remove('hidden');
});

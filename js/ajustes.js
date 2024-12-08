// Guardar configuración de filtros
const filters = document.querySelectorAll('.filters input[type="checkbox"]');
filters.forEach(filter => {
    filter.addEventListener('change', () => {
        const selectedFilters = Array.from(filters)
            .filter(f => f.checked)
            .map(f => f.id);

        // Guardar filtros seleccionados en localStorage
        localStorage.setItem('selectedPreferences', JSON.stringify(selectedFilters));
        console.log('Filtros guardados:', selectedFilters);
    });
});

// Guardar idioma seleccionado
const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    localStorage.setItem('selectedLanguage', selectedLanguage);
    console.log('Idioma guardado:', selectedLanguage);
});

// Guardar tema seleccionado
const themeOptions = document.querySelectorAll('.theme-options input[type="radio"]');
themeOptions.forEach(option => {
    option.addEventListener('change', () => {
        const selectedTheme = document.querySelector('.theme-options input[type="radio"]:checked').value;
        localStorage.setItem('selectedTheme', selectedTheme);
        console.log('Tema guardado:', selectedTheme);

        // Cambiar tema (claro/oscuro)
        document.body.className = selectedTheme;
    });
});

// Guardar estado de notificaciones
const notificationsToggle = document.getElementById('notifications-toggle');
notificationsToggle.addEventListener('change', () => {
    const notificationsEnabled = notificationsToggle.checked;
    localStorage.setItem('notificationsEnabled', notificationsEnabled);
    console.log('Notificaciones:', notificationsEnabled ? 'Activadas' : 'Desactivadas');
});


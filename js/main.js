// Inicializar el mapa interactivo con Leaflet
const map = L.map('map').setView([40.416775, -3.703790], 14); // Madrid (por defecto)

// Cargar tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Obtener ubicación actual del usuario
navigator.geolocation.getCurrentPosition(
    (position) => {
        const { latitude, longitude } = position.coords;
        const userMarker = L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Estás aquí')
            .openPopup();
        map.setView([latitude, longitude], 14); // Centrar en la ubicación del usuario
    },
    (error) => {
        console.error('Error obteniendo la ubicación:', error);
    }
);

// Funcionalidad de búsqueda utilizando Nominatim
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                const { lat, lon, display_name } = data[0];

                // Centrar el mapa en el resultado de la búsqueda
                map.setView([lat, lon], 14);

                // Añadir un marcador en la ubicación buscada
                L.marker([lat, lon]).addTo(map).bindPopup(display_name).openPopup();
            } else {
                alert('No se encontraron resultados.');
            }
        })
        .catch((error) => console.error('Error en la búsqueda:', error));
});

// Sidebar funcional
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Cargar preferencias guardadas al entrar en index.html
document.addEventListener('DOMContentLoaded', () => {
    const savedPreferences = JSON.parse(localStorage.getItem('selectedPreferences')) || [];

    const filterIcons = document.querySelectorAll('.filters .icon');
    filterIcons.forEach((icon) => {
        if (savedPreferences.includes(icon.dataset.filter)) {
            icon.classList.add('selected');
        }
    });
});

// Alternar selección de filtros
const filterIcons = document.querySelectorAll('.filters .icon');
filterIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('selected');
        const filter = icon.dataset.filter;
        console.log(`Filtro ${filter} ${icon.classList.contains('selected') ? 'activado' : 'desactivado'}`);
    });
});

// Notificación emergente
document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('notification');

    // Mostrar notificación 15 segundos después de cargar la página
    setTimeout(() => {
        notification.classList.remove('hidden');
        notification.classList.add('visible');

        // Ocultar notificación después de 5 segundos
        setTimeout(() => {
            notification.classList.remove('visible');
            notification.classList.add('hidden');
        }, 5000); // 5 segundos
    }, 15000); // 15 segundos
});


// Simular notificaciones
function simulateNotifications() {
    const notifications = [
        "Rampas bloqueadas en Calle Sevilla.",
        "Obras en Calle Logroño.",
        "Ascensor fuera de servicio en Calle Mayor."
    ];

    const notificationList = document.getElementById('notification-list');
    notificationList.innerHTML = ""; // Limpia las notificaciones previas

    notifications.forEach((notif) => {
        const li = document.createElement('li');
        li.textContent = notif; // Asegúrate de que se añade el texto
        notificationList.appendChild(li);
    });

    // Actualizar contador
    const notificationCount = document.getElementById('notification-count');
    notificationCount.textContent = notifications.length;
}

// Llama a las notificaciones simuladas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    simulateNotifications();
});

// Mostrar/ocultar el panel de notificaciones al hacer clic en el icono
const notificationIcon = document.getElementById('notification-icon');
const notificationPanel = document.getElementById('notification-panel');

notificationIcon.addEventListener('click', () => {
    notificationPanel.classList.toggle('hidden');
});

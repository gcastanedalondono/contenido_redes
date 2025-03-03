const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}

document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Tratamiento de cejas y pestañas', imgSrc: 'beneficio_pestanas.jpg', description: "Un tratamiento para cejas y pestañas, precio: $15.000", pageUrl: 'tratamiento_pestañas.html' },
        { id: 2, title: 'Aceites de coco virgen prensado en frío', imgSrc: 'uso_pestañas.png', description: "Aceite de coco prensado en frío, precio: $28.000", pageUrl: 'aceite_de_coco.html' }
    ];

    const gallery = document.querySelector('.gallery');

    // Generar los elementos de la tienda para los primeros dos ítems
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        
        // Crear un enlace (a) para redirigir a la página correspondiente
        const anchor = document.createElement('a');
        anchor.href = item.pageUrl;  // URL a la página del producto
        anchor.classList.add('item-link');  // Añadir una clase para estilos (opcional)
        
        // Crear enlace para descargar la imagen
        const downloadLink = document.createElement('a');
        downloadLink.href = item.imgSrc;  // Ruta de la imagen
        downloadLink.download = item.imgSrc;  // El atributo download le indica que descargue la imagen
        downloadLink.classList.add('download-link');  // Añadir una clase para los estilos de la descarga

        downloadLink.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">
            <div class="item-title">${item.title}</div>
            <span class="download-text">Descargar Imagen</span>
        `;

        // Agregar el enlace de descarga y el enlace de la tienda a la galería
        div.appendChild(downloadLink);
        gallery.appendChild(div);
    });
});
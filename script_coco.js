const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}

document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Aceite de coco de 450ml', imgSrc: '450ml.png' },
        { id: 2, title: 'Aceite de coco de 230ml', imgSrc: '230ml.png' },
        { id: 3, title: 'Aceite de coco de 950ml', imgSrc: '950ml.png' },
        { id: 4, title: 'Aceite de coco de 100ml', imgSrc: '100ml.png' },
        { id: 5, title: 'Aceite de coco y perros', videoSrc: '100ml.png' }
        


       

       
    ];

    const gallery = document.querySelector('.gallery');

    // Generar los elementos de la tienda para los ítems
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        
        // Crear enlace para descargar la imagen
        const downloadLink = document.createElement('a');
        downloadLink.href = item.imgSrc;  // Ruta de la imagen
        downloadLink.download = item.imgSrc.split('/').pop();  // Descargar la imagen con su nombre original
        downloadLink.classList.add('download-link');  // Añadir una clase para los estilos de la descarga

        downloadLink.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">
            <div class="item-title">${item.title}</div>
            <span class="download-text">Descargar Imagen</span>
        `;

        // Agregar el enlace de descarga a la galería
        div.appendChild(downloadLink);
        gallery.appendChild(div);
    });
});
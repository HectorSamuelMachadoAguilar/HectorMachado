document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const enviarFetchButton = document.getElementById('enviarFetch');

    enviarFetchButton.addEventListener('click', () => {
        const formData = new FormData(form);

        fetch('/Formulario', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Maneja la respuesta del servidor aquí
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

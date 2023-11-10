const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');
const multer = require('multer');
const multiparty = require('multiparty');
const app = express();

// Configura body-parser para manejar application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para recibir el formulario con application/x-www-form-urlencoded
app.post('/Formulario', (req, res) => {
    // Procesa los datos del formulario aquí
    const formData = req.body;
    console.log(formData);
    res.json({ message: 'Formulario recibido (x-www-form-urlencoded)' });
});

// Ruta para recibir el formulario con multipart/form-data usando formidable
app.post('/Formulario', (req, res) => {
    const form = new formidable.IncomingForm();
    
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al procesar el formulario' });
        }
        console.log(fields); // Datos del formulario
        console.log(files);  // Archivos adjuntos, si los hay
        res.json({ message: 'Formulario recibido (formidable)' });
    });
});

// Ruta para recibir el formulario con multipart/form-data usando multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/Formulario', upload.any(), (req, res) => {
    console.log(req.body); // Datos del formulario
    console.log(req.files); // Archivos adjuntos, si los hay
    res.json({ message: 'Formulario recibido (multer)' });
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

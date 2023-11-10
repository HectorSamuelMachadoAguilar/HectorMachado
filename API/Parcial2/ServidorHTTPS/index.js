const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
const port = 443; // Puerto HTTPS predeterminado

// Cargar los archivos key.pem y cert.pem
const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo seguro!');
});

// Crear el servidor HTTPS
const server = https.createServer(options, app);

// Iniciar el servidor en el puerto 443
server.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
const express = require('express');
const tec = require('./tec.js');
const app = express();

app.use('/tec',tec.router);
app.listen(8084,function(err){
    if(err) console.log(err);
    console.log("Servidor escuchado en el puerto 8084")
})
const express = require('express');
const app = express();

app.get("/alumnos",(req,res)=>{
    res.json(respuesta,"contestando a peticion get en ruta empleado");
})

app.post("/alumnos",(req,res)=>{
    res.send("contestando a peticion post en ruta empleado");
})

app.listen(8080,()=>{
    console.log("server express escuchando en el puerto 8080");
})
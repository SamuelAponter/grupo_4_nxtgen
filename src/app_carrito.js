const express = require('express');
const path =   require('path');
const app = express();


app.use(express.static(path.resolve(__dirname, '../public')));


app.get('/carrito', (req, res) =>{
    res.sendFile(path.join(__dirname, './views/carrito-compras.html'))
})

app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'))
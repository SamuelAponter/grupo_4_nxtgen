
const express = require('express');
const app = express();


const path = require('path')

const publicPath = path.resolve(__dirname, './public')
app.use(express.static(publicPath))


app.listen(3000,() => {
    console.log("Funciona en el 3000");
});


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'))
})
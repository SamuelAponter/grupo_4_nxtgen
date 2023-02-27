
const express = require('express');
const app = express();


const path = require('path')





app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});

const publicPath = path.resolve(__dirname,'public')
app.use(express.static(publicPath));

app.listen(3000,() => {
    console.log("Funciona en el 3000");
});
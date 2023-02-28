
const express = require('express');
const app = express();


const path = require('path')

app.use(express.static(path.join(__dirname, "../public")));



app.listen(3000,() => {
    console.log("http://localhost:3000");
});


/* app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
}) */
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/formulario.html'))
})
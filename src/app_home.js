const express = require("express");

const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res)=> {
    res.sendFile (path.join(__dirname, "../src/views/home.html"));

       
})

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000")
});
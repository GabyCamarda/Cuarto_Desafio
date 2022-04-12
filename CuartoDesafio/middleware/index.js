const express = require("express");

const app = express();

// middlewares a nivel de aplicacion
app.use(function (req, res, next) {
    console.log("Se ejecuto alguna ruta");
    next();
})

app.get("/", (req, res) => {
    res.json({ message: "ok", data: "Hola" });
});

app.get("/home", (req, res) => {
    res.json({ message: "ok", data: "Hola home" });
});


app.listen(8080, () => {
    console.log("app running on port 8080");
})
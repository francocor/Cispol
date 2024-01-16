const express = require('express');


//     ---- MODULOS ----     //

const logger = require("morgan");
const compression =require("compression");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
const login = require ('./rutas/login')
const productos = require('./rutas/productos')



app.use(bodyParser.json());
app.use(compression());
app.use(logger("dev")); 
app.use(cors())



app.use("/login", login)
app.use("/productos",productos)


app.get("/", (req, res) => {
    res.send("Welcome <br/> Franco CornejoWeb Dev<br> ");
});


app.listen(8000, () => {
    console.log("escuchando en el puerto",8000);
});
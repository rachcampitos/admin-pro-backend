const express = require("express");

require("dotenv").config();

var cors = require("cors");

const { dbConnection } = require("./database/config");

//Crear el servidor de express
const app = express();
//DB Connection
dbConnection();
//Config CORS
app.use(cors());

//Rutas
app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "Hola Mundo",
  });
});

app.listen(process.env.PORT, () => {
  console.log("server corriendo en puerto " + process.env.PORT);
});

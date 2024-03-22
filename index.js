const express = require("express");

require("dotenv").config();

var cors = require("cors");

const { dbConnection } = require("./database/config");

//Crear el servidor de express
const app = express();
//Config CORS
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
//DB Connection
dbConnection();

//Rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/hospitales", require("./routes/hospitales"));
app.use("/api/medicos", require("./routes/medicos"));
app.use("/api/todo", require("./routes/busquedas"));
app.use("/api/upload", require("./routes/uploads"));

app.use("/api/login", require("./routes/auth"));

/* app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "Hola Mundo",
  });
}); */

app.listen(process.env.PORT, () => {
  console.log("server corriendo en puerto " + process.env.PORT);
});

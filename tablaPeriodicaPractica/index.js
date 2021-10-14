const express = require('express');

const morgan = require('morgan');

const link = require("./routes/routes");

const db = require("./models/index")



const app = express();

db.sequelize.sync();

/* db.sequelize.sync({force:true}).then ( () =>{
    console.log('Tablas restablecidas')
}); */



app.use("/tablaperiodica", link)

app.listen(3000, () => {
    console.log("Servidor esta corriendo en el puerto", 3000)
});
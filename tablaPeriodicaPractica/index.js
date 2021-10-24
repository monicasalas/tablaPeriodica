const express = require('express');

const morgan = require('morgan');

const link = require("./routes/routes");

const fileUpload = require('express-fileupload')

const db = require("./models/index")



const app = express();

db.sequelize.sync();

 /* db.sequelize.sync({force:true}).then ( () =>{
    console.log('Tablas restablecidas')
}); */ 

app.use(morgan("dev"));

app.use(express.json({limit : "50mb"}));

app.use(fileUpload());

app.use("/tablaperiodica", link);

app.use("/images", express.static(__dirname + "/public"))

app.listen(3000, () => {
    console.log("Servidor esta corriendo en el puerto", 3000)
});
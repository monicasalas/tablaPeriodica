const db = require("../models/index");

const Sequelize = require('sequelize');

const element = db.element;


exports.createElements = async(req, res) => {
   try{
        const {body} = req;
        console.log("Entramos a la función")
        if(!body.nameE)
            return res.status(404).send({message:'nameE es requerido'})
        if(!body.symbol)
            return res.status(404).send({message:'symbol es requerido'})
        if(!body.atomicNumber)
            return res.status(404).send({message: 'atomicNumber es requerido'})
        if(!body.atomicMass)
            return res.status(404).send({message:'atomicMass es requerido'})
        
        const create = await element.create({
            nameE:body.nameE,
            symbol:body.symbol,
            atomicNumber:body.atomicNumber,
            atomicMass: body.atomicMass
        });

        return res.status(201).send({message:'Elemento creado correctamente'});

    } catch(error){
        console.log(error)
        return res.status(500).send(error.message)      
   }
};
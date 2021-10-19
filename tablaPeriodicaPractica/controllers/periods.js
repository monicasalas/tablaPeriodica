const db = require("../models/index");

const Sequelize = require("sequelize");

const period = db.period;

exports.createPeriod = async(req, res) =>{

    try {
        const {body}   = req;
        if(!body.layers)
            return res.status(404).send({message:'layers es requerido'})

        const create = await period.create({
            layers:body.layers,
        })

        return res.status(201).send({message:'Periodo creado correctamente'})

    } catch (error) {
        return res.status(500).send(error.message)
    }

};

exports.getPeriods = async(req, res) =>{

    try {
        console.log("Si estoy en la función")
        const find = await period.findAll({
            where:{statusDelete:false},
        });
        return res.status(200).send(find)
    } catch (error) {
        return res.status(500).send(message.error);
    }


};

exports.updatePeriod = async(req, res) =>{

    try {
        console.log("Si estoy en la función")
        const {body, params} = req;
        
        if(!body)
            return res.status(400).send({message:'Los datos son requeridos'})
        if(!body.layers)
            return res.status(400).send({message:'layers es requerido'})

        const validate = await period.findOne({
            where:{id:params.id},
        }) 

        if(!validate) return res.status(404).send({message:'No se encontró el periodo'})
        if(validate.statusDelete===true)
            return res.status(404).send({message:'No se encontró el periodo'})

        validate.layers =body.layers,

        validate.save()

        return res.status(202).send({message:'Periodo se actualizó correctamente'})

    } catch (error) {
        console.log(error)
        return res.status(500).send(message.error)
        
    }

};

exports.deletePeriod = async(req, res) =>{

    try {
        
        const {id} = req.params

        const find = await period.findByPk(id);

        if(!find) return res.status(404).send({message:'No se encontró el periodo'})
        if(find.statusDelete===true)
            return res.status(404).send({message:'No se encontró el periodo'})
        
        find.statusDelete = true;
        find.save()

        return res.status(200).send({message:'Periodo eliminado correctamente'})

    } catch (error) {
        return res.status(500).send(message.error)
    }

};
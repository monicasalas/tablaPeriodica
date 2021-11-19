const db = require("../models/index");

const Sequelize = require("sequelize");


const group = db.group;
const element = db.element;

exports.createGroup = async(req, res) =>{
    try {
        const{body} = req;

        if(!body.valenceElectrons)
            return res.status(404).send({message:'valenceElectrons es requerido'});
        
        const create = await group.create({
            valenceElectrons:body.valenceElectrons,
        });

        return res.status(201).send({message:"Grupo creado correctamente"});

    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }
};

exports.getGroups = async(req, res) =>{ 

    try {
        const find = await group.findAll({
            where:{statusDelete:false},
            attributes: ['id', 'valenceElectrons'],
            order:[
                ['valenceElectrons', 'ASC']
            ]
        });
        return res.status(200).send(find)
    } catch (error) {
        return res.status(500).send(message.error);
    }

};

exports.updateGroup = async(req, res) =>{

    try {

        const { body,params } = req

        if(!body) return res.status(400).send({message:"Los datos son requeridos"})
        if(!body.valenceElectrons) return res.status(400).send({message:"valenceElectrons es requerido"})

        const validate = await group.findOne({
            where:{ id:params.id,  statusDelete:false},
        });

        if(!validate) return res.status(404).send({message:"No se encontró el grupo"})
        if(validate.statusDelete===true)
            return res.status(404).send({message:"No se encontró el grupo"})
        validate.valenceElectrons = body.valenceElectrons;
        validate.save()

        return res.status(202).send({message:"Grupo se actualizó correctamente"})

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.deleteGroup = async(req, res) =>{

    try {

        const {id} = req.params

        const find = await group.findByPk(id);

        if(!find) return res.status(404).send({message:'No se encontró el grupo'})
        if(find.statusDelete===true)
            return res.status(404).send({message:'No se encontró el grupo'})
        
        find.statusDelete = true;
        find.save();
        
        return res.status(200).send({message:'Grupo eliminado correctamente'})
        
    } catch (error) {
        return res.status(500).send(message.error)
    }

};
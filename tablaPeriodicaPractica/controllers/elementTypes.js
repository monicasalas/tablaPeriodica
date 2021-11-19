const db = require("../models/index");

const Sequelize = require("sequelize");

const elementType = db.elementType
const element = db.element

exports.createElementTypes = async(req, res) => {
    try {
        const {body} = req;

        if(!body.elementType)
            return res.status(404).send({message:'elementType es requerido'})
        
        const create = await elementType.create({

            elementType:body.elementType

        });

        return res.status(201).send({message:'Tipo de elemento creado correctamente'});

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

exports.getElementTypes = async(req, res) =>{

    try {
        const find = await elementType.findAll({
            where:{statusDelete:false},
            attributes:['id', 'elementType'],
           order:[
                ['id', 'ASC']
            ] 
            
        });
        return res.status(200).send(find)
    } catch (error) {
        return res.status(500).send(message.error)
    }

};

exports.updateElementType = async(req,res) =>{

    try {
        const {body, params} = req;
        if(!body)
            return res.status(400).send({message:'Los datos son requeridos'})
        if(!body.elementType)
            return res.status(400).send({message:'elementType es requerido'})

        const validate = await elementType.findOne({
            where:{id: params.id, statusDelete:false},
        })

        if(!validate) return res.status(404).send({message:'No se encontró el tipo de elemento'})
        if(validate.statusDelete===true)
            return res.status(400).send({message:'No se encontró el tipo de elemento'})

        validate.elementType = body.elementType,

        validate.save()

        return res.status(202).send({message:'Tipo de elemento se actualizó correctamente'})
            
    } catch (error) {
        return res.status(500).send(message.error)
    }
};

exports.deleteElementType = async(req, res) =>{
    try {
        const {id} = req.params

        const find = await elementType.findByPk(id)

        if(!find) return res.status(404).send({message:'No se encontró el tipo de elemento'})
        if(find.statusDelete===true)
            return res.status(404).send({message:'No se encontró el tipo de elemento'})

        find.statusDelete=true;
        find.save();

        return res.status(200).send({message:'Tipo de elemento eliminado correctamente'})

    } catch (error) {
        return res.status(500).send(message.error)
    }
};
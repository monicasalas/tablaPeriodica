const db = require("../models/index");

const Sequelize = require("sequelize");

const bcrypt = require('bcryptjs')

const user = db.user

exports.createUsers = async(req, res) =>{
    try {
        const {body} = req;
        
        if(!body.name)
            return res.status(404).send({message:'name es requerido'})
        if(!body.lastName)
            return res.status(404).send({message:'lastName es requerido'})
        if(!body.email)
            return res.status(404).send({message:'email es requerido'})
        if(!body.password)
            return res.status(404).send({message:'password es requerido'}) 
        
        let encriptedPassword = bcrypt.hashSync(body.password, 10)

        console.log('el hash a guardar', encriptedPassword)

        const create = await user.create({
            name:body.name,
            lastName: body.lastName,
            email:body.email,
            password:encriptedPassword,
        })
        return res.status(201).send({message:'Usuario creado correctamente'});
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }
};

exports.getUsers = async(req, res) =>{

    try {
        const find = await user.findAll({
            where:{statusDelete:false},
        });
        return res.status(200).send(find)
    } catch (error) {
        return res.status(500).send(message.error)
    }

};

exports.updateUser = async(req, res) =>{

    try {
        
        const {body,params}=req;
        if(!body)
            return res.status(400).send({message:"Los datos son requeridos"})
        if(!body.name)
            return res.status(404).send({message:'name es requerido'})
        if(!body.lastName)
            return res.status(404).send({message:'lastName es requerido'})
        if(!body.email)
            return res.status(404).send({message:'email es requerido'})

        const validate = await user.findOne({
            where:{id : params.id, statusDelete:false},
        })

        if(!validate) return res.status(404).send({message:'No se encontró el usuario'})
        if(validate.statusDelete===true)
            return res.status(404).send({message:'No se encontró el usuario'})
        
        validate.name=body.name,
        validate.lastName=body.lastName,
        validate.email=body.email,

        validate.save()

        return res.status(202).send({message:'Usuario se actualizó correctamente'})

    } catch (error) {
        return res.status(500).send(message.error);
    }

};

exports.deleteUser = async(req, res) =>{

    try {
        const {id} = req.params

        const find = await user.findByPk(id);

        if(!find) return res.status(404).send({message:'No se encontro el usuario'})
        if(find.statusDelete===true)
            return res.status(404).send({message:'No se encontró el miembro'})

        find.statusDelete = true;
        find.save();
        
        return res.status(200).send({message:'Usuario eliminado correctamente'})

    } catch (error) {
        return res.status(500).send(message.error)
    }

};
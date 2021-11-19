//Login
const jws = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const db = require("../models/index");
const user = db.user

const privateKey = 'Llav3PrivAda321.'

const {expireIn} = '1h'

exports.login=async(req,res) =>{
    try {
        
        const {body} = req;

        if(!body.email) return res.status(404).send({message:'Email es requerido'});
        if(!body.password) 
            return res.status(404).send({message:'Password es requerida'});
             
        const userLog = await user.findOne({
            where:{
                email: body.email,
                statusDelete:false,
            }
        });
        
        if(!userLog)return res.status(404).send({message:'Credenciales incorrectas'});

        if(!bcrypt.compareSync(body.password, userLog.password)) 
            return res.status(400).send({message:'Credenciales incorrectas'});

        const response = {
            id:userLog.id,
            name: userLog.name,
            lastname:userLog.lastName,
            //rol : 3,
        };
        //token
        let token = jws.sign({
        //data
            user : response,
        }, 
        //llave privada
        privateKey, 
        //tiempo de expiración
        expireIn,
        );
        return res.status(200).send({
            user : response,
            token,
        })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
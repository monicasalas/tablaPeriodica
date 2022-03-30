const db = require("../models/index");

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const upLoadImage = require("../utils/uploadImage");
const { and } = require("sequelize");

const element = db.element;

const elementType = db.elementType;
const group = db.group;
const period = db.period;

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
        if(!body.groupId)
            return res.status(400).send({message:'groupId es requerido'})
        if(!body.periodId)
            return res.status(400).send({message:'periodId es requerido'})
        if(!body.elementTypeId)
            return res.status(400).send({message:'elementTypeId es requerido'})
        
        const findGroup = await group.findOne({
            where:{id:body.groupId, statusDelete:false}
        })

        if(!findGroup) return res.status(404).send({message:'Group no encontrado'})

        const findPeriod = await period.findOne({
            where:{id:body.periodId, statusDelete:false}
        })

        if(!findPeriod) return res.status(404).send({message:'Period no encontrado'})

        const findTypeElement = await elementType.findOne({
            where:{id:body.elementTypeId, statusDelete:false}
        })
        

        if(!findTypeElement) return res.status(404).send({message:'Type Element no encontrado'})
        
        
        let imagen = await upLoadImage.fileUpload(body.image, "/images");
        
        const create = await element.create({
            nameE:body.nameE,
            symbol:body.symbol,
            atomicNumber:body.atomicNumber,
            atomicMass: body.atomicMass,
            groupId:body.groupId,
            periodId:body.periodId,
            elementTypeId:body.elementTypeId,
            image:imagen,

        });

        return res.status(201).send({message:'Elemento creado correctamente'});

    } catch(error){
        console.log(error)
        return res.status(500).send(error.message)      
   }
};

exports.getElements = async(req, res) => {
    //Búsqueda con parámetros / Query
    try{
        const {valenceE} = req.query;
        const {layer} = req.query;
        const {typeEle} = req.query;

        if(valenceE){
            const find = await element.findAll({
                where:{statusDelete:false},
                attributes:['nameE', 'symbol', 'atomicNumber', 'atomicMass'],
                order:[
                    ['atomicNumber', 'ASC']
                ],
                include:{
                    model:group,
                    attributes: ['id', 'valenceElectrons'],
                    where:{ valenceElectrons: { [Op.eq]: valenceE}},
                    },
            });
            return res.status(200).send(find)
        }

        if(layer){
            const find = await element.findAll({
                where:{statusDelete:false},
                attributes:['nameE', 'symbol', 'atomicNumber', 'atomicMass'],
                order:[
                    ['atomicNumber', 'ASC']
                ],
                include:{
                    model: period,
                    attributes:['id', 'layers'],
                    where:{ layers: { [Op.iRegexp]: layer}}
                    } ,
            });

            return res.status(200).send(find)
        }

        if(typeEle){
            const find = await element.findAll({
                where:{statusDelete:false},
                attributes:['nameE', 'symbol', 'atomicNumber', 'atomicMass'],
                order:[
                    ['atomicNumber', 'ASC']
                ],
                include:{
                    model:elementType,
                    attributes:['id', 'elementType'],
                    where:{ elementType: { [Op.iRegexp]: typeEle}}
                    }, 
            });

            return res.status(200).send(find)
        }
        //Búsqueda básica
        const find = await element.findAll({
            where:{statusDelete:false},
            attributes:['nameE', 'symbol', 'atomicNumber', 'atomicMass', 'statusDelete'],
            order:[
                ['atomicNumber', 'ASC']
            ],
            
            include:[
                {model:elementType,
                attributes:['elementType']},
                {model: period,
                attributes:['id', 'layers']},
                {model: group,
                attributes:['valenceElectrons']}
                
            ]
        });
        return res.status(200).send(find)
    }catch(error){
        console.log(error)
        return res.status(500).send(message.error)
        
    }
};

exports.updateElement = async(req, res) =>{
    try {
        const { body, params } = req;
        if(!body)
            return res.status(400).send({message:'Los datos son requeridos'})
        if(!body.nameE)
            return res.status(400).send({message:'nameE del elemento es requerido'})
        if(!body.symbol)
            return res.status(400).send({message:'symbol es requerido'})
        if(!body.atomicNumber)
            return res.status(400).send({message:'atomicNumber es requerido'})
        if(!body.atomicMass)
            return res.status(400).send({message:'atomicMass es requerido'})
       

        const validate = await element.findOne({
            where:{id: params.id, statusDelete:false},
        })

        if(!validate) return res.status(404).send({message: 'No se encontró el elemento' })
        if(validate.statusDelete===true)
            return res.status(404).send({message:'No se encontré el elemento'})
        
        validate.nameE = body.nameE,
        validate.symbol = body.symbol,
        validate.atomicNumber = body.atomicNumber,
        validate.atomicMass = body.atomicMass

        validate.save()

        return res.status(202).send({message:'Elementos se actualizó correctamente'})

    } catch (error) {
        return res.status(500).send(message.error);
    }
};

exports.deleteElement = async(req, res) =>{
    try {
        const {id} = req.params

        const changeS = await element.findByPk(id);

        if(!changeS) return res.status(404).send({message:'No se encontró el elemento'})
        if(changeS.statusDelete===true)
            return res.status(404).send({message:'No se encontró el elemento'})
        
        changeS.statusDelete = true;
        changeS.save();

        return res.status(200).send({message:'No se encontró el elemento'})

    } catch (error) {
        return res.status(500).send(message.error)
    }
};
module.exports = (sequelize, Sequelize) =>{

    const Element = sequelize.define('element',{
        nameE:{
            type : Sequelize.STRING,
        },
       
        symbol:{
            type : Sequelize.STRING,
        },

        atomicNumber:{
            type : Sequelize.INTEGER,
        },
        
        atomicMass : {
            type : Sequelize.FLOAT
        },

        image:{
            type: Sequelize.STRING,
        },

        statusDelete : {
            type : Sequelize.BOOLEAN,
            defaultValue: false,
        },

    });

    return Element;

}
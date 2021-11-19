module.exports = (sequelize, Sequelize)=>{
    const Period = sequelize.define('period',{

        layers:{
            type:Sequelize.STRING,
        },

        statusDelete:{
            type:Sequelize.BOOLEAN,
            defaultValue: false,
        },

    });

    return Period;
}
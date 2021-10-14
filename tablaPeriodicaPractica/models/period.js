module.exports = (sequelize, Sequelize)=>{
    const Period = sequelize.define('period',{

        layers:{
            type:Sequelize.INTEGER,
        },

        statusDelete:{
            type:Sequelize.BOOLEAN,
            defaultValue: false,
        },

    });

    return Period;
}
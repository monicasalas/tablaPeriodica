module.exports = (sequelize, Sequelize)=>{
    const Group = sequelize.define('group',{

        valenceElectrons:{
            type:Sequelize.INTEGER,
        },

        statusDelete:{
            type:Sequelize.BOOLEAN,
            defaultValue: false,
        },

    });

    return Group;
}
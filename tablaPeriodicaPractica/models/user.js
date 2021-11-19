module.exports = (sequelize, Sequelize)=>{

    const User = sequelize.define('user', {
        name:{
            type: Sequelize.STRING,
        },
        lastName : {
            type:Sequelize.STRING,
        },
        email:{
            type: Sequelize.STRING,
            uninque:true,
        },

        password:{
            type: Sequelize.STRING,
        },
        rol:{
            type: Sequelize.INTEGER,
        },

        statusDelete:{
            type:Sequelize.BOOLEAN,
            defaultValue:false,
        },
    });

    return User;

}
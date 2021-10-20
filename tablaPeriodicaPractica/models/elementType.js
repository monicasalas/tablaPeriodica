module.exports = (sequelize, Sequelize) => {
    const ElementType = sequelize.define('elementType',{
        elementType:{
            type : Sequelize.STRING,
        },
        statusDelete:{
            type : Sequelize.BOOLEAN,
            defaultValue: false,
        }
    });
    return ElementType;
}
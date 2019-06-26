module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Profession = app.model.define('profession', { //sequelize会自动创建主键
        name: STRING,
    })
    
    return Profession
    ;
}
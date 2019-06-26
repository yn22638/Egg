module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Clazz = app.model.define('clazz', { //sequelize会自动创建主键
        name: STRING,
    })
    Clazz.associate = function () {
        app.model.Clazz.belongsTo(app.model.Teacher, {  //设置外键
            foreignKey: 'clazz_id',
            as: 'teacher'
        })
    }
    return Clazz;
}
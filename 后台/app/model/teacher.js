module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Teacher = app.model.define('teacher', { //sequelize会自动创建主键
        name: STRING,
        gender:STRING,
        department:STRING,
        clazz:STRING,
        faculty:STRING,
    })
    Teacher.associate = function () {
        app.model.Teacher.belongsTo(app.model.Profession, {  //设置外键
            foreignKey: 'clazz_id',
            as: 'profession'
        })
    }
    return Teacher;
}
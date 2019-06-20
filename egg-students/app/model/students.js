module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Students = app.model.define('students', {
        name: STRING,
        gender:STRING,
        tms:STRING,
    })

    Students.associate = function () {
        app.model.Students.belongsTo(app.model.Clazz, {  //设置外键
            foreignKey: 'clazz_id',
            as: 'clazz'
        })
    }

    return Students;
}
module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Grade = app.model.define('grade', {
        name: STRING,
        clazz:STRING,
        grade:STRING,
    })

    Grade.associate = function () {
        app.model.Grade.belongsTo(app.model.Students, {  //设置外键
            foreignKey: 'students_id',
            as: 'students'
        })
    }

    return Grade;
}
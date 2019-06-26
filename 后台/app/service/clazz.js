const Service = require("egg").Service;

class HomeService extends Service {
  async getclazzlist() {
    const clazzlist = await this.app.model.Clazz.findAll();
    return clazzlist;
  }
  async careatclazz() {
    let name = this.ctx.request.body.name;
    const clazz = {
      name: name
    };
    await this.app.module.Clazz.created(clazz);
    const clazzlist = await this.app.model.Clazz.findAll();
    return clazzlist;
  }
  async deleteclazz() {
    let id = this.ctx.params.id;
    const clazz = await this.app.model.Clazz.findOne({
      where: {
        id: id
      }
    });
    const student = await this.app.model.Student.findAll({
      include: [
        {
          model: this.app.model.Clazz,
          as: "clazz"
        }
      ],
      where: {
        clazz_id: id
      }
    });
    const clazzlist = await this.app.model.Clazz.findAll();
    if (student[0]) {
      let tips = "班级中有学生，不可删除班级";
      return tips;
    } else {
      clazz.destroy();
      return clazzlist;
    }
  }
  async putclazz() {
    let id = this.ctx.params.id;
    let putclazzname = this.ctx.request.body.putclazzname;
    let row = {
        name: putclazzname
      },
      options = {
        where: {
          id: id
        }
      };
    await this.app.model.Clazzj.update(row, options);
    const clazzlist = await this.app.model.Clazz.findAll();
    return clazzlist;
  }
}

module.exports = HomeService;

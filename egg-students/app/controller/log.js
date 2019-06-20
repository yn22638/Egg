'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async login() {
        // const md5=require('md5-node');

        let body = this.ctx.request.body;
        console.log(body)
        let name = this.ctx.request.body.usename;
        console.log(name)
        let password = this.ctx.request.body.password
        // const password = md5(body.password);
        console.log(password)
        let log = await this.app.model.Log.findOne({
            where:{
                name:name,  
            }
        })
        console.log(555)
        console.log(log)
        // console.log(555)
        console.log(log.name)
        //判断用户是否存在
        console.log(log.password)
        if(log == null){
            this.ctx.body = "用户不存在";
            // console.log("mnnmmmmmmmm")
            return
        }
        //判断密码是否正确，正确则登录成功
        if(password == log.password){
            // this.ctx.session.user = user;  //设置session
            this.ctx.body='登录成功'
            // console.log("sssssssss")
        }else{
            // console.log("zzzzzzzzz")
            this.ctx.body = "密码错误！"
        }

    }

    async zhuce(){
       await this.ctx.render('zhuce.html')
    }


    async create() {
        // const md5=require('md5-node');
        const body = this.ctx.request.body;
        
        const log = {
            name:body.username,
            // password:md5(body.password),
            password:body.password
        }
        await this.app.model.Log.create(log);
        this.ctx.redirect("/")
    }

    async logout() {
        delete this.ctx.session.user  //删除session中的用户，取消用户登录状态
        this.ctx.redirect("/")
    }
}

module.exports = HomeController;

<template>
   <form @submit="login" action="login">
    账号:
    <input type="text" v-model="usename">
    <br>
    密码:
    <input type="password" v-model="password">
    <br>
    <button type="submit">登录</button>
  </form>
</template>
<script>
export default {
  name:'Home',
  data() {
    return {
      usename:'',
      password:'',
    }
  },
 methods:{
   login(){
     this.axios
     .post("http://127.0.0.1:7001/login",{
       name:this.usename,
       password:this.password
     })
     .then(res=>{
       console.log(res)
     })
     .catch(err=>{
       console.log(err)
     })
   }
 }
}
</script>
<style>

</style>

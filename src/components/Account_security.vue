<template>
  <div id="Account_security">
    <div class="title">
      <p>账户安全</p>
    </div>
    <div class="content">
      <table class="info1">
        <tr id="security">
          <td style="font-size: 16px;">安全级别：<span id="strength">{{A}}</span></td>
          <td width="25%"><span :class="B"></span><span :class="C"></span><span :class="D"></span></td>
          <td style="font-size: 12px;color: #ee4145;text-indent: 0.2em;">建议您启动全部安全设置，以保障账户及资金安全</td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="5" border="0" class="info" width="100%">
        <tr>
          <td width="5%"><img src="../assets/quer.png" alt=""></td>
          <td width="15%" align="left">登录密码</td>
          <td width="70%">互联网账号存在被盗风险，建议您定期更改密码以保护账户安全</td>
          <td width="10%"><router-link to="/whole/Account_security/Login_modify" tag="button">修改</router-link></td>
        </tr>
        <tr>
          <td width="5%"><img src="../assets/quer.png" alt=""></td>
          <td width="15%" align="left">支付密码</td>
          <td width="70%">开启后可保障您的用卡安全</td>
          <td width="10%"><router-link to="/whole/Account_security/Pay_modify" tag="button">修改</router-link></td>
        </tr>
        <tr>
          <td width="5%"><img src="../assets/quer.png" alt=""></td>
          <td width="15%" align="left">手机验证</td>
          <td width="70%">验证后可用于快速找回登录密码及支付密码接受账户余额变动提醒</td>
          <td width="10%"><button style="background-color: #cccccc">修改</button></td>
        </tr>
        <tr>
          <td width="5%"><img src="../assets/xiugai.png" alt=""></td>
          <td width="15%" align="left">邮箱验证</td>
          <td width="70%">您验证的邮箱：<span>{{emailss}}</span></td>
          <td width="10%"><button style="background-color: #cccccc">修改</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Account_security",
    data(){
      return{
        A:'',
        B:'cancel',
        C:'cancel',
        D:'cancel',
        email:"",
        phone:"",
        emailss:''
      }
    },
    methods: {},
    created(){
      var that = this;
      this.$axios.post("http://api.eawsp.com/api/user/userSafe?token=" + sessionStorage.getItem("token"), {

      })
        .then(function (res) {
          that.emailss = res.data.data.email;
          that.strength = res.data.data.strength;
          that.is_email = res.data.data.is_binding_email;
          that.is_phone = res.data.data.is_binding_phone;
          that.$root.phone = res.data.data.phone
          //强度判断
          if(that.strength == 1){
            that.A = "低"
            that.B ='curr'
          }if(that.strength == 2){
            that.A = "中"
            that.B ='curr'
            that.C ='curr'
          }if(that.strength == 3){
            that.A = "高"
            that.B ='curr'
            that.C ='curr'
            that.D ='curr'
          }
          //是否绑定手机
          if(that.is_phone == 0){
            that.phone = require("../assets/xiugai.png")
          }else if(that.is_phone == 1){
            that.phone = require("../assets/quer.png")
          }
          //是否绑定邮箱
          if(that.is_email == 0){
            that.email = require("../assets/xiugai.png")
          }else if(that.is_email == 1){
            that.email = require("../assets/quer.png")
          }
        })
    },
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #Account_security{
    overflow: hidden;
  }
  .title{
    width: 1000px;
    height: 60px;
    margin: 30px 0 30px 20px;
    background-color: #ffffff;
  }
  .title p{
    font-size: 16px;
    line-height: 60px;
    margin-left: 20px;
  }
  .content{
    width: 1000px;
    height: 590px;
    margin-left:20px;
    background-color: #ffffff;
  }
  .curr{
    background-color: #41bbee;
  }
  .cancel{
    background-color: #cccccc;
  }
  #security td:nth-child(2) span{
    display: inline-block;
    width: 50px;
    height: 10px;
  }
  #security td:nth-child(2) span:nth-child(2){
    margin: 0 5px;
  }
  #security td:nth-child(2) span:nth-child(1){
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  #security td:nth-child(2) span:nth-child(3){
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  .info,.info1{
    width: 700px;
    margin: 0 auto;
  }
  .info1{
    margin-top: 100px;
    margin-bottom: 60px;
  }
  .info1 tr{
    display: block;
    margin-left: 10px;
  }
  .info tr{
    display: block;
    margin-bottom: 50px;
  }
  .info td{
    font-size: 14px;
    color: #999999;
  }
  .info tr td button{
    width: 64px;
    height: 24px;
    border: 0;
    border-radius: 4px;
    background-color: #41bbee;
    font-size: 14px;
    color: #ffffff;
  }
</style>

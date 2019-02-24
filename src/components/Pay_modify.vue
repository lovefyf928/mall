<template>
  <div id="Pay_modify">
    <div class="title">
      <p>修改支付密码</p>
    </div>
    <div class="content" :style="dis">
      <div class="num">
        <img src="../assets/y1.png" alt="">
        <div class="line">
          <span></span>
        </div>

        <img src="../assets/y2.png" alt="">
        <div class="line">
          <span></span>
        </div>
        <img src="../assets/y3.png" alt="">
      </div>
      <div class="text">
        <p style="text-align: left;color:#41bbee;">身份验证</p>
        <p style="text-align: center;padding-left: 8px;">修改支付密码</p>
        <p style="text-align: right">完成</p>
      </div>

      <table style="margin-top: 60px;margin-bottom: 20px;">
        <p>原手机号：</p>
        <input type="text" disabled="disabled" v-model="$root.phone" style="width: 250px;height: 38px">
      </table>
      <table>
        <p>手机验证码：</p>
        <input type="text" v-model="yzmCode" style="width: 150px;height: 38px">
        <span @click="sendCode">{{spantxt}}</span>
      </table>
      <div class="btn">
        <button @click="go">返回</button>
        <button style="margin-left: 50px" @click="checkCode">下一步</button>
      </div>
    </div>


    <!--设置登录密码-->
    <div class="content" :style="dis1">
      <div class="num">
        <img src="../assets/y1.png" alt="">
        <div class="line">
          <span style="background-color: #41bbee"></span>
        </div>

        <img src="../assets/y22.png" alt="">
        <div class="line">
          <span></span>
        </div>
        <img src="../assets/y3.png" alt="">
      </div>
      <div class="text">
        <p style="text-align: left;color: #41bbee">身份验证</p>
        <p style="text-align: center;padding-left: 8px;color:#41bbee;">修改支付密码</p>
        <p style="text-align: right">完成</p>
      </div>

      <table style="margin-top: 60px;margin-bottom: 20px;">
        <p>新密码：</p>
        <input type="text" v-model="new_password" style="width: 250px;height: 38px">
      </table>
      <table>
        <p>确认密码：</p>
        <input type="text" v-model="new_password1" style="width: 250px;height: 38px">
      </table>
      <div class="btn">
        <button @click="go">上一步</button>
        <button style="margin-left: 50px" @click="submitPassword">提交</button>
      </div>
    </div>


    <!--完成-->
    <div class="content" :style="dis2">
      <div class="complete">
        <img src="../assets/wc1.png" alt="">
        <p>完成修改</p>
        <router-link to="/whole/Account_security" tag="button">知道了</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Pay_modify",
    data(){
      return{
        time:0,
        yzmCode:'',
        spantxt:'获取验证码',
        F:"",
        dis:'display:block',
        dis1:'display:none',
        dis2:'display:none',
        new_password:'',
        new_password1:''
      }
    },
    methods:{
      sendCode:function () {
        let that = this
        var num = this.$root.phone;
        console.log(num);
        var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if(this.phoneNum==''){
          alert("请输入手机号码");
        }else if(!reg.test(this.$root.phone)){
          alert("手机格式不正确");
        }else if(this.spantxt == "获取验证码"){
          this.time=60;
          this.timer();
          this.$axios.post("http://api.eawsp.com/api/user/sendCode?token="+ sessionStorage.getItem("token"),{
            "phone":num,
          })
            .then(function (res) {
              console.log(1);
              console.log(res.data.code);
              if(res.data.code == 0){
                that.F = res.data.data.captcha_token;
                console.log(that.F)
              }
            })
        }


      },
      timer() {
        if (this.time > 0) {
          this.time--;
          this.spantxt=this.time+"s后重新获取";
          setTimeout(this.timer, 1000);
        } else{
          this.time=0;
          this.spantxt="获取验证码";
        }
      },
      checkCode:function(){
        var _this = this;
        var yzm = this.yzmCode;
        console.log(yzm)
        console.log(this.F)
        this.$axios.post("http://api.eawsp.com/api/user/changePhone?token="+ sessionStorage.getItem("token"),{
          "captcha":yzm,
          "captcha_token":this.F
        })
          .then(function (res) {
            if(res.data.code == 0){
              _this.dis='display:none',
                _this.dis1='display:block'
            }

          })
      },
      submitPassword:function(){
        let this1 = this
        var newpassword = this.new_password;
        console.log(newpassword);
        var newpassword1 = this.new_password1;
        console.log(newpassword1);
        this.$axios.post("http://api.eawsp.com/api/user/updatePass?token="+ sessionStorage.getItem("token"),{
          'pay_password':newpassword,
          'confirm_password':newpassword1
        }).then(function(res){
          console.log(res);
          if(res.data.code == 0){
            this1.dis='display:none',
              this1.dis1='display:none',
              this1.dis2='display:block'
          }
        })
      },
      go:function () {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #Pay_modify{
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
  .num{
    width: 582px;
    height: 26px;
    margin: 60px auto 10px;
  }
  .content .num{
    overflow: hidden;
    height: 26px;
  }
  .content .num img{
    display: block;
    float: left;
  }
  .num .line{
    width: 252px;
    height: 26px;
    float: left;
    line-height: 26px;
    padding: 12.5px 0;
  }
  .num .line span{
    display: block;
    width: 252px;
    height: 1px;
    line-height: 26px;
    background-color: #cccccc;
  }
  .text{
    width: 615px;
    height: 20px;
    margin: 0 auto;
  }
  .text p{
    width: 198px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    float: left;
  }
  table{
    width: 380px;
    height: 40px;
    margin: 0 auto;
  }
  table p{
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: right;
    float: left;
  }
  table span{
    margin-left: 20px;
    font-size: 14px;
    color: #41bbee;
    display: inline-block;
  }
  .btn{
    width: 235px;
    height: 30px;
    margin: 40px auto 0;
  }
  .btn button{
    width: 90px;
    height: 30px;
    border: 0;
    color: #ffffff;
    background-color: #41bbee;
  }

  .complete{
    width: 100px;
    margin: 170px auto 0;
  }
  .complete p{
    margin: 50px auto;
    text-align: center;
  }
  .complete button{
    width: 90px;
    height: 30px;
    margin-left: 5px;
    color: #ffffff;
    font-size: 14px;
    border: 0;
    background-color: #41bbee;
  }
</style>

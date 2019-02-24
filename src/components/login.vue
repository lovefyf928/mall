<template>
    <div id="login">
      <div class="nav">
        <h3><img src="../assets/logo111.png" @click="goToMall"/></h3>
      </div>
      <!--主内容-->
      <div class="article">
        <img src="../assets/fangzi.png"/>
        <div class="login_box">
          <p>持卡人登录</p>
          <div id="form">
            <form action="#" method="get">
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                <tr>
                  <td><label for=""><img src="../assets/xinyongkahao.png"/></label></td>
                  <td><input type="text" style="width: 90%" name="" id="card" v-model="num" placeholder="请输入18位信用卡号"/></td>
                </tr>
              </table>
              <table border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 25px;">
                <tr>
                  <td><label for=""><img src="../assets/mima.png"/></label></td>
                  <td><input type="password" style="width: 90%" name="" id="password" v-model="password" placeholder="请输入登录密码"/></td>
                </tr>
              </table>

              <table border="0" cellspacing="0" cellpadding="0" id="tab">
                <tr>
                  <td><input type="text" id="t1" v-model="yzm" placeholder="请输入验证码" style="text-indent: 0.5em;"/></td>
                  <img id="discode" :src="tp" alt="" @click="reget">
                </tr>
              </table>
              <table border="0" cellspacing="0" cellpadding="0" style="border: 0;">
                <tr style="height: 20px;">
                  <td style="float: left;"><input type="checkbox" name="" id="" value="" />自动登录</td>

                  <td style="text-align: center;"><a class="for_card" href="http://www.eawsp.com/jihuo/jihuo.html">激活信用卡</a></td>

                  <td style="float: right;"><a class="for_card" href="#">忘记密码</a></td>
                </tr>
              </table>
              <button @click.prevent="login">立即登录</button>
              <!--<dd><router-link to="/whole" tag="a">欢迎页</router-link></dd>-->
            </form>
          </div>
        </div>
      </div>
      <!--底部-->
      <div class="footer">
        <div id="ftConw">
          <p id="lh">
            <a href="#">关于我们</a>|<a href="#">联系我们</a>|<a href="#">商家入驻</a>|<a href="#">友情链接</a>|<a href="#">站点地图</a>|<a href="#">手机商城</a>|<a href="#">销售联盟</a>|<a
            href="">商城社区</a>|<a href="">帮助中心</a>
          </p>
          <p class="cp">©2015-2018&nbsp;四川优智优品网络技术有限公司&nbsp;&nbsp;并保留所有版权</p>
          <p class="cp color"><a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">蜀ICP备18028427-1号</a></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            tp:'../assets/logo.png',
            num:'',
            password:'',
            yzm:''
          }
      },
      methods:{
          goToMall(){
            this.$router.push('/');
          },
          login:function () {
            let _this = this
            if(this.num==''||this.password==''||this.yzm==''){
              _this.$alert('请输入完整信息', '提示', {
                confirmButtonText: '确定',
              });
            }else{
              this.$axios.post("http://api.eawsp.com/api/home_login",{
                name:_this.num,
                password:_this.password,
                captcha:_this.yzm
              }).then(function (res) {
                console.log(res)
                if(res.data.code == 0 ){
                  sessionStorage.setItem("user_id",res.data.data.data.id);
                  sessionStorage.setItem("num",_this.num);
                  sessionStorage.setItem('user_name',res.data.data.data.name);
                  sessionStorage.setItem('token',res.data.data.token);
                  _this.$store.commit("settoken",res.data.data.token);
                  _this.$root.user_token = sessionStorage.getItem("token")
                  console.log(_this.$root.user_token);
                  _this.$router.push( {path:'/mall' })
                }else{
                  _this.$alert(res.data.message, '提示', {
                    confirmButtonText: '确定',
                  });
                }
              })
            }

          },
        reget(){
            var that=this;
          let data = new Date()
          this.$axios.get("http://api.eawsp.com/api/code/captcha/create/"+ data,
          ).then(function (res) {
            // 图片token
            // 图片
            that.tp = res.data.data.captcha
          })
        }
      },
      created () {
          let _this = this
          let data = new Date()
        console.log(data)
        this.$axios.get("http://api.eawsp.com/api/code/captcha/create/"+ data,
        ).then(function (res) {
          // 图片token
          // 图片
          _this.tp = res.data.data.captcha
        })
      }
    }
</script>

<style scoped>
  .nav{
    width: 100%;
    height: 90px;
    overflow: hidden;
  }
  .nav h3{
    width: 80%;
    height: 30px;
    margin: 25px auto;

  }
  .nav h3>img{
    width: 154px;
    height: 30px;
  }
  #login{
    background-color: rgb(246,246,246);
  }
  /*中部*/
  .article{
    width: 1200px;
    height: 600px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
  .article>img{
    top: 150px;
    position: absolute;
  }
  .article>p{
    width: 40%;
    height: 25%;
    float: left;
    margin-left:14%;
    margin-top: 6%;
  }
  .login_box{
    width: 400px;
    height: 454px;
    position: absolute;
    top: 74px;
    right: 0;
    background-color: #ffffff;
  }

  .login_box p{
    width: 100%;
    margin: 36px 0;
    text-align: center;
    font-family: "微软雅黑";
    font-size: 20px;
    color: #41bbee;
  }

  table{
    width: 355px;
    margin: 0 auto;
    border: 2px solid #c8e3fa;
  }
  #tab{
    margin: 23px;
    width: 216px;
    border: none;
  }
  #tab tr>td>input{
    width: 216px;
    height: 50px;
    border: 2px solid #c8e3fa;
    float: left;
  }
  #discode{
    width: 120px;
    height: 54px;
    float: right;
    /*margin-top: 2px;*/
    margin-right: 24px;
    line-height: 50px;
    display: inline-block;
    text-align: center;
  }
  tr{
    width: 355px;
    height: 50px;
    text-indent:1em;
  }

  input{
    font-size: 14px;
    font-family: "微软雅黑";
    color: #999999;
    border: 0px;
    outline:none;
    cursor: pointer
  }
  button{
    display: block;
    width: 355px;
    height: 50px;
    margin: 40px auto 0;
    border: 0;
    color: #ffffff;
    font-size: 20px;
    background-color: #41BBEE;
  }

  .for_card{
    text-decoration: none;
    color: #41BBEE;
  }
  .for_card:hover{
    text-decoration: underline;
  }


  /*底部*/
  .footer{
    width: 100%;
    margin:86px auto 0;
  }

  .footer #ftConw{
    font-size: 14px;
    font-family: 微软雅黑;
    color: #666666;
  }
  .footer #ftConw #lh{
    margin-top: 10px;
    text-align: center;
  }
  .footer #ftConw .cp{
    margin: 5px 0 10px;
    text-align: center;
  }
  .footer #ftConw .color a{
    color: #0000ff;
  }
  .footer #ftConw a{
    margin: 0 7px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
  }
  .footer #ftConw a:hover{
    text-decoration:underline;
  }

  .footer #ftConw{
    width: 80%;
    margin: 0 auto;
    font-size: 14px;
    font-family: 微软雅黑;
    color: #666666;
  }
  .footer #ftConw #lh{
    margin-top: 10px;
    text-align: center;
  }
  .footer #ftConw .cp{
    margin:10px 0 10px;
    text-align: center;
  }
  .footer #ftConw a{
    margin: 0 7px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
  }
  .footer #ftConw a:hover{
    text-decoration:underline;
  }
</style>

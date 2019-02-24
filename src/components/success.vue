<template>
  <div>
    <div class="tou">
      <nav>
        <div class="sc">
          <img src="../assets/shouyeicon.png" alt="">&nbsp&nbsp
          <a @click="JumpToIndex()" href="#">商城首页</a>
        </div>
        <ul>
          <li>
            <div @click="f8()" class="li" style="border-left: 0px solid rgb(102,102,102);">
              个人中心 <img src="../assets/jt.png" alt="">
            </div>
            <div class="yc" v-if="token" style="width: 170px;height: 40px;overflow: hidden;padding: 10px 5px">
              <img src="../assets/touxiang.png" width="40px" height="40px" style="display: block;float: left">
              <div class="right" style="float: left;width: 118px;margin-left: 10px;">
                <span class="name"  style="margin-right: 50px; font-size: 12px">{{user_name}}</span>
                <span class="no_login" style="font-size: 12px" @click="SignOut">退出</span>
                <span style="display: block; font-size: 12px;color: #41bbee">{{num}}</span>

              </div>
            </div>
          </li>
          <li>
            <div @click="JumpToOrder()" class="li">
              我的购物 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div @click="JumpToFollow()" class="li">
              <img style="float: left;margin-left: 5px;margin-top: 1px" src="../assets/guanzhu1.png">已关注店铺 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div @click="JumpToHome()" class="li">
              <img style="float: left;margin-left: 20px;margin-top: 1px" src="../assets/gouwuc11.png">购物车 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div @click="JumpToCollection()" class="li">
              收藏夹 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div class="li">
              商家支持 <img src="../assets/jt.png" alt="">
            </div>
            <ul class="othersite" v-if="num">
              <li><a href="http://www.eawsp.com/shsq/#/">商户入驻</a></li>
              <li><a href="http://www.eawsp.com/xyksq/index.html#/">进度查询</a></li>
            </ul>
          </li>
          <li>
            <div class="li">
              网站导航 <img src="../assets/jt.png" alt="">
            </div>

          </li>
        </ul>
      </nav>
    </div>
    <div class="headerLayout">
      <div class="headerCon ">
        <h1 id="mallLogo"><img @click="JumpToIndex()" src="../assets/syt_logo.png"/></h1>
        <div class="searchDiv">
          <p><img src="../assets/zp.png" alt=""><span>100%正品保障</span></p>
          <p><img src="../assets/qt.png" alt=""><span>7天无理由退换货</span></p>
          <p><img src="../assets/ps.png" alt=""><span>闪电配送</span></p>
        </div>
      </div>
      <div class="null"></div>
    </div>
    <div class="content">
      <div class="row1">
        <img src="../assets/zq.png" />
        <span class="row1_text">订单提交成功，请尽快付款吧！我会以最优质的服务配送到您的身边~</span>
        <span class="shoudPay">应支付：</span>
        <span class="pay_money">&yen; {{price}}</span>
      </div>
      <ul class="row2">
        <li>
          <input type="radio" @click="f20()" name="bank_card" />
          <span class="bank">信用额度</span>
          <span class="pay_num"></span>
        </li>
        <li>
          <input type="radio" @click="f21()" name="bank_card" />
          <span class="bank">账户余额</span>
          <span class="pay_num"></span>
        </li>
        <li class="bank_card">
          <input type="radio" name="bank_card" />
          <span class="bank">中国建设银行</span>
          <span class="card_num">****6798</span>
          <span class="chuxuka">储蓄卡</span>
          <span class="pay_num"></span>
        </li>
      </ul>
      <div class="row3">
        <a @click="f2()" href="#" id="quickly_pay" class="active">添加支付</a><p class="midPlace"></p><a @click="f1()" class="no-active" href="#" id="pay_else">第三方支付</a><p class="lastPlace"></p>
      </div>

      <div class="pay">
        <ul>
          <li>
            <span style="color: #cccccc">+</span>
            <span class="bank"><a href="#" >添加银行卡</a></span>
          </li>
          <li>
            <input type="radio" name="bank_card" />
            <span class="bank">中国工商银行</span>
            <span class="card_num ">****6798</span>
            <span>储蓄卡</span>
          </li>
        </ul>
        <div id="demo">
          <p>请输入6位数字支付密码</p>
          <form action=" ">
            <input class="pwdinput" v-model="pwd1" type="text" maxlength="1">
            <input class="pwdinput" v-model="pwd2" type="text" maxlength="1 ">
            <input class="pwdinput" v-model="pwd3" type="text" maxlength="1 ">
            <input class="pwdinput" v-model="pwd4" type="text" maxlength="1 ">
            <input class="pwdinput" v-model="pwd5" type="text" maxlength="1 ">
            <input class="pwdinput" v-model="pwd6" type="text" maxlength="1 ">
            <a href="#">忘记密码</a>
          </form>
        </div>
      </div>

      <div class="pay_else" style="display: none;">
        <p class="pay_row_else">
          <span><input @click="f3()" type="radio" name="pay_method"/><img src="../assets/zfb1.png"/></span>
          <span><input @click="RenderQrCode()" type="radio" name="pay_method" /><img src="../assets/wx.png"/></span>
        </p>

      </div>
      <div class="btn" style="margin-top: 80px;" v-if="isdis" @click="f22()">确认支付</div>
      <div class="btn" id="alipay_rechage" style="margin-top: 80px;" v-show="alipayShow" @click="alipay">确认支付</div>
      <div class="pay_erweima" v-show="weChatShow">
        <div class="erweima" id="erweima" name="qrcodeIframe">
        </div>
        <img src="../assets/sys.png" />

        <p class="payText">
          <span class="text1">扫一扫付款（元）</span>
          <span class="text2">&yen;{{price}}</span>
        </p>

      </div>
    </div>
  </div>
</template>

<script>
  import '../assets/js/jquery-3.3.1.min'
  import '../assets/js/success'
    export default {
        name: "success",
      data() {
          return {
            price: null,
            alipayShow: false,
            weChatShow: false,
            num1: 3,
            num2: 4,
            num3: 4,
            mold: null,
            renderRes: {},
            isrun: false,
            num: "",
            isdis: true,
            xinyiong: false,
            yue: false,
            pwd1: "",
            pwd2: "",
            pwd3: "",
            pwd4: "",
            pwd5: "",
            pwd6: "",
            pwd: "",
            num: null,
            user_name:'张三',
            token: null
          }
      },
      mounted(){
        this.token = sessionStorage.getItem("token");
        console.log(this.$root.sn);
        this.num = sessionStorage.getItem("num");
        $('#quickly_pay').click(function(){
          console.log(1);
          $(this).removeClass('no-active');
          $(this).addClass('active');
          $('#pay_else').addClass('no-active')
          $('.pay').css('display','block');
          $('.pay_else').css('display','none')
        });
        $('#pay_else').click(function(){
          console.log(2);
          $(this).removeClass('no-active');
          $(this).addClass('active');
          $('#quickly_pay').addClass('no-active');
          $('.pay').css('display','none');
          $('.pay_else').css('display','block')
        });
        this.price = this.$root.submitdata.price;
      },
      methods: {
        SignOut(){
          this.$axios.post('http://api.eawsp.com/api/userLogOff?token='+sessionStorage.getItem('token'),{

          }).then((res)=>{
            console.log(res);
            if(res.data.code==0){
              // sessionStorage.setItem('token','');
              this.$store.commit("settoken",null);
              sessionStorage.clear();
              this.$alert('已退出登录', '提示', {
                confirmButtonText: '确定',
                callback:action => {
                  this.$router.push('/');
                }
              });
            }
          })
        },
        f8(){
          if (sessionStorage.getItem("token") == null) {
            this.$router.push("/login");
          }
          else {
            this.$router.push("/whole");
          }
        },
        f20(){
          this.xinyiong = true;
          this.yue = false
        },
        f21(){
          this.xinyiong = false;
          this.yue = true;
        },
        f22(){
          if (this.xinyiong == true) {
            var pwd = "";
            for (var i = 0; i < $(".pwdinput").length; i ++) {
              pwd += $($(".pwdinput")[i]).val();
            }
            this.pwd = pwd;
            console.log(this.$root.sn);
            console.log(pwd);
            console.log(sessionStorage.getItem("token"));
            this.$axios.get(`http://api.eawsp.com/api/user/credit?token=${sessionStorage.getItem("token")}&order_id=${this.$root.sn}&pay_password=${pwd}`).then((res) => {
              if (res.data.code == 0) {
                this.$router.push("/success2");
              }
              console.log(res);
            })
          }
          else if (this.yue == true) {
            var pwd = "";
            for (var i = 0; i < $(".pwdinput").length; i ++) {
              pwd += $($(".pwdinput")[i]).val();
            }
            this.pwd = pwd;
            console.log(sessionStorage.getItem("token"));
            console.log(this.$root.sn);
            console.log(pwd);
            this.$axios.get(`http://api.eawsp.com/api/user/balance?token=${sessionStorage.getItem("token")}&order_id=${this.$root.sn}&pay_password=${pwd}`).then((res) => {
              console.log(res);
              if (res.data.code == 0) {
                this.$router.push("/success2");
              }
              else {
                this.$alert(res.data.message, '提示', {
                  confirmButtonText: '确定',
                });
              }
            })
          }
        },
        JumpToCart(){
          this.$router.push("/home");
        },
        JumpToShop(){
          this.$router.push("/whole/Order");
        },
        JumpToFollow(){
          this.$router.push("/whole/follow")
        },
        JumpToIndex(){
          this.$router.push("/mall");
        },
        JumpToCollection(){
          this.$router.push("/whole/Collection");
        },
        JumpToFoodFresh(){
          this.$router.push("/food_fresh");
        },
        JumpToStreet(){
          this.$router.push("/mall/street");
        },
        JumpToImall(){
          this.$router.push("/mall/imall");
        },
        JumpToUserCenter(){
          this.$router.push("/whole");
        },
        JumpToSearch(){
          this.$router.push("/mall/search_jump");
        },
        f2(){
          this.isdis = true;
          this.alipayShow = false;
          this.weChatShow = false;
        },
        f4() {
          this.num2 = 5;
        },
        f1(ress) {
          this.alipayShow = true
          this.isdis = false;
          let that = this;
          var nowDate = new Date();
          that.$axios.post(`http://api.eawsp.com/api/user/getIsPay?order_id=${this.$root.sn}&token=${sessionStorage.getItem("token")}`).then(function(result) {
            console.log(result);
            if(result.data.code == '0') {
              that.num3 = 100;
              that.$router.push({
                path: '/success2'
              })
            }
            return result.data.code;
          });
          if(new Date() - nowDate >= 900000) {
            clearInterval(timer);
          }
        },
        RenderQrCode() {
          console.log(this.$root.sn);
          this.weChatShow = true
          this.alipayShow = false
          let that = this;
          console.log(123);
          if(!this.isrun) {
            this.$axios.post(`http://api.eawsp.com/api/user/wePay?order_id=${this.$root.sn}&token=${sessionStorage.getItem("token")}`).then(function(res) {
              console.log(res);
              that.renderRes = res;
              var erweimabox = document.getElementById('erweima');
              console.log(res.data);
              erweimabox.innerHTML = res.data;
              console.log(that.renderRes);
            });
            this.isrun = true;
          }
          if(this.num2 == this.num3) {
            this.num1 += 3;
          }
        },
        alipay() {
            console.log(123456);
            this.$axios.post(`http://api.eawsp.com/api/user/pay?order_id=${this.$root.sn}&token=${sessionStorage.getItem("token")}`).then(function(res) {
              console.log(res);
              var erweimabox = document.getElementById('erweima');
              erweimabox.innerHTML = res.data;
              console.log(erweimabox.innerHTML);
              var form = document.getElementById('alipaysubmit');
              form.submit();
            })
          },
        f3(){
          this.num3 = 10;
          this.alipayShow = true;
          this.weChatShow = false;
          setTimeout(() => {
            this.num3 = 4
          },3000)
        }
        },
      watch: {
        num1: function() {
          var mold = null;
          setTimeout(() => {
            mold = this.f1(this.renderRes);
            if(mold == 2) {
              num2 = 6;
            } else if (this.num2 == this.num3) {
              this.RenderQrCode();
            }
          }, 2000);
        },
        pwd1: function () {
          if (this.pwd1 != "") {
            $(".pwdinput")[1].focus();
          }
        },
        pwd2: function () {
          if (this.pwd2 != "") {
            $(".pwdinput")[2].focus();
          }
          else{
            $(".pwdinput")[0].focus();
          }
        },
        pwd3: function () {
          if (this.pwd3 != "") {
            $(".pwdinput")[3].focus();
          }
          else{
            $(".pwdinput")[1].focus();
          }
        },
        pwd4: function () {
          if (this.pwd4 != "") {
            $(".pwdinput")[4].focus();
          }
          else{
            $(".pwdinput")[2].focus();
          }
        },
        pwd5: function () {
          if (this.pwd5 != "") {
            $(".pwdinput")[5].focus();
          }
          else{
            $(".pwdinput")[3].focus();
          }
        },
        pwd6: function () {
          if (this.pwd6 != "") {
          }
          else{
            console.log(123);
            // console.log($(".pwdinput")[5]);
            $(".pwdinput")[4].focus();
          }
        }
      },
      }

</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  ul,ol{
    list-style: none;
  }
  body{
    font-family: "微软雅黑";
    color: #333333;
  }
  a{
    text-decoration: none;
    color: #333333;
  }
  .tou {
    width: 100%;
    height: 30px;
    background: rgb(227, 228, 229);

  }

  nav {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .sc {
    width: 200px;
    float: left;
  }

  .sc a {
    font-size: 12px;
    line-height: 30px;
    color: #666666;
    text-decoration: none;
  }

  nav ul {
    width: 777px;
    float: right;
    margin-block-start: 0em;
    margin-block-end: 0em;
    list-style: none;
  }

  nav ul li {
    width: 110px;
    height: 30px;
    float: left;
    cursor: pointer;
    position: relative;
  }

  .li {
    width: 100%;
    height: 16px;
    margin-top: 7px;
    float: left;
    border-left: 1px solid rgb(102, 102, 102);
    font-size: 12px;
    color: #666666;
    text-align: center;
  }

  .yc {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    margin-top: 15px;
    margin-left: -85px;
    width: 170px;
    height: 70px;
    background: white;
    display: none;
    border: 1px solid rgb(227, 228, 229);
    border-top: none;
  }
  .othersite{
    position: absolute;
    z-index: 10;
    top: 50%;
    right: -1px;
    margin-top: 15px;
    margin-left: -85px;
    width: 109px;
    background: white;
    display: none;
    border: 1px solid rgb(227, 228, 229);
    border-top: none;
    text-align: center;
  }
  .othersite li{
    width: 111px;
    height: 25px;
    border-bottom: 1px solid #cccccc;
  }
  .othersite li:last-child{
    border: none;
  }
  .othersite a{
    font-size: 12px;
    line-height: 25px;
    /*text-decoration: underline;*/
  }
  nav ul li:hover {
    background: white;
  }

  nav ul li:hover .yc {
    display: block;
  }
  nav ul li:hover .othersite {
    display: block;
  }
  /*头部*/
  .headerLayout{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .headerLayout .headerCon{
    width: 1200px;
    height: 50px;
    margin: 20px auto;
  }
  .headerCon h1{
    width: 257px;
    height: 40px;
    float: left;
  }
  .searchDiv{
    /*width: 362px;*/
    height: 24px;
    float: right;
  }
  .searchDiv img{
    margin-top: 8px;
    display: block;
    float: left;
  }
  .searchDiv p{
    height: 40px;
    margin-left:20px;
    line-height: 40px;
    float: left;
  }
  .searchDiv span{
    width: 143px;
    margin-left: 5px;
    height: 24px;

  }
  .headerLayout .null{
    width: 1200px;
    height: 20px;
    margin: 0 auto;
  }
  .headerLayout .all{
    font-family: "Microsoft YaHei";
    font-size: 16px;
    color: #41bbee;
  }

  .main{
    width: 960px;
    height: 400px;
    background:rgb(236,248,253);
    box-shadow:#41bbee 0 0 5px;
    margin: 0 auto;
    overflow: hidden;
  }
  .top{
    margin-top: 50px;
  }
  .top p{
    width: 625px;
    height: 50px;
    margin: 0 auto;
  }
  .top p img{
    display: block;
    float: left;
  }
  .top p span{
    margin-left: 20px;
    line-height: 50px;
  }
  #btn{
    display: block;
    width: 90px;
    height: 30px;
    border: 0;
    color: #ffffff;
    margin: 40px auto 40px;
    background-color: #41bbee;
  }
  .buttom{
    width: 580px;
    margin: 30px auto 0;
  }
  .buttom p{
    font-size: 14px;
    color: #ff0000;
    margin-bottom: 20px;
  }
  .buttom span{
    display: block;
    width: 528px;
    font-size: 14px;
    color: #333333;
    margin: 0 auto;
  }

  /*===========================================================pay================================================================*/
  /*******************************************************页面跳转部分*************************************************************/
  .content {
    background-color: #FFFFFF;
    width: 998px;
    box-shadow: 0 0 5px #41bbee;
    margin: 0 auto;
    padding: 50px 120px 25px 120px;
  }
  .content .row1{
    height: 50px;
    line-height: 50px;
    overflow: hidden;
  }
  .content .row1 img{
    display: block;
    float: left;
  }
  .content .row1 span{
    display: block;
    float: left;
  }
  .content .row1 .row1_text{
    float: left;
    font-size: 20px;
    color: #333333;
    margin-left: 20px;
  }
  .content .row1 .shoudPay{
    font-size: 14px;
    margin-left: 160px;
  }
  .content .row1 .pay_money{
    color: #41BBEE;
    font-size: 20px;
  }

  .content ul.row2 li {
    height: 59px;
    line-height: 59px;
    border-bottom: 1px solid #E8E8E8;
    padding-left: 70px;
  }

  .content ul.row2 li span.bank {
    margin-left: 20px;
    /*background: url('../assets/jsyh.png') no-repeat 0px 1px;*/
    margin-right: 50px;
  }


  .content ul.row2 li span.pay_num {
    margin-left: 640px;
  }
  .content ul.row2 li.bank_card span.card_num{
    margin-left:10px;
  }
  .content ul.row2 li.bank_card span.pay_num{
    margin-left: 500px;
  }

  .content .row3 {
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    width: 1000px;
    margin-top: 81px;
  }


  .content .row3 .active {
    display: block;
    float: left;
    outline: none;
    width: 98px;
    height: 39px;
    border: 1px solid #41BBEE;
    border-bottom: none;
    font-size: 14px;
    background-color: #FFFFFF;
    text-align: center;
  }
  .content .row3 .midPlace{
    width: 40px;
    height: 39px;
    border-bottom: 1px solid #E8E8E8;
    float: left;
  }

  .content .row3 .no-active {
    display: block;
    float: left;
    border: 1px solid #E8E8E8;
    width: 98px;
    height: 38px;
    font-size: 14px;
    background-color: #FFFFFF;
    text-align: center;


  }
  .content .row3 .lastPlace{
    width: 760px;
    height: 39px;
    border-bottom: 1px solid #E8E8E8;
    float: left;
  }


  .content .pay {
  }

  .content .pay ul li {
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #E8E8E8;
    padding-left: 60px;
  }

  .content .pay ul li span.bank {
    margin-left: 20px;
    padding-left: 30px;
    margin-right: 50px;
  }

  .content .pay ul li span.card_num {
    margin-right: 20px;
  }

  #demo{
    margin: 40px 0 20px;
    padding-left: 60px;
  }
  #demo P{
    font-size: 14px;
    color: #999999;
  }
  #demo input{
    width: 36px;
    height: 36px;
  }
  #demo a{
    color: #41BBEE;
    font-size: 12px;
    margin-left: 15px;
  }

  .content .pay_else p.pay_row_else {
    height: 22px;
    border-bottom: 1px solid #E8E8E8;
    padding: 13.5px 0 13.5px 60px;
    overflow: hidden;
  }

  .content .pay_else p.pay_row_else span {
    display: block;
    height: 22px;
    float: left;
    line-height: 22px;
    margin-right: 80px;
  }

  .content .pay_else p.pay_row_else span input {
    margin-right: 10px;
  }

  .content .pay_else p.pay_row_else span img {
    display: inline;
    vertical-align: top;
  }

  .content .btn {
    width: 140px;
    height: 40px;
    color: #FFFFFF;
    background-color: #41BBEE;
    text-align: center;
    line-height: 40px;
    margin-top: 30px;
    margin-left: 70px;
  }
  /*******************************************************页面跳转部分*************************************************************/

  /*============================================================底部=========================================================*/
  .hr{
    width: 100%;
    margin-top: 100px;
    border: 1px solid #cccccc;
  }
  /*底部*/
  .footer{
    width: 100%;
    margin:68px auto 0;
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
    margin:5px 0 15px;
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
  .pay_erweima {
    margin-top: 30px;
    overflow: hidden;
  }

  .pay_erweima .erweima {
    width: 200px;
    height: 200px;
    border: 1px solid #CCCCCC;
    float: left;
  }

  .pay_erweima img {
    float: left;
    padding-top: 80px;
    margin-left: 20px;
  }

  .pay_erweima .payText {
    float: left;
    padding-top: 70px;
    margin-left: 10px;
    width: 130px;
  }

  .pay_erweima .payText .text1 {
    color: #333333;
    font-size: 12px;
  }

  .pay_erweima .payText .text2 {
    font-size: 24px;
    color: #41BBEE;
  }

  #iframe {
    width: 200px;
    height: 200px;
    border: none;
  }
  /*底部end*/

</style>

<template>
  <div>
    <div class="tou">
      <nav>
        <div class="sc" @click="JumpToIndex()">
          <img src="../assets/shouyeicon.png" alt="">&nbsp&nbsp
          <a href="#" id="jumpindex">商城首页</a>
        </div>
        <ul>
          <li>
            <div @click="JumpToUserCenter()" class="li" style="border-left: 0px solid rgb(102,102,102);">
              个人中心 <img src="../assets/jt.png" alt="">
            </div>
            <div class="yc" style="width: 200px;height: 140px;text-align: center">
              <img src="../assets/touxiang.png"><br>
              <span>卡号:</span><span>{{num}}</span>
            </div>
          </li>
          <li>
            <div class="li" @click="JumpToShop()">
              我的购物 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div class="li" @click="JumpToFollow()">
              <img style="float: left;margin-left: 5px;margin-top: 1px" src="../assets/guanzhu.png">已关注店铺 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div class="li" @click="JumpToCart()">
              <img style="float: left;margin-left: 20px;margin-top: 1px" src="../assets/gouwuc11.png">购物车 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div class="li" @click="JumpToCollection()">
              收藏夹 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div class="li">
              商家支持 <img src="../assets/jt.png" alt="">
            </div>
          </li>
          <li>
            <div class="li">
              网站导航 <img src="../assets/jt.png" alt="">
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <div class="main">
      <div class="top">
        <p>
          <img src="../assets/zq.png" alt="">
          <span>你已成功付款，我会以最优智的服务配送到你身边~ 请等待!</span>
        </p>

        <button id="btn" @click="push()">知道了</button>
      </div>
      <div style="width:652px;height: 1px;background-color: #cccccc;margin:0 auto;"></div>
      <div class="buttom">
        <p>提示:</p>
        <span>付款成功后，所有以其他方式发送修改地址、退款等连接的都是骗子，请用户不要点击。</span>
      </div>
    </div>

    <div class="hr"></div>
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
        name: "success2",
        data() {
          return {
            num: ""
          }
        },
        mounted() {
          $('#app').css('backgroundColor','#f9f9f9');
          this.num = sessionStorage.getItem("num")
        },
        methods: {
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
          push() {
            this.$router.push("/mall");
          }
        }
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

  nav ul li:hover {
    background: white;
  }

  nav ul li:hover .yc {
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
  /*底部end*/
</style>

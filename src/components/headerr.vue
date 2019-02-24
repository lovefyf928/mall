<template>
<div id="headerr">
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
          <div class="yc" v-if="num" style="width: 170px;height: 40px;overflow: hidden;padding: 10px 5px">
            <img src="../assets/touxiang.png" width="40px" height="40px" style="display: block;float: left">
            <div class="right" style="float: left;width: 118px;margin-left: 10px;">
              <span class="name"  style="margin-right: 50px; font-size: 12px">{{user_name}}</span>
              <span class="no_login" style="font-size: 12px" @click="SignOut">退出</span>
              <span style="display: block; font-size: 12px;color: #41bbee">{{num}}</span>

            </div>
          </div>
        </li>
        <li>
          <div class="li" @click="JumpToShop()">
            我的购物 <img src="../assets/jt.png" alt="">
          </div>
        </li>
        <li>
          <div class="li" @click="JumpToFollow()">
            <img style="float: left;margin-left: 5px;margin-top: 1px" src="../assets/guanzhu1.png">已关注店铺 <img src="../assets/jt.png" alt="">
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
  <div class="second_nav">
    <div class="second_nav_container">
      <h3 @click="JumpToIndex()">优智优品</h3>
      <ul style="margin-top: 0;" class="second_nav_list">
        <!--欢迎页-->
        <li><router-link to="/whole" tag="a">首页</router-link></li>
      </ul>
      <div class="search">
        <input type="text" name="search" id="search" v-model="searchValue" placeholder="连衣裙"/><span class="search_btn" @click="search">搜索</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "headerr",
        data() {
          return {
            num: null,
            user_name:'张三',
            searchValue:''
          }
        },
        mounted() {
          this.user_name=sessionStorage.getItem('user_name');
          this.num = sessionStorage.getItem("num");
          $("#JumpIndex").click(function (e) {
            e.preventDefault();
          });
        },
        methods: {
          SignOut: function () {
          var that=this;
            this.$axios.post('http://api.eawsp.com/api/userLogOff?token=' + sessionStorage.getItem('token'), {}).then((res) => {
              console.log(res);
              if (res.data.code == 0) {
                // sessionStorage.setItem('token','');
                this.$store.commit("settoken", null);
                sessionStorage.clear();
                this.$alert('已退出登录', '提示', {
                  confirmButtonText: '确定',
                  callback: action => {
                    // this.$message({
                    //   type: 'info',
                    //   message: `action: ${ action }`
                    // });
                    console.log(this);
                    this.$router.push('/mall');
                  }

                });
              }
            })
          },
          JumpToIndex() {
            this.$router.push("/mall");
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
          search(){
            this.$store.commit("setdata",this.searchValue);
            this.$router.push({name:"search_jump",params:{'searchValue':this.searchValue}});
          }
        }
    }
</script>

<style scoped>
	*{
		margin: 0px;
		padding: 0px;
    font-family: "Microsoft YaHei";
	}
  a{
    text-decoration: none;
    color: #333333;
    font-size: 12px;
  }
  .tou{
    width: 100%;
    height: 30px;
    background:rgb(227,228,229);
  }
  nav{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .sc{
    width: 200px;
    float: left;
  }
  .sc a{
    font-size: 12px;
    line-height: 30px;
    color: #666666;
    text-decoration:none;
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
  .li{
    width: 100%;
    height: 16px;
    margin-top: 7px;
    float: left;
    border-left: 1px solid rgb(102,102,102);
    font-size: 12px;
    color: #666666;
    text-align: center;
  }
  .yc{
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 84px;
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

  nav ul li:hover{
    background:white;
  }
  nav ul li:hover .yc{
    display: block;
  }
  nav ul li:hover .othersite{
    display: block;
  }
  .second_nav {
    width: 100%;
    background-color: #FFFFFF;
    height: 60px;
  }
  .second_nav .second_nav_container {
    width: 1200px;
    margin: 0 auto;
    height: 60px;
    overflow: hidden;
  }
  .second_nav .second_nav_container h3 {
    float: left;
    width: 161px;
    height: 60px;
    text-indent: 999999em;
    line-height: 120px;
    background: url(../assets/logobul.png) no-repeat 0px center;
    overflow: hidden;
    font-size: 0em;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .second_nav .second_nav_container .second_nav_list {
    float: left;
    overflow: hidden;
    margin-left: 120px;
    display: block;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 80px;
  }
  .second_nav .second_nav_container .second_nav_list li {
    float: left;
    line-height: 60px;
    position: relative;
    margin-right: 30px;
    list-style: none outside none;
  }
  .second_nav .second_nav_container .second_nav_list li:first-child:after {
    content: '';
    font-size: 0px;
    border: 8px solid transparent;
    border-bottom: 8px solid #41BBEE;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -4px;
  }
  .second_nav .second_nav_container .second_nav_list li:hover:after {
    content: '';
    font-size: 0px;
    border: 8px solid transparent;
    border-bottom: 8px solid #41BBEE;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -4px;
  }
  .second_nav .second_nav_container .second_nav_list li a {
    color: #41BBEE;
    font-size: 16px
  }
  .second_nav .second_nav_container .search {
    width: 360px;
    height: 60px;
    line-height: 60px;
    float: right;
    overflow: hidden;
    padding: 15px 0;
  }
  .second_nav .second_nav_container .search input{
    display: block;
    float: left;
    width: 298px;
    height: 28px;
    background: #ECECEC;
    border: 1px solid #CCCCCC;
    padding: 0;
  }
  .second_nav .second_nav_container .search .search_btn{
    display: block;
    float: left;
    width: 58px;
    height: 28px;
    border: 1px solid #CCCCCC;
    border-left: none;
    color: #333333;
    line-height: 30px;
    text-align: center;
    background-color: #ECECEC;
  }
</style>

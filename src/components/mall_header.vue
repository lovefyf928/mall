<template>
  <div id="mall_header">
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
            <ul class="othersite">
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
      <div class="second_nav_top">
        <img @click="JumpToIndex()" src="../assets/logo111.png" class="logo" />
        <div class="search">
          <p class="search_title">
            <span class="goods" @click="search_goods">宝贝</span><span class="store" @click="search_store">店铺</span>
          </p>
          <input type="text" placeholder="请输入关键字" v-model="searchValue"/><span class="sousuo" @click="JumpToSearch()">搜索</span>
        </div>
        <p class="baozheng">
          <img src="../assets/zheng.png" />
          <span class="text1">100%正品保证</span>
          <img src="../assets/7tian.png" />
          <span class="text2">七天无理由退货保证</span>
          <img src="../assets/sandian.png" />
          <span class="text3">闪电配送</span>
        </p>
      </div>

      <div class="navigator">
        <span class="all_fenlei" @click="jumpTOClassification">全部商品分类
          <div id="nav" v-show="$root.suibian.nav_isshow">
            <div class="category-content">
              <div class="category" style="margin-top: 138px;">
                <ul class="category-list">
                  <li class="js_toggle" v-for="tmp in alldata">
                    <div class="category-info list-nz">
                      <h3 class="category-name">
                        <i><img :src="tmp.img" alt=""></i>
                        <a href="#" @click="f1(tmp.name)" class="ml-22">{{tmp.name}}</a>
                      </h3>
                      <p class="c-category-list">
                      <a href="#" @click="f1(val.name)"  v-for="val in tmp.son">{{val.name}}</a>
                      </p>
                      <em><img src="../assets/right1.png" alt=""></em>
                    </div>
                    <div class="menu-item menu-in">
                      <div class="area-bg">
                        <ul class="sublist clearfix">
                          <li v-for="val1 in tmp.son">
                            <h3 class="mcate-item-hd"><span @click="f1(val1.name)">{{val1.name}}</span></h3>
                            <p class="mcate-item-bd">
                              <a href="#" v-for="val2 in val1.son" @click="f1(val2.name)">{{val2.name}}</a>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
      </div>
        </span>
        <div class="navigator_right" style="overflow: hidden;float: right;width: 713px;height: 38px">
          <span class="" @click="JumpToIndex()"><a href="#">首页</a></span>
          <span class="" @click="JumpToFoodFresh()"><a href="#">食品生鲜</a></span>
          <span class="" @click="JumpToStreet()"><a href="#">店铺街</a></span>
          <span class=""><a href="#">旅行</a></span>
          <span class=""><a href="#">票务</a></span>
          <span class=""><a href="#">酒店</a></span>
          <span class="" @click="JumpToImall()"><a href="#">积分商城</a></span>
          <span class=""><a href="#">优智头条</a></span>
          <div style="position: relative;width: 70px;float: left;margin-right: 20px;">
            <a href="#" style="font-size: 14px">优智金融</a>
            <img style="position: absolute;right: -5px" src="../assets/hot.png">
          </div>
          <div style="position: relative;width: 60px;float: left;margin-right: 0px;">
            <a class="" style="font-size: 14px;text-decoration: none;color: #000000" href="http://www.eawsp.com/xyksq/index.html#/" target="_blank">信用卡</a>
            <img style="position: absolute;" src="../assets/hot.png">
          </div>
          <!--<div style="position: relative; width: 86px; float: left; margin-right: 0px;text-align: right">-->
            <!--<a href="#">双十一预售</a>-->
            <!--<img style="position: absolute; right: -20px" src="../assets/fire.png">-->
          <!--</div>-->
        </div>

      </div>
      <!--<div class="line" style="width: 100%;height: 2px;background-color: #41BBEE;"></div>-->

    </div>

  </div>
</template>

<script>
  import '../assets/js/index'
  import { mapGetters } from 'vuex'
    export default {
        name: "mall_header",
        data(){
          return {
            alldata: [],
            classdata: [],
            // isShow:false,
            searchValue:'',
            search_type:'goods',//goods为搜索宝贝，store为搜索店铺
            num: null,
            user_name:'张三',
            token: null
          }
        },
        updated(){
          this.num = sessionStorage.getItem("num");
          this.user_name=sessionStorage.getItem('user_name');
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
                 });
               }
            })
          },
          f1(name) {
            this.$store.commit("setdata",name);
            this.$router.push({name:"search_jump",params:{'searchValue':name}});
          },
        	search_goods(e){
        		e.target.style.backgroundColor='#41bbee';
        		e.target.style.color='#ffffff';
        		e.target.nextSibling.style.backgroundColor='#ffffff';
        		e.target.nextSibling.style.color='#333333';
        		this.search_type="goods";
        	},
        	search_store(e){
        		e.target.style.backgroundColor='#41bbee';
        		e.target.style.color='#ffffff';
        		e.target.previousSibling.style.backgroundColor='#ffffff';
        		e.target.previousSibling.style.color='#333333';
        		this.search_type="store";
        	},
          JumpToIndex(){
            this.$router.push("/mall");
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
          	console.log(this.searchValue);
          	if(this.searchValue&&this.search_type=='goods'){
          	  this.$store.commit("setdata",this.searchValue);
          		this.$router.push({name:"search_jump",params:{'searchValue':this.searchValue}});
          	}else if(this.searchValue&&this.search_type=='store'){
          		this.$store.commit("setdata",this.searchValue);
          		this.$router.push({name:"mall_street",params:{'searchValue':this.searchValue}});
          	}
          },
          jumpTOClassification(){
          	this.$router.push('/mall/classification');
          },
          JumpToOrder(){
            if (sessionStorage.getItem("token") == null) {
              this.$router.push("/login");
            }
            else {
              this.$router.push('/whole/Order');
            }
          },
          JumpToFollow(){
            if (sessionStorage.getItem("token") == null) {
              this.$router.push("/login");
            }
            else {
              this.$router.push('/whole/follow');
            }
          },
          JumpToHome(){
            if (sessionStorage.getItem("token") == null) {
              this.$router.push("/login");
            }
            else {
              this.$router.push('/home');
            }
          },
          JumpToCollection(){
            if (sessionStorage.getItem("token") == null) {
              this.$router.push("/login");
            }
            else {
              this.$router.push('/whole/Collection');
            }
          },

          f8(){
            if (sessionStorage.getItem("token") == null) {
              this.$router.push("/login");
            }
            else {
              this.$router.push("/whole");
            }
          }

        },
        mounted(){
          this.token = sessionStorage.getItem("token");
          $('#app').css('backgroundColor','#ffffff');
          this.$axios.get("http://api.eawsp.com/api/advertising/get_advertising").then((res) => {
            this.alldata = res.data.data;
            this.alldata[0].img=require('../assets/spsx.png');
            this.alldata[1].img=require('../assets/fzfs.png');
            this.alldata[2].img=require('../assets/ghhz.png');
            this.alldata[3].img=require('../assets/sjsm.png');
            this.alldata[4].img=require('../assets/jydq.png');
            this.alldata[5].img=require('../assets/jfjj.png');
            this.alldata[6].img=require('../assets/jlyl.png');
            this.alldata[7].img=require('../assets/myyp.png');

            // for(i=0;i<this.alldata.length;i++){
            //   // this.alldata[]
            // }
            console.log(this.alldata);
            for (var i = 0; i < this.alldata.length; i ++) {
              console.log(this.alldata[i]);
              this.classdata.push([]);
              for (var j = 0; j < 2; j ++) {
                console.log(this.alldata[i].son[j].name);
                var a = {};
                a.name = this.alldata[i].son[j].name;
                  this.classdata[i].push(a);
              }
            }
            console.log(this.classdata);
          });
          // this.$axios.get("http://192.168.1.100/api/advertising/right1").then((res) => {
          //   console.log(res);
          // });
        },
      computed: {
        ...mapGetters([
          'gettoken'
        ])
      },
      watch: {
        gettoken: function(val) {
          this.token = val;
        }
      }
    }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #333333;
    font-size: 12px;
  }
  body {
    font-family: "微软雅黑";
    color: #333333;
    min-width: 1200px;
  }
	#mall_header{
		border-bottom: 2px solid #41BBEE;
	}
  .tou {
    width: 100%;
    min-width: 1200px;
    height: 30px;
    background: rgb(227, 228, 229);
  }

  nav {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .sc {
    width: 20%;
    float: left;
  }

  .sc a {
    font-size: 12px;
    line-height: 30px;
    color: #666666;
    text-decoration: none;
  }

  nav ul {
    width: 65%;
    float: right;
    margin-block-start: 0em;
    margin-block-end: 0em;
    list-style: none;
  }

  nav ul li {
    width: 14%;
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
  nav ul li:hover {
    background: white;
  }

  nav ul li:hover .yc {
    display: block;
  }
  nav ul li:hover .othersite {
    display: block;
  }
  .second_nav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 10px;
  }

  .second_nav .container-fluid .search_fenlei {
    margin: 0px;
    overflow: hidden;
    height: 20px;
  }

  .second_nav .container-fluid .search_fenlei span {
    width: 40px;
    height: 20px;
    float: left;
    text-align: center;
  }

  .second_nav .container-fluid .search_fenlei span.goods {
    color: #FFFFFF;
    background-color: #41bbee;
  }

  .second_nav .container-fluid .row input {
    border: 1px solid #41bbee;
    width: 80%;
    height: 30px;
  }

  .second_nav .container-fluid .row .search {
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color: #41BBEE;
    color: #FFFFFF;
    line-height: 30px;
    vertical-align: top;
  }

  .second_nav .container-fluid .row .row_left {
    height: 50px;
    padding-top: 20px;
    text-align: right;
  }

  .second_nav .container-fluid .row .row_left span {
    margin-right: 10px;
  }

  .second_nav .container-fluid .row .row_left span.peisong {
    margin-right: 0px;
  }

  .second_nav .container-fluid .second_row {
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .second_nav .container-fluid .second_row .all_feilei {
    background-color: #41BBEE;
    color: #FFFFFF;
  }

  .carousel {
    height: 514px;
  }

  #carousel-example-generic .login {
    width: 200px;
    height: 514px;
    position: absolute;
    top: 0px;
    right: 260px;
    padding: 30px 5px 0px 5px;
    background: rgba(240, 251, 255, 0.7);
  }

  .login input {
    width: 190px;
    height: 30px;
    margin-bottom: 10px;
  }

  .login .three {
    width: 110px;
  }

  .login .yanzhengma {
    width: 70px;
    margin-left: 8px;
  }

  .login .forgetPass {
    display: block;
    text-align: right;
    color: #999999;
    font-size: 12px;
  }

  .login .loginBtn {
    width: 190px;
    height: 30px;
    background-color: #41BBEE;
    text-align: center;
    color: #FFFFFF;
    line-height: 30px;
    border-radius: 5px;
  }

  body,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form,
  pre,
  blockquote,
  figure {
    margin: 0;
  }

  ul,
  ol,
  menu,
  input,
  button {
    margin: 0;
    padding: 0;
  }

  #nav .category-content {
    /*position: relative;*/
    width: 201px;
    /*float: left;*/
    z-index: 113;
  }


  /*#nav .category-content .all-goods{*/


  /*display:block;*/


  /*width:100%;*/


  /*height:36px;*/


  /*padding:0;*/


  /*border-radius:5px 5px 0 0;*/


  /*color:#fff;*/


  /*text-align:center;*/


  /*font:16px/36px "Microsoft YaHei";*/


  /*background:#41bbee;*/


  /*}*/


  /*#nav .category-content .all-goods em{*/


  /*font:12px/36px "Microsoft YaHei";*/


  /*}*/
  .second_nav img.logo {
    float: left;
    padding: 15px 0px 4px 0px;
    margin-right: 197px;
  }

  .second_nav .second_nav_top {
    width: 1200px;
    height: 60px;
  }

  .second_nav .search {
    float: left;
  }

  .second_nav .search .search_title {
    height: 22px;
    text-align: left;
  }

  .second_nav .search .search_title span {
    display: inline-block;
    width: 40px;
    height: 22px;
    text-align: center;
    font-size: 12px;
  }

  .second_nav .search input {
    width: 320px;
    height: 26px;
    border: 2px solid #41BBEE;
    text-indent: 0.5em;
  }

  .second_nav .search .sousuo {
    display: inline-block;
    width: 60px;
    height: 30px;
    color: #FFFEFE;
    background-color: #41BBEE;
    vertical-align: top;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    cursor: default;
  }

  .second_nav .search .search_title .goods {
    background-color: #41BBEE;
    color: #FFFEFE;
    cursor: default;
  }
  .second_nav .search .search_title .store{
    cursor: default;
  }
  .second_nav .baozheng {
    float: right;
    padding-top: 25px;
  }

  .second_nav .baozheng img {
    vertical-align: top;
    margin-right: 5px;
  }

  .second_nav .baozheng .text1,
  .second_nav .baozheng .text2,
  .second_nav .baozheng .text3 {
    font-size: 12px;
  }

  .second_nav .baozheng .text1,
  .second_nav .baozheng .text2 {
    margin-right: 10px;
  }

  .second_nav .navigator {
    clear: both;
  }

  .second_nav .navigator {
    height: 38px;
    width: 1200px;
    line-height: 38px;
    overflow: hidden;
  }

  .second_nav .navigator span {
    float: left;
    text-align: center;
    font-size: 14px;
    margin-right: 30px;
  }
  .second_nav .navigator span a{
    font-size: 14px;
  }
  .second_nav .navigator .all_fenlei {
    margin-right: 50px;
    width: 210px;
    background-color: #41BBEE;
    color: #FFFEFE;
    cursor: default;
  }
  .category-content .category {
    position: absolute;
    top: 0;
    z-index: 113;
    width: 208px;
    +height: 456px;
    border: 1px solid #dadad9;
    border-bottom: none;
    border-top: none;
    background: #fefefe;
  }

  .category-content .category-list li {
    height: 55.2px;
    border-right: none;
    position: relative;
    z-index: 113;
    vertical-align: bottom;
  }

  .category-content .category-list li:hover .menu-item {
    display: block;
  }

  .category-content .category-list a:hover {
    text-decoration: none;
    color: #41bbee;
  }

  .category-content .category-info {
    padding-left: 12px;
  }

  .category-content .category-name {
    overflow: hidden;
    position: relative;
    text-align: left;
    font: 600 16px/30px "宋体";
    line-height: 25px;
  }

  .category-content .category-name i {
    position: absolute;
    top: 4px;
    width: 25px;
    height: 25px;
    -top: 6px;
  }

  .category-content .category-name b {
    margin-left: 4px;
    font: 400 12px/28px "宋体";
  }

  .category-content .category-name a {
    color: #4c4c4c;
  }

  .category-content .category-name .ml-22 {
    margin-left: 35px;
  }

  .category-content .list-nz i {
    background-position: 0 -200px;
  }

  .category-content .list-nanz i {
    background-position: -23px -200px;
  }

  .category-content .list-tz i {
    background-position: -48px -200px;
  }

  .category-content .list-ny i {
    background-position: -72px -200px;
  }

  .category-content .list-xb i {
    background-position: -96px -200px;
  }

  .category-content .list-xl i {
    background-position: 0 -225px;
  }

  .category-content .c-category-list {
    text-align: left;
    font: 400 12px/24px "microsoft yahei";
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .category-content .c-category-list a {
    margin-right: 8px;
    color: #626262;
  }

  .category-content .category-info {
    position: relative;
    height: 72px;
    overflow: hidden;
  }

  .category-content .category-info em {
    position: absolute;
    top: 11px;
    right: 10px;
    width: 13px;
    height: 13px;
    font: 12px/18px "宋体";
    color: #9b9b9b;
  }

  /*.category-content .category .hover {*/
    /*box-shadow: 0px 2px 3px #ccc;*/
    /*margin-left: -1px;*/
    /*padding-left: 1px;*/
    /*z-index: 999;*/
  /*}*/

  /*.category-content .hover .category-info {*/
    /*border: none;*/
    /*text-decoration: none;*/
    /*background: #fff;*/
  /*}*/

  .category-content .menu-item {
    display: none;
    position: absolute;
    z-index: 11;
    top: 0px;
    left: 207px;
    width: 770px;
    padding: 0 0 0 2px;
    background: #fff;
    border: none;
    box-shadow: 0px 2px 3px #ccc;
    border-top: 1px solid #bbb\9;
    zoom: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
    filter: "progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
  }

  .category-content .menu-item .area-in {
    position: relative;
    z-index: 1;
  }

  .category-content .menu-item .area-bg {
    padding: 10px 0 10px 40px;
  }

  .category-content .menu-in {
    display: none;
  }

  .category-content .category-list li.hover .category-info {
    z-index: 999;
  }

  .category-content .menu-item {}

  .c-category-list {
    width: 160px;
    margin-right: 1px;
    zoom: 1;
    padding-left: 34px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 22px;
  }


  /* sublist */

  .sublist li {
    float: left;
    width: 156px;
    height: 90px!important;
    overflow: hidden;
    padding-right: 24px;
    padding-bottom: 24px;
  }

  .sublist li h3.mcate-item-hd {
    font-family: '微软雅黑';
    padding-left: 2px;
    font-size: 14px;
    height: 26px;
    line-height: 26px;
    color: #333333;
    border-bottom: 1px dashed #666666;
  }

  .sublist li p.mcate-item-bd {
    text-align: left;
    padding-left: 2px;
  }

  .sublist li p.mcate-item-bd a {
    height: 26px;
    line-height: 26px;
    margin-right: 5px;
    font-size: 12px;
    color: #666666;
    text-decoration: none;
    display: inline-block;
  }

  .sublist li p.mcate-item-bd a:hover {
    color: #6c5143;
    text-decoration: underline;
  }

  .hot_article {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .activities {
    width: 1200px;
    overflow: hidden;
    margin: 30px 0 20px 0;
  }

  .activities h4 {
    float: left;
  }

  .activities p {
    float: right;
  }


  /*轮播图样式*/

  .carousel {
    height: 514px;
    margin: 0px auto;
    position: relative;
    overflow: hidden;
  }

  .carousel .unit {
    /*宽度必须足够宽*/
    position: absolute;
    width: 9999px;
    height: 300px;
    left: 0px;
    top: 0;
  }

  .carousel .unit li {
    float: left;
    height: 514px;
  }

  .carousel .btns a {
    position: absolute;
    width: 30px;
    height: 60px;
    top: 50%;
    margin-top: -30px;
    text-align: center;
    line-height: 60px;
    background-color: rgba(0, 0, 0, .6);
    color: #fff;
    font-size: 25px
  }

  .carousel .btns a.leftBtn {
    left: 10px;
  }

  .carousel .btns a.rightBtn {
    right: 10px;
  }

  .carousel .circles {
    width: 140px;
    height: 20px;
    position: absolute;
    left: 50%;
    margin-left: -70px;
    bottom: 30px;
  }

  .carousel .circles ol li {
    float: left;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: orange;
  }

  .carousel .circles ol li:last-child {
    margin-right: 0;
  }

  .carousel .circles ol li.cur {
    background-color: red;
  }
</style>

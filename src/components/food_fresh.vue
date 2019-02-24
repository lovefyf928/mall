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
              <span class="goods">宝贝</span><span>店铺</span>
            </p>
            <input type="text" placeholder="请输入关键字" /><span class="sousuo" @click="JumpToSearch()">搜索</span>
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
          <span class="all_fenlei">全部商品分类
            <div id="nav" v-show="$root.suibian.nav_isshow">
            <div class="category-content">
              <div class="category" style="margin-top: 138px;">
                <ul class="category-list">
                  <li class="js_toggle" v-for="tmp in alldata">
                    <div class="category-info list-nz">
                      <h3 class="category-name">
                        <a href="#" class="ml-22">{{tmp.name}}</a>
                      </h3>
                      <p class="c-category-list">
                        <!--<a href="#" v-for="val in tmp.son">{{val.name}}</a>-->
                        <a href="#">{{tmp.son[0].name}}</a>
                        <a href="#">{{tmp.son[1].name}}</a>
                        <a href="#">{{tmp.son[2].name}}</a>

                      </p>
                      <em><img src="../assets/right1.png" alt=""></em>
                    </div>
                    <div class="menu-item menu-in">
                      <div class="area-bg">
                        <ul class="sublist clearfix">
                          <li v-for="val1 in tmp.son">
                            <!--<h3 class="mcate-item-hd"><span>{{val1.name}}</span></h3>-->
                            <p class="mcate-item-bd">
                              <a href="#">{{val1.name}}</a>
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
          <div class="navigator_right" style="overflow: hidden;float: right;width: 715px;height: 38px">
            <span class="" @click="JumpToIndex()"><a href="#">首页</a></span>
            <span class="" @click="JumpToFoodFresh()"><a href="#">食品生鲜</a></span>
            <span class="" @click="JumpToStreet()"><a href="#">店铺街</a></span>
            <span class=""><a href="#">旅行</a></span>
            <span class=""><a href="#">票务</a></span>
            <span class=""><a href="#">酒店</a></span>
            <span class="" @click="JumpToImall()"><a href="#">积分商城</a></span>
            <span class=""><a href="#">优智头条</a></span>
            <div style="position: relative;width: 70px;float: left;margin-right: 20px;">
              <a href="#">优智金融</a>
              <img style="position: absolute;right: 0px" src="../assets/hot.png">
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

      </div>
      <!--轮播图-->

      <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
      <div class="carousel" id="carousel">
        <el-carousel height="440px" :interval="3000" >
          <el-carousel-item v-for="(item,index) in banner1" :key="index">
            <el-row>
              <el-col :span="24"><img :src="item" alt=""></el-col>
            </el-row>

          </el-carousel-item>
        </el-carousel>
      </div>

      <!--+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
      <div class="row1">
        <div><a href=""><img src="../assets/g1.png" alt=""></a></div>
        <div><a href=""><img src="../assets/g2.png" alt=""></a></div>
        <div><a href=""><img src="../assets/g2.png" alt=""></a></div>
      </div>
      <div class="box">
        <div class="level">
          <div class="step"><img src="../assets/1F.png" alt=""><a href="#">更多&nbsp;&nbsp;>></a></div>
          <div class="products">
            <ul>
              <li v-for="(tmp1,index) in alldata1" @click="shengxian(index,alldata1)"><img :src="'http://api.eawsp.com/'+tmp1.image_thumbnail" alt="" style="width: 182px;height: 182px"><p @click="shengxian(index,alldata1)">{{tmp1.name}}</p><label><span>{{tmp1.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,alldata1)"></label>
              </li>
            </ul>
          </div>
        </div>


        <div class="level">
          <div class="step"><img src="../assets/2F.png" alt=""><a href="#">更多&nbsp;&nbsp;>></a></div>
          <div class="products">
            <ul>
              <li v-for="(tmp2,index) in alldata2"  @click="shengxian(index,alldata2)"><img :src="'http://api.eawsp.com/'+tmp2.image_thumbnail" alt="" style="width: 182px;height: 182px"><p @click="shengxian(index,alldata2)">{{tmp2.name}}</p><label><span>{{tmp2.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,alldata2)"></label>
              </li>
            </ul>
          </div>
        </div>


        <div class="level">
          <div class="step"><img src="../assets/3F.png" alt=""><a href="#">更多&nbsp;&nbsp;>></a></div>
          <div class="products">
            <ul>
              <li v-for="(tmp3,index) in alldata3"  @click="shengxian(index,alldata3)"><img :src="'http://api.eawsp.com/'+tmp3.image_thumbnail" alt="" style="width: 182px;height: 182px"><p @click="shengxian(index,alldata3)">{{tmp3.name}}</p><label><span>{{tmp3.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,alldata3)"></label>
              </li>
            </ul>
          </div>
        </div>

        <div class="row1" style="margin-top: 30px;">
          <div><img src="../assets/g4.png" alt=""></div>
          <div><img src="../assets/g5.png" alt=""></div>
          <div><img src="../assets/g6.png" alt=""></div>
        </div>


        <div class="level">
          <div class="step"><img src="../assets/4F.png" alt=""><a href="#">更多&nbsp;&nbsp;>></a></div>
          <div class="products">
            <ul>
              <li v-for="(tmp4,index) in alldata4"  @click="shengxian(index,alldata4)"><img :src="'http://api.eawsp.com/'+tmp4.image_thumbnail" alt="" style="width: 182px;height: 182px"><p @click="shengxian(index,alldata4)">{{tmp4.name}}</p><label><span>{{tmp4.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,alldata4)"></label>
              </li>
            </ul>
          </div>
        </div>



        <div class="level">
          <div class="step"><img src="../assets/5F.png" alt=""><a href="#">更多&nbsp;&nbsp;>></a></div>
          <div class="products">
            <ul>
              <li v-for="(tmp5,index) in alldata5"  @click="shengxian(index,alldata5)"><img :src="'http://api.eawsp.com/'+tmp5.image_thumbnail" alt="" style="width: 182px;height: 182px"><p @click="shengxian(index,alldata5)">{{tmp5.name}}</p><label><span>{{tmp5.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,alldata5)"></label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer1">
        <div class="footer_1">
          <p><img src="../assets/huanhuo.png" alt=""><span>支持15天换货</span></p>
          <p><img src="../assets/sheng.png" alt=""><span>缩减环节，低价购物</span></p>
          <p><img src="../assets/muzhi.png" alt=""><span>7天无理由退换货</span></p>
          <p><img src="../assets/fahuo.png" alt=""><span>闪电发货</span></p>
        </div>
        <div class="footer_2" >
          <div>
            <p>新手上路</p>
            <ul>
              <li><a href="#">售后流程</a></li>
              <li><a href="#">购物流程</a></li>
              <li><a href="#">订购方式</a></li>
              <li><a href="#">在线支付</a></li>
              <li><a href="#">公司转账</a></li>
            </ul>
          </div>
          <div>
            <p>配送方式</p>
            <ul>
              <li><a href="#">货到付款区域</a></li>
              <li><a href="#">配送支付查询</a></li>
              <li><a href="#">支付方式说明</a></li>
              <li><a href="#">如何送礼</a></li>
              <li><a href="#">Global Shopping</a></li>
            </ul>
          </div>
          <div>
            <p>购物指南</p>
            <ul>
              <li><a href="#">常见问题</a></li>
              <li><a href="#">订购流程</a></li>
              <li><a href="#">注册新会员</a></li>
              <li><a href="#">购/机票</a></li>
              <li><a href="#">联系客服</a></li>
            </ul>
          </div>
          <div>
            <p>售后服务</p>
            <ul>
              <li><a href="#">退换货原则</a></li>
              <li><a href="#">售后服务保证</a></li>
              <li><a href="#">退货流程</a></li>
              <li><a href="#">退款说明</a></li>
              <li><a href="#">返修/退换货</a></li>
            </ul>
          </div>
          <div>
            <p>关于我们</p>
            <ul>
              <li><a href="#">网站故障报告</a></li>
              <li><a href="#">选机咨询</a></li>
              <li><a href="#">投诉与建议</a></li>
              <li><a href="#">节能补贴</a></li>
              <li><a href="#">平台礼品卡</a></li>
            </ul>
          </div>
          <div id="service">
            <p>客服服务</p>
            <h3><img src="../assets/dianhua.png" alt="" style="display: block;float: left;margin-right: 10px"><span style="color: #41bbee">400-000-0000</span></h3>
            <p style="color: #666666;font-size: 14px;margin-bottom: 0;">周一至周五&nbsp;&nbsp;9:00-17:00(<span style="color: #999999">仅收市话费</span>)</p>
            <button style="font-size: 14px">在线客服</button>

          </div>
        </div>
      </div>
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
        name: "food_fresh",
        data(){
          return{
            banner1:[require('../assets/food_banner.png'),require('../assets/food_banner1.png'),require('../assets/food_banner2.png'),require('../assets/food_banner3.png')],
            alldata: [],
            classdata: [],
            alldata1:[],
            alldata2:[],
            alldata3:[],
            alldata4:[],
            alldata5:[],
            id:'',
            id1:'',
            id2:'',
            id3:'',
            id4:'',
            id5:'',
            isShow:false,
            commodity_id:'',
            number:'1',
            num: "",
            token:null,
            user_name:'张三'
          }
        },
      created(){
        this.token=sessionStorage.getItem('token');
        this.$root.suibian.nav_isshow=true;
        this.num = sessionStorage.getItem("num")
      },
      methods: {

          SignOut(){
            this.$axios.post('http://api.eawsp.com/api/userLogOff?token='+sessionStorage.getItem('token'),{

            }).then((res)=>{
              console.log(res);
              if(res.data.code==0){
                this.token=null;
                sessionStorage.clear();
                this.$store.commit("settoken",null);
                this.$alert('已退出登录', '提示', {
                  confirmButtonText: '确定',
                });
              }
            })
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
        f8(){
          if (sessionStorage.getItem("token") == null) {
            this.$router.push("/login");
          }
          else {
            this.$router.push("/whole");
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
        add(index,tmpdata){
          if (!sessionStorage.getItem("token")){
            this.$alert('请登录账号','优智优品网',{
              confirmButtonText:'确定',
              callback:() => {
                this.$router.push('/')
              }
            })
          }else{
            this.commodity_id = tmpdata[index].id
            this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token="+sessionStorage.getItem("token"),{
              commodity_id:this.commodity_id,
              shop_number:this.number
            }).then((res)=>{
            })
          }
        },
        shengxian(index,tmpdata){
          this.$root.suibian.id = tmpdata[index].id
          this.$router.push("/mall/details")
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
          this.$router.push("/mall/search_jump");
        },
        shownavigator(){
          this.isShow=true;
        },
        no_show(){
          this.isShow=false;
        },

      },
      filters: {
        gl(val) {
        }
      },
      mounted() {
        this.$axios.get("http://api.eawsp.com/api/advertising/top2?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370801").then((res) => {
          this.alldata = res.data.data[0].son;
          this.id1 = res.data.data[0].son[0].id;
          this.id2 = res.data.data[0].son[1].id;
          this.id3 = res.data.data[0].son[2].id;
          this.id4 = res.data.data[0].son[3].id;
          this.id5 = res.data.data[0].son[4].id;

          this.$axios.get("http://api.eawsp.com/api/advertising/two_shop?id=" + this.id1).then((res) => {
            this.alldata1 = res.data.data;
          });

          this.$axios.get("http://api.eawsp.com/api/advertising/two_shop?id=" + this.id2).then((res) => {
            this.alldata2 = res.data.data;
          });

          this.$axios.get("http://api.eawsp.com/api/advertising/two_shop?id=" + this.id3).then((res) => {
            this.alldata3 = res.data.data;
          });

          this.$axios.get("http://api.eawsp.com/api/advertising/two_shop?id=" + this.id4).then((res) => {
            this.alldata4 = res.data.data;
          });

          this.$axios.get("http://api.eawsp.com/api/advertising/two_shop?id=" + this.id5).then((res) => {
            this.alldata5 = res.data.data;
          });
        });


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
    font-size: 14px;
    color: #333333;
    text-decoration: none;
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
  }

  .second_nav .search .search_title .goods {
    background-color: #41BBEE;
    color: #FFFEFE;
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

  .second_nav .navigator .all_fenlei {
    margin-right: 50px;
    width: 210px;
    background-color: #41BBEE;
    color: #FFFEFE;
  }
  .category-content .category {
    position: absolute;
    top: 0;
    /*left: 352px;*/
    z-index: 113;
    width: 208px;
    height: 440px;
    border: 1px solid #dadad9;
    border-top: none;
    background: #fefefe;
  }

  .category-content .category-list li {
    height: 64px;
    border: 2px solid #fff;
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
    padding-top: 10px;
    text-align: left;
    font: 600 16px/30px "宋体";
  }

  .category-content .category-name i {
    position: absolute;
    top: 13px;
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
    font: 400 12px/24px "microsoft yahei";
    text-align: left;
    overflow: hidden;
    text-overflow:ellipsis;
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
    top: 18px;
    right: 10px;
    width: 13px;
    height: 13px;
    font: 12px/18px "宋体";
    color: #9b9b9b;
  }

  .category-content .category .hover {
    box-shadow: 0px 2px 3px #ccc;
    margin-left: -1px;
    padding-left: 1px;
    z-index: 999;
  }

  .category-content .hover .category-info {
    border: none;
    text-decoration: none;
    background: #fff;
  }

  .category-content .menu-item {
    display: none;
    position: absolute;
    z-index: 11;
    top: 0px;
    left: 207px;
    width: 500px;
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


  .c-category-list {
    margin-right: 1px;
    zoom: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 22px;
    width: 165px;
  }


  /* sublist */

  .sublist li {
    float: left;
    overflow: hidden;
  }


  .sublist li p.mcate-item-bd {
    padding-left: 2px;
    text-align: left;
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
    height: 440px;
  }
  .carousel .el-row .el-col img{
    height: 440px;
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .row1{
    width: 1200px;
    margin: 30px auto 0;
    overflow: hidden;
  }
  .row1 div{
    float: left;
  }
  .row1 div:nth-child(2){
    margin: 0 10px;
  }

  .box{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .level{
    overflow: hidden;
  }
  .level .step{
    margin-top: 30px;
    position: relative;
  }
  .level .step a{
    right: 0;
    position: absolute;
    z-index: 99;
    color: #cccccc;
    text-decoration: none;
  }
  .level .step a:hover{
    color: #41bbee;
    text-decoration: underline;
  }
  .level .products ul>li{
    width: 228px;
    height: 290px;
    border: 1px solid #cccccc;
    margin-top: 10px;
    text-align:center;
    padding-top: 20px;
    margin-left: 8px;
    float: left;
  }
  .level .products ul>li:hover{
    border: 1px solid #41bbee;
  }
  /*.level .products ul>li:not(:first-child){*/
    /*margin-left: 10px;*/
  /*}*/
  .level .products{
    width: 100%;
    overflow: hidden;
  }
  .level .products img{
    cursor: pointer;
  }
  .level .products ul>li>p{
    text-align: left;
    margin: 10px 18px 0;
    font-size: 14px;
  }
  .level .products ul>li>p:hover{
    color: #41bbee;
    cursor: pointer;
  }
  .level .products ul>li>label{
    margin-top: 15px;
    display: block;
  }
  .level .products ul>li>label>span{
    display: inline-block;
    margin-left: 18px;
    float:left;
    color: #ff3300;
  }
  .level .products ul>li>label>img{
    margin-right: 18px;
    float: right;

  }

  .footer1{
    border: 1px solid rgba(229,227,227,0.6);
    background: rgba(245,245,245,0.6);
  }
  .footer_1{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
  .footer_1 img{
    display: block;
    margin-right: 10px;
    float: left;
  }
  .footer_1>p{
    width: 200px;
    margin: 40px 0 40px 80px;
    line-height: 38px;
    float: left;
  }

  .footer_2{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .footer_2 div{
    width: 130px;
    margin-left: 40px;
    float: left;
  }
  .footer_2 div>p{
    margin-bottom: 28px;
  }
  .footer_2 div>ul>li{
    font-size: 14px;
    margin-bottom: 8px;
  }

  .footer_2 div>ul>li a{
    color: #999999;
    text-decoration: none;
  }
  .footer_2 div>ul>li a:hover{
    text-decoration: underline;
    color: #41bbee;
  }
  #service{
    width: 295px;
  }
  #service button{
    width: 110px;
    height: 30px;
    border-radius: 2px;
    float: left;
    margin-top: 40px;
    border: 0;
    color: #ffffff;
    background-color: #41bbee;
  }

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

</style>

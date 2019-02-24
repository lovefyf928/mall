<template>
    <div id="shop_index">
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

      <div class="second_nav">
        <div class="second_nav_top">
          <img @click="JumpToIndex()" src="../assets/logo111.png" class="logo" />
          <div class="search">
            <!--<p class="search_title">-->
              <!--&lt;!&ndash;<span class="goods">宝贝</span>&ndash;&gt;-->
            <!--</p>-->
            <input type="text" placeholder="请输入关键字" /><span class="sousuo" @click="JumpToSearch()">搜本店</span><span class="sousuo all" @click="JumpToSearch()">搜全站</span>
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
      </div>
      <div class="dianzhao">
        <img src="../assets/dianzhao.png" alt="">
      </div>

      <div class="nav_item">
        <div class="menu">
          <ul>
            <li v-for="item in menu" @click="shangpu(item.name,item.id)">{{item.name}}
              <ul v-if="item.all_children_categorys.length !=0">
                <li v-for="item_1 in item.all_children_categorys"><a href="">{{item_1.name}}</a>
                  <ul v-if="item_1.all_children_categorys.length != 0">
                    <li v-for="item_1_1 in item_1.all_children_categorys"><a href="">{{item_1_1.name}}</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="nav_banner">
        <img src="../assets/b1anner.png" alt="">
      </div>


      <div class="first" v-show="isTrue">
        <div class="level">
          <h3>掌柜推荐</h3>
          <p>RECOMMEMDATION</p>
          <div class="products">
            <ul>
              <li v-for="(items,index) in Recommend" @click="xiangqing(index,Recommend)"><img :src="'http://api.eawsp.com/'+items.image_thumbnail" alt=""><p @click="xiangqing(index,Recommend)">{{items.name}}</p><label><span>￥{{items.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,Recommend)"></label>
              </li>
            </ul>
          </div>
        </div>
        <div class="level">
          <h3>热门精品</h3>
          <p>SELL&nbsp;LIKE&nbsp;HOT&nbsp;CAKES</p>
          <div class="products">
            <ul>
              <li v-for="(items1,index) in Recommend1" @click="xiangqing(index,Recommend1)"><img :src="'http://api.eawsp.com/'+items1.image_thumbnail" alt=""><p @click="xiangqing(index,Recommend1)">{{items1.name}}</p><label><span>￥{{items1.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,Recommend1)"></label>
              </li>
            </ul>
          </div>
        </div>
        <div class="level">
          <h3>精品推荐</h3>
          <p>COMPETITIVE&nbsp;PRODUCTS</p>
          <div class="products">
            <ul>
              <li v-for="(items2,index) in Recommend2"><img :src="'http://api.eawsp.com/'+items2.image_thumbnail" alt=""><p @click="xiangqing(index,Recommend2)">{{items2.name}}</p><label><span>￥{{items2.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,Recommend2)"></label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="second" v-show="isTrue1">
        <div class="level">
          <p style="margin-top: 30px">{{val}}</p>
          <div class="products">
            <ul>
              <li v-for="(num,index) in store" @click="xiangqing(index,store)"><img :src="'http://api.eawsp.com/'+num.image_thumbnail" alt=""><p @click="xiangqing(index,store)">{{num.name}}</p><label><span>￥{{num.shop_price}}</span><img
                src="../assets/gouwuche.png" alt="" @click.stop="add(index,store)"></label>
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
      <div class="hr"></div>
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
        name: "shop_index",
        data() {
          return {
            menu:[],
            Recommend:[],
            Recommend1:[],
            Recommend2:[],
            id2:'',//商品分类ID
            store:[],
            val:'',
            isTrue:true,
            isTrue1:false,
            commodity_id:'',
            number:'1',
            num: "",
            token:null,
            user_name:'张三'

        };
      },
      created(){
        $('#app').css('backgroundColor','#f9f9f9');
        this.token=sessionStorage.getItem('token');
        this.num = sessionStorage.getItem("num");
          let _this = this
          this.$axios.get("http://api.eawsp.com/api/storeIndex/classify/"+this.$root.suibian.id).then(function(res){
            console.log(res);
            _this.menu = res.data.data
            console.log(_this.$root.suibian.id);
            // _this.id1 = _this.$root.suibian.id
          })

        this.$axios.get("http://api.eawsp.com/api/storeIndex/recommend/"+this.$root.suibian.id).then(function (res) {
          console.log(res)
          _this.Recommend = res.data.data
        })

        this.$axios.get("http://api.eawsp.com/api/storeIndex/fineQuality/"+this.$root.suibian.id).then(function (res) {
          console.log(res);
          _this.Recommend1 = res.data.data
        })

        this.$axios.get("http://api.eawsp.com/api/storeIndex/hots/"+this.$root.suibian.id).then(function (res) {
          console.log(res);
          _this.Recommend2 = res.data.data
        })
      },
      updated(){

      },
      methods:{
        SignOut(){
          this.$axios.post('http://api.eawsp.com/api/userLogOff?token='+sessionStorage.getItem('token'),{

          }).then((res)=>{
            console.log(res);
            if(res.data.code==0){
              sessionStorage.clear();
              this.$store.commit("settoken",null);
              sessionStorage.clear();
              this.$alert('已退出登录', '提示', {
                confirmButtonText: '确定',
                callback:action => {
                  this.token=sessionStorage.getItem('token');
                  this.num = sessionStorage.getItem("num");
                  this.user_name=sessionStorage.getItem('user_name');
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
          if(sessionStorage.getItem('token')){
            this.$router.push('/whole/Order');
          }else{
             this.$router.push('/login');
          }
        },
        JumpToFollow(){
          if(sessionStorage.getItem('token')){
            this.$router.push('/whole/follow');
          }else{
            this.$router.push('/login');

          }
        },
        JumpToHome(){
          if(sessionStorage.getItem("token")){
            this.$router.push('/home');

          }else{
            this.$router.push('/login');

          }
        },
        JumpToCollection(){
          if(sessionStorage.getItem('token')){
            this.$router.push('/whole/Collection');

          }else{
            this.$router.push('/login');

          }
        },
        f10(){
          if (sessionStorage.getItem("token") == null) {
            this.$router.push("/login");
          }
          else {
            this.$router.push("/whole");
          }
        },
        add(index,rec_data){
          this.commodity_id = rec_data[index].id
          console.log(this.commodity_id);
          this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token="+sessionStorage.getItem("token"),{
            commodity_id:this.commodity_id,
            shop_number:this.number
          }).then((res)=>{
            console.log(res)
            this.$alert('商品已放入购物车', '提示', {
              confirmButtonText: '确定',
            });
          })
        },
        xiangqing(index,rec_data){
          this.$root.suibian.id = rec_data[index].id
          this.$router.push("/mall/details")
        },
        shangpu:function (name,id) {
          this.val = name;
          this.id2 = id
          let _that = this
          this.$axios.get("http://api.eawsp.com/api/storeIndex/serch/"+this.$root.suibian.id+"/"+this.id2).then(function (res) {
            console.log(res)
            _that.store = res.data.data.data
            _that.isTrue=false
            _that.isTrue1=true
          })
        }
      },
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #333333;
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
    left: 50%;
    margin-top: 15px;
    margin-left: -85px;
    width: 170px;
    height: 70px;
    background: white;
    display: none;
    border: 1px solid rgb(227,228,229);
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
  nav ul li:hover .othersite {
    display: block;
  }
  .second_nav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 10px;
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
    height: 30px;
    padding-top: 15px;
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
  }
  .second_nav .search .all{
    background-color: #666666;
  }

  .second_nav .search .search_title .goods {
    background-color: #41BBEE;
    color: #FFFEFE;
  }

  .second_nav .baozheng {
    float: right;
    padding-top: 19px;
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

  .dianzhao{
    width: 100%;
    height: 120px;
  }

  .nav_item{
    width: 100%;
    min-width: 1200px;
    height: 38px;
    background-color: rgb(77,77,77);
  }



  .menu{
    width: 1200px;
    margin:0 auto;
  }
  .menu a{
    color: #fff;
    text-decoration: none;
  }
  .menu a:hover{
    text-decoration: underline;
  }
  .menu ul{
    width:1200px;
    height:38px;
    color:#FFFFFF;
    text-align:center;
    list-style:none;
    font-family:"宋体";
  }
  .menu ul li{
    position:relative;
    line-height: 38px;
    height:38px;
    width:150px;
    border:none;
    float:left;

  }
  .menu ul li ul{
    visibility:hidden;
    width:100%;
    position:absolute;
    top:38px;
  }
  .menu ul li ul li{
    width:100%;
    float:none;
    height:38px;
    position:relative;
  }
  .menu ul li ul li ul{
    visibility:hidden;
    position:absolute;
    left:100%;
    top:0px;
    width:80%;
  }
  .menu ul li:hover ul li ul{
    visibility:hidden;
  }
  .menu ul li ul li:hover ul{
    visibility:visible;
    background-color:rgb(77,77,77);
    color:#fff;
  }
  .menu ul li ul li:hover ul li{
    background-color:rgb(77,77,77);
    color:#fff;
  }
  .menu ul li:hover{
    background-color:#999999;
  }
  .menu ul li:hover ul{
    visibility:visible;
  }
  .menu ul li:hover ul li{
    background-color:rgb(77,77,77);
    color:#fff;
  }

  .nav_banner{
    width: 100%;
    height: 440px;
  }

  .level{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .level h3,p{
    text-align: center;
  }
  .level h3{
    margin: 30px 0 20px 0;
    font-size: 30px;
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

  .level .products ul>li>p{
    width: 192px;
    height: 38px;
    text-align: left;
    margin: 10px 18px 0;
    font-size: 14px;
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    text-overflow: ellipsis;
  }
  .level .products ul>li>p:hover{
    color: #41bbee;
    cursor: pointer;
  }
  .level a{
    color: #000;
    text-decoration: none;
  }
  .level a:hover{
    color: #41bbee;
    text-decoration: underline;
  }
  .level .products ul>li>img{
    width: 182px;
    height: 182px;
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

  .fy {
    width: 300px;
    height: 30px;
    /*background: #41bbee;*/
    margin-top: 50px;
    margin-left: 350px;
  }

  .fy img {
    width: 30px;
    height: 30px;
    float: left;
  }

  .fy p {
    display: block;
    width: 50px;
    height: 30px;
    float: left;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
  }

  .fy input {
    width: 26px;
    height: 26px;
    float: left;
    padding: 0;
  }

  .fy button {
    width: 40px;
    height: 24px;
    border: 1px solid rgb(169, 169, 169);
    background: white;
    text-align: center;
    line-height: 24px;
    padding: 0;
    float: left;
    margin-top: 3px;
  }

  *{
    margin: 0;
    padding:0;
    list-style: none;
  }
  .hr{
    width: 100%;
    height: 1px;
    background-color: rgb(181,181,181);
  }
  .footer{
    width: 100%;
    /*margin:68px auto 0;*/
    height: 169px;
    background-color: rgb(242,242,242);
    overflow: hidden;
    /*position: absolute;
    bottom: 0px;
    left: 0px;*/
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
    margin: 68px auto 0;
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
  .footer1{
    width: 100%;
    border: 1px solid rgba(229,227,227,0.6);
    margin: 0 auto;
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
    text-align: left;
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
    border: 0;
    color: #ffffff;
    margin-top: 40px;
    background: #41BBEE;
  }
</style>

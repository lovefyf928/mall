<template>
    <div id="submit">
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
          <h1 id="mallLogo"><img @click="JumpToIndex()" src="../assets/tjdd.png"/></h1>
          <div class="searchDiv">
            <p><img src="../assets/zp.png" alt=""><span>100%正品保障</span></p>
            <p><img src="../assets/qt.png" alt=""><span>7天无理由退换货</span></p>
            <p><img src="../assets/ps.png" alt=""><span>闪电配送</span></p>
          </div>
        </div>
      </div>
      <div class="null"></div>

      <div class="article">
        <div class="info1">
          <h3>收货人信息</h3> <span id="tianjia" @click="add_address">+添加新地址</span>
        </div>
        <div class="info_1">
          <ul>
            <li v-for="(tmp,key) in address"><input type="radio" name="dizhi" class="r1" @click="f1(key)">&nbsp;<span class="addr">{{tmp.country+tmp.province+tmp.city+tmp.county}}</span><span class="space name">{{tmp.addre_name}}</span><span class="phone">{{tmp.addre_phone}}</span></li>
          </ul>
        </div>

        <div class="info2">
          <h3>确认订单信息</h3>
        </div>
        <div class="info_2">
          <p style="margin-top: 20px">优智自营</p>
          <ul>
            <li v-for="tmp in msg"><img style="width: 81px;height: 84px" :src="'http://api.eawsp.com'+tmp.commoditys.image_thumbnail" alt=""><a href="#">{{tmp.commoditys.name}}</a><span class="space1">&yen;{{tmp.commoditys.shop_price}}</span><span class="space2">X{{tmp.shop_number}}</span></li>
          </ul>
        </div>

        <div class="info3">
          <h3>配送信息</h3>
        </div>

        <div class="info_3">
          <label>配送时间：
            <span><input type="radio" name="time" class="time" @click="f2(1)">&nbsp;&nbsp;仅上午</span>
            <span><input type="radio" name="time" class="time" @click="f2(2)">&nbsp;&nbsp;仅下午</span>
            <span><input type="radio" name="time" class="time" @click="f2(3)">&nbsp;&nbsp;上下午均可</span>
          </label>
        </div>

        <div class="foot">
          <div class="pay_money">
            <div><p><span>{{count}}</span>件商品，总商品金额：</p><span>&yen;{{ttprice}}</span></div>
            <div><p>红包：</p><select v-model="redselect" @change="f3($event)">
              <option>无</option>
              <option :value="tmp.money+';'+index" :key="index" v-for="(tmp,index) in red">
                {{tmp.money}}元
              </option>
            </select></div>
            <div><p>运费：</p><span>&yen;</span><span id="shipping_fee">10</span></div>
            <div><p>应付金额：</p><span style="color: #ff3300;font-size: 16px;">&yen;{{allprice}}</span></div>
          </div>
        </div>
        <div class="clear"></div>
        <div style="float: right;margin-top: 25px;"><p style="float: left;width: 200px;text-align: right">收货地址：</p><span>{{addr}}</span></div>
        <div style="clear: both"></div>
        <div style="float: right;margin-top: 12px"><span>{{name}}</span><span style="display: inline-block;margin-left: 20px;">{{phone}}</span></div>
        <div style="clear: both"></div>
        <div class="btn">
          <button @click="jump()">提交订单</button>
        </div>
      </div>
      <div class="projectileFrame"  v-show="projectileFrame_isshow">
            <div class="add_address_content">
              <p class="box_title">新增收货地址</p>
              <div class="row">
                <span class="row_title">收货人姓名：</span>
                <input type="text" name="" v-model="receive_name"/>
                <i>（必填）</i>
              </div>
              <div class="row">
                <span class="row_title">手机号码：</span>
                <input type="text" name="" v-model="receive_phone"/>
                <i>（必填）</i>
              </div>
              <div class="row">
                <span class="row_title">邮政编码：</span>
                <input type="text" name="" v-model="receive_postCode"/>
                <i>（必填）</i>
              </div>
              <div class="row addr1">
                <span class="row_title">配送区域：</span>
                <v-distpicker
                  :province="select.province"
                  :city="select.city"
                  :area="select.area"
                  @province='onChangeProvince'
                  @city='onChangeCity'
                  @area='onChangeArea'>
                </v-distpicker>
                <i>（必填）</i>
              </div>
              <div class="row addr_details">
                <span class="row_title">详细地址：</span>
                <input type="text" name="" v-model="receive_addr_details"/>
                <i>（必填）</i>
              </div>
              <div class="row_btn">
                <button class="save" @click="saveAddress">保存</button><button class="cancel" @click="cancelAddress">取消</button>
              </div>
            </div>
      </div>
    </div>
</template>

<script>
  import '../assets/js/jquery-3.3.1.min'
  import VDistpicker from 'v-distpicker'
    export default {
      components: { VDistpicker },
      name: "submit",
      data(){
          return {
            address:[],
            data: [],
            addr: "",
            name: "",
            phone: null,
            alldata: null,
            msg: [],
            ttprice: 0,
            allprice: 0,
            count: 0,
            time: "",
            addid: null,
            red: null,
            num: "",
            redselect: "无",
            B:'',
            A: 0,
            redid: "",
            num: null,
            user_name:'张三',
            token: null,
            receive_name:'',
            receive_phone:'',
            receive_postCode:'',
            select: { province: '', city: '', area: '' },
            receive_addr_details:'',
            projectileFrame_isshow:false
          }
      },
      updated(){
        this.num = sessionStorage.getItem("num");
        this.user_name=sessionStorage.getItem('user_name');
      },
      mounted(){
        $('#app').css('backgroundColor','#f9f9f9');
        this.token = sessionStorage.getItem("token");
          this.$axios.post("http://api.eawsp.com/api/creditCard/get_redpacket?token="+sessionStorage.getItem("token")).then((res) => {
            this.red = res.data.data.data
            console.log(this.red);
            var arr = [];
            for (var i = 0; i < this.red.length; i ++) {
              if (this.red[i].type == 0 || this.red[i].type == 99) {
                arr.push(this.red[i]);
              }
            }
            this.red = arr;
          })
          this.num = sessionStorage.getItem("num");
          this.$axios.post("http://api.eawsp.com/api/user/getAddress?token="+sessionStorage.getItem("token")
          ).then((res) => {
            this.address=[];
            for (var i in res.data.data) {
            this.address.push(res.data.data[i]);
          }
          this.address.pop();
        });
          console.log(this.address);
          this.alldata = this.$root.submitdata.data.data;
          console.log(this.alldata);
          var arr = []
          for (var i in this.alldata) {
            arr.push(this.alldata[i]);
          }
          arr.splice(0,1);
          var arr2 = [];
          for (var i = 0; i < arr.length; i ++) {
            for (var j = 0; j < arr[i].length; j ++) {
              arr2.push(arr[i][j]);
            }
          }
          this.msg = arr2;
          console.log(this.msg);
          for (var i = 0; i < this.msg.length; i ++) {
            this.ttprice += this.msg[i].commoditys.shop_price * this.msg[i].shop_number;
            this.count += this.msg[i].shop_number
          }
          this.allprice = this.ttprice + 10;
          console.log(this.allprice);
          var card = sessionStorage.getItem("num");
          console.log(card);
          var str = card.slice(2,4);
          console.log(str);
          if (str == "01") {
            this.allprice = this.allprice * 0.95;
          }
          else if (str == "02") {
            this.allprice = this.allprice * 0.95;
          }
          else if (str == "03") {
            this.allprice = this.allprice * 0.9;
          }
          else if (str == "04") {
            this.allprice = this.allprice * 0.8;
          }
          else if (str == "05") {
            this.allprice = this.allprice * 0.7;
          }
          else if (str == "06") {
            this.allprice = this.allprice * 0.5;
          }
          else if (str == "08") {
            this.allprice = this.allprice * 0.3;
          }
          console.log(sessionStorage.getItem("token"));
          // this.$axios.post("http://192.168.1.100/api/creditCard/get_redpacket?token="+sessionStorage.getItem("token")).then((res) => {
          //   console.log(res);
          // })
      },
      methods: {
        onChangeProvince:function(data){
          this.select.province=data.value;
        },
        onChangeCity:function(data){
          this.select.city=data.value;
        },
        onChangeArea:function(data){
          this.select.area=data.value;
        },
        saveAddress:function(){
          var that=this;
          this.$axios.post("http://api.eawsp.com/api/user/addAddress?token="+sessionStorage.getItem("token"),{
            province:that.select.province,
            city:that.select.city,
            county:that.select.area,
            address:that.receive_addr_details,
            addre_name:that.receive_name,
            addre_phone:that.receive_phone,
            postcode:that.receive_postCode,
            country:'中国'
          }).then(function (res) {
            console.log(res);
            if(res.data.code==0){

              that.projectileFrame_isshow=false;
              that.$axios.post("http://api.eawsp.com/api/user/getAddress?token="+sessionStorage.getItem("token")
              ).then((res) => {
                console.log(res);
                console.log(res);
                that.address=[];
                for (var i in res.data.data) {
                  that.address.push(res.data.data[i]);
                }
                that.address.pop();
              });
            }
            //弹框

          })
        },
        add_address(){
          this.projectileFrame_isshow=true;
        },
        cancelAddress:function(){
          this.projectileFrame_isshow=false;
        },
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
        f3(e){
          // console.log(e);
          console.log(this.redselect);
          var arr = this.redselect.split(";");
          console.log(arr);
          let num = parseFloat(this.redselect);
          console.log(num);
          if(this.A == 0){
            console.log(1);
            console.log(this.allprice);
            this.B =  this.allprice;
            this.A++
          }
          this.allprice = this.B;
          if (this.redselect == "无") {
          }
          else {
            this.allprice -= num;
            if (this.allprice < 0) {
              this.allprice = 0;
            }
            console.log()
            this.redid = this.red[arr[1]].id;
            console.log(this.redid);
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
          f1(key){
            this.addr = $($(".addr")[key]).html();
            this.name = $($(".name")[key]).html();
            this.phone = $($(".phone")[key]).html();
            this.addid = this.address[key].id;
          },
          f2(key){
            if (key == 1) {
              this.time = "仅上午";
            }
            else if (key == 2) {
              this.time = "仅下午";
            }
            else {
              this.time = "上下午均可";
            }
            console.log(this.time);
          },
        jump(){
            if (this.phone != null && this.time != "") {
              var num = null;
              if (this.time == "仅上午") {
                num = 1;
              }
              else if (this.time == "仅下午") {
                num = 2;
              }
              else {
                num = 0;
              }
              this.$root.submitdata.price = this.allprice;
              this.$root.submitdata.time = num;
              this.$root.submitdata.address_id = this.addid;
              var arr = [];
              for (var i = 0; i < this.msg.length; i ++) {
                arr.push(this.msg[i].commodity_id);
              }
              console.log(arr);
              console.log(this.addid);
              console.log(num);
              var shipping_fee = $("#shipping_fee").html();
              console.log(this.redid);

              if (this.redid == "") {
                this.$axios.post("http://api.eawsp.com/api/user/create/order?token="+sessionStorage.getItem("token"),{address_id: this.addid,delivery_time: num,goods_id:arr,shipping_fee:shipping_fee}).then((res) => {
                  console.log(res);
                  this.$root.sn = res.data.data.order_id;
                  this.$router.push("/success");
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/user/create/order?token="+sessionStorage.getItem("token"),{address_id: this.addid,delivery_time: num,goods_id:arr,red_id:this.redid,shipping_fee:shipping_fee}).then((res) => {
                  console.log(res);
                  this.$root.sn = res.data.data.order_id;
                  this.$router.push("/success");
                });
              }
            }
            else {
              this.$alert('请选择收货时间或送货时间', '提示', {
                confirmButtonText: '确定',
              });
            }
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  a{
    text-decoration: none;
    font-size: 12px;
    color: #333333;
  }
  ul,ol{
    list-style: none;
  }
  body{
    font-family: "微软雅黑";
    color: #333333;
  }
  #submit{
    position: relative;
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
  .null{
    width: 100%;
    height: 1px;
    background-color: #41bbee;
    margin: 0 auto;
  }
  .headerLayout .all{
    font-family: "Microsoft YaHei";
    font-size: 16px;
    color: #41bbee;
  }

  /*=================article==================*/
  .article{
    width: 960px;
    min-height: 600px;
    margin: 40px auto 0;
  }
  .article h3{
    float: left;
  }
  .article #tianjia{
    display: block;
    float: right;
    cursor: default;
  }
  .info1{
    width: 960px;
    height: 25px;
  }
  .info2{
    width: 960px;
    height: 25px;
    margin-top: 30px;
  }

  .info_1{
    width: 900px;
    margin-top: 10px;
    padding-left: 60px;
    border: 1px solid #cccccc;
  }
  .info_2{
    width: 900px;
    margin-top: 10px;
    padding-left: 60px;
    border: 1px solid #cccccc;
  }
  .info_1 ul{
    margin-top: 20px;
  }
  .info_1 ul li{
    margin-bottom: 20px;
  }
  .info_1 .space{
    display: inline-block;
    margin: 0 20px;
  }
  .info_2 .space1{
    display: inline-block;
    font-size: 14px;
    color: #ff3300;
    margin: 0 90px;
  }
  .info_2 .space2{
    font-size: 14px;
    color: #999999;
  }
  .info_2 a{
    color: #333333;
    font-size: 16px;
    text-decoration: none;
  }
  .info_2 a:hover{
    color: #41bbee;
    text-decoration: underline;
  }
  .info_2 ul{
    margin-top: 12px;
  }
  .info_2 ul li{
    margin-bottom: 20px;
  }
  .info_2 img{
    margin-right: 24px;
    vertical-align: top;
  }
  .info3{
    width: 960px;
    height: 25px;
    margin-top: 30px;
  }
  .info_3{
    width: 960px;
    padding: 12px 0;
    margin-top: 12px;
    border: 1px solid #cccccc;
  }
  .info_3 label{
    display: block;
    margin-left: 60px;
  }
  .info_3 label span{
    display: inline-block;
    margin-right: 40px;
  }
  .foot{
    margin-top: 80px;
    float: right;
  }
  .foot .pay_money div{
    margin-bottom: 20px;
  }
  .foot p{
    width: 200px;
    margin-right: 40px;
    text-align: right;
    float: left;
  }
  .clear{
    clear: both;
  }

  .btn{
    height: 40px;
    text-align: right;
    margin: 20px 0px 0px 0px;

  }
  .btn button{
    width: 120px;
    height: 40px;
    font-size: 18px;
    color: #ffffff;
    border: 0;
    background-color: #41bbee;
  }
  .projectileFrame{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 140px 0px;
  }
  .add_address_content{

    height: 475px;
    width: 920px;
    background-color: #ffffff;
    margin: 0 auto;
    border: 10px solid #cccccc;
  }
  .add_address_content .box_title{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #f2f2f2;
    border: 1px solid rgb(217,217,217);
    margin-bottom: 20px;
  }
  .add_address_content .row{
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    margin-bottom: 30px;
    padding-left: 170px;
  }
  .add_address_content .addr1{
    height: 40px;
    line-height: 40px;
    overflow: hidden;
  }
  .add_address_content .addr_details{
    margin-bottom: 50px;
  }
  .add_address_content .row .row_title{
    font-size: 12px;
    width: 81px;
    display: block;
    float: left;
    text-align: right;
  }
  .add_address_content .row input{
    display: block;
    float: left;
    border: 1px solid #CCCCCC;
    width: 220px;
    height: 32px;
    margin-left: 18px;
  }
  .add_address_content .addr_details input{
    width: 460px;
  }
  .add_address_content .row i{
    font-style: normal;
    font-size: 12px;

  }

  .add_address_content .row_btn{
    width: 385px;
    height: 30px;
    margin: 0 auto;
  }
  .add_address_content .row_btn button{
    border: 1px solid #41BBEE;
    outline: none;
    width: 90px;
    height: 30px;
    text-align: center;
    color: #FFFFFF;
    background-color: #41BBEE;
  }
  .add_address_content .row_btn button:last-child{
    margin-left: 50px;
    background-color: #FFFFFF;
    color: #41BBEE;
  }
  .distpicker-address-wrapper{
    margin-left: 20px;
    float: left;
  }
  .distpicker-address-wrapper select{
    height: 38px;
  }
</style>

<template>
    <div style="margin-top: 20px;width: 1200px; margin: 0 auto;">
      <!--<div id="jfheader">-->
        <!--<p>你当前积分：</p><span>600积分</span>-->
      <!--</div>-->
      <div class="tjheader">
        <b @click="tuijian" :class="{active:isActive2}">推荐专区</b><span @click="newProducts" :class="{active:isActive}" >新品推荐</span><span :class="{active:isActive1}" @click="hotProducts">热门推荐</span>
      </div>
      <hr style="margin-top: 4px;border: 1px solid #666666;width: 1200px">
      <div id="banner">
        <img src="../assets/jfbanner(3).png" width="1200">
      </div>
      <div class="products">
        <div style="width: 1200px">
        <ul>
          <li v-for="(item,index) in hot" ><img :src="'http://api.eawsp.com/'+item.image_thumbnail" alt=""><p @click="suibian(index)">{{item.name}}</p><label><span>100积分</span><button @click="suibian(index)">立即兑换</button></label>
          </li>
        </ul>
      </div>
      </div>
      <div class="clear"></div>
      <div class="tjheader">
        <b>积分兑换</b><span style="float: right;margin-right: 19px;cursor: pointer" @click="nextPage"><img src="../assets/huan.png" style="display: inline-block;margin-right: 4px;">换一批</span>
      </div>
      <hr style="margin-top: 4px;border: 1px solid #666666;width: 1200px">
      <div class="products">
        <div style="width: 1200px">
          <ul>
            <li v-for="(add,index) in exchange"><img :src="'http://api.eawsp.com/'+add.image_thumbnail" alt=""><p><a
              href="" @click="suibian1(index)">{{add.name}}</a></p><label><span>100积分</span><button @click="suibian1(index)">立即兑换</button></label>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Integral_mall",
        data(){
          return{
            hot:[],
            news:[],
            num:'',
            isActive:false,
            isActive1:false,
            isActive2:false,
            exchange:[]
          }
      },
      methods:{
        suibian:function(index){
          this.$root.suibian.id = this.hot[index].id
          console.log(this.hot[index].id);
          this.$root.suibian.one = 1
          this.$router.push("/mall/details");
        },

        suibian1:function(index){
          this.$root.suibian.id = this.exchange[index].id
          this.$root.suibian.one = 1
          this.$router.push("/mall/details");
        },

        tuijian:function(){
          let _this3 = this
          _this3.isActive=false
          _this3.isActive1 = false
          _this3.isActive2 = true
          this.$axios.get("http://api.eawsp.com/api/integralGoods/show_integral_goods?location=1").then(function(res){
            console.log(res)
            _this3.hot = res.data.data
          })
        },

        newProducts:function () {
          let _this2 = this
          _this2.isActive=true
          _this2.isActive1 = false
          _this2.isActive2 = false
          this.$axios.get("http://api.eawsp.com/api/integralGoods/show_integral_goods?location=2").then(function(res){
            console.log(res);
            _this2.hot = res.data.data
          })
        },
        hotProducts:function(){
          let _this1 = this
          _this1.isActive = false
          _this1.isActive1 = true
          _this1.isActive2 = false
          this.$axios.get("http://api.eawsp.com/api/integralGoods/show_integral_goods?location=3").then(function(res){
            console.log(res);
            _this1.hot = res.data.data
          })
        },
        nextPage:function () {
          let thats = this
          this.$axios.get("http://api.eawsp.com/api/integralGoods/show_integral_goods?location=99").then(function(res){
            console.log(res);
            thats.exchange = res.data.data
          })
        }
      },
      created(){
          this.$root.suibian.nav_isshow=false;
          let _this = this
          this.$axios.get("http://api.eawsp.com/api/integralGoods/show_integral_goods?location=1").then(function(res){
            console.log(res);
            _this.hot = res.data.data
          })

        this.$axios.get("http://api.eawsp.com/api/integralGoods/show_integral_goods?location=99").then(function(res){
          console.log(res);
          _this.exchange = res.data.data
        })
      },
    }
</script>

<style scoped>

  .active{
    color: #41bbee;
  }
  *{
    margin: 0;
    padding: 0;
  }
  a{
    color: #000000;
    text-decoration: none;
  }
  a:hover{
    color: #41bbee;
    text-decoration: underline;
  }
  ul,ol{
    list-style: none;
    overflow: hidden;
  }
  #jfheader{
    background: #f2f2f2;
    width: 1200px;
    height: 40px;
  }
  #jfheader p{
    display: inline-block;
    margin-right: 10px;
    margin-left: 30px;
    margin-top: 8px;
  }
  #jfheader span{
    color: #ff0000;
  }
  .tjheader{
    width: 1200px;
    margin-top: 30px;
    border-left: 6px solid black;
  }
  .tjheader b{
    margin-left: 6px;
    cursor: pointer;
    cursor: pointer;

  }
  .tjheader span{
    display: inline-block;
    margin-left: 30px;
    cursor: pointer;

  }
  .products{
    margin-left: 8px;
  }
  .products img{
    cursor:pointer;
  }
  .products ul>li{
    width: 228px;
    height: 290px;
    border: 1px solid #cccccc;
    margin-top: 10px;
    text-align:center;
    padding-top: 20px;
    float: left;
    margin-right: 10px;
  }
  .products ul>li img{
    width: 182px;
    height: 182px;
  }
  .products ul>li>p{
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
  .products ul>li>label{
    margin-top: 15px;
    display: block;
  }
  .products ul>li>label>span{
    display: inline-block;
    margin-left: 18px;
    float:left;
    color: #ff3300;
  }
  .products ul>li>label>button{
    margin-right: 18px;
    float: right;
    background: #41BBEE;
    width: 80px;
    height: 24px;
    border: 0;
    border-radius: 12px;
    outline: none;
    color: #FFFFFF;
  }
  .products ul>li:hover{
    border: 1px solid #41BBEE;
  }
  .clear{
    clear: both;
  }
  #banner{
    margin-top: 23px;
  }
</style>

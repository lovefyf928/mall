<template>
  <div id="evaluate">
    <div class="tou">
      <p>商品评价</p>
    </div>
    <div class="mian">
      <ul class="zhuangtai">
        <li>全部订单</li>
        <li>待付款</li>
        <li>待收货</li>
        <li style="color: #41bbee;border-bottom: 2px solid #41bbee;">待评价</li>
        <li>订单回收站</li>
      </ul>
      <div class="search">
        <input type="text" name="search" id="search" value="" placeholder="请输入商品名称或者订单编号搜索"/><span class="search_btn">搜索</span>
        <select name="moreselAge" id="moreselAge">
          <option value="1">高级</option>
          <option value="1">高级</option>
          <option value="1">高级</option>
          <option value="1">高级</option>
        </select>
      </div>
      <ul class="baob" style="margin-top: 0">
        <li>宝贝</li>
        <li></li>
        <li>单价</li>
        <li>数量</li>
        <li>售后</li>
        <li>实付款</li>
        <li>交易状态</li>
        <li>交易操作</li>
      </ul>
      <div class="box2" v-for="list in lists">
        <div class="top">
          <div class="shijian"><span>{{list.created_at}}</span>&nbsp;&nbsp;订单号：{{list.sn}}</div>
          <div class="dianjia"><img style="width: 24px;height: 24px" :src="'http://api.eawsp.com/'+list.store.store_url" alt="">&nbsp;&nbsp;{{list.store.store_name}}</div>
          <div class="dianjia"><img style="width: 24px;height: 24px" src="../assets/kf1.png" alt="">&nbsp;&nbsp;和我联系</div>
        </div>
        <div class="SP">
          <div class="shangpin">
            <div class="left2">
              <div class="left1">
                <div class="left">
                  <div class="left_1" v-for="list1 in list.order_goods">
                    <img  :src="'http://api.eawsp.com/'+pic" alt="">
                    <p class="miaoshu">{{list1.goods_name}}</p>
                    <p class="danjia">&yen;{{list1.goods_price}}</p>
                    <p class="shuliang">{{list1.goods_number}}</p>
                    <div class="shouhou"><p @click="shouhou(list)">{{list.is_after_sale=='0'?'申请售后':'售后中'}}</p></div>
                  </div>
                </div>
                <div style="border-top: 1px solid rgb(236,236,236);" class="shifukuan"><p style="margin-top: 20px">￥{{list.count}}</p></div>
              </div>
              <div style="border-top: 1px solid rgb(236,236,236);" class="jiaoyizhuangtai">
                <p style="margin-top: 20px">交易成功</p>
              </div>
            </div>
            <div style="border-top: 1px solid rgb(236,236,236);" class="jiaoyicaozuo">
              <button class="pingjia"  @click="pingjia(list)">评价</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "evaluate",
    data(){
      return {
        lists:[],
        pic:''
      }
    },
  created(){
    let _this = this
    this.$axios.post("http://api.eawsp.com/api/user/getMeOrder",{
      token:sessionStorage.getItem("token"),
    }).then(function (res) {
      _this.lists = res.data.data.data;
      for (var i=0;i<_this.lists.length;i++){
        for(var j=0;j<_this.lists[i].order_goods.length;j++){
          _this.pic = _this.lists[i].order_goods[j].commodity.image_thumbnail
        }
      }
    });
  },
    methods:{
      pingjia:function (arr) {
      			this.$router.push({name:'Commodity_evaluation',params:{
		        		itemArr:arr
		        }})
        },
      shouhou:function (arr) {
        this.$router.push({name:'AfterSales',params:{
        	listArr:arr
        }})
        }
      },
 }
</script>

<style scoped>
  body,html,#evaluate{
    width: 100%;
    height: 100%;
  }
  *{
    margin-block-start: 0em;
    margin-block-end:0em;
    list-style: none;
    padding-inline-start: 0px;
  }
  #evaluate{
    width:1000px;
    height: auto;
    float: left;
    margin-top: 30px;
    margin-left: 20px;
  }
  .tou{
    width: 100%;
    height: 60px;
    background: white;
    line-height: 60px;
    font-size: 16px;
    color: #333;
    float: left;
  }
  .tou p{
    display: block;
    float: left;
    margin-left: 20px;
  }
  .mian{
    width: 1000px;
    background: white;
    float: left;
    height: auto;
    margin-top: 30px;
    padding-bottom: 50px;
    /*overflow: hidden;*/
  }
  .zhuangtai{
    /*height: 50px;*/
    margin-top: 20px;
    width: 50%;
    float: left;
  }
  .zhuangtai li {
    /*width: 60px;*/
    height: 20px;
    display: block;
    float: left;
    margin-left: 20px;
    font-size: 12px;
    color: #333;

  }
  .search {
    width: 420px;
    height: 30px;
    line-height: 60px;
    float: right;
    overflow: hidden;
    padding: 15px 20px 15px 0;
  }
  .search input{
    display: block;
    float: left;
    width: 298px;
    height: 28px;
    background: #ECECEC;
    border: 1px solid #CCCCCC;
    padding: 0;
    font-size: 12px;
  }
  .search .search_btn,.search select{
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
    font-size: 12px;
  }
  .search select{
    display: block;
    float: left;
    width: 58px;
    height: 30px;
    border: 1px solid #CCCCCC;
    border-left: none;
    color: #333333;
    line-height: 30px;
    text-align: center;
    background-color: #ECECEC;
    font-size: 12px;
  }
  .box2{
    width: 960px;
    min-height: 182px;
    float: left;
  }
  .baob,.top{
    width: 960px;
    float: left;
    margin-left: 20px;
    border-spacing: 0px;
    height:40px;
    background: rgb(236,236,236);
    margin-top: 20px;
  }
  .baob li{
    font-size: 12px;
    color: #333;
    height: 40px;
    text-align: center;
    float: left;
    display: block;
    line-height: 40px;
  }
  .baob li:nth-child(1){
    width: 400px;
  }
  .baob li:nth-child(2),.baob li:nth-child(4){
    width: 60px;
  }
  .baob li:nth-child(3),.baob li:nth-child(5),.baob li:nth-child(6){
    width: 80px;
  }
  .baob li:nth-child(7),.baob li:nth-child(8){
    width: 100px;
  }
  .baob li select{
    border: none;
    background: rgb(236,236,236);
    font-size: 12px;
  }
  .shijian{
    width: 400px;
    float: left;
    font-size: 12px;
    color: #333;
    line-height: 40px;
    text-indent: 20px;
  }
  .shijian span{
    color: #ccc;
  }
  .dianjia{
    height: 40px;
    float: left;
    margin-left: 60px;
    font-size: 12px;
    color: #333;
    line-height: 40px;
  }
  .dianjia img{
    display: block;
    float: left;
    margin-top: 10px;
    width: 24px;
    height: 24px;
    padding-right: 5px;
  }
  .SP{
    width: 960px;
    float: left;
    margin-left: 20px;
    overflow: hidden;
    border-bottom:1px solid rgb(236,236,236);
  }
  .shangpin{
    width: 958px;
    float: left;
    height: auto;
    overflow: hidden;
    /*margin-left: 20px;*/
    border-spacing: 0px;
    border-left: 1px solid rgb(236,236,236);
    border-right: 1px solid rgb(236,236,236);
    background: white;
  }
  .shangpin img{
    width: 80px;
    height: 80px;
    float: left;
    margin-top: 20px;
    margin-left: 15px;
    padding-bottom: 20px;
  }
  .miaoshu{
    width: 270px;
    display: block;
    float: left;
    margin-top: 20px;
    margin-left: 10px;
    font-size: 12px;
  }
  .danjia{
    width: 80px;
    display: block;
    float: left;
    margin-top: 20px;
    margin-left: 85px;
    font-size: 12px;
    text-align: center;
  }
  .shuliang{

    width: 60px;
    display: block;
    float: left;
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
  }
  .shouhou{
    width: 80px;
    display: block;
    float: left;
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
  }
  .shouhou p:hover{
    color: #41bbee;
    cursor: pointer;
  }
  .left2{
    width: 863px;
    overflow: hidden;
    float: left;
    border-right: 1px solid rgb(236,236,236);
  }
  .left1{
    width: 762px;
    overflow: hidden;
    float: left;
    border-right: 1px solid rgb(236,236,236);
  }
  .left{
    width: 682px;
    float: left;
    border-top: 1px solid rgb(236,236,236);
    border-right: 1px solid rgb(236,236,236);
  }
  .left_1{
    width: 682px;
    height: 120px;
    border-bottom: 1px solid rgb(236,236,236);
  }
  .right{
    width: 275px;
    height: 100%;
    /*border-left: 1px solid rgb(236,236,236);*/
    float: right;
  }
  .shifukuan{
    display: block;
    /*overflow:hidden;*/
    float: left;
    width: 78px;
    height: 120px;
    border-left: 1px solid rgb(236,236,236);
  }
  .shifukuan p{
    display: block;
    margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: #41bbee;
  }
  .jiaoyizhuangtai{
    float: left;
    width: 98px;
    border-left: 1px solid rgb(236,236,236);
    text-align: center;
    font-size: 12px;
    color: #333333;
    height: 120px;
  }
  .jiaoyizhuangtai p:hover{
    color: #41bbee;
    cursor: pointer;
  }
  .jiaoyicaozuo{
    float: left;
    width: 90px;
    height: 120px;
    border-left: 1px solid rgb(236,236,236);
    text-align: center;
    font-size: 12px;
    color: #41bbee;
  }
  .jiaoyicaozuo button{
    width: 70px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    padding: 0;
  }
  .pingjia{
    border: 1px solid rgb(219,219,219);
    background: white;
    color: #333;
    margin-top: 20px;
  }
  .jiaoyicaozuo p{
    color: #333;
  }
</style>


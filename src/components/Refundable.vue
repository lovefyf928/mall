<template>
  <div id="Refundable">
    <div class="tou">
      <p>退款/换货/维修</p>
    </div>
    <div class="mian">
      <ul class="baob" style="margin-top: 0">
        <li>宝贝</li>
        <li>退款金额</li>
        <li>申请时间</li>
        <li>申请类型</li>
        <li>订单状态</li>
        <li>交易操作</li>
      </ul>
      <div class="list" v-for="item in items">
      	<div class="top">
	        <div class="shijian">订单号：{{item.sn}}</div>
	        <div class="dianjia"><img style="width: 24px;height: 24px" :src="'http://api.eawsp.com/'+item.store.store_url" alt="">&nbsp;&nbsp;{{item.store.store_name}}</div>
	        <div class="dianjia"><img style="width: 24px;height: 24px" src="../assets/kf1.png" alt="">&nbsp;&nbsp;和我联系</div>
	      </div>
	      <div class="SP" v-for="item1 in item.order_goods">
	        <div class="shangpin">
	          <div class="left">
	            <img :src="'http://api.eawsp.com/'+item1.commodity.image_thumbnail" alt="">
	            <p class="miaoshu">{{item1.goods_name}}</p>
	            <p class="tuikuanjine">&yen;{{item1.goods_price}}</p>
	            <p class="shenqingshijian">{{item.created_at}}</p>
	            <div class="shenqingleixing"><p>仅退款</p></div>
	            <p class="dingdanzhuangtai">退款成功</p>
	          </div>
	        </div>
	      </div>
      </div>
      
      <div class="fy">
				<img src="../assets/left.png" alt="" @click="prev()">
				<p style="color: #41bbee">{{current_page}}<span style="color: #333">/{{last_page}}</span></p>
				<img src="../assets/reight.png" alt="" @click="next()">
				<p>跳至</p>
				<input type="text" v-model="NUM">
				<p>页</p>
				<button @click="GD()">跳转</button>
			</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Refundable",
    data(){
      return{
      	items:'',
        current_page:'',
				last_page:'',
				prev_page_url:'',
				next_page_url:'',
				last_page_url:'',
				first_page_url:'',
				path:'',
				count:1,
				NUM:1,
      }
    },
    created() {
      let that = this;
      console.log(sessionStorage.getItem("token"));
      this.$axios.post("http://api.eawsp.com/api/user/returnGoods?token="+sessionStorage.getItem("token"),{
       
      }).then(function (res) {
        console.log(res);
        that.path=res.data.data.path;
        that.items=res.data.data.data;
        that.current_page = res.data.data.current_page;
        that.last_page = res.data.data.last_page;
        that.prev_page_url = res.data.data.prev_page_url;
        that.next_page_url = res.data.data.next_page_url;
      })
    },
    methods:{
    	// 分页上一页
        prev: function () {
          let _this = this
          this.$axios.post(_this.prev_page_url+'?token='+sessionStorage.getItem("token"), {
          }).then(function (res) {
          	console.log(res);
//          _this.count = res.data.data.count;
						 _this.items=res.data.data.data;
            _this.current_page = res.data.data.current_page;
            _this.last_page = res.data.data.last_page;
            _this.prev_page_url = res.data.data.prev_page_url;
            _this.next_page_url = res.data.data.next_page_url;
          })
        },
        // 分页下一页
        next: function () {
          let _this = this;
          this.$axios.post(_this.next_page_url+'?token='+sessionStorage.getItem("token"), {
          	
          }).then(function (res) {
//          _this.count = res.data.data.count;
						 _this.items=res.data.data.data;
            _this.current_page = res.data.data.current_page;
            _this.last_page = res.data.data.last_page;
            _this.prev_page_url = res.data.data.prev_page_url;
            _this.next_page_url = res.data.data.next_page_url;
          })
        },
        // 第几页
        GD: function () {
          let _this = this;
          if (_this.NUM == 1) {
            this.$axios.post(this.path+"api/user/returnGoods?token="+sessionStorage.getItem("token"),{
            	
            }).then(function (res) {
              _this.items=res.data.data.data;
              _this.current_page = res.data.data.current_page;
              _this.last_page = res.data.data.last_page;
              _this.prev_page_url = res.data.data.prev_page_url;
              _this.next_page_url = res.data.data.next_page_url;
            })
          } else  if(_this.NUM > _this.last_page){
            console.log("超出总页数")
          }else {
            this.$axios.post(_this.path+'?token='+sessionStorage.getItem("token"), {
                page: that.NUM
            }).then(function (res) {
//            _this.count = res.data.data.count;
              _this.items=res.data.data.data;
              _this.current_page = res.data.data.current_page;
              _this.last_page = res.data.data.last_page;
              _this.prev_page_url = res.data.data.prev_page_url;
              _this.next_page_url = res.data.data.next_page_url;
            })
          }

        },
    }
  }
</script>

<style scoped>
  body,html,#Refundable{
    width: 100%;
    height: 100%;
  }
  *{
    margin-block-start: 0em;
    margin-block-end:0em;
    list-style: none;
    padding-inline-start: 0px;
    margin-top:0;
  }
  #Refundable{
    width:1000px;
    height: auto;
    float: left;
    margin-top: 30px;
    margin-left: 20px;
    /*overflow: hidden;*/
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
    /*overflow: hidden;*/
    padding-bottom: 50px;
  }

  .baob,.top{
    width: 960px;
    margin-left: 20px;
    border-spacing: 0px;
    height:40px;
    background: rgb(236,236,236);
    margin-top: 20px !important;
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
  .baob li:nth-child(3){
    width: 160px;
  }
  .baob li:nth-child(2),.baob li:nth-child(4),.baob li:nth-child(5),.baob li:nth-child(6){
    width: 100px;
  }
  .baob li select{
    border: none;
    background: rgb(236,236,236);
    font-size: 12px;
  }
  .shijian{
    width: 500px;
    float: left;
    font-size: 12px;
    color: #333;
    line-height: 40px;
    text-indent: 20px;
  }
  .dianjia{
    height: 40px;
    float: left;
    margin-left: 50px;
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
    margin-left: 20px;
    overflow: hidden;
    border-bottom:1px solid rgb(236,236,236);
  }
  .shangpin{
    width: 958px;
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
  .tuikuanjine{
    width: 100px;
    display: block;
    float: left;
    margin-top: 20px;
    margin-left: 30px;
    font-size: 12px;
    text-align: center;
  }
  .shenqingshijian{
    width: 160px;
    display: block;
    float: left;
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
  }
  .shenqingleixing{
    width: 100px;
    display: block;
    float: left;
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
    color: #41bbee;
  }
  .dingdanzhuangtai{
    width: 100px;
    display: block;
    float: left;
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
    color: #ff0000;
  }
  .jiaoyicaozuo{

    width: 93px;
    display: block;
    float: left;
    margin-top: 20px;
    font-size: 12px;
    text-align: center;
  }
  .left{
    width: 100%;
    float: left;
    border-top: 1px solid rgb(236,236,236);
  }
  .fy {
    width: 300px;
    height: 30px;
    /*background: #41bbee;*/
    float: left;
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
</style>


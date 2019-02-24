<template>
  <div>
  <div class="all_fenlei">
    <div class="all_fenlei1">
      <div><a href="#" @click="allFenlei">全部分类</a></div><span>|</span>
      <div><a href="#">全部品牌</a></div><span>|</span>
      <div><a href="#" @click="allGoods">所有商品</a></div>
    </div>
  </div>

  <div class="pinpai">
    <div class="pinpai_name">
      <ul>
        <li style="margin-left: 15px">推荐品牌</li>
        <li>家用电器</li>
        <li>手机数码</li>
        <li>电脑办公</li>
        <li>家具自用</li>
        <li>服饰鞋帽</li>
        <li>个护化妆</li>
        <li>礼品首饰</li>
        <li>运动健康</li>
        <li>母婴玩具</li>
        <li>食品酒水</li>
      </ul>
    </div>
    <div class="pinpai_logo">
      <ul>
        <li v-for="list in lists"><a href="#"><img :src="'http://api.eawsp.com/'+list.brand_uri" alt=""><span class="text">{{list.brand_name}}</span></a></li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "fenlei",
        data(){
        	return{
        		lists:[],
        	}
        },
        created(){
        	var that=this;
          $('#app').css('backgroundColor','#f9f9f9');
          this.$axios.get("http://api.eawsp.com/api/store/show_brands?token="+sessionStorage.getItem("token")
	      		).then(function (res) {
	      			that.lists=res.data.data;
					})
        },
        methods:{
        	allFenlei(){
        		this.$router.push({path:'/mall/classification'})
        	},
        	allGoods(){
      			this.$router.push({path:'/mall/search_jump'})
      		}
      		
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .all_fenlei{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #cccccc;
    overflow: hidden;
  }
  .all_fenlei1{
    width: 1200px;
    height: 30px;
    margin: 40px auto 0;
  }
  .all_fenlei1 span{
    float: left;
    margin: 0 20px;
    display: block;
  }
  .all_fenlei1 div{
    height: 28px;
    float: left;
  }
  .all_fenlei1 div:hover{
    border-bottom: 2px solid #41BBEE;
  }
  .all_fenlei1 div>a{
    font-size: 18px;
    color: #333333;
    text-decoration: none;
  }

  .pinpai{
    width: 1200px;
    margin: 40px auto;
    overflow: hidden;
    border: 1px solid rgb(215,243,255);
  }
  .pinpai_name{
    width: 1198px;
    height: 80px;
    border: 1px solid rgb(215,243,255);
    background-color: rgb(248,253,255);
    overflow: hidden;
  }
  .pinpai_name ul{
    width: 1200px;
    height: 45px;
    margin-top: 20px;
  }
  .pinpai_name ul>li{
    width: 80px;
    height: 45px;
    line-height: 40px;
    text-align: center;
    float: left;
    margin-right: 27px;
  }
  .pinpai_name ul>li:hover{
    background: url("../assets/xingzhuang.png");
    color: #ffffff;
  }
  .pinpai_logo{
    margin-top: 20px;
  }
  .pinpai_logo ul>li{
    width: 160px;
    height: 80px;
    margin-left: 10px;
    margin-bottom: 10px;
    float: left;
    background-color: #FFFEFE;
  }
  .pinpai_logo ul>li>a{
  		text-decoration: none;
  	display: block;
  }
  .pinpai_logo ul>li img{
  	width: 160px;
  	height: 60px;
  	display: block;
  	
  }
  .pinpai_logo ul>li .text{
  	display: block;
  		text-align: center;
  		color: #666666;
  		font-size: 14px;
			height: 20px;
			line-height: 20px;
  }
</style>

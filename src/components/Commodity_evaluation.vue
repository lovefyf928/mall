<template>
    <div id="Commodity_evaluation">
      <div class="tou">
        <p class="leftTile">我的订单</p>
      </div>
      <div class="main">
        <div class="left">
          <div class="hed">宝贝</div>
          <div class="hedList" v-for="item in items.order_goods">
          	<img :src="'http://api.eawsp.com/'+item.commodity.image_thumbnail" alt="">
          	<p>{{item.goods_name}}</p>
          </div>
          
        </div>
        <div class="right">
          <div class="hed">宝贝评价</div>
          <textarea v-model="txt"></textarea>
          <p>您还能输入500个字</p>
          <div class="pf">
            <p>宝贝评分</p>
            <div class="star">
              <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star_item" :track-by="index" @click="stars(index)"></span>
            </div>
            <p>{{score}}分</p>
          </div>
          <div class="pf">
            <p>配送评分</p>
            <div class="star">
              <span v-for="(itemClass,index) in itemClasses1" :class="itemClass" class="star_item" :track-by="index" @click="stars1(index)"></span>
            </div>
            <p>{{score1}}分</p>
          </div>

          <button @click="submit">提交评论</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Commodity_evaluation",
      data () {
          return{
            score:3,
            score1:3,
            txt:'',
            items:[]
          }
      },
      methods:{
          stars:function (ied) {
            this.score = ied+1
          },
          stars1:function (ied) {
            this.score1 = ied+1
          },
        submit:function () {
        	var that=this;
            this.$axios.post("http://api.eawsp.com/api/store/add_comments?token="+sessionStorage.getItem("token"),{
                'comment':that.txt,
                'order_good_id':that.items.id,
                'distr_level':that.score1,
                'commodity_level':that.score,
                
            }).then(function (res) {
              if(res.data.code==0){
              	that.$alert('提交成功', '评价', {
			          confirmButtonText: '确定',
			        }); 
              }
              	       
           
            
            })
        }
      },
      computed:{
          itemClasses(){
            let result = [];
            for(let i=0;i<this.score;i++){
              result.push("on");
            }
            while (result.length<5){
              result.push("off");
            }
            return result
          },
          itemClasses1(){
            let result = [];
            for(let i=0;i<this.score1;i++){
              result.push("on");
            }
            while (result.length<5){
              result.push("off");
            }
            return result

          }
      },
      created(){
      	this.items=this.$route.params.itemArr;
      },
    }
</script>

<style scoped>
  body,html,#Commodity_evaluation{
    width: 100%;
    height: 100%;
  }
  *{
  	margin: 0px;
  	padding: 0px;
    margin-block-start: 0em;
    margin-block-end:0em;
    list-style: none;
    padding-inline-start: 0px;
  }
  #Commodity_evaluation{
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
  .main{
    width: 1000px;
    background: white;
    float: left;
    height: auto;
    margin-top: 30px;
    /*overflow: hidden;*/
  }
  .left{
    width: 400px;
    height: 300px;
    float: left;
  }
  .left .hedList{
  	width: 300px;
  	overflow: hidden;
  	padding-left: 100px;
  }
  .left .hedList img{
  	display: block;
  	float: left;
  	width: 100px;
  	height: 100px;
  }
  .left .hedList>p{
  	float: left;
  	height: 100px;
  	line-height: 100px;
  	margin: 0px;
  }
  .right{
    width: 600px;
    height: 500px;
    float: right;
  }
  .hed{
    width: 100%;
    height: 40px;
    background: #d0effc;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    color: #333;
  }
  .left p.leftTile{
    width: 230px;
    display: block;
    float: left;
    font-size: 12px;
    color: #333333;
    margin-left: 10px;
    margin-top: 20px;
  }
  .right textarea{
    width: 400px;
    height: 150px;
    float: left;
    margin-left: 80px;
    margin-top: 20px;
  }
  .right>p{
    font-size: 12px;
    color: #333333;
    display: block;
    float: left;
    margin-left: 90px;
    margin-top: 5px;
  }
  .pf{
    width: 60%;
    height: 30px;
    float: left;
    margin-left: 90px;
    margin-top: 5px;
  }
  .pf p{
    width: 60px;
    float: left;
    font-size: 12px;
    color: #333333;
    line-height: 30px;
  }
  .right button{
    width: 130px;
    height: 35px;
    background: #41bbee;
    border: none;
    border-radius: 5px;
    color: white;
    float: left;
    margin-top: 100px;
    margin-right: 300px;
  }



  .star{
    width:210px;
    float: left;
    margin-top: 5px;
  }
  .star_item{
    display: inline-block;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    margin-right: 22px;
    background-size: 100%;
  }
  .star_item.on{
    background-image: url("../assets/x2.png") ;
  }
  .star_item.off{
    background-image: url("../assets/x1.png");
  }
</style>

<template>
    <div id="mall_street">
      <div class="mall_street">
        <span><a href="#" class="active" @click="all_store">全部</a></span>
        <span v-for="item in fenlei_list"><a href="#" @click="getClassData(item.id)">{{item.str_name}}</a></span>
      </div>

      <div class="dianpu">
        <div class="dianpu_1" v-for="list in lists">
          <img :src="'http://api.eawsp.com/'+list.store_url" alt="">
          <div class="name">
            <label><a href="#" @click="jumpToshopIndex(list.id)">{{list.store_name}}</a></label>
            <div class="name_1">
              <p>店铺等级：<span>{{list.supplier_ranks.rank_name}}</span></p>
              <p>联系客服：<span style="color: #41BBEE">优智通</span></p>
              <!--<p>商户资质：<span><img src="../assets/chuji.png" alt=""><img src="../assets/baozhengjin.png" alt=""></span></p>-->
              <p>信用分：<span>{{list.shop_credit_score}}</span></p>
            </div>
          </div>
          <div class="name">
            <label>店铺评分</label>
            <div class="name_2">
              <p>描述相符：<span>{{list.describe}}</span></p>
              <p>服务态度：<span>{{list.serve}}</span></p>
              <p>配送服务：<span>{{list.fast_mail}}</span></p>
            </div>
          </div>
          <div class="name_right">
            <ul>
              <li v-for="list1 in list.commoditys"><img :src="'http://api.eawsp.com'+list1.image_thumbnail" alt="" @click="goToDetails(list1.id)"><p><a href="">{{list1.name}}</a></p>
                <span>&yen;{{list1.shop_price}}</span></li>
             
            </ul>
          </div>
        </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "mall_street",
        data(){
        	return{
        		lists:[],//最终的数组
        		fenlei_list:[],
            list1:[],
            list:[] //第一层分类的数组
        	}
        },
        methods:{
          goToDetails:function(goods_id){
            this.$root.suibian.id=goods_id;
            console.log(goods_id);
            this.$router.push('/mall/details');
          },
        	getClassData:function(id){

        		var that=this;
        		console.log(id);
        		this.$axios.get('http://api.eawsp.com/api/advertising/shopStreet?id='+id).then(function(res){
        		console.log(res);
              that.list=[];
              that.list1=[];

        		that.fenlei_list=res.data.data;
              var arr = res.data.data;
              for (var i = 0; i < arr.length; i ++) {
                if (arr[i].store == undefined) {

                }
                else {

                  that.list.push(arr[i].store);
                }
              }
              console.log(that.list);//分类下面的店铺大数组[[{},{},{}],[],[]];
              for (var i = 0; i < that.list.length; i ++) {
                for (var j = 0; j < that.list[i].length; j ++) {
                  console.log(that.list[i][j]);
                  that.list1.push(that.list[i][j])
                }
              }
              that.lists = that.list1;
              console.log(that.lists);

        	})
        	},
        	jumpToshopIndex(id){
        		this.$router.push({
        			path: "/shop_index"
        			})
        		this.$root.suibian.id=id;
        	},
        	all_store(){
        		 	var that=this;
            that.list=[];
            that.list1=[];
        	//分类请求
        	this.$axios.post('http://api.eawsp.com/api/store/showStreetCategory').then(function(res){
        		console.log(res);
        		that.fenlei_list=res.data.data;
        	})
        	this.$axios.get('http://api.eawsp.com/api/advertising/shopStreet').then(function(res){
        		console.log(res);
        		// that.lists=res.data.data[0].store;
            var arr = res.data.data;
            for (var i = 0; i < arr.length; i ++) {
              if (arr[i].store == undefined) {

              }
              else {

                that.list.push(arr[i].store);
              }
            }
            console.log(that.list);//分类下面的店铺大数组[[{},{},{}],[],[]];
            for (var i = 0; i < that.list.length; i ++) {
              for (var j = 0; j < that.list[i].length; j ++) {
                console.log(that.list[i][j]);
                that.list1.push(that.list[i][j])
              }
            }
            that.lists = that.list1;
            console.log(that.lists);
          })
        	}
        	
        },
        created(){
          this.$root.suibian.nav_isshow=false
        	var that=this;
          that.list=[];
          that.list1=[];
        	//分类请求
        	this.$axios.post('http://api.eawsp.com/api/store/showStreetCategory').then(function(res){
        		console.log(res);
        		that.fenlei_list=res.data.data;
        	})
        	this.$axios.get('http://api.eawsp.com/api/advertising/shopStreet').then(function(res){
        		console.log(res);
        		// that.lists=res.data.data[0].store;
            var arr = res.data.data;
            for (var i = 0; i < arr.length; i ++) {
              if (arr[i].store == undefined) {

              }
              else {
                that.list.push(arr[i].store);
              }
            }
            console.log(that.list);//分类下面的店铺大数组[[{},{},{}],[],[]];
            for (var i = 0; i < that.list.length; i ++) {
              for (var j = 0; j < that.list[i].length; j ++) {
                console.log(that.list[i][j]);
                that.list1.push(that.list[i][j])
              }
            }
            that.lists = that.list1;
            console.log(that.lists);
          })
        }
    }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    list-style: none;
  }
  body{
    font-family: "微软雅黑";
    color: #333333;
    min-width: 1200px;
  }
  .tou{
    width: 100%;
    height: 30px;
    background:rgb(227,228,229);
  }
  nav{
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }
  .sc{
    width: 20%;
    float: left;
  }
  .sc a{
    font-size: 12px;
    line-height: 30px;
    color: #666666;
    text-decoration:none;
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
  nav ul li:hover{
    background:white;
  }
  nav ul li:hover .yc{
    display: block;
  }
  .second_nav{
    width: 100%;
    max-width: 1200px;
    margin:0 auto;
    height: 110px;
    padding-top: 10px;
  }
  .second_nav .container-fluid .search_fenlei{
    margin: 0px;
    overflow: hidden;
    height: 20px;
  }
  .second_nav .container-fluid .search_fenlei span{
    width: 40px;
    height: 20px;
    float: left;
    text-align: center;
  }
  .second_nav .container-fluid .search_fenlei span.goods{
    color: #FFFFFF;
    background-color: #41bbee;
  }
  .second_nav .container-fluid .row input{
    border: 1px solid #41bbee;
    width: 80%;
    height: 30px;

  }
  .second_nav .container-fluid .row .search{
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color:#41BBEE;
    color: #FFFFFF;
    line-height: 30px;
    vertical-align: top;
  }
  .second_nav .container-fluid .row .row_left{
    height: 50px;
    padding-top: 20px;
    text-align: right;
  }
  .second_nav .container-fluid .row .row_left span{
    margin-right: 10px;

  }
  .second_nav .container-fluid .row .row_left span.peisong{
    margin-right: 0px;
  }
  .second_nav .container-fluid .second_row{
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .second_nav .container-fluid .second_row .all_feilei{
    background-color: #41BBEE;
    color: #FFFFFF;
  }
  /*.second_row1 .all_c{*/
  /*width: 210px;*/
  /*height: 38px;*/
  /*background-color: #41bbee;*/
  /*text-align: center;*/
  /*line-height: 38px;*/
  /*float: left;*/
  /*}*/
  /*.second_row1 li{*/
  /*float: left;*/
  /*}*/

  body,dl,dd,h1,h2,h3,h4,h5,h6,p,form,pre,blockquote,figure{margin:0;}
  ul,ol,menu,input,button{margin:0;padding:0;}


  #nav .category-content{
    position:relative;
    width:201px;
    float:left;
    z-index:113;
  }

  .category-content .category{
    position:absolute;
    top:0;
    left: -16px;
    z-index:113;
    width:201px;
  +height:456px;
    border:1px solid #dadad9;
    border-top:none;
    background:#fefefe;
  }
  .category-content .category-list li{
    height:64px;
    border:2px solid #fff;
    border-right:none;
    position:relative;
    z-index:113;
    vertical-align:bottom;
  }
  .category-content .category-list a:hover{
    text-decoration:none;
    color:#41bbee;
  }
  .category-content .category-info{
    padding-left:12px;
  }
  .category-content .category-name{
    overflow:hidden;
    position:relative;
    padding-top:10px;
    text-align: left;
    font:600 16px/30px "宋体";
  }
  .category-content .category-name i{
    position:absolute;
    top:10px;
    width:25px;
    height:25px;
    -top:5px;
  }
  .category-content .category-name b{
    margin-left:4px;
    font:400 12px/28px "宋体";
  }
  .category-content .category-name a{
    color:#4c4c4c;
  }
  .category-content .category-name .ml-22{
    margin-left:35px;
  }
  .category-content .list-nz i{
    background-position:0 -200px;
  }
  .category-content .list-nanz i{
    background-position:-23px -200px;
  }
  .category-content .list-tz i{
    background-position:-48px -200px;
  }
  .category-content .list-ny i{
    background-position:-72px -200px;
  }
  .category-content .list-xb i{
    background-position:-96px -200px;
  }
  .category-content .list-xl i{
    background-position:0 -225px;
  }
  .category-content .c-category-list{
    font:400 12px/24px "宋体";
  }
  .category-content .c-category-list a{
    margin-right:8px;color:#626262;
  }
  .category-content .category-info{
    position:relative;
    height:72px;
    overflow:hidden;
  }
  .category-content .category-info em{
    position:absolute;
    top:16px;
    right:10px;
    width:13px;
    height:13px;
    font:12px/18px "宋体";
    color:#9b9b9b;
  }
  .category-content .category .hover{
    box-shadow:0px 2px 3px #ccc;
    margin-left:-1px;
    padding-left:1px;
    z-index:999;
  }
  .category-content .hover .category-info{
    border:none;
    text-decoration:none;
    background:#fff;
  }
  .category-content .menu-item{
    display:none;
    position:absolute;
    z-index:11;
    left:190px;
    width:770px;
    padding:0 0 0 2px;
    background:#fff;
    border:none;
    box-shadow:0px 2px 3px #ccc;
    border-top:1px solid #bbb\9;
    zoom:1;
    -ms-filter:"progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
    filter:"progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
  }
  .category-content .menu-item .area-in{
    position:relative;
    z-index:1;
  }
  .category-content .menu-item .area-bg{
    padding:10px 0 10px 40px;
  }
  .category-content .menu-in{
    display:none;
  }
  .category-content .category-list li.hover .category-info{
    z-index:999;
  }
  .category-content .menu-item{
    left:193px;
  }
  .c-category-list{
    width:160px;
    margin-right:1px;
    zoom:1;
    padding-left: 34px;
    text-align: left;
    border-bottom: 1px solid #cccccc;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height:22px;
  }
  /* sublist */
  .sublist li{
    float:left;
    width:156px;
    height:90px!important;
    overflow:hidden;
    padding-right:24px;
    padding-bottom:24px;
  }
  .sublist li h3.mcate-item-hd{
    font-family:'微软雅黑';
    padding-left:2px;
    font-size:14px;
    color: #0f0f0f;
    height:26px;
    line-height:26px;
    border-bottom:1px dashed #666666;
  }
  .sublist li p.mcate-item-bd{padding-left:2px;}
  .sublist li p.mcate-item-bd a{
    height:26px;
    line-height:26px;
    margin-right:5px;
    font-size:12px;
    color:#666666;
    text-decoration:none;
    display:inline-block;
  }
  .sublist li p.mcate-item-bd a:hover{color:#6c5143;text-decoration:underline;}


  .fenlei{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
  }
  .fenlei span{
    margin: 0 24px;
    display: inline-block;
  }
  .fenlei a{
    color:#333333;
    font-size: 14px;
  }
  .fenlei a:hover{
    color: #41BBEE;
    text-decoration: none;
  }
	.mall_street{
		padding-left: 100px;
		width: 1100px;
		margin: 0 auto;
		overflow: hidden;
	}
	.mall_street>span{
		display: block;
		width: 260px;
		height: 30px;
		line-height: 30px;
		float: left;
		/*padding: 0px 24px;*/
	}
	.mall_street>span a{
		text-decoration: none;
		font-size: 14px;
		color: #333333;
		/*border-right: 2px solid #999999;*/
	}
	.active{
		color: #41BBEE!important;
	}
  .dianpu{
    width: 1200px;
    margin: 0 auto;
  }
  .dianpu .dianpu_1{
    width: 1198px;
    height: 186px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;

  }
  .dianpu .dianpu_1>img{
  	width: 150px;
  	height: 150px;
  	display: block;
    margin: 18px 20px;
    float: left;
  }
  .name{
    width: 170px;
    height: 150px;
    margin: 18px 0;
    float: left;
  }
  .name p{
    margin-top: 7px;
  }
  .name_2 span{
    color: #41BBEE;
  }
  .name_right{
    width: 655px;
    height: 186px;
    float: right;
  }
  .name_right ul{
    margin-top: 14px;
    width: 700px;
    height: 160px;
    overflow: hidden;
  }
  .name_right>ul>li{
  	width: 140px;
  	height: 160px;
    margin-right: 20px;
    float: left;
  }
  .name_right>ul>li>img{
  	width: 120px;
  	height: 120px;
  	display: block;
  	
  }
  .name_right>ul>li>p{
    width: 120px;
    height: 25px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .name_right>ul>li>p a{
    width: 120px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    text-decoration: none;
  }

  .name_right>ul>li>span{
    color: #FF3300;
    display: block;
    height: 20px;
    padding-left: 20px;
    font-size: 14px;
  }


</style>

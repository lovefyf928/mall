<template>
	<div id="classification">
		<div class="all_fenlei">
		    <div class="all_fenlei1">
		      <div><a href="#">全部分类</a></div><span>|</span>
		      <div><a href="#" @click="allBrand">全部品牌</a></div><span>|</span>
		      <div><a href="#" @click="allGoods">所有商品</a></div>
		    </div>
		</div>
		
		<div class="list" v-for="list in lists">
			<p class="list_title">{{list.name}}&nbsp;<img src="../assets/jiantou1.png" alt="" style="vertical-align: middle;"/></p>
			<ul class="list_item">
				<li v-for="list1 in list.son">
					<span class="left_tit"><a href="#" @click="SearchtwoClass(list1.id)">{{list1.name}}></a></span>
					<span class="text" v-for="grandSon in list1.son"><a href="#" @click="SearchThridClass(grandSon.id)">{{grandSon.name}}</a></span>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'classification',
		data(){
			return {
				lists:[],
			}
			
		},
		created(){
      $('#app').css('backgroundColor','#ffffff');
      this.$root.suibian.nav_isshow=false;
			var that=this;
			this.$axios.get(this.$root.path+"api/advertising/get_advertising", {

      		}).then(function (res) {
      		  console.log(res);
      			that.lists=res.data.data;
			})
      	},
      	methods:{
      		allBrand(){
      			this.$router.push({path:'/mall/fenlei'});
      		},
      		allGoods(){
      			this.$router.push({path:'/mall/search_jump'})
      		},
          SearchThridClass(id){
            this.$router.push({ path: '/mall/search_jump', query: {classificationId:id} })
          },
          SearchtwoClass(id){
            this.$router.push({ path: '/mall/search_jump', query: {classificationId:id} })
          }
      		
      	}
      
	}
</script>

<style scoped>
	*{
		margin: 0px;
		padding: 0px;
		font-family: "微软雅黑";
	}
	a{
		text-decoration: none;
	}
	ul,ol{
		list-style: none;
	}
	
	#classification{
		margin: 0 auto;
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
	#classification .list{
		width: 1200px;
		margin: 0 auto;
	}
	#classification .list .list_item{
		border: 1px solid #CCCCCC;
		border-top-color: #666666;
	}
	#classification .list .list_title{
		margin: 30px 0px 14px 0px;
		color: #333333;
		font-size: 14px;
	}
	#classification .list .list_item{
		padding: 0px 30px;
	}
	#classification .list .list_item li{
		height: 51px;
		border-bottom: 1px solid #CCCCCC;
		line-height: 51px;
	}
	#classification .list .list_item li:last-child{
		border: none;
	}
	#classification .list .list_item li .left_tit{
		margin-right: 71px;
	}
	#classification .list .list_item li span a{
		padding: 0px 12px;
		border-right: 1px solid #CCCCCC;
		font-size: 12px;
		color: #666666;
	}
	#classification .list .list_item li .left_tit a{
		color: #41BBEE;
		border: none;
	}
</style>

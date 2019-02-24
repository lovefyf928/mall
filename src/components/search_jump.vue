<template>
	<div>
		<!--<p class="sale">排序：<span class="sa">销量<img src="../assets/jt1.png" alt="" /><img src="../assets/jt2.png" alt="" /></span><span class="jg">价格<img src="../assets/jt1.png" alt="" /><img src="../assets/jt2.png" alt="" /></span></p>-->
		<div class="products">
			<div class="products_content">
				<ul>
					<li v-for="list in lists"  @click="f1(list.id)"><img :src="$root.path+list.image_thumbnail" alt="">
						<p>{{list.name}}</p><label><span>&yen;{{list.shop_price}}</span><button><img src="../assets/gouwuche.png"/></button></label>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex"
	export default {
		name: "search_jump",
		data() {
			return {
				lists: [],
				value: ""
			}
		},
		created(){
			// this.$axios.get(this.$root.path + 'api/advertising/searchShop').then((res) => {
			// 		console.log(res);
			// 		this.lists = res.data.data;
			// 	})
		},
		mounted() {
		  $('#app').css('backgroundColor','#ffffff');
		  this.$root.suibian.nav_isshow=false;

    if(this.$route.query.classificationId){
        this.$axios.get(this.$root.path + 'api/advertising/searchShop?id=' + this.$route.query.classificationId).then((res) => {
          console.log(res);
          this.lists = res.data.data;
        })
      }else if(this.$store.state.val) {
      console.log(this.$store.state.val);
				this.$axios.get(this.$root.path + 'api/advertising/searchShop?search=' + this.$store.state.val).then((res) => {
					console.log(res);
					this.lists = res.data.data;
				})
			}else {
				this.$axios.get(this.$root.path + 'api/advertising/searchShop').then((res) => {
					console.log(res);
					this.lists = res.data.data;
				})
			}
		},
		methods: {
      f1(id){
        console.log(this.lists);
        this.$root.suibian.id = id;
        console.log(this.$root.suibian.id);
        this.$router.push({path:'/mall/details'})
      }
		},
		computed: {
			...mapGetters([
				'getdata'
			])
		},
		watch: {
			getdata: function(val) {
				console.log(val);
				this.value = val
				if(val) {
					this.$axios.get(this.$root.path + 'api/advertising/searchShop?search=' + val).then((res) => {
						console.log(res);
						this.lists = res.data.data;
					})
				} else {
					this.$axios.get(this.$root.path + 'api/advertising/searchShop').then((res) => {
						console.log(res);
						this.lists = res.data.data;
					})
				}
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
	
	body {
		font-family: "微软雅黑";
		color: #333333;
		min-width: 1200px;
	}
	
	.sale {
		width: 1200px;
		margin: 0 auto;
		height: 20px;
		line-height: 20px;
		color: #333333;
		font-size: 12px;
		margin-top: 20px;
	}
	
	.sale span {
		display: inline-block;
		width: 49px;
		height: 18px;
		border: 1px solid #CCCCCC;
		text-align: center;
		color: #999999;
	}
	
	.sale span.sa {
		margin-right: 10px;
	}
	
	.sale span img {
		margin-right: 3px;
	}
	
	.products {
		width: 100%;
		margin: 0 auto;
	}
	
	.products .products_content {
		width: 1200px;
		margin: 0 auto;
	}
	
	.products ul {
		overflow: hidden;
	}
	
	.products ul>li {
		width: 228px;
		height: 260px;
		border: 1px solid #cccccc;
		margin-top: 10px;
		text-align: center;
		padding-top: 20px;
		float: left;
	}
	
	.products ul>li {
		margin-right: 10px;
	}
	
	.products ul>li>p {
		text-align: left;
		margin: 10px 18px 0;
		font-size: 14px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.products ul>li>label {
		margin-top: 15px;
		display: block;
	}
	
	.products ul>li>label>span {
		display: inline-block;
		margin-left: 18px;
		float: left;
		color: #ff3300;
	}
	
	.products ul>li>label>button {
		margin-right: 18px;
		float: right;
		width: 80px;
		height: 24px;
		border: 0;
		outline: none;
		background-color: #ffffff;
		;
	}
	
	.products ul>li:hover {
		border: 1px solid #41BBEE;
	}
	
	.products ul>li>img {
		width: 182px;
		height: 182px;
	}
	
	.clear {
		clear: both;
	}
	
	#banner {
		margin-top: 23px;
	}
</style>

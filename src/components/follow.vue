<template>
	<div id="follow">
		<div class="tou">
			<p>店铺关注</p>
		</div>
		<div class="main">
			<div class="hed">
				<p>全部店铺（{{count}}）</p>
			</div>
			<div class="follow_list">
				<div class="list" v-for="(list,index) in lists">
					<div class="tx">
						<img v-show="list.store.is_self != 0" src="../assets/yzzy.png" alt="" class="ourself">
						<img :src="'http://api.eawsp.com/'+list.store.store_url" alt="" class="store_img">
						<p class="store_name">{{list.store.store_name}}</p>
					</div>
					<div class="right">
						<div class="ding">
							<button style="margin-left: 28px;color: #41bbee;border: 1px solid #41bbee;">热销</button>
							<button>上新</button>
							<img src="../assets/lxkff2.png" alt="">
							<img src="../assets/jrdpf2.png" alt="" @click="goStore(list)">
							<img src="../assets/qxgzf2.png" alt="" @click="cancelFocus(index,list.store_id)">
						</div>
						<div class="xia">
							<div class="xia_list" v-for="i in list.store.commoditys">
								<img :src="'http://api.eawsp.com/'+i.image_thumbnail" alt="">
								<p>&yen;{{i.shop_price}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!--//分页-->
			<div class="fy">
				<img src="../assets/left.png" alt="" @click="prev">
				<p style="color: #41bbee">{{current_page}}<span style="color: #333">/{{last_page}}</span></p>
				<img src="../assets/reight.png" alt="" @click="next">
				<p>跳至</p>
				<input type="text" v-model="NUM">
				<p>页</p>
				<button @click="GD">跳转</button>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: "follow",
		data() {
			return {
				count: '',
				lists: [],
				current_page: '',
				next_page_url: '',
				prev_page_url: '',
				next_page: '',
				last_page: '',
				NUM: '',
			}
		},
		created() {
			let _this = this
			this.$axios.post("http://api.eawsp.com/api/user/setStoreCollection?token=" + sessionStorage.getItem("token"), {}).then(function(res) {
			  console.log(res);
				_this.lists = res.data.data.data;
				_this.count = res.data.data.count
				_this.current_page = res.data.data.current_page;
				_this.last_page = res.data.data.last_page;
				_this.prev_page_url = res.data.data.prev_page_url;
				_this.next_page_url = res.data.data.next_page_url
			})
		},
		methods: {
			goStore(id){
				this.$root.suibian.id = id.store_id;
				this.$router.push('/shop_index')
				
			},
			cancelFocus:function(num,id){
				this.lists.splice(num,1)
				this.$axios.post("http://api.eawsp.com/api/user/followStore?token=" + sessionStorage.getItem("token"), {
					store_id:id
				}).then((res)=>{
					this.count -= 1;
					
				})
			},
			// 分页上一页
			prev: function() {
				let _this = this
				this.$axios.post(_this.prev_page_url+'?token='+sessionStorage.getItem("token"), {
					
				}).then(function(res) {
					_this.lists = res.data.data.data;
					_this.count = res.data.data.count
					_this.current_page = res.data.data.current_page;
					_this.last_page = res.data.data.last_page;
					_this.prev_page_url = res.data.data.prev_page_url;
					_this.next_page_url = res.data.data.next_page_url
				})
			},
			// 分页下一页
			next: function() {
				let _this = this;
				this.$axios.post(_this.next_page_url+'?token='+sessionStorage.getItem("token"), {
				}).then(function(res) {
					_this.lists = res.data.data.data;
					_this.count = res.data.data.count
					_this.current_page = res.data.data.current_page;
					_this.last_page = res.data.data.last_page;
					_this.prev_page_url = res.data.data.prev_page_url;
					_this.next_page_url = res.data.data.next_page_url
				})
			},
			// 第几页
			GD: function() {
				let _this = this;
				if(_this.NUM == 1) {
					this.$axios.post("http://api.eawsp.com/api/user/setStoreCollection?token=" + sessionStorage.getItem("token")).then(function(res) {
						_this.lists = res.data.data.data;
						_this.count = res.data.data.count
						_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url
					})
				} else if(_this.NUM > _this.last_page) {
				} else {
					this.$axios.post(_this.next_page_url+'?token='+sessionStorage.getItem("token"), {
							page: _this.NUM
					}).then(function(res) {
						_this.lists = res.data.data.data;
						_this.count = res.data.data.count
						_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url
					})
				}

			}
		}
	}
</script>

<style scoped>
	body,
	html,
	#follow {
		width: 100%;
		height: 100%;
	}
	
	* {
		margin-block-start: 0em;
		margin-block-end: 0em;
		list-style: none;
		padding-inline-start: 0px;
		margin-top: 0;
	}
	
	#follow {
		width: 1000px;
		height: auto;
		float: left;
		margin-top: 30px;
		margin-left: 20px;
		/*overflow: hidden;*/
	}
	
	.tou {
		width: 100%;
		height: 60px;
		background: white;
		line-height: 60px;
		font-size: 16px;
		color: #333;
		float: left;
	}
	
	.tou>p {
		display: block;
		float: left;
		margin-left: 20px;
	}
	
	.main {
		width: 100%;
		background: white;
		float: left;
		margin-top: 30px;
		padding-bottom: 50px;
	}
	
	.hed {
		width: 100%;
		height: 70px;
		border-bottom: 1px solid #c9c9c9;
	}
	
	.hed p {
		display: block;
		line-height: 60px;
		font-size: 16px;
		color: #333;
		float: left;
		margin-top: 9px;
		padding: 0 20px 0 20px;
		border-bottom: 2px solid #41bbee;
	}
	
	.follow_list {
		width: 960px;
		float: left;
		margin-left: 20px;
		padding-bottom: 50px;
	}
	
	.list {
		width: 100%;
		height: 220px;
		border: 1px solid rgb(201, 201, 201);
		margin-top: 20px;
	}
	
	.tx {
		width: 260px;
		height: 220px;
		float: left;
		position: relative;
		text-align: center;
		border-right: 1px solid rgb(201, 201, 201);
	}
	
	.tx .ourself {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 71px;
		height: 30px;
		display: block;
	}
	
	.tx .store_img {
		width: 200px;
		height: 153px;
		padding-top: 33px;
	}
	
	.tx .store_name {
		width: 100%;
		height: 30px;
		line-height: 30px;
	}
	/*.tx #left_top{
  	position: absolute;
  	top: 0px;
  	left: 0px;
  }
 .tx>img{
 	width: 200px;
 	height: 150px;
 	padding-top: 20px;
 }*/
	/*.tx p.store_name{
    display: block;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #333;
    height: 30px;
    line-height: 30px;
    
    
  }*/
	
	.right {
		width: 699px;
		height: 100%;
		float: right;
	}
	
	.ding {
		width: 100%;
		height: 35px;
	}
	
	.ding button {
		width: 60px;
		height: 25px;
		float: left;
		border: 1px solid #ccc;
		background: white;
		text-align: center;
		line-height: 25px;
		margin-top: 5px;
		padding: 0;
		color: black;
	}
	
	.ding img {
		float: right;
		margin-right: 20px;
		margin-top: 8px;
	}
	
	.xia {
		width: 100%;
		height: 150px;
		float: left;
		margin-top: 25px;
		overflow: hidden;
	}
	
	.xia_list {
		width: 120px;
		height: 150px;
		background: white;
		float: left;
		margin-left: 17px;
	}
	
	.xia_list img {
		width: 120px;
		height: 120px;
	}
	
	.xia_list p {
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: #333;
		float: left;
		margin-top: 10px;
	}
	/*分页*/
	
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

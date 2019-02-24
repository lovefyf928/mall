<template>
	<div id="Receiving_address">
		<!--<div class="top_nav"><span>个人中心>会员中心>退货地址</span></div>-->
		<div class="content_body">
			<p class="title">收货地址</p>
			<div class="content">
				<div class="content_bottom">
					<img src="../assets/xzdz.png" @click="addAddress" /><span class="tishi">您已经创建<i class="addresas_count">{{has_addr}}</i>个收货地址，最多可创建<i class="all_addr">20</i>个。</span>
					<ul>
						<li v-for="item in items">
							<img :src="item.is_default=='1'?require('../assets/mrdz.png'):require('../assets/swmr.png')" @click='set_default(item.id)' />
							<p class="text"><span class="text_left">姓名：</span><span class="text_left_value">{{item.addre_name}}</span></p>
							<p class="text"><span class="text_left">电话：</span><span class="text_left_value">{{item.addre_phone}}</span></p>
							<p class="text"><span class="text_left">地址：</span><span class="text_left_value">{{item.province}}</span><span>{{item.city}}</span><span>{{item.county}}</span><span>{{item.address}}</span></p>
							<p class="text"><span class="text_left">邮编：</span><span class="text_left_value">{{item.postcode}}</span></p>
							<div class="query" :id='item.id'><span class="update" @click="updateAddr">修改&nbsp;|</span><span class="delete" @click="deleteAddr">&nbsp;删除</span></div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Receiving_address",
		data() {
			return {
				items: [],
				has_addr: '0',
			}
		},
		methods: {
			addAddress: function() {
				this.$router.push({
					path: '/whole/add_address'
				});
			},
			set_default: function(id) {
        console.log(id);
        var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/setAddress?token=" + sessionStorage.getItem("token"), {
					id: id
				}).then(function(res) {
					console.log(res);
					that.items = res.data.data;
					for(var i = 0; i < that.items.length; i++) {
						that.id = that.items[i].id;
						if(that.items[i].is_default == "1") {
							that.items[i].img = require("../assets/mrdz.png");
						} else {
							that.items[i].img = require("../assets/swmr.png");
						}
					}
					
				})
			},
			updateAddr: function(event) {
				var updateId = event.target.parentNode.id;
				for(var i=0;i<this.items.length;i++){
					if(updateId==this.items[i].id){
						this.$root.updateItem=this.items[i];
					}
				}
				this.$router.push({path:'/whole/update_address'})
			},
			deleteAddr: function(event) {
				var deleteId = event.target.parentNode.id;
				var that = this;
				that.$confirm('您确定要删除该收货地址吗？', '删除', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {

					this.$axios.post("http://api.eawsp.com/api/user/delAddress?token=" + sessionStorage.getItem("token"), {
						id: deleteId
					}).then(function(res) {
						console.log(res);
						that.has_addr=res.data.data.count;
						//弹框
						if(res.data.code == 0) {
							that.$alert('删除成功', '删除', {
								confirmButtonText: '确定',
								callback: action => {
									that.$axios.post("http://api.eawsp.com/api/user/getAddress?token=" + sessionStorage.getItem("token"), {

									}).then(function(res) {
										console.log(res);
										that.items = res.data.data;
									})
								}
							});
						}

					})

				}).catch(() => {
					//		          this.$message({
					//		            type: 'info',
					//		            message: '已取消删除'
					//		          });          
				});
			},

		},
		created() {
			var that = this;
			
			console.log(sessionStorage.getItem("token"));
			//					console.log("http://192.168.1.93/api/user/getAddress?token="+sessionStorage.getItem("token"));
			this.$axios.post("http://api.eawsp.com/api/user/getAddress?token=" + sessionStorage.getItem("token"), {

			}).then(function(res) {
				console.log(res);
//				console.log(res.data.data[count]);
				that.items = res.data.data;
				that.has_addr=res.data.data.count;
				console.log(that.items);
				var arr = [];
				for (var key in that.items) {
				    arr.push(that.items[key]);
        }
        arr.pop();
				that.items = arr;
      })
		}
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	ul,
	ol {
		list-style: none;
	}
	
	#Receiving_address {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
	}
	
	#Receiving_address .content_body .title {
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#Receiving_address .content_body .content {
		padding: 30px 86px 80px 86px;
		background-color: #FFFFFF;
		width: 828px;
	}
	
	#Receiving_address .content_body .content .content_bottom span.tishi {
		margin-left: 20px;
		font-size: 12px;
		color: #999999;
	}
	
	#Receiving_address .content_body .content .content_bottom span.tishi i {
		font-style: normal;
		color: #ff3300;
	}
	
	#Receiving_address .content_body .content .content_bottom ul li {
		margin-top: 20px;
		border: 2px solid #CCCCCC;
		height: 174px;
		position: relative;
	}
	
	#Receiving_address .content_body .content .content_bottom ul li img {
		position: absolute;
		right: 0;
		top: 0;
	}
	
	#Receiving_address .content_body .content .content_bottom ul li p {
		font-size: 14px;
		color: #333333;
		margin-top: 20px;
		font-size: 15px;
		line-height: 15px;
		padding-left: 26px;
	}
	
	#Receiving_address .content_body .content .content_bottom ul li .query {
		text-align: right;
		font-size: 15px;
		position: absolute;
		right: 16px;
		bottom: 27px;
    cursor: pointer;
	}
</style>

<template>
	<div id="Order">
		<div class="tou">
			<p>我的订单</p>
		</div>
		<div class="mian">
			<ul class="zhuangtai">
				<li style="color: #41bbee">全部订单</li>
			</ul>
			<div class="search">
				<input type="text" name="search" id="search" value="" placeholder="请输入商品名称或者订单编号搜索" /><span class="search_btn">搜索</span>
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
			<div class="box22" v-for="list in lists">
				<div class="top">
					<div class="shijian"><span>{{list.created_at}}</span>&nbsp;&nbsp;订单号：{{list.sn}}</div>
					<div class="dianjia"><img style="width: 24px;height: 24px" :src="path+list.store.store_url">&nbsp;&nbsp;{{list.store.store_name}}</div>
					<div class="dianjia"><img style="width: 24px;height: 24px" src="../assets/kf1.png" alt="">&nbsp;&nbsp;和我联系</div>
					<div class="dianjia"  @click="tousu(list.store.id)">&nbsp;&nbsp;投诉商家</div>
				</div>
				<div class="SP">
					<div class="shangpin">
						<div class="left2">
							<div class="left1">
								<div class="left">
									<div class="left_1" v-for="list1 in list.order_goods">
										<img :src="path+list1.commodity.image_thumbnail" alt="">
										<p class="miaoshu">{{list1.goods_name}}</p>
										<p class="danjia">￥{{list1.goods_price}}</p>
										<p class="shuliang">{{list1.goods_number}}</p>
										<div class="shouhou">
											<p @click="shouhou(list)">{{list.is_after_sale==0?'申请售后':'售后中'}}</p>
										</div>
									</div>
								</div>
								<div style="border-top: 1px solid rgb(236,236,236);" class="shifukuan">
									<p style="margin-top: 20px">&yen;{{list.count}}</p>
								</div>
							</div>
							<div style="border-top: 1px solid rgb(236,236,236);" class="jiaoyizhuangtai">
								<p style="color: #ff0000;margin-top: 20px" v-show="list.status==0">等待付款</p>
								<p style="color: #ff0000;margin-top: 20px" v-show="list.status==1">等待发货</p>
								<p style="color: #ff0000;margin-top: 20px" v-show="list.status==2">已发货</p>
								<p style="color: #ff0000;margin-top: 20px" v-show="list.status==3">交易关闭</p>
								<p style="color: #ff0000;margin-top: 20px" v-show="list.status==4">交易成功</p>
								<p style="color: #ff0000;margin-top: 20px" v-show="list.status==5">退货</p>

								<p @click="order_details(list.status,list.sn,list.id)">订单详情</p>
								<p v-show="list.status==(2||4)" @click="look_delivery">查看物流</p>
							</div>
						</div>
						<div style="border-top: 1px solid rgb(236,236,236);" class="jiaoyicaozuo">
							<button class="fukuan" v-show="list.status=='0'" @click='pay(list.id,list.count)'>付款</button>
							<button class="pingjia" v-show="list.status==4">评价</button>
							<button class="querenshouhuo" v-show="list.status==2" @click="receiveGoods(list.id)">确认收货</button>
							<p v-show="list.status==0" @click="cancel_order(list.id)">取消订单</p>
							<!--<p v-show="'true'">再次购买</p>-->
							<p v-show="list.status==3">交易关闭</p>
						</div>
					</div>
				</div>
			</div>
			<!--<div class="top">-->
			<!--<div class="shijian"><span>2018-10-9</span>&nbsp;&nbsp;订单号：13246546213524964123</div>-->
			<!--<div class="dianjia"><img style="width: 24px;height: 24px" src="../assets/jiaoyi1.png" alt="">&nbsp;&nbsp;优智优品</div>-->
			<!--<div class="dianjia"><img style="width: 24px;height: 24px" src="../assets/kf1.png" alt="">&nbsp;&nbsp;和我联系</div>-->
			<!--</div>-->
			<!--<div class="SP">-->
			<!--<div class="shangpin">-->
			<!--<div class="left">-->
			<!--<img src="../assets/t2.png" alt="">-->
			<!--<p class="miaoshu">这是一个由优智优品公司出品的喝水的小杯子</p>-->
			<!--<p class="danjia">￥88.8</p>-->
			<!--<p class="shuliang">1</p>-->
			<!--<div class="shouhou"><p>申请售后</p><p>投诉商家</p></div>-->
			<!--</div>-->
			<!--<div class="right">-->
			<!--<div style="border-top: 1px solid rgb(236,236,236);" class="shifukuan"><p style="margin-top: 20px">￥88.8</p></div>-->
			<!--<div style="border-top: 1px solid rgb(236,236,236);" class="jiaoyizhuangtai">-->
			<!--<p style="color: #ff0000;margin-top: 20px">等待付款</p>-->
			<!--<p>订单详情</p>-->
			<!--<p>查看物流</p>-->
			<!--</div>-->
			<!--<div style="border-top: 1px solid rgb(236,236,236);" class="jiaoyicaozuo">-->
			<!--<button class="fukuan">付款</button>-->
			<!--<button class="pingjia">评价</button>-->
			<!--<button class="querenshouhuo">确认收货</button>-->
			<!--<p>再次购买</p>-->
			<!--<p>取消订单</p>-->
			<!--</div>-->
			<!--</div>-->
			<!--</div>-->
			<!--</div>-->

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
		name: "Order",
		data() {
			return {
				status: '',
				lists: [],
				current_page: '',
				last_page: '',
				prev_page_url: '',
				next_page_url: '',
				NUM: '',
				show: true,
				isPay: false,
				isRemark: false,
				checkReceve: false,
				cancel: false,
				purchase: false,
				close: false,
				path: 'http://api.eawsp.com/',
				pathUrl:'',
				statusText: ''
			}
		},
		created() {
			let _this = this
			this.$axios.post("http://api.eawsp.com/api/user/getMeOrder", {
				token: sessionStorage.getItem("token"),
			}).then(function(res) {
				console.log(res);
				_this.pathUrl=res.data.data.path;
				_this.lists = res.data.data.data;
				_this.current_page = res.data.data.current_page;
				_this.last_page = res.data.data.last_page;
				_this.prev_page_url = res.data.data.prev_page_url;
				_this.next_page_url = res.data.data.next_page_url;

				for(var i = 0; i < _this.lists.length; i++) {
					if(_this.lists[i].status == "0") {
						_this.statusText = "等待付款";
					} else if(_this.lists[i].status == "1") {
						_this.lists[i].statusText = "等待发货";
					} else if(_this.lists[i].status == "2") {
						_this.statusText = "已发货";
					} else if(_this.lists[i].status == "3") {
						_this.statusText = "交易关闭";
					} else if(_this.lists[i].status == "4") {
						_this.statusText = "交易成功";
					} else if(_this.lists[i].status == "5") {
						_this.statusText = "退货";
					}
				}

			})
		},
		methods: {
			// 分页上一页
			prev: function() {
				let _this = this
				this.$axios.post(_this.prev_page_url, {
						token: sessionStorage.getItem("token"),
				}).then(function(res) {
					console.log(res);
					_this.lists = res.data.data.data;
					_this.pathUrl=res.data.data.path;
					_this.current_page = res.data.data.current_page;
					_this.last_page = res.data.data.last_page;
					_this.prev_page_url = res.data.data.prev_page_url;
					_this.next_page_url = res.data.data.next_page_url;
				})
			},
			// 分页下一页
			next: function() {
				let _this = this;
				this.$axios.post(_this.next_page_url, {
						token: sessionStorage.getItem("token"),
				}).then(function(res) {
					console.log(res);
					_this.lists = res.data.data.data;
					_this.pathUrl=res.data.data.path;
					_this.current_page = res.data.data.current_page;
					_this.last_page = res.data.data.last_page;
					_this.prev_page_url = res.data.data.prev_page_url;
					_this.next_page_url = res.data.data.next_page_url;
				})
			},
			// 第几页
			GD: function() {
				let _this = this;
				if(_this.NUM == 1) {
					this.$axios.post("http://api.eawsp.com/api/user/getMeOrder", {
						token: sessionStorage.getItem("token"),
					}).then(function(res) {

						_this.lists = res.data.data.data;
						_this.pathUrl=res.data.data.path;
						_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url;
					})
				} else if(_this.NUM > _this.last_page) {
					console.log("超出总页数")
				} else {
					this.$axios.post(_this.pathUrl, {
						token: sessionStorage.getItem("token"),
						page: _this.NUM
					}).then(function(res) {
						_this.lists = res.data.data.data;
						_this.pathUrl=res.data.data.path;
						_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url;
					})
				}

			},
			shouhou: function(arr) {
				console.log(arr);
				this.$router.push({name:'AfterSales',params:{
					listArr:arr
				}});
			},
			tousu: function(store_id) {
				console.log(store_id);
				this.$router.push({name:'Complaint_merchant',params:{
					store_id:store_id
				}});
			},
			order_details: function(status, order_num,order_id) {
				if(status == 0) {
					this.$router.push({
						name: 'waiting_pay',
						params: {
							order_status: status,
							sn: order_num,
							order_id:order_id
						}
					}); //未支付查看订单详情
				} else if(status == 1) {
					this.$router.push({
						name: 'waiting_send',
						params: {
							order_status: status,
							sn: order_num,
							order_id:order_id
						}
					}); //未发货查看详情页
				} else if(status == 2) {
					this.$router.push({
						name: 'purchase_success',
						params: {
							order_status: status,
							sn: order_num,
							order_id:order_id
						}
					}) //已经发货查看详情跟购买成功详情页类似
				} else if(status == 3) {
					this.$router.push({
						name: 'waiting_pay',
						params: {
							order_status: status,
							sn: order_num,
							order_id:order_id
						}
					}) //取消订单与关闭类似
				} else if(status == 4) {
					this.$router.push({
						name: 'purchase_success',
						params: {
							order_status: status,
							sn: order_num,
							order_id:order_id
						}
					}) //已完成
				} else if(status == 5) {
					this.$router.push({
						name: 'purchase_success',
						params: {
							order_status: status,
							sn: order_num,
							order_id:order_id
						}
					}) //退货
				}
			},
			pay: function(order_num,money) {
				  this.$router.push({
						path: '/success',
					})
				  this.$root.sn =order_num;
         		  this.$root.submitdata.price=money

			},
			look_delivery: function() {
				this.$router.push({
					path: '/whole/logistics'
				});
			},
			cancel_order: function(id) {
				var that = this;

          this.$axios.post(this.path + 'api/user/cancelStatus?token=' + sessionStorage.getItem("token"), {
            id: id
          }).then(function(res) {
            that.$alert('取消订单成功', '取消', {
              confirmButtonText: '确定',
              callback: action => {
                that.$axios.post("http://api.eawsp.com/api/user/getMeOrder", {
                  token: sessionStorage.getItem("token"),
                }).then(function(res) {
                  console.log(res);
                  that.lists = res.data.data.data;
                  that.current_page = res.data.data.current_page;
                  that.last_page = res.data.data.last_page;
                  that.prev_page_url = res.data.data.prev_page_url;
                  that.next_page_url = res.data.data.next_page_url;
                  for(var i = 0; i < that.lists.length; i++) {
                    if(that.lists[i].status == "0") {
                      that.lists[i].statusText = "等待付款";
                    } else if(that.lists[i].status == "1") {
                      that.lists[i].statusText = "等待发货";
                    } else if(that.lists[i].status == "2") {
                      that.lists[i].statusText = "已发货";
                    } else if(that.lists[i].status == "3") {
                      that.lists[i].statusText = "交易关闭";
                    } else if(that.lists[i].status == "4") {
                      that.lists[i].statusText = "交易成功";
                    } else if(that.lists[i].status == "5") {
                      that.lists[i].statusText = "退货";
                    }
                  }
                })

              }
            });
          })


			},
			receiveGoods: function(id) {
					console.log(id);
				var that = this;
				console.log(id);
				that.$confirm('请您在确认收到商品后点击？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					center: true
				}).then(() => { //点击确定后的回调

					that.$axios.post(that.path + 'api/user/confirmReceipt?token=' + sessionStorage.getItem("token"), {
						id: id
					}).then(function(res) {
						console.log(res);

						that.$confirm('确认收货成功，去评价吗？', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning',
							center: true
						}).then(() => {
							that.$router.push({
								name: 'evaluate'
							}); //点击确定后的回调
						}).catch(() => {});

					})
				}).catch(() => {});

			}
		}
	}
</script>

<style scoped>
	body,
	html,
	#Order {
		width: 100%;
		height: 100%;
	}
	
	* {
		margin-block-start: 0em;
		margin-block-end: 0em;
		list-style: none;
		padding-inline-start: 0px;
	}
	
	#Order {
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
	
	.tou p {
		display: block;
		float: left;
		margin-left: 20px;
	}
	
	.mian {
		width: 1000px;
		background: white;
		float: left;
		height: auto;
		margin-top: 30px;
		/*overflow: hidden;*/
		padding-bottom: 50px;
	}
	
	.zhuangtai {
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
		border-bottom: 2px solid #41bbee;
	}
	
	.search {
		width: 363px;
		height: 30px;
		line-height: 60px;
		float: right;
		overflow: hidden;
		padding: 15px 20px 15px 0;
	}
	
	.search input {
		display: block;
		float: left;
		width: 298px;
		height: 28px;
		background: #ECECEC;
		border: 1px solid #CCCCCC;
		padding: 0;
		font-size: 12px;
	}
	
	.search .search_btn,
	.search select {
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
	
	.search select {
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
	
	.box22 {
		width: 980px;
		_height: 182px;
		min-height: 182px;
		float: left;
	}
	
	.baob,
	.top {
		width: 960px;
		float: left;
		margin-left: 20px;
		border-spacing: 0px;
		height: 40px;
		background: rgb(236, 236, 236);
		margin-top: 20px;
	}
	
	.baob li {
		font-size: 12px;
		color: #333;
		height: 40px;
		text-align: center;
		float: left;
		display: block;
		line-height: 40px;
	}
	
	.baob li:nth-child(1) {
		width: 400px;
	}
	
	.baob li:nth-child(2),
	.baob li:nth-child(4) {
		width: 60px;
	}
	
	.baob li:nth-child(3),
	.baob li:nth-child(5),
	.baob li:nth-child(6) {
		width: 80px;
	}
	
	.baob li:nth-child(7),
	.baob li:nth-child(8) {
		width: 100px;
	}
	
	.baob li select {
		border: none;
		background: rgb(236, 236, 236);
		font-size: 12px;
	}
	
	.shijian {
		width: 400px;
		float: left;
		font-size: 12px;
		color: #333;
		line-height: 40px;
		text-indent: 20px;
	}
	
	.shijian span {
		color: #ccc;
	}
	
	.dianjia {
		height: 40px;
		float: left;
		margin-left: 60px;
		font-size: 12px;
		color: #333;
		line-height: 40px;
	}
	
	.dianjia img {
		display: block;
		float: left;
		margin-top: 10px;
		width: 24px;
		height: 24px;
		padding-right: 5px;
	}
	
	.SP {
		width: 960px;
		float: left;
		margin-left: 20px;
		overflow: hidden;
		border-bottom: 1px solid rgb(236, 236, 236);
	}
	
	.shangpin {
		width: 958px;
		float: left;
		height: auto;
		overflow: hidden;
		/*margin-left: 20px;*/
		border-spacing: 0px;
		border-left: 1px solid rgb(236, 236, 236);
		border-right: 1px solid rgb(236, 236, 236);
		background: white;
	}
	
	.shangpin img {
		width: 80px;
		height: 80px;
		float: left;
		margin-top: 20px;
		margin-left: 15px;
		padding-bottom: 20px;
	}
	
	.miaoshu {
		width: 270px;
		display: block;
		float: left;
		margin-top: 20px;
		margin-left: 10px;
		font-size: 12px;
	}
	
	.danjia {
		width: 80px;
		display: block;
		float: left;
		margin-top: 20px;
		margin-left: 85px;
		font-size: 12px;
		text-align: center;
	}
	
	.shuliang {
		width: 60px;
		display: block;
		float: left;
		margin-top: 20px;
		font-size: 12px;
		text-align: center;
	}
	
	.shouhou {
		width: 80px;
		display: block;
		float: left;
		margin-top: 20px;
		font-size: 12px;
		text-align: center;
	}
	
	.shouhou p:hover {
		color: #41bbee;
		cursor: pointer;
	}
	
	.left2 {
		width: 863px;
		overflow: hidden;
		float: left;
		border-right: 1px solid rgb(236, 236, 236);
	}
	
	.left1 {
		width: 762px;
		overflow: hidden;
		float: left;
		border-right: 1px solid rgb(236, 236, 236);
	}
	
	.left {
		width: 682px;
		float: left;
		border-top: 1px solid rgb(236, 236, 236);
		border-right: 1px solid rgb(236, 236, 236);
	}
	
	.left_1 {
		width: 682px;
		height: 120px;
		border-bottom: 1px solid rgb(236, 236, 236);
	}
	/*.right{*/
	/*width: 275px;*/
	/*height: 100%;*/
	/*!*border-left: 1px solid rgb(236,236,236);*!*/
	/*float: right;*/
	/*}*/
	
	.shifukuan {
		display: block;
		/*overflow:hidden;*/
		float: left;
		width: 79px;
		height: 120px;
	}
	
	.shifukuan p {
		display: block;
		margin-top: 20px;
		text-align: center;
		font-size: 12px;
		color: #41bbee;
	}
	
	.jiaoyizhuangtai {
		float: left;
		width: 100px;
		text-align: center;
		font-size: 12px;
		color: #333333;
		height: 120px;
	}
	
	.jiaoyizhuangtai p:hover {
		color: #41bbee;
		cursor: pointer;
	}
	
	.jiaoyicaozuo {
		float: left;
		width: 94px;
		height: 120px;
		text-align: center;
		font-size: 12px;
		color: #41bbee;
	}
	
	.jiaoyicaozuo button {
		width: 70px;
		height: 25px;
		text-align: center;
		line-height: 25px;
		padding: 0;
	}
	
	.pingjia {
		border: 1px solid rgb(219, 219, 219);
		background: white;
		color: #333;
		margin-top: 20px;
	}
	
	.fukuan {
		border: 1px solid #41bbee;
		background: white;
		color: #41bbee;
		margin-top: 20px;
	}
	
	.querenshouhuo {
		border: 1px solid #41bbee;
		background: #41bbee;
		color: white;
		margin-top: 20px;
	}
	
	.jiaoyicaozuo p {
		color: #333;
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

<template>
	<div id="waiting_pay">
		<div class="nav_top">我的位置：首页>我的订单>订单详情>订单号：{{this.$route.params.sn}}</div>
		<div class="content">
			<div class="status">
				<div class="left">
					<p class="title">商品金额</p>
					<img :src="storePicture" />
					<p class="text">
						<span>商品金额：&yen;{{total_price}}</span>
						<span>下单时间：{{created_at}}</span>
					</p>
					<p class="tishi">您当前订单还没有支付，请您及时支付，如有什么疑问请联系优智通客服</p>
				</div>
				<div class="right">
					<p class="title">订单状态</p>
					<img :src="status_img" />
					<p class="wating_text">{{text}}</p>
					<a href="#" @click="JumpToOther()">{{buttonText}}</a>
				</div>

			</div>

			<p class="send_mes">订单信息</p>
			<div class="send_mes_content">
				<div style="margin-left: 17px;padding-top: 10px">
					<div class="send_msg">
						<p class="send_content">配送信息</p>
					</div>
					<div class="mes_box child_content">
						<p class="send_time">送货时间：{{send_time}}</p>
						<p class="send_time">送货地址：{{send_addr}}</p>
						<p class="send_time">配送方式：-</p>
					</div>
					<div class="send_msg">
						<p class="send_content">订单信息</p>
					</div>
					<div class="child_content">
						<span class="num">订单号：{{this.$route.params.sn}}</span>
						<!--<span class="num">支付方式：{{pay_method}}</span>-->
						<span class="num">交易状态：{{change_state}}</span>
					</div>
				</div>
				<div>
					<table>
						<tr class="header" align="center" style="background: #cccccc">
							<td>商品详情</td>
							<td>数量</td>
							<td>单价</td>
							<td>总计</td>
						</tr>
						<tr align="center" v-for="list in lists">
							<td style="height: 127px" class="firstTd">
								<img style="width: 82px;height: 82px" :src="path+list.commodity.image_thumbnail">
								<p style="display: inline-block;float: right" class="goods_name">
									<span style="display: inline-block;margin-top: 35px;margin-right: 74px">{{list.goods_name}}</span>
								</p>
							</td>
							<td>
								<span>{{list.goods_number}}</span>
							</td>
							<td>
								￥88.90
							</td>
							<td>
								<span>&yen;{{list.goods_price}}</span>
							</td>
						</tr>
					</table>
				</div>
				<div style="padding-left: 852px;margin-top: 21px;padding-bottom: 15px">
					<span>总金额：</span><span style="color: #ff0000">&yen;{{total_price}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "waiting_pay",
		data() {
			return {
				path: 'http://api.eawsp.com/',
				order_num: '',
				total_price: '',
				created_at: '',
				delivery_time: '',
				send_time: '',
				send_addr: '',
				lists: [], //循环展示商品
				payment_method: '',
				pay_method: '',
				change_state: '',//交易状态
				//订单状态页面字段
				status_img:'',
				text:'',
				buttonText:'',
        storePicture:''
			}
		},
		created() {
			console.log(this.$route.params.order_status);
			var that = this;
			if(this.$route.params.order_status=='0'){
				console.log(1);
				this.status_img=require('../assets/waitingfukuan.png');
				this.text='请支付';
				this.buttonText='立即支付';
			}else if(this.$route.params.order_status=='3'){
				console.log(2);
				this.status_img=require('../assets/jiaoyiguanbi.png');
				this.text='交易关闭';
				this.buttonText='立即购买';
			}
			this.$axios.post(this.path + 'api/user/waitPay?token=' + sessionStorage.getItem("token"), {
				sn: that.$route.params.sn,
				status:that.$route.params.order_status
			}).then(function(res) {
				console.log(res);
				var result = res.data.data;
				that.storePicture='http://api.eawsp.com/'+res.data.data.store.store_url
				that.lists = result.order_goods;
				that.total_price = result.total_price;
				that.created_at = result.created_at
				if(result.delivery_time == 0) {
					that.send_time = '上午下午均可'
				} else if(result.delivery_time == 1) {
					that.send_time = '仅上午'
				} else if(result.delivery_time == 2) {
					that.send_time = '仅下午'
				}
				that.send_addr = result.province + result.city + result.county + result.user_address;
				that.lists = result.order_goods;
				if(result.payment_method == 1) {
					that.pay_method = '支付宝支付';
				} else if(result.payment_method == 2) {
					that.pay_method = '微信支付';
				} else if(result.payment_method == 3) {
					that.pay_method = '余额支付';
				}else if(result.payment_method == 4) {
					that.pay_method = '信用额度支付';
				}else if(result.payment_method == 5) {
					that.pay_method = '银行卡支付';
				}
				if(result.status == 0) {
					that.change_state = '未支付';
				} else if(result.status == 1) {
					that.change_state = '未发货';
				} else if(result.status == 2) {
					that.change_state = '已发货';
				} else if(result.status == 3) {
					that.change_state = '已取消';
				} else if(result.status == 4) {
					that.change_state = '已完成';
				} else if(result.status == 5) {
					that.change_state = '退货';
				}
			})
			
//			console.log(that.lists);
		},
    methods: {
      JumpToOther(){
       
          this.$root.sn = this.$route.params.order_id;
          this.$root.submitdata.price=this.total_price
          this.$router.push("/success")
       
       
        
      }
    }
		

	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	ul,
	dl,
	ol {
		list-style: none;
	}
	
	#waiting_pay {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
		font-size: 14px
	}
	
	#waiting_pay .nav_top {
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#waiting_pay .content {
		width: 1000px;
	}
	
	#waiting_pay .content .status {
		overflow: hidden;
	}
	
	#waiting_pay .content .left {
		width: 490px;
		background-color: #FFFEFE;
		float: left;
	}
	
	#waiting_pay .content .left p.title {
		height: 49px;
		line-height: 49px;
		padding-left: 30px;
		border-bottom: 1px solid #E8E8E8;
		background: url(../assets/zhuozhong.png) no-repeat 20px center;
	}
	
	#waiting_pay .content .left img {
		margin-left: 40px;
		padding-top: 40px;
    width: 188px;
    height: 112px;
	}
	
	#waiting_pay .content .left .text {
		display: inline-block;
		margin-left: 12px;
		vertical-align: bottom;
	}
	
	#waiting_pay .content .left .text span {
		display: block;
		height: 16px;
		padding-bottom: 20px;
	}
	
	#waiting_pay .content .left .tishi {
		padding: 30px 40px 50px;
		color: #999999;
		line-height: 20px;
	}
	
	#waiting_pay .content .right {
		width: 490px;
		background-color: #FFFEFE;
		float: left;
		margin-left: 20px;
	}
	
	#waiting_pay .content .right .title {
		height: 49px;
		line-height: 49px;
		padding-left: 30px;
		border-bottom: 1px solid #E8E8E8;
		background: url(../assets/zhuozhong.png) no-repeat 20px center;
	}
	
	#waiting_pay .content .right img {
		padding: 40px 0px 30px;
		display: block;
		margin: 0 auto;
	}
	
	#waiting_pay .content .right .wating_text {
		text-align: center;
		margin-bottom: 24px;
		font-size: 14px;
	}
	
	#waiting_pay .content .right a {
		display: block;
		width: 148px;
		height: 38px;
		border: 1px solid #41BBEE;
		line-height: 38px;
		text-align: center;
		color: #666666;
		margin: 0 auto;
		margin-bottom: 60px;
		text-decoration: none;
		background-color: lightcyan;
	}
	
	#waiting_pay .send_mes {
		margin-top: 40px;
		width: 150px;
		height: 50px;
		color: #f9f9f9;
		line-height: 50px;
		text-align: center;
		font-size: 16px;
		background: url(../assets/dingdan.png) no-repeat 20px 20px;
		background-color: #41BBEE;
	}
	
	#waiting_pay .send_mes_content .send_msg {
		border-left: 5px solid #333333;
	}
	
	#waiting_pay .send_mes_content .send_msg .send_content {
		padding-left: 6px;
	}
	
	#waiting_pay .send_mes_content .child_content {
		padding-top: 10px;
		margin-left: 41px;
	}
	
	#waiting_pay .send_mes_content .num {
		margin-right: 200px;
	}
	
	table {
		margin-top: 17px;
		border: 1px solid black;
		border-collapse: collapse;
	}
	
	tr,
	td {
		border: 1px solid #e6e6e6;
	}
	
	.header td {
		height: 30px;
	}

	.header td:nth-child(1) {
		width: 604px;
	}

	.header td:nth-child(n+2) {
		width: 145px;
	}
	
	.header tr:nth-child(2) {
		height: 126px;
	}
	
	.send_mes_content {
		background: #ffffff;
	}
	
	.send_time:nth-child(n+2) {
		margin-top: 10px;
	}
	
	.send_time:nth-child(3) {
		margin-bottom: 20px;
	}
</style>

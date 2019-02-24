<template>
	<div id="purchase_success">
		<div class="nav_top">我的位置：首页>我的订单>订单详情>订单号：{{this.$route.params.sn}}</div>
		<div class="content">
			<div class="status">
				<div class="left">
					<p class="title">订单信息</p>
					<img :src="store_img" />
					<p class="text">
						<span>商品金额：&yen;{{total_price}}</span>
						<span>下单时间：{{created_at}}</span>
					</p>
					<p class="pay_tishi">订单已经完成：感谢您在优智优品商城购物，欢迎您对本次交易及所购商品进行评价或者申请售后。</p>
				</div>
				<div class="right">
					<p class="title">订单状态</p>
					<img :src="status_img" />
					<p class="wating_text">{{text}}</p>
					<a href="#" @click="goPage()">{{buttonText}}</a>
				</div>

			</div>

			<p class="purchase_success_mes">物流信息</p>
			<div class="purchase_success_title">
				<img src="../assets/kuaidi.png" />
				<div class="sendperson">
					<span>运单号：{{delivery_num}}</span>
					<span>配送员：{{delivery_name}}</span>
				</div>
			</div>
			<div class="xiangqing">
				<div class="left">
					<img src="../assets/wancheng.png" />
					<img src="../assets/xiaoyuandain1.png" />
					<img src="../assets/fahuo.png" />

				</div>
				<dl class="right">
					<li>
						<p class="addr">您的订单已经发到转运中心，即将发往红墙国际</p>
						<p class="time">2018-10-12 12:21:13</p>
					</li>
					<li>
						<p class="addr">卖家发货</p>
						<p class="time">2018-10-12 12:21:13</p>
					</li>
				</dl>
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
						<span class="num">支付方式：{{pay_method}}</span>
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
							<td style="height: 127px" class="first_td">
								<img style="width: 82px;height: 82px" :src="path+list.commodity.image_thumbnail">
								<div style="display: inline-block;float: right">
									<span style="display: inline-block;margin-top: 35px;margin-right: 74px">{{list.goods_name}}</span>
								</div>
							</td>
							<td>
								<span>{{list.goods_number}}</span>
							</td>
							<td>
								￥{{total_price}}
							</td>
							<td>
								<span>&yen;{{list.goods_price}}</span>
							</td>
						</tr>
					</table>
				</div>
				<div style="padding-left: 852px;margin-top: 21px;padding-bottom: 15px">
					<span>总金额：</span><span style="color: #ff0000">￥88.90</span>
				</div>
			</div>

			<!--<div class="tishi">
				<p class="tit">温馨提示</p>
				<p class="txt">本页面物流查询信息由快递公司查询</p>
				<p class="txt">物流快递信息有可能存在延迟，可能会导致您的物流信息长时间没有更新，敬请耐心期待。（延迟时间可能从1到3天不等，EMS快递的物流配送信息可能最多有一周左右的延迟）</p>
			</div>-->
		</div>

	</div>
</template>

<script>
	export default {
		name: 'purchase_success',
		data() {
			return {
				path: 'http://api.eawsp.com/',
				order_num: '',
				store_img:'',
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
				delivery_num:'',
				delivery_name:'',
				data_id:'',
			}
		},
		created() {
			var that = this;
			
			this.data_id=this.$route.params.order_id;
			if(this.$route.params.order_status=='2'){//已发货
//				console.log(1);
				this.status_img=require('../assets/yifahuo.png');
				this.text='已经发货';
				this.buttonText='查看物流';
			}else if(this.$route.params.order_status=='4'){//交易完成
//				console.log(2);
				this.status_img=require('../assets/yiwancheng.png');
				this.text='交易完成';
				this.buttonText='立即购买';
			}else if(this.$route.params.order_status=='5'){
//				console.log(2);
				this.status_img=require('../assets/yiwancheng.png');
				this.text='退货';
				this.buttonText='立即购买';
			}
			console.log(that.$route.params.sn,that.$route.params.order_status);
			this.$axios.post(this.path + 'api/user/alreadyPay?token=' + sessionStorage.getItem("token"), {
				sn: that.$route.params.sn,
				status:that.$route.params.order_status
			}).then(function(res){
				console.log(res);
				var result = res.data.data;
        that.lists = result.order_goods;
				that.total_price = result.total_price;
				that.created_at = result.created_at;
				if(result.delivery_time == 0) {
					that.send_time = '上午下午均可';
				} else if(result.delivery_time == 1) {
					that.send_time = '仅上午';
				} else if(result.delivery_time == 2) {
					that.send_time = '仅下午';
				};
				that.send_addr = result.province + result.city + result.county + result.user_address;
				that.lists = result.order_goods;
				if(result.fund_info.pay_type == 1) {
					that.pay_method = '支付宝支付';
				} else if(result.fund_info.pay_type == 2) {
					that.pay_method = '微信支付';
				} else if(result.fund_info.pay_type == 3) {
					that.pay_method = '余额支付';
				}else if(result.fund_info.pay_type == 4) {
					that.pay_method = '信用额度支付';
				}else if(result.fund_info.pay_type == 5) {
					that.pay_method = '银行卡支付';
				};
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
				};
				that.store_name=result.store.store_name;
				that.city=result.province + result.city;
				that.store_type=result.store.supplier_ranks.rank_name;
				that.store_img=that.path+result.store.store_url;
			})
			
		},
		methods:{
			goPage:function(zhuangtai){
				if(zhuangtai==2){
					this.$router.push({name:'logistics'});
				}else{
					this.$router.push({
						path: '/success',
					})
//					console.log(this.$route.params.order_id);
				  this.$root.sn =this.data_id;
         		  this.$root.submitdata.price=this.total_price//跳到支付页面
				}
					 
				
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
	
	#purchase_success {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
		font-size: 14px
	}
	
	#purchase_success .nav_top {
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#purchase_success .content {
		width: 1000px;
	}
	
	#purchase_success .content .status {
		overflow: hidden;
	}
	
	#purchase_success .content .left {
		width: 490px;
		background-color: #FFFEFE;
		float: left;
	}
	
	#purchase_success .content .left p.title {
		height: 49px;
		line-height: 49px;
		padding-left: 30px;
		border-bottom: 1px solid #E8E8E8;
		background: url(../assets/zhuozhong.png) no-repeat 20px center;
	}
	
	#purchase_success .content .left img {
		margin-left: 40px;
		padding-top: 40px;
		width: 111px;
		height: 111px;
	}
	
	#purchase_success .content .left .text {
		display: inline-block;
		margin-left: 12px;
		vertical-align: bottom;
	}
	
	#purchase_success .content .left .text span {
		display: block;
		height: 16px;
		padding-bottom: 20px;
	}
	
	#purchase_success .content .left .pay_tishi {
		padding: 30px 40px 50px;
		color: #999999;
		line-height: 20px;
	}
	
	#purchase_success .content .right {
		width: 490px;
		background-color: #FFFEFE;
		float: left;
		margin-left: 20px;
	}
	
	#purchase_success .content .right .title {
		height: 49px;
		line-height: 49px;
		padding-left: 30px;
		border-bottom: 1px solid #E8E8E8;
		background: url(../assets/zhuozhong.png) no-repeat 20px center;
	}
	
	#purchase_success .content .right img {
		padding: 40px 0px 30px;
		display: block;
		margin: 0 auto;
	}
	
	#purchase_success .content .right .wating_text {
		text-align: center;
		margin-bottom: 24px;
		font-size: 14px;
	}
	
	#purchase_success .content .right a {
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
	
	#purchase_success .send_mes {
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
	
	#purchase_success .send_mes_content {
		width: 1000px;
		padding: 40px 0px;
		background-color: #FFFEFE;
	}
	
	#purchase_success .send_mes_content .row {
		margin-bottom: 10px;
		padding-left: 70px;
	}
	
	#purchase_success .send_mes_content .mes_box {
		width: 766px;
		height: 98px;
		/*border: 1px solid #E8E8E8;*/
		margin: 20px auto 40px;
	}
	
	#purchase_success .send_mes_content .mes_box .staus {
		padding: 30px 0px 10px 60px;
		color: #FF3300;
		background: url(../assets/fahuo.png) no-repeat 29px 28px;
	}
	
	#purchase_success .send_mes_content .mes_box .time {
		color: #666666;
		font-size: 12px;
		padding-left: 60px;
	}
	
	#purchase_success .send_mes_content .maijai_mes {
		padding-left: 80px;
		margin-bottom: 20px;
		background: url(../assets/zhuozhong.png) no-repeat 70px center;
	}
	
	#purchase_success .send_mes_content .saleshop {
		width: 768px;
		overflow: hidden;
		margin: 0 auto;
	}
	
	#purchase_success .send_mes_content .saleshop span {
		display: block;
		float: left;
		width: 50%;
		height: 20px;
	}
	
	#purchase_success .send_mes_content .saleshop span:first-child,
	#purchase_success .send_mes_content .saleshop span:nth-child(2) {
		margin-bottom: 20px;
	}
	
	#purchase_success .send_mes_content .saleshop span a {
		font-size: 12px;
		color: #41bbee;
	}
	
	#purchase_success .tishi {
		margin-top: 40px;
		height: 150px;
		/*width: 1000px;*/
		background-color: #FFFEFE;
		padding-right: 25px;
	}
	
	#purchase_success .tishi .tit {
		height: 48px;
		padding-left: 40px;
		line-height: 48px;
		background: url(../assets/tis.png) no-repeat 20px center;
	}
	
	#purchase_success .tishi .txt {
		padding-left: 70px;
		color: #999999;
		font-size: 14px;
		line-height: 25px;
	}
	
	#purchase_success .purchase_success_mes {
		margin-top: 40px;
		width: 150px;
		height: 50px;
		color: #f9f9f9;
		line-height: 50px;
		text-align: center;
		font-size: 16px;
		background: url(../assets/peishongxinxi.png) no-repeat 20px 20px;
		background-color: #41BBEE;
	}
	
	#purchase_success .purchase_success_title {
		padding: 30px 0px 30px 50px;
		height: 40px;
		background-color: #FFFFFF;
		overflow: hidden;
		border: 1px solid #E8E8E8;
	}
	
	#purchase_success .purchase_success_title img {
		float: left;
		margin-right: 24px;
	}
	
	#purchase_success .purchase_success_title .sendperson {
		float: left;
	}
	
	#purchase_success .purchase_success_title span {
		display: block;
	}
	
	#purchase_success .xiangqing {
		padding: 30px 74px;
		width: 852px;
		background-color: #FFFEFE;
		overflow: hidden;
	}
	
	#purchase_success .xiangqing .left {
		float: left;
		width: 22px;
		height: 117px;
	}
	
	#purchase_success .xiangqing .right {
		float: left;
		margin-left: 10px;
		width: 820px;
	}
	
	#purchase_success .xiangqing .right li {
		height: 80px;
		width: 820px;
		border-bottom: 1px solid #E8E8E8;
	}
	
	#purchase_success .xiangqing .right li .addr {
		height: 50px;
		line-height: 50px;
		font-size: 16px;
	}
	
	#purchase_success .xiangqing .right li .time {
		color: #999999;
		height: 30px;
		line-height: 30px;
	}
	
	#purchase_success .send_mes {
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
	
	#purchase_success .send_mes_content .send_msg {
		border-left: 5px solid #333333;
	}
	
	#purchase_success .send_mes_content .send_msg .send_content {
		padding-left: 6px;
	}
	
	#purchase_success .send_mes_content .child_content {
		padding-top: 10px;
		margin-left: 41px;
	}
	
	#purchase_success .send_mes_content .num {
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

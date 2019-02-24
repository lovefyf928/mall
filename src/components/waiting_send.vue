<template>
	<div id="waiting_send">
		<div class="nav_top">我的位置：首页>我的订单>订单详情>订单号：{{this.$route.params.sn}}</div>
		<div class="content">
			<div class="status">
				<div class="left">
					<p class="title">已付款</p>
					<img :src="storePicture"/>
					<p class="text">
						<span>商品金额：&yen;{{total_price}}</span>
						<span>下单时间：{{created_at}}</span>
					</p>
					<p class="pay_tishi">当前订单状态：您已支付成功；等待买家发货，您可以通过优智通联系卖家确认收货时间</p>
				</div>
				<div class="right">
					<p class="title">订单状态</p>
					<img src="../assets/dengdai.png"/>
					<p class="wating_text">等待发货</p>
					<a href="#">提醒卖家发货</a>
				</div>
				
			</div>
			
			<p class="send_mes">配送信息</p>
			<div class="send_mes_content">
				<p class="row">运单号：--</p>
				<p class="row">配送员：--</p>
				<div class="mes_box">
					<p class="staus">您已经提交了订单，等待卖家为您发货</p>
					<p class="time">{{created_at}}</p>
				</div>
				<p class="maijai_mes">卖家信息</p>
				<div class="saleshop">
					<span>店铺名称：{{store_name}}</span>
					<span>所在城市：{{city}}</span>
					<span>商户等级：{{store_type}}</span>
					<span>联系卖家：<a href="#">优智通</a></span>
					
				</div>
				
			</div>
			<div class="tishi">
				<p class="tit">温馨提示</p>
				<p class="txt">本页面物流查询信息由快递公司查询</p>
				<p class="txt">物流快递信息有可能存在延迟，可能会导致您的物流信息长时间没有更新，敬请耐心期待。（延迟时间可能从1到3天不等，EMS快递的物流配送信息可能最多有一周左右的延迟）</p>
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
							<td style="height: 100px">
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
				<div style="padding-left: 815px;margin-top: 21px;padding-bottom: 15px">
					<span>总金额：</span><span style="color: #ff0000">&yen;{{total_price}}</span>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:'waiting_send',
		data(){
			return {
				path:'http://api.eawsp.com/',
				total_price:'',
				created_at:'',
				store_name:'',
				city:'',
				store_type:'',
				lists:'',
				send_time:'',
				send_addr:'',
				pay_method:'',
				change_state:'',
        storePicture:''
				
			}
		},
		created:function(){
			var that=this;
			console.log(that.$route.params.sn,that.$route.params.order_status);
			this.$axios.post(this.path + 'api/user/alreadyPay?token=' + sessionStorage.getItem("token"), {
				sn: that.$route.params.sn,
				status:that.$route.params.order_status
			}).then(function(res){
				console.log(res);
				var result = res.data.data;
        that.storePicture='http://api.eawsp.com/'+res.data.data.store.store_url;
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
				
				
			})
		}
	}
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	ul,dl,
	ol {
		list-style: none;
	}
	
	#waiting_send {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
		font-size: 14px
	}
	
	#waiting_send .nav_top {
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#waiting_send .content {
		width: 1000px;
	}
	#waiting_send .content .status{
		overflow: hidden;
	}
	#waiting_send .content .left{
		width: 490px;
		background-color: #FFFEFE;
		float: left;
		
	}
	#waiting_send .content .left p.title{
		height: 49px;
		line-height: 49px;
		padding-left: 30px;
		border-bottom: 1px solid #E8E8E8;
		background: url(../assets/zhuozhong.png) no-repeat 20px center;
	}
	#waiting_send .content .left img{
		margin-left: 40px;
		padding-top: 40px;
	}
	#waiting_send .content .left .text{
		display: inline-block;
		margin-left: 12px;
		vertical-align: bottom;
	}
	#waiting_send .content .left .text span{
		display: block;
		height: 16px;
		padding-bottom: 20px;
	}
	#waiting_send .content .left .pay_tishi{
		padding: 30px 40px 50px;
		color: #999999;
		line-height: 20px;
	}
	#waiting_send .content .right{
		width: 490px;
		background-color: #FFFEFE;
		float: left;
		margin-left: 20px;
	}
	#waiting_send .content .right .title{
		height: 49px;
		line-height: 49px;
		padding-left: 30px;
		border-bottom: 1px solid #E8E8E8;
		background: url(../assets/zhuozhong.png) no-repeat 20px center;
	}
	#waiting_send .content .right img{
		padding: 40px 0px 30px;
		display: block;
		margin: 0 auto;
	}
	#waiting_send .content .right .wating_text{
		text-align: center;
		margin-bottom: 24px;
		font-size: 14px;
	}
	#waiting_send .content .right a{
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
	#waiting_send .send_mes{
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
	#waiting_send .send_mes_content{
		width: 940px;
		padding: 40px;
		background-color: #FFFEFE;
		
	}
	#waiting_send .send_mes_content .row{
		margin-bottom: 10px;
		padding-left: 70px;
	}
	#waiting_send .send_mes_content .mes_box{
		width: 766px;
		height: 98px;
		margin: 20px auto 40px;
	}
	#waiting_send .send_mes_content .mes_box .staus{
		padding: 30px 0px 10px 60px;
		color: #FF3300;
		background: url(../assets/fahuo.png) no-repeat 29px 28px;
	}
	#waiting_send .send_mes_content .mes_box .time{
		color: #666666;
		font-size: 12px;
		padding-left: 60px;
	}
	#waiting_send .send_mes_content .maijai_mes{
		padding-left: 80px;
		margin-bottom: 20px;
		background: url(../assets/zhuozhong.png) no-repeat 70px center;
		
	}
	#waiting_send .send_mes_content .saleshop{
		width: 768px;
		overflow: hidden;
		margin: 0 auto;
	}
	#waiting_send .send_mes_content .saleshop span{
		display: block;
		float: left;
		width: 50%;	
		height: 20px;
	}
	#waiting_send .send_mes_content .saleshop span:first-child,
	#waiting_send .send_mes_content .saleshop span:nth-child(2){
		margin-bottom: 20px;
	}
	#waiting_send .send_mes_content .saleshop span a{
		font-size: 12px;
		color: #41bbee;
	}
	#waiting_send .tishi{
		margin-top: 40px;
		height: 150px;
		/*width: 1000px;*/
		background-color: #FFFEFE;
		padding-right: 25px;
	}
	#waiting_send .tishi .tit{
		height: 48px;
		padding-left: 40px;
		line-height: 48px;
		background: url(../assets/tis.png) no-repeat 20px center;
	}
	#waiting_send .tishi .txt{
		padding-left: 70px;
		color: #999999;
		font-size: 14px;
		line-height: 25px;
	}
	
	
	#waiting_send .send_mes {
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
	
	#waiting_send .send_mes_content .send_msg {
		border-left: 5px solid #333333;
	}
	
	#waiting_send .send_mes_content .send_msg .send_content {
		padding-left: 6px;
	}
	
	#waiting_send .send_mes_content .child_content {
		padding-top: 10px;
		margin-left: 41px;
	}
	
	#waiting_send .send_mes_content .num {
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

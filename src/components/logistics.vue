<template>
	<div id="logistics">
		<div class="nav_top">我的位置：首页>我的订单>查看物流>订单号：80066583251</div>
		<div class="content">
			<div class="transform_status">
				<p class="title">运输状态</p>
				<div class="transform_details">
					<div class="img">
						<img src="../assets/daipeis.png" />
						<img src="../assets/chuansuerhui1.png" />
						<img src="../assets/peisongzhong.png" />
						<img src="../assets/chuansuerhui1.png" />
						<img src="../assets/wanchenga.png" />
					</div>
					<p class="text">
						<span class="first">待配送</span><span class="second">配送中</span><span class="third">完成</span>
					</p>
				</div>
			</div>
			<p class="logistics_mes">物流信息</p>
			<div class="logistics_title">
				<img src="../assets/kuaidi.png" />
				<div class="sendperson">
					<span>运单号：123456789</span>
					<span>配送员：莉莉</span>
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
			<div class="tishi">
				<p class="tit">温馨提示</p>
				<p class="txt">本页面物流查询信息由快递公司查询</p>
				<p class="txt">物流快递信息有可能存在延迟，可能会导致您的物流信息长时间没有更新，敬请耐心期待。（延迟时间可能从1到3天不等，EMS快递的物流配送信息可能最多有一周左右的延迟）</p>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		name: "logistics",
		data() {
			return {

			}
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
	
	#logistics {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
		font-size: 14px
	}
	
	#logistics .nav_top {
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#logistics .content {

		width: 1000px;
	}
	#logistics .transform_status{
		height: 308px;
		width: 998px;
		border: 1px solid #E8E8E8;
		background-color: #FFFFFF;
		
	}
	#logistics .transform_status p.title{
		height: 49px;
		line-height: 49px;
		padding-left: 20px;
		border-bottom: 1px solid #E8E8E8;
	}
	#logistics .transform_status .transform_details{
		width: 700px;
		height: 115px;
		padding: 65px 150px 80px 150px;
	}
	#logistics .transform_status .transform_details .img{
		height: 60px;
	}
	#logistics .transform_status .transform_details .img img{
		vertical-align: middle;
		
	}
	#logistics .transform_status .transform_details .text{
		width: 700px;
		height: 55px;
		line-height: 92px;
	}
	#logistics .transform_status .transform_details .text span{
		display: inline-block;
		height: 55px;
		line-height: 55px;
		width: 233.33px;
		box-sizing: border-box;
		
	}
	#logistics .transform_status .transform_details .text span.second{
		padding-left: 25px;
	}
	#logistics .transform_status .transform_details .text span.third{
		padding-left: 45px;
	}
	#logistics .logistics_mes{
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
	#logistics .logistics_title{
		padding: 30px 0px 30px 50px;
		height: 40px;
		background-color: #FFFFFF;
		overflow: hidden;
		border: 1px solid #E8E8E8;
	}
	#logistics .logistics_title img{
		float: left;
		margin-right: 24px;
	}
	#logistics .logistics_title .sendperson{
		float: left;
	}
	#logistics .logistics_title span{
		display: block;
		
	}
	#logistics .xiangqing{
		padding: 30px 74px;
		width: 852px;
		background-color: #FFFEFE;
		overflow: hidden;		
	}
	#logistics .xiangqing .left{
		float: left;
		width: 22px;
		height: 117px;
	}
	#logistics .xiangqing .right{
		float: left;
		margin-left: 10px;
		width: 820px;
	}
	#logistics .xiangqing .right li{
		height: 80px;
		width: 820px;
		border-bottom: 1px solid #E8E8E8;
	}
	#logistics .xiangqing .right li .addr{
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		
	}
	#logistics .xiangqing .right li .time{
		color: #999999;
		height: 30px;
		line-height: 30px;
	}
	#logistics .tishi{
		margin-top: 40px;
		height: 150px;
		/*width: 1000px;*/
		background-color: #FFFEFE;
		padding-right: 25px;
	}
	#logistics .tishi .tit{
		height: 48px;
		padding-left: 40px;
		line-height: 48px;
		background: url(../assets/tis.png) no-repeat 20px center;
	}
	#logistics .tishi .txt{
		padding-left: 70px;
		color: #999999;
		font-size: 14px;
		line-height: 25px;
	}
</style>
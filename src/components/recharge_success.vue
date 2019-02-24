<template>
	<div id="recharge_success">
		<div class="nav_top">
			<span class="top_left">充值</span>
			<span class="top_right">银行资金存管系统，保证你的资金安全</span>
		</div>
		<div class="content">
			<img src="../assets/zq.png" class="left">
			<p class="right">
				<span class="tit">充值成功</span>
				<span class="tips">充值金额{{recharge_amount}}元，您本次的流水单号为：{{num}}，您可以查看充值记录！</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "recharge_success ",
		data(){
			return {
				recharge_amount:'',
				feiyong:"",
				shengyu:'',
				num:''
			}
		},
		created(){
			var that=this;
			this.$axios.get(this.$root.path+"api/user/result?token="+sessionStorage.getItem("token"), {
			
			}).then(function(res) {
				console.log(res);
				that.recharge_amount=res.data.data.money;
				that.num=res.data.data.sn;
			})
		},
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
	
	#recharge_success {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑 ";
	}
	
	#recharge_success .nav_top {
		height: 59px;
		padding: 0px 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
		overflow: hidden;
	}
	#recharge_success .nav_top .top_left{
		float: left;
	}
	#recharge_success .nav_top .top_right{
		float: right;
		font-size: 12px;
		padding-left: 22px;
		background: url('../assets/ap.png') no-repeat 0px center;
		
	}
	#recharge_success .content{
		padding: 187px 0px 193px 160px;
		background-color: #FFFFFF;
		width: 840px;
		overflow: hidden;
	}
	#recharge_success .content .left{
		display: block;
		float: left;
		width: 60px;
		height: 60px;
	}
	#recharge_success .content .right{
		float: left;
		height: 60px;
		margin-left: 20px;
	}
	#recharge_success .content .right span{
		display: block;
	}
	#recharge_success .content .right .tit{
		font-size: 24px;
		height: 40px;
		line-height: 40px;
	}
	#recharge_success .content .right .tips{
		display: block;
		font-size: 12px
	}
	
	
</style>

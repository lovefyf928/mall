<template>
	<div id="putforward">
      	<div class="nav_top">
			<span class="top_left">提现</span>
			<span class="top_right">银行资金存管系统，保证你的资金安全</span>
		</div>
      	<div class="content">
      		<div class="row1">
      			<span class="title">提现到：</span>
      			<select name="car_name">
      				<option value="" selected="selected"><img src="../assets/jsyh1.png" alt="" /><span>储蓄卡</span><span>****6748</span></option>
      				<option value=""><img src="../assets/zgyh1.png" alt="" /><span>储蓄卡</span><span>****6748</span></option>
      			</select>
      		</div>
      		<div class="row2">
      			<span  class="title">金额：</span>
      			<input type="text" placeholder="请输入提现金额" v-model="putforward_mount"/>
      			<span class="tips">当前零钱总额{{bag_mount}}元，<a href="#" @click="all_putforward">全部提现</a></span>
      		</div>
      		<button class="putforwardBtn" @click="tixian_btn">提现</button>
      		
      		
      		
      	</div>
  		<div class="content_bottom">
  			<p>温馨提示：</p>
  			<p>1.每个工作日我们都会集中处理会员的提现申请，转账后将会发送短信到您登记的手机</p>
  			<p>2.会员提现只能提到商联信用卡内，可在商城购买任何商品</p>
  			<p>3.申请提现后，零钱中对应的款项将暂时冻结，直至提现处理完成。</p>
  		</div>
      
    </div>
</template>

<script>
	export default {
        name: "putforward",
        data(){
        	return{
        		bag_mount:'10000.00',
        		putforward_mount:""
        	}
        },
        methods:{
        	all_putforward:function(){
        		this.putforward_mount=this.bag_mount;
        	},
        	tixian_btn:function(){
        		this.$router.push({path:'/whole/putforward_success'})
        	}
        }
    }
</script>

<style scoped>
	* {
		margin: 0px;
		padding: 0px;
	}
	ul,ol {
		list-style: none;
	}
	#putforward {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑 ";
	}
	
	#putforward .nav_top {
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
	#putforward .nav_top .top_left{
		float: left;
	}
	#putforward .nav_top .top_right{
		float: right;
		font-size: 12px;
		padding-left: 22px;
		background: url('../assets/ap.png') no-repeat 0px center;
		
	}
	#putforward .content{
		padding: 76px 0px 0px 364px;
		background-color: #FFFFFF;
		overflow: hidden;
		width: 636px;
	}
	#putforward .content .row1{
		height: 50px;
		line-height: 50px;
		overflow: hidden;
		margin-bottom: 40px;
		
	}
	#putforward .content .row2 .title,
	#putforward .content .row1 .title{
		display: block;
		width: 65px;
		line-height: 50px;
		float: left;
		font-size: 14px;
		text-align: right;
	}
	#putforward .content .row1 select{
		display: block;
		float: left;
		width: 260px;
		height: 50px;
	}
	#putforward .content .row2{
		height: 55px;
		
		overflow: hidden;
		margin-bottom: 100px;
		width: 330px;
	}
	#putforward .content .row2 .title{
		line-height: 35px;
	}
		
	#putforward .content .row2 input{
		width: 260px;
		height: 30px;
	}
	#putforward .content .row2 .tips{
		font-size: 12px;
	}
	#putforward .content .row2 .tips a{
		color: #41BBEE;
	}
	#putforward .content .putforwardBtn{
		width: 100px;
		height: 30px;
		background-color: #41BBEE;
		border: 1px solid #41BBEE;
		border-radius: 4px;
		margin-bottom: 120px;
		margin-left: 100px;
		color: #FFFFFF;
	}
	
	
	
	
	#putforward .content_bottom {
		padding: 52px 0px 50px 110px;
		background-color: #FFFFFF;
		width: 890px;
		border-top: 1px solid #E8E8E8;
		line-height: 35px;
	}
	#putforward .content_bottom p{
		font-size: 12px;
		color: #999999;
	}
	
	

</style>
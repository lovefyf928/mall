<template>
    <div id="message_success">
    	<div class="nav_top">我的留言</div>
	      <div class="content">
	        <div class="complete">
	          <img src="../assets/wc1.png" alt="">
	          <p>发表留言成功</p>
	          <router-link to="/whole/Account_security" tag="button">返回列表</router-link>
	        </div>
	      </div>
    </div>
</template>

<script>
    export default {
        name: "message_success",
        data(){
          return{
            
          }
        },
        methods:{
          
    	}
    }
</script>

<style scoped>
	
  *{
		margin: 0px;
		padding: 0px;
	}
	ul,ol{
		list-style: none;
	}
	#message_success{
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
		font-size: 12px
	}
	#message_success .nav_top{
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	#message_success .content{
		padding: 86px 0px 50px;
		background-color: #FFFFFF;
		width: 1000px;
		
	}
  .complete{
    width: 100px;
    margin: 0 auto;
  }
  .complete p{
    margin: 50px auto;
    text-align: center;
    font-size: 16px;
  }
  .complete button{
    width: 90px;
    height: 30px;
    margin-left: 5px;
    color: #ffffff;
    font-size: 14px;
    border: 0;
    background-color: #41bbee;
  }
</style>

<template>
	<div id="add_address">
		<div class="title_nav">收货地址</div>
		<div class="add_address_content">
			<div class="row">
				<span class="row_title">收货人姓名：</span>
				<input type="text" name="" v-model="receive_name"/>
				<i>（必填）</i>
			</div>
			<div class="row">
				<span class="row_title">手机号码：</span>
				<input type="text" name="" v-model="receive_phone"/>
				<i>（必填）</i>
			</div>
			<div class="row">
				<span class="row_title">邮政编码：</span>
				<input type="text" name="" v-model="receive_postCode"/>
				<i>（必填）</i>
			</div>
			<div class="row addr1">
				<span class="row_title">配送区域：</span>
				 <v-distpicker
				 	:province="select.province" 
				 	:city="select.city" 
				 	:area="select.area"
				 	@province='onChangeProvince'
				 	@city='onChangeCity'
				 	@area='onChangeArea'>
				</v-distpicker>
				<i>（必填）</i>
			</div>
			<div class="row addr_details">
				<span class="row_title">详细地址：</span>
				<input type="text" name="" v-model="receive_addr_details"/>
				<i>（必填）</i>
			</div>
			<div class="row_btn">
				<button class="save" @click="saveAddress">保存</button><button class="cancel" @click="cancelAddress">取消</button>
			</div>

		</div>
	</div>

</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
	components: { VDistpicker },
    data() {
	    return {
	      select: { province: '', city: '', area: '' },
	      receive_name:'',
	      receive_phone:'',
	      receive_postCode:'',
	      receive_addr_details:''
	    }
  	},
  	methods:{
  		onChangeProvince:function(data){
  			this.select.province=data.value;
  		},
  		onChangeCity:function(data){
  			this.select.city=data.value;
  		},
  		onChangeArea:function(data){
  			this.select.area=data.value;
  		},
  		saveAddress:function(){
  			var that=this;
  			this.$axios.post("http://api.eawsp.com/api/user/addAddress?token="+sessionStorage.getItem("token"),{
      			province:that.select.province,
      			city:that.select.city,
      			county:that.select.area,
      			address:that.receive_addr_details,
      			addre_name:that.receive_name,
      			addre_phone:that.receive_phone,
      			postcode:that.receive_postCode,
      			country:'中国'
		  	 }).then(function (res) {
	      		//弹框
		        that.$confirm('新增地址成功，是否跳转', '新增', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          that.$router.push({path:'/whole/Receiving_address'})
		        }).catch(() => {
//		          this.$message({
//		            type: 'info',
//		            message: '已取消删除'
//		          });          
		        });
		     
	      		
	      		
	      })
  		},
  		cancelAddress:function(){
  			this.$router.push({path:'/whole/Receiving_address'});
  		},
  		
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
	#add_address{
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
		margin-top: 30px;
	}
	#add_address .title_nav{
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	#add_address .add_address_content{
     padding-top: 40px;
     background-color:#FFFFFF;
     height: 800px;
   }
  #add_address .add_address_content .row{
    padding-left: 138px;
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    margin-bottom: 30px;
  }
  #add_address .add_address_content .addr1{
    height: 40px;
    line-height: 40px;
  }
  #add_address .add_address_content .addr_details{
    margin-bottom: 100px;
  }
  #add_address .add_address_content .row .row_title{
    font-size: 12px;
    width: 100px;
    display: block;
    float: left;
    text-align: right;
  }
  #add_address .add_address_content .row input{
    display: block;
    float: left;
    border: 1px solid #CCCCCC;
    width: 220px;
    height: 32px;
    margin-left: 18px;
  }
  #add_address .add_address_content .addr_details input{
    width: 460px;
  }
  #add_address .add_address_content .row i{
    font-style: normal;
    font-size: 12px;

  }

  #add_address .add_address_content .row_btn{
    width: 230px;
    height: 30px;
    margin: 0 auto;
  }
  #add_address .add_address_content .row_btn button{
    border: 1px solid #41BBEE;
    outline: none;
    width: 90px;
    height: 30px;
    text-align: center;
    color: #FFFFFF;
    background-color: #41BBEE;
  }
  #add_address .add_address_content .row_btn button:last-child{
    margin-left: 50px;
    background-color: #FFFFFF;
    color: #41BBEE;
  }
	.distpicker-address-wrapper{
   		float: left;
   		margin-left: 18px;
    }
	/*.distpicker-address-wrapper select{
    	height: 34px;
    	padding: 0px;
    	font-size: 14px;@important
	}*/
	
</style>

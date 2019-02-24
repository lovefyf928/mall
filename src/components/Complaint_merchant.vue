<template>
	<div id="Complaint_merchant">
		<div class="tou">
			<p>投诉商家</p>
		</div>
		<div class="mian">
			<table style="margin-top: 30px">
				<p>投诉标题:</p><input type="text" v-model="title">
			</table>
			<table>
				<p>投诉内容:</p>
				<textarea v-model="text">

          		</textarea>
				<label for="" style="position: relative"><p><span>*</span>图片上传：</p><div class="file-box"><input type="file" class="file-btn" @change="upload"/>上传文件</div></label>
				<p style="margin-left: 75px"><span>*</span>上传图片不能超过4M，图片格式可以是JPG,PNG,JPEG格式。</p>
				<img :src="src1" alt="" class="upImg">
				<p style="margin-left: 75px;line-height: 20px;margin-top: 5px">声明：投诉商家是对商家产品、服务态度的分享，发现对方有违规交易、不良行为等可进行投诉，优智优品商城会尽快处理你反应的问题。用户自行承担一切因个人行为言论导致的法律责任，优智优品商城不会对外披露您的真实姓名，请放心提交。</p>
			</table>
			<button @click="submit()">立即提交</button>
		</div>
	</div>

</template>

<script>
	export default {
		name: "Complaint_merchant",
		data() {
			return {
				src1: '',
				blob: '',
				title: '',
				text: '',
			}
		},
		created(){
		},
		methods: {
			submit() {

				var that = this;
				if(!this.title || !this.text) {
					that.$alert('请选择或者输入对应字段', '提示', {
						confirmButtonText: '确定',
					});
				} else {
					var formdata = new FormData;
					formdata.append('store_id', this.$route.params.store_id);
					formdata.append('title', this.title);
					formdata.append('contents', this.text);
					formdata.append('img_url', this.blob);
//					formdata.append('image[]', this.blob);
					//此处必须设置为  multipart/form-data
					let config = {
						headers: {

							'Content-Type': 'multipart/form-data' //之前说的以表单传数据的格式来传递fromdata
						}

					};
					this.$axios.post('http://api.eawsp.com/api/user/ComplaintMerchant?token=' + sessionStorage.getItem("token"), formdata, config).then((res) => {
						if(res.data.code == 0) {
							that.$alert('提交成功', '售后', {
								confirmButtonText: '确定',
							});

						} else {
							that.$alert(res.data.message, '售后', {
								confirmButtonText: '确定',
							});
						}
					})
				}

			},
			upload: function(e) {
				let that = this;
				let reader = new FileReader(); //创建对象
				let img1 = e.target.files[0];
				let url = null;
				if(img1.size / 1024 / 1024 <= 4) {
					if(img1.type.split("/")[1] == "jpg" || "jpeg" || "png") {
						if(window.createObjectURL !== undefined) {
							url = window.createObjectURL(img1);
						} else if(window.URL != undefined) {
							url = window.URL.createObjectURL(img1);
						} else if(window.webkitURL != undefined) {
							url = window.webkitURL.createObjectURL(img1);
						}
						this.src1 = url;

						reader.readAsDataURL(img1); //readAsDataURL 可以将文件转base64格式
						reader.onload = function(e) {

							that.blob = that.dataURItoBlob(reader.result);
						}
					} else {

					}
				}
			},
			dataURItoBlob: function(dataURI) {
				//base64解码
				let byteString = window.atob(dataURI.split(',')[1]);
				let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
				let T = mimeString.split('/')[1]
				let ab = new ArrayBuffer(byteString.length);
				let ia = new Uint8Array(ab);
				for(let i = 0; i < byteString.length; i++) {
					ia[i] = byteString.charCodeAt(i);
				}
				return new Blob([ab], {
					type: mimeString
				});
			}
		}
	}
</script>

<style scoped>
	body,
	html,
	#Complaint_merchant {
		width: 100%;
		height: 100%;
	}
	
	* {
		margin-block-start: 0em;
		margin-block-end: 0em;
		list-style: none;
		padding-inline-start: 0px;
	}
	
	#Complaint_merchant {
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
		position: relative;
		width: 1000px;
		background: white;
		float: left;
		height: auto;
		margin-top: 30px;
		padding-bottom: 150px;
		/*overflow: hidden;*/
	}
	
	.mian table {
		display: block;
		float: left;
		margin-left: 100px;
		width: 60%;
		margin-top: 20px;
	}
	
	.mian table p {
		display: block;
		/*width: 100px;*/
		padding-right: 10px;
		line-height: 40px;
		float: left;
	}
	
	.mian table input {
		width: 300px;
		height: 40px;
		float: left;
		border: 1px solid rgb(204, 204, 204);
	}
	
	.mian table textarea {
		width: 500px;
		height: 300px;
	}
	
	.mian table p span {
		color: red;
	}
	
	.mian table button {
		width: 100px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border: none;
		outline: 1px solid rgb(204, 204, 204);
		background: white;
		margin-left: 75px;
		float: left;
	}
	
	.mian>button {
		position: absolute;
		width: 200px;
		height: 30px;
		background: #41bbee;
		border-radius: 5px;
		color: white;
		border: none;
		top: 813px;
		left: 249px;
	}
	
	.excel label {
		margin-bottom: 20px;
		display: block;
	}
	
	.excel label span {
		color: #ff0000;
	}
	
	.excel label p {
		width: 88px;
		height: 30px;
		line-height: 30px;
		float: left;
	}
	
	.excel label select {
		width: 200px;
		height: 30px;
	}
	
	.file-box {
		width: 88px;
		height: 30px;
		display: inline-block;
		position: relative;
		text-align: center;
		line-height: 30px;
		overflow: hidden;
		color: #333333;
		background-color: #ccc;
	}
	
	.file-btn {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		outline: none;
		background-color: transparent;
		filter: alpha(opacity=0);
		-moz-opacity: 0;
		-khtml-opacity: 0;
		opacity: 0;
	}
	
	.excel img {
		display: block;
		margin-right: 10px;
	}
	
	.upImg {
		width: 200px;
		height: 200px;
		padding-left: 87px;
		display: block;
	}
</style>

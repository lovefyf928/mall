<template>
	<div id="message">

		<div class="nav_top">我的留言</div>

		<div class="content" v-show="isShow">
			<div class="row1">
				<span class="row1_title">留言类型：</span>
				<div class="row1_right">
					<span><input type="radio" name="type" v-model="myVal" value="留言"/>留言</span>
					<span><input type="radio" name="type" v-model="myVal" value="投诉"/>投诉</span>
					<span><input type="radio" name="type" v-model="myVal" value="询问"/>询问</span>
					<span><input type="radio" name="type" v-model="myVal" value="售后"/>售后</span>
					<span><input type="radio" name="type" v-model="myVal" value="求购"/>求购</span>
				</div>

			</div>
			<div class="row2">
				<span class="row2_title">标题：</span>
				<input type="text" v-model="title" />
			</div>
			<div class="row3">
				<span class="row3_title">留言内容：</span>
				<textarea type="text" v-model="contents" />
			</div>
			<div class="row4">
				<span class="row4_title">上传文件：</span>
				<p class="row4_right">
					<input id="fileinput" @change="uploading($event)" type="file" accept="image/*">
					<span class="color">您可以上传以下格式文件：</span>
					<span>jpg、png、jpeg</span>

				</p>
			</div>
			<button class="submit" @click="submit($event)">提交</button>

			<table class="table">
				<tr class="firstTr">
					<td class="firstTd">
						<select @change="selected" v-model="select_type">
							<option value="0" selected="selected">留言类型</option>
							<option value="1">留言</option>
							<option value="2">投诉</option>
							<option value="3">询问</option>
							<option value="4">售后</option>
							<option value="5">求购</option>
						</select>
					</td>
					<td class="secondTd">留言时间</td>
					<td class="threeTd">标题</td>
					<td class="fourTd">内容</td>
					<td class="fiveTd">上传的文件</td>
					<td class="sixTd">删除</td>
				</tr>
				<tr class="firstTr elseTr" v-for="(list,index) in trLists">
					<td class="firstTd">{{list.type}}</td>
					<td class="secondTd">{{list.created_at}}</td>
					<td class="threeTd">{{list.title}}</td>
					<td class="fourTd">{{list.content}}</td>
					<td class="fiveTd">
						<a v-bind:href="'http://api.eawsp.com/'+list.image">附件</a>
					</td>
					<td class="sixTd">
						<span href="#" @click="deleted(index,list.id)">删除</span>
					</td>

				</tr>
			</table>

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

		<div class="content1" v-show="show_success">
			<div class="complete1">
				<img src="../assets/wc1.png" alt="">
				<p>发表留言成功</p>
				<button tag="button" @click='goback'>返回列表</button>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: "message",
		data() {
			return {
				myVal: '',
				type: '',
				title: '',
				contents: '',
				images: [],
				current_page: '',
				next_page_url: '',
				prev_page_url: '',
				next_page: '',
				last_page: '',
				NUM: '',
				total: '',
				trLists: [],
				file: '',
				uploadImg: [],
				src: '',
				blob: '',
				show_success: false,
				isShow: true,
				select_type: 0

				//				src1: ''
			}
		},
		methods: {
			// 分页上一页
			prev: function() {
				let _this = this
				this.$axios.post(_this.prev_page_url, {
					token:sessionStorage.getItem("token")
				}).then(function(res) {
					console.log(res);
					_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url;
						for(var i = 0; i < res.data.data.data.length; i++) {
							if(res.data.data.data[i].type == 1) {
								res.data.data.data[i].type = '留言'
							} else if(res.data.data.data[i].type == 2) {
								res.data.data.data[i].type = '投诉'
							} else if(res.data.data.data[i].type == 3) {
								res.data.data.data[i].type = '询问'
							} else if(res.data.data.data[i].type == 4) {
								res.data.data.data[i].type = '售后'
							} else if(res.data.data.data[i].type == 5) {
								res.data.data.data[i].type = '求购'
							}
						}
						_this.trLists = res.data.data.data;
				})
			},
			// 分页下一页
			next: function() {
				let _this = this;
				this.$axios.post(_this.next_page_url, {
					token:sessionStorage.getItem("token")
				}).then(function(res) {
					console.log(res);
					_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url;
						for(var i = 0; i < res.data.data.data.length; i++) {
							if(res.data.data.data[i].type == 1) {
								res.data.data.data[i].type = '留言'
							} else if(res.data.data.data[i].type == 2) {
								res.data.data.data[i].type = '投诉'
							} else if(res.data.data.data[i].type == 3) {
								res.data.data.data[i].type = '询问'
							} else if(res.data.data.data[i].type == 4) {
								res.data.data.data[i].type = '售后'
							} else if(res.data.data.data[i].type == 5) {
								res.data.data.data[i].type = '求购'
							}
						}
						_this.trLists = res.data.data.data;
				})
			},
			// 第几页
			GD: function() {
				let _this = this;
				if(_this.NUM == 1) {
					this.$axios.post("http://api.eawsp.com/api/user/getUserMessage", {
						token:sessionStorage.getItem("token")
					}).then(function(res) {
						_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url;
						for(var i = 0; i < res.data.data.data.length; i++) {
							if(res.data.data.data[i].type == 1) {
								res.data.data.data[i].type = '留言'
							} else if(res.data.data.data[i].type == 2) {
								res.data.data.data[i].type = '投诉'
							} else if(res.data.data.data[i].type == 3) {
								res.data.data.data[i].type = '询问'
							} else if(res.data.data.data[i].type == 4) {
								res.data.data.data[i].type = '售后'
							} else if(res.data.data.data[i].type == 5) {
								res.data.data.data[i].type = '求购'
							}
						}
						_this.trLists = res.data.data.data;
					})
				} else if(_this.NUM > _this.last_page) {
					console.log("超出总页数")
				} else {
					this.$axios.post('http://api.eawsp.com/api/user/getUserMessage', {
							token:sessionStorage.getItem("token"),
							page: _this.NUM
					}).then(function(res) {
						console.log(res);
						_this.current_page = res.data.data.current_page;
						_this.last_page = res.data.data.last_page;
						_this.prev_page_url = res.data.data.prev_page_url;
						_this.next_page_url = res.data.data.next_page_url;
						for(var i = 0; i < res.data.data.data.length; i++) {
							if(res.data.data.data[i].type == 1) {
								res.data.data.data[i].type = '留言'
							} else if(res.data.data.data[i].type == 2) {
								res.data.data.data[i].type = '投诉'
							} else if(res.data.data.data[i].type == 3) {
								res.data.data.data[i].type = '询问'
							} else if(res.data.data.data[i].type == 4) {
								res.data.data.data[i].type = '售后'
							} else if(res.data.data.data[i].type == 5) {
								res.data.data.data[i].type = '求购'
							}
						}
						_this.trLists = res.data.data.data;
					})
				}

			},
			uploading: function(event) {
				var that = this;
				this.file = event.target.files[0];
				var reader = new FileReader();

				//获取文件
				if(this.file.type.split('/')[1] == "jpeg" || "png" || "jpg") {
					var windowURL = window.URL || window.webkitURL;
					//创建图片文件的url
					this.src = windowURL.createObjectURL(event.target.files[0]);
					console.log(this.file);
					reader.readAsDataURL(this.file);
					reader.onload = function(e) {
						that.blob = that.dataURItoBlob(reader.result);
					}
					console.log(this.uploadImg);
				} else {
					that.$alert('图片必须是JPEG，PNG，JPG格式，请重新选择', '优智优品网', {
						confirmButtonText: '确定',
					})
				}

			},
			submit: function(event) {
				var that = this;
				event.preventDefault(); //取消默认行为
				var formdata = new FormData();

				if(this.myVal == "留言") {
					this.type = '1';
				} else if(this.myVal == "投诉") {
					this.type = '2';
				} else if(this.myVal == "询问") {
					this.type = '3';
				} else if(this.myVal == "售后") {
					this.type = '4';
				} else if(this.myVal == "求购") {
					this.type = '5';
				}

				if(!this.type) {
					that.$alert('请选择留言类型', '提示', {
						confirmButtonText: '确定',
						callback: action => {}
					});
				} else if(!this.title) {
					that.$alert('请输入标题', '提示', {
						confirmButtonText: '确定',
						callback: action => {}
					});
				} else if(!this.contents) {
					that.$alert('请输入内容', '提示', {
						confirmButtonText: '确定',
						callback: action => {}
					});
				} else {
					console.log(this.blob);
					console.log(this.type);
					console.log(this.title);
					console.log(this.contents);
					formdata.append('type', this.type);
					formdata.append('title', this.title);
					formdata.append('contents', this.contents);
					formdata.append('image[]', this.blob);
					//此处必须设置为  multipart/form-data
					let config = {
						headers: {

							'Content-Type': 'multipart/form-data' //之前说的以表单传数据的格式来传递fromdata

						}

					};
					this.$axios.post('http://api.eawsp.com/api/user/userMessage?token=' + sessionStorage.getItem("token"), formdata, config).then((res) => {
						if(res.data.code == 0) {
							console.log(res);
							var data = res.data.data;
							if(data.type == 1) {
								data.type = '留言'
							} else if(data.type == "2") {
								data.type = '投诉'
							} else if(data.type == "3") {
								data.type = '询问'
							} else if(data.type == "4") {
								data.type = '售后'
							} else if(data.type == "5") {
								data.type = '求购'
							}

							that.trLists.push(res.data.data);
							that.show_success = true;
							that.isShow = false;
						}

					}).catch((error) => {

					});

				}
			},
			deleted: function(index,id) {
				var that=this;
				this.$axios.post("http://api.eawsp.com/api/user/delMessage?token=" + sessionStorage.getItem("token"), {
						id: id
					}).then(function(res) {
						if(res.data.code==0){
							  that.$alert('删除成功', '提示', {
					          confirmButtonText: '确定',
					          
					        });
							
							
							
						}
					})
				console.log(id);
				this.trLists.splice(index, 1);
			},
			dataURItoBlob: function(dataURI) {
				// base64 解码
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
			},
			goback: function() {
				this.show_success = false;
				this.isShow = true;
			},
			selected: function() {
				var that = this;
				if(this.select_type == 0) {} else {
					this.$axios.post("http://api.eawsp.com/api/user/getUserMessage?token=" + sessionStorage.getItem("token"), {
						type: this.select_type
					}).then(function(res) {
						console.log(res);
						that.current_page = res.data.data.current_page;
						that.last_page = res.data.data.last_page;
						that.prev_page_url = res.data.data.prev_page_url;
						that.next_page_url = res.data.data.next_page_url;
						for(var i = 0; i < res.data.data.data.length; i++) {
							if(res.data.data.data[i].type == 1) {
								res.data.data.data[i].type = '留言'
							} else if(res.data.data.data[i].type == 2) {
								res.data.data.data[i].type = '投诉'
							} else if(res.data.data.data[i].type == 3) {
								res.data.data.data[i].type = '询问'
							} else if(res.data.data.data[i].type == 4) {
								res.data.data.data[i].type = '售后'
							} else if(res.data.data.data[i].type == 5) {
								res.data.data.data[i].type = '求购'
							}
						}
						that.trLists = res.data.data.data;
					})
				}
			}
		},
		created() {
			var _this = this;
			console.log(sessionStorage.getItem("token"));
			//console.log("http://192.168.1.93/api/user/getAddress?token="+sessionStorage.getItem("token"));
			this.$axios.post("http://api.eawsp.com/api/user/getUserMessage?token=" + sessionStorage.getItem("token"), {

			}).then(function(res) {
				console.log(res);
				_this.current_page = res.data.data.current_page;
				_this.last_page = res.data.data.last_page;
				_this.prev_page_url = res.data.data.prev_page_url;
				_this.next_page_url = res.data.data.next_page_url
				for(var i = 0; i < res.data.data.data.length; i++) {
					if(res.data.data.data[i].type == 1) {
						res.data.data.data[i].type = '留言'
					} else if(res.data.data.data[i].type == 2) {
						res.data.data.data[i].type = '投诉'
					} else if(res.data.data.data[i].type == 3) {
						res.data.data.data[i].type = '询问'
					} else if(res.data.data.data[i].type == 4) {
						res.data.data.data[i].type = '售后'
					} else if(res.data.data.data[i].type == 5) {
						res.data.data.data[i].type = '求购'
					}
				}
				_this.trLists = res.data.data.data;
			})
		}
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
	
	#message {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑";
		font-size: 12px
	}
	
	#message .nav_top {
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#message .content {
		padding: 100px 20px;
		background-color: #FFFFFF;
		width: 960px;
	}
	
	#message .content .row1 {
		width: 352px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	#message .content .row1 .row1_title {
		font-size: 14px;
		float: left;
		width: 70px;
	}
	
	#message .content .row1 .row1_right {
		float: left;
	}
	
	#message .content .row2 {
		width: 352px;
		margin: 0 auto;
		height: 24px;
		line-height: 24px;
		overflow: hidden;
		margin: 10px auto;
	}
	
	#message .content .row2 .row2_title {
		font-size: 14px;
		float: left;
		width: 70px;
		text-align: right;
	}
	
	#message .content .row2 input {
		width: 198px;
		height: 21px;
		border: 1px solid #CCCCCC;
	}
	
	#message .content .row3 {
		width: 352px;
		height: 102px;
		overflow: hidden;
		margin: 0px auto 10px auto;
	}
	
	#message .content .row3 .row3_title {
		float: left;
		width: 70px;
		line-height: 24px;
		text-align: right;
	}
	
	#message .content .row3 textarea {
		width: 199px;
		height: 100px;
	}
	
	#message .content .row4 {
		width: 352px;
		height: 79px;
		overflow: hidden;
		margin: 0px auto 20px auto;
	}
	
	#message .content .row4 .row4_title {
		float: left;
		width: 70px;
		line-height: 24px;
		text-align: right;
	}
	
	#message .content .row4 .row4_right {
		float: left;
		width: 282px;
		height: 100px;
	}
	
	#message .content .row4 .row4_right input {
		width: 276px;
		height: 24px;
	}
	
	#message .content .row4 .row4_right span {
		display: block;
	}
	
	#message .content .row4 .row4_right span.color {
		color: #41BBEE;
		margin: 10px 0px;
	}
	
	#message .content .submit {
		display: block;
		width: 90px;
		height: 30px;
		background-color: #41BBEE;
		color: #FFFFFF;
		font-size: 16px;
		border: none;
		margin: 0 auto;
		margin-bottom: 60px;
	}
	
	#message .content .table {
		border: 1px solid #e8e8e8;
		border-collapse: collapse;
		width: 958px;
		text-align: center;
	}
	
	#message .content .table .firstTr {
		width: 958px;
		height: 40px;
		border: none;
		background-color: #f2f2f2;
	}
	
	#message .content .table .elseTr {
		background-color: #FFFFFF;
	}
	
	#message .content .table .firstTr .firstTd {
		width: 400px;
	}
	
	#message .content .table .firstTr .secondTd {
		width: 150px;
	}
	
	#message .content .table .firstTr .threeTd {
		width: 100px;
	}
	
	#message .content .table .firstTr .fourTd {
		max-width: 110px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	#message .content .table .firstTr .fiveTd {
		width: 100px;
	}
	
	#message .content .table .firstTr .sixTd {
		width: 100px;
	}
	
	#message .content .table .firstTr .sixTd a {
		color: #41BBEE;
	}
	/*#message .content .changePage {*/
	/*width: 245px;*/
	/*height: 25px;*/
	/*text-align: right;*/
	/*overflow: hidden;*/
	/*padding-left: 715px;*/
	/*margin-top: 20px;*/
	/*}*/
	/*#message .content .changePage p {*/
	/*width: 20px;*/
	/*height: 20px;*/
	/*float: left;*/
	/*text-align: center;*/
	/*line-height: 20px;*/
	/*border: 1px solid #CCCCCC;*/
	/*margin-right: 5px;*/
	/*}*/
	/*#message .content .changePage p input {*/
	/*width: 20px;*/
	/*height: 19px;*/
	/*border: none;*/
	/*padding: 0;*/
	/*margin: 0;*/
	/*}*/
	/*#message .content .changePage p.text {*/
	/*width: 40px;*/
	/*border: none;*/
	/*height: 22px;*/
	/*}*/
	/*#message .content .changePage p.pageColor {*/
	/*background-color: #41BBEE;*/
	/*border-color: #41BBEE;*/
	/*}*/
	/*分页*/
	
	.fy {
		width: 300px;
		height: 30px;
		float: left;
		margin-top: 50px;
		margin-left: 658px;
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
	
	.content1 {
		padding: 86px 0px 50px;
		background-color: #FFFFFF;
		width: 1000px;
	}
	
	.complete1 {
		width: 100px;
		margin: 0 auto;
	}
	
	.complete1 p {
		margin: 50px auto;
		text-align: center;
		font-size: 16px;
	}
	
	.complete1 button {
		width: 90px;
		height: 30px;
		margin-left: 5px;
		color: #ffffff;
		font-size: 14px;
		border: 0;
		background-color: #41bbee;
	}
</style>

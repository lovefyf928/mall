<template>
	<div id="recharge">

		<div class="nav_top">充值</div>

		<div class="content_top">
			<div class="row1">
				<span class="row1_title">充值账户：</span>
				<span class="row1_value">{{account_num}}</span>
			</div>
			<div class="row1">
				<span class="row1_title">充值金额：</span>
				<input type="text" v-model="recharge_mount" />
				<span class="row1_value">元</span>
				<i>充值金额最少为50元。在线支付成功后，充值金额会在一分钟内到账</i>
			</div>
			<div class="row1">
				<span class="row1_title">支付完成：</span>
				<button class="active" @mouseover="quickly_pay">快捷支付</button><button class="no-active" @mouseover="othersPay">第三方支付</button>
			</div>

			<div class="pay" :style="show1">
				<img src="../assets/xt1.png" />
				<ul class="pay_list">
					<li>
						<input type="radio" name="bank_card" v-model="pay_method" value="jianshe" />
						<span class="bank">中国建设银行</span>
						<span class="card_num">****6798</span>
						<span>储蓄卡</span>
					</li>
					<li>
						<input type="radio" name="bank_card" v-model="pay_method" value="icbc" />
						<span class="bank">中国工商银行</span>
						<span class="card_num ">****6798</span>
						<span>储蓄卡</span>
					</li>
				</ul>
				<!--<div id="demo">-->
				<!--<p class="demo_tishi">请输入六位数字支付密码</p>
            <form action=" " class="password">
              <input type="text " maxlength="1 "><input type="text " maxlength="1 "><input type="text " maxlength="1 "><input type="text " maxlength="1 "><input type="text " maxlength="1 "><input type="text " maxlength="1 ">
            </form>
            <span class="forget">忘记密码</span>-->
				<div class="write-phonenum">
					<p>请输入六位数字支付密码</p>
					<input type="tel" maxlength="6" class="realInput" v-model="realInput" @keyup="getNum()" @keydown="delNum()" id="focusid">
					<ul class="write-input clearfix">
						<li v-for="disInput in disInputs"><input type="tel" maxlength="1" v-model="disInput.value"></li>
					</ul>
					<span class="forget">忘记密码</span>
				</div>
				<div class="btn" @click="chongzhi">确认支付</div>

				<!--</div>-->
			</div>

			<div class="pay_else" :style="show2">
				<img src="../assets/xk.png" />
				<p class="pay_row_else ">
					<span><input type="radio" name="pay_method" value="alipay" v-model="other_pay_method" @click="f4()"  @change="getQrcode" selected='selected'/><img src="../assets/zfb1.png"/></span>
					<!--<span><input type="radio" name="pay_method" /><img src="../assets/qq.png"/></span>-->
					<span><input type="radio" name="pay_method" value="weChat"  v-model="other_pay_method"  @change="getQrcode"/><img src="../assets/wx.png"/></span>
				</p>
				<!--<div id="demo">-->
				<div class="btn" id="alipay_rechage" style="margin-top: 80px;" v-show="alipayShow" @click="alipay">确认充值</div>
				<div class="pay_erweima" v-show="weChatShow">
					<div class="erweima" id="erweima" name="qrcodeIframe">

					</div>
					<img src="../assets/sys.png" />

					<p class="payText">
						<span class="text1">扫一扫付款（元）</span>
						<span class="text2">&yen;{{recharge_mount}}</span>
					</p>

				</div>
			</div>

		</div>

		<div class="content_bottom">
			<p>温馨提示：</p>
			<p>1.充值成功后，余额可能存在延迟现象，一般1到5分钟内到账，如有问题，请咨询客服；</p>
			<p>2.充值完成后，您可以进入账户充值记录页面进行查看余额充值状态</p>
		</div>

	</div>
</template>

<script>
	export default {
		name: "recharge",
		//		components:{
		//			'erweima':erweima,
		//		},
		data() {
			return {
				msg: '',
        account_num:'',
				show1: {
					display: 'block'
				},
				show2: {
					display: 'none'
				},

				disInputs: [{ //输入密码框字段
					value: ''
				}, {
					value: ''
				}, {
					value: ''
				}, {
					value: ''
				}, {
					value: ''
				}, {
					value: ''
				}],
				erweima_form: '', //二维码里面的表单
				realInput: '',
				pay_method: '',
				other_pay_method: '', //微信支付宝支付
				erweimaImg: '',
				recharge_mount: '', //充值金额
				num1: 3,
				num2: 4,
				num3: 4,
				mold: null,
				renderRes: {},
				isrun: false,
				alipayShow: true,
				weChatShow: false
			}
		},
    mounted(){
      this.account_num=sessionStorage.getItem('num');
    },
		methods: {
			f4() {
				this.num2 = 5;
			},
			getNum() {
				for(var i = 0; i < this.realInput.length; i++) {
					this.disInputs[i].value = this.realInput.charAt(i)
					// 表示字符串中某个位置的数字，即字符在字符串中的下标。
				}
			},
			delNum() {
				var oEvent = window.event;
				if(oEvent.keyCode == 8) {
					if(this.realInput.length > 0) {
						this.disInputs[this.realInput.length - 1].value = ''
					}
				}
			},
			quickly_pay: function(event) {
				var dom = event.target;
				event.target.className = 'active';
				event.target.nextSibling.className = 'no-active';
				this.show1.display = 'block';
				this.show2.display = 'none';
			},
			othersPay: function(event) {
				var dom = event.target;
				event.target.className = 'active';
				event.target.previousSibling.className = 'no-active';
				this.show1.display = 'none';
				this.show2.display = 'block';
			},
			chongzhi: function(event) {
				if(this.recharge_mount < 50) {
					this.$alert('充值金额不少于50元', '充值', {
						confirmButtonText: '确定',
						callback: action => {

						}
					});
				}
				//				this.$router.push({
				//					path: '/whole/recharge_success'
				//				})
			},
			f1(ress) {
				let that = this;
				var nowDate = new Date();
				that.$axios.post("http://api.eawsp.com/api/user/getIsMold/" + ress.data.sn, {
					"token": sessionStorage.getItem("token")
				}).then(function(result) {
					console.log(result);
					if(result.data.data.mold == '2') {
						that.$router.push({
							path: '/whole/recharge_success'
						})
					}
					return result.data.data.mold;
				});
				if(new Date() - nowDate >= 900000) {
					clearInterval(timer);
				}
			},
			alipay() {
				if(this.recharge_mount < 50) {
					this.$alert('充值金额不少于50元', '充值', {
						confirmButtonText: '确定',
					});
				} else {
					console.log(123456);
					this.$axios.post("http://api.eawsp.com/api/user/recharge?token=" + sessionStorage.getItem("token"), {
						"money": this.recharge_mount
					}).then(function(res) {
						console.log(res);
						var erweimabox = document.getElementById('erweima');
						erweimabox.innerHTML = res.data;
						console.log(erweimabox.innerHTML);
						var form = document.getElementById('alipaysubmit');
						form.submit();
					})
				}

			},
			RenderQrCode() {
				let that = this;
				console.log(123);
				if(!this.isrun) {
					this.$axios.post("http://api.eawsp.com/api/user/weRecharge?token=" + sessionStorage.getItem("token"), {
						"money": that.recharge_mount
					}).then(function(res) {
						console.log(res);
						that.renderRes = res;
						var erweimabox = document.getElementById('erweima');
						erweimabox.innerHTML = res.data.qr;
						console.log(that.renderRes);
					});
					this.isrun = true;
				}
				if(this.num2 == this.num3) {
					this.num1 += 3;
				}
			},
			getQrcode: function() {
				var that = this;
				console.log(this.other_pay_method);
				if(this.other_pay_method == 'alipay') {
					that.alipayShow = true;
					that.weChatShow = false;
				} else if(this.other_pay_method == 'weChat') {
					that.alipayShow = false;
					that.weChatShow = true;
					if(this.recharge_mount < 50) {
						that.$alert('充值金额不少于50元', '充值', {
							confirmButtonText: '确定',
						});
					}
					this.RenderQrCode();
				}

			},
			dealForm: function() {
				var form = document.getElementById('alipaysubmit');
				console.log(form);
				//				document.forms['alipaysubmit'].submit();
			}
		},
		watch: {
			num1: function() {
				var mold = null;
				setTimeout(() => {
					mold = this.f1(this.renderRes);
					if(mold == 2) {
						num2 = 6;
					} else {
						this.RenderQrCode();
					}
				}, 5000);
			}
		},
		created() {
			var demo = document.getElementById('#demo');
			var inputs = document.getElementsByClassName('input');
			for(var i = 0; i < inputs.length; i++) {
				var t = inputs[i];
				t.index = i;
				t.setAttribute("readonly ", true);
				t.onkeyup = function() {
					var result = (/^[0-9]$/).test(this.value);
					var next = this.index + 1;
					if(next > inputs.length - 1) return;
					inputs[next].removeAttribute("readonly");
					if(result) {
						inputs[next].focus();
					}

				}
			}
		},
		//		mounted () {
		//		    this.qrcode()
		//		},
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
	
	#recharge {
		width: 1000px;
		float: left;
		padding-left: 20px;
		color: #333333;
		font-family: "微软雅黑 ";
	}
	
	#recharge .nav_top {
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		margin-top: 30px;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#recharge .content_top {
		padding: 60px 86px 80px 86px;
		background-color: #FFFFFF;
		width: 828px;
	}
	
	#recharge .content_top .row1 {
		font-size: 14px;
		height: 40px;
		line-height: 40px;
	}
	
	#recharge .content_top .row1 input {
		width: 100px;
		height: 30px;
		margin-right: 12px;
	}
	
	#recharge .content_top .row1 i {
		font-style: normal;
		font-size: 12px;
		color: #999999;
		padding-left: 20px;
		background: url(../assets/zy.png) no-repeat 6px center;
	}
	
	#recharge .content_top .row1 .active {
		outline: none;
		width: 138px;
		height: 30px;
		background-color: #41BBEE;
		border: none;
		color: #FFFFFF;
	}
	
	#recharge .content_top .row1 .no-active {
		border: 1px solid #CCCCCC;
		width: 136px;
		height: 30px;
	}
	
	#recharge .content_top .pay {
		padding-left: 72px;
	}
	
	#recharge .content_top .pay ul.pay_list li {
		height: 49px;
		line-height: 49px;
		border-bottom: 1px solid #E8E8E8;
		padding-left: 20px;
	}
	
	#recharge .content_top .pay ul li span.bank {
		margin-left: 20px;
		background: url('../assets/jsyh.png') no-repeat 0px 1px;
		padding-left: 30px;
		margin-right: 50px;
	}
	
	#recharge .content_top .pay ul li span.card_num {
		margin-right: 20px;
	}
	
	#recharge .content_top .pay_else {
		padding-left: 72px;
	}
	
	#recharge .content_top .pay_else p.pay_row_else {
		height: 22px;
		/*line-height: 49px;*/
		border-bottom: 1px solid #E8E8E8;
		padding: 13.5px 0px 13.5px 20px;
		overflow: hidden;
	}
	
	#recharge .content_top .pay_else p.pay_row_else span {
		display: block;
		height: 22px;
		float: left;
		line-height: 22px;
		margin-right: 80px;
	}
	
	#recharge .content_top .pay_else p.pay_row_else span input {
		margin-right: 10px;
	}
	
	#recharge .content_top .pay_else p.pay_row_else span img {
		display: inline;
		vertical-align: top;
	}
	
	#recharge .content_top .btn {
		width: 140px;
		height: 40px;
		color: #FFFFFF;
		background-color: #41BBEE;
		text-align: center;
		line-height: 40px;
		margin-top: 30px;
	}
	
	#recharge .content_bottom {
		padding: 50px 0px 50px 153px;
		background-color: #FFFFFF;
		width: 847px;
		border-top: 1px solid #E8E8E8;
	}
	
	#recharge .content_bottom p {
		font-size: 12px;
		color: #999999;
	}
	
	.write-phonenum {
		position: relative;
		margin-top: 90px;
	}
	
	.write-phonenum p {
		font-size: 14px;
		color: #999999;
	}
	
	.write-phonenum p span {
		color: #3b90d1;
	}
	
	.write-input {
		border: 1px solid #888888;
		width: 306px;
		height: 50px;
		display: inline-block;
	}
	
	.write-phonenum .write-input li {
		float: left;
		width: 50px;
		height: 50px;
		border-right: 1px solid #ddd;
	}
	
	.write-input li input {
		-webkit-appearance: none;
		-moz-appearance: none;
		-ms-appearance: none;
		resize: none;
		outline: none;
		border: 0;
		width: 50px;
		line-height: 50px;
		text-align: center;
		height: 50px;
		font-size: 16px;
		float: left;
	}
	
	.write-input li:last-child {
		border-right: none;
	}
	
	.write-phonenum .forget {
		display: inline-block;
		margin-left: 30px;
		color: #41BBEE;
		vertical-align: top;
		height: 50px;
		line-height: 50px;
		font-size: 12px;
	}
	
	.write-phonenum .mint-button--default {
		background: #3b90d1;
		color: #fff;
		font-family: "微软雅黑";
		font-size: 14px;
		width: 80%;
		margin: 10px auto;
	}
	
	.realInput {
		-webkit-appearance: none;
		-moz-appearance: none;
		-ms-appearance: none;
		resize: none;
		outline: none;
		border: 0;
		z-index: 1;
		position: absolute;
		width: 303px;
		height: 25px;
		line-height: 32px;
		background: none;
		display: block;
		left: 0px;
		top: 23px;
		/*opacity: 0;*/
		font-size: 0px;
		/*caret-color: #fff;*/
		color: #000;
		text-indent: -5em;
	}
	/*影藏input标签*/
	
	input[type="tel" i]:disabled {
		background-color: #fff;
	}
	
	.pay_erweima {
		margin-top: 30px;
		overflow: hidden;
	}
	
	.pay_erweima .erweima {
		width: 200px;
		height: 200px;
		border: 1px solid #CCCCCC;
		float: left;
	}
	
	.pay_erweima img {
		float: left;
		padding-top: 80px;
		margin-left: 20px;
	}
	
	.pay_erweima .payText {
		float: left;
		padding-top: 70px;
		margin-left: 10px;
		width: 130px;
	}
	
	.pay_erweima .payText .text1 {
		color: #333333;
		font-size: 12px;
	}
	
	.pay_erweima .payText .text2 {
		font-size: 24px;
		color: #41BBEE;
	}
	
	#iframe {
		width: 200px;
		height: 200px;
		border: none;
	}
</style>

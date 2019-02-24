<template>
	<div class="hello">
		<div class="content_details">
			<div class="content_left">

				<div class="left_top">
					<div class="balance">

						<h3>账户余额</h3>
						<div class="balance_amount">
							<p class="price">{{user_money}}</p>
						</div>
						<div class="query">
							<a class="addMoney" href="#" @click="recharge">充值</a>
							<a class="getMoney" href="#" @click="putforward">提现</a>
						</div>
						<div class="line"></div>
					</div>
					<div class="credit">
						<h3>信用额度</h3>
						<h6>总额度 <span class="all_credit">{{all_edu}}</span>(元)</h6>
						<div class="aviable">
							<p>可用额度</p>
							<p class="price1">{{card_money}}</p>
						</div>
						<div class="no">
							<p>冻结额度</p>
							<p class="price2" style="font-size: 28px;line-height: 35px;">{{credit_line_frozen}}</p>
						</div>
						<div class="line"></div>
					</div>
					<div class="redBag">
						<h3>红包</h3>
						<div class="aviable">
							<p>现金红包</p>
							<p class="price1">{{red_packets}}</p>
						</div>
						<div class="no">
							<p>抵用红包</p>
							<p class="price2">{{offset_red_packets}}</p>
						</div>
					</div>
				</div>

				<div class="left_middle">
					<div class="grade">
						<h3>积分</h3>
						<div class="grade_aount">
							<p class="price">{{integral}}</p>
						</div>
						<div class="line"></div>
					</div>
					<div class="jietiao">
						<h3>优智借条</h3>
						<p class="edu">江湖救急？随时？随地？随便花？</p>
						<p class="text1">
							<a href="#">是的，点我申请</a>
						</p>
						<div class="btn">
							<span class="apply">点我申请</span>

						</div>
						<div class="line"></div>
					</div>
					<div class="waiting">
						<img src="../assets/gonnen1.png" />
					</div>
				</div>

				<div class="left_bottom">
					<p class="title">我的交易</p>
					<ul class="change">
						<li>待付款<i style="color: red;">{{waitPay}}</i>
							<div class="change_line"></div>
						</li>
						<li>待发货<i style="color: red;">{{waitSend}}</i>
							<div class="change_line"></div>
						</li>
						<li>待收货<i style="color: red;">{{waitGet}}</i>
							<div class="change_line"></div>
						</li>
						<li>待评价<i style="color: red;">{{waitRmark}}</i>
							<div class="change_line"></div>
						</li>
						<li>全部订单<i style="color: red;">{{allOrder}}</i></li>
					</ul>
					<div class="shop" style="display: none;">你的购物车空空如也,你好久没在商城购物了，赶快去购物吧</div>
					<!--<ul class="shop2">
						<li v-for="item in goodItems">
							<img :src="'require(http://api.eawsp.com/'+ item.commodity.image_thumbnail+')'" />
							<p class="text"><span class="text_title">您提交了订单准备付款</span><span class="text_price">&yen;{{item.commodity.shop_price}}</span></p>
							<div class="pay_btn"><span class="cancel" @click="cancelOrder()">取消订单</span><button class="pay">立即付款</button></div>
						</li>
					</ul>-->
				</div>
				<div class="left_bottom2">
					<p class="title"><span class="jifen_title">积分商城</span><span class="jifen_duihuan"><a href="#" @click="jumpToImall">进入积分商城</a><img src="../assets/qianjin.png"/></span></p>
					<ul class="jifen">
						<li v-for="list in lists" @click="goTodetails(list.id)"><img :src="'http://api.eawsp.com/'+list.image_thumbnail" />
						<p class="scorebox">{{list.integral}}积分</p>
							<div class="jifen_details">{{list.name}}</div>
						</li>
						
					</ul>
				</div>
			</div>

			<div class="content_right">
				<div class="security">
					<h3>账户安全</h3>
					<div class="grade">
						<div class="security_classs">
							<span class="yiban">一般</span>
							<p class="changColor">
								<span class="low" :style="{ background: lowColor}"></span><span class="middle" :style="{ background: middleColor}"></span><span class="high" :style="{ background: highColor}"></span>
							</p>
							<span class="tisheng" @click="goUp()">提升</span>
						</div>
						<div class="state">
							<p class="phone">手机：<span>{{is_binding_phone}}</span></p>
							<p class="email">邮箱：<span>{{is_binding_email}}</span></p>
						</div>
						<div class="youzhifen">
							<div id="fen">{{youzhifen}}</div>
							<div id="fen_class">{{dengji}}</div>
							<p>优智分</p>
						</div>

					</div>
				</div>
				<div class="myCare">
					<p class="myCare_title">我的关注</p>
					<ul class="myCare_list">
						<li>
							<p class="amount">{{store_count}}</p>
							<p class="list_goods">店铺关注</p>
						</li>
						<li>
							<p class="amount">{{save_goods}}</p>
							<p class="list_goods">收藏商品</p>
						</li>
					</ul>
				</div>

				<div class="myFooter">
					<p class="myFooter_title">我的足迹</p>
					<div class="myFooter_body">
            <el-carousel height="85px">
              <el-carousel-item v-for="(item,index) in img" :key="index">
                <h3>
                  <img  alt="" v-for="val in item" :src="'http://api.eawsp.com'+val.commoditys.image_thumbnail">
                  <!--<img src="../assets/b.png" alt="">-->
                  <!--<img src="../assets/b.png" alt="">-->
                  <!--<img src="../assets/b.png" alt="">-->
                </h3>
              </el-carousel-item>
            </el-carousel>
						<!--<div class="carousel" v-if="img">-->
							<!--<transition-group tag='ul' class="clearfix slide" name='image'>-->
								<!--<li v-for='(list,index) in img' :key='index' v-show='index===mark' style="overflow: hidden">-->
									<!--<a v-for="val in list" style="float: left;width: 61px;height: 85px"><img :src="'http://api.eawsp.com'+val.commoditys.image_thumbnail"></a>-->
								<!--</li>-->
							<!--</transition-group>-->
							<!--<div class="bullet">-->
								<!--<span v-for='(item,index) in img.length' :class="{'active':index===mark}" @click='change(index)'></span>-->
							<!--</div>-->
						<!--</div>-->
					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {

				dengji: '',
				
				all_youzhifen: '500',
				dengji: '',
				path: 'http://api.eawsp.com/api/',
				goodItems: [],
				lists:[],
				waitPay: 0,
				waitSend: 0,
				waitGet: 0,
				waitRmark: 0,
				allOrder: 0,
				//首页第一个接口
				user_money:0,
				credit_line_frozen:0,//冻结额度
				red_packets:0,
				offset_red_packets:0,
				youzhifen: 0,//优智分
				
				card_money:0,//可用额度
				integral:0,//积分
				
				
				lowColor:'#cccccc',
				middleColor:'#cccccc',
				highColor:'#cccccc',
				is_binding_phone:0,
				is_binding_email:0,
				store_count:0,//关注店铺
				commodity_count:0,//关注商品
				save_goods:0,//商品收藏
				goods_score:0,
				//轮播图
				mark: 0,
				timer: null,
				img: null,

			}

		},
		computed:{
			all_edu:function(v){
				return v.card_money+v.credit_line_frozen;
			}
		},
		methods: {
			//轮播图
			change(i) {
				this.mark = i
			},
			autoPlay() {
				this.mark++
					if(this.mark === this.img.length) {
						this.mark = 0
						return
					}
			},
			play() {
				setInterval(this.autoPlay, 3000)
			},
			//轮播图结束
			recharge: function() {
				this.$router.push({
					name: 'recharge'
				});
			},
			putforward: function() {
				this.$router.push({
					name: 'putforward'
				});
			},
			cancelOrder(){
				
			},
			jumpToImall(){
				this.$router.push({path:'/mall/imall'});
			},
			goTodetails(goods_id){
				console.log(goods_id);
				this.$root.suibian.id=goods_id;
				this.$root.suibian.one=1;
				this.$router.push({path:'/mall/details'});
			},
			goUp(){
				this.$router.push({path:'/whole/Account_security'})
			}
		},
		beforeMount() {
			//设置定时器，每3秒刷新一次
			var self = this;
			var timer = setInterval(getTotelNumber, 2);

			function getTotelNumber() {
				if(self.youzhifen < self.all_youzhifen) {
					self.youzhifen = self.youzhifen + 1;
					if(self.youzhifen > 0 && self.youzhifen <= 100) {
						self.dengji = '极差'
					} else if(self.youzhifen > 101 && self.youzhifen <= 200) {
						self.dengji = '差';
					} else if(self.youzhifen > 201 && self.youzhifen <= 400) {
						self.dengji = '一般';
					} else if(self.youzhifen > 401 && self.youzhifen <= 600) {
						self.dengji = '良好';
					} else if(self.youzhifen > 601 && self.youzhifen <= 700) {
						self.dengji = '优秀';
					} else if(self.youzhifen > 701 && self.youzhifen <= 800) {
						self.dengji = '极好';
					}

				} else {
					clearInterval(timer);
					self.youzhifen=self.all_youzhifen;
				}

			}
		},
    mounted(){
		  console.log($('.el-carousel__indicators .el-carousel__button'));
		  $('.el-carousel__indicators .el-carousel__indicator .el-carousel__button').css('width','7px');
    },
		created() {
			// this.play() //轮播图
			var that = this;
			//欢迎页面第一个接口
      console.log(sessionStorage.getItem("token"));
      this.$axios.post(this.path + "user/userWelcome?token=" + sessionStorage.getItem("token"), {

			}).then(function(res) {
				console.log(res);
				if(res.data.message=='token已过期，请重新登录'){
          that.$alert('登录信息过期，请重新登录', '优智优品网', {
            confirmButtonText: '确定',
            callback:action => {
              that.$router.push('/login');
          }
          });
        }else if(res.data.code==0){
          that.user_money=res.data.data.fund.user_money;
          that.credit_line_frozen=res.data.data.fund.credit_line_frozen;//冻结额度
          that.red_packets=res.data.data.cash_red;
          that.offset_red_packets=res.data.data.offset_red;
          that.all_youzhifen=res.data.data.fund.credit_score;//优智分

          that.card_money=res.data.data.fund.card_money;//可用额度
          that.integral=res.data.data.fund.integral;
          that.strength=res.data.data.strength;//密码强度
          that.store_count=res.data.data.store_count;
          that.commodity_count=res.data.data.store_count;
          that.save_goods=res.data.data.commodity_count;
          console.log(that.strength);
          if(that.strength==1){
            that.lowColor='#ff3300';
//				    that.middleColor:'#cccccc',
//					that.highColor:'#cccccc',
          }else if(that.strength==2){
            that.lowColor='#ff3300';
            that.middleColor='#ff3300';
          }else if(that.strength==3){
            that.lowColor='#ff3300';
            that.middleColor='#ff3300';
            that.highColor='#ff3300'
          }
          if(res.data.data.user_info.is_binding_phone==1){
            that.is_binding_phone='已绑定';

          }else{
            that.is_binding_phone='未绑定';
          };
          if(res.data.data.user_info.is_binding_email==1){
            that.is_binding_email='已绑定';

          }else{
            that.is_binding_email='未绑定';
          }
        }

			});
			//我的交易
			this.$axios.post(this.path + "user/getMeOrder?token=" + sessionStorage.getItem("token"), {
				status: ''
			}).then(function(res) {
				console.log(res);
        // if(res.data.message=='token已过期，请重新登录'){
        //   that.$alert('登录信息过期，请重新登录', '优智优品网', {
        //     confirmButtonText: '确定',
        //     callback:action => {
        //       that.$router.push('/login');
        //     }
        //   });
        // }
				var item = res.data.data.data;
				that.allOrder = item.length;
				//订单状态 0:未支付 1:未发货 2:已发货 3:已取消 4:已完成 5:退货 全部不传参数
				for(var i = 0; i < item.length; i++) {
					if(item[i].status == 0) {
						that.waitPay = that.waitPay + 1;
						that.goodItems.push(item[i].order_goods[0]);
					} else if(item[i].status == 1) {
						that.waitSend = that.waitSend + 1;
					} else if(item[i].status == 2) {
						that.waitSend = that.waitGet + 1;
					} else if(item[i].status == 4) {
						that.waitSend = that.waitRmark + 1;
					}
				}
			});
//			console.log(that.goodItems);

			//积分商城
			this.$axios.post(this.path + "user/getPointGoods?token="+ sessionStorage.getItem("token"), {

			}).then(function(res) {
				console.log(res);
        // if(res.data.message=='token已过期，请重新登录'){
        //   that.$alert('登录信息过期，请重新登录', '优智优品网', {
        //     confirmButtonText: '确定',
        //     callback:action => {
        //       that.$router.push('/login');
        //     }
        //   });
        // }
				that.lists=res.data.data;
				

			});
//			我的足迹
			this.$axios.post(this.path + "user/getHistory?token=" + sessionStorage.getItem("token"), {

			}).then(function(res) {
			  var j;
			  var z=1;
				console.log(res);
        // if(res.data.message=='token已过期，请重新登录'){
        //   that.$alert('登录信息过期，请重新登录', '优智优品网', {
        //     confirmButtonText: '确定',
        //     callback:action => {
        //       that.$router.push('/login');
        //     }
        //   });
        // }

        var arr = res.data.data.data;
        var arr2 = [];
        var arr3 = [];
        console.log(arr);
        for (var i = 0; i < arr.length; i += 4) {
          arr2.push([]);
          arr3.push(i);
        }
        arr3.push(arr3[arr3.length - 1] + 4);
        for (var j = 0; j < arr2.length; j ++) {
          for (var k = arr3[j]; k < arr3[j + 1]; k ++) {
            arr2[j].push(arr[k]);
          }
        }
        that.img = arr2;
        console.log(that.img);
        for (var i = 0; i < that.img.length; i ++) {
          for (var j = 0; j < that.img[i].length; j ++) {
            if (that.img[i][j].commoditys == null) {
              that.img[i][j].commoditys = {};
            }
            if (that.img[i][j] == undefined) {
              that.img[i][j] = {};
            }
          }
        }
        console.log(that.img);
			});
			if(that.img.lenth){
        this.play()
      }
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	ul,
	ol,
	dl {
		list-style: none;
	}
	
	a {
		color: #333333;
		text-decoration: none;
	}
	
	.content_details {
		float: left;
		width: 1000px;
		/*height: 688px;*/
		margin: 30px 0px 0px 20px;
		overflow: hidden;
		color: #333333;
	}
	
	.content_details .content_left {
		width: 748px;
		/*			height: 700px;
  */
		overflow: hidden;
		float: left;
		margin-right: 8px;
	}
	
	.content_details .content_left .left_top,
	.content_details .content_left .left_middle,
	.content_details .content_left .left_bottom {
		overflow: hidden;
		background-color: #FFFFFF;
		margin-bottom: 10px;
	}
	
	.content_details .balance,
	.content_details .credit,
	.content_details .redBag,
	.content_details .jietiao,
	.content_details .waiting {
		width: 249.33px;
		height: 249.33px;
		float: left;
		position: relative;
	}
	
	.content_details .balance h3,
	.content_details .grade h3,
	.content_details .credit h3,
	.content_details .redBag h3 {
		text-align: center;
		font-size: 24px;
		color: #333333;
		padding: 20px 0;
		font-weight: normal;
	}
	
	.content_details .credit h3 {
		padding-bottom: 10px;
		font-weight: normal;
	}
	
	.content_details .credit h6 {
		margin-bottom: 10px;
		text-align: center;
		font-weight: normal;
		font-size: 12px;
	}
	
	.content_details .grade .grade_aount {
		height: 73px;
		text-align: center;
		background: url(../assets/yue1.png) no-repeat center 0px;
		padding-top: 87px;
	}
	
	.content_details .balance .balance_amount {
		height: 50px;
		text-align: center;
		background: url(../assets/yue1.png) no-repeat center 9px;
		padding-top: 68px;
	}
	
	.content_details .balance .query {
		height: 30px;
		overflow: hidden;
		width: 180px;
		margin: 0 auto;
	}
	
	.content_details .balance .query a {
		display: block;
		width: 78px;
		height: 28px;
		float: left;
		font-size: 16px;
		border: 1px solid #333333;
		border-radius: 5px;
		text-align: center;
		line-height: 28px;
	}
	
	.content_details .balance .query .addMoney {
		margin-right: 20px;
		color: #FFFFFF;
		background-color: #41BBEE;
		border-color: #41BBEE;
	}
	
	.content_details .balance .query .getMoney {
		color: #333333;
	}
	
	.content_details .balance .balance_amount p:first-child,
	.content_details .grade .grade_aount p:first-child {
		font-size: 16px;
		height: 20px;
		margin: 7px 0;
	}
	
	.content_details .balance .balance_amount p.price,
	.content_details .grade .grade_aount p.price {
		font-size: 28px;
		height: 35px;
	}
	
	.content_details .grade .grade_aount {
		background: url(../assets/jifen1.png) no-repeat center 0px;
	}
	
	.content_details .credit .aviable,
	.content_details .redBag .aviable,
	.content_details .credit .no,
	.content_details .redBag .no {
		width: 50%;
		float: left;
		height: 73px;
		padding-top: 80px;
		text-align: center;
		background: url(../assets/xinyon1.png) no-repeat 34px 0px;
	}
	
	.content_details .credit .aviable,
	.content_details .credit .no {
		padding-top: 58px;
	}
	
	.content_details .redBag .aviable,
	.content_details .redBag .no {
		height: 68px;
		padding-top: 72px;
	}
	
	.content_details .credit .no {
		background: url(../assets/xinyon2.png) no-repeat 34px 0px;
	}
	
	.content_details .redBag .aviable {
		background: url(../assets/honb2.png) no-repeat 34px 12px;
	}
	
	.content_details .redBag .no {
		background: url(../assets/honb1.png) no-repeat 34px 12px;
	}
	
	.content_details .credit .aviable p:first-child,
	.content_details .redBag .aviable p:first-child,
	.content_details .credit .no p:first-child,
	.content_details .redBag .no p:first-child {
		font-size: 16px;
		height: 20px;
		margin: 7px 0;
	}
	
	.content_details .credit .aviable p:last-child,
	.content_details .redBag .aviable p:last-child,
	.content_details .credit .no p:last-child,
	.content_details .redBag .no p:last-child {
		font-size: 28px;
		height: 35px;
	}
	
	.content_details .balance .balance_amount .price,
	.content_details .grade .grade_aount .price,
	.content_details .credit .aviable .price1,
	.content_details .redBag .aviable .price1 {
		color: red;
	}
	
	.content_details .content_left .left_top .line,
	.content_details .content_left .left_middle .line {
		height: 200px;
		width: 1px;
		background-color: #CCCCCC;
		float: left;
		position: absolute;
		top: 50%;
		margin-top: -100px;
		right: 0px;
	}
	
	.content_details .content_left .left_middle .grade,
	.content_details .content_left .left_middle .jietiao,
	.content_details .content_left .left_middle .waiting {
		width: 249.33px;
		height: 249.33px;
		float: left;
		position: relative;
	}
	
	.content_details .content_left .left_middle .waiting {
		padding: 47.665px 0;
		height: 154px;
	}
	
	.content_details .content_left .left_middle .waiting img {
		display: block;
		margin: 0 auto;
		width: 154px;
		height: 154px;
	}
	
	.content_details .content_left .left_middle .jietiao h3 {
		text-align: center;
		font-size: 24px;
		color: #333333;
		padding: 20px 0 30px 0px;
		font-weight: normal;
	}
	
	.content_details .content_left .left_middle .jietiao .edu {
		padding: 0 20px 0px 20px;
		font-size: 12px;
		font-weight: normal;
		color: #41BBEE;
		text-align: center;
	}
	
	.content_details .content_left .left_middle .jietiao .jietiao_line {
		width: 200px;
		height: 2px;
		background-color: #41BBEE;
		margin: 0 auto;
		margin-bottom: 5px;
	}
	
	.content_details .content_left .left_middle .text1,
	.content_details .content_left .left_middle .text2 {
		text-align: center;
		font-size: 14px;
	}
	
	.content_details .content_left .left_middle .text1 a {
		/*margin-top: 10px;*/
		color: #ff0000;
	}
	
	.content_details .content_left .left_middle .text2 {
		margin-bottom: 20px;
	}
	
	.content_details .content_left .left_middle .btn {
		width: 102px;
		height: 32px;
		overflow: hidden;
		margin: 0 auto;
		margin-top: 38px;
	}
	
	.content_details .content_left .left_middle .btn .apply {
		display: block;
		float: left;
		width: 100px;
		height: 30px;
		line-height: 30px;
		border-radius: 5px;
		margin-right: 30px;
		text-align: center;
		font-size: 14px;
		color: #333333;
		color: #FFFFFF;
		background-color: #41BBEE;
	}
	
	.content_details .content_left .left_middle .btn .jiekuan {
		display: block;
		float: left;
		width: 70px;
		height: 30px;
		line-height: 30px;
		border-radius: 8px;
		background-color: #41BBEE;
		color: #FFF;
		text-align: center;
		color: #FFFFFF;
		font-size: 14px;
	}
	
	.content_details .content_left .left_middle .waiting p {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background-color: #41BBEE;
		line-height: 80px;
		text-align: center;
		position: absolute;
		right: 50%;
		margin-right: -40px;
		top: 50%;
		margin-top: -40px;
	}
	
	.content_details .content_left .left_bottom {
		/*height: 300px;*/
	}
	
	.content_details .content_left .title {
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		font-size: 16px;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.content_details .content_left .change {
		overflow: hidden;
		margin-top: 30px;
		height: 90px;
	}
	
	.content_details .content_left .change li {
		width: 20%;
		float: left;
		padding-top: 50px;
		text-align: center;
		position: relative;
		background: url(../assets/fukuan.png) no-repeat center 0px;
		color: #333333;
		font-size: 12px;
	}
	
	.content_details .content_left .change li i {
		font-style: normal;
	}
	
	.content_details .content_left .change li:nth-child(2) {
		background: url(../assets/daifahuo1.png) no-repeat center 0px;
	}
	
	.content_details .content_left .change li:nth-child(3) {
		background: url(../assets/queren.png) no-repeat center 0px;
	}
	
	.content_details .content_left .change li:nth-child(4) {
		background: url(../assets/pinjia.png) no-repeat center 0px;
	}
	
	.content_details .content_left .change li:nth-child(5) {
		background: url(../assets/qbu.png) no-repeat center 0px;
	}
	
	.content_details .content_left .change li .change_line {
		width: 2px;
		height: 30px;
		position: absolute;
		top: 15px;
		right: 0px;
		background-color: #CCCCCC
	}
	
	.content_details .content_left .left_bottom .shop {
		padding-top: 135px;
		background: url(../assets/jifen1.png) no-repeat center 50px;
		text-align: center;
		line-height: 42px;
		height: 82px;
		color: #333333;
		font-size: 12px;
		font-family: "microsoft yahei";
	}
	
	.content_details .content_left .left_bottom .shop2 {
		padding: 30px 40px 30px 50px;
	}
	
	.content_details .content_left .left_bottom .shop2 li {
		margin-bottom: 30px;
		overflow: hidden;
		height: 60px;
	}
	
	.content_details .content_left .left_bottom .shop2 li img {
		display: block;
		width: 60px;
		height: 60px;
		float: left;
	}
	
	.content_details .content_left .left_bottom .shop2 li p.text {
		width: 235px;
		height: 60px;
		float: left;
		margin-left: 14px;
	}
	
	.content_details .content_left .left_bottom .shop2 li p.text .text_title {
		display: block;
		height: 30px;
		line-height: 37px;
		color: #333333;
		font-size: 14px;
	}
	
	.content_details .content_left .left_bottom .shop2 li p.text .text_price {
		display: block;
		height: 25px;
		line-height: 32px;
		font-size: 12px;
		color: #41bbee;
	}
	
	.content_details .content_left .left_bottom .shop2 li .pay_btn {
		height: 60px;
		float: right;
		line-height: 60px;
		/*background-color: #41BBEE;*/
		margin-right: 40px;
	}
	
	.content_details .content_left .left_bottom .shop2 li .pay_btn .cancel {
		margin-right: 14px;
		color: #333333;
		font-size: 14px;
	}
	
	.content_details .content_left .left_bottom .shop2 li .pay_btn .pay {
		border: none;
		width: 90px;
		height: 34px;
		background-color: #41BBEE;
		color: #FFFFFF;
		font-size: 14px;
	}
	
	.content_details .content_left .left_bottom2 {
		height: 300px;
		background-color: #FFFFFF;
	}
	
	.content_details .content_left .left_bottom2 .title {
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		border-bottom: 1px solid #CCCCCC;
		overflow: hidden;
	}
	
	.content_details .content_left .left_bottom2 .title .jifen_title {
		float: left;
	}
	
	.content_details .content_left .left_bottom2 .title .jifen_duihuan {
		float: right;
		margin-right: 50px;
	}
	
	.content_details .content_left .left_bottom2 .title .jifen_duihuan a {
		margin-right: 20px;
	}
	
	.content_details .content_left .jifen {
		overflow: hidden;
		padding: 30px 45px 0px;
	}
	
	.content_details .content_left .jifen li {
		width: 149.5px;
		float: left;
		text-align: center;
		box-sizing: border-box;
		margin-right: 20px;
		position: relative;
		
	}
	.content_details .content_left .jifen li p.scorebox{
		width: 84px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		position: absolute;
		right: 0px;
		bottom: 25px;
		background: #FF3300;
		color: #FFFEFE;
	}
	.content_details .content_left .jifen li .jifen_details{
		width: 100%;
		overflow: hidden; 
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	
	.content_details .content_left .jifen li:last-child {
		margin: 0px;
	}
	
	.content_details .content_left .jifen li img {
		width: 149.5px;
		height: 151px;
	}
	
	.content_details .content_right {
		width: 244px;
		height: 600px;
		margin-right: none;
		float: left;
	}
	
	.content_details .content_right .security {
		background-color: #FFFFFF;
	}
	
	.content_details .content_right>h3 {
		height: 50px;
		line-height: 50px;
		padding-left: 25px;
		font-size: 14px;
	}
	
	.content_details .content_right .security_classs {
		overflow: hidden;
		padding: 19px 0px 19px 25px;
		line-height: 21px;
	}
	
	.content_details .content_right .security_classs span.yiban {
		display: block;
		float: left;
		color: red;
		margin-right: 10px;
	}
	
	.content_details .content_right .security_classs p.changColor {
		display: block;
		float: left;
		padding: 5px 0px;
	}
	
	.content_details .content_right .security_classs .low,
	.content_details .content_right .security_classs .middle,
	.content_details .content_right .security_classs .high {
		display: block;
		float: left;
		width: 25px;
		height: 10px;
		background-color: #CCCCCC;
		margin-right: 10px;
	}
	
	.content_details .content_right .security_classs span.tisheng {
		display: block;
		color: #41BBEE;
		margin-left: 10px;
		float: left;
	}
	
	.content_details .content_right .state {
		height: 50px;
		line-height: 50px;
		padding-left: 25px;
		overflow: hidden;
	}
	
	.content_details .content_right .state .phone {
		width: 40%;
		float: left;
		padding-left: 15px;
		background: url(../assets/phone.png) no-repeat 2px 19px;
		font-size: 12px;
	}
	
	.content_details .content_right .state .email {
		font-size: 12px;
		width: 40%;
		float: left;
		padding-left: 15px;
		background: url(../assets/emall.png) no-repeat 0px 22px;
	}
	
	.content_details .content_right .youzhifen {
		width: 253px;
		height: 253px;
		text-align: center;
		background: url(../assets/youzhifen.png) no-repeat center center;
	}
	
	.content_details .content_right .youzhifen #fen {
		padding-top: 130px;
	}
	
	.content_details .content_right .youzhifen #fen_class {
		padding-top: 0px;
	}
	
	.content_details .content_right .youzhifen p {
		padding-top: 37px;
	}
	
	.content_details .content_right .youzhifen img {
		width: 182px;
		height: 142px;
		padding-top: 21px;
	}
	
	.content_details .content_right .myCare,
	.content_details .content_right .myFooter {
		height: 115px;
		background: #FFFFFF;
		margin-top: 10px;
	}
	
	.content_details .content_right .myCare .myCare_title,
	.content_details .content_right .myFooter .myFooter_title {
		height: 29px;
		line-height: 29px;
		font-size: 16px;
		border-bottom: 1px solid #CCCCCC;
		padding-left: 20px;
	}
	
	.content_details .content_right .myCare .myCare_list {
		overflow: hidden;
	}
	
	.content_details .content_right .myCare .myCare_list li {
		float: left;
		width: 50%;
		text-align: center;
	}
	
	.content_details .content_right .myCare .myCare_list li .amount {
		font-size: 12px;
		margin: 20px 0px 10px;
	}
	/*轮播图样式*/
	
	.myFooter_body {
		position: relative;
		height: 85px;
	}
  .el-carousel__item h3 {
    height: 85px;
    font-size: 14px;
    line-height: 150px;
    margin: 0;
    padding: 0px 10px;
  }
  .el-carousel__item h3 img{
    width: 50px;
    height: 75px;
    padding: 3px;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #ffffff;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #ffffff;
  }
	
	/*.myFooter_body .clearfix {*/
		/*content: '';*/
		/*clear: both;*/
		/*display: block;*/
	/*}*/
	
	/*.myFooter_body .carousel {*/
		/*width: 244px;*/
		/*height: 85px;*/
		/*margin: 0 auto;*/
		/*overflow: hidden;*/
		/*position: relative;*/
	/*}*/
	
	/*.myFooter_body .slide {*/
		/*width: 244px;*/
		/*height: 85px;*/
	/*}*/
	
	/*.myFooter_body li {*/
		/*position: absolute*/
	/*}*/
	
	/*.myFooter_body img {*/
		/*width: 61px;*/
		/*height: 85px;*/
	/*}*/
	
	/*.myFooter_body .bullet {*/
		/*width: 100%;*/
		/*position: absolute;*/
		/*bottom: 10px;*/
		/*margin: 0 auto;*/
		/*text-align: center;*/
		/*z-index: 10;*/
	/*}*/
	
	/*.myFooter_body span {*/
		/*width: 20px;*/
		/*height: 5px;*/
		/*border: 1px solid;*/
		/*background: white;*/
		/*display: inline-block;*/
		/*margin-right: 10px;*/
	/*}*/
	
	/*.myFooter_body .active {*/
		/*background: red;*/
	/*}*/
	
	/*.myFooter_body .image-enter-active {*/
		/*transform: translateX(0);*/
		/*transition: all 1s ease;*/
	/*}*/
	
	/*.myFooter_body .image-leave-active {*/
		/*transform: translateX(-100%);*/
		/*transition: all 1s ease;*/
	/*}*/
	
	/*.myFooter_body .image-enter {*/
		/*transform: translateX(100%)*/
	/*}*/
	
	/*.myFooter_body .image-leave {*/
		/*transform: translateX(0)*/
	/*}*/
</style>

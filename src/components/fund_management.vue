<template>
	<div id="fund_management">
		<p class="title">消费明细</p>
		<div class="fund_content">
			<div class="search">
				<p>
					<span class="time">
	    				<span class="time_title">交易时间：</span>
					<span class="left">
	    					<el-date-picker
							      v-model="value1"
							      align="right"
							      type="date"
							      placeholder="选择日期"
							      size='mini'
							      :picker-options="pickerOptions1"
							      @blur='selected'
							      format="yyyy 年 MM 月 dd 日"
      							  value-format="timestamp"
							      >
    						</el-date-picker>
	    					<span>-</span>
					<el-date-picker v-model="value2" align="right" type="date" placeholder="选择日期" size='mini' :picker-options="pickerOptions1" @blur='selected' format="yyyy 年 MM 月 dd 日" value-format="timestamp">
					</el-date-picker>
					</span>
					</span>
					<span class="time_round">
    					<span class="time_title">今天&nbsp;|&nbsp;最近</span><span @click="week" class="week">一周</span><span @click="month" class="month">一个月</span><span @click="threeMonth" class="threeMonth">三个月</span><span @click="year" class="year">一年</span>
					</span>
				</p>
				<p>
					<span class="type">
    				<span class="type_title">交易类型：</span><span @click="all" class="all">全部</span><span @click="chongzhi" class="recharge">充值</span><span @click="tixian" class="putforward">提现</span><span @click="shopping" class="shopping">消费</span><span @click="huankuan" class="returnMoney">还款</span><span @click="qita" class="else">其他</span>
					</span>
				</p>
				<p>
					<span class="money">
    				<span class="money_title">金额范围：</span>
					<span>
    					<input type="text"  v-model="fund_money_s"/>
    					<span>-</span>
					<input type="text" v-model="fund_money_e" />
					<button class="btn_ok" @click="sure">确定</button>
					<button class="btn_clear" @click="clear">清除</button>
					</span>
					</span>

				</p>
			</div>

			<table cellpadding="0" cellspacing="0" border="0">
				<tr class="head">
					<td>流水号</td>
					<td>时间</td>
					<td>类型</td>
					<td>金额</td>
					<td class="lastTd">备注</td>
					</th>
					<tr class="row" v-for="item in items">
						<td>{{item.serial_number}}</td>
						<td>{{item.created_at}}</td>
						<td>{{item.fund_type}}</td>
						<td>{{item.fund_money}}</td>
						<td class="lastTd">{{items.remarks}}</td>
					</tr>
			</table>

			<div class="all_money">
				<p>您当前的消费金额为：<span>{{all_money}}</span></p>
			</div>
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
	</div>

</template>

<script>
	export default {
		name: "fund_management",
		data() {
			return {
				items: [],
				pickerOptions1: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				},
				value1: '',
				value2: '',
				fund_type: '',
				fund_money_s: '',
				fund_money_e: '',

				items: [],
				current_page: '',
				last_page: '',
				prev_page_url: '',
				next_page_url: '',
				last_page_url: '',
				first_page_url: '',
				count: 1,
				NUM: 1,
				all_money: '',
				path: 'http://api.eawsp.com/api/user/consumptionDetail',

			};
		},
		methods: {
			week: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.month').css('background-color', '#FFFFFF');
				$('.threeMonth').css('background-color', '#FFFFFF');
				$('.year').css('background-color', '#FFFFFF');
				var nowDate = new Date();

				var oneweekdate = new Date(nowDate - 7 * 24 * 3600 * 1000);
				var y = oneweekdate.getFullYear();
				var m = oneweekdate.getMonth() + 1;
				var d = oneweekdate.getDate();
				var formatnowdate = y + '-' + m + '-' + d + ' 00:00:00';
				var date1 = new Date(formatnowdate);
				this.value1 = Date.parse(date1);;
				var date2 = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' 00:00:00';
				this.value2 = Date.parse(date2)
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000

				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})
			},
			month: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.week').css('background-color', '#FFFFFF');
				$('.threeMonth').css('background-color', '#FFFFFF');
				$('.year').css('background-color', '#FFFFFF');
				var nowDate = new Date();

				var date = new Date(nowDate - 30 * 24 * 3600 * 1000);
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				var d = date.getDate();
				var formatnowdate = y + '-' + m + '-' + d + ' 00:00:00';
				var date1 = new Date(formatnowdate);
				this.value1 = Date.parse(date1);
				var date2 = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' 00:00:00';
				this.value2 = Date.parse(date2);
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})

			},
			threeMonth: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.week').css('background-color', '#FFFFFF');
				$('.month').css('background-color', '#FFFFFF');
				$('.year').css('background-color', '#FFFFFF');
				var nowDate = new Date();
				var oneweekdate = new Date(nowDate - 90 * 24 * 3600 * 1000);
				var y = oneweekdate.getFullYear();
				var m = oneweekdate.getMonth() + 1;
				var d = oneweekdate.getDate();
				var formatnowdate = y + '-' + m + '-' + d + ' 00:00:00';
				var date1 = new Date(formatnowdate);
				this.value1 = Date.parse(date1);;
				var date2 = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' 00:00:00';
				this.value2 = Date.parse(date2)
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})

			},
			year: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.week').css('background-color', '#FFFFFF');
				$('.month').css('background-color', '#FFFFFF');
				$('.threeMonth').css('background-color', '#FFFFFF');
				var nowDate = new Date();
				var y = nowDate.getFullYear() - 1;
				var m = nowDate.getMonth() + 1;
				var d = nowDate.getDate();
				var formatnowdate = y + '-' + m + '-' + d + ' 00:00:00';
				var date1 = new Date(formatnowdate);
				this.value1 = Date.parse(date1);;
				var date2 = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate() + ' 00:00:00';
				this.value2 = Date.parse(date2)
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})

			},
			selected: function() {
				var that = this;

				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})
			},
			all: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.recharge').css('background-color', '#FFFFFF');
				$('.putforward').css('background-color', '#FFFFFF');
				$('.shopping').css('background-color', '#FFFFFF');
				$('.returnMoney').css('background-color', '#FFFFFF');
				$('.else').css('background-color', '#FFFFFF');
				this.fund_type = '';
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})

			},
			chongzhi: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.all').css('background-color', '#FFFFFF');
				$('.putforward').css('background-color', '#FFFFFF');
				$('.shopping').css('background-color', '#FFFFFF');
				$('.returnMoney').css('background-color', '#FFFFFF');
				$('.else').css('background-color', '#FFFFFF');
				this.fund_type = '2';
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url

				})

			},
			tixian: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.recharge').css('background-color', '#FFFFFF');
				$('.putforward').css('background-color', '#FFFFFF');
				$('.shopping').css('background-color', '#FFFFFF');
				$('.all').css('background-color', '#FFFFFF');
				$('.else').css('background-color', '#FFFFFF');
				this.fund_type = '3';
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url

				})
			},
			shopping: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.recharge').css('background-color', '#FFFFFF');
				$('.putforward').css('background-color', '#FFFFFF');
				$('.all').css('background-color', '#FFFFFF');
				$('.returnMoney').css('background-color', '#FFFFFF');
				$('.else').css('background-color', '#FFFFFF');
				this.fund_type = '1';
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1,
					apply_time_e: that.value2
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})
			},
			huankuan: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.recharge').css('background-color', '#FFFFFF');
				$('.putforward').css('background-color', '#FFFFFF');
				$('.shopping').css('background-color', '#FFFFFF');
				$('.all').css('background-color', '#FFFFFF');
				$('.else').css('background-color', '#FFFFFF');
				this.fund_type = '4';
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url

				})
			},
			qita: function(event) {
				event.target.style.backgroundColor = '#41bbee';
				$('.recharge').css('background-color', '#FFFFFF');
				$('.putforward').css('background-color', '#FFFFFF');
				$('.shopping').css('background-color', '#FFFFFF');
				$('.returnMoney').css('background-color', '#FFFFFF');
				$('.all').css('background-color', '#FFFFFF');
				this.fund_type = '5';
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url

				})
			},
			sure: function() {
				var that = this;
				this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
					fund_type: that.fund_type,
					fund_money_s: that.fund_money_s,
					fund_money_e: that.fund_money_e,
					apply_time_s: that.value1 / 1000,
					apply_time_e: that.value2 / 1000
				}).then(function(res) {
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})
			},
			clear: function() {
				this.fund_money_s = '';
				this.fund_money_e = '';
				this.fund_type = '';
				this.value1 = '';
				this.value2 = '';
				$('.all').css('background-color', '#FFFFFF');
				$('.recharge').css('background-color', '#FFFFFF');
				$('.putforward').css('background-color', '#FFFFFF');
				$('.shopping').css('background-color', '#FFFFFF');
				$('.returnMoney').css('background-color', '#FFFFFF');
				$('.else').css('background-color', '#FFFFFF');
				$('.week').css('background-color', '#FFFFFF');
				$('.month').css('background-color', '#FFFFFF');
				$('.threeMonth').css('background-color', '#FFFFFF');
				$('.year').css('background-color', '#FFFFFF');
			},
			//前一页
			prev: function() {
				let that = this

				this.$axios.post(that.prev_page_url + '?token=' + sessionStorage.getItem("token"), {

				}).then(function(res) {
					that.count = res.data.data.res.last_page;
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})
			},
			// 分页下一页
			next: function() {
				let that = this;
				this.$axios.post(that.next_page_url + '?token=' + sessionStorage.getItem("token"), {

				}).then(function(res) {
					that.count = res.data.data.res.last_page;
					that.all_money = res.data.data.count;
					for(var i = 0; i < res.data.data.res.data.length; i++) {
						if(res.data.data.res.data[i].fund_type == 0) {
							res.data.data.res.data[i].fund_type = '冻结';
						} else if(res.data.data.res.data[i].fund_type == 1) {
							res.data.data.res.data[i].fund_type = '消费';
						} else if(res.data.data.res.data[i].fund_type == 2) {
							res.data.data.res.data[i].fund_type = '充值';
						} else if(res.data.data.res.data[i].fund_type == 3) {
							res.data.data.res.data[i].fund_type = '提现';
						} else if(res.data.data.res.data[i].fund_type == 4) {
							res.data.data.res.data[i].fund_type = '还款';
						} else if(res.data.data.res.data[i].fund_type == 5) {
							res.data.data.res.data[i].fund_type = '其它';
						} else if(res.data.data.res.data[i].fund_type == 6) {
							res.data.data.res.data[i].fund_type = '退款';
						}
					}
					that.items = res.data.data.res.data;

					that.current_page = res.data.data.res.current_page,
						that.last_page = res.data.data.res.last_page,
						that.prev_page_url = res.data.data.res.prev_page_url,
						that.next_page_url = res.data.data.res.next_page_url,
						that.first_page_url = res.data.data.res.first_page_url,
						that.last_page_url = res.data.data.res.last_page_url
				})
			},
			// 第几页
			GD: function() {
				let that = this;
				if(that.NUM == 1) {
					this.$axios.post(that.path + "?token=" + sessionStorage.getItem("token"), {

					}).then(function(res) {
						that.all_money = res.data.data.count;
						for(var i = 0; i < res.data.data.res.data.length; i++) {
							if(res.data.data.res.data[i].fund_type == 0) {
								res.data.data.res.data[i].fund_type = '冻结';
							} else if(res.data.data.res.data[i].fund_type == 1) {
								res.data.data.res.data[i].fund_type = '消费';
							} else if(res.data.data.res.data[i].fund_type == 2) {
								res.data.data.res.data[i].fund_type = '充值';
							} else if(res.data.data.res.data[i].fund_type == 3) {
								res.data.data.res.data[i].fund_type = '提现';
							} else if(res.data.data.res.data[i].fund_type == 4) {
								res.data.data.res.data[i].fund_type = '还款';
							} else if(res.data.data.res.data[i].fund_type == 5) {
								res.data.data.res.data[i].fund_type = '其它';
							} else if(res.data.data.res.data[i].fund_type == 6) {
								res.data.data.res.data[i].fund_type = '退款';
							}
						}
						that.items = res.data.data.res.data;

						that.current_page = res.data.data.res.current_page,
							that.last_page = res.data.data.res.last_page,
							that.prev_page_url = res.data.data.res.prev_page_url,
							that.next_page_url = res.data.data.res.next_page_url,
							that.first_page_url = res.data.data.res.first_page_url,
							that.last_page_url = res.data.data.res.last_page_url
					})
				} else if(that.NUM > that.count) {
				} else {
					this.$axios.post(that.path + '?token=' + sessionStorage.getItem("token"), {

						page: that.NUM

					}).then(function(res) {
						console.log(res);
						that.count = res.data.data.res.last_page;
						that.all_money = res.data.data.count;
						for(var i = 0; i < res.data.data.res.data.length; i++) {
							if(res.data.data.res.data[i].fund_type == 0) {
								res.data.data.res.data[i].fund_type = '冻结';
							} else if(res.data.data.res.data[i].fund_type == 1) {
								res.data.data.res.data[i].fund_type = '消费';
							} else if(res.data.data.res.data[i].fund_type == 2) {
								res.data.data.res.data[i].fund_type = '充值';
							} else if(res.data.data.res.data[i].fund_type == 3) {
								res.data.data.res.data[i].fund_type = '提现';
							} else if(res.data.data.res.data[i].fund_type == 4) {
								res.data.data.res.data[i].fund_type = '还款';
							} else if(res.data.data.res.data[i].fund_type == 5) {
								res.data.data.res.data[i].fund_type = '其它';
							} else if(res.data.data.res.data[i].fund_type == 6) {
								res.data.data.res.data[i].fund_type = '退款';
							}
						}
						that.items = res.data.data.res.data;

						that.current_page = res.data.data.res.current_page,
							that.last_page = res.data.data.res.last_page,
							that.prev_page_url = res.data.data.res.prev_page_url,
							that.next_page_url = res.data.data.res.next_page_url,
							that.first_page_url = res.data.data.res.first_page_url,
							that.last_page_url = res.data.data.res.last_page_url
					})
				}

			},

		},
		created() {
			var that = this;
			console.log(sessionStorage.getItem("token"));
			this.$axios.post("http://api.eawsp.com/api/user/consumptionDetail?token=" + sessionStorage.getItem("token"), {
				fund_type: '',
				fund_money_s: that.fund_money_s,
				fund_money_e: that.fund_money_e,
				apply_time_s: that.value1,
				apply_time_e: that.value2
			}).then(function(res) {
				console.log(res);
				that.all_money = res.data.data.count;
				for(var i = 0; i < res.data.data.res.data.length; i++) {
					if(res.data.data.res.data[i].fund_type == 0) {
						res.data.data.res.data[i].fund_type = '冻结';
					} else if(res.data.data.res.data[i].fund_type == 1) {
						res.data.data.res.data[i].fund_type = '消费';
					} else if(res.data.data.res.data[i].fund_type == 2) {
						res.data.data.res.data[i].fund_type = '充值';
					} else if(res.data.data.res.data[i].fund_type == 3) {
						res.data.data.res.data[i].fund_type = '提现';
					} else if(res.data.data.res.data[i].fund_type == 4) {
						res.data.data.res.data[i].fund_type = '还款';
					} else if(res.data.data.res.data[i].fund_type == 5) {
						res.data.data.res.data[i].fund_type = '其它';
					} else if(res.data.data.res.data[i].fund_type == 6) {
						res.data.data.res.data[i].fund_type = '退款';
					}
				}
				that.items = res.data.data.res.data;

				that.current_page = res.data.data.res.current_page,
					that.last_page = res.data.data.res.last_page,
					that.prev_page_url = res.data.data.res.prev_page_url,
					that.next_page_url = res.data.data.res.next_page_url,
					that.first_page_url = res.data.data.res.first_page_url,
					that.last_page_url = res.data.data.res.last_page_url

			})

		}

	}
</script>

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
	
	.white {
		background-color: #FFFFFF;
	}
	
	#fund_management {
		width: 1000px;
		float: right;
		margin: 30px 0px 0px 20px;
		font-family: "微软雅黑";
		color: #333333;
	}
	
	#fund_management .title {
		width: 979px;
		height: 59px;
		padding-left: 20px;
		font-size: 16px;
		line-height: 59px;
		border: 1px solid #e8e8e8;
		background-color: #FFFFFF;
		margin-bottom: 30px;
	}
	
	#fund_management .fund_content {
		padding: 40px 60px 80px 20px;
		background-color: #FFFFFF
	}
	
	#fund_management .fund_content .search {
		margin-bottom: 50px;
	}
	
	#fund_management .fund_content p {
		height: 24px;
		margin-bottom: 16px;
		font-size: 14px;
		line-height: 24px;
	}
	
	#fund_management .fund_content .time {
		height: 24px;
		line-height: 24px;
		display: block;
		float: left;
	}
	
	#fund_management .fund_content .money input,
	#fund_management .fund_content .time input {
		width: 76px;
		height: 20px;
	}
	
	#fund_management .fund_content p .time_round {
		font-size: 12px;
		color: #333333;
		margin-left: 30px;
		display: block;
		float: left;
		overflow: hidden;
	}
	
	#fund_management .fund_content p .time_round .time_title {
		margin-right: 20px;
		display: block;
		float: left;
		width: 65px;
	}
	
	#fund_management .fund_content p .time_round span {
		display: block;
		float: left;
		width: 50px;
		height: 24px;
		text-align: center;
	}
	
	#fund_management .fund_content .money,
	#fund_management .fund_content .type {
		display: block;
		height: 24px;
		/*overflow: hidden;*/
	}
	
	#fund_management .fund_content .type .type_title {
		width: 70px;
	}
	
	#fund_management .fund_content .type span {
		display: block;
		float: left;
		line-height: 24px;
		width: 50px;
		text-align: center;
	}
	
	#fund_management .fund_content .money .btn_ok {
		width: 50px;
		height: 24px;
		text-align: center;
		margin: 0px 6px 0px 20px;
		background-color: #41BBEE;
		border: none;
		font-size: 12px;
		color: #FFFFFF;
	}
	
	#fund_management .fund_content .money .btn_clear {
		border: 1px solid #999999;
		background-color: #41BBEE;
		width: 50px;
		height: 24px;
		background-color: #FFFFFF;
		font-size: 12px;
	}
	
	table {
		width: 880px;
		margin: 0 auto;
		border-collapse: collapse;
	}
	
	table .head {
		width: 880px;
		height: 38px;
		background-color: #41BBEE;
		outline: none;
	}
	
	table .head td {
		width: 170px;
		height: 38px;
		text-align: center;
		color: #FFFFFF;
		line-height: 38px;
		font-size: 14px;
		font-weight: normal;
		outline: none;
	}
	
	table .head td.lastTd {
		width: 200px;
	}
	
	table .row {
		width: 878px;
		height: 36px;
		outline: 1px solid #E8E8E8;
	}
	
	table .row td {
		width: 168px;
		outline: 1px solid #e8e8e8;
		text-align: center;
		font-size: 12px;
	}
	
	table .row td.lastTd {
		width: 196px;
		outline: 1px solid #E8E8E8;
		text-align: center;
		font-size: 12px;
		color: #333333;
	}
	
	#fund_management .fund_content .all_money {
		width: 880px;
		height: 37px;
		outline: 1px solid #E8E8E8;
		outline-top: none;
		text-align: right;
		margin: 0 auto;
		/*padding-right: 20px;*/
	}
	
	#fund_management .fund_content .all_money p {
		width: 200px;
		float: right;
		margin-right: 20px;
		line-height: 37px;
		font-size: 12px;
	}
	
	.fy {
		width: 300px;
		height: 30px;
		/*background: #41bbee;*/
		float: left;
		margin: 30px auto 0px 300px;
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
</style>

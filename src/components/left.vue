<template>
    <div id="left">
      <div class="content_side">
        <dl style="border-top: 0px solid #E6E6E6;">
          <dt>会员中心</dt>
          <dd><router-link to="/whole/User_information" tag="a" active-class="active">用户信息</router-link></dd>
          <dd><router-link to="/whole/Account_security" tag="a" active-class="active">账户安全</router-link></dd>
          <dd><router-link to="/whole/Receiving_address" tag="a" active-class="active">收货地址</router-link></dd>
          <dd><router-link to="/whole/fund_management" tag="a" active-class="active">消费明细</router-link></dd>
          <dd><router-link to="/whole/red" tag="a" active-class="active">我的红包</router-link></dd>
        </dl>
        <dl>
          <dt>交易中心</dt>
          <dd><router-link to="/whole/Order" tag="a" active-class="active">我的订单</router-link></dd>
          <dd><router-link to="/whole/Refundable" tag="a" active-class="active">退款/退货/维修</router-link></dd>
          <dd><router-link to="/whole/evaluate" tag="a" active-class="active">商品评价/晒单</router-link></dd>
          <dd><router-link to="/whole/Collection" tag="a" active-class="active">商品收藏</router-link></dd>
          <dd><router-link to="/whole/follow" tag="a" active-class="active">店铺关注</router-link></dd>

        </dl>
        <dl>
          <dt>服务中心</dt>
          <dd><router-link to="/whole/message" tag="a" active-class="active">我的留言</router-link></dd>
        </dl>
      </div>
    </div>
</template>

<script>
  export default {
    name: "left",
    methods:{

    }
  }
</script>

<style scoped>
.content_side {
    background-color: #FFFFFF;
    float: left;
    width: 180px;
    height: 560px;
  }
.content_side dl {
  border-top: 1px solid #E6E6E6;
  padding: 30px 0px 0px 0px;
  margin-bottom: 20px;
  }
.content_side dt{
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: left;
  text-indent: 20px;
}
.content_side dl dd{
  padding-top: 10px;
  font: 12px microsoft yahei;
  color: #666666;
  text-align: left;
  margin-inline-start: 20px;
  }
.content_side dl dd a{
     color: #666666;
     outline: medium none;
     text-decoration: none;
  }
  .active{
    color: #41bbee;
  }

</style>

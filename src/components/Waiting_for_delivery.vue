<template>
  <div id="waiting_send">
    <div class="nav_top">我的位置：首页>我的订单>订单详情>订单号：80066583251</div>
    <div class="content">
      <div class="status">
        <div class="left">
          <p class="title">已付款</p>
          <img src="../assets/chanpin.png"/>
          <p class="text">
            <span>商品金额：&yen;25</span>
            <span>下单时间：2018-10-15 12：12:23</span>
          </p>
          <p class="tishi">当前订单状态：您已支付成功；等待买家发货，您可以通过优智通联系卖家确认收货时间</p>
        </div>
        <div class="right">
          <p class="title">订单状态</p>
          <img src="../assets/dengdai.png"/>
          <p class="wating_text">等待发货</p>
          <a href="#">提醒卖家发货</a>
        </div>

      </div>

      <p class="send_mes">订单信息</p>
      <div class="send_mes_content">
        <div style="margin-left: 17px;padding-top: 10px">
          <div class="send_msg">
            <p class="send_content">配送信息</p>
          </div>
          <div class="mes_box child_content">
            <p class="send_time">送货时间：仅下午</p>
            <p class="send_time">送货地址：张帮，130******111111，四川省-成都市-地址地址地址地址地址</p>
            <p class="send_time">配送方式：-</p>
          </div>
          <div class="send_msg">
            <p class="send_content">订单信息</p>
          </div>
          <div class="child_content">
            <span class="num">订单号：1234</span>
            <span class="num">支付方式：1234</span>
            <span class="num">商户等级：交易状态</span>
          </div>
        </div>
        <div>
          <table>
            <tr class="header" align="center" style="background: #cccccc">
              <td>商品详情</td>
              <td>数量</td>
              <td>单价</td>
              <td>总计</td>
            </tr>
            <tr align="center">
              <td style="height: 127px">
                <img style="width: 82px;height: 82px" src="../assets/chanpin.png">
                <div style="display: inline-block;float: right">
                  <span style="display: inline-block;margin-top: 35px;margin-right: 74px">小度智能音箱 百度AI音箱 WIFI/蓝牙音箱 百度资源 儿.......</span>
                </div>
              </td>
              <td>
                <span>1</span>
              </td>
              <td>
                ￥88.90
              </td>
              <td>
                <span>￥88.90</span>
              </td>
            </tr>
          </table>
        </div>
        <div style="padding-left: 852px;margin-top: 21px;padding-bottom: 15px">
          <span>总金额：</span><span style="color: #ff0000">￥88.90</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Waiting_for_delivery"
    }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  ul,dl,
  ol {
    list-style: none;
  }

  #waiting_send {
    width: 1000px;
    float: left;
    padding-left: 20px;
    color: #333333;
    font-family: "微软雅黑";
    font-size: 14px
  }

  #waiting_send .nav_top {
    height: 59px;
    padding-left: 20px;
    font-size: 16px;
    line-height: 59px;
    border: 1px solid #e8e8e8;
    margin-top: 30px;
    background-color: #FFFFFF;
    margin-bottom: 30px;
  }

  #waiting_send .content {
    width: 1000px;
  }
  #waiting_send .content .status{
    overflow: hidden;
  }
  #waiting_send .content .left{
    width: 490px;
    background-color: #FFFEFE;
    float: left;

  }
  #waiting_send .content .left p.title{
    height: 49px;
    line-height: 49px;
    padding-left: 30px;
    border-bottom: 1px solid #E8E8E8;
    background: url(../assets/zhuozhong.png) no-repeat 20px center;
  }
  #waiting_send .content .left img{
    margin-left: 40px;
    padding-top: 40px;
  }
  #waiting_send .content .left .text{
    display: inline-block;
    margin-left: 12px;
    vertical-align: bottom;
  }
  #waiting_send .content .left .text span{
    display: block;
    height: 16px;
    padding-bottom: 20px;
  }
  #waiting_send .content .left .tishi{
    padding: 30px 40px 50px;
    color: #999999;
    line-height: 20px;
  }
  #waiting_send .content .right{
    width: 490px;
    background-color: #FFFEFE;
    float: left;
    margin-left: 20px;
  }
  #waiting_send .content .right .title{
    height: 49px;
    line-height: 49px;
    padding-left: 30px;
    border-bottom: 1px solid #E8E8E8;
    background: url(../assets/zhuozhong.png) no-repeat 20px center;
  }
  #waiting_send .content .right img{
    padding: 40px 0px 30px;
    display: block;
    margin: 0 auto;
  }
  #waiting_send .content .right .wating_text{
    text-align: center;
    margin-bottom: 24px;
    font-size: 14px;
  }
  #waiting_send .content .right a{
    display: block;
    width: 148px;
    height: 38px;
    border: 1px solid #41BBEE;
    line-height: 38px;
    text-align: center;
    color: #666666;
    margin: 0 auto;
    margin-bottom: 60px;
    text-decoration: none;
    background-color: lightcyan;
  }
  #waiting_send .send_mes{
    margin-top: 40px;
    width: 150px;
    height: 50px;
    color: #f9f9f9;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    background: url(../assets/dingdan.png) no-repeat 20px 20px;
    background-color: #41BBEE;
  }
  #waiting_send .send_mes_content .send_msg{
    border-left: 5px solid #333333;
  }
  #waiting_send .send_mes_content .send_msg .send_content{
    padding-left: 6px;
  }
  #waiting_send .send_mes_content .child_content{
    padding-top: 10px;
    margin-left: 41px;
  }
  #waiting_send .send_mes_content .num{
    margin-right: 200px;
  }
  table{
    margin-top: 17px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  tr,td{
    border: 1px solid #e6e6e6;
  }
  .header td{
    height: 30px;
  }
  .header td:nth-child(1){
    width: 604px;
  }
  .header td:nth-child(n+2){
    width: 145px;
  }
  .header tr:nth-child(2){
    height: 126px;
  }
  .send_mes_content{
    background: #ffffff;
  }
  .send_time:nth-child(n+2){
    margin-top: 10px;
  }
  .send_time:nth-child(3){
    margin-bottom: 20px;
  }
</style>

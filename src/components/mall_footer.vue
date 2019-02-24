<template>
    <div>
      <div class="footer1">
        <div class="footer_1">
          <p><img src="../assets/huanhuo.png" alt=""><span>支持15天换货</span></p>
          <p><img src="../assets/sheng.png" alt=""><span>缩减环节，低价购物</span></p>
          <p><img src="../assets/muzhi.png" alt=""><span>7天无理由退换货</span></p>
          <p><img src="../assets/fahuo.png" alt=""><span>闪电发货</span></p>
        </div>
        <div class="footer_2" >
          <div>
            <p>新手上路</p>
            <ul>
              <li><a href="#">售后流程</a></li>
              <li><a href="#">购物流程</a></li>
              <li><a href="#">订购方式</a></li>
              <li><a href="#">在线支付</a></li>
              <li><a href="#">公司转账</a></li>
            </ul>
          </div>
          <div>
            <p>配送方式</p>
            <ul>
              <li><a href="#">货到付款区域</a></li>
              <li><a href="#">配送支付查询</a></li>
              <li><a href="#">支付方式说明</a></li>
              <li><a href="#">如何送礼</a></li>
              <li><a href="#">Global Shopping</a></li>
            </ul>
          </div>
          <div>
            <p>购物指南</p>
            <ul>
              <li><a href="#">常见问题</a></li>
              <li><a href="#">订购流程</a></li>
              <li><a href="#">注册新会员</a></li>
              <li><a href="#">购/机票</a></li>
              <li><a href="#">联系客服</a></li>
            </ul>
          </div>
          <div>
            <p>售后服务</p>
            <ul>
              <li><a href="#">退换货原则</a></li>
              <li><a href="#">售后服务保证</a></li>
              <li><a href="#">退货流程</a></li>
              <li><a href="#">退款说明</a></li>
              <li><a href="#">返修/退换货</a></li>
            </ul>
          </div>
          <div>
            <p>关于我们</p>
            <ul>
              <li><a href="#">网站故障报告</a></li>
              <li><a href="#">选机咨询</a></li>
              <li><a href="#">投诉与建议</a></li>
              <li><a href="#">节能补贴</a></li>
              <li><a href="#">平台礼品卡</a></li>
            </ul>
          </div>
          <div id="service">
            <p>客服服务</p>
            <h3><img src="../assets/dianhua.png" alt="" style="display: block;float: left;margin-right: 10px"><span style="color: #41bbee">400-000-0000</span></h3>
            <p style="color: #666666;font-size: 14px;margin-bottom: 0;">周一至周五&nbsp;&nbsp;9:00-17:00(<span style="color: #999999">仅收市话费</span>)</p>
            <button style="font-size: 14px">在线客服</button>

          </div>
        </div>
      </div>
      <div class="hr"></div>
      <div class="footer">
        <div id="ftConw">
          <p id="lh">
            <a href="#">关于我们</a>|<a href="#">联系我们</a>|<a href="#">商家入驻</a>|<a href="#">友情链接</a>|<a href="#">站点地图</a>|<a href="#">手机商城</a>|<a href="#">销售联盟</a>|<a
            href="">商城社区</a>|<a href="">帮助中心</a>
          </p>
          <p class="cp">©2015-2018&nbsp;四川优智优品网络技术有限公司&nbsp;&nbsp;并保留所有版权</p>
          <p class="cp color"><a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">蜀ICP备18028427-1号</a></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "mall_footer"
    }
</script>

<style scoped>

  *{
    margin: 0;
    padding:0;
    list-style: none;
  }
  .hr{
    width: 100%;
    height: 1px;
    background-color: rgb(181,181,181);
  }
  .footer{
    width: 100%;
    /*margin:68px auto 0;*/
    height: 169px;
    background-color: rgb(242,242,242);
    overflow: hidden;
    /*position: absolute;
    bottom: 0px;
    left: 0px;*/
  }
  .footer #ftConw #lh{
    margin-top: 10px;
    text-align: center;
  }
  .footer #ftConw .cp{
    margin: 5px 0 10px;
    text-align: center;
  }
  .footer #ftConw .color a{
    color: #0000ff;
  }
  .footer #ftConw a{
    margin: 0 7px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
  }
  .footer #ftConw a:hover{
    text-decoration:underline;
  }
  .footer #ftConw{
    width: 80%;
    margin: 68px auto 0;
    font-size: 14px;
    font-family: 微软雅黑;
    color: #666666;
  }
  .footer #ftConw #lh{
    margin-top: 10px;
    text-align: center;
  }
  .footer #ftConw .cp{
    margin:5px 0 15px;
    text-align: center;
  }
  .footer #ftConw a{
    margin: 0 7px;
    display: inline-block;
    text-decoration: none;
    color: #666666;
  }
  .footer #ftConw a:hover{
    text-decoration:underline;
  }
  .footer1{
    border: 1px solid rgba(229,227,227,0.6);
    background: rgba(245,245,245,0.6);
  }
  .footer_1{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
  }
  .footer_1 img{
    display: block;
    margin-right: 10px;
    float: left;
  }
  .footer_1>p{
    width: 200px;
    margin: 40px 0 40px 80px;
    line-height: 38px;
    float: left;
  }

  .footer_2{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .footer_2 div{
    width: 130px;
    margin-left: 40px;
    float: left;
  }
  .footer_2 div>p{
    margin-bottom: 28px;
  }
  .footer_2 div>ul>li{
    font-size: 14px;
    margin-bottom: 8px;
  }

  .footer_2 div>ul>li a{
    color: #999999;
    text-decoration: none;
  }
  .footer_2 div>ul>li a:hover{
    text-decoration: underline;
    color: #41bbee;
  }
  #service{
    width: 295px;
  }
  #service button{
    width: 110px;
    height: 30px;
    border-radius: 2px;
    float: left;
    border: 0;
    color: #ffffff;
    margin-top: 40px;
    background: #41BBEE;
  }
</style>

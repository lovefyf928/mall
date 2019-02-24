<template>
    <div id="footerr">
      <div class="footer">
        <hr />
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
        name: "footerr"
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    margin:68px auto 0;

  }

  .footer #ftConw{
    font-size: 14px;
    font-family: 微软雅黑;
    color: #666666;
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
    margin: 0 auto;
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
</style>

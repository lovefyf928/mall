<template>
  <div>
    <div class="headerLayout">
      <div class="headerCon ">
        <h1 id="mallLogo"><img @click="JumpToIndex()" src="../assets/gwcheader.png"/></h1>
        <div class="searchDiv">
          <input type="text" placeholder="购物车" name="keyword">
          <button class="searchButton" type="submit">搜索</button>
        </div>
      </div>
      <div class="null"></div>
      <p class="all">全部商品(0)</p>
    </div>

    <!--主内容区域-->
    <div class="block_jm">
      <div class="blank1"></div>
      <div class="flowBox_jm">
        <div class="title_jm">
          <table cellpadding="0" cellspacing="0" width="100%" border="0">
            <tr>
              <td width="8%" align="center" style="border-top: 2px solid #41bbee;">
                <input type="checkbox" @click="f5()" id="chkAll" style="height: 28px;vertical-align: middle;">&nbsp;&nbsp;全选
              </td>
              <td width="37%" align="center">商品信息</td>
              <td width="15%" align="center">数量</td>
              <td width="15%" align="center">单价</td>
              <td width="15%" align="center">金额</td>
              <td width="10%" align="center">操作</td>
            </tr>
          </table>
        </div>
        <form action="" class="formCart1" name="formCard">
          <table align="center" cellspacing="0" cellpadding="0" style="height:auto;width: 100%;">
            <tr>
              <td style="width: 100%;">
                <table cellpadding="5" cellspacing="1" border="0" width="100%">
                  <tr v-for="(i,key) in dataarr">
                    <td align="center" width="5%">
                      <input type="checkbox" class="sid1" @click="f1(key)">
                    </td>
                    <td align="center" width="40%">
                      <div class="thumb_name">
                        <dl>
                          <dt><a href="#" target="_blank"><img :src="'http://api.eawsp.com'+i.commoditys.image_thumbnail" border="0" :title="i.commoditys.name"></a></dt>
                          <dd>
                            <a href="#" target="_blank" class="f6">{{i.commoditys.name}}</a>
                            <br>
                            <font class="attrname"></font>
                          </dd>
                        </dl>
                      </div>
                    </td>
                    <td align="center" width="15%">
                      <div class="jm_cartnum">
                        <span class="jmmin" @click="min(i.shop_number,key)">-</span>
                        <input type="text" disabled :value="i.shop_number" class="jminputBg" id="number_1" :v-model="i.shop_number">
                        <input type="hidden" id="hidden_1" value="1">
                        <span class="jmadd" @click="add(i.shop_number,key)">+</span>
                      </div>
                    </td>
                    <td align="center" width="15%">
                      <font class="cart_jmprice danjia" id="goods_price">{{i.commoditys.shop_price}}</font>
                    </td>
                    <td align="center" width="15%">
                      <font class="cart_jmprice allpirice" id="subtotal_54">{{i.shop_number*i.commoditys.shop_price}}</font>
                    </td>
                    <td align="center" width="10%">
                      <a href="#" class="f6" id="" @click="del(i.id,key)">删除</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </form>
        <table width="100%" align="center" border="0" cellspacing="6" cellpadding="5" style="border-top: 1px solid #ddd">
          <tr>
            <td align="center" width="35">
              <a href="#" class="jmclear" @click="delall(alldata[0].user_id)"><font color="#aaaaaa">清空购物车</font></a>
            </td>
            <td align="right" width="150" class="cart_money_info">
              已选
              <span>{{selectCommodity}}</span>
              件商品
            </td>
            <td align="right" width="16%" class="cart_money_info">
              合计：
              <span v-if="dataarr">{{allPrice}}</span>
            </td>
            <td align="center" width="7%">
              <a href="#" :class="{jmcheckout:isdis,isdisplay:isselect}" @click="jump()">结算</a>
            </td>
          </tr>
        </table>
      </div>
      <div class="blank"></div>

      <!--<div class="flowBox_jm">-->
        <!--<div class="title_jm">-->
          <!--<ul id="HotBoxTit">-->
            <!--<li class="curr">购买的还买了</li>-->
            <!--<li >今日最受欢迎</li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="flowHot" id="HotBox" >-->
          <!--<ul class="curr clearfix">-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/231_thumb_G_1437587773545.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >1优智优品网</a></p>-->
              <!--<p class="price"><del style="color:#999">328.80</del></p>-->
              <!--<p><font class="price">274.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(232)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/231_thumb_G_1437587773545.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >1优智优品网</a></p>-->
              <!--<p class="price"><del style="color:#999">118.80</del></p>-->
              <!--<p><font class="price">99.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(231)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/231_thumb_G_1437587773545.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >优智优品网</a></p>-->
              <!--<p class="price"><del style="color:#999">42.00</del></p>-->
              <!--<p><font class="price">35.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(230)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/231_thumb_G_1437587773545.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >1优智优品网</a></p>-->
              <!--<p class="price"><del style="color:#999">139.20</del></p>-->
              <!--<p><font class="price">116.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(229)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/231_thumb_G_1437587773545.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >1优智优品网</a></p>-->
              <!--<p class="price"><del style="color:#999">358.80</del></p>-->
              <!--<p><font class="price">299.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(228)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/231_thumb_G_1437587773545.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >优智优品网1</a></p>-->
              <!--<p class="price"><del style="color:#999">546.00</del></p>-->
              <!--<p><font class="price">455.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(227)"></a> </li>-->
          <!--</ul>-->
          <!--<ul class="clearfix">-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/u=399799043.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >1优智优品网</a></p>-->
              <!--<p class="price"><del style="color:#999">999999</del></p>-->
              <!--<p><font class="price">888888.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(232)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/u=399799043.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >优智优品网1</a></p>-->
              <!--<p class="price"><del style="color:#999">999999</del></p>-->
              <!--<p><font class="price">8888888.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(231)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/u=399799043.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >优智优品网1</a></p>-->
              <!--<p class="price"><del style="color:#999">99999</del></p>-->
              <!--<p><font class="price">88888.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(230)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/u=399799043.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >优智优品网1</a></p>-->
              <!--<p class="price"><del style="color:#999">999999</del></p>-->
              <!--<p><font class="price">8888888.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(229)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/u=399799043.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >优智优品网1</a></p>-->
              <!--<p class="price"><del style="color:#999">999999</del></p>-->
              <!--<p><font class="price">888888.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(228)"></a> </li>-->
            <!--<li>-->
              <!--<p class="pic"><a href="#" target="_blank" ><img src="../assets/u=399799043.jpg" ></a></p>-->
              <!--<p class="name"><a href="#" target="_blank" >优智优品网1</a></p>-->
              <!--<p class="price"><del style="color:#999">99999</del></p>-->
              <!--<p><font class="price">888888.00</font></p>-->
              <!--<a class="j_AddCart" href="javascript:addToCart(227)"></a> </li>-->
          <!--</ul>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import "../assets/js/jquery-3.3.1.min"
    export default {
        name: "home",
        data(){
          return {
            alldata: null,
            arr: [],
            dataarr: [],
            allPrice: 0,
            selectCommodity: 0,
            count:1,
            isselect: false,
            isdis:true
          }
        },
      mounted(){
        console.log("mounted is call");

        $('#app').css('backgroundColor','#f9f9f9');
        this.$axios.post("http://api.eawsp.com/api/store/disShopCart?token="+sessionStorage.getItem("token")).then((res) => {
          this.alldata = res.data.data;
          for (var i in this.alldata) {
            this.arr.push(this.alldata[i]);
          }
          var arr2 = [];
          for (var j = 1; j < this.arr.length; j ++) {
            arr2.push(this.arr[j]);
          }
          for (var k = 0; k < arr2.length; k ++) {
            for (var x = 0; x < arr2[k].length; x ++) {
              this.dataarr.push(arr2[k][x]);
            }
          }
          console.log(this.dataarr);
        });
      },
      updated(){
          console.log("it is updated");

        var hotboxtit = document.getElementById("HotBoxTit");
        var hotbox = document.getElementById("HotBox");
        var hottlist = $("#HotBoxTit").children();
        var hotlist = $("#HotBox").children();
        var hottlen = hottlist.length;
        for(var i = 0; i < hottlen; i++)
        {
          hottlist[i].pai=i;
          hottlist[i].onmouseover = function(){
            for(var j=0; j < hottlen; j++){
              var _hott = hottlist[j];
              var _hot =  hotlist[j];
              var ison  =  j==this.pai;
              _hott.className=(ison ? "curr" : "");
              _hot.className= (ison  ?  "curr" : "");
            }
          }
        }

        $(function(){

          $.ajax({

          })

          // 全选全不选功能
          $('#chkAll').bind('click',function(){
            if(this.checked){
              $("input[class^='sid']").each(function(){
                $(this).prop('checked',true);
              })
            }else{
              $("input[class^='sid']").each(function(){
                $(this).prop('checked',false);
              })
            }
          });
          var allLength=$("input[class^=sid]").length;
          $("input[class^=sid]").each(function(){
            $(this).bind('click',function(){
              var selectedLength=$("input[class^=sid]:checked").length;
              if(selectedLength==allLength){
                $('#chkAll').prop("checked",true);
              }else{
                $('#chkAll').prop("checked",false);
              }
            })
          });
          //购物车商品 数量
          $(".jminputBg").blur(function(){
            var r = /^[1-9]+[0-9]*]*$/;
            var number = $("#number_1").val();
            if(!r.test(number)){
              this.$alert('您输入的格式不正确', '提示', {
                confirmButtonText: '确定',
              });
              $("#number_1").val($("#hidden_1").val());
            }else{
              console.log(number);
            }
          });

          // $(".jmadd").bind('click',function(){
          //   var t = $(this).parent().find('input[class*=jminputBg]');
          //   t.val(parseInt(t.val())+1);
          //   console.log(t.val());
          // });
          // $(".jmmin").bind('click',function(){
          //   var t = $(this).parent().find('input[class*=jminputBg]');
          //   if(parseInt(t.val())-1<=1){
          //     t.val(1);
          //     console.log(t.val());
          //   }else{
          //     t.val(parseInt(t.val())-1);
          //     console.log(t.val());
          //   }
          // });


          // 商品清除
          //清空购物
          $(".jmclear").bind("click",function () {
            $.ajax({
              type:"post",
              url:"url",
              data:{
                user_id:user_id,
              },
              dataType:"json",
              success:function(res){
                console.log(1);
              }
            })
          })
        })
      },
      methods: {
        JumpToIndex(){
          this.$router.push("/mall");
        },
          f1(key){
            var all = 0;
            var allp = 0;
            if ($($(".sid1")[key]).is(':checked')) {
              this.selectCommodity += this.dataarr[key].shop_number;
              console.log(this.selectCommodity);
              this.allPrice += this.dataarr[key].shop_number*this.dataarr[key].commoditys.shop_price;
            }
            else {
              this.selectCommodity -= this.dataarr[key].shop_number;
              this.allPrice -= this.dataarr[key].shop_number * this.dataarr[key].commoditys.shop_price;
            }
          },
          f5(){
            if ($($("#chkAll")[0]).is(":checked")) {
              var allprice = 0;
              var selectcommodity = 0
              for (var i = 0; i < $(".allpirice").length; i++) {
                allprice += parseInt($($(".allpirice")[i]).html())
                selectcommodity += parseInt($($(".jminputBg")[i]).val());
              }
              this.allPrice = allprice;
              this.selectCommodity = selectcommodity;
              console.log(sessionStorage.getItem("token"));
            }
            else {
              this.selectCommodity -= this.selectCommodity;
              this.allPrice -= this.allPrice
            }
          },
          del(id,key){
            this.$axios.post("http://api.eawsp.com/api/store/delCommodity?token="+sessionStorage.getItem("token"),{'id':id}).then((res) => {
              this.dataarr.splice(key,1);
              console.log(res);
            });
          },
          delall(uid){
            this.$axios.post("http://api.eawsp.com/api/store/delCommodity?token="+sessionStorage.getItem("token"),{'user_id':uid}).then((res) => {
              console.log(res);
            });
          },
        add(count,key){
          this.dataarr[key].shop_number = this.dataarr[key].shop_number + 1;
            // this.dataarr[key].shop_number = a;
            console.log(this.dataarr[key].shop_number);
            if ($($(".sid1")[key]).is(':checked')) {
              // console.log($(".sid1"));
              // this.selectCommodity = parseInt($($(".jminputBg")[key]).val())-1;
              // var val2 = $($(".danjia")[key]).html();
              // this.allPrice -= val2;
              // console.log(val2);
              this.selectCommodity = this.selectCommodity + 1
              this.allPrice += this.dataarr[key].commoditys.shop_price
            }
        },
        min(count,key){
            if (this.dataarr[key].shop_number > 1) {
              var a = this.dataarr[key].shop_number - 1;
              this.dataarr[key].shop_number = a;
              console.log(this.dataarr[key].shop_number);
              if ($($(".sid1")[key]).is(':checked')) {
                // console.log($(".sid1"));
                // this.selectCommodity = parseInt($($(".jminputBg")[key]).val())-1;
                // var val2 = $($(".danjia")[key]).html();
                // this.allPrice -= val2;
                // console.log(val2);
                this.selectCommodity = this.selectCommodity - 1
                this.allPrice -= this.dataarr[key].commoditys.shop_price
              }
            }
        },
        jump(){
            if ($($(".sid1")).is(':checked')) {
              var arr = [];
              for (var i = 0; i < $(".sid1").length; i++) {
                if ($($(".sid1")[i]).is(':checked')) {
                  arr.push(this.dataarr[i].commodity_id);
                }
              }
              for (var i = 0; i < this.dataarr.length; i++) {
                this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token=" + sessionStorage.getItem("token"), {
                  "commodity_id": this.dataarr[i].commodity_id,
                  "shop_number": this.dataarr[i].shop_number
                });
                if (this.dataarr.length - 1 == i) {
                  this.$axios.post("http://api.eawsp.com/api/store/priceCalculation?token=" + sessionStorage.getItem("token"), {"shop_cards_id": arr}).then((res) => {
                    console.log(res);
                    this.$root.submitdata = res;
                    this.$router.push("/submit");
                  });
                }
              }
            }
            else {
              alert("请选择商品")
            }
        }
      },
      watch: {
        allPrice: function () {
          if (this.allPrice == 0) {
            this.isdis = true;
            this.isselect = false;
          }
          else {
            this.isdis = false;
            this.isselect = true;
          }
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html{overflow-y:scroll;}
  /*头部*/
  .headerLayout{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .headerLayout .headerCon{
    width: 1200px;
    height: 50px;
    margin: 20px auto;
  }
  .headerCon h1{
    width: 257px;
    height: 40px;
    float: left;
  }
  .searchDiv{
    width: 362px;
    height: 40px;
    float: right;
  }
  .searchDiv input{
    width: 300px;
    height: 38px;
    border: 1px solid #41bbee;
    float: left;
  }
  .searchDiv button{
    display: block;
    width: 60px;
    height: 40px;
    border: 0;
    background-color: #41bbee;
    font-size: 18px;
    color: #ffffff;
  }
  .headerLayout .null{
    width: 1200px;
    height: 20px;
    margin: 0 auto;
  }
  .headerLayout .all{
    font-family: "Microsoft YaHei";
    font-size: 16px;
    color: #41bbee;
  }

  /*主内容区域*/
  .block_jm{
    width: 1200px;
    margin: 0 auto;
  }
  .blank1 {
    height: 5px;
    line-height: 5px;
    clear: both;
    visibility: hidden;
  }
  .blank {
    height: 10px;
    line-height: 10px;
    clear: both;
    visibility: hidden;
  }

  /*商品展示*/
  .flowBox_jm {
    width: 1200px;
    border: 1px solid #ddd;
    background: #fff;
    margin: 0 auto;
  }
  .flowBox_jm a {
    color: #666;
    font-size: 14px;
    font-family: "Microsoft YaHei", å¾®è½¯é›…é»‘;
    text-decoration: none;
  }
  /*.flowBox_jm a:hover {*/
    /*text-decoration: underline;*/
  /*}*/
  .flowHot {
    width: 100%;
    background: #fff;
    overflow: hidden;
  }
  .flowHot ul {
    padding: 30px 0px;
    display: none;
  }
  .flowHot ul.curr {
    display: block;
  }
  .flowHot ul li {
    float: left;
    width: 160px;
    margin: 20px 0 0 35px;
    position: relative;
  }
  .flowHot ul li a {
    text-decoration: none;
    color: #555;
  }
  .flowHot ul li a:hover {
    text-decoration: underline;
    color: #ff3300;
  }
  .flowHot ul li p {
    padding-bottom: 15px
  }
  .flowHot ul li p.pic {
    text-align: center;
  }
  .flowHot ul li p.pic img {
    width: 150px;
    height: 150px;
    border: none;
  }
  .flowHot ul li p.price {
    padding-bottom: 0px;
  }
  .flowHot ul li a.j_AddCart {
    position: absolute;
    bottom: 13px;
    right: 0px;
    width: 28px;
    height: 28px;
    background: transparent url("../assets/gouwu2.png") no-repeat scroll 0px 3px;
    background-size: 28px 28px;
    cursor: pointer;
  }
  .flowHot ul li p .price {
    font-family: "Microsoft YaHei";
    color: #41bbee;
    font-size: 17px;
  }
  .flowHot ul li p.name {
    height: 36px;
    overflow: hidden;
    padding-bottom: 0px;
    margin-bottom: 5px
  }
  .title_jm {
    background: #f1f1f1;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #DDD;
  }
  .title_jm table tr td {
    font-family: "Microsoft YaHei";
    font-size: 12px;
    color: #333333;
  }
  .title_jm ul {
    margin: 0px 0 0 40px;
  }
  .title_jm ul li {
    float: left;
    margin-right: 20px;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    color: #666;
    font-size: 14px;
    font-family: 微软雅黑;

    cursor: pointer;
    margin-top: 4px;
  }
  .title_jm ul li.curr {
    background: #fff;
    border: 1px solid #ddd;
    border-bottom: 1px solid #fff;
    color: #41bbee;
  }



  .thumb_name {
    float: left;
    width: 100%;
  }
  .thumb_name dl {
    float: left;
    margin: 13px 10px 13px 68px;
  }
  .thumb_name dl dt {
    float: left;
    width: 80px;
    text-align: center;
  }
  .thumb_name dl dt img {
    width: 60px;
    height: 60px;
  }
  .thumb_name dl dd {
    float: left;
    width: 245px;
    text-align: left;
    font-size: 14px;
  }
  .thumb_name dl dd span {
    float: left;
    display: inline;
    margin-top: 3px;
    width: 36px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    margin-right: 10px;
    color: #fff;
  }
  .thumb_name dl dd .attrname {
    color: #bbb;
  }
  .thumb_name dl dd a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
  }
  .thumb_name dl dd a:hover {
    color: #41bbee;
    text-decoration: underline;
  }
  .thumb_name dl dd a.f6 {
    font-size: 12px;
  }



  .jminputBg {
    float: left;
    width: 30px;
    text-align: center;
    margin: 0;
    border: 1px solid #b3b3b3;
    height: 20px;
    line-height: 20px
  }
  .jm_cartnum {
    width: 44%;
    text-align: center;
    margin: 0 auto;
    padding: 0 auto;
    overflow: hidden;
  }
  .jm_cartnum span {
    float: left;
    cursor: pointer;
    border: 1px solid #bbb;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    font-size: 15px;
    font-weight: bold;
  }
  .jm_cartnum span.jmadd {
    border-left: none;
    line-height: 18px;
    *line-height: 19px;
  }
  .jm_cartnum span.jmminu {
    border-right: none;
    line-height: 18px;
    *line-height: 19px;
  }

  .cart_jmprice {
    font-size: 14px;
    font-family: "Microsoft YaHei", å¾®è½¯é›…é»‘;
    font-weight: bold;
    color: #41bbee;
  }
  .cart_money_info{
    font-size: 14px;
    font-family: 微软雅黑;
    color: #333333;
  }
  .cart_money_info span {
    color: #41bbee;
    font-family: Helvetica, arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
  }
  .isdisplay{
    display: block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    color: #fefefe!important;
    font-size: 20px!important;
    background-color: #41bbee;
  }
  .jmcheckout{
    display: block;
    width: 80px;
    height: 40px;
    line-height: 40px;
    color: #fefefe!important;
    font-size: 20px!important;
    background-color: #cccccc;
  }

  /*========================================================================================================================*/
  .hr{
    width: 100%;
    margin-top: 100px;
    border: 1px solid #cccccc;
  }
  /*底部*/
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
  /*底部end*/
</style>

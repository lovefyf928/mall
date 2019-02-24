<template>
    <div style="width: 1200px;margin: 0 auto">
      <div>
        <div id="main">
          <img src="../assets/sye.png">
          <span class="header">首页</span>
          <span class="header">&gt;食品生鲜</span>
          <span class="header">&gt;{{sort}}</span>
          <span class="header" style="color: #999999">&gt;{{goods_name}}</span>
        </div>
        <div id="float">
          <div class="left">
            <div>
              <img :src="'http://api.eawsp.com'+alldata.alum[bigkey].image_url" width="400" height="400">
            </div>
            <div class="left_imgBox">
              <img class="img_list_prev" @click="f15()" src="../assets/jiantoudianji.png">
              <img @click="f10(index)" v-for="(tmp,index) in alldata.alum" :class="{img_list:true, img_list_active:tmp.isselect}" :src="'http://api.eawsp.com'+tmp.image_url">
              <img style="float: right" @click="f16()" class="img_list_next" src="../assets/you2.png">
            </div>
          </div>
          <div class="left center" >
            <p class="title">{{alldata.name}}</p>
            <!--<p class="subtitle">层层甄选 臻心臻意 爱的见证 巧克力让爱厉久弥新 送家人女友礼品</p>-->
            <div class="price" v-if="alldata.shop_price != undefined">
              <p class="sublist" style="margin-bottom: 10px;margin-top: 15px">售价</p><span style="color: red;display: inline-block;margin-right: 10px">商城价</span><span style="color: red">￥</span><span style="color: red;font-size: 24px;color: #e31939;display: inline-block;margin-right: 5px">{{alldata.shop_price}}</span><span style="color: #41BBEE;font-family: 'Microsoft YaHei';font-size: 12px">降价通知</span><br>
              <!--<p style="margin-left: 93px;margin-right: 10px;width: 50px;display: inline-block;font-size: 15px">会员价</p><span style="font-size: 15px">￥10.80</span><br>-->
              <p class="sublist" style="margin-top: 10px">促销</p><span style="color: #41BBEE;font-size: 15px">购买此商品获得99个积分</span>
            </div>
            <div class="price" v-if="alldata.shop_price == undefined">
              <p class="sublist" style="margin-bottom: 10px;margin-top: 15px">售价</p><span style="color: red;display: inline-block;margin-right: 10px">积分</span><span style="color: red"></span><span style="color: red;font-size: 24px;color: #e31939;display: inline-block;margin-right: 5px">{{alldata.integral}}</span><br>
              <!--<p style="margin-left: 93px;margin-right: 10px;width: 50px;display: inline-block;font-size: 15px">会员价</p><span style="font-size: 15px">￥10.80</span><br>-->
            </div>
            <div style="margin-left: 13px">
            <div style="display: flex;align-items: center;margin-top: 20px" v-if="color[0].color != ''">
            <div class="selecter" style="display: inline-block">
              <span style="display: inline-block">颜色</span>
            </div>
              <div style="display: inline-block">
                <div v-for="(tmp,index) in color" :class="{size_box:true,size_boxactive:tmp.isselect}" @click="handleclick(index)">{{tmp.color}}</div>
              </div>
            </div>
            <div style="display: flex;align-items: center" v-if="Specifications[0].Specifications != ''">
              <div class="selecter" style="display: inline-block">
                <span style="display: inline-block">规格</span>
              </div>
              <div v-for="(tmp,index) in Specifications" style="display: inline-block" >
                <div :class="{size_box:true,size_boxactive:tmp.isselect}" @click="handleclick1(index)">{{tmp.Specifications}}</div>
              </div>
            </div>
            <div style="display: flex;align-items: center" v-if="Flavor[0].Flavor != ''">
              <div class="selecter" style="display: inline-block">
                <span style="display: inline-block">口味</span>
              </div>
              <div v-for="(tmp,index) in Flavor" style="display: inline-block">
                <div @click="handleclick2(index)" :class="{size_box:true,size_boxactive:tmp.isselect}">{{tmp.Flavor}}</div>
              </div>
            </div>
            <div style="display: flex;align-items: center">
              <div class="selecter" style="display: inline-block">
                <span style="display: inline-block">数量</span>
              </div>
              <div style="display: inline-block">
                <div>
                  <div class="btn" @click="f1()">-</div><input style="display: inline-block;height: 25px;width: 60px;outline:none;text-align: center" v-model="count" onkeyup="value=value.replace(/[^\d]/g,'')" type="text"/><div @click="f2()" class="btn">+</div>
                  <span style="display: inline-block;margin-left: 23px">库存充足</span>
                </div>
              </div>
            </div>
            <div style="display: flex;align-items: center;margin-top: 10px">
              <div class="selecter" style="display: inline-block">
                <span style="display: inline-block">承诺</span>
                <div style="display: inline-block;margin-left: 55px">
                  <div class="promise">
                    <img src="../assets/gou.png">
                    <span>7天无理由</span>
                  </div>
                  <div class="promise">
                    <img src="../assets/gou.png">
                    <span>15天无理由</span>
                  </div>
                </div>
              </div>
            </div>
            <div style="vertical-align: baseline;overflow: hidden">
              <div v-if="!isnull" style="overflow: hidden;width: 360px;float: left">
                <button @click="buy()" class="btn2 buy">立即购买</button>
                <button @click="addCart()" class="btn2 addCart">加入购物车</button>
              </div>
              <div v-if="isnull">
                <button @click="f11()" class="btn2 buy">积分兑换</button>
              </div>
              <div @click="f14()" class="btn1">
                <div class="son">
                  <img width="20" height="20" src="../assets/x1.png"/><br>
                  <span>收藏</span>
                </div>
              </div>
              <div class="btn1">
                <div class="son">
                  <img src="../assets/shouji.png"><br>
                  <span>手机购</span>
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <div style="margin-top: 10px">
              <div style="display: inline-block;margin-right: 25px">
                <span style="display: inline-block">支付方式：</span>
              </div>
              <div style="display: inline-block">
                <div id="pay" style="margin-right: 10px">
                  <div>
                    <img src="../assets/zfb.png"/>
                    <span>支付宝</span>
                  </div>
                  <div>
                    <img src="../assets/weixin.png"/>
                    <span>微信</span>
                  </div>
                  <div>
                    <img src="../assets/xyka.png"/>
                    <span>信用卡</span>
                  </div>
                  <div>
                    <img src="../assets/yue.png"/>
                    <span>账户余额</span>
                  </div>
                  <div>
                    <img src="../assets/kuaijiezhifu.png"/>
                    <span>快捷支付</span>
                  </div>
                  <div>
                    <img src="../assets/shanglian.png"/>
                    <span>商联</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="left right">
            <div :class="{cj:rank1,zj:rank2,gj:rank3}">
              <div id="rightheader" style="width: 200px;height: 60px;"></div>
              <div id="rightcontent" v-if="alldata.shop_price != undefined">
                <div>
                  <b>{{alldata.store.store_name}}</b>
                </div>
                <div>
                  <span>店铺等级：</span><span>{{alldata.store.supplier_ranks.rank_name}}</span>
                </div>
                <div>
                  <span>联系客服：</span><span style="color: #41BBEE">优智通</span>
                </div>
                <div>
                  <span>商家资质：</span><img style="margin-right: 5px" src="../assets/yingyezhizhao.png"><img src="../assets/baozhengjin.png">
                </div>
                <div>
                  <span>信 用 分：</span><span>500</span>
                </div>
                <div>
                  <div @click="jumpToStore()" class="btn3">
                    <div style="margin-top: 5px">
                      <img src="../assets/shangdian.png"/>
                      <span style="color: #41BBEE;">进入商店</span>
                    </div>
                  </div>
                  <div class="btn3" @click="follow()">
                    <div  v-if="alldata.is_collection == 1" style="margin-top: 5px">
                      <img src="../assets/shangdian.png"/>
                      <span style="color: #41BBEE;">取消关注</span>
                    </div>
                    <div v-if="alldata.is_collection == 0" style="margin-top: 5px">
                      <img src="../assets/shangdian.png"/>
                      <span style="color: #41BBEE;">关注本店</span>
                    </div>
                  </div>
                </div>
                <div>
                  <img style="margin-left: 34px" src="../assets/erweima.png">
                  <p style="margin-top: 10px;font-size: 15px;color: #999999;margin-left: 7px">扫一扫，手机访问微商城</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <!--<div style="margin-top: 40px">-->
          <!--<div style="border: 1px solid #999999">-->
            <!--<div style="background: #999999;height: 40px;line-height: 40px;border-bottom: 1px solid #999999">-->
              <!--<span style="display:inline-block;margin-left:20px;font-size: 18px;color: #666666">精品推荐</span>-->
            <!--</div>-->
            <!--<div style="position: relative">-->
                <!--<img class="leftjt" src="../assets/zuola.png"/>-->
              <!--<div class="item">-->
                <!--<img src="../assets/hua.png">-->
                <!--<p style="color: #999999;margin-bottom: 10px">商品名称 商品名称</p>-->
                <!--<span style="color: #FF0000">¥10.80</span><img style="margin-left: 4px" src="../assets/xiaoche.png">-->
              <!--</div>-->
              <!--<div class="item1">-->
                <!--<img src="../assets/hua.png">-->
                <!--<p style="color: #999999;margin-bottom: 10px">商品名称 商品名称</p>-->
                <!--<span style="color: #FF0000">¥10.80</span><img style="margin-left: 4px" src="../assets/xiaoche.png">-->
              <!--</div>-->
              <!--<div class="item1">-->
                <!--<img src="../assets/hua.png">-->
                <!--<p style="color: #999999;margin-bottom: 10px">商品名称 商品名称</p>-->
                <!--<span style="color: #FF0000">¥10.80</span><img style="margin-left: 4px" src="../assets/xiaoche.png">-->
              <!--</div>-->
              <!--<div class="item1">-->
                <!--<img src="../assets/hua.png">-->
                <!--<p style="color: #999999;margin-bottom: 10px">商品名称 商品名称</p>-->
                <!--<span style="color: #FF0000">¥10.80</span><img style="margin-left: 4px" src="../assets/xiaoche.png">-->
              <!--</div>-->
              <!--<div class="item1">-->
                <!--<img src="../assets/hua.png">-->
                <!--<p style="color: #999999;margin-bottom: 10px">商品名称 商品名称</p>-->
                <!--<span style="color: #FF0000">¥10.80</span><img style="margin-left: 4px" src="../assets/xiaoche.png">-->
              <!--</div>-->
              <!--<img class="rightjt" src="../assets/youla.png"/>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <div id="float1">

            <div class="float2_left">
              <p style="border-left: 3px solid #41BBEE;padding-left: 10px;">相关分类</p>
              <div v-for="(tmp,key) in qq" class="classification" style="margin-top: 20px">
                <a @click="JumpTosj(key)" class="item2">{{tmp.name.name}}</a>
                <a @click="JumpTosj1(key)" class="item3">{{tmp.name1.name}}</a>
              </div>

            <!--<div style="width: 240px;border: 1px solid #CCCCCC;padding-top: 10px;padding-left: 10px;margin-top: 20px">-->
              <!--<p style="border-left: 3px solid #41BBEE;padding-left: 10px;">同类品牌</p>-->
              <!--<div class="classification" v-for="tmp in qq" style="margin-top: 20px">-->
                <!--<span class="item2">{{tmp.name}}</span>-->
                <!--<span class="item3">{{tmp.name1}}</span>-->
              <!--</div>-->
            <!--</div>-->
          </div>
          <div class="float2_right">
            <div style="margin-left: 20px">
              <div id="nav">
                <div @click="f12()" :class="{nav_active:isactive}"><a class="nav1 span_active">参数规格</a></div>
                <div @click="f13()" :class="{nav_active:isactive2}"><a class="nav1" @click="f5()">商品介绍</a></div>
                <!--<div><span class="nav1">商品评价</span></div>-->
                <!--<div><span class="nav1">售后保障</span></div>-->
              </div>
              <div class="detail1">
                <div class="son2">
                  <span class="title2">商品名称：</span>
                  <span class="content2">{{alldata.name}}</span>
                </div>
                <div class="son2">
                  <span class="title2">商品编号：</span>
                  <span class="content2" style="font-size: 11px">{{alldata.num}}</span>
                </div>
                <div class="son2">
                  <span class="title2">品牌：</span>
                  <span class="content2">{{alldata.goods_brand.brand_name}}</span>
                </div>
              </div>
              <div class="detail1">
                <div class="son2">
                  <span class="title2">上架时间：</span>
                  <span class="content2">{{created_at}}</span>
                </div>
                <div class="son2">
                  <span class="title2">商品毛重：</span>
                  <span class="content2">11克</span>
                </div>
                <div class="son2">
                  <span class="title2">库存：</span>
                  <span class="content2">{{alldata.stock}}件</span>
                </div>
              </div>
            </div>
            <div id="show">
              <div style="height: 50px;line-height: 50px;margin-left: 30px">
                <div style="width: 10px;height: 10px;display: inline-block;border-radius: 50%;background: #000000"></div>
                <b>商品展示</b><br>
                {{alldata.details_page_description}}
              </div>
            </div>
            <div id="QA">
              <div style="margin-top: 20px;margin-left: 14px;margin-bottom: 20px">
                <p style="border-left: 3px solid #41BBEE;padding-left: 6px">常见问题</p>
              </div>
              <div style="margin-left: 40px">
                <div class="w">
                  <img src="../assets/wen.png"><span>下单后可修改订单吗？</span>
                </div>
                <div class="d">
                  <img src="../assets/da.png"><span>由本网站发货的订单，在订单打印之前可以修改，打开"订单详情"页面，点击右下角的"修改订单"即可，若没有修改订单按钮，则表示<br>订单无法修改。</span>
                </div>
                <div class="w">
                  <img src="../assets/wen.png"><span>无货商品几天可以到货？</span>
                </div>
                <div class="d" style="margin-bottom: 40px">
                  <img src="../assets/da.png"><span>您可以通过以下方法获取商品的到货时间：若商品页面中，显示"无货"时：商品具体的到货时间是无法确定的，您可以通过商品页面<br>的"到货通知"功能获得商品到货提醒。</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
</template>

<script>
    export default {
      name: "Commodity_details",
      data() {
        return {
          alldata: null,
          kw: null,
          gg: null,
          color: "",
          count: 1,
          fl: [],
          qq: [],
          addScore: false,
          rank1: false,
          rank2: false,
          rank3: false,
          isnull: null,
          Specifications: null,
          Flavor: null,
          Specificationsselected: null,
          Flavorselected: null,
          Colorselected: null,
          isfollow: false,
          bigkey: 0,
          isactive:true,
          isactive2:false,
          picindex: null,
          arr1: [],
          created_at:'',
          goods_name:'',
          sort:''
        }
      },
      mounted() {
        if (sessionStorage.getItem("token")) {
          this.$root.suibian.nav_isshow = false;
          $('#app').css('backgroundColor', '#f9f9f9');
          // this.$axios.get("http://api.eawsp.com/api/index/getAdverStore?token="+sessionStorage.getItem("token")).then((res) => {
          //   console.log(res);
          //   for (var i = 0; i < res.data.data.length; i ++) {
          //     if (res.data.data[i].floor == "疯狂抢购") {
          //       arr1.push(this.data.data[i])
          //     }
          //   }
          // })
          // if (this.$root.suibian.bool == 1) {
          //   this.addScore = true;
          // }
          // else {
          //   this.addScore = false;
          // }
          // this.addScore = this.$root.suibian.bool;
          if (this.$root.suibian.one == null) {
            this.isnull = false;
            this.$axios.get("http://api.eawsp.com/api/advertising/commodityDetail?id=" + this.$root.suibian.id + "&token=" + sessionStorage.getItem("token")).then((res) => {
              console.log(res);
              this.alldata = res.data.data;
              this.sort = res.data.data.goods_sort.name;
              this.goods_name = res.data.data.name;
              this.created_at = res.data.data.created_at;
              this.color = this.alldata.attribute.goods_color;
              this.color = this.color.split('，');
              this.Specifications = this.alldata.attribute.goods_specifications;
              this.Specifications = this.Specifications.split("，");
              this.Flavor = this.alldata.attribute.goods_taste;
              this.Flavor = this.Flavor.split("，");
              var arr = [];
              for (var i = 0; i < this.alldata.alum.length; i++) {
                this.alldata.alum[i].isselect = false;
              }
              var arr = [];
              for (var i = 0; i < this.color.length; i++) {
                var obj = {}
                for (var j = 0; j < this.color.length; j++) {
                  obj.color = this.color[i];
                  obj.isselect = false
                }
                arr.push(obj);
              }
              this.color = arr;
              var arr = [];
              for (var i = 0; i < this.Specifications.length; i++) {
                var obj = {}
                for (var j = 0; j < this.Specifications.length; j++) {
                  obj.Specifications = this.Specifications[i];
                  obj.isselect = false
                }
                arr.push(obj);
              }
              this.Specifications = arr;
              var arr = [];
              for (var i = 0; i < this.Flavor.length; i++) {
                var obj = {}
                for (var j = 0; j < this.Flavor.length; j++) {
                  obj.Flavor = this.Flavor[i];
                  obj.isselect = false
                }
                arr.push(obj);
              }
              this.Flavor = arr;
              if (this.alldata.store.supplier_ranks.rank_name == "初级店铺") {
                this.rank1 = true
              }
              else if (this.alldata.store.supplier_ranks.rank_name == "中级店铺") {
                this.rank2 = true
              }
              else if (this.alldata.store.supplier_ranks.rank_name == "高级店铺") {
                this.rank3 = true
              }
              this.$axios.get("http://api.eawsp.com/api/advertising/related_type?type_id=" + this.alldata.goods_sort.id).then((res) => {
                this.fl = res.data.data
              });
              this.alldata.alum[0].isselect = true;
              this.$forceUpdate();
            });
          }
          else {
            this.isnull = true
            this.$axios.get("http://api.eawsp.com/api/integralGoods/detail_integral_goods/" + this.$root.suibian.id).then((res) => {
              res.data.data.alum = res.data.data.alums;
              res.data.data.attribute = res.data.data.attr;
              this.alldata = res.data.data;
              this.sort = res.data.data.goods_sort.name;
              this.goods_name = res.data.data.name;
              this.color = this.alldata.attribute.goods_color;
              this.color = this.color.split('，');
              this.Specifications = this.alldata.attribute.goods_specifications;
              this.Specifications = this.Specifications.split("，");
              this.Flavor = this.alldata.attribute.goods_taste;
              this.Flavor = this.Flavor.split("，");
              var arr = [];
              for (var i = 0; i < this.alldata.alum.length; i++) {
                this.alldata.alum[i].isselect = false;
              }
              var arr = [];
              for (var i = 0; i < this.color.length; i++) {
                var obj = {}
                for (var j = 0; j < this.color.length; j++) {
                  obj.color = this.color[i];
                  obj.isselect = false
                }
                arr.push(obj);
              }
              this.color = arr;
              var arr = [];
              for (var i = 0; i < this.Specifications.length; i++) {
                var obj = {}
                for (var j = 0; j < this.Specifications.length; j++) {
                  obj.Specifications = this.Specifications[i];
                  obj.isselect = false
                }
                arr.push(obj);
              }
              this.Specifications = arr;
              var arr = [];
              for (var i = 0; i < this.Flavor.length; i++) {
                var obj = {}
                for (var j = 0; j < this.Flavor.length; j++) {
                  obj.Flavor = this.Flavor[i];
                  obj.isselect = false
                }
                arr.push(obj);
              }
              this.Flavor = arr;
              // if (this.alldata.store.supplier_ranks.rank_name == "初级店铺") {
              //   this.rank1 = true
              // }
              // else if (this.alldata.store.supplier_ranks.rank_name == "中级店铺") {
              //   this.rank2 = true
              // }
              // else if (this.alldata.store.supplier_ranks.rank_name == "高级店铺") {
              //   this.rank3 = true
              // }
              this.$axios.get("http://api.eawsp.com/api/advertising/related_type?type_id=" + this.alldata.goods_sort.id).then((res) => {
                this.fl = res.data.data
              });
              this.alldata.alum[0].isselect = true;
              this.$forceUpdate();
            })
          }
        }
        else {
          this.$router.push("/login");
        }
      },
      methods: {
        JumpTosj(key){
          this.$store.commit("setdata",this.qq[key].name.name);
          this.$router.push({name:"search_jump",params:{'searchValue':this.qq[key].name.name}});
        },
        JumpTosj1(key){
          this.$store.commit("setdata",this.qq[key].name1.name);
          this.$router.push({name:"search_jump",params:{'searchValue':this.qq[key].name1.name}});
        },
        f15(){
          for (var i = 0; i < this.alldata.alum.length; i ++) {
            if (this.alldata.alum[i].isselect == true) {
              if (i > 0) {
                this.alldata.alum[i].isselect = false;
                this.alldata.alum[i - 1].isselect = true;
                this.bigkey = i - 1;
                this.$forceUpdate();
              }
            }
          }
        },
        f16(){
          for (var i = this.alldata.alum.length - 1; i >= 0 ; i --) {
            if (i < this.alldata.alum.length - 1) {
            if (this.alldata.alum[i].isselect == true) {
              this.alldata.alum[i].isselect = false;
              this.alldata.alum[i + 1].isselect = true;
              this.bigkey = i + 1;
              this.$forceUpdate();
            }
            }
          }
        },
        f14(){
          this.$alert('商品收藏成功', '提示', {
            confirmButtonText: '确定',
          });
          var id = sessionStorage.getItem("user_id");
          this.$axios.post("http://api.eawsp.com/api/user/addCollection?token="+sessionStorage.getItem("token"),{commodity_id: this.alldata.id,user_id: id}).then((res) => {
          })
        },
        f12(){
          this.isactive = true;
          this.isactive2 = false;
        },
        f13(){
          this.isactive2 = true;
          this.isactive = false
        },
        f11(){
          this.$alert('您的积分不足', '提示', {
            confirmButtonText: '确定',
          });
        },
        f10(key){
          for (var i = 0; i < this.alldata.alum.length; i ++) {
            this.alldata.alum[i].isselect = false;
          }
          this.alldata.alum[key].isselect = true;
          this.bigkey = key;
          this.$forceUpdate();
        },
        buy(){
          if (sessionStorage.getItem("token") == null) {
            this.$router.push("/login");
          }
          else {
            if (this.color[0].color == '') {
              if (this.Specificationsselected == null || this.Flavorselected == null) {
                this.$alert('请选择规格或口味', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                console.log(this.Colorselected);
                this.$axios.post("http://api.eawsp.com/api/store/buyNow?token=" + sessionStorage.getItem("token"), {
                  id: this.$root.suibian.id,
                  number: this.count,
                  colour: this.Colorselected,
                  size: this.Specificationsselected
                }).then((res) => {
                  this.$root.submitdata = res;
                  this.$router.push("/submit");
                })
              }
            }
            else if (this.Specifications[0].Specifications == '') {
              if (this.Colorselected == null || this.Flavorselected == null) {
                this.$alert('请选择颜色或口味', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/store/buyNow?token=" + sessionStorage.getItem("token"), {
                  id: this.$root.suibian.id,
                  number: this.count,
                  colour: this.Colorselected,
                  size: this.Specificationsselected
                }).then((res) => {
                  this.$root.submitdata = res;
                  this.$router.push("/submit");
                })
              }
            }
            else if (this.Flavor[0].Flavor == '') {
              if (this.Specificationsselected == null || this.Colorselected == null) {
                this.$alert('请选择颜色或规格', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/store/buyNow?token=" + sessionStorage.getItem("token"), {
                  id: this.$root.suibian.id,
                  number: this.count,
                  colour: this.Colorselected,
                  size: this.Specificationsselected
                }).then((res) => {
                  this.$root.submitdata = res;
                  this.$router.push("/submit");
                })
              }
            }
            else {
              if (this.Specificationsselected == null || this.Colorselected == null || this.Flavorselected == null) {
                this.$alert('请选择颜色或规格或口味', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/store/buyNow?token=" + sessionStorage.getItem("token"), {
                  id: this.$root.suibian.id,
                  number: this.count,
                  colour: this.Colorselected,
                  size: this.Specificationsselected
                }).then((res) => {
                  this.$root.submitdata = res;
                  this.$router.push("/submit");
                })
              }
            }
          }
        },
        addCart(){
          if (sessionStorage.getItem("token") == null) {
            this.$router.push("/login");
          }
          else {
            if (this.color[0].color == '') {
              if (this.Specificationsselected == null || this.Flavorselected == null) {
                this.$alert('请选择规格或口味', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token=" + sessionStorage.getItem("token"), {
                  commodity_id: this.$root.suibian.id,
                  shop_number: this.count
                }).then((res) => {
                  this.$alert('已成功添加到购物车', '提示', {
                    confirmButtonText: '确定',
                  });
                })
              }
            }
            else if (this.Specifications[0].Specifications == '') {
              if (this.Colorselected == null || this.Flavorselected == null) {
                this.$alert('请选择颜色或口味', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token=" + sessionStorage.getItem("token"), {
                  commodity_id: this.$root.suibian.id,
                  shop_number: this.count
                }).then((res) => {
                  this.$alert('已成功添加到购物车', '提示', {
                    confirmButtonText: '确定',
                  });
                })
              }
            }
            else if (this.Flavor[0].Flavor == '') {
              if (this.Specificationsselected == null || this.Colorselected == null) {
                this.$alert('请选择颜色或规格', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token=" + sessionStorage.getItem("token"), {
                  commodity_id: this.$root.suibian.id,
                  shop_number: this.count
                }).then((res) => {
                  this.$alert('已成功添加到购物车', '提示', {
                    confirmButtonText: '确定',
                  });
                })
              }
            }
            else {
              if (this.Specificationsselected == null || this.Colorselected == null || this.Flavorselected == null) {
                this.$alert('请选择颜色或规格或口味', '提示', {
                  confirmButtonText: '确定',
                });
              }
              else {
                this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token=" + sessionStorage.getItem("token"), {
                  commodity_id: this.$root.suibian.id,
                  shop_number: this.count
                }).then((res) => {
                  this.$alert('已成功添加到购物车', '提示', {
                    confirmButtonText: '确定',
                  });
                })
              }
            }
          }
        },
        follow(){
          console.log(this.alldata.store.id);
          this.$axios.post("http://api.eawsp.com/api/user/followStore?token="+sessionStorage.getItem("token"),{
            store_id: this.alldata.store.id
          }).then((res) => {
             console.log(res);
             // if(res.data.code==0){
             //   if(this.alldata.is_collection = 0){
             //     this.$alert('您已收藏店铺', '优智优品网', {
             //       confirmButtonText: '确定',
             //     });
             //   }else if(this.alldata.is_collection = 1){
             //     this.$alert('您已经取消收藏', '优智优品网', {
             //       confirmButtonText: '确定',
             //     });
             //   }
             //
             // }
            if (res.data.code == 0) {

              if (this.alldata.is_collection == 1) {
                this.alldata.is_collection = 0;
              }
              else {
                this.alldata.is_collection = 1;
              }
            }
            else {
              this.$alert('操作失败', '优智优品网', {
                      confirmButtonText: '确定',
                    });
            }
          })
        },
        jumpToStore(){
          this.$root.suibian.id = this.alldata.store.id;
          this.$router.push("/shop_index");
        },
        f1(){
          if (this.count > 1) {
            this.count --
          }
        },
        f2() {
          this.count ++
        },
        handleclick(key) {
          for (var i = 0; i < this.color.length; i ++) {
            this.color[i].isselect = false;
          }
          this.color[key].isselect = true;
          this.Colorselected = this.color[key].color;
          this.$forceUpdate();
        },
        handleclick1(key) {
          for (var i = 0; i < this.Specifications.length; i ++) {
            this.Specifications[i].isselect = false;
          }
          this.Specifications[key].isselect = true;
          this.Specificationsselected = this.Specifications[key].Specifications;
          this.$forceUpdate();
        },
        handleclick2(key) {
          for (var i = 0; i < this.Flavor.length; i ++) {
            this.Flavor[i].isselect = false;
          }
          this.Flavorselected = this.Flavor[key].Flavor;
          this.Flavor[key].isselect = true;
          this.$forceUpdate();
        },
        f5(){

          document.body.scrollTop = document.documentElement.scrollTop = 940;
        }
      },
      watch: {
        fl: function () {
          var arr2 = [];
          if (this.fl.length == 2) {
            var obj = {};
            obj.name = this.fl[0];
            obj.name1 = this.fl[1];
            this.qq.push(obj);
          }
          if (this.fl.length % 2 == 0) {
            for (var i = 0; i < this.fl.length; i ++) {
              var obj = {};
              for (var j = 0; j < i + 2; j += 2) {
                obj.name = this.fl[j - 1];
                obj.name1 = this.fl[j - 2];
              }
              arr2.push(obj);
            }
            for (var i = 0; i < arr2.length; i += 2) {
              arr2.splice(i,1);
            }
            arr2.splice(0,1);
            this.qq = arr2;
          }
          else {
            for (var i = 0; i < this.fl.length; i ++) {
              var obj = {};
              for (var j = 0; j < i + 2; j += 2) {
                obj.name = this.fl[j - 1];
                obj.name1 = this.fl[j - 2];
              }
              arr2.push(obj);
            }
            for (var i = 0; i < arr2.length; i += 2) {
              arr2.splice(i,1);
            }
            arr2.splice(0,1);
            this.qq = arr2;
            this.qq.push({name:this.fl[this.fl.length - 1]});
          }
          this.qq[0] = obj;
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #main{
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #DDDDDD;
  }
  .header{
    font-family: "Microsoft YaHei";
    font-size: 12px;
    color: #666666;
  }
  #float{
    margin-top: 20px;
  }
  .left_imgBox{
    overflow: hidden;
  }
  .img_list{
    width: 60px;
    height: 60px;
    display: block;
    margin-right: 5px;
    float: left;
  }
  .img_list_prev,
  .img_list_next{
    float: left!important;
    width: 30px;
    height: 60px;
  }
  .img_list_prev{
    margin-right: 5px;
  }
  .img_list_active{
    border: 3px solid #41BBEE;
  }
  .left{
    float: left;
    width: 430px;
  }
  .right{
    float: right;
    width: 200px;
  }
  .clear{
    clear: both;
  }
  .title{
    font-family: "Microsoft YaHei";
    font-size: 16px;
    color: #333333;
    margin-bottom: 12px;
  }
  .subtitle{
    font-family: "Microsoft YaHei";
    font-size: 12px;
    color: #999999;
    margin-bottom: 30px;
  }
  .center{
    margin-top: 5px;
    margin-left: 20px;
    width: 530px;
  }
  .price{
    background: rgb(229,229,229);
    border-top: 1px solid rgb(229,229,229);
    border-bottom: 1px solid rgb(229,229,229);
    width: 530px;
    height: 110px;
  }
  .sublist{
    display: inline-block;
    margin-left: 12px;
    margin-right: 50px;
  }
  .box,.size_box{
    width: 50px;
    height: 50px;
    border: 1px solid #cccccc;
    display: inline-block;
    margin-right: 10px;
  }
  .size_box{
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 15px;
    cursor: default;
  }
  .selecter{
    margin-right: 60px;
  }
  .btn{
    display: inline-block;
    width: 25px;
    height: 25px;
    text-align: center;
    border: 1px solid #cccccc;
    cursor: default;
  }
  .promise{
    display: inline-block;
    margin-right: 16px;
  }
  .btn1{
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 1px solid #CCCCCC;
    font-size: 13px;
    color: #999999;
    margin-right: 10px;
    text-align: center;
    float: left;
    margin-top: 25px;
  }
  .btn2{
    width: 170px;
    height: 50px;
    border: 1px solid #41BBEE;
    border-radius: 2px;
    outline: none;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    float: left;
    margin-top: 25px;
    margin-right: 10px;
  }
  .buy{
    background: #ddf5ff;
    color: #41BBEE;
  }
  .addCart{
    color: #ffffff;
    background: #41BBEE;
  }
  .son{
    display: inline-block;
    margin-top: 4px;
  }
  #pay span{
    color: #999999;
    font-size: 15px;
  }
  #pay div{
    display: inline-block;
    margin-right: 5px;
  }
  .cj{
    width: 200px;
    height: 480px;
    background: url("../assets/chuji.png") no-repeat;
    background-size: 200px 480px;
    background-position: 0px -10px;
  }
  .zj{
    width: 200px;
    height: 480px;
    background: url("../assets/zhongji.png") no-repeat;
    background-size: 200px 480px;
    background-position: 0px -10px;
  }
  .gj{
    width: 200px;
    height: 480px;
    background: url("../assets/gaoji.png") no-repeat;
    background-size: 200px 480px;
    background-position: 0px -10px;
  }
  #rightcontent{
    margin-left: 10px;
    margin-top: 10px;
  }
  #rightcontent div{
    margin-bottom: 15px;
    cursor: default;
  }
  #rightcontent span{
    color: #999999;
  }
  .size_boxactive{
    border: 3px solid #41BBEE;
    background: url("../assets/xuanzhong.png") no-repeat;
    background-position: 38px 17px;
  }
  .btn3{
    display: inline-block;
    border: 2px solid #41BBEE;
    height: 30px;
    font-size: 14px;
    margin-right: 16px;
  }
  .leftjt{
    /*margin-top: 136px;*/
    /*margin-left: 30px;*/
    position: absolute;
    top: 136px;
    left: 30px;
  }
  .item{
    display: inline-block;
    margin-bottom: 50px;
    margin-left: 80px;
    margin-top: 52px;
    text-align: center;
    margin-right: 20px;
  }
  .item1{
    display: inline-block;
    text-align: center;
    margin-right: 20px;
  }
  .rightjt{
    position: absolute;
    right: 30px;
    top: 136px;
  }
  #float1{
    overflow: hidden;
    margin-top: 20px;
  }
  .classification{
    margin-left: 14px;
  }
  .item2, .item3{
    display: inline-block;
    width: 47%;
    cursor: pointer;
    margin-right: 3px;
    margin-bottom: 12px;
  }

  .float2_left{
    float: left;
    border: 1px solid #cccccc;
    width: 203px;
    height: 225px;
    padding:10px 0px 0px 5px;
  }
  .float2_right{
    width: 980px;
    margin-left: 10px;
    float: left;
  }
  #nav{
    border: 1px solid #999999;
    width: 995px;
    height: 50px;
    line-height: 50px;
  }
  #nav div{
    display: inline-block;
    text-align: center;
    cursor: default;
  }
  .nav_active{
    border-left: 1px solid #999999;
    border-top: 2px solid #41BBEE;
    border-right: 1px solid #999999;
  }
  .nav1{
    border-right: 1px solid #999999;
    padding-right: 20px;
    padding-left: 20px;
  }
  .span_active{
    border: 0;
  }
  .title2{
    display: inline-block;
    margin-right: 10px;
    color: #999999;
  }
  .title2:nth-child(1){
    margin-left: 22px;
  }
  .detail1{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dotted #999999;
  }
  .son2{
    display: inline-block;
    width: 33%;
  }
  .content2{
    color: #CCCCCC;
  }
  #show{
    margin-left: 20px;
    margin-top: 20px;
    border: 1px solid #999999;
    height: 407px;
  }
  #QA{
    border: 1px solid #999999;
    margin-left: 20px;
    margin-top: 38px;
    margin-bottom: 58px;
  }
  .w{
    margin-bottom: 10px;
  }
  .d{
    margin-bottom: 20px;
  }
</style>

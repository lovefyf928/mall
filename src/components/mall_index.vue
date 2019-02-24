<template>
  <div>

    <div class="carousel" id="carousel">
      <el-carousel height="440px" :interval="3000" >
        <el-carousel-item v-for="(item,index) in banner" :key="index">
          <el-row>
            <el-col :span="24"><img :src="'http://api.eawsp.com/'+item.image" alt=""></el-col>
          </el-row>

        </el-carousel-item>
      </el-carousel>
      <!--<ul class="unit" id="unit">-->
        <!--<li v-for="tmp in banner">-->
          <!--<a href=""><img :src="'http://api.eawsp.com'+tmp.image" alt=""></a>-->
        <!--</li>-->
      <!--</ul>-->
      <!--<div class="circles" id="circles" style="width: 140px">-->
        <!--<ol>-->
        <!--<li class="cur"></li>-->
        <!--<li></li>-->
        <!--<li></li>-->
        <!--<li></li>-->
        <!--<li></li>-->
        <!--<li></li>-->
        <!--</ol>-->
        <!--<ol>-->
          <!--<li v-for="tmp in banner" v-if="banner"></li>-->
        <!--</ol>-->
      <!--</div>-->
      <div class="banxin">
        <div class="login" v-if="!token">
          <p class="login_text">登录：</p>
          <input type="text" v-model="cardnum" placeholder="卡号"/>
          <input type="password" v-model="pwd" placeholder="密码"/>
          <input type="text" v-model="yzm" placeholder="验证码" class="three"/><img :src="tp" class="yanzhengma" @click="reget"text-overflow/>
          <!--<span style="display: block;padding-right:10px;float: right" class="forgetPass">忘记密码</span>-->
          <button class="loginBtn" @click="login()" style="border: 0;">登录</button>
          <div>
            <div class="article_class">
              <div :class="{ navactive: noticeActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p style="display: inline-block" @mouseover.stop="noticeShow"  @click.stop="goToNewsPageNotice"><a href="#">公告</a></p>
              </div>
              <div :class="{ navactive: soliyActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p @mouseover.stop="soliyShow" @click.stop="goToNewsPageSoliy()"><a href="#">政策</a></p>
              </div>
              <div :class="{ navactive: ruleActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p @mouseover.stop="ruleShow"  @click.stop="goToNewsPageRule()"><a href="#">规则</a></p>
              </div>
              <div :class="{ navactive: communityActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p @mouseover.stop="communityShow"  @click.stop="goToNewsPageCom()"><a href="#">社区</a></p>
              </div>

              <div v-show="notice" class="text_block">
                <div class="article" v-for="item in items[1]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px"  @click="goToNewsPage(item.id)">{{item.title}}</span>
                </div>
                <!--<div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE"></div>-->
                <!--<span style="font-size: 14px">关于优智优品商城上线公告....</span><br>-->
                <!--<div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE"></div>-->
                <!--<span style="font-size: 14px">关于优智优品商城上线公告....</span><br>-->
                <!--<div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE"></div>-->
                <!--<span style="font-size: 14px">关于优智优品商城上线公告....</span><br>-->
                <!--<div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE"></div>-->
                <!--<span style="font-size: 14px">关于优智优品商城上线公告....</span><br>-->
              </div>

              <div style="margin-top: 10px" v-show="soliy" class="text_block">
                <div class="article"  v-for="item in items[2]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px"  @click="goToNewsPage(item.id)">{{item.title}}</span>
                </div>
              </div>

              <div style="margin-top: 10px" v-show="rule" class="text_block">
                <div class="article" v-for="item in items[3]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px"  @click="goToNewsPage(item.id)">{{item.title}}</span>
                </div>
              </div>

              <div style="margin-top: 10px" v-show="community" class="text_block">
                <div class="article"  v-for="item in items[4]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px"  @click="goToNewsPage(item.id)">{{item.title}}</span><br>
                </div>
              </div>

            </div>
          </div>

          <ul class="imgBox">
            <li class="imgBoxLi"><a href="#"><img src="../assets/huafei.png" alt=""><span class="text">话费</span></a>
            </li>
            <li class="imgBoxLi"><a href="#"><img src="../assets/liuliang.png" alt=""><span class="text">流量</span></a>
            </li>
            <li class="imgBoxLi"><a href="#"><img src="../assets/caipiao.png" alt=""><span class="text">彩票</span></a>
            </li>
            <li class="imgBoxLi" style="margin-right: 0px"><a href="#"><img src="../assets/youxi.png" alt=""><span
              class="text">游戏</span></a></li>
            <li class="imgBoxLi" style="margin-top: 10px"><a href="#"><img src="../assets/feiji.png" alt=""><span
              class="text">飞机</span></a></li>
            <li class="imgBoxLi" style="margin-top: 10px"><a href="#"><img src="../assets/huoche.png" alt=""><span
              class="text">火车</span></a></li>
            <li class="imgBoxLi" style="margin-top: 10px"><a href="#"><img src="../assets/jiudian.png" alt=""><span
              class="text">酒店</span></a></li>
            <li class="imgBoxLi" style="margin: 10px 0px 0px"><a href="#"><img src="../assets/dianying.png" alt=""><span
              class="text">电影</span></a></li>
          </ul>
        </div>

        <div class="login1" v-if="token">
          <div style="margin-left: 60px">
            <img src="../assets/touxiang.png" width="65">
          </div>
          <div style="margin-top: 10px">
            <p style="font-size: 14px">{{cardnum}},你好！</p>
          </div>
          <div>
            <div style="margin: 10px 0px" class="article_class">
              <div :class="{ navactive: noticeActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p style="display: inline-block" @mouseover.stop="noticeShow" @click.stop="goToNewsPageNotice"><a href="#">公告</a></p>
              </div>
              <div :class="{ navactive: soliyActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p @mouseover.stop="soliyShow" @click.stop="goToNewsPageSoliy()"><a href="#">政策</a></p>
              </div>
              <div :class="{ navactive: ruleActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p @mouseover.stop="ruleShow" @click.stop="goToNewsPageRule()"><a href="#">规则</a></p>
              </div>
              <div :class="{ navactive: communityActive }"
                   style="display: inline-block;width: 44px;height: 25px;line-height: 25px;text-align: center">
                <p @mouseover.stop="communityShow" @click.stop="goToNewsPageCom()"><a href="#">社区</a></p>
              </div>
              <div style="margin: 10px 0px 20px 0px" v-show="notice" class="text_block">
                <div class="article" v-for="item in items[1]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px"  @click="goToNewsPage(item.id)">{{item.title}}</span><br>
                </div>
              </div>

              <div style="margin-top: 10px" v-show="soliy" class="text_block">
                <div class="article"  v-for="item in items[2]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px" @click="goToNewsPage(item.id)">{{item.title}}</span><br>
                </div>
              </div>

              <div style="margin-top: 10px" v-show="rule" class="text_block">
                <div class="article" v-for="item in items[3]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px" @click="goToNewsPage(item.id)">{{item.title}}</span>
                </div>
              </div>

              <div style="margin-top: 10px" v-show="community" class="text_block">
                <div class="article" v-for="item in items[4]">
                  <div style="display: inline-block;width: 7px;height: 7px;border-radius: 50%;background: #41BBEE;"></div>
                  <span style="font-size: 14px" @click="goToNewsPage(item.id)">{{item.title}}</span>
                </div>
              </div>
            </div>
          </div>

          <ul class="imgBox">
            <li><a href="#"><img src="../assets/huafei.png" alt=""><span class="text">话费</span></a></li>
            <li><a href="#"><img src="../assets/liuliang.png" alt=""><span class="text">流量</span></a></li>
            <li><a href="#"><img src="../assets/caipiao.png" alt=""><span class="text">彩票</span></a></li>
            <li style="margin-right: 0px"><a href="#"><img src="../assets/youxi.png" alt=""><span class="text">游戏</span></a>
            </li>
            <li style="margin-top: 10px"><a href="#"><img src="../assets/feiji.png" alt=""><span class="text">飞机</span></a>
            </li>
            <li style="margin-top: 10px"><a href="#"><img src="../assets/huoche.png" alt=""><span class="text">火车</span></a>
            </li>
            <li style="margin-top: 10px"><a href="#"><img src="../assets/jiudian.png" alt=""><span
              class="text">酒店</span></a></li>
            <li style="margin: 10px 0px 0px"><a href="#"><img src="../assets/dianying.png" alt=""><span
              class="text">电影</span></a></li>
          </ul>

        </div>

      </div>
    </div>


    <div class="hot_article">
      <div class="activities">
        <h4>精选活动&nbsp;&nbsp;<span style="font-size: 18px;color: #666666">ACTIVITIES</span></h4>
      </div>
      <div v-for="tmp in selectAD" class="content1">
        <div class="selected1">
          <a :href="'http://'+tmp.url" target="_blank"><img :src="'http://api.eawsp.com'+tmp.image"></a>
        </div>

      </div>


      <div style="float: left;" class="activities">
        <h4>热门店铺&nbsp;&nbsp;<span style="font-size: 18px;color: #666666">HOT&nbsp;STORE</span></h4>
        <p @click="dianpujie"><a href="#">店铺街&nbsp;&nbsp;>></a></p>
      </div>
      <div class="content2" style="font-size: 0；overflow:hidden;">
        <a :href="'http://'+fixed[3].url" target="_blank"><img :src="'http://api.eawsp.com'+fixed[3].image"
                                                               width="210px" height="360px"></a>
        <div class="middle">
          <img src="../assets/zuanshi.png" @click="sp(id1)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id2)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id3)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id4)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id5)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id6)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id7)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id8)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id9)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id10)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id11)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id12)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id13)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id14)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id15)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id16)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id17)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id18)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id19)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id20)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id21)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id22)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id23)" width="120" height="80">
          <img src="../assets/zuanshi.png" @click="sp(id24)" width="120" height="80">
        </div>

        <a :href="'http://'+fixed[4].url" target="_blank"><img :src="'http://api.eawsp.com'+fixed[4].image" alt=""
                                                               width="210px" height="360px"></a>
      </div>

      <div style="float: left" class="daohang">
        <ul>
          <li @click="dianji(1,$event)" style="color: #41bbee;">疯狂抢购</li>
          <li @click="dianji(2,$event)">热销排行</li>
          <li @click="dianji(3,$event)">商城热卖</li>
          <li @click="dianji(4,$event)">商城推荐</li>
          <li @click="dianji(5,$event)">新品上市</li>
        </ul>
        <div class="neirong" :style="{'background-image':'url('+this.nei+')'}">
          <div @click="shangpin(time)" v-for="time in HOT" class="neirong_box"><img
            :src="'http://api.eawsp.com'+time.image_thumbnail" width="160px" height="160px">
            <p>{{time.name}}</p>
            <span>￥{{time.shop_price}}</span>
          </div>
        </div>
      </div>

      <div class="le1">
        <!--<a :href="'http://'+fixed[2].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px" src="../assets/banner.jpg" alt=""></a>-->
        <a :href="'http://'+fixed[0].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px"
                                                               :src="'http://api.eawsp.com'+fixed[0].image" alt=""></a>
      </div>

      <div class="level_1">
        <div class="title">
          <h3>1F&nbsp;食品生鲜</h3>
          <ul>
            <li @click="huan(1,Y1,$event)">精品挑选</li>
            <li @click="huan(1,Y2,$event)">进口水果</li>
            <li @click="huan(1,Y3,$event)">糖果巧克力</li>
            <li @click="huan(1,Y4,$event)">牛奶乳品</li>
          </ul>
        </div>
        <div class="shengxian">
          <a :href="'http://'+food[0].url" target="_blank">
            <div class="left1" :style="{'background':'url(http://api.eawsp.com/'+this.food[0].image+ ') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F1a" @click.prevent="Jump1(index)" v-for="(tmp,index) in F1"><a href="">{{tmp}}</a></li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in Y"
                 style="float: left;border: 1px solid #999999;width: 188px;height: 220px;text-align: center;">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100"><br>
              <a style="display: inline-block;margin-bottom: 20px" href="#">{{time.name}}</a><br>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">￥{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>
          <a :href="'http://'+food[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.food[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D1" class="mengniu">
          <img width="120" height="50" :src="'http://api.eawsp.com'+time.store_url" alt=""></div>
      </div>
    </div>
    <div class="hot_article">
      <div class="level_1">
        <div class="title">
          <h3>2F&nbsp;服装服饰</h3>
          <ul>
            <li @click="huan(2,E1,$event)">精品挑选</li>
            <li @click="huan(2,E2,$event)">女装馆</li>
            <li @click="huan(2,E3,$event)">内衣馆</li>
            <li @click="huan(2,E4,$event)">男装馆</li>
          </ul>
        </div>
        <div class="shengxian">
          <a :href="'http://'+clothing[0].url" target="_blank">
            <div class="left1" :style="{'background':'url('+'http://api.eawsp.com'+this.clothing[0].image+') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F2a" @click.prevent="Jump2(index)" v-for="(tmp,index) in F2"><a class="F2a" href="#">{{tmp}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in E">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100">
              <a href="#">{{time.name}}</a>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">&yen;{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>
          <a :href="'http://'+clothing[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.clothing[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D2" class="mengniu"><img width="120" height="50"
                                                                       :src="'http://api.eawsp.com'+time.store_url"
                                                                       alt=""></div>
      </div>
    </div>
    <div class="le1">
      <!--<a :href="'http://'+fixed[2].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px" src="../assets/banner.jpg" alt=""></a>-->
      <a :href="'http://'+fixed[1].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px"
                                                             :src="'http://api.eawsp.com'+fixed[1].image" alt=""></a>
    </div>
    <div class="hot_article">
      <div class="level_1">
        <div class="title">
          <h3>3F&nbsp;个护化妆</h3>
          <ul>
            <li @click="huan(3,SAN1,$event)">精品挑选</li>
            <li @click="huan(3,SAN2,$event)">香水彩妆</li>
            <li @click="huan(3,SAN3,$event)">面部护肤</li>
            <li @click="huan(3,SAN4,$event)">洗发护发</li>
          </ul>
        </div>
        <div class="shengxian">
          <a :href="'http://'+protect[0].url" target="_blank">
            <div class="left1" :style="{'background':'url('+'http://api.eawsp.com'+this.protect[0].image+') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F3a" @click.prevent="Jump3(index)" v-for="(tmp,index) in F3"><a href="#">{{tmp}}</a></li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in SAN">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100">
              <a href="#">{{time.name}}</a>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">￥{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>
          <a :href="'http://'+protect[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.protect[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D3" class="mengniu"><img width="120" height="50"
                                                                       :src="'http://api.eawsp.com'+time.store_url"
                                                                       alt=""></div>
      </div>
    </div>

    <div class="hot_article">
      <div class="level_1">
        <div class="title">
          <h3>4F&nbsp;手机数码</h3>
          <ul>
            <li @click="huan(4,SI1,$event)">精品挑选</li>
            <li @click="huan(4,SI2,$event)">热卖手机</li>
            <li @click="huan(4,SI3,$event)">手机配件</li>
            <li @click="huan(4,SI4,$event)">数码影音</li>
          </ul>
        </div>
        <div class="shengxian">
          <a :href="'http://'+phone[0].url" target="_blank">
            <div class="left1" :style="{'background':'url('+'http://api.eawsp.com'+this.phone[0].image+') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F4a" @click.prevent="Jump4(index)" v-for="(tmp,index) in F4"><a href="#">{{tmp}}</a></li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in SI">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100">
              <a href="#">{{time.name}}</a>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">￥{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>
          <a :href="'http://'+phone[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.phone[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D4" class="mengniu"><img width="120" height="50"
                                                                       :src="'http://api.eawsp.com'+time.store_url"
                                                                       alt=""></div>
      </div>
    </div>
    <div class="le1">
      <!--<a :href="'http://'+fixed[2].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px" src="../assets/banner.jpg" alt=""></a>-->
      <a :href="'http://'+fixed[2].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px"
                                                             :src="'http://api.eawsp.com'+fixed[2].image" alt=""></a>
    </div>
    <div class="hot_article">


      <div class="level_1">
        <div class="title">
          <h3>5F&nbsp;家用电器</h3>
          <ul>
            <li @click="huan(5,W1,$event)">精品挑选</li>
            <li @click="huan(5,W2,$event)">大家电</li>
            <li @click="huan(5,W3,$event)">生活电器</li>
            <li @click="huan(5,W4,$event)">厨房电器</li>
          </ul>
        </div>
        <div class="shengxian">

          <a :href="'http://'+home[0].url" target="_blank">
            <div class="left1" :style="{'background':'url('+'http://api.eawsp.com'+this.home[0].image+') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F5a" @click.prevent="Jump5(index)" v-for="(tmp,index) in F5"><a href="#">{{tmp}}</a></li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in W">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100">
              <a href="#">{{time.name}}</a>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">￥{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>

          <a :href="'http://'+home[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.home[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D5" class="mengniu"><img width="120" height="50"
                                                                       :src="'http://api.eawsp.com'+time.store_url"
                                                                       alt=""></div>
      </div>
    </div>
    <div class="hot_article">


      <div class="level_1">
        <div class="title">
          <h3>6F&nbsp;家纺家居</h3>
          <ul>
            <li @click="huan(6,L1,$event)">精品挑选</li>
            <li @click="huan(6,L2,$event)">家纺</li>
            <li @click="huan(6,L3,$event)">家居</li>
            <li @click="huan(6,L4,$event)">厨具</li>
          </ul>
        </div>
        <div class="shengxian">
          <a :href="'http://'+hometextiles[0].url" target="_blank">
            <div class="left1"
                 :style="{'background':'url('+'http://api.eawsp.com'+this.hometextiles[0].image+') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F6a" @click.prevent="Jump6(index)" v-for="(tmp,index) in F6"><a href="#">{{tmp}}</a></li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in L">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100">
              <a href="#">{{time.name}}</a>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">￥{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>
          <a :href="'http://'+hometextiles[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.hometextiles[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D6" class="mengniu"><img width="120" height="50"
                                                                       :src="'http://api.eawsp.com'+time.store_url"
                                                                       alt=""></div>
      </div>
    </div>

    <div class="le1">
      <!--<a :href="'http://'+fixed[6].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px"-->
                                                             <!--src="../assets/banner.jpg" alt=""></a>-->
      <a :href="'http://'+fixed[5].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px" :src="'http://api.eawsp.com'+fixed[5].image" alt=""></a>
    </div>

    <div class="hot_article">
      <div class="level_1">
        <div class="title">
          <h3>7F&nbsp;酒类饮料</h3>
          <ul>
            <li @click="huan(7,Q1,$event)">精品挑选</li>
            <li @click="huan(7,Q2,$event)">酒水</li>
            <li @click="huan(7,Q3,$event)">冲调饮品</li>
            <li @click="huan(7,Q4,$event)">饮料饮品</li>
          </ul>
        </div>
        <div class="shengxian">
          <a :href="'http://'+alcohol[0].url" target="_blank">
            <div class="left1" :style="{'background':'url('+'http://api.eawsp.com'+this.alcohol[0].image+') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F7a" @click.prevent="Jump7(index)" v-for="(tmp,index) in F7"><a href="#">{{tmp}}</a></li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in Q">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100">
              <a href="#">{{time.name}}</a>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">￥{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>
          <a :href="'http://'+alcohol[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.alcohol[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D7" class="mengniu"><img width="120" height="50"
                                                                       :src="'http://api.eawsp.com'+time.store_url"
                                                                       alt=""></div>
      </div>
    </div>
    <div class="hot_article">

      <div class="level_1">
        <div class="title">
          <h3>8F&nbsp;母婴用品</h3>
          <ul>
            <li @click="huan(8,B1,$event)">精品挑选</li>
            <li @click="huan(8,B2,$event)">孕婴奶粉</li>
            <li @click="huan(8,B3,$event)">营养/辅食</li>
            <li @click="huan(8,B4,$event)">孕婴洗护</li>
          </ul>
        </div>
        <div class="shengxian">
          <a :href="'http://'+baby[0].url" target="_blank">
            <div class="left1" :style="{'background':'url('+'http://api.eawsp.com'+this.baby[0].image+') no-repeat 100% 100%'}">
              <div class="left1_box">
                <ul>
                  <li class="F8a" @click.prevent="Jump8(index)" v-for="(tmp,index) in F8"><a href="#">{{tmp}}</a></li>
                </ul>
              </div>
            </div>
          </a>
          <div class="center1">
            <div class="goodsitem" @click="shangpin(time)" v-for="time in B">
              <img :src="'http://api.eawsp.com'+time.image_thumbnail" width="120" height="100">
              <a href="#">{{time.name}}</a>
              <div style="position: relative">
                <span style="position: absolute;left: 12px;color: #ff0000">￥{{time.shop_price}}</span>
                <img style="position: absolute;right: 12px" src="../assets/gouwuche.png">
              </div>
            </div>
          </div>
          <a :href="'http://'+baby[1].url" target="_blank">
            <div class="right1">
              <img :src="'http://api.eawsp.com'+this.baby[1].image" alt="" width="200px" height="440px">
            </div>
          </a>
        </div>
      </div>
      <div  class="bottom1">
        <div @click="Sp(time)" v-for="time in D8" class="mengniu"><img width="120" height="50"
                                                                       :src="'http://api.eawsp.com'+time.store_url"
                                                                       alt=""></div>
      </div>
    </div>
    <div class="le1">
      <!--<a :href="'http://'+fixed[6].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px"-->
                                                             <!--src="../assets/banner.jpg" alt=""></a>-->
      <a :href="'http://'+fixed[6].url" target="_blank"><img style="margin-top: 20px" width="1200" height="100px" :src="'http://api.eawsp.com'+fixed[6].image" alt=""></a>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import '../assets/js/jquery-3.3.1.min'

  export default {
    name: "mall_index",
    data() {
      return {
        tp:null,
        notice: true,
        soliy: false,
        rule: false,
        community: false,
        noticeActive: true,
        soliyActive: false,
        ruleActive: false,
        communityActive: false,
        nei: require("../assets/di.png"),
        cardnum: "",
        pwd: "",
        yzm: "",
        baby: [],
        home: [],
        clothing: [],
        phone: [],
        protect: [],
        food: [],
        banner: [],
        alcohol: [],
        header: [],
        selectAD: [],
        hometextiles: [],
        fixed: [],
        type1: [],
        img1: null,
        id1: null,
        img2: null,
        id2: null,
        img3: null,
        id3: null,
        img4: null,
        id4: null,
        img5: null,
        id5: null,
        img6: null,
        id6: null,
        img7: null,
        id7: null,
        img8: null,
        id8: null,
        img9: null,
        id9: null,
        img10: null,
        id10: null,
        img11: null,
        id11: null,
        img12: null,
        id12: null,
        img13: null,
        id13: null,
        img14: null,
        id14: null,
        img15: null,
        id15: null,
        img16: null,
        id16: null,
        img17: null,
        id17: null,
        img18: null,
        id18: null,
        img19: null,
        id19: null,
        img20: null,
        id20: null,
        img21: null,
        id21: null,
        img22: null,
        id22: null,
        img23: null,
        id23: null,
        img24: null,
        id24: null,
        Y: [],
        Y1: [],
        Y2: [],
        Y3: [],
        Y4: [],
        E: [],
        E1: [],
        E2: [],
        E3: [],
        E4: [],
        SAN: [],
        SAN1: [],
        SAN2: [],
        SAN3: [],
        SAN4: [],
        SI: [],
        SI1: [],
        SI2: [],
        SI3: [],
        SI4: [],
        W: [],
        W1: [],
        W2: [],
        W3: [],
        W4: [],
        L: [],
        L1: [],
        L2: [],
        L3: [],
        L4: [],
        Q: [],
        Q1: [],
        Q2: [],
        Q3: [],
        Q4: [],
        B: [],
        B1: [],
        B2: [],
        B3: [],
        B4: [],
        D1: [],
        D2: [],
        D3: [],
        D4: [],
        D5: [],
        D6: [],
        D7: [],
        D8: [],
        panic_buying: [],
        Top_selling: [],
        Hot_sell: [],
        Recommend: [],
        New_arrival: [],
        HOT: [],
        F1: [],
        F2: [],
        F3: [],
        F4: [],
        F5: [],
        F6: [],
        F7: [],
        F8: [],
        token: null,
        width: 0,
        //文章分类数组
        items:[],
      }
    },
    mounted() {

      this.token = sessionStorage.getItem("token");
      this.cardnum = sessionStorage.getItem("num");
      //获取文章接口
      this.$axios.post('http://api.eawsp.com/api/index/news').then((res)=>{
          console.log(res);
          this.items=res.data.data;
          console.log(this.items);
        // for(var i=0;i<data.length;i++){
        //   if(data[i].type==1){
        //     if(this.noticeArr.length<4){
        //      this.noticeArr.push(data[i]);
        //     }
        //   }else if(data[i].type==2){
        //     if(this.soliyArr.length<4){
        //       this.soliyArr.push(data[i]);
        //     }
        //   }else if(data[i].type==3){
        //     if(this.rulesArr.length<4){
        //       this.rulesArr.push(data[i]);
        //     }
        //   }else if(data[i].type==4){
        //     if(this.communityArr.length<4){
        //       this.communityArr.push(data[i]);
        //     }
        //   }
        // }
        // this.items=this.noticeArr;
      })
      this.$axios.get('http://api.eawsp.com/api/index/getBillboards').then((res) => {
        console.log(res);
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].type == "母婴用具") {
            this.baby.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "家用电器") {
            this.home.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "服装服饰") {
            this.clothing.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "手机数码") {
            this.phone.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "个护化妆") {
            this.protect.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "食品生鲜") {
            this.food.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "banner") {
            this.banner.push(res.data.data[i]);

          }
          else if (res.data.data[i].type == "酒类饮料") {
            this.alcohol.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "顶部广告位") {
            this.header.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "精选广告") {
            this.selectAD.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "家纺家居") {
            this.hometextiles.push(res.data.data[i]);
          }
          else if (res.data.data[i].type == "固定广告位") {
            this.fixed.push(res.data.data[i]);
          }
        }
        this.phone = this.arrsort(this.phone, 2);
        this.food = this.arrsort(this.food, 2);
        this.clothing = this.arrsort(this.clothing, 2);
        this.protect = this.arrsort(this.protect, 2);
        this.baby = this.arrsort(this.baby, 2);
        this.home = this.arrsort(this.home, 2);
        this.banner = this.arrsort(this.banner, this.banner.length);
        this.alcohol = this.arrsort(this.alcohol, 2);
        this.header = this.arrsort(this.header, 1);
        this.selectAD = this.arrsort(this.selectAD, 5);
        this.hometextiles = this.arrsort(this.hometextiles, 2);
        this.fixed = this.arrsort(this.fixed, 5);
        console.log(this.food);
        console.log(this.fixed);
      })
      this.$axios.get("http://api.eawsp.com/api/index/getAdverStore?token=" + this.$root.user_token).then((res) => {
        console.log(res);
        for (let i = 0; i < res.data.data.length; i++) {
          if (res.data.data[i].floor == '食品生鲜精品挑选') {
            this.Y1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '食品生鲜进口水果') {
            this.Y2.push(res.data.data[i])
            console.log(2)
          }
          if (res.data.data[i].floor == '食品生鲜糖果巧克力') {
            this.Y3.push(res.data.data[i])
            console.log(3)
          }
          if (res.data.data[i].floor == '食品生鲜牛奶乳品') {
            this.Y4.push(res.data.data[i])
            console.log(4)
          }
          if (res.data.data[i].floor == '服装服饰精品挑选') {
            this.E1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '服装服饰女装馆') {
            this.E2.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '服装服饰内衣馆') {
            this.E3.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '服装服饰男装馆') {
            this.E4.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '个护化妆精品挑选') {
            this.SAN1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '个护化妆香水彩妆') {
            this.SAN2.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '个护化妆面部护肤') {
            this.SAN3.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '个护化妆洗发护发') {
            this.SAN4.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '手机数码精品挑选') {
            this.SI1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '手机数码手机配件') {
            this.SI3.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '手机数码数码影音') {
            this.SI4.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '手机数码热卖手机') {
            this.SI2.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家用电器精品挑选') {
            this.W1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家用电器大家电') {
            this.W2.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家用电器生活电器') {
            this.W3.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家用电器厨房电器') {
            this.W4.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家纺家居精品挑选') {
            this.L1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家纺家居家纺') {
            this.L2.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家纺家居家具') {
            this.L3.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '家纺家居厨具') {
            this.L4.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '酒类饮料精品挑选') {
            this.Q1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '酒类饮料酒水') {
            this.Q2.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '酒类饮料冲调饮品') {
            this.Q3.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '酒类饮料饮料饮品') {
            this.Q4.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '母婴用品精品挑选') {
            this.B1.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '母婴用品孕婴奶粉') {
            this.B2.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '母婴用品营养/辅食') {
            this.B3.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '母婴用品孕婴洗护') {
            this.B4.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '疯狂抢购') {
            this.panic_buying.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '热销排行') {
            this.Top_selling.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '商城热卖') {
            this.Hot_sell.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '商城推荐') {
            this.Recommend.push(res.data.data[i])
          }
          if (res.data.data[i].floor == '新品上市') {
            this.New_arrival.push(res.data.data[i])
          }
        }
        this.Y1 = this.arrsort(this.Y1, 8);
        this.Y2 = this.arrsort(this.Y2, 8);
        this.Y3 = this.arrsort(this.Y3, 8);
        this.Y4 = this.arrsort(this.Y4, 8);
        this.E1 = this.arrsort(this.E1, 8);
        this.E2 = this.arrsort(this.E2, 8);
        this.E3 = this.arrsort(this.E3, 8);
        this.E4 = this.arrsort(this.E4, 8);
        this.SAN1 = this.arrsort(this.SAN1, 8);
        this.SAN2 = this.arrsort(this.SAN2, 8);
        this.SAN3 = this.arrsort(this.SAN3, 8);
        this.SAN4 = this.arrsort(this.SAN4, 8);
        this.SI1 = this.arrsort(this.SI1, 8);
        this.SI2 = this.arrsort(this.SI2, 8);
        this.SI3 = this.arrsort(this.SI3, 8);
        this.SI4 = this.arrsort(this.SI4, 8);
        this.W1 = this.arrsort(this.W1, 8);
        this.W2 = this.arrsort(this.W2, 8);
        this.W3 = this.arrsort(this.W3, 8);
        this.W4 = this.arrsort(this.W4, 8);
        this.L1 = this.arrsort(this.L1, 8);
        this.L2 = this.arrsort(this.L2, 8);
        this.L3 = this.arrsort(this.L3, 8);
        this.L4 = this.arrsort(this.L4, 8);
        this.Q1 = this.arrsort(this.Q1, 8);
        this.Q2 = this.arrsort(this.Q2, 8);
        this.Q3 = this.arrsort(this.Q3, 8);
        this.Q4 = this.arrsort(this.Q4, 8);
        this.B1 = this.arrsort(this.B1, 8);
        this.B2 = this.arrsort(this.B2, 8);
        this.B3 = this.arrsort(this.B3, 8);
        this.B4 = this.arrsort(this.B4, 8);
        this.panic_buying = this.arrsort(this.panic_buying, 6);
        this.Top_selling = this.arrsort(this.Top_selling, 6);
        this.Hot_sell = this.arrsort(this.Hot_sell, 6);
        this.Recommend = this.arrsort(this.Recommend, 6);
        this.New_arrival = this.arrsort(this.New_arrival, 6);
        this.Y = this.Y1
        this.E = this.E1
        this.SAN = this.SAN1
        this.SI = this.SI1
        this.W = this.W1
        this.L = this.L1
        this.Q = this.Q1
        this.B = this.B1
        this.HOT = this.panic_buying
        console.log(this.panic_buying)
        console.log(this.Top_selling)
        console.log(this.Hot_sell)
        console.log(this.Recommend)
        console.log(this.New_arrival)
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=热门店铺").then((res) => {
        console.log(res.data.data.热门店铺);
        for (let i = 0; i < res.data.data.热门店铺.length; i++) {
          if (res.data.data.热门店铺[i].sort == 1) {
            this.img1 = res.data.data.热门店铺[i].store_url
            this.id1 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 2) {
            this.img2 = res.data.data.热门店铺[i].store_url
            this.id2 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 4) {
            this.img4 = res.data.data.热门店铺[i].store_url
            this.id4 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 3) {
            this.img3 = res.data.data.热门店铺[i].store_url
            this.id3 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 5) {
            this.img5 = res.data.data.热门店铺[i].store_url
            this.id5 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 6) {
            this.img6 = res.data.data.热门店铺[i].store_url
            this.id6 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 7) {
            this.img7 = res.data.data.热门店铺[i].store_url
            this.id7 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 8) {
            this.img8 = res.data.data.热门店铺[i].store_url
            this.id8 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 9) {
            this.img9 = res.data.data.热门店铺[i].store_url
            this.id9 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 10) {
            this.img10 = res.data.data.热门店铺[i].store_url
            this.id10 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 11) {
            this.img11 = res.data.data.热门店铺[i].store_url
            this.id11 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 12) {
            this.img12 = res.data.data.热门店铺[i].store_url
            this.id12 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 13) {
            this.img13 = res.data.data.热门店铺[i].store_url
            this.id13 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 14) {
            this.img14 = res.data.data.热门店铺[i].store_url
            this.id14 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 15) {
            this.img15 = res.data.data.热门店铺[i].store_url
            this.id15 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 16) {
            this.img16 = res.data.data.热门店铺[i].store_url
            this.id16 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 17) {
            this.img17 = res.data.data.热门店铺[i].store_url
            this.id17 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 18) {
            this.img18 = res.data.data.热门店铺[i].store_url
            this.id18 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 19) {
            this.img19 = res.data.data.热门店铺[i].store_url
            this.id19 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 20) {
            this.img20 = res.data.data.热门店铺[i].store_url
            this.id20 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 21) {
            this.img21 = res.data.data.热门店铺[i].store_url
            this.id21 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 22) {
            this.img22 = res.data.data.热门店铺[i].store_url
            this.id22 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 23) {
            this.img23 = res.data.data.热门店铺[i].store_url
            this.id23 = res.data.data.热门店铺[i].store_id
          }
          if (res.data.data.热门店铺[i].sort == 24) {
            this.img24 = res.data.data.热门店铺[i].store_url
            this.id24 = res.data.data.热门店铺[i].store_id
          }
        }
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=食品生鲜").then((res) => {
        console.log(res);
        this.D1 = res.data.data.食品生鲜;
        this.D1 = this.arrsort(this.D1, 10);
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=服装服饰").then((res) => {
        console.log(res);
        this.D2 = res.data.data.服装服饰;
        this.D2 = this.arrsort(this.D2, 10);
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=个护化妆").then((res) => {
        console.log(res);
        this.D3 = res.data.data.个护化妆;
        this.D3 = this.arrsort(this.D3, 10);
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=手机数码").then((res) => {
        console.log(res);
        this.D4 = res.data.data.手机数码;
        this.D4 = this.arrsort(this.D4, 10);
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=家用电器").then((res) => {
        console.log(res);
        this.D5 = res.data.data.家用电器;
        this.D5 = this.arrsort(this.D5, 10);
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=家纺家居").then((res) => {
        console.log(res);
        this.D6 = res.data.data.家纺家居;
        this.D6 = this.arrsort(this.D6, 10);
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=酒类饮料").then((res) => {
        console.log(res);
        this.D7 = res.data.data.酒类饮料;
        this.D7 = this.arrsort(this.D7, 10);
      });
      this.$axios.get("http://api.eawsp.com/api/index/getShopProduct?floor=母婴用品").then((res) => {
        console.log(res);
        this.D8 = res.data.data.母婴用品;
        this.D8 = this.arrsort(this.D8, 10);
      });
      console.log(this.$root.user_token);


      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370801").then((res) => {
        this.F1 = res.data.data.left;
      });
      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370802").then((res) => {
        this.F2 = res.data.data.left;
      });
      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370803").then((res) => {
        this.F3 = res.data.data.left;
      });
      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370804").then((res) => {
        this.F4 = res.data.data.left;
      });
      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370805").then((res) => {
        this.F5 = res.data.data.left;
      });
      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370806").then((res) => {
        this.F6 = res.data.data.left;
      });
      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370807").then((res) => {
        this.F7 = res.data.data.left;
      });
      this.$axios.get("http://api.eawsp.com/api/advertising/right1?id=yz65e9da-ff42-4ad4-a7c5-a5b3a2370808").then((res) => {
        this.F8 = res.data.data.left;
      });
    },

    created() {


      this.$root.suibian.nav_isshow = true;
      let _this = this
      let data = new Date()
      console.log(data)
      this.$axios.get("http://api.eawsp.com/api/code/captcha/create/" + data,
      ).then(function (res) {
        // 图片token
        console.log(res.data.data.captcha_token)
        // 图片
        console.log(res.data.data.captcha)
        _this.tp = res.data.data.captcha
      })
    },
    methods: {
      reget(){
        var that=this;
        let data = new Date()
        this.$axios.get("http://api.eawsp.com/api/code/captcha/create/"+ data,
        ).then(function (res) {
          // 图片token
          // 图片
          that.tp = res.data.data.captcha
        })
      },
      goToNewsPage(id){
        this.$router.push({name:'NewsPage',params:{
          'id':id
          }});
      },
      sizeChange() {
        console.log(123);
        console.log($("#unit li a img"));
        $("#unit li").each(function () {
          $(this).css({'width': $(window).width()});
        })
        $("#unit li a img").each(function () {
          $(this).css({'width': $(window).width(), 'height': '440px'});
        })
      },
      noticeShow() {
        this.noticeActive = true;
        this.soliyActive = false;
        this.ruleActive = false;
        this.communityActive = false;
        this.soliy = false;
        this.rule = false;
        this.community = false;
        this.notice = true;
      },
      soliyShow(e) {
        this.noticeActive = false;
        this.soliyActive = true;
        this.ruleActive = false;
        this.communityActive = false;
        this.soliy = true;
        this.rule = false;
        this.community = false;
        this.notice = false;
      },
      ruleShow() {
        this.noticeActive = false;
        this.soliyActive = false;
        this.ruleActive = true;
        this.communityActive = false;
        this.soliy = false;
        this.rule = true;
        this.community = false;
        this.notice = false;
      },
      communityShow() {
        this.noticeActive = false;
        this.soliyActive = false;
        this.ruleActive = false;
        this.communityActive = true;
        this.soliy = false;
        this.rule = false;
        this.community = true;
        this.notice = false;
      },
      goToNewsPageNotice(){
        this.$router.push({name:"NewsDetails",params:{
            type:1
          }})
      },
      goToNewsPageSoliy(){
        this.$router.push({name:"NewsDetails",params:{
            type:2
          }})
      },
      goToNewsPageRule(){
        this.$router.push({name:"NewsDetails",params:{
            type:3
          }})
      },
      goToNewsPageCom(){
        this.$router.push({name:"NewsDetails",params:{
            type:4
          }})
      },
      login() {
        let _this = this
        this.$axios.post("http://api.eawsp.com/api/home_login", {
          name: _this.cardnum,
          password: _this.pwd,
          captcha: _this.yzm
        }).then(function (res) {
          console.log(res)
          if (res.data.code == 0) {
            console.log(res);
            sessionStorage.setItem('user_name',res.data.data.data.name);
            _this.$store.commit("settoken", res.data.data.token);
            sessionStorage.setItem("user_id", res.data.data.data.id);
            sessionStorage.setItem("num", _this.cardnum);
            sessionStorage.setItem('token', res.data.data.token);
            _this.token = sessionStorage.getItem('token')
            _this.$root.user_token = sessionStorage.getItem("token")
            console.log(sessionStorage.getItem("num"));
          }
        })
      },
      Jump1(index) {
        console.log($(".F1a"));
        $(".F1a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F1[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F1[index]}});
      },
      Jump2(index) {
        $(".F2a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F2[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F2[index]}});
      },
      Jump3(index) {
        $(".F3a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F3[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F3[index]}});
      },
      Jump4(index) {
        $(".F4a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F4[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F4[index]}});
      },
      Jump5(index) {
        console.log($(".F5a"));
        $(".F5a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F5[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F5[index]}});
      },
      Jump6(index) {
        $(".F6a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F6[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F6[index]}});
      },
      Jump7(index) {
        $(".F7a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F7[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F7[index]}});
      },
      Jump8(index) {
        $(".F8a").click(function (e) {
          e.stopPropagation();
          e.preventDefault();
        })
        this.$store.commit("setdata", this.F8[index]);
        this.$router.push({name: "search_jump", params: {'searchValue': this.F8[index]}});
      },
      sp(id) {
        console.log(id)
        this.$router.push({
          path: "/shop_index"
        })
        this.$root.suibian.id = id;
      },
      Sp(id) {
        console.log(id)
        this.$router.push({
          path: "/shop_index"
        })
        this.$root.suibian.id = id.store_id;
      },
      arrsort(arr, count) {
        var arr3 = [];
        var obj = {};
        for (let i = 0; i < count; i++) {
          arr3.push(obj);
        }
        for (let i = 0; i < arr.length; i++) {
          arr3[arr[i].sort - 1] = arr[i];
        }
        return arr3;
      },
      huan(id, res,e) {
        var e=window.event||e;
        $(e.target).css('color','#41bbee').siblings().css('color','#333333');
        console.log(res)
        if (id == 1) {
          this.Y = res
        }
        if (id == 2) {
          this.E = res
        }
        if (id == 3) {
          this.SAN = res
        }
        if (id == 4) {
          this.SI = res
        }
        if (id == 5) {
          this.W = res
        }
        if (id == 6) {
          this.L = res
        }
        if (id == 7) {
          this.Q = res
        }
        if (id == 8) {
          this.B = res
        }
      },
      dianji(id,e) {
        var e=window.event||e;
        $(e.target).css('color','#41bbee').siblings().css('color','#333333');
        if (id == 1) {
          this.HOT = this.panic_buying
          this.nei = require("../assets/di.png")
        }
        if (id == 2) {
          this.HOT = this.Top_selling
          this.nei = require("../assets/di2.png")
        }
        if (id == 3) {
          this.HOT = this.Hot_sell
          this.nei = require("../assets/di3.png")
        }
        if (id == 4) {
          this.HOT = this.Recommend
          this.nei = require("../assets/di4.png")
        }
        if (id == 5) {
          this.HOT = this.New_arrival
          this.nei = require("../assets/di5.png")
        }
      },
      shangpin(res) {
        console.log(res)
        this.$root.suibian.id = res.goods_id
        this.$router.push("/mall/details");
      },
      dianpujie() {
        this.$router.push("/mall/street");
      }
    },
    computed: {
      ...mapGetters([
        'gettoken'
      ])
    },
    watch: {

      gettoken: function (val) {
        this.token = val;
      },
      width: function () {
        var that = this;

        $("#unit li").each(function () {
          $(this).css({'width': that.width});
        })

        $("#unit li a img").each(function () {
          $(this).css({'width': that.width, 'height': '440px'});
        })
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333333;
  }

  .navactive {
    border-bottom: 1px solid #41BBEE;
    color: #41BBEE;
  }

  .text_block {
    font-size: 12px;
    color: #333333;
    margin-top: 5px;
  }
  .text_block .article{
    cursor: default;
  }
  .imgBox {
    padding: 0px 10px;
    width: 180px;
    overflow: hidden;
  }

  .imgBox > li {
    width: 30px;
    float: left;
    margin-right: 20px;
  }

  .imgBox > li > a .text {
    font-size: 12px;
    color: #333333;
  }

  .imgBox > li > a img {
    width: 25px;
  }


  .banxin{
     width: 1200px;
    height: 440px;
    margin: 0 auto;
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -600px;

  }
  .login, .login1 {
    width: 194px;
    height: 440px;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 0px 5px 0px 5px;
    background: #fefefe;
    z-index: 999;
  }
  .login1 {
    padding-top: 15px;

  }

  .login .login_text {
    color: #999999;
    text-align: left;
    font-size: 12px;
    margin: 5px 0px;
  }

  .login input {
    float: left;
    width: 190px;
    height: 30px;
    margin-bottom: 10px;
  }

  .item4 {
    position: absolute;
    display: none;
  }

  .login .three {
    width: 110px;

  }

  .login .yanzhengma {
    display: block;
    width: 70px;
    height: 30px;
    margin-left: 120px !important;
  }

  .login .forgetPass {
    display: block;
    text-align: right;
    color: #999999;
    font-size: 12px;
  }

  .login .loginBtn {
    width: 190px;
    height: 30px;
    background-color: #41BBEE;
    text-align: center;
    color: #FFFFFF;
    line-height: 30px;
    border-radius: 5px;
  }

  body {
    font-family: "微软雅黑";
    color: #333333;
    min-width: 1200px;
  }

  .tou {
    width: 100%;
    height: 30px;
    background: rgb(227, 228, 229);
  }

  nav {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .sc {
    width: 20%;
    float: left;
  }

  .sc a {
    font-size: 12px;
    line-height: 30px;
    color: #666666;
    text-decoration: none;
  }

  nav ul {
    width: 65%;
    float: right;
    margin-block-start: 0em;
    margin-block-end: 0em;
    list-style: none;
  }

  nav ul li {
    width: 14%;
    height: 30px;
    float: left;
    cursor: pointer;
    position: relative;
  }

  .li {
    width: 100%;
    height: 16px;
    margin-top: 7px;
    float: left;
    border-left: 1px solid rgb(102, 102, 102);
    font-size: 12px;
    color: #666666;
    text-align: center;
  }

  .yc {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    margin-top: 15px;
    margin-left: -85px;
    width: 170px;
    height: 70px;
    background: white;
    display: none;
    border: 1px solid rgb(227, 228, 229);
    border-top: none;
  }

  nav ul li:hover {
    background: white;
  }

  nav ul li:hover .yc {
    display: block;
  }

  .second_nav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    height: 110px;
    padding-top: 10px;
  }

  .second_nav .container-fluid .search_fenlei {
    margin: 0px;
    overflow: hidden;
    height: 20px;
  }

  .second_nav .container-fluid .search_fenlei span {
    width: 40px;
    height: 20px;
    float: left;
    text-align: center;
  }

  .second_nav .container-fluid .search_fenlei span.goods {
    color: #FFFFFF;
    background-color: #41bbee;
  }

  .second_nav .container-fluid .row input {
    border: 1px solid #41bbee;
    width: 80%;
    height: 30px;

  }

  .second_nav .container-fluid .row .search {
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color: #41BBEE;
    color: #FFFFFF;
    line-height: 30px;
    vertical-align: top;
  }

  .second_nav .container-fluid .row .row_left {
    height: 50px;
    padding-top: 20px;
    text-align: right;
  }

  .second_nav .container-fluid .row .row_left span {
    margin-right: 10px;

  }

  .second_nav .container-fluid .row .row_left span.peisong {
    margin-right: 0px;
  }

  .second_nav .container-fluid .second_row {
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .second_nav .container-fluid .second_row .all_feilei {
    background-color: #41BBEE;
    color: #FFFFFF;
  }


  #nav .category-content {
    position: relative;
    width: 201px;
    float: left;
    z-index: 113;
  }

  /*#nav .category-content .all-goods{*/
  /*display:block;*/
  /*width:100%;*/
  /*height:36px;*/
  /*padding:0;*/
  /*border-radius:5px 5px 0 0;*/
  /*color:#fff;*/
  /*text-align:center;*/
  /*font:16px/36px "Microsoft YaHei";*/
  /*background:#41bbee;*/
  /*}*/
  /*#nav .category-content .all-goods em{*/
  /*font:12px/36px "Microsoft YaHei";*/
  /*}*/
  .category-content .category {
    position: absolute;
    top: 0;
    left: -16px;
    z-index: 113;
    width: 201px;
  + height: 456 px;
    border: 1px solid #dadad9;
    border-top: none;
    background: #fefefe;
  }

  .category-content .category-list li {
    height: 64px;
    border: 2px solid #fff;
    border-right: none;
    position: relative;
    z-index: 113;
    vertical-align: bottom;
  }

  .category-content .category-list a:hover {
    text-decoration: none;
    color: #41bbee;
  }

  .category-content .category-info {
    padding-left: 12px;
  }

  .category-content .category-name {
    overflow: hidden;
    position: relative;
    padding-top: 10px;
    font: 600 16px/30px "宋体";
  }

  .category-content .category-name i {
    position: absolute;
    top: 13px;
    width: 25px;
    height: 25px;
    -top: 6px;
  }

  .category-content .category-name b {
    margin-left: 4px;
    font: 400 12px/28px "宋体";
  }

  .category-content .category-name a {
    color: #4c4c4c;
  }

  .category-content .category-name .ml-22 {
    margin-left: 35px;
  }

  .category-content .list-nz i {
    background-position: 0 -200px;
  }

  .category-content .list-nanz i {
    background-position: -23px -200px;
  }

  .category-content .list-tz i {
    background-position: -48px -200px;
  }

  .category-content .list-ny i {
    background-position: -72px -200px;
  }

  .category-content .list-xb i {
    background-position: -96px -200px;
  }

  .category-content .list-xl i {
    background-position: 0 -225px;
  }

  .category-content .c-category-list {
    font: 400 12px/24px "宋体";
  }

  .category-content .c-category-list a {
    margin-right: 8px;
    color: #626262;
  }

  .category-content .category-info {
    position: relative;
    height: 72px;
    overflow: hidden;
  }

  .category-content .category-info em {
    position: absolute;
    top: 16px;
    right: 10px;
    width: 13px;
    height: 13px;
    font: 12px/18px "宋体";
    color: #9b9b9b;
  }

  .category-content .category .hover {
    box-shadow: 0px 2px 3px #ccc;
    margin-left: -1px;
    padding-left: 1px;
    z-index: 999;
  }

  .category-content .hover .category-info {
    border: none;
    text-decoration: none;
    background: #fff;
  }

  .category-content .menu-item {
    display: none;
    position: absolute;
    z-index: 11;
    left: 190px;
    width: 770px;
    padding: 0 0 0 2px;
    background: #fff;
    border: none;
    box-shadow: 0px 2px 3px #ccc;
    border-top: 1px solid #bbb \9;
    zoom: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
    filter: "progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
  }

  .category-content .menu-item .area-in {
    position: relative;
    z-index: 1;
  }

  .category-content .menu-item .area-bg {
    padding: 10px 0 10px 40px;
  }

  .category-content .menu-in {
    display: none;
  }

  .category-content .category-list li.hover .category-info {
    z-index: 999;
  }

  .category-content .menu-item {
    left: 193px;
  }

  .c-category-list {
    width: 160px;
    margin-right: 1px;
    zoom: 1;
    padding-left: 34px;
    border-bottom: 1px solid #cccccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 22px;
  }

  /* sublist */
  .sublist li {
    float: left;
    width: 156px;
    height: 90px !important;
    overflow: hidden;
    padding-right: 24px;
    padding-bottom: 24px;
  }

  .sublist li h3.mcate-item-hd {
    font-family: '微软雅黑';
    padding-left: 2px;
    font-size: 14px;
    height: 26px;
    line-height: 26px;
    border-bottom: 1px dashed #666666;
  }

  .sublist li p.mcate-item-bd {
    padding-left: 2px;
  }

  .sublist li p.mcate-item-bd a {
    height: 26px;
    line-height: 26px;
    margin-right: 5px;
    font-size: 12px;
    color: #666666;
    text-decoration: none;
    display: inline-block;
  }

  .sublist li p.mcate-item-bd a:hover {
    color: #6c5143;
    text-decoration: underline;
  }

  .hot_article {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .activities {
    width: 1200px;
    overflow: hidden;
    margin: 30px 0 20px 0;
  }

  .activities h4 {
    float: left;
  }

  .activities p {
    float: right;
  }

  /*.content1{*/
  /*width: 1200px;*/
  /*overflow: hidden;*/
  /*}*/
  .selected1 {
    width: 240px;
    height: 348px;
    background: rgb(240, 251, 255);
    float: left;
  }

  .selected1:hover {
    background: rgb(191, 233, 249);
  }

  .selected1 img {
    display: block;
    width: 240px;
    height: 348px;
    /*margin: 20px 35px;*/
  }

  .selected1 h3, p {
    text-align: center;
  }

  .selected1 p {
    margin-top: 10px;
  }

  .selected1 .price_1 {
    width: 203px;
    height: 24px;
    margin: 20px auto 0;
    border: 1px solid #41BBEE;
  }

  .selected1 .price_1 span {
    display: inline-block;
    width: 98px;
    height: 24px;
    line-height: 24px;
    text-align: center;
  }

  .content2 {
    width: 1200px;
    height: 360px;
    overflow: hidden;
  }

  .content2 .middle {
    width: 780px;
    overflow: hidden;
    float: left;
  }

  .content2 .middle > img {
    width: 118px;
    height: 78px;
    padding: 5px;
    border: 1px solid #CCCCCC;
  }

  .content2 .middle img {
    float: left;
  }

  .content2 a {
    width: 210px;
    height: 360px;
    float: left;
    display: block;
  }

  .content2 .shangpin {
    width: 780px;
    height: 360px;
    background-color: #41BBEE;
    float: left;
  }

  .daohang {
    width: 1200px;
    margin-top: 25px;
  }

  .daohang ul {
    width: 920px;
    height: 25px;
    margin-left: 8px;
  }

  .daohang ul li {
    width: 181px;
    text-align: center;
    font-size: 14px;
    color: #333333;
    float: left;
    cursor: default;
  }

  .daohang ul li:hover {
    color: #41BBEE;
  }

  .neirong {
    width: 1200px;
    height: 267px;
    overflow: hidden;
    float: left;

  }

  .neirong .neirong_box {
    width: 170px;
    height: 300px;
    margin: 25px 12px;
    float: left;
  }

  .neirong_box:nth-child(1) {
    margin-left: 23px;
  }

  .neirong .neirong_box p {
    margin: 5px 0;
    width: 160px;
    text-align: left;
  }

  .neirong .neirong_box span {
    color: #c9302c;
  }

  .le1 {
    width: 1200px;
    margin: 5px auto 0px;
  }

  .level_1 {
    width: 1200px;
    overflow: hidden;
    margin-top: 20px;
  }

  .level_1 .title {
    overflow: hidden;
  }

  .level_1 .title > h3 {
    float: left;
    width: 200px;
  }

  .level_1 .title > ul {
    width: 440px;
    height: 30px;
    float: right;
  }

  .level_1 .title > ul li {
    width: 80px;
    height: 30px;
    margin-left: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    cursor: default;
  }
  .level_1 .title > ul li:first-child{
    color: #41bbee;
  }
  .level_1 > ul li:hover {
    background-color: #41BBEE;
  }

  .shengxian {
    width: 1200px;
    height: 440px;
    margin-top: 20px;

    background-color: #cccccc;
  }

  .shengxian .left1 {
    width: 240px;
    height: 440px;
    background: no-repeat;
    overflow: hidden;
    float: left;
  }

  .left1_box {
    width: 210px;
    height: 120px;
    margin: 300px auto 0;
  }

  .left1_box > ul {
    width: 230px;
    height: 120px;
  }

  .left1_box > ul > li {
    width: 60px;
    height: 30px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    line-height: 30px;
    text-align: center;
    margin: 5px 5px;
    float: left;
    background: rgba(255, 255, 255, 0.3);
  }

  .left1_box > ul > li:hover {
    background: rgba(255, 255, 255, 0);
  }

  .left1_box > ul > li a {
    font-size: 12px;
    color: #fffefe;
    display: block;
    width: 60px;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .center1 {
    width: 760px;
    height: 440px;
    float: left;
  }

  .center1 .goodsitem {
    float: left !important;
    border: 1px solid #999999 !important;
    width: 168px !important;
    height: 193px !important;
    text-align: left !important;
    padding: 15px 10px 10px !important;
  }

  .center1 .goodsitem > img {
    width: 163px !important;
    height: 135px;
  }

  .center1 .goodsitem > a {
    margin-bottom: 15px !important;
  }

  .bottom1 {
    width: 1200px;
    height: 70px;
  }

  .bottom1 .mengniu {
    border: 1px solid #cccccc;
    padding: 5px;
    width: 108px;
    height: 58px;
    float: left;
  }
  .bottom1 .mengniu>img{
    width: 108px;
    height: 58px;
  }
  * {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  body {
    font-family: "微软雅黑";
    color: #333333;
    min-width: 1200px;
  }

  .tou {
    width: 100%;
    height: 30px;
    background: rgb(227, 228, 229);
  }

  nav {
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
  }

  .sc {
    width: 20%;
    float: left;
  }

  .sc a {
    font-size: 12px;
    line-height: 30px;
    color: #666666;
    text-decoration: none;
  }

  nav ul {
    width: 65%;
    float: right;
    margin-block-start: 0em;
    margin-block-end: 0em;
    list-style: none;
  }

  nav ul li {
    width: 14%;
    height: 30px;
    float: left;
    cursor: pointer;
    position: relative;
  }

  .li {
    width: 100%;
    height: 16px;
    margin-top: 7px;
    float: left;
    border-left: 1px solid rgb(102, 102, 102);
    font-size: 12px;
    color: #666666;
    text-align: center;
  }

  .yc {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    margin-top: 15px;
    margin-left: -85px;
    width: 170px;
    height: 70px;
    background: white;
    display: none;
    border: 1px solid rgb(227, 228, 229);
    border-top: none;
  }

  nav ul li:hover {
    background: white;
  }

  nav ul li:hover .yc {
    display: block;
  }

  .second_nav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 10px;
  }

  .second_nav .container-fluid .search_fenlei {
    margin: 0px;
    overflow: hidden;
    height: 20px;
  }

  .second_nav .container-fluid .search_fenlei span {
    width: 40px;
    height: 20px;
    float: left;
    text-align: center;
  }

  .second_nav .container-fluid .search_fenlei span.goods {
    color: #FFFFFF;
    background-color: #41bbee;
  }

  .second_nav .container-fluid .row input {
    border: 1px solid #41bbee;
    width: 80%;
    height: 30px;
  }

  .second_nav .container-fluid .row .search {
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    background-color: #41BBEE;
    color: #FFFFFF;
    line-height: 30px;
    vertical-align: top;
  }

  .second_nav .container-fluid .row .row_left {
    height: 50px;
    padding-top: 20px;
    text-align: right;
  }

  .second_nav .container-fluid .row .row_left span {
    margin-right: 10px;
  }

  .second_nav .container-fluid .row .row_left span.peisong {
    margin-right: 0px;
  }

  .second_nav .container-fluid .second_row {
    margin-top: 20px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }

  .second_nav .container-fluid .second_row .all_feilei {
    background-color: #41BBEE;
    color: #FFFFFF;
  }

  .carousel {
    height: 440px;
  }
  .carousel .el-row .el-col img{
    height: 440px;
    width: 100%;
  }

  #carousel-example-generic .login {
    width: 200px;
    height: 514px;
    position: absolute;
    top: 0px;
    right: 260px;
    padding: 30px 5px 0px 5px;
    background: rgba(240, 251, 255, 0.7);
  }

  .login input {
    width: 190px;
    height: 24px;
    margin-bottom: 6px;
  }

  .login .three {
    width: 110px;
  }

  .login .yanzhengma {
    width: 70px;
    margin-left: 8px;
    height: 26px;
  }

  .login .forgetPass {
    display: block;
    text-align: right;
    color: #999999;
    font-size: 12px;
  }

  .login .loginBtn {
    width: 190px;
    height: 30px;
    background-color: #41BBEE;
    text-align: center;
    color: #FFFFFF;
    line-height: 30px;
    border-radius: 5px;
  }

  .login .article_class {
    margin: 10px 0px 15px 0px;

  }

  .login .article_class > div > p,
  .login1 .article_class > div > p {
    font-size: 14px;
  }

  body,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  form,
  pre,
  blockquote,
  figure {
    margin: 0;
  }

  ul,
  ol,
  menu,
  input,
  button {
    margin: 0;
    padding: 0;
  }

  #nav .category-content {
    /*position: relative;*/
    width: 201px;
    /*float: left;*/
    z-index: 113;
  }

  /*#nav .category-content .all-goods{*/

  /*display:block;*/

  /*width:100%;*/

  /*height:36px;*/

  /*padding:0;*/

  /*border-radius:5px 5px 0 0;*/

  /*color:#fff;*/

  /*text-align:center;*/

  /*font:16px/36px "Microsoft YaHei";*/

  /*background:#41bbee;*/

  /*}*/

  /*#nav .category-content .all-goods em{*/

  /*font:12px/36px "Microsoft YaHei";*/

  /*}*/
  .second_nav img.logo {
    float: left;
    padding: 15px 0px 4px 0px;
    margin-right: 197px;
  }

  .second_nav .second_nav_top {
    height: 60px;
  }

  .second_nav .search {
    float: left;
  }

  .second_nav .search .search_title {
    height: 22px;
    text-align: left;
  }

  .second_nav .search .search_title span {
    display: inline-block;
    width: 40px;
    height: 22px;
    text-align: center;
    font-size: 12px;
  }

  .second_nav .search input {
    width: 320px;
    height: 26px;
    border: 2px solid #41BBEE;
  }

  .second_nav .search .sousuo {
    display: inline-block;
    width: 60px;
    height: 30px;
    color: #FFFEFE;
    background-color: #41BBEE;
    vertical-align: top;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
  }

  .second_nav .search .search_title .goods {
    background-color: #41BBEE;
    color: #FFFEFE;
  }

  .second_nav .baozheng {
    float: right;
    padding-top: 25px;
  }

  .second_nav .baozheng img {
    vertical-align: top;
    margin-right: 5px;
  }

  .second_nav .baozheng .text1,
  .second_nav .baozheng .text2,
  .second_nav .baozheng .text3 {
    font-size: 12px;
  }

  .second_nav .baozheng .text1,
  .second_nav .baozheng .text2 {
    margin-right: 10px;
  }

  .second_nav .navigator {
    clear: both;
  }

  .second_nav .navigator {
    height: 38px;
    line-height: 38px;
    overflow: hidden;
  }

  .second_nav .navigator span {
    float: left;
    text-align: center;
    font-size: 14px;
    margin-right: 50px;
  }

  .second_nav .navigator .all_fenlei {
    margin-right: 290px;
    width: 210px;
    background-color: #41BBEE;
    color: #FFFEFE;
  }

  .category-content .category {
    position: absolute;
    top: 0;
    left: 352px;
    z-index: 113;
    width: 208px;
  + height: 456 px;
    border: 1px solid #dadad9;
    border-top: none;
    background: #fefefe;
  }

  .category-content .category-list li {
    height: 64px;
    border: 2px solid #fff;
    border-right: none;
    position: relative;
    z-index: 113;
    vertical-align: bottom;
  }

  .category-content .category-list li:hover .menu-item {
    display: block;
  }

  .category-content .category-list a:hover {
    text-decoration: none;
    color: #41bbee;
  }

  .category-content .category-info {
    padding-left: 12px;
  }

  .category-content .category-name {
    overflow: hidden;
    position: relative;
    padding-top: 10px;
    font: 600 16px/30px "宋体";
  }

  .category-content .category-name i {
    position: absolute;
    top: 13px;
    width: 25px;
    height: 25px;
    -top: 6px;
  }

  .category-content .category-name b {
    margin-left: 4px;
    font: 400 12px/28px "宋体";
  }

  .category-content .category-name a {
    color: #4c4c4c;
  }

  .category-content .category-name .ml-22 {
    margin-left: 35px;
  }

  .category-content .list-nz i {
    background-position: 0 -200px;
  }

  .category-content .list-nanz i {
    background-position: -23px -200px;
  }

  .category-content .list-tz i {
    background-position: -48px -200px;
  }

  .category-content .list-ny i {
    background-position: -72px -200px;
  }

  .category-content .list-xb i {
    background-position: -96px -200px;
  }

  .category-content .list-xl i {
    background-position: 0 -225px;
  }

  .category-content .c-category-list {
    font: 400 12px/24px "宋体";
  }

  .category-content .c-category-list a {
    margin-right: 8px;
    color: #626262;
  }

  .category-content .category-info {
    position: relative;
    height: 72px;
    overflow: hidden;
  }

  .category-content .category-info em {
    position: absolute;
    top: 16px;
    right: 10px;
    width: 13px;
    height: 13px;
    font: 12px/18px "宋体";
    color: #9b9b9b;
  }

  .category-content .category .hover {
    box-shadow: 0px 2px 3px #ccc;
    margin-left: -1px;
    padding-left: 1px;
    z-index: 999;
  }

  .category-content .hover .category-info {
    border: none;
    text-decoration: none;
    background: #fff;
  }

  .category-content .menu-item {
    display: none;
    position: absolute;
    z-index: 11;
    top: 0px;
    left: 207px;
    width: 770px;
    padding: 0 0 0 2px;
    background: #fff;
    border: none;
    box-shadow: 0px 2px 3px #ccc;
    border-top: 1px solid #bbb \9;
    zoom: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
    filter: "progid:DXImageTransform.Microsoft.Shadow(color=#dddddd,direction=135,strength=4)";
  }

  .category-content .menu-item .area-in {
    position: relative;
    z-index: 1;
  }

  .category-content .menu-item .area-bg {
    padding: 10px 0 10px 40px;
  }

  .category-content .menu-in {
    display: none;
  }

  .category-content .category-list li.hover .category-info {
    z-index: 999;
  }

  .category-content .menu-item {
  }

  .c-category-list {
    width: 160px;
    margin-right: 1px;
    zoom: 1;
    padding-left: 34px;
    border-bottom: 1px solid #cccccc;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 22px;
  }

  /* sublist */

  .sublist li {
    float: left;
    width: 156px;
    height: 90px !important;
    overflow: hidden;
    padding-right: 24px;
    padding-bottom: 24px;
  }

  .sublist li h3.mcate-item-hd {
    font-family: '微软雅黑';
    padding-left: 2px;
    font-size: 14px;
    height: 26px;
    line-height: 26px;
    border-bottom: 1px dashed #666666;
  }

  .sublist li p.mcate-item-bd {
    padding-left: 2px;
  }

  .sublist li p.mcate-item-bd a {
    height: 26px;
    line-height: 26px;
    margin-right: 5px;
    font-size: 12px;
    color: #666666;
    text-decoration: none;
    display: inline-block;
  }

  .sublist li p.mcate-item-bd a:hover {
    color: #6c5143;
    text-decoration: underline;
  }

  .hot_article {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

  .activities {
    width: 1200px;
    overflow: hidden;
    margin: 30px 0 20px 0;
  }

  .activities h4 {
    float: left;
  }

  .activities p {
    float: right;
  }

  /*轮播图样式*/

  .carousel {
    height: 440px;
    margin: 0px auto;
    position: relative;
    overflow: hidden;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>

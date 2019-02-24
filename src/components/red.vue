<template>
  <div id="red">
    <div class="tou">
      <p>我的红包</p>
    </div>
    <div class="main">
      <div class="hed">
        <button class="left" @click="allr()">全部({{allred}})</button>
        <button class="center" @click="xianjin()">现金红包({{xianjinred}})</button>
        <button class="right" @click="diyong()">抵用红包({{diyongred}})</button>
        <p>共获得红包：{{money1}}元</p>
      </div>

      <div class="se">
        <div v-for="item in red" class="img">
          <img :src="item.img" alt="">
          <p class="qian">{{item.money}}</p>
          <p class="manjian">{{item.information}}</p>
          <p class="youxiaoqi">有效期：{{item.start}}-{{item.end}}</p>
        </div>
      </div>
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

</template>

<script>
    export default {
        name: "red",
      data () {
          return{
            red:[],
            xjred:[],
            dyred:[],
            allred:'',
            xianjinred:'',
            diyongred:'',
            money1:'',
            type1:'99',
            type2:'0',
            d1:true,
            d2:false,
            d3:false,
            current_page: '',
            last_page: '',
            prev_page_url: '',
            next_page_url: '',
            NUM: '',
          }
      },
      methods:{
        xianjin:function () {
          this.$axios.post("http://api.eawsp.com/api/creditCard/get_redpacket?token="+ sessionStorage.getItem("token"),{
            type: this.type1
          }).then((res)=>{
            console.log(res);
            this.red = res.data.data.data
            console.log(this.xjred)
            for(let i=0;i<this.red.length;i++){
              console.log(this.red[i])

              if(this.red[i].type == 99){
                this.red[i].img = require('../assets/xjhb.png')
                this.red[i].information = "无门槛"
              }else {
                if (_this.red[i].type == 0) {
                  this.red[i].information = "无门槛"
                }else if (this.red[i].type == 2){
                  this.red[i].information = "仅限加油使用"
                }else if(this.red[i].type == 3){
                  this.red[i].information = "仅限旅游使用"
                }

                this.red[i].img = require('../assets/dyhb.png')
              }
            }
          })
        },
        diyong:function () {
          this.$axios.post("http://api.eawsp.com/api/creditCard/get_redpacket?token="+ sessionStorage.getItem("token"),{
            type: this.type2
          }).then((res)=>{
            console.log(res);
            this.red = res.data.data.data
            for(let i=0;i<this.red.length;i++){
              console.log(this.red[i])

              if(this.red[i].type == 99){
                this.red[i].img = require('../assets/xjhb.png')
                this.red[i].information = "无门槛"
              }else {
                if (this.red[i].type == 0) {
                  this.red[i].information = "无门槛"
                }else if (this.red[i].type == 2){
                  this.red[i].information = "仅限加油使用"
                }else if(this.red[i].type == 3){
                  this.red[i].information = "仅限旅游使用"
                }

                this.red[i].img = require('../assets/dyhb.png')
              }
            }
          })
        },
        allr:function () {
          this.$axios.post("http://api.eawsp.com/api/creditCard/get_redpacket?token="+ sessionStorage.getItem("token"),{}).then((res)=>{
            console.log(res);
            this.red = res.data.data.data
            for(let i=0;i<this.red.length;i++){
              console.log(this.red[i])

              if(this.red[i].type == 99){
                this.red[i].img = require('../assets/xjhb.png')
                this.red[i].information = "无门槛"
              }else {
                if (this.red[i].type == 0) {
                  this.red[i].information = "无门槛"
                }else if (this.red[i].type == 2){
                  this.red[i].information = "仅限加油使用"
                }else if(this.red[i].type == 3){
                  this.red[i].information = "仅限旅游使用"
                }

                this.red[i].img = require('../assets/dyhb.png')
              }
            }
          })
        },
        // 分页上一页
        prev: function () {
          let _this = this
          this.$axios.post(_this.prev_page_url+'?token='+sessionStorage.getItem("token"), {
//          params: {
//            token: sessionStorage.getItem("token")
//          }
          }).then(function (res) {
            console.log(res);
//          _this.count = res.data.data.count;
            _this.lists = res.data.data.data;
            _this.current_page = res.data.data.current_page;
            _this.last_page = res.data.data.last_page;
            _this.prev_page_url = res.data.data.prev_page_url;
            _this.next_page_url = res.data.data.next_page_url;
          })
        },
        // 分页下一页
        next: function () {
          let _this = this;
          this.$axios.post(_this.next_page_url+'?token='+sessionStorage.getItem("token"), {
//          params: {
//            token: sessionStorage.getItem("token")
//          }
          }).then(function (res) {
//          _this.count = res.data.data.count;
            _this.current_page = res.data.data.current_page;
            _this.last_page = res.data.data.last_page;
            _this.prev_page_url = res.data.data.prev_page_url;
            _this.next_page_url = res.data.data.next_page_url;
          })
        },
        // 第几页
        GD: function () {
          let _this = this;
          if (_this.NUM == 1) {
            this.$axios.post("http://api.eawsp.com/api/creditCard/get_redpacket?token="+ sessionStorage.getItem("token"),).then(function (res) {


              _this.current_page = res.data.data.current_page;
              _this.last_page = res.data.data.last_page;
              _this.prev_page_url = res.data.data.prev_page_url;
              _this.next_page_url = res.data.data.next_page_url;
            })
          } else  if(_this.NUM > _this.last_page){
            console.log("超出总页数")
          }else {
            this.$axios.post(_this.next_page_url+'?token='+sessionStorage.getItem("token"), {
              page: _this.NUM
            }).then(function (res) {
//            _this.count = res.data.data.count;

              _this.current_page = res.data.data.current_page;
              _this.last_page = res.data.data.last_page;
              _this.prev_page_url = res.data.data.prev_page_url;
              _this.next_page_url = res.data.data.next_page_url;
            })
          }

        },
      },
      created () {
        let _this = this
        console.log(sessionStorage.getItem("token"))
        this.$axios.post("http://api.eawsp.com/api/creditCard/get_redpacket?token="+ sessionStorage.getItem("token"),{
        }).then(function (res) {
          console.log(res);
          _this.red = res.data.data.data
          _this.allred = res.data.data.numx
          _this.xianjinred = res.data.data.num1
          _this.diyongred = res.data.data.num2
          _this.money1 = res.data.data.total_money


          _this.last_page = res.data.data.last_page
          _this.current_page = res.data.data.current_page
          _this.prev_page_url = res.data.data.prev_page_url;
          _this.next_page_url = res.data.data.next_page_url;

          for(let i=0;i<_this.red.length;i++){
            console.log(_this.red[i])

            if(_this.red[i].type == 99){
              _this.red[i].img = require('../assets/xjhb.png')
              _this.red[i].information = "无门槛"
            }else {
              if (_this.red[i].type == 0) {
                _this.red[i].information = "无门槛"
              }else if (_this.red[i].type == 2){
                _this.red[i].information = "仅限加油使用"
              }else if(_this.red[i].type == 3){
                _this.red[i].information = "仅限旅游使用"
              }

              _this.red[i].img = require('../assets/dyhb.png')
            }
          }
        })


      }
    }
</script>

<style scoped>
  body,html,#red{
    width: 100%;
    height: 100%;
  }
  *{
    margin-block-start: 0em;
    margin-block-end:0em;
    list-style: none;
    padding-inline-start: 0px;
    margin-top:0;
  }
  #red{
    width:1000px;
    height: auto;
    float: left;
    margin-top: 30px;
    margin-left: 20px;
    /*overflow: hidden;*/
  }
  .tou{
    width: 100%;
    height: 60px;
    background: white;
    line-height: 60px;
    font-size: 16px;
    color: #333;
    float: left;
  }
  .tou p{
    display: block;
    float: left;
    margin-left: 20px;
  }
  .main{
    width: 100%;
    height: auto;
    float: left;
    padding-bottom: 50px;
    margin-top: 30px;
    background: white;
  }
  .hed{
    width: 960px;
    height: 50px;
    float: left;
    margin-left: 20px;
    margin-top: 20px;
  }
  .hed button{
    width:110px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border: 1px solid #41bbee;
    background: white;
    padding: 0;
  }
  .left{
    border-radius: 8px 0 0 8px;
  }
  .right{
    border-radius: 0 8px 8px 0 ;
  }
  .hed p{
    display: block;
    width: 200px;
    float: right;
    color: #ff0000;
    margin-right: 20px;
    font-size: 14px;
  }
  .se{
    width: 100%;
    height: 300px;
    /*background: red;*/
    float: left;
  }
  .img{
    width: 260px;
    height: 100px;
    float: left;
    margin-top: 50px;
    margin-left: 60px;
    position: relative;
  }
  .img img{
    position: absolute;
    top: 0;
    left: 0;
  }
  .qian {
    position: absolute;
    font-family: Arial;
    top: 10px;
    left: 40px;
    font-size: 46px;
    color: #f21f3d;
  }
  .manjian{
    position: absolute;
    top: 60px;
    left: 10px;
    font-size: 12px;
    color: #666;
    transform: scale(0.8);
  }
  .youxiaoqi{
    position: absolute;
    top: 75px;
    /*left: 10px;*/
    font-size: 12px;
    color: #666;
    transform: scale(0.8);
  }

  .fy {
    width: 300px;
    height: 30px;
    /*background: #41bbee;*/
    float: left;
    margin-top: 50px;
    margin-left: 350px;
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

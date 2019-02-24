<template>
  <div id="User_information">
    <div class="tou">
      <p>用户信息</p>
    </div>
    <div class="main">
      <p>基本信息</p>
      <section>
        <table style="margin-top: 80px"><span>姓名：</span><p>{{name}}</p></table>
        <img :src="'http://api.eawsp.com'+tx" alt="" :onerror="errorImg01">
        <table><span>性别：</span><p>{{sex}}</p></table>
        <table><span>身份证号：</span><p>{{num}}</p></table>
      </section>
      <p style="margin-top: 80px">信用卡信息</p>
      <section style="padding-bottom: 50px">
        <table style="margin-top: 80px"><span>信用卡号：</span><p>{{Card_num}}</p></table>
        <img style="width: 252px;height: 159px;margin-right: 100px;border-radius: 0" :src="'http://api.eawsp.com'+yhk" alt="">
        <table><span>卡种：</span><p>{{Card_species}}</p></table>
        <table><span>信用额度：</span><p>{{Credit_line}}</p></table>
        <table><span>账单日：</span><p>每月15号</p></table>
        <table><span>账单还款日：</span><p>每月30号</p></table>
        <table><span>有效期：</span><p>{{Term_of_validity}}</p></table>
      </section>
    </div>
  </div>

</template>

<script>
    export default {
        name: "User_information",
      data () {
          return{
            name:'',
            sex:'',
            num:'',
            Card_num:'',
            Card_species:'',
            Credit_line:'',
            Term_of_validity:'',
            tx:'',
            yhk:'',
            errorImg01: 'this.src="' + require('../assets/touxiang.png') + '"'
          }
      },
      created () {
        // console.log(sessionStorage.getItem("token"));
        let _this = this;
        this.$axios.post("http://api.eawsp.com/api/user/userBase?token="+sessionStorage.getItem("token"),{
        }).then(function (res) {
          console.log(res)
          _this.name = res.data.data.name
          _this.sex = res.data.data.sex
          _this.num = res.data.data.id_num
          _this.Card_num = res.data.data.username
          _this.Card_species = res.data.data.card_name
          _this.Credit_line = res.data.data.card_money + '元'
          _this.tx = res.data.data.portrait
          _this.yhk = res.data.data.image_positive
          _this.Term_of_validity = res.data.data.month +"/"+res.data.data.year

        })
      }
    }
</script>

<style scoped>
  body,html,#User_information{
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
  #User_information{
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
    height:100%;
    background: white;
    float: left;
    margin-top: 30px;
  }
  .main>p{
    width: 920px;
    height: 50px;
    display: block;
    float: left;
    margin-left: 40px;
    font-size: 14px;
    color: #333;
    line-height: 50px;
    border-bottom: 1px solid rgb(236,236,236);
  }
  .main section{
    width: 820px;
    display: block;
    float: left;
    margin-left: 140px;
  }
  .main section table{
    width: 450px;
    font-size: 14px;
    color: #333;
    float: left;
    margin-top: 25px;
  }
  .main section table span{
    display: block;
    width: 90px;
    float: left;
  }
  .main section table p{
    display: block;
    width: 350px;
    float: right;
  }
  .main section img{
    display: block;
    float: right;
    margin-top: 70px;
    margin-right: 188px;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
</style>

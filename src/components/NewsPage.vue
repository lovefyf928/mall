<template>
    <div id="NewsPage">
        <div>

            <div class="Himh">
                <div class="Himh_l">
                    <img src="../assets/yuanjiaoer.png" alt="">
                  <div class="himh_lBottom">
                    <span class="Himh_l_span">文章分类</span>
                    <ul>
                        <li @click="goToNewsPageAll()">全部</li>
                        <li @click="goToNewsPageNotice()">公告</li>
                        <li @click="goToNewsPageSoliy()">政策</li>
                        <li @click="goToNewsPageRule()">规则</li>
                        <li @click="goToNewsPageCom()">社区</li>
                    </ul>
                  </div>
                </div>
                <div class="Himh_r">
                    <div class="Himh_r_h">
                        <p>{{item.title}}</p>
                        <div>{{item.created_at}}</div>
                    </div>
                    <div class="Himh_con" v-html="item.contents">

                    </div>
                </div>
            </div>

           
        </div>
      
    </div>
</template>

<script>

    
    export default {
        name:'NewsPage',
        data() {
          return {
              tabPosition: 'left',
              item:''
          };
        },
      created(){
          this.$root.suibian.nav_isshow=false;
         $('#app').css('backgroundColor','#f9f9f9');
        console.log(this.$route.params.id);

        this.$axios.get('http://api.eawsp.com/api/index/get/'+this.$route.params.id,{

         }).then((res)=>{
            this.item=res.data.data;
         })
      },
      methods:{
        goToNewsPageAll(){
          this.$router.push({name:"NewsDetails",params:{
              type:0
            }})
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
      }
    }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
    font-family: "Microsoft YaHei";
  }
    .Himh {
        width: 1200px;
        height: 1000px;
        padding-top: 60px;
        margin: 0 auto;
    }
  .Himh_l {
    width: 210px;
    float: left;
  }
  .Himh_l .himh_lBottom{
    padding-top: 32px;
    width: 190px;
    background-color: #ffffff;
    margin:0 auto;
    position: relative;
    top: -11px;
  }
  .Himh_l_span {
    font-size: 19px;
    font-weight: 600;
    margin: 0px auto 32px;
    text-align: center;
    display: inherit;
  }
  .Himh_l .himh_lBottom>ul {

    list-style: none;
    line-height: 34px;
    width: 35px;
    margin: 0 auto;
  }
  .Himh_l .himh_lBottom>ul>li{
    cursor: default;
  }
  .Himh_l .himh_lBottom>ul>li:hover{
    color: #41bbee;
  }
    .Himh_r {
        background-color: #fff;
        width: 929px;
        float: right;
    }
    .Himh_r_h {
       height: 75px;
       border-bottom: 1px solid #dbdbdd;

    }
    .Himh_r_h  p {
        display: flex;
        justify-content: center;
        font-size: 16px;
        color: #333;
        margin-top: 50px;
      font-weight: bold;
    }
    .Himh_r_h div {
        display: flex;
        justify-content: center;
        margin-top: 33px;
        color: #666;
        font-size: 14px;
        z-index: 20;
        width: 200px;
        margin: 45px auto;
        background: #fff;
    }
    .Himh_con {
        margin: 63px;
        height: auto;
        color: #666;
        font-size: 14px;
        line-height: 36px;
    }
</style>

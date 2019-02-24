<template>
    <div id="NewsDetails">
        <div>
            <div class="Himh">
                <div class="Himh_l">
                    <img src="../assets/yuanjiaoer.png" alt="">
                    <div class="himh_lBottom">
                      <span class="Himh_l_span">文章分类</span>
                      <ul>
                        <li @click="allarticle">全部</li>
                        <li @click="noticeArticle">公告</li>
                        <li @click="soliyArticle">政策</li>
                        <li @click="rulesArticle">规则</li>
                        <li @click="communityArticle">社区</li>
                      </ul>
                    </div>

                </div>
                <div class="Himh_r">
                  <ul>
                          <li v-for="item in items">
                              <div class="Himh_r_botton">
                                  <p class="title" @click="goToPage(item.id)">{{item.title}}</p>
                                  <div class="Himh_r_con" v-html="item.contents"></div>
                                  <em>{{item.created_at}}</em>
                              </div>
                          </li>
                      </ul>

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
            </div>
        </div>
        
        
      
    </div>
</template>

<script>
    export default {
      name:'NewsDetails',
      data(){
         return {
           items:[],
           current_page:'',
           last_page: '',
           prev_page_url: '',
           next_page_url: '',
           last_page_url: '',
           count: 1,
           NUM: 1,

         }
      },
      mounted(){
        this.$root.suibian.nav_isshow=false;
        $('#app').css('backgroundColor','#f9f9f9');
        if(this.$route.params.type){
           $('.Himh .Himh_l ul li').eq(this.$route.params.type).addClass('cur').siblings().removeClass('cur');
          this.$axios.post('http://api.eawsp.com/api/index/get_all',{
              type:this.$route.params.type
          },).then((res)=>{
            console.log(res);
            this.items=res.data.data.data;
            this.current_page = res.data.data.current_page,
              this.last_page = res.data.data.last_page,
              this.prev_page_url = res.data.data.prev_page_url,
              this.next_page_url = res.data.data.next_page_url,
              this.last_page_url = res.data.data.last_page_url
          })
        }else{
          $('.Himh .Himh_l ul li').eq(0).addClass('cur').siblings().removeClass('cur');
          this.$axios.post('http://api.eawsp.com/api/index/get_all',{

          },).then((res)=>{
            console.log(res);
            this.items=res.data.data.data;
            this.current_page = res.data.data.current_page,
              this.last_page = res.data.data.last_page,
              this.prev_page_url = res.data.data.prev_page_url,
              this.next_page_url = res.data.data.next_page_url,
              this.last_page_url = res.data.data.last_page_url
          })
        }

      },
      methods:{
        allarticle(e){
          $(e.target).addClass('cur').siblings().removeClass();
          this.$axios.post('http://api.eawsp.com/api/index/get_all',{

          },).then((res)=>{
            console.log(res);
            this.items=res.data.data.data;
            this.current_page = res.data.data.current_page,
              this.last_page = res.data.data.last_page,
              this.prev_page_url = res.data.data.prev_page_url,
              this.next_page_url = res.data.data.next_page_url,
              this.last_page_url = res.data.data.last_page_url
          })
        },
        noticeArticle(e){
         $(e.target).addClass('cur').siblings().removeClass();
          this.$axios.post('http://api.eawsp.com/api/index/get_all',{
            type:1
          },).then((res)=>{
            console.log(res);
            this.items=res.data.data.data;
            this.current_page = res.data.data.current_page,
              this.last_page = res.data.data.last_page,
              this.prev_page_url = res.data.data.prev_page_url,
              this.next_page_url = res.data.data.next_page_url,
              this.last_page_url = res.data.data.last_page_url
          })

        },
        soliyArticle(e){
          $(e.target).addClass('cur').siblings().removeClass();
          this.$axios.post('http://api.eawsp.com/api/index/get_all',{
               type:2
          },).then((res)=>{
            console.log(res);
            this.items=res.data.data.data;
            this.current_page = res.data.data.current_page,
              this.last_page = res.data.data.last_page,
              this.prev_page_url = res.data.data.prev_page_url,
              this.next_page_url = res.data.data.next_page_url,
              this.last_page_url = res.data.data.last_page_url
          })
        },
        rulesArticle(e){
          $(e.target).addClass('cur').siblings().removeClass();
          this.$axios.post('http://api.eawsp.com/api/index/get_all',{
              type:3
          },).then((res)=>{
            console.log(res);
            this.items=res.data.data.data;
            this.current_page = res.data.data.current_page,
              this.last_page = res.data.data.last_page,
              this.prev_page_url = res.data.data.prev_page_url,
              this.next_page_url = res.data.data.next_page_url,
              this.last_page_url = res.data.data.last_page_url
          })
        },
        communityArticle(e){
          $(e.target).addClass('cur').siblings().removeClass();
          this.$axios.post('http://api.eawsp.com/api/index/get_all',{
              type:4
          },).then((res)=>{
            console.log(res);
            this.items=res.data.data.data;
            this.current_page = res.data.data.current_page,
              this.last_page = res.data.data.last_page,
              this.prev_page_url = res.data.data.prev_page_url,
              this.next_page_url = res.data.data.next_page_url,
              this.last_page_url = res.data.data.last_page_url
          })
        },
        goToPage(id){
          this.$router.push({name:'NewsPage',params:{
                'id':id
            }});
        },
        //前一页
        prev: function() {


          this.$axios.post(this.prev_page_url, {

          }).then((res)=> {
            this.items = res.data.data.data;

            this.current_page = res.data.data.current_page;
              this.last_page = res.data.data.last_page;
              this.prev_page_url = res.data.data.prev_page_url;
              this.next_page_url = res.data.data.next_page_url;
              this.last_page_url = res.data.data.last_page_url;
          })
        },
        // 分页下一页
        next: function() {
          this.$axios.post(this.next_page_url, {

          }).then((res)=>{

              this.items = res.data.data.data;

              this.current_page = res.data.data.current_page;
              this.last_page = res.data.data.last_page;
              this.prev_page_url = res.data.data.prev_page_url;
              this.next_page_url = res.data.data.next_page_url;
              this.last_page_url = res.data.data.last_page_url;
          })
        },
        // 第几页
        GD: function() {
          if(this.NUM == 1) {
            this.$axios.post('http://api.eawsp.com/api/index/get_all', {

            }).then((res)=> {
              this.items = res.data.data.data;

              this.current_page = res.data.data.current_page;
              this.last_page = res.data.data.last_page;
              this.prev_page_url = res.data.data.prev_page_url;
              this.next_page_url = res.data.data.next_page_url;
              this.last_page_url = res.data.data.last_page_url;
            })
          } else if(this.NUM > this.last_page) {
            this.$alert('超出总页数', '优智优品网', {
              confirmButtonText: '确定',
            });
          } else {
            this.$axios.post('http://api.eawsp.com/api/index/get_all',{
              page: this.NUM
            }).then((res)=> {
              console.log(res);
              this.items = res.data.data.data;
              this.current_page = res.data.data.current_page;
              this.last_page = res.data.data.last_page;
              this.prev_page_url = res.data.data.prev_page_url;
              this.next_page_url = res.data.data.next_page_url;
              this.last_page_url = res.data.data.last_page_url;
            })
          }

        },
      }
    }
</script>

<style scoped>
  *{
    margin: 0px ;
    padding: 0px;
  }
  .Himh {
        width: 1200px;
        padding-top: 60px;
        margin: 0 auto;
        overflow: hidden;
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
    .Himh_r {
        height: auto;
        width: 929px;
        float: right;
      margin-bottom: 30px;
    }
    .Himh_r ul {
      width: 829px;
        overflow: hidden;
      padding: 40px 50px 0px;
      background-color: #fff;
    }
    .Himh_r ul li {
      width: 399.5px;
      list-style: none;
      float: left;
      border-bottom: 1px solid #cccccc;

    }
  .Himh_r ul li:nth-child(2n+1){
    margin-right: 30px;
  }
    .Himh_r ul li div{
        height: 200px;
        width: 400px;
    }
    .Himh_r_botton{
    }
  .Himh_r_botton  .title{
    cursor: default;
  }
    .Himh_r ul li p {
            overflow: hidden;
            font-size: 16px;
            font-weight: 600;
            height: 40px;
      line-height: 40px;
            display: block;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0 auto;
    }
    .Himh_r ul li p:hover {
        color: #41bbee;
    }
    .Himh_r ul li em {
        font-size: 14px;
        color: #999;
    }
    .Himh_r .Himh_r_con {
        width: 400.5px;
        height: 130px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        font-size: 14px;
        color: #999;
        line-height: 26px; 
    }
    .is-background {
        padding: 11px 7px 12px 261px;
    }
  .cur{
    border-bottom: 2px solid #41bbee;
  }
  .fy {
    width: 300px;
    height: 30px;
    /*background: #41bbee;*/
    float: left;
    margin: 30px auto 0px 300px;
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

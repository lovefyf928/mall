<template>
    <div class="main">
      <div class="yzzx">
        <img src="../assets/yzzx.png">
      </div>
      <div class="gwc" @click="jump()">
      <img src="../assets/gouwuche.png">
        <p class="cart">购物车</p>
      </div>
      <div class="gwc gz" @click="JumpToFollow()">
        <img src="../assets/guanzhu.png">
        <p class="cart gz2" style="font-size: 7px">关注</p>
      </div>
      <div class="gwc gz" @click="JumpToSave()">
        <img src="../assets/shoucang.png">
        <p class="cart gz2" style="font-size: 7px">收藏</p>
      </div>
      <div class="top" @click="goTop">
        <img src="../assets/TOP1.png">
      </div>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
      methods: {
        goTop(){
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
          jump(){
            if(sessionStorage.getItem('token')){
              this.$router.push("/home");

            }else{
              this.$router.push('/login')
            }
          },
          JumpToFollow(){
            if(sessionStorage.getItem('token')){
              this.$router.push("/whole/follow");
            }else{
              this.$router.push('/login')
            }
          },
          JumpToSave(){
            if(sessionStorage.getItem('token')){
              this.$router.push("/whole/Collection");
            }else{
              this.$router.push('/login')
            }

          }
      }
    }
</script>

<style scoped>
  .main{
    font-size: 14px;
    width: 36px;
    height: 100%;
    background: #444444;
    position: fixed;
    right: 0px;
    z-index: 999;
  }
  .main .yzzx{
    margin-top: 120px;
  }
  .main .gwc{
    margin-top: 30px;
    padding-left: 5px;
  }
  .main .gwc .cart{
    padding-left: 5px;
    margin-top: 5px;
    margin-bottom: 3px;
    color: #FFFFFF;
    cursor: pointer;
  }
  .cart2{
    padding-left: 8px!important;
  }
  .main .gz{
    padding-left: 8px;
  }
  .main .gz2{
    padding-left: 0!important;
    margin-top: 5px;
    margin-bottom: 3px;
    color: #FFFFFF
  }
  .main .top{
    margin-top: 420px;
    padding-bottom: 40px;
    padding-left: 5px;
  }
</style>

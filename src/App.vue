<template>
  <div id="app">
    <!--<headerr> </headerr>-->
    <!--<div class="content">-->
      <!--<left> </left>-->
      <!--<router-view/>-->
    <!--</div>-->
    <!--<footerr> </footerr>-->
    <router-view> </router-view>
  </div>
</template>

<script>
  import header from './components/headerr'
  import footer from './components/footerr'
  import left from './components/left'
  import login1 from './components/login'
export default {
  name: 'App',
  components:{
    headerr: header,
    footerr: footer,
    left:left,
    login1:login1
  }
}
</script>

<style>
#app {
  background: #FFFFFF;
  width: 100%;
  min-width: 1200px;
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
  body{
    margin: 0;
    /*background: rgb(236,236,236);*/
  }
  .content{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }

</style>

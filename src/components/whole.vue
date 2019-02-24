<template>
    <div class="whole">
      <sidebar></sidebar>
      <headerr> </headerr>
      <div class="content">
        <left> </left>
        <router-view/>
      </div>
      <footerr> </footerr>
    </div>
</template>

<script>
import header from '../components/headerr'
import footer from '../components/footerr'
import left from '../components/left'
import login1 from '../components/login'
import sidebar from './sidebar'
    export default {
        name: "whole",
      components:{
        sidebar,
        headerr: header,
        footerr: footer,
        left:left,
        login1:login1
      }
    }
</script>

<style scoped>
  body{
    margin: 0;

  }
  .content{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .whole{
    background: rgb(236,236,236);
  }
</style>

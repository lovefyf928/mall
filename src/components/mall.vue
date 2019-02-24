<template>
  <div>
    <mallaside style="z-index: 1000"></mallaside>
    <mallheader></mallheader>
    <router-view></router-view>
    <mallfooter></mallfooter>
  </div>
</template>

<script>
  import mallfooter from '../components/mall_footer'
  import mallheader from '../components/mall_header'
  import mallaside from '../components/sidebar'
    export default {
        name: "mall",
        components: {mallfooter,mallheader,mallaside},
        created(){
          $('#app').css('backgroundColor','#ffffff');
        }
    }
</script>

<style scoped>
</style>

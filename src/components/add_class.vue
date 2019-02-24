<template>
  <div>
    <div v-for="(tmp,key) in arr">
      <input type="checkbox"/><div class="father" @click="f1(key)">>{{tmp.name}}</div>
      <div v-if="tmp.isdisplay">
        <div v-for="val in tmp.son">
          <input type="checkbox"/><div class="son">{{val}}</div><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "add_class",
        data(){
          return {
            arr: [{name:"衣服",son:["长衣服","短衣服","超长衣服"]},
              {name:"袜子",son:["长袜子","短袜子","超短袜子"]}
            ]
          }
        },
      mounted(){
          for (var i = 0; i < this.arr.length; i ++) {
            this.arr[i].isdisplay = false;
          }
      },
        methods: {
          f1(key){
            for (var i = 0; i < this.arr.length; i ++) {
              this.arr[i].isdisplay = false;
            }
            this.arr[key].isdisplay = true;
            this.$forceUpdate();
          }
        }
    }
</script>

<style scoped>
  .father,.son{
    background: #cccccc;
    width: 980px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    border: 1px solid #c6c8ca;
    margin-top: 9px;
  }
  .son{
    margin-left: 50px;
  }
</style>

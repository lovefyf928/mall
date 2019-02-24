<template>
  <div id="Collection">
    <div class="tou">
      <p>商品收藏</p>
    </div>

    <div class="main">
      <div class="hed">
        <p>全部商品（{{count}}）</p>
      </div>
      <div class="Collection_list">
        <div v-for="(tiem,index) in list" class="list">
          <img :src="'http://api.eawsp.com/'+ tiem.commoditys.image_thumbnail" alt="">
          <p @click="goToDetail(tiem.commodity_id)">{{tiem.commoditys.name}}</p>
          <p><span>￥</span>{{tiem.commoditys.shop_price}}</p>
          <div class="img">
            <img src="../assets/qxgz.png" alt="" @click="cancel(index,tiem.commodity_id)">
            <img src="../assets/jrgwc.png" alt="" @click="goToCar(index,list)">
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
  </div>

</template>

<script>
  export default {
    name: "Collection",
    data() {
      return {
        list: [],
        count: 0,
        current_page: '',
        last_page: '',
        prev_page_url: '',
        next_page_url: '',
        NUM: '',
        number:'1'
      }
    },
    created() {
      let _this = this;
      this.$axios.get("http://api.eawsp.com/api/user/getCollection?token=" + sessionStorage.getItem("token"), {}).then(function (res) {
        console.log(res);
        _this.count = res.data.data.count;
        _this.list = res.data.data.data;
        _this.current_page = res.data.data.current_page;
        _this.last_page = res.data.data.last_page;
        _this.prev_page_url = res.data.data.prev_page_url;
        _this.next_page_url = res.data.data.next_page_url
      })
    },
    methods: {
      goToDetail(index){
        this.$root.suibian.id = index
        this.$router.push('/mall/details')
      },
      goToCar(num,rec_num){
        if(!sessionStorage.getItem("token")){
            this.$alert('请登录账号','优智优品网',{
              confirmButtonText:'确定',
              callback:() => {
                this.$router.push('/')
              }
            })
          }else{
            this.commodity_id = rec_num[num].commoditys.id
            this.$axios.post("http://api.eawsp.com/api/store/addShopCart?token="+sessionStorage.getItem("token"),{
              commodity_id:this.commodity_id,
              shop_number:this.number
            }).then((res)=>{
            })
          }
      },
      cancel:function(num,comid){
        console.log(comid);
        this.list.splice(num,1)
        this.$axios.post("http://api.eawsp.com/api/user/delCollection?token=" + sessionStorage.getItem("token"), {
          commoditys_id:comid
        }).then((res)=>{
          console.log(res);
          this.count -= 1;
        })
      },
      // 分页上一页
      prev: function () {
        let _this = this
        this.$axios.get(_this.prev_page_url, {
          params: {
            token: sessionStorage.getItem("token")
          }
        }).then(function (res) {
          _this.count = res.data.data.count;
          _this.list = res.data.data.data;
          _this.current_page = res.data.data.current_page;
          _this.last_page = res.data.data.last_page;
          _this.prev_page_url = res.data.data.prev_page_url;
          _this.next_page_url = res.data.data.next_page_url;
        })
      },
      // 分页下一页
      next: function () {
        let _this = this;
        this.$axios.get(_this.next_page_url, {
          params: {
            token: sessionStorage.getItem("token")
          }
        }).then(function (res) {
          _this.count = res.data.data.count;
          _this.list = res.data.data.data;
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
          this.$axios.get("http://api.eawsp.com/api/user/getCollection?token=" + sessionStorage.getItem("token"), {}).then(function (res) {
            _this.count = res.data.data.count;
            _this.list = res.data.data.data;
            _this.current_page = res.data.data.current_page;
            _this.last_page = res.data.data.last_page;
            _this.prev_page_url = res.data.data.prev_page_url;
            _this.next_page_url = res.data.data.next_page_url;
          })
        } else  if(_this.NUM > _this.count){
        }else {
          this.$axios.get(_this.next_page_url, {
            params: {
              token: sessionStorage.getItem("token"),
              page: _this.NUM
            }
          }).then(function (res) {
            _this.count = res.data.data.count;
            _this.list = res.data.data.data;
            _this.current_page = res.data.data.current_page;
            _this.last_page = res.data.data.last_page;
            _this.prev_page_url = res.data.data.prev_page_url;
            _this.next_page_url = res.data.data.next_page_url;
          })
        }

      }
    }

  }
</script>

<style scoped>
  body, html, #Collection {
    width: 100%;
    height: 100%;
  }

  * {
    margin-block-start: 0em;
    margin-block-end: 0em;
    list-style: none;
    padding-inline-start: 0px;
    margin-top: 0;
  }

  #Collection {
    width: 1000px;
    height: auto;
    float: left;
    margin-top: 30px;
    margin-left: 20px;
    /*overflow: hidden;*/
  }

  .tou {
    width: 100%;
    height: 60px;
    background: white;
    line-height: 60px;
    font-size: 16px;
    color: #333;
    float: left;
  }

  .tou > p {
    display: block;
    float: left;
    margin-left: 20px;
  }

  .main {
    width: 100%;
    background: white;
    float: left;
    margin-top: 30px;
    padding-bottom: 50px;
  }

  .hed {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #c9c9c9;
  }

  .hed p {
    display: block;
    line-height: 60px;
    font-size: 16px;
    color: #333;
    float: left;
    margin-top: 9px;
    padding: 0 20px 0 20px;
    border-bottom: 2px solid #41bbee;
  }

  .Collection_list {
    width: 920px;
    float: left;
    margin-left: 40px;
    /*margin-top: 20px;*/
  }

  .list {
    width: 220px;
    height: 300px;
    outline: 1px solid rgb(201, 201, 201);
    float: left;
    margin-left: 10px;
    margin-top: 10px;
  }

  .list > img {
    width: 210px;
    height: 210px;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
  }

  .list p {
    width: 90%;
    float: left;
    margin-left: 5%;
    margin-top: 13px;
    font-size: 12px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 12px;
  }

  .list > :nth-child(3) {
    color: #ff3300;
    font-size: 16px;
    margin-top: 13px;
  }

  .list span {
    font-size: 12px;
  }

  .img {
    width: 100%;
    height: 10px;
    /*background: red;*/
    float: left;
    margin-top: 13px;
  }

  .img img {
    display: block;
    float: left;
    margin-left: 5px;
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

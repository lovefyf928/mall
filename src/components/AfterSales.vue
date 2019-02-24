<template>
  <div id="AfterSales">
    <div class="tou">
      <p>申请售后</p>
    </div>
    
    <div class="main">
      <div class="nav">
        <ul>
          <li style="width: 500px;">宝贝</li>
          <li>数量</li>
          <li>单价</li>
        </ul>
      </div>
      <div class="products" v-for="item in this.$route.params.listArr.order_goods">
        <ul>
          <li style="width: 500px;"><img :src="'http://api.eawsp.com/'+item.commodity.image_thumbnail" style="height: 60px;width: 60px;" alt=""><p>{{item.commodity.name}}</p></li>
          <li style="border-left: 1px solid rgb(242,242,242);border-right: 1px solid rgb(242,242,242)"><span>{{item.goods_number}}</span></li>
          <li><span style="color: #71ccf2">&yen;{{item.price}}</span></li>
        </ul>
      </div>
      <div class="excel">
        <label for="" style="margin-top: 30px;"><p><span>*</span>售后类型：</p><select name="" id="1" v-model="myVal.value"><option v-for="item in myVal" v-bind:value="item.value">{{item.name}}</option></select></label>
        <label for=""><p><span>*</span>商品问题：</p><select name="" id="2" v-model="problem"><option>质量问题</option><option>与描述不符</option><option>其它</option></select></label>
        <label for=""><p><span>*</span>问题描述：</p><textarea v-model="discription" name="" id="" style="resize: none;overflow-y:hidden;width: 400px;height: 150px;"></textarea></label>
        <label for="" style="position: relative"><p><span>*</span>图片上传：</p><div class="file-box"><input type="file" class="file-btn" @change="upload"/>上传文件</div></label>
        <div class="excel2">
            <img :src="src1" alt="">
          <p>提示：</p>
          <span>图片大小不超过4M，支持bmp,gif,jpg,png,jpeg格式文件</span>
          <button @click="submit">立即提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AfterSales",
        data(){
          return{
            src1:'',
            blob:'',
            myVal:[
              {
                name:'仅退货',
                'value':1
              },{
                name:'退货/退款',
                'value':2
              },{
                name:'仅退款',
                'value':3
              }
            ],
            problem:'',
            couponSelected:'',
            name:'',
            pic:'',
            mount:'',
            price:'',
            discription:''

          }
        },
      methods:{
          submit(){
          		var that=this;
              if(!this.myVal.value || !this.problem || !this.discription){
                that.$alert('请选择或者输入对应字段', '提示', {
										confirmButtonText: '确定',
									});
              }
              if(this.problem == "质量问题"){
                this.problem = 1;
              }else if(this.problem == "与描述不符"){
                this.problem = 2
              }else{
                this.problem = 3
              }

              var formdata = new FormData;
              formdata.append('order_id', this.$route.params.listArr.id);
              formdata.append('describe', this.discription);
              formdata.append('type', this.myVal.value);
              formdata.append('goods_type', this.problem);
              formdata.append('image[]', this.blob);
              //此处必须设置为  multipart/form-data
              let config = {
                headers: {

                  'Content-Type': 'multipart/form-data' //之前说的以表单传数据的格式来传递fromdata
                }

              };
              this.$axios.post('http://api.eawsp.com/api/user/applyAS?token='+sessionStorage.getItem("token"), formdata, config).then((res) => {
                if(res.data.code==0){
                	that.$alert('提交成功', '售后', {
										confirmButtonText: '确定',
									});
									
                }else {
                	
                	that.$alert(res.data.message, '售后', {
										confirmButtonText: '确定',
									});
                }
              })
          },
          upload:function (e) {
            let that = this;
            let reader = new FileReader();//创建对象
            let img1 = e.target.files[0];
            let url = null;
            if(img1.size/1024/1024<=4){
              if(img1.type.split("/")[1] == "jpg"||"jpeg"||"png"){
                if(window.createObjectURL !== undefined){
                  url = window.createObjectURL(img1);
                }else if(window.URL != undefined){
                  url = window.URL.createObjectURL(img1);
                }else if(window.webkitURL != undefined){
                  url = window.webkitURL.createObjectURL(img1);
                }
                this.src1= url;

                reader.readAsDataURL(img1);//readAsDataURL 可以将文件转base64格式
                reader.onload=function(e){

                  that.blob=that.dataURItoBlob(reader.result);
                }
              }else{

              }
            }
          },
        dataURItoBlob:function(dataURI){
            //base64解码
          let byteString = window.atob(dataURI.split(',')[1]);
          let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
          let T = mimeString.split('/')[1]
          let ab = new ArrayBuffer(byteString.length);
          let ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          return new Blob([ab], {type: mimeString});
        }
      },
      created(){
      }
    }
</script>

<style scoped>
  body,html,#AfterSales{
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
  #AfterSales{
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
  .tou>p{
    display: block;
    float: left;
    margin-left: 20px;
  }
  .main{
    width: 100%;
    background: white;
    float: left;
    margin-top: 30px;
    padding-bottom: 50px;
  }
  .nav{
    width: 960px;
    height: 40px;
    margin: 20px auto 0;
    background-color: #f2f2f2;
  }
  .nav ul li{
    line-height: 40px;
    text-align: center;
    float: left;
  }
  .nav ul li:nth-child(2),li:nth-child(3){
    width: 230px;
  }

  .products{
    width: 960px;
    height: 100px;
    border: 1px solid #41bbee;
    margin: 10px auto 0;
  }
  .products ul li{
    float: left;
  }
  .products ul li:nth-child(2),li:nth-child(3){
    text-align: center;
    line-height: 100px;
    width: 229px;
  }
  .products ul li img{
    margin: 20px 10px 0 100px;
    display: block;
    float: left;
  }
  .products ul li p{
    width: 240px;
    overflow: hidden;
    margin-top: 20px;
    word-wrap: break-word;
    word-break: break-all;
  }

  .excel {
    width:750px;
    margin: 0 auto;
  }
  /*.excel select{*/
    /*appearance:none;*/
    /*-moz-appearance:none;*/
    /*-webkit-appearance:none;*/
  /*}*/
  .excel label{
    margin-bottom: 20px;
    display: block;
  }
  .excel label span{
    color: #ff0000;
  }
  .excel label p{
    width: 88px;
    height: 30px;
    line-height: 30px;
    float: left;
  }
  .excel label select{
    width:200px;
    height: 30px;
  }
  .file-box{
    width: 88px;
    height: 30px;
    display: inline-block;
    position: relative;
    text-align: center;
    line-height: 30px;
    overflow: hidden;
    color:#333333;
    background-color: #ccc;
  }
  .file-btn{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    outline: none;
    background-color: transparent;
    filter:alpha(opacity=0);
    -moz-opacity:0;
    -khtml-opacity: 0;
    opacity: 0;

  }
  .excel img{
    display: block;
    margin-right: 10px;
  }
  .excel2{
    margin-left: 78px;
  }
  .excel2 p{
    margin: 10px 0;
    color: #ff2222;
  }
  .excel2 button{
    display: block;
    width: 200px;
    height: 30px;
    color: #f2f2f2;
    margin-top: 50px;
    border: 0;
    border-radius: 6px;
    background-color: #41bbee;
  }
  .excel2 img{
    width: 100px;
    height: 100px;
  }

</style>

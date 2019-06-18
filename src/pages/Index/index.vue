<template>
  <div :class="['index']" :id="user.id?'logindex':''" :style="{backgroundImage:'url('+bgc+')'}">
    <div class="header">
      <div class="left">
        <a href="" @click.prevent="goPage('Live')">直播</a>
        <a href="" @click.prevent="">视频</a>
        <a href="" @click.prevent="">图文</a>
        <a href="" @click.prevent="">语音</a>
      </div>
      <div class="right">
        <div v-if="!user.id">
          <a href="" @click.prevent="()=>{
        centerDialogVisible = true
        tag=0
        }">登录</a>/
          <a href="" @click.prevent="()=>{
        centerDialogVisible = true;
        tag=1
        }">注册</a>
        </div>
        <!--v-if="user.id"-->
       <div >
         <a href="" @click.prevent="()=>goPage('Mine')">杨亮礼遇</a>
       </div>
        <a href="" @click.prevent="" style="margin-left:.3rem;">更多</a>
      </div>

    </div>
    <el-dialog
      title="扫码登录"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <div v-if="tag==0?1:0" slot="title" class="title">
        <img src="../../assets/imgs/logo.png"/>
        <span>扫码登录</span>
      </div>
      <div v-if="tag==0?1:0">
        <div class="dialog">
          <div class="cont1">
            <div class="border">
              <img src="../../assets/imgs/qrcode.png"/>
            </div>
            <span>请使用o8oAPP扫码登录</span>
          </div>
          <div class="dialogcont2">
            <span>
              <i class="fa fa-shield" aria-hidden="true"></i> 安全
            </span> <span>
              <i class="fa fa-cloud-upload" aria-hidden="true"></i> 高效
            </span> <span>
              <i class="fa fa-etsy" aria-hidden="true"></i> 便捷
            </span>
          </div>
          <div class="footer">
            <div class="f1"><a href="" @click.prevent="tag=2">用户名登录</a> | </div>
            <div class="f2">
              <span>
                <a href="" @click.prevent="login">
                   <i class="fa fa-weixin" aria-hidden="true"></i>
                </a>
              </span>
              <span>
                <a href="">
                   <i class="fa fa-qq" aria-hidden="true"></i>
                </a>

              </span>
              <span>
                <a href="" @mouseover="ali='../../../static/imgs/alipay_active.png'" @mouseout="ali='../../../static/imgs/alipay.png'">
                  <img class="fa" :src="ali" alt="">
                </a>

              </span>
            </div>
            <div class="f3">
              <a href="" @click.prevent="tag=1">
                立即注册
              </a>

            </div>
          </div>
        </div>
      </div>

      <div v-if="tag==1?1:0" slot="title" class="title">
        <img src="../../assets/imgs/logo.png"/>
        <span>注册</span>
      </div>
      <div v-if="tag==1?1:0">
        <div class="dialog">
          <div class="cont1">
            <div class="form">
              <el-form :label-position="'left'"  :rules="rules" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名" prop="name" >
                  <el-input clearable v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="注册类型" prop="region">
                  <el-input  clearable v-model="formLabelAlign.region" placeholder="手机号码或邮箱地址"></el-input>
                </el-form-item>
                <el-form-item  label="登录密码" prop="pwd">
                  <el-input clearable type="password" v-model="formLabelAlign.pwd"></el-input>
                </el-form-item>
                <el-form-item  label="确认密码" prop="repwd">
                  <el-input clearable type="password" v-model="formLabelAlign.repwd"></el-input>
                </el-form-item>
              </el-form>
              <div class="vertify" style="display: flex;justify-content: space-between">
                <el-input clearable v-model="formLabelAlign.type" placeholder="验证码"></el-input>
                <el-button type="success" :disabled="!flag" @click="getCode">{{!isNaN(code)?code+'秒后重新获取':code}}</el-button>

              </div>


            </div>

          </div>
          <div class="dialogcont2">
            <div class="button">
              <el-button type="primary">立即注册</el-button>
            </div>

          </div>
          <div class="footer">
            <div class="f1"><a href="" @click.prevent="tag=0">扫码登录</a> | </div>
            <div class="f2">
              <span>
                <a href="" @click.prevent="login">
                   <i class="fa fa-weixin" aria-hidden="true"></i>
                </a>
              </span>
              <span>
                <a href="">
                   <i class="fa fa-qq" aria-hidden="true"></i>
                </a>

              </span>
              <span>
                <a href="" @mouseover="ali='../../../static/imgs/alipay_active.png'" @mouseout="ali='../../../static/imgs/alipay.png'">
                  <img class="fa" :src="ali" alt="">
                </a>

              </span>
            </div>
            <div class="f3">
              <a href="" @click.prevent="()=>{
                tag=2
                }">
                账号登陆
              </a>

            </div>
          </div>
        </div>
      </div>

      <div v-if="tag==2?1:0" slot="title" class="title">
        <img src="../../assets/imgs/logo.png"/>
        <span>登录</span>
      </div>
      <div v-if="tag==2?1:0">
        <div class="dialog">
          <div class="cont1">
            <div class="form">
              <el-form :label-position="'left'"  :rules="rules" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="登录密码">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
              </el-form>
              <div class="vertify" style="display: flex;justify-content: space-between">
                <el-input v-model="formLabelAlign.type" placeholder="验证码"></el-input>
                <el-button type="success">验证码</el-button>

              </div>


            </div>

          </div>
          <div class="dialogcont2">
            <div class="button">
              <el-button type="primary">立即登录</el-button>
            </div>

          </div>
          <div class="footer">
            <div class="f1"><a href="" @click.prevent="tag=0">扫码登录</a> | </div>
            <div class="f2">
              <span>
                <a href="" @click.prevent="login">
                   <i class="fa fa-weixin" aria-hidden="true"></i>
                </a>
              </span>
              <span>
                <a href="">
                   <i class="fa fa-qq" aria-hidden="true"></i>
                </a>

              </span>
              <span>
                <a href="" @mouseover="ali='../../../static/imgs/alipay_active.png'" @mouseout="ali='../../../static/imgs/alipay.png'">
                  <img class="fa" :src="ali" alt="">
                </a>

              </span>
            </div>
            <div class="f3">
              <a href="" @click.prevent="tag=1">
                去注册
              </a>

            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <div class="cont">
      <div class="cont1" :style="{marginTop:user.id?'.7rem':'2rem',paddingLeft:'1.9rem'}">
        <div style="width:4rem;height:1.7rem;">
          <img src="../../assets/imgs/logo.png" style="width:100%;height: 100%; "/>
        </div>
        <div class="div2">

          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">

            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>

          </el-input>

        </div>

      </div>
      <div v-if="!user.id" class="cont2">
        <div :class="['qrcode',{'showqr':qr?1:0}]">
          <b>扫码下载手机APP</b>
          <img src="../../assets/imgs/qrcode.png"/>
          <b>IOS·ANDROID</b>
        </div>
        <div class="border" @mouseover="showqr(1)" @mouseleave="showqr(0)">
          <i class="fa fa-qrcode" aria-hidden="true"></i>
        </div>
      </div>

    </div>

    <!--登陆以后的内容-->
    <div v-if="user.id" class="box">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我关注的" name="first">我关注的</el-tab-pane>
        <el-tab-pane label="导航" name="second">
          <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <div v-for="item in data" :key="item.index">{{item.name}}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="推荐" name="third">推荐</el-tab-pane>
        <el-tab-pane label="标签" name="fourth">标签</el-tab-pane>
        <el-tab-pane label="定制" name="five">定制</el-tab-pane>
      </el-tabs>
    </div>

    <Footer v-if="!user.id"></Footer>
  </div>
</template>

<script>
  import Footer from "../../components/Footer/Footer";

  export default {
    name: "index",
    components: {Footer},
    data() {
      var isNull=(rule,val,callback)=>{
        if(val==""||null||undefined)return callback(new Error("不能为空！") );
      }
      var checkTrim=(rule,val,callback)=>{
        isNull(rule,val,callback)
        if(val.indexOf(" ")>-1)return callback(new Error("不能包含空格！") );
      }
      var checkPhone=(rule,val,callback)=>{
        let p=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        let m= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(p.test(val)){
        }else{
          if(!m.test(val))return callback(new Error("请输入正确手机号或邮箱地址"))
        }
      }
      var checkPwd = (rule, val, cb) => {
        isNull(rule,val,cb)
        checkTrim(rule,val,cb)
      };
      var rePwd=(rule,val,cb)=>{
        if(val!=this.formLabelAlign.pwd)return cb(new Error("两次输入密码不一致！"))
      }
      return {
        code:"获取短信验证码",
        flag:true,
        user:{
          id:false
        },

        rules:{
          name:[{validator:checkTrim,trigger:"blur",}],
          region:[{validator:checkPhone,trigger:"blur",}],
          pwd: [
            { validator: checkPwd, trigger: 'blur' }
          ],
          repwd: [
            { validator: rePwd, trigger: 'change' }
          ]
        },
        count: 0,
        data: [],
        busy: false,
        activeName: 'second',
        ali:"../../../static/imgs/alipay.png",
        bgc: "",
        input3: "",
        qr: 0,
        centerDialogVisible: false,
        tag:0,
        login:{
          name:"",
          pwd:""
        },
        formLabelAlign: {
          name: '',
          region:'',
          type: '',
          pwd:"",
          repwd:""
        }
      }
    },
    methods: {
      getCode(){
        if(this.flag){
          this.flag=false;
          this.code=60;
          let s=setInterval( ()=> {
            --this.code;
            // console.log(this.code)
            if(this.code==0){this.flag=true;clearInterval(s);this.code="获取验证码"};
          },1000)
        }
      },
      loadMore: function() {
        this.busy = true
        setTimeout(() => {
          for (var i = 0, j = 10; i < j; i++) {
            this.data.push({name: this.count++ })
          }
          console.log(this.data)
          this.busy = false
        }, 1000)
      },
      load () {
        this.count += 2
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      loging(){

      },
      register(){

      },
      showqr(val) {
        this.qr = val
      },
      goPage(path) {
        this.$router.push({name: path, params: {data: 11}})
      },
      aa() {
        alert(1)
      },
      search() {

      }
    },
    mounted() {
      let data = {bgc: ""}
      this.bgc = data.bgc ? data.bgc : require("../../assets/imgs/indexbg.jpg");
    }
  }
</script>

<style scoped lang="scss">
  .index {
    color: white;
    width: 100%;
    height: 100%;
    background-size: 100% calc(100vh);
    background-repeat: no-repeat;

    .header {
      height: 0.5rem;
      line-height: 0.5rem;
      display: flex;
      width: 80%;
      margin: 0 auto;

      .left {
        flex: 1;
        a {
          margin-left: .5rem;
        }
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
      }
    }
    .cont {
      .cont1 {
        width: 80%;
        margin: 0 auto;
        margin-top:2rem;
        display: flex;
        .div2 {
          line-height: 1.8rem;
          height: 1.8rem;
        }
      }
    }
    .cont2 {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 2rem;
      position: absolute;
      bottom: 1.5rem;
      right: 0;
      .qrcode {
        display: none;
        opacity: 0;
        width: 2rem;
        height: 2.6rem;
        padding: .2rem;
        margin-right: -2rem;
        text-align: center;
        border: 1px solid gray;
        background: rgba(0, 0, 0, .6);;
        img {
          width: 2rem;
          height: 2rem;
          margin-top: .1rem;
        }
      }
      .showqr {
        display: block;
        animation: showqr 2s forwards;
      }
      @keyframes showqr {
        0% {
          opacity: 0;
          margin-right: -2rem
        }
        /*25%{opacity: 0.25;}*/
        /*50%{opacity: 0.5;}*/
        /*75%{opacity: 0.75;}*/
        100% {
          opacity: 1;
          margin-right: 0.2rem
        }
      }
      .border {
        width: 1rem;
        height: 1rem;
        z-index: 999;
        border: 1px solid white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        .fa-qrcode {
          font-size: .7rem;
        }
      }
      .border:hover {
        background: #fff;
      }
      .border:hover .fa-qrcode {
        color: gray;
      }
    }
    .title {
      color: black;
      display: flex;
      height: 1rem;
      line-height: 1rem;
      span {
        margin-left: .2rem;
        font-size: .33rem;
      }
      img {
        width: 1.8rem;
        height: 0.9rem;
      }
    }
    .dialog {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: -.5rem;
      /*padding-bottom: .2rem;*/

      .cont1 {
        /*width: 2.3rem;*/
        /*height:2rem;*/
        margin-top: .1rem;
        padding: .1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .form{
          margin-top:.2rem;
          width:5rem;
        }
        .border {
          border: 1px solid gray;
        }
        img {
          width: 100%;
          height: 70%;
        }
      }
      .dialogcont2 {
        width: 100%;
        display: flex;
        .button{
          margin:0 auto;
          margin-bottom: .2rem;
          margin-top: .2rem;
        }
        span {
          flex: 1;
          text-align: center;
        }
      }
      .footer {
        font-weight: 900;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #ff8080;
        font-size: .25rem;
        display: flex;
        span{
          display: inline-block;
          padding-top:.03rem;
        }
        a{
          color:#606266;
        }
        a:hover{
          color:#fff;
        }
        img{
          position: relative;
          top:.1rem;
        }
        .f1{
          width:1.5rem;
          padding-left:.1rem;
        }
        .f2,.f3{
          flex:1
        }
        .f3{
          text-align: right;
          padding-right: .1rem;
        }
        .fa {
          width: .45rem;
          height: .45rem;
          font-size: .35rem;
        }
      }
    }
  }
</style>
<style lang="scss">
   #logindex{
    background: #fff !important;
     color:black!important;
     .header{
       /*background: gray;*/
       a{
         color:black;
       }
     }
  }
  .index {
    .el-dialog{
      width:40% !important;
    }
    .el-input-group--append .el-input__inner {
      width: 7rem;
      height: .7rem;
    }
    .vertify{
      .el-input{
        width:4rem;
        margin-right: .1rem;
      }
    }
    .dialog{
      .el-button--primary{
        width:3rem;
      }
    }
    .el-dialog--center .el-dialog__body {
      padding: 0 !important;
    }
    .box{
      width:90%;
      background :#f5f7fa;
      margin:0 auto;
      color:black;
      .el-tabs__item{
        color:black;
      }

    }
  }


</style>

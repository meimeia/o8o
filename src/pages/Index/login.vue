<template>
  <div class="index">
    <el-dialog
      title="扫码登录"
      :visible.sycn="centerDialogVisible"
      width="30%"
      center>
      <!--扫码登录=============================-->
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
      <!--注册========================================================-->
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
      <!--登录============================-->
      <div v-if="tag==2?1:0" slot="title" class="title">
        <img src="../../assets/imgs/logo.png"/>
        <span>登录</span>
      </div>
      <div v-if="tag==2?1:0">
        <div class="dialog">
          <div class="cont1">
            <div class="form">
              <el-form :label-position="'left'"  :rules="rules" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名" prop="name">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="pwd">
                  <el-input v-model="formLabelAlign.pwd"></el-input>
                </el-form-item>
              </el-form>
              <!--<div class="vertify" style="display: flex;justify-content: space-between">-->
              <!--<el-input v-model="formLabelAlign.type" placeholder="验证码"></el-input>-->
              <!--<el-button type="success">验证码</el-button>-->

              <!--</div>-->


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
  </div>

</template>

<script>
    export default {
        name: "login",
      data(){
        var isNull=(rule,val,callback)=>{
          if(val==""||null||undefined)return callback(new Error("请输入用户名！") );
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
          if(val==""||null||undefined)return cb(new Error("请输入密码！") );
          checkTrim(rule,val,cb)
        };
        var rePwd=(rule,val,cb)=>{
          if(val!=this.formLabelAlign.pwd)return cb(new Error("两次输入密码不一致！"))
        }
          return{
            code:"获取短信验证码",
            flag:true,
            centerDialogVisible: false,
            tag:0,
            formLabelAlign: {
              name: '',
              region:'',
              type: '',
              pwd:"",
              repwd:""
            },
            ali:"../../../static/imgs/alipay.png",
            activeName: 'second',
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
          }
      },
      methods:{
        showLogin(val){
          // alert(1)
          this.centerDialogVisible = true;
          this.tag=val;
          console.log(this.centerDialogVisible);
        },
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
      }
    }
</script>

<style lang="scss">
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


</style>

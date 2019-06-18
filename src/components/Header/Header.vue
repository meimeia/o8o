<template>
  <div class="header">
    <div class="cont">
      <div class="left">
        <div class="l1">
          <img src="../../assets/imgs/logo.png"/>
        </div>
        <div class="l2">
        </div>
        <div class="l3">
          {{title}}
        </div>
      </div>
      <div class="right">
    </div>

<div class="user">
  <a href="" @click.prevent="goPage('Index')">首页</a>
  <a href="" @click.prevent="">日历</a>
  <a href="" @click.prevent="">消息</a>
  <a href="" @click.prevent="">设置</a>
  <a href="">
    <img src="../../../static/imgs/user.png" alt="">
  </a>
  <a href="" @click.prevent="goPage('Mine')">杨亮礼遇</a>

</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props:["title"],
    methods:{
      goPage(val){
        this.$router.push({name:val})
      }
    }
  }
</script>

<style scoped lang="scss">
.header{
  height: 1rem;
  font-size: .3rem;
  font-weight: 900;
  box-shadow:0px 12px 8px -12px #000; border-radius:10px;
  .user{
    img{
     position: relative;
      top:.03rem;
      width:.4rem;height:.4rem;
    }

  }
  .cont{
    display: flex;
    width:80%;
    margin:0 auto;
    line-height: 1rem;
  }
  a{
    color:black;
  }
  a:hover{
    color:#ff3300;
  }
  .left,.right{
    flex:1;
    display: flex;
  }
  .right{
    justify-content: flex-end;
    padding-right: .5rem;
  }
  .left{
    .l1,.l3{
      flex:1;
    }
    .l2,.l3{
      margin-left:.2rem;
    }
    .l1{
      width:1.8rem;
      height: .9rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .l2{
      width:1px;
      background: black;
      margin-top:.15rem;
      height:.7rem;
    }
  }
}
</style>

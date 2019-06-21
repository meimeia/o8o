<template>
  <el-row class="picture-index">
    <Header></Header>
    <el-row style="background-color: rgba(244, 246, 249, 1);">
      <el-row class="layout-center">
        <el-row class="pic-nav">
          <span>首页</span>
          <span>发现</span>
          <span>作品</span>
          <span>用户</span>
          <span>文章</span>
          <span>地区</span>
        </el-row>
        <el-row>
          <el-row type="flex" justify="center" align="middle" style="padding: .3rem 0;">
            <el-row class="cycle"></el-row>
            <h1 class="pic-title">首页推荐</h1>
            <el-row class="cycle"></el-row>
          </el-row>
          <el-row type="flex" justify="space-between" style="flex-wrap: wrap;">
            <el-row v-for="item in 16" :key="item" class="pic-list"></el-row>
          </el-row>
          <el-row class="pic-nav2" type="flex" justify="space-around" align="center">
            <span>人像</span>
            <span>风景</span>
            <span>生态</span>
            <span>纪实</span>
            <span>生活</span>
            <span>潜水</span>
            <span>航拍</span>
            <span>手机摄影</span>
            <span>查看更多</span>
          </el-row>
          <el-row type="flex" justify="center" align="middle" style="padding: .3rem 0;">
            <el-row class="cycle"></el-row>
            <h1 class="pic-title">摄影技巧</h1>
            <el-row class="cycle"></el-row>
          </el-row>
          <el-row type="flex" justify="space-between" style="flex-wrap: wrap;">
            <el-row v-for="item in 4" :key="item" class="pic-card m-20">
              <el-row type="flex">
                <el-row class="pic-holder"></el-row>
                <el-row class="pic-text">
                  <el-row class="pic-t1">我是左侧图片的大标题大标题大标题大标题大标题大标题大标题大标题</el-row>
                  <el-row class="pic-t2">我是小标题</el-row>
                </el-row>
              </el-row>
            </el-row>
          </el-row>
          <el-row class="text-center">
            <el-button class="lookMore">查看更多</el-button>
          </el-row>
          <el-row type="flex" align="middle" class="pt-20 pb-20">
            <el-row class="cycle"></el-row>
            <h1 class="pic-title">航拍专区</h1>
            <el-row class="cycle ml-100"></el-row>
            <h1 class="pic-title">手机摄影</h1>
          </el-row>
          <el-row type="flex" justify="space-between" style="flex-wrap: wrap;">
            <el-row v-for="item in 8" :key="item" class="pic-list">
              <el-button size="mini" type="success">查看详情</el-button>
            </el-row>
          </el-row>
          <!--<el-row type="flex" justify="space-around" align="center" style="flex-direction: column;padding-top: .3rem;">-->
            <!--<img src="./img/u769.png" alt="">-->
            <!--<img src="./img/u770.png" alt="">-->
            <!--<img src="./img/u771.png" alt="">-->
            <!--<img src="./img/u772.png" alt="">-->
          <!--</el-row>-->
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>
<script>

import Header from '@/components/Header/Header.vue'

export default {
  name: 'picture-index',
  components: { Header },
  data () {
    return {}
  }
}
</script>
<style lang="scss">
.picture-index {

  .layout-center {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
  }

  .pic-nav {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #333;
    padding: .1rem 0 0.05rem .2rem;
    margin-top: .4rem;
    text-align: center;

    span {
      width: .6rem;
      height: .4rem;
      padding: 0 20px;
      font-size: 18px;
      font-weight: bold;
      color: #333;
      line-height: .4rem;
    }
  }

  .cycle {
    width: .1rem;
    height: .1rem;
    border-radius: 50%;
    background: #5daf34;
    margin: 0 10px;
  }

  .pic-title {
    font-size: .5rem;
    font-weight: bold;
  }

  .pic-list {
    width: 2.5rem;
    height: 3rem;
    background: #ccc;
    margin: .1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
  }

  .pic-nav2 {
    font-size: .16rem;
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin: .2rem auto;

    span {
      &:hover {
        cursor: pointer;
        color: #E6A23C;
      }
    }
  }

  .pic-card {
    background-color: #fff;
    width: 45%;
  }

  .pic-holder {
    width: 3rem;
    height: 2rem;
    background-color: #ccc;
  }

  .pic-text {
    padding-left: .2rem;

    .pic-t1 {
      font-size: .2rem;
      font-weight: bold;
      color: #333333;
      padding: .2rem 0;
    }

    .pic-t2 {
      font-size: .12rem;
      color: #606266;
      padding: .2rem 0;
    }
  }

  .lookMore {
    background: #fff;
  }
}
</style>

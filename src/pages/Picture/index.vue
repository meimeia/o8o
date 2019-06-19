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
            <h2>首页推荐</h2>
            <el-row class="cycle"></el-row>
          </el-row>
          <el-row type="flex" justify="center" style="flex-wrap: wrap;">
            <el-row v-for="item in 16" :key="item" class="pic-list"></el-row>
          </el-row>
          <el-row type="flex" justify="space-around" align="center" style="flex-direction: column;padding-top: .3rem;">
            <img src="./img/u769.png" alt="">
            <img src="./img/u770.png" alt="">
            <img src="./img/u771.png" alt="">
            <img src="./img/u772.png" alt="">
          </el-row>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>
<script>

  import Header from '@/components/Header/Header.vue'

  export default {
    name: 'picture-index',
    components: {Header},
    data() {
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
    }

    .pic-list {
      width: 2.5rem;
      height: 3rem;
      background: #ccc;
      margin: .1rem;
    }
  }
</style>

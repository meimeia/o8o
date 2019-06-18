<template>
  <div>
    <Header :title="'直播'"></Header>
    <el-row class="livePage">
      <el-row class="title">测试使用</el-row>
    </el-row>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'

export default {
  name: 'Live',
  components: { Header }
}
</script>

<style lang="scss">
.livePage {
  .title{
    font-size: 30px;
    color: red;
  }
}
</style>

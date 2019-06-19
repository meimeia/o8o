<template>
  <el-row class="live-login">
    <el-row type="flex" justify="space-around" align="middle" style="flex-wrap: wrap;margin-top: 20px;">
      <el-row v-for="(item, index) in liveList" :key="index" class="liveList">
        <el-row class="liveSrc">

        </el-row>
        <el-row>
          <el-row type="flex">
            <el-row class="userFace">
              <img src="../../../../assets/imgs/u366.png" alt="" style="width:0.5rem;height:0.5rem;">
            </el-row>
            <el-row class="userInfo font-size-large">
              <el-row class="liveTitle">{{item.liveTitle}}</el-row>
              <el-row class="userName">{{item.userName}}</el-row>
            </el-row>
          </el-row>
          <el-row type="flex" justify="space-between" align="middle" class="liveElse">
            <el-row type="flex" align="middle">
              <img src="../../../../assets/imgs/u372.png" alt="" style="width:0.2rem;height:0.2rem;">
              <span class="font-size-small">{{item.looks}}</span>
            </el-row>
            <el-row type="flex">
              <img src="../../../../assets/imgs/u374.png" alt="" style="width:0.25rem;height:0.2rem;">
              <img src="../../../../assets/imgs/u370.png" alt=""
                   style="width:0.25rem;height:0.2rem;margin-left: 0.2rem;">
            </el-row>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
    <el-pagination style="text-align: center; margin-top: .2rem;font-size: 20px; padding: 20px 0;" background
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange" :current-page="1" :page-size="20"
                   layout="prev, pager, next, jumper"
                   :total="400">
    </el-pagination>
  </el-row>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      liveList: [{
        liveSrc: '',
        liveTitle: '直播标题限制12个字',
        userFace: '',
        userName: '主播名称',
        looks: 10000290
      },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        },
        {
          liveSrc: '',
          liveTitle: '直播标题限制12个字',
          userFace: '',
          userName: '主播名称',
          looks: 10000290
        }
      ]
    }
  },
  methods: {
    handleSizeChange () {

    },
    handleCurrentChange () {

    },
  }
}
</script>

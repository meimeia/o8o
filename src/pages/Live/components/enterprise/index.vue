<template>
  <el-row class="live-enterprise">
    <el-row class="self-back">
      <el-row style="padding: 20px 40px;">
        <el-row type="flex" align="middle">
          <img src="./img/u646.png" alt="" style="width: 1.7rem; height: 1.7rem;">
          <el-row style="margin-left: .2rem;">
            <el-row type="flex" align="middle">
              <el-row>{{liveInfo.liveName}}</el-row>
              <el-button class="live-zbj" round>直播间</el-button>
              <el-row style="margin-left: .3rem;">
                <img src="./img/u633.png" alt="" style="width: .3rem; height: .3rem;">
                <span>分享</span>
              </el-row>
              <span style="margin-left: 5rem;">举报</span>
            </el-row>
            <el-row class="live-else">
              <span>直播ID:{{liveInfo.liveId}}</span>
              <el-row class="live-line"></el-row>
              <span>粉丝群:{{liveInfo.liveGroup}}</span>
              <el-row class="live-line"></el-row>
              <span>联盟:{{liveInfo.liveUnion}}</span>
            </el-row>
            <el-row style="text-align: right;">
              <el-button class="live-flag" round>{{liveInfo.liveFlag}}</el-button>
            </el-row>
          </el-row>
        </el-row>
        <el-row class="live-line2"></el-row>
        <el-row type="flex" align="middle">
          <el-row style="text-align: center;">
            <img src="./img/u637.png" alt="" style="width: .5rem; height: .5rem;">
            <el-row class="font-size-mini">杨亮礼遇的媒体渠道</el-row>
          </el-row>
          <el-row type="flex" justify="space-around" style="width: 50%;margin-left: .5rem;">
            <img src="./img/u638.png" alt="" style="width: .4rem; height: .4rem;">
            <img src="./img/u639.png" alt="" style="width: .4rem; height: .4rem;">
            <img src="./img/u640.png" alt="" style="width: .4rem; height: .4rem;">
            <img src="./img/u643.png" alt="" style="width: .65rem; height: .4rem;">
          </el-row>
        </el-row>
      </el-row>
      <el-row class="live-nav">
        <el-row type="flex" justify="space-between" align="middle" style="width: 60%;">
          <el-row class="nav">主页</el-row>
          <el-row class="nav">视频</el-row>
          <el-row class="nav">文图</el-row>
          <el-row class="nav">相册</el-row>
          <el-row class="nav">文库</el-row>
          <el-row class="nav">简介</el-row>
        </el-row>
        <el-row class="font-size-mini" type="flex" justify="center" align="middle"
                style="text-align: center; width: 35%;">
          <el-row>
            <p>粉丝</p>
            <p>1121312132</p>
          </el-row>
          <el-row class="line" style="margin: 0 .4rem;"></el-row>
          <el-row>
            <p>关注</p>
            <p>2121312132</p>
          </el-row>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        liveInfo: {
          id: '',
          liveId: 12321321121,
          liveName: '我的直播间名称',
          liveGroup: 123213123,
          liveUnion: 121321213,
          liveFlag: '店铺名称'
        }
      }
    },
    methods: {
      handleSizeChange() {

      },
      handleCurrentChange() {

      },
    }
  }
</script>
<style lang="scss">
  .live-enterprise {
    margin-top: 40px;

    .self-back {
      background-color: rgba(242, 242, 242, 1);
      border: 1px solid #333333;
    }

    .live-zbj {
      margin-left: .5rem;
      color: #fff;
      font-weight: bold;
    }

    .live-else {
      display: flex;
      align-items: center;
      padding: 20px 0;

      .live-line {
        width: 2px;
        background: #333333;
        height: 0.2rem;
        margin: 0 .2rem;
      }

      span {
        width: 1.8rem;
        font-size: 0.16rem;
      }
    }

    .live-line2 {
      height: 1px;
      background: #333;
      margin: 20px 0;
    }

    .live-flag {
      background: #fff;
      border-color: #fff;
    }

    .live-nav {
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      padding: 10px 40px;
    }
  }
</style>

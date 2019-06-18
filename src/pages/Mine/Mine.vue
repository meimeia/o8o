<template>
  <div class="mine">
    <Header :title="'个人中心'"></Header>
    <div class="cont">
      <div class="cont1 outshadow">
        <div class="tool">
          <div class="icon1">
            <img src="../../../static/imgs/menu.png" alt="">
            <div>工具</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">搜索</a>
          </div>
          <div class="c_3">
            <a href="" @click.prevent="">云盘</a>
          </div>
          <div class="c_4">
            <a href="" @click.prevent="">日志</a>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="live">
          <div class="icon1">
            <img src="../../../static/imgs/live.png" alt="">
            <div>直播</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">视频直播</a>
          </div>
          <div class="c_3">
            <a href="" @click.prevent="">语音直播</a>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="media">
          <div class="icon1">
            <img src="../../../static/imgs/media.png" alt="">
            <div>媒体</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">我的媒体渠道</a>
          </div>
        </div>
        <div class="line">
        </div>
        <div class="dev">
          <div class="icon1">
            <img src="../../../static/imgs/programming.png" alt="">
            <div>开发</div>
          </div>
          <div class="c_2">
            <a href="" @click.prevent="">开发者中心</a>
          </div>

        </div>
      </div>

      <div class="cont2">
        <div class="left">
          <div style="width:100%;height:40%;margin-top: .1rem;">
            <img style="width:100%;height: 100%;object-fit: contain" src="../../../static/imgs/user_center.png" alt="">
          </div>
          <div style="text-align: center;margin-top:.1rem;">
            杨亮礼遇
          </div>
          <div style="width:80%;height: 1px;background: gray;margin:.07rem auto;">
          </div>
          <div class="cert">
            <span>认证</span>
            <span><i class="fa fa-id-card-o" aria-hidden="true"></i></span>
            <span><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
            <span><img style="width:.4rem;height: .3rem;" src="../../../static/imgs/mobile.png" alt=""> </span>

          </div>
          <div class="order" style="margin-top:.6rem;display: flex">
            <div><a href="" @click.prevent="">订单中心</a></div>
            <span style="width:1px;background: gray;height: .4rem;"></span>
            <div><a href="" @click.prevent="">账户设置</a></div>
          </div>
        </div>
        <div class="w_right">
          <div class="w_right_top" style="width:80%;margin:.3rem auto;">
            <div style="flex: none;width:2.5rem;">
              <div class="flex" style="height:.6rem;background: #ffcc00;">空气质量优</div>
              <div class="flex" style="height:.6rem;margin-top:.2rem;background-color:#0066ff;">青岛</div>
              <div class="flex" style="fone-weight:900;font-size: .4rem;margin-top:.2rem;">
                9月17日
              </div>
              <div class="flex" style="padding:0.1rem 0.3rem;justify-content: space-between">
                <b>周二</b>
                <b>八月初九</b>
              </div>
              <div class="flex" style="padding:0.1rem">
                <img style="width:.5rem;height: .5rem;object-fit: contain;margin-right: .2rem;"
                     src="../../../static/imgs/cloudy-sunny.png" alt="">25&#8451;～20&#8451;
              </div>
            </div>
            <div class="flex" style="border:1px solid gray;margin-left:.1rem;">
              区块链+产品溯源
            </div>
            <div class="flex" style="border:1px solid gray;margin-left:.1rem;">

            </div>
          </div>
          <span style="display: block;width:90%;height: 1px;background: gray;margin:0 auto;">

          </span>
          <div class="w_footer" style="flex:1;">
            <span>
              <a href="">今天</a>
            </span> <span>
              <a href="">明天</a>
            </span> <span>
              <a href="">后天</a>
            </span> <span>
              <a href="">09.21</a>
            </span> <span>
              <a href="">09.22</a>
            </span> <span>
              <a href="">我的日历</a>
            </span>
          </div>
        </div>
      </div>
      <div class="zhibo">
        <div class="z_top">
          <div style="border-right:1px solid gray;flex:none;width:2.5rem;">
            <a href="">我的直播间</a>
          </div>
          <!--<span></span>-->
          <div>
            <a href="">我的录播</a>
          </div>
          <div>
            <a href="">我的团队</a>
          </div>
          <div>
            <a href="">我的联盟</a>
          </div>
          <div>
            <a href="">我的粉丝</a>
          </div>
          <div>
            <a href="">我的信息</a>
          </div>
          <div>
            <a href="">我的订阅</a>
          </div>
          <div>
            <a href="">我要转播</a>
          </div>
        </div>
        <div class="z_btm">
          <div class="left" style="width:2.5rem;border-right: 1px solid gray;">
            <dl>
              <dt><a href="" @click.prevent="">个人中心</a></dt>
              <dd><a href="" @click.prevent="">直播数据</a></dd>
              <dd><a href="" @click.prevent="">我的佣金</a></dd>
              <dd><a href="" @click.prevent="">我的财产</a></dd>
              <dd><a href="" @click.prevent="">特权管理</a></dd>

            </dl>
            <dl>
              <dt>我要直播</dt>

              <dd><a href="" @click.prevent="">开播设置</a></dd>
              <dd><a href="" @click.prevent="">签约管理</a></dd>
              <dd><a href="" @click.prevent="">我的房管</a></dd>
              <dd><a href="" @click.prevent="">我的竞猜</a></dd>

            </dl>
            <dl>
              <dt>违规查询</dt>
              <dd> 违规查询</dd>

            </dl>
          </div>
          <div class="right">

          </div>
        </div>
      </div>
      <div class="zhibo">
        <div class="z_top">
          <div style="border-right:1px solid gray;flex:none;width:2.5rem;">
            <a href="">媒体接单平台</a>
          </div>
          <!--<span></span>-->
          <div>
            <a href="">首页</a>
          </div>
          <div>
            <a href="">订单</a>
          </div>
          <div>
            <a href="">资源</a>
          </div>
          <div>
            <a href="">指数</a>
          </div>
          <div>
            <a href="">收入</a>
          </div>
          <div>
            <a href="">关注</a>
          </div>
          <div>
            <a href="">添加资源</a>
          </div>
        </div>
        <div class="z_btm" style="display: flex">
          <div class="left" style="width:2.5rem;border-right: 1px solid gray;">
            <dl>
              <dt><a href="" @click.prevent="">计划管理</a></dt>
              <dd><a href="" @click.prevent="">CPS计划管理</a></dd>
              <dd><a href="" @click.prevent="">营销计划</a></dd>
              <dd><a href="" @click.prevent="">自选计划</a></dd>
              <!--<dd><a href="" @click.prevent="">特权管理</a></dd>-->

            </dl>
            <dl>
              <dt>企业招代理</dt>

              <dd><a href="" @click.prevent="">行业好货市场</a></dd>
              <dd><a href="" @click.prevent="">我关注的</a></dd>
              <!--<dd><a href="" @click.prevent="">我的房管</a></dd>-->
              <!--<dd><a href="" @click.prevent="">我的竞猜</a></dd>-->

            </dl>
            <dl>
              <dt>企业招代言人</dt>
              <dd> 高拥精选市场</dd>
              <dd> 我关注的</dd>

            </dl>
          </div>
          <div class="right">
             <div class="cont" style="width:80%;margin:.4rem .4rem;">
                <div style="margin:.2rem;">
                  待处理订单
                </div>
               <div style="height: 1px ;background: gray;width:100%;margin:.2rem auto;"></div>
               <div class="order_btm" >
                 <div style="background: #f4f9fc;flex:none;width:50%;justify-content: flex-start;align-items: flex-start;flex:none;">
                    <div style="flex:none;padding-top: .2rem;">
                      软文订单
                    </div>
                   <div style="flex:1;width: 100%;display: flex">
                     <div class="flex" style="flex-direction: column">
                       <span>0</span><b>待接单</b>
                     </div>
                    <div class="flex" style="flex-direction: column">
                      <span>0</span><b>待执行</b>
                    </div>
                     <div class="flex" style="flex-direction: column">
                       <span>0</span><b>可执行</b>
                     </div>


                   </div>
                 </div>
                 <div style="background-color:#f4f9fc;">
                    <span>0</span>
                   <span>已派单</span>
                 </div>
                 <div style="background-color:#f4f9fc;">
                   <span>0</span>
                   <span>投诉申诉</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>



      <div class="zhibo">
        <div class="z_top">
          <div style="border-right:1px solid gray;flex:none;width:2.5rem;">
            <a href="">开发者中心</a>
          </div>
          <!--<span></span>-->
          <div>
            <a href="">资源中心</a>
          </div>
          <div>
            <a href="">管理中心</a>
          </div>
          <div>
            <a href="">数据中心</a>
          </div>
          <div>
            <a href="">账号中心</a>
          </div>
          <div>
            <a href="">开发者认证</a>
          </div>

        </div>
        <!--<div class="z_btm">-->
          <!--<div class="left" style="width:2.5rem;border-right: 1px solid gray;">-->
            <!--<dl>-->
              <!--<dt><a href="" @click.prevent="">个人中心</a></dt>-->
              <!--<dd><a href="" @click.prevent="">直播数据</a></dd>-->
              <!--<dd><a href="" @click.prevent="">我的佣金</a></dd>-->
              <!--<dd><a href="" @click.prevent="">我的财产</a></dd>-->
              <!--<dd><a href="" @click.prevent="">特权管理</a></dd>-->

            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>我要直播</dt>-->

              <!--<dd><a href="" @click.prevent="">开播设置</a></dd>-->
              <!--<dd><a href="" @click.prevent="">签约管理</a></dd>-->
              <!--<dd><a href="" @click.prevent="">我的房管</a></dd>-->
              <!--<dd><a href="" @click.prevent="">我的竞猜</a></dd>-->

            <!--</dl>-->
            <!--<dl>-->
              <!--<dt>违规查询</dt>-->
              <!--<dd> 违规查询</dd>-->

            <!--</dl>-->
          <!--</div>-->
          <!--<div class="right">-->

          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../../components/Header/Header";
  import {mapActions} from "vuex"

  export default {
    name: "Mine",
    components: {Header},
    methods: {
      ...mapActions("common", ["getDataState"])
    },
    mounted() {
      let obj = {
        url: "/ajax/movieOnInfoList?token="
      }
      this.getDataState(obj)
    }
  }
</script>

<style scoped lang="scss">
  .order_btm{
    display: flex;

    div{
      flex:1;
      margin-left:.3rem;
    }
  }
  .order_btm>div{
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .zhibo {
    /*height: 6rem;*/
    border: 1px solid gray;
    margin-top: .3rem;
    display: flex;
    flex-direction: column;
    margin-bottom: .2rem;
  }

  .z_top {
    display: flex;
    background-color: #f2f2f2;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: .9rem;
    }
  }

  .z_btm {
    display: flex;
    flex: 1;
    .left {
      height: 100%;
      dl{
        padding-top:.2rem;
        dt{
          height: .4rem;
          margin-left:.2rem;
          font-size: .3rem;
          font-weight: 600;
          line-height: .4rem;
        }
        dd{
          margin-left:.35rem;
          height: .5rem;
          line-height: .5rem;
        }
      }
    }
    .right{
      flex:1
    }
  }

  .w_right {
    flex: 1;
    display: flex;
    flex-direction: column;
    /*padding:.3rem;*/
  }

  .w_footer {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      flex: 1;
      text-align: center;
    }
  }

  .w_right_top {
    display: flex;;
    div {
      flex: 1;
    }
  }

  .cert {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    i {
      color: red;
      display: inline-block;
      font-size: .4rem;
    }
    .fa-mobile {
      font-size: .4rem;
    }
  }

  .order {
    display: flex;
    div {
      flex: 1;
      text-align: center;
    }
  }

  .mine {
    a {
      color: black;
    }
    a:hover {
      color: #c53518;
    }
    .cont {
      .icon1 {
        text-align: center;
      }
      width: 80%;
      margin: 0 auto;
      .cont1 {
        height: 1.3rem;
        display: flex;
        margin-top: .3rem;
        img {
          width: .6rem;
          height: .6rem;
        }
        .tool, .media, .live, .dev {
          margin-left: .1rem;
          display: flex;
          flex: 1;
          justify-content: center;
          align-items: center;
          div {
            flex: 1
          }
        }
      }
    }
    .cont2 {
      display: flex;
      height: 5rem;
      margin-top: .2rem;
      border: 1px solid #797979;
      .left {
        width: 3rem;
        height: 100%;
        border-right: 1px solid #797979;
      }
    }
  }
</style>

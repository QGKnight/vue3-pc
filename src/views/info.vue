<template>
  <div class="page">
    <div class="main-auto page-main">
      <div class="mainleft">
        <div class="head">
          <span>个人中心</span>
          <img src="../assets/home/new/person.png" alt />
        </div>
        <div class="model">
          <img src="../assets/home/new/avatar.png" alt />
          <div class="box">
            <div class="cell">客户编号：89892</div>
            <div class="cell">客户名称：木村拓哉</div>
            <div class="cell">手机号码：166xxxxx520</div>
          </div>
        </div>
        <div class="foot">
          <div class="cell">
            <router-link to="/info/msg">
              <img src="../assets/home/new/geren.png" alt />
              <span :class="{actived:$route.meta.type=='msg'}">个人信息</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link to="/info/password">
              <img src="../assets/home/new/pass.png" alt />
              <span :class="{actived:$route.meta.type=='password'}">修改密码</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link to="/info/result">
              <img src="../assets/home/new/jieguo.png" alt />
              <span :class="{actived:$route.meta.type=='result'}">查询结果</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link to="/info/password">
              <img src="../assets/home/new/project.png" alt />
              <span>我的项目</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link to="/info/upPage">
              <img src="../assets/home/new/zhuanrang.png" alt />
              <span :class="{actived:$route.meta.type=='upPage'}">项目申报</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link to="/info/password">
              <img src="../assets/home/new/record.png" alt />
              <span>交易记录</span>
            </router-link>
          </div>
          <div class="cell">
            <router-link to="/info/password">
              <img src="../assets/home/new/shoucang.png" alt />
              <span>我的收藏</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="main-right">
        <div class="head">
          <div class="left">
            <img src="../assets/home/new/biaoge.png" alt />
            <span>{{$route.meta.title}}</span>
          </div>
          <div class="right">
            <div v-if="$route.meta.showFlag">
              <el-input placeholder="请输入关键字" v-model="name" clearable></el-input>
              <span>搜索</span>
            </div>
          </div>
        </div>
        <div class="right-main">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="less">
.page {
  background: #fff;
  margin-top: 20px;
  .page-main {
    display: flex;
    justify-content: space-between;
    .mainleft {
      width: 300px;
      box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
      .head {
        width: 100%;
        height: 75px;
        background: rgba(126, 206, 244, 1);
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          margin-left: 55px;
          margin-right: 48px;
          font-size: 20px;
          font-weight: bold;
          font-style: italic;
          color: rgba(255, 255, 255, 1);
        }
        img {
          width: 63px;
          height: 62px;
          margin-top: 7px;
        }
      }
      .model {
        margin-top: 17px;
        padding: 25px 15px;
        background: #e5f5fd;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 82px;
          height: 82px;
          margin-right: 17px;
        }
        .box {
          .cell {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(18, 18, 18, 1);
            line-height: 30px;
          }
        }
      }
      .foot {
        margin-top: 17px;
        padding: 25px 15px;
        background: #e5f5fd;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .cell {
          width: 30%;
          margin-bottom: 44px;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            img {
              width: 66px;
              height: 66px;
            }
            span {
              margin-top: 7px;
              font-size: 14px;
              font-weight: 600;
              font-family: PingFang SC;
              color: rgba(18, 18, 18, 1);
            }
            .actived {
              color: #015293;
            }
          }
        }
      }
    }
    .main-right {
      width: 950px;
      .head {
        height: 75px;
        background: rgba(229, 245, 253, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        .left {
          img {
            width: 28px;
            height: 28px;
            margin-right: 18px;
          }
          span {
            font-size: 20px;
            font-weight: bold;
            color: rgba(1, 82, 147, 1);
          }
        }
        .right {
          div {
            display: flex;
            align-items: center;
            span {
              margin-left: 15px;
              display: inline-block;
              width: 73px;
              height: 38px;
              line-height: 38px;
              text-align: center;
              font-size: 16px;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              border-radius: 5px;
              background: #015293;
            }
          }
        }
      }
      .right-main {
        min-height: 600px;
        margin-top: 14px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
      }
    }
  }
}
</style>
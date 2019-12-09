<template>
  <div class="page">
    <div class="main-auto page-head">
      <div class="btns">资源类项目</div>
      <div class="right">
        <el-input
          placeholder="请输入内容"
          v-model="word"
          class="input-with-select"
          prefix-icon="el-icon-search"
        >
          <el-button slot="append" class="searchBtn">查询</el-button>
        </el-input>
      </div>
    </div>
    <div class="main-auto filter-box">
      <div class="items">
        <div class="label">项目类型：</div>
        <div class="cell">
          <div v-for="item in 13">农村土地经营权</div>
        </div>
      </div>
      <div class="items">
        <div class="label">面积（亩/平方米）：</div>
        <div class="cell">
          <div v-for="item in 13">10以下</div>
        </div>
      </div>
      <div class="items">
        <div class="label">所在地区：</div>
        <div class="cell">
          <div v-for="item in 13">自贡市</div>
        </div>
      </div>
    </div>
    <div class="cond main-auto">
      <div class="left">
        <div class="item">
          <span>按面积</span>
          <img src alt />
        </div>
        <div class="item">
          <span>按流转年限</span>
          <img src alt />
        </div>
        <div class="item">
          <span>按价格</span>
          <img src alt />
        </div>
        <div class="item">
          <span>按最新</span>
          <img src alt />
        </div>
      </div>
      <div class="right" @click="changeItem">
        <img src alt />
        <span>图文排列</span>
      </div>
    </div>
    <div class="list-main main-auto" v-if="!showFlag">
      <div class="items" v-for="item in 8">
        <img src="../assets/404.gif" alt />
        <div class="msg-main">
          <div class="title">彭州市生平镇泉村5组、6...</div>
          <div class="tips">当前价：---</div>
          <div class="tips">起始价：400.00元</div>
          <div class="tips">距开始：待定</div>
        </div>
      </div>
    </div>
    <div class="lists main-auto" v-if="showFlag">
      <div class="list-item">
        <div>标的名称</div>
        <div>组织方</div>
        <div>当前价格</div>
        <div>竞价状态</div>
      </div>
      <div class="list-item" v-for="item in 6">
        <div>彭州市三界方一村10组、11组...</div>
        <div>绵阳市江油市</div>
        <div>23.00元</div>
        <div>尚未开始</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      showFlag:false,
      number: "",
      word: ""
    };
  },
  methods: {
    changeItem(){
      this.showFlag=!this.showFlag;
    }
  }
};
</script>
<style scoped lang="less">
.page {
  background: #fff;
  margin-top: 20px;
  .page-head {
    height: 50px;
    border-bottom: 2px solid #015293;
    display: flex;
    justify-content: space-between;
    .btns {
      width: 132px;
      height: 100%;
      background: rgba(1, 82, 147, 1);
      font-size: 18px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 50px;
      border-radius: 5px 5px 0 0;
    }
    .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 300px;
      span {
        display: inline-block;
        width: 200px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(1, 82, 147, 1);
        margin-left: 14px;
      }
      .el-button {
        background: #015293;
        color: #fff;
      }
    }
  }
  .filter-box {
    width: 1250px;
    padding: 38px 25px 0 25px;
    background: rgba(255, 248, 240, 1);
    .items {
      display: flex;
      justify-content: space-between;
      .label {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(18, 18, 18, 1);
        margin-right: 55px;
      }
      .cell {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        div {
          padding: 0 17px;
          margin-bottom: 29px;
        }
      }
    }
  }
  .cond {
    height: 68px;
    background: rgba(240, 251, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      flex-direction: row;
      .item {
        padding: 0 28px;
        span {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
        }
      }
    }
    .right {
      margin-right: 52px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(1, 82, 147, 1);
    }
  }
  .list-main {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .items {
      width: 280px;
      height: 320px;
      margin-bottom: 26px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 16px 0px rgba(194, 194, 194, 0.2);
      img {
        width: 276px;
        height: 159px;
        border-radius: 5px 5px 0px 0px;
      }
      .msg-main {
        padding: 14px;
        .title {
          font-size: 18px;
          font-weight: bold;
          color: rgba(18, 18, 18, 1);
          margin-bottom: 18px;
        }
        .tips {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          line-height: 28px;
        }
      }
    }
  }
  .lists {
    .list-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 68px;
      &:nth-child(1) {
        background: #7ecef4;
        height: 68px;
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      div {
        text-align: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(18, 18, 18, 1);
        &:nth-child(1) {
          width: 40%;
        }
        &:nth-child(2) {
          width: 25%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          width: 20%;
        }
      }
    }
  }
}
</style>
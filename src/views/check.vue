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
        <div class="label">资产类别：</div>
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
          <img src="../assets/home/new/down.png" alt />
        </div>
        <div class="item">
          <span>按流转年限</span>
          <img src="../assets/home/new/down.png" alt />
        </div>
        <div class="item">
          <span>按价格</span>
          <img src="../assets/home/new/down.png" alt />
        </div>
        <div class="item">
          <span>按最新</span>
          <img src="../assets/home/new/down.png" alt />
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="lists main-auto">
      <div class="list-itemed">
        <div>项目编号</div>
        <div>产权名称</div>
        <div>交易地点</div>
        <div></div>
      </div>
      <div class="list-item" v-for="item in 12">
        <div>23.00元</div>
        <div>彭州市三界方一村10组、11组...</div>
        <div>绵阳市江油市</div>
        <div>
          <span @click="jumpTo('/projectDetail')">查看</span>
        </div>
      </div>
    </div>
    <div class="page-size main-auto">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
        background
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      showFlag: false,
      number: "",
      word: "",
      currentPage: 5
    };
  },
  methods: {
    changeItem() {
      this.showFlag = !this.showFlag;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
        margin-right: 25px;
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
          margin-right: 8px;
        }
      }
    }
    .right {
      margin-right: 52px;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 13px;
      }
      span {
        font-size: 16px;
        // font-family: PingFang SC;
        font-weight: 500;
        color: rgba(1, 82, 147, 1);
      }
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
        position: relative;
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
        .qian {
          position: absolute;
          width: 68px;
          height: 29px;
          right: -4px;
          bottom: 53px;
          background: url("../assets/home/new/qian.png") no-repeat;
          background-size: cover;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 25px;
        }
      }
    }
  }
  .lists {
    margin-top: 48px;
    .list-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 68px;
      &:nth-child(even) {
        background: #fafafa;
      }
      &:nth-child(odd) {
        background: #f0fbff;
      }
      div {
        text-align: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(18, 18, 18, 1);
        &:nth-child(1) {
          width: 15%;
        }
        &:nth-child(2) {
          width: 50%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          width: 20%;
          display: flex;
          justify-content: center;
          span {
            width: 70px;
            height: 30px;
            line-height: 30px;
            background: rgba(255, 191, 101, 1);
            border-radius: 5px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
    .list-itemed {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 68px;
      background: #7ecef4;
      div {
        text-align: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #fff;
        &:nth-child(1) {
          width: 15%;
        }
        &:nth-child(2) {
          width: 50%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          width: 20%;
          display: flex;
          justify-content: center;
          span {
            width: 70px;
            height: 30px;
            line-height: 30px;
            background: rgba(255, 191, 101, 1);
            border-radius: 5px;
            font-size: 14px;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
  .page-size {
    text-align: center;
    margin-top: 48px;
    .el-pager {
      li {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(18, 18, 18, 1);
      }
    }
  }
}
</style>
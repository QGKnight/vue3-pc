<template>
  <div class="page">
    <div class="main-auto page-head">
      <div class="btns-box">
        <div :class="{actived:currentIndex==1}" @click="changeItem(1)">产权交易指南</div>
        <div :class="{actived:currentIndex==2}" @click="changeItem(2)">产权交易流程</div>
      </div>
      <div class="right">
        <span>关键字:</span>
        <el-input placeholder="请输入内容" v-model="word" class="input-with-select">
          <el-button slot="append" class="searchBtn">查询</el-button>
        </el-input>
      </div>
    </div>
    <div class="main-auto list">
      <div class="list-nav">
        <div class="left">
          <span>交易规则标题</span>
        </div>
        <div class="right">发布时间</div>
      </div>
      <div class="list-main">
        <div class="cell" v-for="item in 7">
          <div class="left">
            <span class="tip">汝州市农村产权交易所有限责任公司 交易服务费收费标准公告（试行）</span>
          </div>
          <div class="right">2019-12-11</div>
        </div>
      </div>
    </div>
    <div class="page-tion">
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
      currentIndex: 1,
      number: "",
      word: "",
      currentPage: 5
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    changeItem(num) {
      this.currentIndex = num;
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
    .btns-box {
      display: flex;
      flex-direction: row;

      align-items: center;
      div {
        height: 100%;
        padding: 0 12px;
        margin-right: 3px;
        background: rgba(126, 206, 244, 1);
        border-radius: 5px 5px 0 0;
        line-height: 50px;
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      .actived {
        background: #015293;
      }
    }
    .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 400px;
      span {
        display: inline-block;
        width: 80px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(1, 82, 147, 1);
        margin-left: 14px;
      }
      .el-button {
        background: #015293;
        color: #fff;
        width:73px;
        height:40px;
        border-radius: 0 2px 2px 0;
        border:1px solid #015293;
      }
    }
  }
  .list {
    margin-top: 29px;

    .list-nav {
      height: 68px;
      background: #7ecef4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 81px 0 51px;
      font-size: 18px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      .left {
        width:40%;
        text-align: center;
      }
    }
    .list-main {
      width: 100%;
      background: rgba(240, 251, 255, 1);
      .cell {
        padding: 0 68px 0 51px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 68px;
        &:nth-child(even) {
          background: #fafafa;
        }
        &:nth-child(odd) {
          background: #f0fbff;
        }
        .left {
          .num {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
            margin-right: 62px;
          }
          .tip {
            font-size: 16px;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
          }
        }
        .right {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
  }
  .page-tion {
    margin-top: 48px;
    text-align: center;
  }
}
</style>
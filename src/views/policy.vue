<template>
  <div class="page">
    <div class="main-auto page-head">
      <div class="btns">
        <div class="btn-one" :class="{actived:currentIndex==0}" @click="changeItem(0)">国家法规</div>
        <div class="btn-one" :class="{actived:currentIndex==1}" @click="changeItem(1)">汝州法规</div>
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
          <span>最新动态</span>
        </div>
        <div class="right">发布日期</div>
      </div>
      <div class="list-main">
        <div class="cell" v-for="item in 7">
          <div class="left">
            <span class="tip">汝州市农村产权交易所有限责任公司 交易服务费收费标准公告（试行）</span>
          </div>
          <div class="right">2019-12-11</div>
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
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      number: "",
      word: "",
      currentIndex: 0,
      currentPage:1
    };
  },
  methods: {
    changeItem(num) {
      this.currentIndex = num;
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
      display: flex;
      flex-direction: row;
      .btn-one {
        padding: 0 15px;
        height: 100%;
        background: #7ecef4;
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: 50px;
        border-radius: 5px 5px 0 0;
        margin-right: 3px;
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
        width: 50%;
        text-align: center;
      }
      .right {
        width: 20%;
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
        .left {
          width: 50%;
          text-align: center;

          .tip {
            font-size: 16px;
            font-weight: 500;
            color: rgba(102, 102, 102, 1);
          }
        }
        .right {
          width: 20%;
          text-align: center;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
      }
    }
    .page-tion{
        margin-top:48px;
        width:100%;
        text-align: center;
    }
  }
}
</style>
<template>
  <div class="page">
    <div class="page-main">
      <div class="celled">
        <div class="num">项目编号</div>
        <div class="name">项目名称</div>
        <div class="much">费用金额</div>
        <div class="type">费用类型</div>
        <div class="status">状态</div>
        <div class="way">付款方式</div>
        <div class="tool"></div>
      </div>
      <div class="cell" v-for="item in 8" @click="getRe">
        <div class="num">121355</div>
        <div class="name">汝州市农村产权交易所...</div>
        <div class="much">0.00</div>
        <div class="type">保证金</div>
        <div class="status">已退回</div>
        <div class="way">支付宝</div>
        <div class="tool">
          <span>申诉</span>
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
      currentPage: 6
    };
  },
  methods: {
    getRe() {
      this.$alert("申诉内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    jumpPage(id) {
      this.$router.push({ path: "/info/edit", query: { id: id } });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    cancelTool(index) {
      this.$confirm("此操作将永久删除此条数据！, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style scoped lang="less">
.page {
  .page-main {
    .page-tion {
      margin-top: 48px;
      width: 100%;
      text-align: center;
    }
    .cell {
      height: 68px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #eee;
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
      }
      .num {
        width: 10%;
      }
      .name {
        width: 20%;
      }
      .much {
        width: 20%;
      }
      .type {
        width: 10%;
      }
      .status {
        width: 10%;
      }
      .way {
        width: 15%;
      }
      .tool {
        width: 15%;

        span {
          padding: 5px 18px;
          background: rgba(255, 191, 101, 1);
          border-radius: 5px;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .celled {
      width: 100%;
      height: 74px;
      background: rgba(126, 206, 244, 1);
      display: flex;
      flex-direction: row;
      align-items: center;
      div {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      .num {
        width: 10%;
      }
      .name {
        width: 20%;
      }
      .much {
        width: 20%;
      }
      .type {
        width: 10%;
      }
      .status {
        width: 10%;
      }
      .way {
        width: 15%;
      }
      .tool {
        width: 15%;
      }
    }
  }
}
</style>
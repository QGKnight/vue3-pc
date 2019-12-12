<template>
  <div class="page">
    <div class="page-main">
      <div class="cell" v-for="item in 8">
        <div class="name">•成都农村产权交易所有限责任公司</div>
        <div class="time">2019年12月12日</div>
        <div class="status">成功</div>
        <div class="tool">
          <span class="look" @click="jumpPage(item)">查看</span>
          <span @click="cancelTool(item)">删除</span>
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
    padding: 25px;
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
      &:last-child {
        border: none;
      }
      div {
        text-align: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
      .name {
        width: 40%;
      }
      .time {
        width: 25%;
      }
      .status {
        width: 15%;
      }
      .tool {
        flex: 1;
        span {
          display: inline-block;
          width: 70px;
          height: 30px;
          line-height: 30px;
          background: rgba(126, 206, 244, 1);
          border-radius: 5px;
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          margin-right: 18px;
        }
        .look {
          background: rgba(255, 191, 101, 1);
        }
      }
    }
  }
}
</style>
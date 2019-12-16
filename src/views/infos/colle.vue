<template>
  <div class="page">
    <div class="page-main">
      <div class="celled">
        <div class="name">标题</div>
        <div class="time">发布时间</div>
        <div class="tool"></div>
      </div>
      <div class="cell" v-for="item in 8">
        <div class="name">•汝州市农村产权交易所有限责任公司</div>
        <div class="time">2019-12-12</div>
        <div class="tool">
          <img src="../../assets/home/new/cang.png" alt />
          <span class="look" @click="jumpPage(item)">取消收藏</span>
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
    // padding: 25px;
    .page-tion {
      margin-top: 48px;
      width: 100%;
      text-align: center;
    }
    .celled {
      height: 68px;
      display: flex;
      flex-direction: row;
      align-items: center;
      background: #7ecef4;
      div {
        text-align: center;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      .name {
        width: 55%;
      }
      .time {
        width: 25%;
      }

      .tool {
        flex: 1;
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
          margin-right: 16px;
        }
        span {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
        }
      }
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
        width: 55%;
      }
      .time {
        width: 25%;
      }

      .tool {
        flex: 1;
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
          margin-right: 16px;
        }
        span {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
        }
      }
    }
  }
}
</style>
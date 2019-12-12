<template>
  <div class="page">
    <div class="boxs">
      <dev class="cell">
        <span>旧密码：</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </dev>
      <dev class="cell">
        <span>新密码：</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </dev>
      <dev class="cell">
        <span>确认密码：</span>
        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
      </dev>
      <div class="btns">确认修改</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      name: ""
    };
  },
  methods: {}
};
</script>
<style scoped lang="less">
.page {
  padding: 25px;
  .boxs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
  }
  .cell {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 500px;
    margin-top: 20px;
    span {
      display: inline-block;
      width: 120px;
      //   text-align: right;
      margin-right: 17px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(1, 82, 147, 1);
    }
    .el-input {
      width: 557px;
    }
  }
  .btns {
    margin-top:100px;
    width: 130px;
    height: 40px;
    line-height: 40px;
    background: rgba(126, 206, 244, 1);
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
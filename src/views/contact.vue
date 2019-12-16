<template>
  <div class="page">
    <div class="main-auto page-main">
      <div class="head">
        <img src="../assets/home/new/phone.png" alt />
        <span>联系我们</span>
      </div>
      <div class="box">
        <div class="cell">
          <div class="left">汝州产权交易中心</div>
          <div class="right">025-26565323</div>
        </div>
        <div class="cell">
          <div class="left">汝州产权交易中心</div>
          <div class="right">025-26565323</div>
        </div>
        <div class="cell">
          <div class="left">汝州产权交易中心</div>
          <div class="right">025-26565323</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page",
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
  .head {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: bold;
    font-style: italic;
    color: rgba(1, 82, 147, 1);
    img{
      width:33px;
      height:21px;
      margin-right:21px;
    }
  }
  .box {
    margin: 0 auto;
    width: 80%;
    background: #f0fbff;
    .cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 68px;
      padding: 0 40px;

      div {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(1, 82, 147, 1);
      }
    }
  }
}
</style>



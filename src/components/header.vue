<template>
  <div class="page">
    <div class="header">
      <div class="header-box">
        <div class="logo-box">
          <div class="left">
            <img src="../assets/home/new/logo.png" @click="jumpPage('/home/index')" alt />
          </div>
          <div class="right">
            <div class="register" @click="jumpPage('/register')">
              <img src="../assets/home/new/register.png" alt />
              <span>注册</span>
            </div>
            <div class="login" @click="jumpPage('/login')">
              <img src="../assets/home/new/login.png" alt />
              <span>登录</span>
            </div>
          </div>
        </div>
        <div class="nav-box">
          <div class="items" @click="jumpPage('/home/index')">首页</div>
          <div class="items" @click="jumpPage('/home/property')">产权信息</div>
          <div class="items" @click="jumpPage('/home/deal')">成交公告</div>
          <div class="items" @click="jumpPage('/home/guide')">交易指南</div>
          <div class="items" @click="jumpPage('/home/check')">图像核对</div>
          <div class="items" @click="jumpPage('/home/chart')">大数据分析</div>
          <div class="items" @click="jumpPage('/home/news')">新闻资讯</div>
          <div class="items" @click="jumpPage('/home/contact')">联系我们</div>
          <div class="items" @click="jumpPage('/info/msg')">个人中心</div>
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
  methods: {
      jumpPage(path){
          this.$router.push(path)
      }
  }
};
</script>
<style scoped lang="less">
.page {
  .header {
    width: 100%;
    height: 250px;
    position: relative;
    background: url('../assets/home/new/banner9.png')no-repeat;
    background-size: cover;

    .header-box {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 150px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 27px 0px rgba(194, 194, 194, 0.2);
      opacity: 0.8;
      .nav-box {
        width: 1288px;
        margin: 0 auto;
        height: 60px;
        display: flex;
        flex-direction: row;
        align-items: center;
        .items {
          flex: 1;
          text-align: center;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
        }
      }
      .logo-box {
        width: 1288px;
        margin: 15px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right {
          display: flex;
          flex-direction: row;
          div {
            padding: 5px 15px;
            background: yellow;
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            border-radius: 5px;
            margin: 0 15px;
          }
          .register {
            background: #fa970a;
          }
          .login {
            background: #015293;
          }
        }
      }
    }
  }
}
</style>
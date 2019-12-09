<template>
  <div class="login">
    <div class="navBar main-auto">
      <img class="left" src="../assets/home/new/logo.png" alt />
      <div class="right">
        <img src="../assets/home/new/iphone.png" alt />
        <div class="right-num">
          <span class="tips">服务热线</span>
          <span class="mobile">962356</span>
        </div>
      </div>
    </div>
    <div class="login-main">
      <img src="../assets/auth/login-bg.png" alt />
      <div class="form-box">
        <div class="head">
          <img src="../assets/auth/person.png" alt />
          <span>用户登录</span>
        </div>
        <div class="cell">
          <img src="../assets/auth/mobile.png" alt />
          <el-input placeholder="请输入手机号码" v-model="loginUser.mobile" clearable></el-input>
        </div>
        <div class="cell">
          <img src="../assets/auth/pass.png" alt />
          <el-input placeholder="请输入登录密码" v-model="loginUser.password" clearable></el-input>
        </div>
        <div class="tools">
          <div>记住密码</div>
          <div @click="jumpTo('/forget')">忘记密码？</div>
        </div>
        <div class="btns">登录</div>
        <div class="toRegister">
          还没有账号？
          <span @click="jumpTo('/register')">赶紧去注册吧！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginUser: {
        mobile: "",
        password: ""
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.login {
  background: #fff;
  .navBar {
    height: 106px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    .left {
      width: 280px;
      height: 50px;
    }
    .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 31px;
        height: 31px;
        margin-right: 12px;
      }
      .right-num {
        display: flex;
        flex-direction: column;
        align-items: center;
        .tips {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: bold;
          font-style: italic;
          color: rgba(18, 18, 18, 1);
        }
        .mobile {
          font-size: 22px;
          font-family: PingFang SC;
          font-weight: bold;
          font-style: italic;
          color: rgba(18, 18, 18, 1);
          line-height: 20px;
        }
      }
    }
  }
  .login-main {
    width: 100%;
    height: 805px;
    background: rgba(126, 206, 244, 1);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      width: 821px;
      height: 312px;
    }
    .form-box {
      width: 400px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
      border-radius: 10px;
      padding: 25px 40px;
      .head {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 12px;
        margin-bottom: 60px;
        img {
          width: 24px;
          height: 23px;
        }
        span {
          margin-left: 12px;
          font-size: 24px;
          font-weight: bold;
          color: rgba(1, 82, 147, 1);
        }
      }
      .cell {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 25px;
        img {
          width: 15px;
          height: 21px;
          margin-right: 24px;
        }
        input {
          height: 40px;
        }
      }
      .tools {
        display: flex;
        justify-content: space-between;
        div {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(1, 82, 147, 1);
        }
      }
      .btns {
        margin: 0 auto;
        width: 300px;
        height: 40px;
        background: rgba(1, 82, 147, 1);
        border-radius: 5px;
        margin-top: 35px;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      .toRegister {
        margin-top: 25px;
        width: 100%;
        text-align: right;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #121212;
        span {
          color: rgba(1, 82, 147, 1);
        }
      }
    }
  }
}
</style>



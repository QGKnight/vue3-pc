<template>
  <div class="home">
    <div class="banner">
      <div class="wrapper">
        <swiper :options="swiperOption" class="swiper-container">
          <swiper-slide class="swiper-item" v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" />
          </swiper-slide>
        </swiper>
      </div>
      <div class="topBar">
        <div class="main-auto mains">
          <div class="left">
            <img src="../assets/home/new/logo.png" alt />
          </div>
          <div class="right">
            <div class="register">
              <img src="../assets/home/new/register.png" alt />
              <span>注册</span>
            </div>
            <div class="login">
              <img src="../assets/home/new/login.png" alt />
              <span>登录</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="main-auto nav-main">
        <div class="cell">
          <router-link :class="{actived:$route.name == 'index'}" to="/home/index">首 页</router-link>
        </div>
        <div class="cell">
          <router-link :class="{actived:$route.name == 'property'}" to="/home/property">产权信息</router-link>
        </div>
        <div class="cell">
          <router-link to="/home/property">成交公告</router-link>
        </div>
        <div class="cell">
          <router-link to="/home/property">交易指南</router-link>
        </div>
        <div class="cell">
          <router-link to="/home/property">政策法规</router-link>
        </div>
        <div class="cell">
          <router-link to="/home/property">图像核对</router-link>
        </div>
        <div class="cell">
          <router-link to="/home/property">大数据分析</router-link>
        </div>
        <div class="cell">
          <router-link to="/home/property">新闻资讯</router-link>
        </div>
        <div class="cell">
          <router-link to="/home/property">联系我们</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <div class="footer"></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "home",
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      swiperList: [
        {
          id: "001",
          imgUrl: require("../assets/home/new/banner.png")
        },
        {
          id: "002",
          imgUrl: require("../assets/home/new/banner.png")
        },
        {
          id: "003",
          imgUrl: require("../assets/home/new/banner.png")
        }
      ]
    };
  },
  methods: {
    remove() {
      let token = this.$store.state.token;
      console.log(token);
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  .banner {
    width: 100%;
    height: 694px;
    background: pink;
    position: relative;
    .wrapper /deep/ .swiper-pagination-bullet-active {
      background: #fff !important;
      .wrapper {
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 26.6666667%;
        background: #ccc;
        .swiper-item {
          width: 100%;
          .swiper-img {
            width: 100%;
          }
        }
      }
    }

    .topBar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 98px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 27px 0px rgba(194, 194, 194, 0.2);
      opacity: 0.6;
      z-index: 99;
      .mains {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        .left {
          img {
            width: 300px;
            height: 52px;
          }
        }
        .right {
          display: flex;
          flex-direction: row;
          align-items: center;
          div {
            padding: 6px 19px;
            border: 1px solid #eee;
            display: flex;
            align-items: center;
            margin-left: 26px;
            span {
              font-size: 16px;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              margin-left: 9px;
            }
          }
          .register {
            background: rgba(250, 151, 10, 1);
            border-radius: 5px;
          }
          .login {
            background: rgba(1, 82, 147, 1);
            border-radius: 5px;
          }
        }
      }
    }
  }
  .nav {
    width: 100%;
    height: 98px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 27px 0px rgba(194, 194, 194, 0.2);
    .nav-main {
      height: 100%;
      display: flex;
      align-items: center;
      .cell {
        a {
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          margin: 0 35px;
        }
        .actived {
          color: #015293;
          font-weight: bold;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 4px;
            background: #015293;
            bottom: -20px;
            border-radius: 2px;
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 248px;
    background: rgba(1, 82, 147, 1);
  }
}
</style>
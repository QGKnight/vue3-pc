<template>
  <div class="page">
    <vheader></vheader>
    <div class="nav-top main-auto">当前位置：首页 > 项目详情 > 图像详情</div>
    <div class="head-main main-auto">
      <div class="name">中前社区西侧房屋使用权租赁</div>
      <div class="msg">
        <div>发布时间：2019-07-12</div>
        <div class="much">浏览次数：148</div>
      </div>
    </div>
    <div class="box-main main-auto">
      <table>
        <tr>
          <td colspan="2">
            <span class="label">乡镇（街道/场）:</span>
            <span class="msgs">东山街道</span>
          </td>
          <td>
            <span class="label">村（社区）：</span>
            <span class="msgs">中前社区</span>
          </td>
          <td>
            <span class="label">组别：</span>
            <span class="msgs">二组</span>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <span class="label">项目名称：</span>
            <span class="msgs">中前社区西侧房屋使用权租赁（130平米）</span>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <span class="label">项目类别：</span>
            <span class="msgs">农村集体经营性资产</span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <span class="label">项目编号：</span>
            <span class="msgs">301214514541</span>
          </td>
          <td colspan="2">
            <span class="label">登记日期：</span>
            <span class="msgs">2019-09-10</span>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <span class="label">项目概况：</span>
            <span class="msgs">文靖西路108-1号中前社区西侧房屋一间，为三层建筑，总建筑面积爱130平米。</span>
          </td>
        </tr>
      </table>
      <div class="img-box">
          <img src="../assets/home/new/banner8.jpg" alt="">
          <img src="../assets/home/new/banner8.jpg" alt="">
          <img src="../assets/home/new/banner8.jpg" alt="">
      </div>
    </div>
    <vfoot></vfoot>
  </div>
</template>
<script>
import vheader from "../components/header";
import vfoot from "../components/foot";
import * as utils from "../utils";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: { swiper, swiperSlide, vheader, vfoot },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="less">
.page {
  .header {
    width: 100%;
    height: 250px;
    position: relative;

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
  .nav-top {
    width: 1288px;
    height: 50px;
    line-height: 50px;
    background: rgba(1, 82, 147, 1);
    box-shadow: 0px 2px 27px 0px rgba(194, 194, 194, 0.2);
    opacity: 0.6;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    padding-left: 12px;
  }
  .head-main {
    height: 192px;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .name {
      font-size: 30px;
      font-weight: bold;
      color: rgba(18, 18, 18, 1);
    }
    .msg {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 24px;
      .much {
        margin: 0 15px;
      }
      div {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(102, 102, 102, 1);
      }
      .shoucang {
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
      }
    }
  }
  .box-main {
    width: 1238px;
    margin-top: 43px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
    padding: 25px;
    table {
      width: 100%;
      border-collapse: collapse;
      tr {
        width: 100%;
        td {
          width: 24%;
          height: 63px;
          line-height: 63px;
          border: 1px solid #dcdcdc;
          padding-left: 1%;
          vertical-align: middle;
          .label {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(1, 82, 147, 1);
          }
          .msgs {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            
          }
        }
      }
    }
    .img-box{
        border-left:1px solid #dcdcdc;
        border-right:1px solid #dcdcdc;
        border-bottom:1px solid #dcdcdc;
        padding:25px;
        img{
            width:100%;
            height:500px;
        }
    }
  }
}
</style>
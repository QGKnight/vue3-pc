<template>
  <div class="page">
    <div class="main">
      <div class="day">
        <div class="left" :class="{marquee_top:animate}">
          <div class="cell" v-for="(item,index) in weatherList" :key="index">
            <span class="cell-day">{{item.day}}:</span>
            <span class="adree">汝州</span>
            <img src="../assets/home/new/yun.png" alt />
            <span class="status">{{item.wea}} {{item.tem2}}~{{item.tem1}}</span>
            <span class="time">{{item.week}}</span>
            <span class="time">{{item.date}}</span>
          </div>
        </div>
        <div class="right">
          <el-input placeholder="请输入关键字" v-model="word" clearable></el-input>
          <span>检 索</span>
        </div>
      </div>
      <div class="core">
        <div class="left">
          <div class="tip">
            <img src="../assets/home/new/news.png" alt />
            <span>新闻中心</span>
          </div>
          <div class="core-main">
            <div class="main-left">
              <swiper :options="swiperOption">
                <swiper-slide class="swiper-item">
                  <div>省纪委调研灌南县“三资”管理农村产权交易工作1</div>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                  <div>省纪委调研灌南县“三资”管理农村产权交易工作2</div>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                  <div>省纪委调研灌南县“三资”管理农村产权交易工作3</div>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                  <div>省纪委调研灌南县“三资”管理农村产权交易工作4</div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="main-right">
              <div class="right-top">
                <span :class="{actived:activedNum=='0'}" @click="changeTab(0)">新闻动态</span>
                <span :class="{actived:activedNum=='1'}" @click="changeTab(1)">地方要闻</span>
              </div>
              <div class="right-tips">省委副书记视察汝州市...</div>
              <div class="right-main">
                <div class="cell" v-for="item in 7">
                  <span>• 省委副书记视察汝州农村产权交易...</span>
                  <span>2019-08-06</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="tip">
            <img src="../assets/home/new/map.png" alt />
            <span>地图导航</span>
          </div>
          <div class="map-main">
            <img src="../assets/home/map.png" usemap="#Map" alt />
            <map name="Map">
              <area
                shape="poly"
                coords="134, 324, 105, 326, 101, 317, 92, 318, 82, 321, 73, 317, 59, 310, 53, 314, 47, 310, 41, 311, 39, 304, 51, 303, 35, 292, 55, 279, 59, 266, 69, 259, 74, 263, 77, 244, 98, 236, 103, 234, 111, 221, 115, 221, 126, 215, 123, 229, 136, 231, 153, 238, 163, 236, 167, 252, 170, 268, 173, 278, 170, 289, 163, 301"
                @click="onMap(0)"
              />
              <!-- 寄料镇 -->
              <area
                shape="poly"
                coords="135, 325, 149, 326, 157, 322, 163, 318, 159, 314, 174, 308, 181, 307, 192, 310, 206, 304, 220, 303, 227, 303, 243, 296, 242, 289, 234, 280, 241, 274, 246, 264, 234, 259, 232, 247, 221, 246, 211, 244, 201, 248, 197, 248, 187, 253, 181, 248, 181, 244, 180, 239, 174, 237, 165, 240, 168, 253, 171, 265, 172, 276, 172, 288, 166, 297"
                @click="onMap(1)"
              />
              <!-- 蟒穿镇 -->
              <area
                shape="poly"
                coords="246, 294, 244, 301, 256, 304, 269, 300, 280, 308, 292, 309, 304, 309, 312, 300, 320, 301, 325, 301, 331, 297, 339, 299, 344, 293, 353, 291, 351, 281, 333, 267, 325, 264, 294, 245, 263, 224, 258, 218, 255, 212, 251, 216, 246, 225, 245, 237, 252, 246, 247, 249, 239, 248, 233, 249, 234, 256, 245, 263, 244, 269, 239, 282"
                @click="onMap(2)"
              />
              <!-- 小屯镇 -->
              <area
                shape="poly"
                coords="336, 268, 347, 278, 354, 272, 354, 265, 348, 258, 352, 244, 354, 240, 357, 225, 343, 224, 332, 221, 326, 218, 317, 214, 311, 219, 303, 226, 294, 226, 288, 219, 279, 219, 276, 216, 267, 218, 261, 213, 259, 216, 264, 226"
                @click="onMap(3)"
              />
              <!-- 焦村乡 -->
              <area
                shape="poly"
                coords="81, 193, 85, 202, 89, 209, 84, 220, 84, 227, 80, 233, 80, 239, 97, 237, 108, 225, 124, 215, 127, 222, 124, 230, 135, 231, 153, 239, 163, 236, 174, 237, 179, 224, 182, 219, 193, 211, 194, 202, 198, 194, 199, 189, 186, 186, 127, 171, 121, 170, 98, 183"
                @click="onMap(4)"
              />
              <!-- 杨楼镇 -->
              <area
                shape="poly"
                coords="201, 195, 205, 195, 218, 196, 235, 202, 244, 207, 248, 217, 245, 227, 243, 236, 250, 246, 235, 247, 211, 245, 197, 247, 189, 252, 184, 247, 181, 239, 176, 234, 182, 221, 192, 210, 194, 204, 200, 198"
                href="#"
              />
              <!-- 王寨乡 -->
              <area
                shape="poly"
                coords="223, 182, 218, 196, 238, 202, 249, 209, 261, 213, 254, 205, 248, 200, 252, 190, 247, 182, 240, 180, 241, 173, 232, 180"
                href="#"
              />
              <!-- 汝州市 -->
              <area
                shape="poly"
                coords="83, 195, 69, 190, 70, 178, 64, 170, 62, 166, 54, 161, 44, 161, 47, 149, 58, 143, 61, 134, 49, 127, 41, 120, 44, 111, 52, 113, 60, 108, 58, 104, 80, 87, 81, 83, 103, 72, 109, 75, 111, 85, 121, 83, 130, 83, 126, 94, 124, 100, 121, 108, 121, 121, 109, 123, 108, 131, 105, 142, 102, 151, 95, 172, 96, 162, 94, 170, 89, 183, 82, 191"
                href="#"
              />
              <!-- 临汝镇 -->
              <area
                shape="poly"
                coords="109, 131, 116, 135, 122, 136, 116, 143, 123, 144, 125, 155, 124, 171, 108, 176, 97, 186, 86, 190, 95, 160, 105, 143"
                href="#"
              />
              <!-- 温泉镇 -->
              <area
                shape="poly"
                coords="130, 84, 125, 94, 126, 99, 121, 107, 122, 118, 109, 123, 109, 132, 120, 138, 119, 142, 124, 147, 126, 156, 128, 166, 181, 183, 184, 166, 181, 158, 180, 152, 169, 151, 164, 143, 160, 134, 153, 135, 148, 131, 150, 122, 149, 113, 147, 97, 141, 89, 141, 80"
                href="#"
              />
              <!-- 庙下镇 -->
              <area
                shape="poly"
                coords="143, 77, 141, 86, 149, 93, 147, 105, 149, 113, 152, 121, 146, 133, 160, 134, 165, 143, 171, 148, 176, 150, 174, 129, 187, 87, 196, 78, 195, 70, 181, 80, 168, 81"
                href="#"
              />
              <!-- 夏店镇 -->
              <area
                shape="poly"
                coords="176, 149, 172, 129, 186, 87, 198, 79, 206, 79, 217, 75, 228, 78, 242, 92, 235, 100, 248, 100, 258, 101, 269, 100, 265, 114, 276, 127, 270, 130, 259, 132, 249, 130, 242, 138, 235, 144, 226, 147, 210, 145, 192, 150, 182, 155"
                href="#"
              />
              <!-- 岭头镇 -->
              <area
                shape="poly"
                coords="182, 154, 182, 158, 186, 165, 184, 185, 198, 191, 195, 203, 204, 194, 220, 198, 221, 183, 240, 174, 247, 181, 251, 188, 261, 165, 278, 161, 274, 147, 280, 132, 274, 130, 262, 133, 249, 132, 237, 143, 226, 149, 216, 145, 206, 147"
                href="#"
              />
              <!-- 骑岭乡 -->
              <area
                shape="poly"
                coords="280, 134, 272, 143, 275, 151, 279, 157, 262, 167, 252, 187, 248, 203, 257, 210, 262, 217, 275, 216, 286, 219, 298, 228, 307, 220, 314, 213, 333, 221, 328, 205, 347, 186, 336, 176, 327, 149, 317, 141, 309, 144, 308, 139, 288, 140"
                href="#"
              />
              <!-- 米店镇 -->
              <area
                shape="poly"
                coords="328, 152, 336, 176, 344, 177, 346, 185, 329, 204, 331, 217, 340, 223, 350, 222, 360, 225, 366, 218, 375, 211, 387, 209, 391, 200, 398, 196, 407, 182, 368, 173, 361, 166, 347, 163, 342, 158, 338, 153"
                href="#"
              />
              <!-- 纸坊镇 -->
              <area
                shape="poly"
                coords="267, 104, 265, 112, 276, 129, 289, 138, 308, 139, 319, 142, 329, 153, 342, 157, 348, 164, 360, 165, 372, 174, 395, 176, 408, 182, 417, 169, 402, 160, 390, 160, 385, 155, 389, 151, 387, 138, 394, 124, 390, 117, 387, 113, 371, 116, 361, 110, 351, 104, 340, 104, 319, 104, 313, 102, 301, 105, 289, 107"
                href="#"
              />
              <!-- 大浴镇 -->
            </map>
          </div>
        </div>
      </div>
      <div class="process">
        <div class="tip">
          <img src="../assets/home/new/news.png" alt />
          <span>交易流程</span>
        </div>
        <div class="cell">
          <img src="../assets/home/new/baoming.png" alt />
          <span>报名登记</span>
        </div>
        <div class="cell">
          <img src="../assets/home/new/baoming.png" alt />
          <span>项目受理</span>
        </div>
        <div class="cell">
          <img src="../assets/home/new/baoming.png" alt />
          <span>项目挂牌</span>
        </div>
        <div class="cell">
          <img src="../assets/home/new/baoming.png" alt />
          <span>组织交易</span>
        </div>
        <div class="cell">
          <img src="../assets/home/new/baoming.png" alt />
          <span>成交确认</span>
        </div>
        <div class="cell">
          <img src="../assets/home/new/baoming.png" alt />
          <span>合同签订</span>
        </div>
        <div class="cell">
          <img src="../assets/home/new/baoming.png" alt />
          <span>交易鉴证</span>
        </div>
      </div>
      <div class="core projects">
        <div class="left">
          <div class="tip">
            <img src="../assets/home/new/zhanshi.png" alt />
            <span>项目展示</span>
          </div>
          <div class="more">
            <span>更多</span>
          </div>
          <div class="projects-main">
            <table>
              <tr>
                <th>项目编号</th>
                <th>项目名称</th>
                <th>交易地点</th>
                <th>交易时间</th>
                <th>状态</th>
              </tr>
              <tr>
                <td>111111</td>
                <td>这是标题啊这是标题啊这是标题啊</td>
                <td>老里村</td>
                <td>2019年12月2日</td>
                <td>
                  <span>报名</span>
                </td>
              </tr>
              <tr>
                <td>111111</td>
                <td>这是标题啊这是标题啊这是标题啊</td>
                <td>老里村</td>
                <td>2019年12月2日</td>
                <td>
                  <span>报名</span>
                </td>
              </tr>
              <tr>
                <td>111111</td>
                <td>这是标题啊这是标题啊这是标题啊</td>
                <td>老里村</td>
                <td>2019年12月2日</td>
                <td>
                  <span>报名</span>
                </td>
              </tr>
              <tr>
                <td>111111</td>
                <td>这是标题啊这是标题啊这是标题啊</td>
                <td>老里村</td>
                <td>2019年12月2日</td>
                <td>
                  <span>报名</span>
                </td>
              </tr>
              <tr>
                <td>111111</td>
                <td>这是标题啊这是标题啊这是标题啊</td>
                <td>老里村</td>
                <td>2019年12月2日</td>
                <td>
                  <span @click="jumpTo('/notice')">报名</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="right">
          <div class="tip">
            <img src="../assets/home/new/chaxun.png" alt />
            <span>项目查询</span>
          </div>
          <div class="search-main">
            <div class="cells">
              <span class="label">资产分类</span>
              <el-select v-model="value" clearable placeholder="请选择" class="changeIpt">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="cells">
              <span class="label">区 域</span>
              <el-select v-model="value" clearable placeholder="请选择" class="changeIpt">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="cells">
              <span class="label">面 积</span>
              <el-select v-model="value" clearable placeholder="请选择" class="changeIpt">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="btns">查询</div>
          </div>
        </div>
      </div>
      <div class="notice">
        <div class="notice-one">
          <div class="tip">
            <img src="../assets/home/new/gonggao.png" alt />
            <span>通知公告</span>
          </div>
          <div class="more">
            <span>更多</span>
          </div>
          <div class="one-main">
            <div class="cell" v-for="item in 6">
              <div class="title-left">• 省委副书记视察汝州农村产权交易11111111111111</div>
              <div>2019-07-15</div>
            </div>
          </div>
        </div>
        <div class="notice-one">
          <div class="tip">
            <img src="../assets/home/new/zhengce.png" alt />
            <span>政策法规</span>
          </div>
          <div class="more">
            <span>更多</span>
          </div>
          <div class="one-main">
            <div class="cell" v-for="item in 6">
              <div class="title-left">• 省委副书记视察汝州农村产权交易1111111111</div>
              <div>2019-07-15</div>
            </div>
          </div>
        </div>
        <div class="notice-two">
          <div class="tip">
            <img src="../assets/home/new/map.png" alt />
            <span>产权信息发布</span>
          </div>
          <div class="two-main">
            <img src="../assets/home/new/shenbao.png" alt />
            <img src="../assets/home/new/shenpi.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: { swiper, swiperSlide },
  data() {
    return {
      word: "",
      activedNum: 0,
      weatherList: [],
      animate: false,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      value: "",
      options: [
        {
          value: "选项1",
          label: "土地"
        },
        {
          value: "选项2",
          label: "房屋"
        },
        {
          value: "选项3",
          label: "池塘"
        },
        {
          value: "选项4",
          label: "耕地"
        },
        {
          value: "选项5",
          label: "山地"
        }
      ]
    };
  },

  created() {
    this.getWeather();
  },
  mounted() {
    setInterval(this.showMarquee, 5000);
    let str="2019-08-09";
  },
  methods: {
    onMap(num) {
      if (num == 0) {
        console.log(0);
      } else if (num == 1) {
        console.log(1);
      } else if (num == 2) {
        console.log(2);
      } else if (num == 3) {
        console.log(3);
      } else if (num == 4) {
        console.log(4);
      } else if (num == 5) {
        console.log(5);
      } else if (num == 6) {
        console.log(6);
      } else if (num == 7) {
        console.log(7);
      } else if (num == 8) {
        console.log(0);
      } else if (num == 9) {
        console.log(0);
      } else if (num == 10) {
        console.log(0);
      } else if (num == 11) {
        console.log(0);
      } else if (num == 12) {
        console.log(0);
      } else if (num == 13) {
        console.log(0);
      } else if (num == 14) {
        console.log(0);
      } else if (num == 15) {
        console.log(0);
      } else if (num == 16) {
        console.log(0);
      }
    },
    changeTab(num) {
      this.activedNum = num;
    },
    getWeather() {
      this.$axios
        .get("/api/?version=v1&appid=85571989&appsecret=awQi3RCN&city=汝州")
        .then(res => {
          console.log(JSON.stringify(res.data.data));
          this.weatherList = res.data.data;
        });
    },
    showMarquee: function() {
      this.animate = true;
      setTimeout(() => {
        this.weatherList.push(this.weatherList[0]);
        this.weatherList.shift();
        this.animate = false;
      }, 500);
    }
  }
};
</script>
<style scoped lang="less">
.page {
  width: 100%;
  background: #fff;
  .main {
    width: 1300px;
    margin: 12px auto 0;
    .day {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        height: 100%;
        height: 50px;
        line-height: 50px;
        overflow: hidden;
        .cell {
          display: flex;
          height: 100%;
          align-items: center;
          .cell-day {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            margin-right: 26px;
          }
          .adree {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(18, 18, 18, 1);
            margin-right: 9px;
          }
          .status {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(18, 18, 18, 1);
            margin-right: 15px;
          }
          .time {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(18, 18, 18, 1);
            margin-left: 9px;
          }
          img {
            width: 31px;
            height: 24px;
            margin-right: 16px;
          }
        }
      }
      .marquee_top {
        transition: all 1s;
        margin-top: -40px;
      }
      .right {
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          margin-left: 15px;
          display: inline-block;
          width: 73px;
          height: 38px;
          line-height: 38px;
          text-align: center;
          background: rgba(1, 82, 147, 1);
          border-radius: 5px;
          font-size: 16px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .core {
      width: 1285px;
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      .left {
        border-top: 2px solid rgba(1, 82, 147, 1);
        box-sizing: border-box;
        width: 818px;
        height: 360px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
        position: relative;
        .tip {
          position: absolute;
          top: -7px;
          left: 0;
          width: 170px;
          height: 35px;
          line-height: 50px;
          background: url("../assets/home/new/tip.png") no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            margin-right: 9px;
          }
          span {
            font-size: 18px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
        .core-main {
          display: flex;
          justify-content: space-between;
          margin-top: 49px;
          .main-left {
            margin-left: 24px;
            width: 377px;
            height: 280px;
            /deep/ .swiper-container {
              width: 100%;
              height: 100%;
              .swiper-item {
                position: relative;
                div {
                  position: absolute;
                  bottom: 0;
                  width: 100%;
                  height: 29px;
                  line-height: 29px;
                  text-align: center;
                  background: rgba(0, 0, 0, 1);
                  opacity: 0.7;
                  font-size: 14px;
                  font-weight: 500;
                  color: rgba(255, 255, 255, 1);
                }
              }
            }
          }
          .main-right {
            width: 375px;
            margin-right: 19px;
            .right-top {
              width: 100%;
              height: 26px;
              background: rgba(240, 240, 240, 1);
              display: flex;
              align-items: center;
              span {
                display: inline-block;
                width: 94px;
                height: 29px;
                line-height: 29px;
                text-align: center;
                font-size: 14px;
                font-weight: 500;
                color: rgba(18, 18, 18, 1);
                // background: rgba(1, 82, 147, 1);
              }
              .actived {
                background: #015293;
                color: #fff;
                position: relative;
                &::before {
                  position: absolute;
                  content: "";
                  width: 0px;
                  height: 0px;
                  border-top: 10px solid #015293;
                  border-left: 10px solid transparent;
                  border-right: 10px solid transparent;
                  position: absolute;
                  bottom: -9px;
                  left: 50%;
                  margin-left: -5px;
                }
              }
            }
            .right-tips {
              width: 100%;
              height: 50px;
              line-height: 50px;
              text-align: center;
              border-bottom: 1px solid red;
              font-size: 18px;
              font-weight: bold;
              color: rgba(226, 4, 4, 1);
            }
            .right-main {
              .cell {
                display: flex;
                justify-content: space-between;
                line-height: 28px;
                span {
                  font-size: 14px;
                  font-family: PingFang SC;
                  font-weight: 500;
                  color: rgba(102, 102, 102, 1);
                }
              }
            }
          }
        }
      }
      .right {
        border-top: 2px solid rgba(1, 82, 147, 1);

        width: 412px;
        height: 360px;
        background: #fff;
        box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
        position: relative;
        .tip {
          position: absolute;
          top: -7px;
          left: 0;
          width: 170px;
          height: 35px;
          line-height: 50px;
          background: url("../assets/home/new/tip.png") no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            margin-right: 9px;
          }
          span {
            font-size: 18px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
        .map-main {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .process {
      margin-top: 41px;
      width: 1135px;
      height: 180px;

      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0 75px;
      border-top: 2px solid #015293;
      position: relative;
      .tip {
        position: absolute;
        top: -7px;
        left: 0;
        width: 170px;
        height: 35px;
        line-height: 50px;
        background: url("../assets/home/new/tip.png") no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          margin-right: 9px;
        }
        span {
          font-size: 18px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
      }
      .cell {
        display: flex;
        flex-direction: column;
        margin-right: 100px;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          width: 79px;
          height: 2px;
          border: 1px dashed #bed2e1;
          box-sizing: border-box;
          top: 40%;
          margin-top: -1px;
          right: -90px;
        }
        img {
          width: 68px;
          height: 68px;
        }
        span {
          font-size: 16px;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          line-height: 28px;
        }
        &:last-child {
          &::before {
            width: 0;
            height: 0;
          }
        }
      }
    }
    .projects {
      width: 1285px;
      height: 310px;
      .left {
        height: 310px;
        .more {
          width: 100%;
          text-align: right;
          height: 30px;
          line-height: 30px;
          span {
            margin-right: 12px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            line-height: 28px;
          }
        }
        .projects-main {
          margin: 25px 0 0 40px;
          table {
            border-collapse: collapse;
            td {
              height: 37px;
              border: 1px solid #dcdcdc;
              line-height: 37px;
              text-align: center;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(18, 18, 18, 1);
              &:last-child {
                span {
                  background: rgba(250, 151, 10, 1);
                  border-radius: 5px;
                  font-size: 14px;
                  font-family: PingFang SC;
                  font-weight: 500;
                  color: rgba(255, 255, 255, 1);
                  padding: 3px 12px;
                }
              }
            }
            th {
              height: 37px;
              border: 1px solid #dcdcdc;
              background: #e5edf4;
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #015293;
              line-height: 37px;
              text-align: center;
              &:nth-child(1) {
                width: 114px;
              }
              &:nth-child(2) {
                width: 258px;
              }
              &:nth-child(3) {
                width: 120px;
              }
              &:nth-child(4) {
                width: 120px;
              }
              &:nth-child(5) {
                width: 120px;
              }
            }
          }
        }
      }
      .right {
        height: 310px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
        .search-main {
          margin-top: 50px;
          text-align: center;
          .cells {
            margin-bottom: 26px;
            .label {
              font-size: 18px;
              font-weight: bold;
              color: rgba(1, 82, 147, 1);
              line-height: 28px;
              margin-right: 22px;
              display: inline-block;
              width: 80px;
            }
            .changeIpt {
              width: 263px;
              height: 31px;
            }
          }
          .btns {
            width: 263px;
            height: 31px;
            line-height: 31px;
            background: rgba(1, 82, 147, 1);
            border-radius: 5px;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            margin: 20px auto 0;
          }
        }
      }
    }
    .notice {
      margin-top: 45px;
      display: flex;
      flex-direction: row;
      div {
        position: relative;
        .tip {
          position: absolute;
          top: -7px;
          left: 0;
          width: 170px;
          height: 35px;
          line-height: 50px;
          background: url("../assets/home/new/tip.png") no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            margin-right: 9px;
          }
          span {
            font-size: 18px;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
        .more {
          width: 100%;
          text-align: right;
          height: 30px;
          line-height: 30px;
          span {
            margin-right: 12px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            line-height: 28px;
          }
        }
      }
      .notice-one {
        border-top: 2px solid #015293;
        width: 398px;
        height: 228px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
        margin-right: 21px;

        .one-main {
          width: 345px;
          padding: 0 25px;
          margin-top: 12px;
          .cell {
            height: 28px;
            line-height: 28px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
            div {
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(102, 102, 102, 1);
            }
            .title-left {
              width: 244px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            &:last-child {
              border: none;
            }
          }
        }
      }
      .notice-two {
        border-top: 2px solid #015293;
        width: 412px;
        height: 228px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 20px 0px rgba(194, 194, 194, 0.2);
        margin-left: 35px;
        .two-main {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            width: 289px;
            height: 74px;
            margin-top: 14px;
          }
        }
      }
    }
  }
}
</style>
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
                  <img src="../assets/home/new/33.png" alt="">
                  <div>省纪委调研灌南县“三资”管理农村产权交易工作1</div>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                  <img src="../assets/home/new/44.png" alt="">
                  <div>省纪委调研灌南县“三资”管理农村产权交易工作2</div>
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
            <img class="imgs1" src="../assets/home/map/1.png" :class="{actived:currentIndex==1}" @mouseover="enter(1)" @mouseleave="leave" @click="jumpPage(1)" alt />
            <img class="imgs2" src="../assets/home/map/2.png" :class="{actived:currentIndex==2}" @mouseover="enter(2)" @mouseleave="leave" @click="jumpPage(2)" alt />
            <img class="imgs3" src="../assets/home/map/3.png" :class="{actived:currentIndex==3}" @mouseover="enter(3)" @mouseleave="leave" @click="jumpPage(3)" alt />
            <img class="imgs4" src="../assets/home/map/4.png" :class="{actived:currentIndex==4}" @mouseover="enter(4)" @mouseleave="leave" @click="jumpPage(4)" alt />
            <img class="imgs5" src="../assets/home/map/5.png" :class="{actived:currentIndex==5}" @mouseover="enter(5)" @mouseleave="leave" @click="jumpPage(5)" alt />
            <img class="imgs6" src="../assets/home/map/6.png" :class="{actived:currentIndex==6}" @mouseover="enter(6)" @mouseleave="leave" @click="jumpPage(6)" alt />
            <img class="imgs7" src="../assets/home/map/7.png" :class="{actived:currentIndex==7}" @mouseover="enter(7)" @mouseleave="leave" @click="jumpPage(7)" alt />
            <img class="imgs8" src="../assets/home/map/8.png" :class="{actived:currentIndex==8}" @mouseover="enter(8)" @mouseleave="leave" @click="jumpPage(8)" alt />
            <img class="imgs9" src="../assets/home/map/9.png" :class="{actived:currentIndex==9}" @mouseover="enter(9)" @mouseleave="leave" @click="jumpPage(9)" alt />
            <img class="imgs10" src="../assets/home/map/10.png" :class="{actived:currentIndex==10}" @mouseover="enter(10)" @mouseleave="leave" @click="jumpPage(10)" alt />
            <img class="imgs11" src="../assets/home/map/11.png" :class="{actived:currentIndex==11}" @mouseover="enter(11)" @mouseleave="leave" @click="jumpPage(11)" alt />
            <img class="imgs12" src="../assets/home/map/12.png" :class="{actived:currentIndex==12}" @mouseover="enter(12)" @mouseleave="leave" @click="jumpPage(12)" alt />
            <img class="imgs13" src="../assets/home/map/13.png" :class="{actived:currentIndex==13}" @mouseover="enter(13)" @mouseleave="leave" @click="jumpPage(13)" alt />
            <img class="imgs14" src="../assets/home/map/14.png" :class="{actived:currentIndex==14}" @mouseover="enter(14)" @mouseleave="leave" @click="jumpPage(14)" alt />
            <img class="imgs15" src="../assets/home/map/15.png" :class="{actived:currentIndex==15}" @mouseover="enter(15)" @mouseleave="leave" @click="jumpPage(15)" alt />
            <img class="imgs16" src="../assets/home/map/16.png" :class="{actived:currentIndex==16}" @mouseover="enter(16)" @mouseleave="leave" @click="jumpPage(16)" alt />
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
            <img src="../assets/home/new/right.png" alt />
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
            <img src="../assets/home/new/right.png" alt />
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
            <img src="../assets/home/new/right.png" alt />
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
      currentIndex: null,
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
    let str = "2019-08-09";
  },
  methods: {
    enter(num) {
      console.log(num)
      this.currentIndex = num;
    },
    leave() {
      this.currentIndex = null;
    },
    changeTab(num) {
      this.activedNum = num;
    },
    jumpPage(num){
      this.$router.push({path:'/home/property',query:{index:num}})
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
                img{
                  width:100%;
                  height:100%;
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
          margin: 30px auto 0;
          width: 380px;
          height: 280px;
          position: relative;
          .actived{
            transform: scale(1.5);
          }
          .imgs1 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 142px;
            height: 119px;
          }
          .imgs2 {
            position: absolute;
            bottom: 0;
            left: 95px;
            width: 128px;
            height: 95px;
          }
          .imgs3 {
            position: absolute;
            bottom: 20px;
            left: 205px;
            width: 124px;
            height: 100px;
          }
          .imgs4 {
            position: absolute;
            bottom: 88px;
            left: 58px;
            width: 120px;
            height: 75px;
          }
          .imgs5 {
            position: absolute;
            bottom: 73px;
            left: 144px;
            width: 81px;
            height: 63px;
          }
          .imgs6 {
            position: absolute;
            bottom: 35px;
            left: 232px;
            width: 90px;
            height: 120px;
            transform: rotate(-12deg);
          }
          .imgs7 {
            position: absolute;
            bottom: 133px;
            left: 15px;
            width: 96px;
            height: 124px;
          }
          .imgs8 {
            position: absolute;
            bottom: 143px;
            left: 59px;
            width: 50px;
            height: 60px;
            transform: rotate(-10deg);
          }
          .imgs9 {
            position: absolute;
            bottom: 145px;
            left: 85px;
            width: 84px;
            height: 113px;
            // transform: rotate(-10deg);
          }
          .imgs10 {
            position: absolute;
            bottom: 178px;
            left: 125px;
            width: 58px;
            height: 84px;
            // transform: rotate(-10deg);
          }
          .imgs11 {
            position: absolute;
            bottom: 128px;
            left: 158px;
            width: 115px;
            height: 90px;
            // transform: rotate(-10deg);
          }
          .imgs12 {
            position: absolute;
            bottom: 108px;
            left: 197px;
            width: 58px;
            height: 50px;
            // transform: rotate(-10deg);
          }
          .imgs13 {
            position: absolute;
            bottom: 186px;
            left: 160px;
            width: 106px;
            height: 80px;
            // transform: rotate(-10deg);
          }
          .imgs14 {
            position: absolute;
            bottom: 115px;
            left: 239px;
            width: 90px;
            height: 100px;
            transform: rotate(10deg);
          }
          .imgs15 {
            position: absolute;
            bottom: 120px;
            left: 293px;
            width: 82px;
            height: 90px;

            transform: rotate(-10deg);
          }
          .imgs16 {
            position: absolute;
            bottom: 169px;
            left: 270px;
            width: 82px;
            height: 90px;
            transform: rotate(-28deg);
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
            margin-right: 5px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            line-height: 28px;
          }
          img {
            margin-right: 12px;
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
            margin-right: 5px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(153, 153, 153, 1);
            line-height: 28px;
          }
          img {
            margin-right: 12px;
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
<template>
  <div class="page">
    <vheader></vheader>
    <div class="nav-top main-auto">当前位置：首页 > 项目详情 > 报名流程</div>
    <div class="head-main main-auto">
      <div class="name">报名项目：师寨镇刘小营村鱼塘出租项目</div>
      <div class="msg">发布时间：2019-07-12 浏览次数：148</div>
    </div>
    <div class="box-main main-auto">
      <div class="press">
        <div class="cell">
          <img class="yuaned" src="../assets/home/new/yuaned.png" alt />
          <span class="actived">报名申请与承诺</span>
        </div>
        <img class="dianed" src="../assets/home/new/dianed.png" alt />
        <div class="cell">
          <img v-if="firstStep" class="yuan" src="../assets/home/new/yuan.png" alt />
          <img v-else class="yuaned" src="../assets/home/new/yuaned.png" alt />
          <span :class="{actived:!firstStep}">缴纳保证金</span>
        </div>
        <img v-if="!threeStep" class="dianed" src="../assets/home/new/dian.png" alt />
        <img v-else class="dianed" src="../assets/home/new/dianed.png" alt />
        <div class="cell">
          <img v-if="!threeStep" class="yuan" src="../assets/home/new/yuan.png" alt />
          <img v-else class="yuaned" src="../assets/home/new/yuaned.png" alt />
          <span :class="{actived:threeStep}">报名成功</span>
        </div>
      </div>
      <div class="step-one" v-if="firstStep">
        <p>意向受让方承诺及确认函</p>
        <p>我方认同以下所有内容，才进行后续报名操作。汝州农村产权交易所有限责任公司:</p>
        <p>现已按你所要求仔细阅读了报名须知中本次交易所涉及的交易保证金协议》等系列文件。</p>
        <p>确认:你所和转让方已就上列文件内容及相关注意事项做出说明与解释，同时也应我方要求对上列文件相应内容做出说明与解释。各方对上列文件内容理解完全一-致。我方对上列文件内容已做出全面、准确理解，对全部内容认可，无异议。并承诺:</p>1.在报名受让时，我方接受《交易保证金协议》的所有规定。同时，按公告及相关规定提交报名资料，确认报名须知，并缴纳交易保证金;
        <p>2、经确认具有受让资格后，我方将按照《汝州农村产权交易所实物资产交易规则)和(《资产转让公告》的规定参与交易;如交易所确认网络竞价方式，我方同意按《农村产权交易所网络竞价规则》相关规定参与竞买，并按公告及交易规则参加后续交易活动;</p>
        <p>3、我方已详细阅读并完全认可本次转让项目所涉及之资产评估报告所披露内容以及已完成对本项目的全部尽职调查，对本项目风险进行了充分的了解;并依据该内容以我方独立判断决定自愿全部接受转让公告及资产交易合同等全部内容，并无条件接受转让方提出的全部交易和受让条件。</p>
        <p>4、我方所提交的报名资料均为真实、合法、有效，我方确保我方受让主体资格均能符合审批机关、相关管理部门的审批要求。如出现报名材料所提供信息与实际竞得人不一-致的情况，农交所有权取消实际竞得人的资格，没收保证金，并保留追究我方法律责任。</p>
        <p>5、如成功受让，我方将按照《农村产权交易所实物资产处置业务收费标准》的规定缴纳交易佣金等交易服务费用、并按规定签署《成交确认书》、《资产交易合同》 ，同时严格履行成交确认书和资产交易合同的规定。</p>
        <p>6、我方提交的报名申请为不可撤销申请。如单方自行撒销申请的，视为我方违反竞买约定和干扰交易秩序，我方缴纳的交易保证金自动转为违约金，由交易所予以没收。</p>
        <p>7、我方在参与受让过程中，若相关过程存在摄像、照相等情况，我方同意交易所和相关单位摄制我方肖像和对我方肖像进行合理使用。</p>
        <p>8、我方理解并接受:转让方有权在竞价开始前取消挂牌。若因转让方取消挂牌或遇不可抗力因素或出现其他特殊的重要原因，交易所有权决定取消或推迟本次竞价活动，我方不得向转让方、交易所追索交易保证金利息及其它任何费用与责任。</p>
        <p>9、我方理解和承认，交易所已全面、准确、真实地向我方披露了基于本次标的竞买所需按露的全部文件，已披露文件的具体内容的真实性、完整性和准确性均仅由转让方承担，交易所无需为此承担任何责任。</p>
        <p>10、如在受让过程中或受让后发生争议需要提起诉讼或仲裁，除交易所存在故意行为外，我方承诺不将交易所列为相关诉讼、仲裁的被告、被申请人和第三人。</p>
        <p>11、我方将严格遵守交易规则和程序，遵守已签署和待签署的包括本承诺在内的交易所批露的相关文本的约定和上述承诺，否则，我方愿意承担违约责任。违约责任的内容包括但不限于被交易所没收保证金、向交易所支付交易佣金等交易服务费用、被交易所和转让方进一步追究法律责任和相应的经济赔偿责任等。转让方也有权立即收回转让标的重新处置。同时，我方保证不再向转让方、交易所追索其他任何费用与责任。</p>
        <div class="check">
          <img src="../assets/home/new/checked.png" alt />
          <span>我已阅读</span>
        </div>
        <div class="btns1" @click="firstNext">同意</div>
      </div>
      <div class="step-two" v-if="twoStep">
        <div class="tips">
          <div class="items">保证金缴纳方式：</div>
          <div class="items">本次标的处置保证金收取方式为固定保证金，保证金金额为10.00元。</div>
          <div class="items">选择保证金支付方式：</div>
        </div>
        <div class="way">
          <div class="way-item">
            <img src="../assets/home/new/checked.png" alt class="check" />
            <img src="../assets/home/new/zhifu.png" alt class="ways" />
            <span>支付宝</span>
          </div>
          <div class="way-item">
            <img src="../assets/home/new/checked.png" alt class="check" />
            <img src="../assets/home/new/wx.png" alt class="ways" />
            <span>微信</span>
          </div>
        </div>
        <div class="ercode">
          <img src="../assets/home/new/zhifu.png" alt class="ways" />
          <div>支付宝</div>
        </div>
        <div class="btned">
          <div class="items" @click="twoNext">成功支付未跳转</div>
          <div class="items" @click="goBackPage">上一页</div>
        </div>
      </div>
      <div class="step-three" v-if="threeStep">
        <div class="tips">您的受让登记信息已提交，交易所对您的受让资格进行审核，审核通过后需缴纳保证金方可取得报价资格，请您耐心等耐。</div>
        <div class="btns">
          <div @click="jumpTo('')">我的个人中心</div>
          <div>返 回</div>
        </div>
      </div>
    </div>
    <vfoot></vfoot>
  </div>
</template>
<script>
import vfoot from "../components/foot";
import vheader from "../components/header";
import * as utils from "../utils";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: { swiper, swiperSlide, vheader, vfoot },
  data() {
    return {
      //   currentPage: 1,
      firstStep: true,
      twoStep: false,
      threeStep: false,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    };
  },
  methods: {
    firstNext() {
      this.firstStep = false;
      this.twoStep = true;
      // utils.storage.set('currentPage','2')
    },
    twoNext() {
      this.firstStep = false;
      this.twoStep = false;
      this.threeStep = true;
    },
    goBackPage() {
      this.firstStep = true;
      this.twoStep = false;
    }
  }
};
</script>
<style scoped lang="less">
.page {
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
      margin-top: 29px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(102, 102, 102, 1);
    }
  }
  .box-main {
    .press {
      margin-top: 50px;
      height: 90px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .cell {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .yuaned {
          width: 37px;
          height: 37px;
          margin-bottom: 28px;
        }
        .yuan {
          width: 15px;
          height: 15px;
          margin-bottom: 39px;
          margin-top: 10px;
        }
        span {
          font-size: 20px;
          font-weight: 500;
          color: rgba(153, 153, 153, 1);
        }
        .actived {
          color: rgba(18, 147, 250, 1);
        }
      }
      .dianed {
        margin: -50px 35px 0 35px;
        width: 92px;
        height: 7px;
      }
    }
    .step-one {
      width: 1230px;
      margin: 24px auto 0;
      p {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(18, 18, 18, 1);
        line-height: 34px;
      }
      .check {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 79px;
        img {
          width: 21px;
          height: 21px;
          margin-right: 18px;
        }
        span {
          font-size: 18px;
          font-weight: 500;
          color: rgba(102, 102, 102, 1);
        }
      }
      .btns1 {
        margin: 117px auto 30px;
        width: 200px;
        height: 40px;
        background: rgba(1, 82, 147, 1);
        border-radius: 5px;
        font-size: 24px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        line-height: 40px;
      }
    }
    .step-two {
      margin-top: 24px;
      padding: 25px;
      .tips {
        .items {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          line-height: 36px;
        }
      }
      .way {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 30px;
        .way-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-right: 50px;
          .check {
            width: 22px;
            height: 22px;
          }
          .ways {
            width: 36px;
            height: 36px;
            margin: 0 12px 0 15px;
          }
          span {
            font-size: 18px;
            font-weight: 500;
            color: rgba(18, 18, 18, 1);
          }
        }
      }
      .ercode {
        width: 300px;
        height: 300px;
        margin: 34px auto 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 188px;
          height: 188px;
        }
        div {
          margin-top: 12px;
          font-size: 18px;
          font-weight: 500;
          color: rgba(18, 150, 219, 1);
        }
      }
      .btned {
        margin-top: 60px;
        margin-bottom: 30px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        div {
          width: 240px;
          height: 40px;
          background: rgba(1, 82, 147, 1);
          border-radius: 5px;
          text-align: center;
          line-height: 40px;
          margin: 0 25px;
          font-size: 18px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .step-three {
      text-align: center;
      width: 100%;
      .tips {
        margin-top: 137px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(18, 18, 18, 1);
      }
      .btns {
        margin-top: 140px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        div {
          width: 320px;
          height: 40px;
          line-height: 40px;
          background: rgba(1, 82, 147, 1);
          margin: 0 50px 120px;
          font-size: 24px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
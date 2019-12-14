<template>
  <div class="page">
    <div class="main-auto page-head">
      <div class="btns">资源类项目</div>
      <div class="right">
        <el-input
          placeholder="请输入内容"
          v-model="word"
          class="input-with-select"
          prefix-icon="el-icon-search"
        >
          <el-button slot="append" class="searchBtn">查询</el-button>
        </el-input>
      </div>
    </div>
    <div class="main-auto filter-box">
      <div class="items">
        <div class="label">项目类型：</div>
        <div class="cell">
          <div
            v-for="(item,index) in claType"
            :class="{actived:index==claIndex}"
            :key="index"
            @click="changeCla(index)"
          >{{item}}</div>
        </div>
      </div>
      <div class="items">
        <div class="label">面积（亩/平方米）：</div>
        <div class="cell">
          <div
            v-for="(item,index) in maxType"
            :class="{actived:index==maxIndex}"
            :key="index"
            @click="changeMax(index)"
          >{{item}}</div>
        </div>
      </div>
      <div class="items">
        <div class="label">所在地区：</div>
        <div class="cell">
          <div
            v-for="(item,index) in addTypes"
            :class="{actived:index==addIndex}"
            :key="index"
            @click="changeAdd(index)"
          >{{item}}</div>
        </div>
      </div>
    </div>
    <div class="cond main-auto">
      <div class="left">
        <div class="item" @click="changeStatus(0)">
          <span :class="{actived:statusIndex==0}">按面积</span>
          <img v-if="statusIndex==0" class="uo" src="../assets/home/new/uo.png" alt />
          <img v-else src="../assets/home/new/down.png" alt />
        </div>
        <div class="item" @click="changeStatus(1)">
          <span :class="{actived:statusIndex==1}">按流转年限</span>
          <img v-if="statusIndex==1" class="uo" src="../assets/home/new/uo.png" alt />
          <img v-else src="../assets/home/new/down.png" alt />
        </div>
        <div class="item" @click="changeStatus(2)">
          <span :class="{actived:statusIndex==2}">按价格</span>
          <img v-if="statusIndex==2" class="uo" src="../assets/home/new/uo.png" alt />
          <img v-else src="../assets/home/new/down.png" alt />
        </div>
        <div class="item" @click="changeStatus(3)">
          <span :class="{actived:statusIndex==3}">按最新</span>
          <img v-if="statusIndex==3" class="uo" src="../assets/home/new/uo.png" alt />
          <img v-else src="../assets/home/new/down.png" alt />
        </div>
      </div>
      <div class="right" @click="changeItem">
        <img src="../assets/home/new/fangshi.png" alt />
        <span>图文排列</span>
      </div>
    </div>
    <div class="list-main main-auto" v-if="!showFlag">
      <div class="items" v-for="item in 12" @click="jumpPage(item)">
        <img src="../assets/home/new/tuxing.png" alt />
        <div class="msg-main">
          <div class="title">彭州市生平镇泉村5组、6...</div>
          <div class="tips">当前价：---</div>
          <div class="tips">起始价：400.00元</div>
          <div class="tips">距开始：待定</div>
          <div class="qian">进行中</div>
        </div>
      </div>
    </div>
    <div class="lists main-auto" v-if="showFlag">
      <div class="list-itemed">
        <div>标的名称</div>
        <div>组织方</div>
        <div>当前价格</div>
        <div>竞价状态</div>
      </div>
      <div class="list-mains">
        <div class="list-item" v-for="item in 12">
          <div>彭州市三界方一村10组、11组...</div>
          <div>绵阳市江油市</div>
          <div>23.00元</div>
          <div>尚未开始</div>
        </div>
      </div>
    </div>
    <div class="page-size main-auto">
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
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      statusIndex: null,
      claIndex: 0,
      maxIndex: 0,
      addIndex: 0,
      showFlag: false,
      number: "",
      word: "",
      currentPage: 5,
      claType: [
        "全部",
        "农村土地经营权",
        "林地使用权",
        "林业产业化项目",
        "林产品",
        "林木所有权",
        "林木采伐权",
        "集体经营性",
        "建设用地使用权",
        "水面养殖权",
        "农业生产设施所有权",
        "农村集体资产股权",
        "四荒使用权",
        "小型水利设施使用权",
        "农村房屋租赁",
        "其他农村项目"
      ],
      maxType: ["全部", "10以下", "10-100", "101-200", "201-500", "500以上"],
      addTypes: [
        "全部",
        "寄料镇",
        "蟒川镇",
        "小屯镇",
        "杨楼镇",
        "王寨乡",
        "纸坊镇",
        "临汝镇",
        "温泉镇",
        "庙下镇",
        "夏店镇 ",
        "骑岭乡",
        "汝州市",
        "陵头镇 ",
        "米店镇",
        "焦村乡",
        "大峪镇"
      ]
    };
  },
  mounted() {
    this.addIndex = this.$route.query.index;
  },
  methods: {
    jumpPage(id) {
      this.$router.push({ path: "/notice", query: { id: id } });
    },
    changeStatus(num) {
      if (this.statusIndex == num) {
        this.statusIndex = null;
      } else {
        this.statusIndex = num;
      }
    },
    changeItem() {
      this.showFlag = !this.showFlag;
    },
    changeMax(index) {
      this.maxIndex = index;
    },
    changeCla(index) {
      this.claIndex = index;
    },
    changeAdd(index) {
      this.addIndex = index;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scoped lang="less">
.page {
  background: #fff;
  margin-top: 20px;
  .page-head {
    height: 50px;
    border-bottom: 2px solid #015293;
    display: flex;
    justify-content: space-between;
    .btns {
      width: 132px;
      height: 100%;
      background: rgba(1, 82, 147, 1);
      font-size: 18px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      line-height: 50px;
      border-radius: 5px 5px 0 0;
    }
    .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 300px;
      span {
        display: inline-block;
        width: 200px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(1, 82, 147, 1);
        margin-left: 14px;
      }
      .el-button {
        background: #015293;
        color: #fff;
        width:73px;
        border-radius: 0 2px 2px 0;
        height:40px;
      }
    }
  }
  .filter-box {
    width: 1250px;
    padding: 38px 25px 0 25px;
    background: rgba(255, 248, 240, 1);
    .items {
      display: flex;
      justify-content: space-between;
      .label {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(18, 18, 18, 1);
        margin-right: 55px;
      }
      .cell {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        div {
          padding: 0 17px;
          margin-bottom: 29px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          cursor: pointer;
        }
        .actived {
          color: rgba(1, 82, 147, 1);
        }
      }
    }
  }
  .cond {
    height: 68px;
    background: rgba(240, 251, 255, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      flex-direction: row;
      .item {
        padding: 0 28px;
        span {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          margin-right: 8px;
        }
        .actived {
          color: #015293;
        }
        .uo {
          transform: rotate(-180deg);
        }
      }
    }
    .right {
      margin-right: 52px;
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        width: 20px;
        height: 20px;
        margin-right: 13px;
      }
      span {
        font-size: 16px;
        // font-family: PingFang SC;
        font-weight: 500;
        color: rgba(1, 82, 147, 1);
      }
    }
  }
  .list-main {
    margin-top: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .items {
      width: 280px;
      height: 320px;
      margin-bottom: 26px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 16px 0px rgba(194, 194, 194, 0.2);
      img {
        width: 100%;
        height: 159px;
        border-radius: 5px 5px 0px 0px;
      }
      .msg-main {
        padding: 14px;
        position: relative;
        .title {
          font-size: 18px;
          font-weight: bold;
          color: rgba(18, 18, 18, 1);
          margin-bottom: 18px;
        }
        .tips {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          line-height: 28px;
        }
        .qian {
          position: absolute;
          width: 68px;
          height: 29px;
          right: -4px;
          bottom: 53px;
          background: url("../assets/home/new/qian.png") no-repeat;
          background-size: cover;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 25px;
        }
      }
    }
  }
  .lists {
    margin-top: 48px;
    .list-mains {
      .list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 68px;
        &:nth-child(even) {
          background: #FAFAFA;
        }
        &:nth-child(odd) {
          background: #F0FBFF;
        }
        div {
          text-align: center;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(18, 18, 18, 1);
          &:nth-child(1) {
            width: 40%;
          }
          &:nth-child(2) {
            width: 25%;
          }
          &:nth-child(3) {
            width: 15%;
          }
          &:nth-child(4) {
            width: 20%;
          }
        }
      }
    }

    .list-itemed {
      background: #7ecef4;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 68px;
      div {
        text-align: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #fff;
        &:nth-child(1) {
          width: 40%;
        }
        &:nth-child(2) {
          width: 25%;
        }
        &:nth-child(3) {
          width: 15%;
        }
        &:nth-child(4) {
          width: 20%;
        }
      }
    }
  }
  .page-size {
    text-align: center;
    margin-top: 48px;
    .el-pager {
      li {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(18, 18, 18, 1);
      }
    }
  }
}
</style>
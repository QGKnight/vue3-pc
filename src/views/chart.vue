<template>
  <div class="page">
    <div class="main-auto">
      <div class="map-box">
        <div class="tools">
            <div class="left">
                <div class="title">土地是我们的生存根基</br>农村土地占全国土地面积<span>90%</span>以上</div>
                <div class="tips">(数据来源于中国企业发展报告)</div>
            </div>
            <div class="right">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </div>
        <div id="main" style="width: 1200px;height: 700px;" ></div>
      </div>
      <div class="map-box">
        <div class="tools">
            <div class="left">
                <div class="title">中国的土地流转已日渐活跃</br>最新土地指数<span>310911.1625</span>，同比前一日增长<span>0.17%</span></div>
                <div class="tips">(数据来源于土流网数据研究中心)</div>
            </div>
            <div class="right timed">
                <span>分析时间：</span>
                <el-input
                    placeholder="请选择日期"
                    suffix-icon="el-icon-date"
                    readonly="readonly"
                    v-model="time">
                </el-input>
            </div>
        </div>
        <div id="lineMain" style="width: 1200px;height: 450px;" ></div>
        <div class="texted">
            <p class="title">注释</p>
            <p>1、土流网土地流转指数是概括土地流转市场活跃水平的指标。</p>
            <p>2、指数上涨，表示土地流转市场趋于活跃。</p>
            <p>3、土流网土地流转指数建立在土流网平台汇聚和积累的海量交易行为数据基础之上，同时融入土地流转舆情数据，农产品价格、土地流转金融市场等数据，以指数</p>
            <p>形式反映全国土地流转市场现行状况，为描述与探索土地流转市场提供了一个便捷入口。</p>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china";
export default {
  name: "page",
  data() {
    return {
      time:"2019-12-05",
      charts: "",
      options: [{
          value: '选项1',
          label: '耕地'
        }, {
          value: '选项2',
          label: '园林'
        }, {
          value: '选项3',
          label: '林地'
        }, {
          value: '选项4',
          label: '牧草地'
        }, {
          value: '选项5',
          label: '城镇及工矿工地'
        },
        {
          value: '选项6',
          label: '交通运输用地'
        },
        {
          value: '选项7',
          label: '水域及水利设施用地'
        }
        ],
        value: '耕地'
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("main");
    });
    this.$nextTick(function() {
      this.drawLine("lineMain");
    });
  },
  methods: {
    drawPie(id) {
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: []
        },
        visualMap: {
          min: 0,
          max: 2500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: false,
          inRange: {
            color: ["#FFE5E6", "#F66464", "#E84D50"]
          },
          left:"10%"
        },
        toolbox: {
          show: false,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: "iphone3",
            type: "map",
            mapType: "china",
            showLegendSymbol: false,
            roam: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#FFE5E6",
                borderColor: "#fff",
                borderWidth: "1.5"
              },
              emphasis: {
                //鼠标移入高亮显颜色
                areaColor: "#ccc"
              }
            },
            data: [
              { name: "北京", value: Math.round(Math.random() * 1000) },
              { name: "天津", value: Math.round(Math.random() * 1000) },
              { name: "上海", value: Math.round(Math.random() * 1000) },
              { name: "重庆", value: Math.round(Math.random() * 1000) },
              { name: "河北", value: Math.round(Math.random() * 1000) },
              { name: "河南", value: Math.round(Math.random() * 1000) },
              { name: "云南", value: Math.round(Math.random() * 1000) },
              { name: "辽宁", value: Math.round(Math.random() * 1000) },
              { name: "黑龙江", value: Math.round(Math.random() * 1000) },
              { name: "湖南", value: Math.round(Math.random() * 1000) },
              { name: "安徽", value: Math.round(Math.random() * 1000) },
              { name: "山东", value: Math.round(Math.random() * 1000) },
              { name: "新疆", value: Math.round(Math.random() * 1000) },
              { name: "江苏", value: Math.round(Math.random() * 1000) },
              { name: "浙江", value: Math.round(Math.random() * 1000) },
              { name: "江西", value: Math.round(Math.random() * 1000) },
              { name: "湖北", value: Math.round(Math.random() * 1000) },
              { name: "广西", value: Math.round(Math.random() * 1000) },
              { name: "甘肃", value: Math.round(Math.random() * 1000) },
              { name: "山西", value: Math.round(Math.random() * 1000) },
              { name: "内蒙古", value: Math.round(Math.random() * 1000) },
              { name: "陕西", value: Math.round(Math.random() * 1000) },
              { name: "吉林", value: Math.round(Math.random() * 1000) },
              { name: "福建", value: Math.round(Math.random() * 1000) },
              { name: "贵州", value: Math.round(Math.random() * 1000) },
              { name: "广东", value: Math.round(Math.random() * 1000) },
              { name: "青海", value: Math.round(Math.random() * 1000) },
              { name: "西藏", value: Math.round(Math.random() * 1000) },
              { name: "四川", value: Math.round(Math.random() * 1000) },
              { name: "宁夏", value: Math.round(Math.random() * 1000) },
              { name: "海南", value: Math.round(Math.random() * 1000) },
              { name: "台湾", value: Math.round(Math.random() * 1000) },
              { name: "香港", value: Math.round(Math.random() * 1000) },
              { name: "澳门", value: Math.round(Math.random() * 1000) }
            ]
          }
        ]
      });
    },
    drawLine(id){
      this.charts = echarts.init(document.getElementById(id));
      this.charts.setOption({
            tooltip: {
                trigger: 'axis'
            },
           xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7','8', '9', '10', '11']
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    formatter: '{value}亩'
                }
            },
            grid: {
                top: '40px',   // 等价于 y: '16%'
                left: '25px', 
                right: '25px',
                bottom: '40px',
                containLabel: true
            },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934],
                type: 'line',
                itemStyle: {
                   normal: {
                       color: '#33CCFF',
                       lineStyle: {
                           color: '#015293'
                       },
                       label : {show: true}
                   }
               }
            },
            
        ]
      })
    }
  }
};
</script>

<style scoped lang="less">
.page{
    margin-top:20px;
    background: #fff;
    padding-top:20px;
    .map-box{
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 16px 0px rgba(194,194,194,0.2);
        border-radius:0px 0px 5px 5px;
        text-align: center;
        padding:20px 0;
        margin-bottom:33px;
       .tools{
           height:80px;
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding:0 40px;
           .left{
               display: flex;
               flex-direction: column;
               text-align: left;
               position: relative;
               .title{
                   font-size:18px;
                    font-weight:500;
                    font-family:PingFang SC;
                    color:rgba(18,18,18,1);
                    margin-bottom:5px;
                    span{
                        font-family:PingFang SC;
                        color:#015293;
                    }
               }
               .tips{
                   font-size:16px;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(102,102,102,1);
               }
               &::before{
                   position: absolute;
                   content: "";
                   width:4px;
                   height:45px;
                   background:rgba(1,82,147,1);
                   left:-12px;
               }
           }
           .timed{
               width:250px;
               display: flex;
               flex-direction: row;
               align-items: center;
               span{
                   width:150px;
                   font-size:16px;
                    font-family:PingFang SC;
                    font-weight:500;
                    color:rgba(102,102,102,1);
               }
               
           }
       } 
       #main{
           margin:0 auto;
       }
       #lineMain{
           margin:0 auto;
       }
       .texted{
           padding:0 52px;
           text-align: left;
           font-size:16px;
            font-family:PingFang SC;
            font-weight:500;
            color:rgba(102,102,102,1);
            line-height:35px;
            .title{
                font-size:22px;
                font-weight:500;
                color:rgba(18,18,18,1);
            }
       }
    }
}
</style>



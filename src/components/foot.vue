<template>
   <div class="footer">
      <div>建议使用：IE8及以上浏览器　地址：河南省郑州市郑东新区商鼎路升龙大厦 电话：0371-67170700　邮编：450xxx</div>
      <div>主办单位：汝州市农业农村工作委员会 网站标识码：41010xxxx　豫ICP备05012xxx号</div>
      <div class="jincha"><img src="../assets/home/new/gaba.png" alt=""><span>豫公网安备 41010202xxxxx号</span></div>  
    </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
      
  }
};
</script>
<style scoped lang="less">
 .footer {
    width: 100%;
    height: 248px;
    background: rgba(1, 82, 147, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      font-size: 18px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 36px;
      font-family: PingFang SC;
    }
    .jincha{
      display: flex;
      align-items: center;
    }
  }
</style>
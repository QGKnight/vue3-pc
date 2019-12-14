<template>
   <div class="footer">
      <div>版权所有：汝州市农业农村厅 汝州市综改办</div>
      <div>技术支持：河南御之谷网络科技有限公司</div>
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
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 36px;
    }
  }
</style>
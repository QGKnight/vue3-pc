<template>
  <div class="home">
    <div @click="jumpTo('/login')">
      <span>127365625321317</span>
    </div>
    <div @click="remove">退出</div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    remove() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/showcase.png) no-repeat;
  background-size: 100% 100%;
  color: red;
  span {
    color: pink;
  }
}
</style>
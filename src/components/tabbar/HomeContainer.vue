<template>
  <div>
    <h3>HomeContainer組件</h3>

    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          if (result.body.status === 0) {
            console.log("成功获取数据！！！");
            console.log(result.body);
          } else {
            console.log("获取数据失败！！！");
          }
        });
    }
  }
};
</script>

<style lang="scss" scope>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: blue;
    }
    &:nth-child(2) {
      background-color: yellowgreen;
    }
  }
}
</style>
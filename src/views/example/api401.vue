<template>
  <div class="expample-api401-page">
    <NavBar />
    <div class="api401-content">
      <van-button @click="testFail">测试接口401</van-button>
    </div>
  </div>
</template>

<script>
import { globalApi } from '@service';
import NavBar from '@components/NavBar.vue';

export default {
  setup() {
    const testFail = () => {
      const params = {};
      globalApi.testFail(params).then((res) => {
        console.log('404-res', res);
      }).catch(() => {

      }).finally(() => {});
    };
    return {
      testFail,
    };
  },
  components: {
    NavBar,
  }
}
</script>

<style lang="less" scoped>
  .expample-api401-page {
    width: 100%;
    height: 100%;
  }
</style>
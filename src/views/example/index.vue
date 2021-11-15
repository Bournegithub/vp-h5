<template>
  <div class="page-example">
    <van-cell-group
      v-show="path === '/example'"
    >
      <van-cell
        title="iconfont使用示例"
        value="查看"
        is-link
        size="large"
        to="/example/iconfont"
      />
      <van-cell
        title="store使用示例"
        value="查看"
        is-link
        size="large"
        to="/example/store"
      />
      <van-cell
        title="语言使用示例"
        value="查看"
        is-link
        size="large"
        to="/example/language"
      />
    </van-cell-group>
    <router-view></router-view>
    <BottomBar />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BottomBar from '@components/BottomBar.vue';

export default {
  setup() {
    const route = useRoute();
    const path = computed(() =>route.path);
    return {
      path,
    };
  },
  components: {
    BottomBar,
  },
}
</script>

<style lang="less" scoped>
  .page-example {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
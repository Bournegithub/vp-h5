<template>
  <div class="page-example">
    <van-cell-group
      v-show="path === '/example'"
    >
      <van-cell
        v-for="(item, index) in exampleRoutes"
        :key="index"
        :title="`${item.name}使用示例`"
        value="查看"
        is-link
        size="large"
        :to="`${path}/${item.path}`"
      />
    </van-cell-group>
    <router-view></router-view>
    <BottomBar />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BottomBar from '@components/BottomBar.vue';

export default {
  setup() {
    const route = useRoute();
    const path = computed(() =>route.path);
    const { options } = useRouter();
    const routes = options.routes;
    let exampleRoutes = [];
    routes.forEach((item) => {
      if (item.path === route.path) {
        exampleRoutes = item.children;
      }
    });
    return {
      path,
      exampleRoutes,
    };
  },
  components: {
    BottomBar,
  },
  inject: ['reload'],
  watch: {
    '$route'() {
      this.reload();
    }
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
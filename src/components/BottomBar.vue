<template>
  <div class="bottom-bar">
    {{ currentPath }} / {{ ax }}
    <van-grid clickable :column-num="2">
      <van-grid-item
        v-for="(item, index) in routes"
        :key="index"
        :icon="item.icon"
        :text="$t(`app.menu.${item.name}`)"
        :to="item.path"
      />
    </van-grid>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const routes = [
      {
        path: '/',
        name: 'home',
        icon: 'home-o',
      },
      {
        path: '/example',
        name: 'example',
        icon: 'coupon-o',
      },
    ];
    const route = useRoute();
    const currentPath = ref(JSON.parse(JSON.stringify(computed(() =>route.path))));
    const active = computed((path) => {
      let result = '';
      console.log('path', path);
      if (currentPath.includes(path)) {
        result = 'active';
      }
      return result;
    });
    return {
      routes,
      active,
      currentPath,
    }
  },
}
</script>

<style lang="less" scoped>
  .bottom-bar {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
</style>
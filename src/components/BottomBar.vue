<template>
  <div class="bottom-bar">
    <van-grid clickable :column-num="2">
      <van-grid-item
        v-for="(item, index) in routes"
        :key="index"
        :icon="item.icon"
        :text="$t(`app.menu.${item.name}`)"
        :to="item.path"
        :class="activeClass(item.path)"
      />
    </van-grid>
  </div>
</template>

<script>
import { computed } from 'vue';
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
    const currentPath = computed(() =>route.path).value;
    const activeClass = computed(() => {
      return (path) => {
        let result = '';
        if (path === '/') {
          if (currentPath === path) {
            result = 'active';
          }
        } else if (currentPath.includes(path)){
          result = 'active';
        }
        return result;
      }
    });
    return {
      routes,
      activeClass,
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
    /deep/.van-grid {
      .van-grid-item {
        &.active {
          color: #1989FA;
          .van-grid-item__text {
            color: #1989FA;
          }
        }
      }
    }
  }
</style>
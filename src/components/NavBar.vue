<template>
  <van-nav-bar
    :title="$t(`app.menu.${pathName}`)"
    :left-text="$t(`app.globalText.back`)"
    left-arrow
    @click-left="onClickLeft"
  >
    <!-- <template #right>
      <van-icon name="search" size="18" />
    </template> -->
  </van-nav-bar>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup () {
    const route = useRoute();
    const pathName = computed(() =>route.name);
    const onClickLeft = () => history.back();
    const onClickRight = () => Toast('按钮');
    return {
      pathName,
      onClickLeft,
      onClickRight,
    };
  },
}
</script>

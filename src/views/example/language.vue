<template>
  <div class="example-language-page">
    <NavBar />
    <div class="language-content">
      <span>中文</span>
      <van-switch v-model="checked" size="24px" active-color="#1989FA" inactive-color="#1989FA" />
      <span>English</span>
    </div>
  </div>
</template>

<script>
import { ref, watch, getCurrentInstance } from 'vue';
import { setLanguage } from '@utils/cookie';
import { getLocale } from '@locale/index';
import NavBar from '@components/NavBar.vue';

export default {
  setup() {
    const language = ['zh', 'en'];
    const checked = ref(getLocale() === 'en');
    const instance = getCurrentInstance();
    watch(checked, (n) => {
      let result = 0;
      if (n) {
        result = 1;
      }
      setLanguage(language[result]);
      instance.proxy.$i18n.locale = getLocale();
    });
    return {
      checked,
    };
  },
  components: {
    NavBar,
  }
}
</script>

<style lang="less" scoped>
  .language-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
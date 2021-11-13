<template>
  <div class="home-page">
    <div class="home-wrap">
      <div class="home-content">
        首页
        {{ $t('app.globalText.welcome') }}
      </div>
    </div>
    <!-- <van-icon name="chat-o" />
    <van-icon
        class='iconfont'
        class-prefix='icon'
        name='adjust'
      />
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button> -->
    <BottomBar />
  </div>
</template>

<script>
import BottomBar from '@components/BottomBar.vue';

export default {
  setup() {
    
  },
  components: {
    BottomBar,
  },
}
</script>

<style lang="less" scoped>
  .home-page {
    width: 100%;
    height: 100%;
    position: relative;
    .home-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
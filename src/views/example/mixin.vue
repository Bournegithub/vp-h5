<template>
  <div class="example-mixin-page">
    <NavBar />
    <div class="mixin-content">
      <van-button @click="clickTest">点击按钮调用全局混入的函数 clickTest </van-button>
    </div>
  </div>
</template>

<script>
import NavBar from '@components/NavBar.vue';

export default {
  setup() {
    
  },
  components: {
    NavBar,
  }
}
</script>
<template>
  <div class="example-iconfont-page">
    <NavBar />
    <div class="icon-font-content">
      <van-icon
        class='iconfont'
        class-prefix='icon'
        name='adjust'
      />
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
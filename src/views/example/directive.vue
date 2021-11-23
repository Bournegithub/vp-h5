<template>
  <div class="example-directive-page">
    <NavBar />
    <div class="icon-directive-content">
      <div>
        <van-button v-permission="'example-a'">example-a</van-button>
        <van-button v-permission="'example-a'">example-b</van-button>
        <van-button v-permission="'example-a'">example-c</van-button>
        <van-button v-permission="'test'">no permission</van-button>
      </div>
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
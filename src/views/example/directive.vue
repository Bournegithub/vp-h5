<template>
  <div class="example-directive-page">
    <NavBar />
    <div class="directive-content">
      <div>
        <van-button v-permission="'example-a'">example-a</van-button>
        <van-button v-permission="'example-b'">example-b</van-button>
        <van-button v-permission="'example-c'">example-c</van-button>
        <van-button v-if="$hasPermission('example-a')">另一种写法</van-button>
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
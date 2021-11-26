<template>
  <div class="example-filter-page">
    <NavBar />
    <div class="filter-content">
      <div>原数据: {{ 654321.123456 }}</div>
      <div>computed模拟filter--filterThousandth(654321.123456): {{ filterThousandth(654321.123456) }}</div>
      <div class="">
          指令模拟filter-- v-filter="'filterThousandth'"
          <span v-filter="'filterThousandth'"> {{ 654321.123456 }} </span>
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

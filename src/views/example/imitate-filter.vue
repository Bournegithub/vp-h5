<template>
  <div class="example-filter-page">
    <NavBar />
    <div class="filter-content">
      <div>
        <van-field v-model="number" placeholder="请输入带小数的数字" />
      </div>
      <div>computed模拟filter--filterThousandth({{ number }}): {{ filterThousandth(number) }}</div>
      <div class="">
        指令模拟filter-- v-filter="'filterThousandth'"
        <span v-filter="'filterThousandth'"> {{ number }} </span>
      </div>
      <div>
        正常双向绑定显示
        <span>{{ number }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import NavBar from '@components/NavBar.vue';

export default {
  setup() {
    const number = ref('');
    return {
      number,
    };
  },
  components: {
    NavBar,
  },
}
</script>

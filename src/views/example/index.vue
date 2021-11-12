<template>
  <div class="page-example">
    <!-- <div class="count-wrap">example page</div> -->
    <div class="count-wrap">{{ store.state.example.count }}</div>
    <div class="btn-box">
      <van-button @click="add">+</van-button>
      <van-button @click="minus">-</van-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    console.log('store', store);
    const add = () => {
      store.dispatch('actionCountAdd', store.state.example.count);
    };
    const minus = () => {
      store.dispatch('actionCountMinus', store.state.example.count);
    };
    return {
      store,
      add,
      minus,
    };
  },
}
</script>

<template>
  <div class="example-store-page">
    <NavBar />
    <div class="count-wrap">{{ store.state.example.count }}</div>
    <div class="btn-box">
      <van-button @click="add">+</van-button>
      <van-button @click="minus">-</van-button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import NavBar from '@components/NavBar.vue';

export default {
  setup() {
    const store = useStore();
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
  components: {
    NavBar,
  },
}
</script>

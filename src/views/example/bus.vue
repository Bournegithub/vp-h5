<template>
  <div class="example-bus-page">
    <NavBar />
    <div class="bus-content">
      <child-a />
      <child-b />
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
// import { defineComponent } from 'vue';
import NavBar from '@components/NavBar.vue';

const ChildA = {
  template: `<div><h5>child a</h5><van-button @click="add">+</van-button><van-button @click="sub">-</van-button></div>`,
  methods: {
    add () {
      this.$bus.emit('add');
    },
    sub () {
      this.$bus.emit('sub');
    }
  },
};
const ChildB = {
  template: `<div><h5>child b</h5><div>{{ count }}</div></div>`,
  data () {
    return {
      count: 0,
    };
  },
  created () {
    this.$bus.on('add', () => {
      this.count += 1;
    });
    this.$bus.on('sub', () => {
      this.count -= 1;
    });
  },
  beforeDestroy () {
    this.$bus.off('add');
    this.$bus.off('sub');
  },
};

export default {
  setup(props, context) {
    return {
    };
  },
  components: {
    NavBar,
    'child-a': ChildA,
    'child-b': ChildB,
  }
}
</script>

<style lang="less" scoped>
</style>

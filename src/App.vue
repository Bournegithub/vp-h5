<template>
  <router-view v-if="isRouterAlive"/>
</template>

<script>
import { useStore } from 'vuex';

export default {
  provide () {
    return {
      reload: this.reload,
    }
  },
  data () {
    return {
      isRouterAlive: true,
    };
  },
  created () {
    // 刷新时将store内的permission存到sessionStorage内
    if (sessionStorage.getItem('permission')) {
      const permission = JSON.parse(sessionStorage.getItem('permission'));
      this.$store.dispatch('actionPermission', permission);
    }
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('permission', JSON.stringify(this.$store.state.permission))
    });
  },
  beforeDestroy () {
    window.removeEventListener('beforeunload', () => {});
  },
  methods: {
    reload () {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
}
</script>

<style>
</style>

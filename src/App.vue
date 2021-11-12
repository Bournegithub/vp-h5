<template>
  <router-view />
</template>

<script>
import { onMounted } from 'vue';
import { globalApi } from '@service';

export default {
  setup() {
    const login = () => {
      const params = {
        user: '11111',
        pwd: '123456',
      };
      globalApi.login(params).then((res) => {
        console.log('login-res', res);
      }).catch(() => {

      }).finally(() => {});
    };
    onMounted(login);
    return {
      login,
    };
  },
}
</script>

<style>
</style>

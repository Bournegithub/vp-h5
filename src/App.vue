<template>
  <router-view />
</template>

<script>
import { onMounted } from 'vue';
import Cookies from 'js-cookie';
import { globalApi } from '@service';

export default {
  setup() {
    const login = () => {
      const params = {
        user: '11111',
        pwd: '123456',
      };
      globalApi.login(params).then((res) => {
        if (res) {
          Cookies.set('token', res.token);
        }
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

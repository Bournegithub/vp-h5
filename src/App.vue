<template>
  <router-view />
</template>

<script>
import { onBeforeMount } from 'vue';
import Cookies from 'js-cookie';
import { useStore } from 'vuex';
import { globalApi } from '@service';

export default {
  setup() {
    const store = useStore();
    const setPermission = (val) => {
      store.dispatch('actionPermission', val);
    };
    const login = () => {
      const params = {
        user: '11111',
        pwd: '123456',
      };
      globalApi.login(params).then((res) => {
        if (res) {
          Cookies.set('token', res.token);
          setPermission(res.permission);
        }
      }).catch(() => {

      }).finally(() => {});
    };
    onBeforeMount(() => {
      login();
    });
    return {
      login,
    };
  },
}
</script>

<style>
</style>

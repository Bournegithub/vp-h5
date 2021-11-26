<template>
  <div class="login-page">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { ref } from 'vue';
import Cookies from 'js-cookie';
import { useStore } from 'vuex';
import router from '@router';
// import { useRouter } from 'vue-router';
import { globalApi } from '@service';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const store = useStore();
    const setPermission = (val) => {
      store.dispatch('actionPermission', val);
    };
    const goHome = () => {
      console.log('gohome', router);
      router.push({
        path: '/',
        query: {
          id: '', // 示例
        },
      });
    };
    const onSubmit = (values) => {
      console.log('submit', values);
      const params = {
        user: username,
        pwd: password,
      };
      globalApi.login(params).then((res) => {
        if (res) {
          Cookies.set('token', res.token);
          setPermission(res.permission);
          goHome();
        }
      }).catch((err) => {
        console.log('err', err);
      }).finally(() => {});
    };
    return {
      username,
      password,
      onSubmit,
    };
  },
}
</script>

<style lang="less" scoped>
  .login-page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-form {
      width: 100%;
    }
  }
</style>
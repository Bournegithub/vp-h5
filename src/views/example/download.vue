<template>
  <div class="example-download-page">
    <NavBar />
    <div class="download-content">
      <van-button @click="fileDownload">下载测试</van-button>
    </div>
  </div>
</template>

<script>
import { globalApi } from '@service';
import NavBar from '@components/NavBar.vue';

export default {
  setup() {
    const testDownload = (url, params) => {
      globalApi.testDownload(url, params).then((res) => {
        console.log('testDownload-wrap-res', res);
      }).catch((err) => {
        console.log('testDownload-wrap-err', err);
      }).finally(() => {});
    };
    const fileDownload = () => {
      testDownload('/api/v1/testDownload', { fileName: 'test' });
    };
    return {
      fileDownload,
    };
  },
  components: {
    NavBar,
  }
}
</script>
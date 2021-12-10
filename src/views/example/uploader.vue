<template>
  <div class="expample-uploader-page">
    <NavBar />
    <div class="uploader-content">
      <div class="file-parent">
        <div
          v-for="(item, index) in fileParent1"
          :key="index"
          class="file-item"
        >
          <div>{{ item.name }}</div>
          <div>{{ item.content ? item.content : ''}}</div>
        </div>
      </div>
      <div class="">正常样式</div>
      <Uploader
        v-model="fileParent1"
        url="/api/v1/ossUploader"
        @change="fileChange1"
      />
      <!-- <div class="file-parent">
        <div
          v-for="(item, index) in fileParent2"
          :key="index"
          class="file-item"
        >
          <img :src="item.content" />
        </div>
      </div> -->
      <!-- <div class="">自定义样式</div>
      <Uploader
        v-model="fileParent2"
        url="/api/v1/ossUploader"
        @change="fileChange2"
      >
        <van-button icon="plus" type="primary">上传文件</van-button>
      </Uploader> -->
      <div class="intro">
        上传组件由vant uploader组件进一步封装,增加了url参数.原before-read、after-read、before-delete参数改为emit事件到外层
        @before-read="eampleFun", 回调参数和原组件相同.其他参数和事件都和原组件相同
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import NavBar from '@components/NavBar.vue';
import Uploader from '@components/Uploader.vue';

export default {
  setup() {
    const fileParent1 = ref([
      {
        name: 'leaf.jpg',
        size: 1347411,
        status: 'done',
        type: 'image/jpeg',
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      },
      {
        name: 'test',
        size: 1347411,
        status: 'done',
        type: 'application/zip',
        url: 'https://img.yzcdn.cn/vant/test.zip',
      },
    ])
    const fileParent2 = ref([]);
    const maxSize = 100 * 1024;
    const fileChange1 = () => {
      console.log('file-change-fileParent', fileParent1);
    };
    const fileChange2 = () => {
      console.log('file-change-fileParent', fileParent2);
    };
    return {
      fileParent1,
      fileParent2,
      maxSize,
      fileChange1,
      fileChange2,
    };
  },
  components: {
    NavBar,
    Uploader,
  }
}
</script>

<style lang="less" scoped>
  .file-parent {
    display: flex;
    .file-item {
      width: 80px;
      height: 80px;
      overflow: hidden;
      > img {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
  }
</style>
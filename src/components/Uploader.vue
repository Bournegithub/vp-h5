<template>
  <div class="uploader-components">
    <van-uploader
      v-if="slotUsing"
      v-model="fileList"
      v-bind="$attrs"
      :capture="capture"
      :after-read="afterRead"
      :before-read="beforeRead"
      :before-delete="beforeDelete"
      @oversize="overSize"
      @click-upload="clickUpload"
      @click-preview="clickPreview"
      @close-preview="closePreview"
      @delete="deleteHandle"
    >
      <slot></slot>
    </van-uploader>
    <van-uploader
      v-else
      v-model="fileList"
      v-bind="$attrs"
      :after-read="afterRead"
      :before-read="beforeRead"
      :before-delete="beforeDelete"
      @oversize="overSize"
      @click-upload="clickUpload"
      @click-preview="clickPreview"
      @close-preview="closePreview"
      @delete="deleteHandle"
    />
  </div>
</template>

<script>
import { ref, watch, getCurrentInstance, computed, onBeforeMount } from 'vue';
import { globalApi } from '@service';
import { thousandth } from '@utils/number-formatter';

export default {
  props: {
    modelValue: {
      type: Array,
    },
    url: {
      type: String,
      default: '',
    },
    // accept: {
    //   type: String,
    //   default: '*',
    // },
    // name: {
    //   type: [Number, String],
    //   default: '',
    // },
    // previewSize: {
    //   type: [Number, String],
    //   default: '80px',
    // },
    // previewImage: {
    //   type: Boolean,
    //   default: true,
    // },
    // previewFullImage: {
    //   type: Boolean,
    //   default: true,
    // },
    // previewOptions: {
    //   type: Object,
    //   default: () => {},
    // },
    // multiple: {
    //   type: Boolean,
    //   default: false,
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false,
    // },
    // readonly: {
    //   type: Boolean,
    //   default: false,
    // },
    // deletable: {
    //   type: Boolean,
    //   default: true,
    // },
    // showUpload: {
    //   type: Boolean,
    //   default: true,
    // },
    // lazyLoad: {
    //   type: Boolean,
    //   default: false,
    // },
    // capture: {
    //   type: String,
    //   default: '',
    // },
    // maxSize: {
    //   type: [Number, String, Function],
    //   default: 'Infinity',
    // },
    // maxCount: {
    //   type: [Number, String],
    //   default: 'Infinity',
    // },
    // resultType: {
    //   type: String,
    // },
    // uploadText: {
    //   type: String,
    // },
    // imageFit: {
    //   type: String,
    //   default: 'cover',
    // },
    // uploadIcon: {
    //   type: String,
    //   default: 'photograph',
    // },
  },
  setup(props, context) {
    // 因为<slot v-if="slotUsing"></slot>不能正常渲染，所以采用了两个uploader
    const slotUsing = computed(() => {
      let result = false;
      if (context.slots.default) {
        result = true;
      }
      return result;
    });
    const fileList = ref([]);
    // const fileList = reactive(props.modelValue);
    const instance = getCurrentInstance();
    // 监控回显时
    // watch props时,下面一种写法不生效
    watch(() => props.modelValue, (n, o) => {
      /* ... */
      console.log('watch-props/n', n);
      if (fileList.value.length === 0) {
        fileList.value = n;
      }
    });
    watch(fileList, (n, o) => {
      console.log('watch-updateParent');
      context.emit('update:modelValue', fileList.value);
      context.emit('change', fileList.value);
    });
    onBeforeMount(() => {
      console.log('onBeforeMount');
      console.log('onBeforeMount-props/modelValue', props.modelValue);
      if (fileList.value.length === 0) {
        fileList.value = props.modelValue;
      }
    });
    const beforeRead = (file, detail) => {
      context.emit('before-read', file, detail);
      return true;
    };
    const afterRead = (file, detail) => {
      console.log('afterRead-file', file);
      console.log('afterRead-detail', detail);
      let params = new FormData();
      params.append('file', file.file);
      globalApi.upload(props.url, params).then((res) => {
        console.log('upload-res', res);
      }).catch(() => {

      }).finally(() => {});
      context.emit('after-read', file, detail);
    };
    const beforeDelete = (file, detail) => {
      context.emit('before-delete', file, detail);
      return true;
    };
    const overSize = (file, detail) => {
      const limitSize = thousandth(props.maxSize / (1048 * 1048));
      instance.proxy.$toast(`Max size is ${limitSize} M`);
      context.emit('oversize', file, detail);
    };
    const clickUpload = (file, detail) => {
      context.emit('click-upload', file, detail);
    };
    const clickPreview = (file, detail) => {
      context.emit('click-preview', file, detail);
    };
    const closePreview = (file, detail) => {
      context.emit('close-preview', file, detail);
    };
    const deleteHandle = (file, detail) => {
      context.emit('delete', file, detail);
    };
    return {
      slotUsing,
      fileList,
      beforeRead,
      afterRead,
      beforeDelete,
      overSize,
      clickUpload,
      clickPreview,
      closePreview,
      deleteHandle,
    }
  },
  created () {

  },
}
</script>

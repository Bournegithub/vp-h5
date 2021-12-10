<template>
  <van-popup v-model:show="modelValue" :position="position">
    <van-picker
      :columns="columns"
      v-bind="$attrs"
      @confirm="onConfirm"
      @cancel="onCancel"
      @change="onChange"
    />
  </van-popup>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'bottom',
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const closePop = () => {
      context.emit('update:modelValue', false);
    };
    const onConfirm = (val, index) => {
      closePop();
      context.emit('confirm', val);
    };
    const onCancel = () => {
      closePop();
      context.emit('cancel');
    };
    const onChange = (val, index) => {
      context.emit('change', val);
    };
    return {
      onConfirm,
      onCancel,
      onChange,
    };
  },
}
</script>
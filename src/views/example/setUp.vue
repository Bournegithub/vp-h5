<template>
  <div class="example-setUp-page">
    <NavBar />
    <div class="setUp-content">
      <van-form @failed="onFailed" @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="city"
            is-link
            readonly
            name="city"
            label="选择器"
            :required="true"
            :formatter="cityFormatter"
            placeholder="点击选择城市"
            :rules="cityRules"
            @click="cityPickerClick"
          />
            <pop-picker
              v-model="showCityPicker"
              :columns="cityColumns"
              @confirm="cityOnConfirm"
            />
        </van-cell-group>
        <div class="form-btn-wrap">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import NavBar from '@components/NavBar.vue';
import PopPicker from '@components/PopPicker.vue';
import setUpForm from './setUpForm.js';

// function setUpForm () {
//   // field city
//   // city/v-model
//   const city = ref('');
//   const cityObj = ref(null);
//   const cityRules = [
//     {
//       required: true,
//       message: '验证码不能为空',
//       trigger: 'onBlur'
//     }
//   ];
//   const cityFormatter = (val) => {
//     if (val) {
//       return cityObj.value.text;
//     }
//   };
//   // city/showpicker
//   const showCityPicker = ref(false);
//   const cityPickerClick = () => {
//     showCityPicker.value = true;
//   };
//   // city/picker
//   const cityColumns = [
//     {
//       text: '杭州',
//       key: 'hangzhou',
//     },
//     {
//       text: '宁波',
//       key: 'ningbo',
//     },
//   ];
//   const cityOnConfirm = (val) => {
//     console.log('onConfirm-val', val.text);
//     city.value = val.key;
//     cityObj.value = val;
//   };
//   // form
//   const onFailed = (errorInfo) => {
//     console.log('failed', errorInfo);
//   };
//   const onSubmit = (values) => {
//     console.log('submit', values);
//   };
//   return {
//     city,
//     cityObj,
//     cityRules,
//     cityFormatter,
//     showCityPicker,
//     cityPickerClick,
//     cityColumns,
//     cityOnConfirm,
//     onFailed,
//     onSubmit,
//   };
// };

export default {
  setup() {
    const { city, cityObj, cityRules, cityFormatter, showCityPicker, cityPickerClick, cityColumns, cityOnConfirm } = setUpForm();
    const onFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };
    const onSubmit = (values) => {
      console.log('city', city.value);
      console.log('cityObj', cityObj.value);
      console.log('submit', values);
      return values;
    };
    return {
      city,
      cityObj,
      cityRules,
      cityFormatter,
      showCityPicker,
      cityPickerClick,
      cityColumns,
      cityOnConfirm,
      onFailed,
      onSubmit,
    };
  },
  components: {
    NavBar,
    PopPicker,
  }
}
</script>

<style lang="less" scoped>
  .form-btn-wrap {
    margin: 16px;
  }
</style>

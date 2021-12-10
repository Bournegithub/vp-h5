import { ref } from 'vue';

const setUpForm = () => {
  // field city
  // city/v-model
  const city = ref('');
  const cityObj = ref(null);
  const cityRules = [
    {
      required: true,
      message: '城市不能为空',
      trigger: 'onBlur'
    }
  ];
  const cityFormatter = (val) => {
    if (val) {
      // return val;
      return cityObj.value.text;
    }
  };
  // city/showpicker
  const showCityPicker = ref(false);
  const cityPickerClick = () => {
    showCityPicker.value = true;
  };
  // city/picker
  const cityColumns = [
    {
      text: '杭州',
      key: 'hangzhou',
    },
    {
      text: '宁波',
      key: 'ningbo',
    },
  ];
  const cityOnConfirm = (val) => {
    city.value = val.key;
    cityObj.value = val;
    setTimeout(() => {
      console.log('settimeout', city.value);
    }, 1000);
  };
  // form
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
};

export default setUpForm;
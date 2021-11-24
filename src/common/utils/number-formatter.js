// const numeral = require('numeral');
import numeral from 'numeral';

// // 默认千分位及保留两位小数, 如有需要其他格式使用format()并带上参数
numeral.defaultFormat('0,0.00');

// // 千分位及保留两位小数
export const thousandth = (val) => numeral(val).format();
// export const thousandth = (val) => (+val || 0).toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');

// 获取dom元素内文本内容(用作自定义指令模拟filter用途)
export const getInnerText = (el) =>  {
  if (typeof el.textContent === 'undefined') {
    return el.innerText;
  } else {
    return el.textContent;
  }
}

// 设置dom元素内容
export const setInnerText = (el, text) => {
  //判断浏览器是否支持这个属性
  if (typeof el.textContent === 'undefined') {//不支持
    el.innerText = text;
  } else {//支持这个属性
    el.textContent = text;
  }
}

export default {};

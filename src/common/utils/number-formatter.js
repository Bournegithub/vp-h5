// const numeral = require('numeral');
import numeral from 'numeral';

// // 默认千分位及保留两位小数, 如有需要其他格式使用format()并带上参数
numeral.defaultFormat('0,0.00');

// // 千分位及保留两位小数
export const thousandth = (val) => numeral(val).format();
// export const thousandth = (val) => (+val || 0).toFixed(0).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');

export default {};

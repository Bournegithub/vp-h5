// 全局过滤器
import { thousandth } from '@utils/number-formatter';

const filterThousandth = function () {
  return (val) => {
    return thousandth(val);
  }
};

const filters = {
  filterThousandth,
};

export default filters;

// 全局指令
import { toRaw } from 'vue-demi';
import store from '@store/index';
import { getInnerText, setInnerText, thousandth } from '@utils/number-formatter';


// 模拟过滤器类型
const filterType = {
  filterThousandth: (val) => thousandth(val),
};

export const hasPermission = (field) => {
  const permission = toRaw(store.state.permission);
  if (permission && permission.length) {
    return permission.includes(field);
  }
};

const directive = (app) => {
  app.directive('focus', {
    mounted (el) {
      el.focus();
    }
  });
  app.directive('permission', {
    mounted (el, binding) {
      const permission = toRaw(store.state.permission);
      if (permission && !permission.includes(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
  app.directive('filter', {
    mounted (el, binding) {
      if (binding.value) {
        const text = getInnerText(el);
        const result = filterType[binding.value](text);
        setInnerText(el, result);
        return el;
      }
    }
  });
};

export default directive;

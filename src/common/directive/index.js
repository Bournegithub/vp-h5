// 全局指令
import { toRaw } from 'vue-demi';
import store from '@store/index';

let permission = [];

setTimeout(() => {
  permission = toRaw(store.state.permission);
  // console.log('directive-permission', permission);
}, 800);

export const hasPermission = (field) => {
  return permission.includes(field);
};

const directive = (app) => {
  app.directive('focus', {
    mounted (el) {
      el.focus();
    }
  });
  app.directive('permission', {
    mounted (el, binding) {
      if (!hasPermission(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });
};

export default directive;

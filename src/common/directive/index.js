// 全局指令
import { toRaw } from 'vue-demi';
import store from '@store/index';
import { getInnerText, setInnerText, thousandth } from '@utils/number-formatter';


// 模拟过滤器类型
const filterType = {
  filterThousandth: (val) => thousandth(val),
  // 后续添加
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
  // v-filter请加在最后一层dom节点上
  app.directive('filter', {
    mounted (el, binding, vnode) {
      if (binding.value) {
        const text = getInnerText(el);
        let result = text;
        if (text && text !== '') {
          result = filterType[binding.value](text);
        }
        // const result = filterType[binding.value](text);
        setInnerText(el, result);
        return el;
      }
    },
    updated (el, binding, vnode) {
      if (vnode && vnode.children && vnode.children[0] && vnode.children[0].el) {
        const text = vnode.children[0].el.nodeValue;
        let result = text;
        if (text && text !== '') {
          result = filterType[binding.value](text);
        }
        setInnerText(el, result);
        return el;
      }
    }
  });
};

export default directive;

// filter mixins
// vue 3.x中删除了过滤器，推荐使用computed来实现.为了目录结构清晰，以及utils文件夹内功能函数的单一性，将需要使用的全局过滤器作用的计算属性集中放置在flter文件夹内,如需调用utils内功能函数也要保证utils文件夹内功能函数的单一性,引入到混入对象
import globalFilters from '@filter/index.js';

const globalMixin = {
  computed: {
    ...globalFilters,
  },
  methods: {
    clickTest () {
      this.$toast('clickTest');
    }
  },
};
export default globalMixin;

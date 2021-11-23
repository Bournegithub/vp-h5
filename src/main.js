import { createApp } from 'vue';
import 'amfe-flexible/index.js';
import ECharts from 'vue-echarts';
import { use } from "echarts/core";
// import {CanvasRenderer} from 'echarts/renderers';
import { SVGRenderer } from 'echarts/renderers'; // 内存占用低，相对比较适合移动端
import { LineChart, BarChart, PieChart } from 'echarts/charts';
import {
  TitleComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  DatasetComponent,
  SingleAxisComponent,
  AxisPointerComponent,
  MarkPointComponent,
  MarkLineComponent,
  ToolboxComponent,
} from 'echarts/components';
import App from './App.vue';
import router from '@router/index';
import store from '@store/index';
import vantImport from '@utils/vantImport';
import i18n from '@locale/index';
import globalMixin from '@mixins/index';
import directive, { hasPermission } from '@directive/index';
import '@utils/rem';
import '@assets/style/iconfont.css'; // 引入图标字体
import '@assets/style/main.less';

use([
  // CanvasRenderer,
  SVGRenderer,
  LineChart,
  BarChart,
  PieChart,
  TitleComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  DatasetComponent,
  SingleAxisComponent,
  AxisPointerComponent,
  MarkPointComponent,
  MarkLineComponent,
  ToolboxComponent,
])

const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(store);
vantImport(app); // 为避免main.js过于臃肿，将按需引入的组件放置在utils/vantImport
directive(app); // 全局自定义指令
app.mixin(globalMixin); // 全局混入， 将作为全局过滤器使用的计算属性和全局函数混入
app.component('v-chart', ECharts);
app.config.globalProperties.$i18n = i18n; // i18n挂载到全局
app.config.globalProperties.$hasPermission = hasPermission; // hasPermission挂载到全局
// console.log('app.config', app.config);
app.mount('#app');

import { ConfigProvider, Icon, Button, Cell, CellGroup, Grid, GridItem, NavBar, Toast, Switch, Popover, Form, Field, Uploader, Picker, Popup } from 'vant';

// 通过 ConfigProvider 可以覆盖vant默认样式 需要在根节点包裹一个 ConfigProvider 组件，并通过 theme-vars 属性来配置一些主题变量。示例见vant@3x文档
// Vant 中的 CSS 变量分为 基础变量 和 组件变量。组件变量会继承基础变量，因此在修改基础变量后，会影响所有相关的组件
// 基础变量只能通过 root 选择器 修改，不能通过 ConfigProvider 组件 修改。
// 组件变量可以通过 root 选择器 和 ConfigProvider 组件 修改。
// 具体详见vant文档
export default function vant (app) {
  app.use(ConfigProvider);
  app.use(Icon);
  app.use(Button);
  app.use(Cell);
  app.use(CellGroup);
  app.use(Grid);
  app.use(GridItem);
  app.use(NavBar);
  app.use(Toast);
  app.use(Switch);
  app.use(Popover);
  app.use(Form);
  app.use(Field);
  app.use(Uploader);
  app.use(Picker);
  app.use(Popup);
};

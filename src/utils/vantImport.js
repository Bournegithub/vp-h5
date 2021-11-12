import { ConfigProvider, Icon, Button, Cell, CellGroup, Grid, GridItem, NavBar, Toast } from 'vant';

// 通过 ConfigProvider 可以覆盖vant默认样式 需要在根节点包裹一个 ConfigProvider 组件，并通过 theme-vars 属性来配置一些主题变量。示例见vant@3x文档

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
};

# vp-h5
基于vue的h5项目模板（vue3/vite）

### 背景
h5项目的一个起手模板，方便迅速开发。UI框架使用Vant。

### 使用
* 可从Github直接拉取代码
* 或者使用v-project-cli脚手架选择h5模板（https://www.npmjs.com/package/v-project-cli）。<br/>
  npm install -g v-project-cli <br/>
  安装完成后使用 vp init my-project命令 选择h5拉取代码<br/>

  http ok<br/>
  路由 ok<br/>
  权限 <br/>
  rem ok<br/>
  国际化 ok <br/>
  iconfont ok <br/>
  store ok<br/>
  图表 (暂时使用vue-echarts) <br/>
  filter ok(3.x过滤器被删除，不再受支持。官方建议用函数调用或计算属性替换它们，本模板内使用计算属性模拟全局filter)<br/>
  mixin ok<br/>
  directives <br/>

### 部分目录
* http: axios请求拦截,响应拦截
* service: 接口列表
* common: 公用函数
  * filter: 过滤器 (3.x已取消过滤器，本模板内使用计算属性模拟全局filter，文件夹只是为了存放全局使用的过滤器作用的计算属性使用)
  * mixins: 全局混入对象
  * utils: 工具函数
  * columns: 存放表格固定表头
* local: 国际化

### 注意事项
package.json锁定版本 <br/>
less中无法正确计算calc的问题 解决方法：在表达式前添加"~" height: calc(~"100% - 50px");

# vp-h5
基于vue的h5项目模板（vue3/vite）
基于vue3+Vite+Vant搭建一套通用的移动端模板；按照常见业务场景，给出常见功能使用示例: http封装(请求/响应拦截、api列表)/路由/权限/rem/国际化/自定义图标字体/模块化store/图表(vue-echarts)/模拟过滤器(3.x过滤器被删除，不再受支持)/全局混入/全局自定义指令/事件总线/上传/下载以及相关组件的封装，setup示例等等

### 背景
h5项目的一个起手模板，方便迅速开发。UI框架使用Vant。

### 使用
* 可从Github直接拉取代码
* 或者使用v-project-cli脚手架选择h5模板（https://www.npmjs.com/package/v-project-cli）。<br/>
  npm install -g v-project-cli <br/>
  安装完成后使用 vp init my-project命令 选择h5拉取代码<br/>

  http ok <br/>
  路由 ok <br/>
  权限 ok <br/>
  rem ok <br/>
  国际化 ok <br/>
  iconfont ok <br/>
  store ok <br/>
  图表 (暂时使用vue-echarts) ok <br/>
  filter ok(3.x过滤器被删除，不再受支持。官方建议用函数调用或计算属性替换它们，本模板内使用 混入计算属性/自定义全局fiter指令 模拟全局filter)<br/>
  mixin ok <br/>
  directives ok <br/>
  事件总线(mitt) ok <br/>
  upload half <br/>
  download half <br/>

### 部分目录
* assets
  * lang: 语言文件
* http: axios请求拦截,响应拦截
* service: 接口列表
* common: 公用函数
  * filter: 过滤器 (3.x已取消过滤器，本模板内使用计算属性模拟全局filter，文件夹只是为了存放全局使用的过滤器作用的计算属性使用)
  * mixins: 全局混入对象
  * utils: 工具函数
  * columns: 存放表格固定表头
  * directive: 自定义指令
* local: 国际化

### 注意事项
package.json锁定版本 <br/>
less中无法正确计算calc的问题 解决方法：在表达式前添加"~" height: calc(~"100% - 50px"); <br/>
用自定义指令模拟的v-filter过滤指令,需绑定在离过滤内容最近的DOM上 <br/>
登录界面随意输入即可登录

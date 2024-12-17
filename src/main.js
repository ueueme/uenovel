// 导入 createApp 函数，用于创建 Vue 应用实例
import { createApp } from "vue";
// 导入根组件 App.vue
import App from "./App.vue";
// 导入路由配置文件 router.js
import router from "./router";
// 导入状态管理文件 store.js
import store from "./store";

// 使用 createApp 函数创建 Vue 应用实例，并将 App 组件作为根组件传入
const app = createApp(App);

// 引入 rem 适配文件，用于适配不同屏幕尺寸
import "@/utils/rem";

// 引入 normalize.css 文件，用于统一浏览器的默认样式
import "normalize.css/normalize.css";
// 引入自定义的基础样式文件 base.scss
import "@/assets/css/base.scss";

// 引入 Varlet UI 组件库，并注册使用
import Varlet from "@varlet/ui";
import "@varlet/ui/es/style";

// 引入 Vant 组件库中的部分组件，并注册使用
import { List, Empty, Lazyload, Form, Field, CellGroup } from "vant";
import "vant/lib/index.css";

// 引入工具函数文件 tool.js，用于监听 localStorage 的变化
import tool from "./utils/tool.js";

// 注册插件和组件
app
  .use(store)
  .use(router)
  .use(Varlet)
  .use(List)
  .use(Empty)
  .use(Lazyload)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(tool);

// 将 Vue 应用实例挂载到 id 为 app 的 DOM 元素上
app.mount("#app");

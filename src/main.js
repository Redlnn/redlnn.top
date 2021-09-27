import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createMetaManager } from 'vue-meta'
import ElementPlus from "element-plus";
import zhCN from "element-plus/lib/locale/lang/zh-cn";
import "./element-variables.scss";

const app = createApp(App);
app.use(router);
app.use(createMetaManager());
app.use(ElementPlus, { locale: zhCN });

app.mount("#app");

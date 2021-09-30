import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createMetaManager, defaultConfig } from "vue-meta";

const app = createApp(App);
app.use(router);
app.use(
    createMetaManager(false, {
        ...defaultConfig,
        meta: { tag: "meta", nameless: true }
    })
); // https://github.com/nuxt/vue-meta/issues/696#issuecomment-878377182

router.isReady().then(() => app.mount("#app"));

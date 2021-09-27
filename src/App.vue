<template>
    <metainfo></metainfo>
    <el-header id="nav">
        <el-menu
            class="noselect"
            :default-active="this.$route.path"
            mode="horizontal"
            router
        >
            <el-menu-item
                index="#999#"
                disabled
                class="nav-logo"
                :route="this.$route.path"
            >
                <span>
                    <img
                        src="@/assets/img/avatar.webp"
                        alt="logo"
                    /><b>Red_lnn</b>
                </span>
            </el-menu-item>
            <el-menu-item
                v-for="(item, key) in navItems"
                :key="key"
                :index="item.indexPath"
                :route="item.activeIndex"
                >{{ item.name }}</el-menu-item
            >
            <el-menu-item index="#" key="https://blog.redlnn.top/"
                ><a href="https://blog.redlnn.top/" target="_self"
                    >Blog</a
                ></el-menu-item
            >
            <el-sub-menu :index="this.$route.path">
                <template #title>一些东西</template>
                <el-menu-item index="/mcmod/"
                    >Minecraft 常用模组列表</el-menu-item
                >
            </el-sub-menu>
        </el-menu>
    </el-header>
    <div :style="{ height: screenHeight - 61 + 'px' }" style="overflow:hidden;">
        <el-scrollbar>
            <el-backtop target=".el-scrollbar__wrap"></el-backtop>
            <el-main>
                <router-view v-slot="{ Component }">
                    <transition name="slide-fade" mode="out-in">
                        <component :is="Component" />
                    </transition>
                </router-view>
            </el-main>
            <el-footer>
                <div class="footer noselect">
                    © 2021 Red_lnn&nbsp;&nbsp;<a
                        href="http://beian.miit.gov.cn/"
                        >粤ICP备19155362号</a
                    >
                </div>
            </el-footer></el-scrollbar
        >
    </div>
</template>

<script>
import { useMeta } from "vue-meta";

const author = "Red_lnn";

export default {
    name: "App",
    setup() {
        // https://github.com/nuxt/vue-meta/issues/696#issuecomment-878377182
        useMeta({
            meta: [
                { name: "author", content: author },
                { name: "publisher", content: author }
            ],
        });
    },
    data() {
        return {
            navItems: [
                { name: "首页", indexPath: "/", index: "1" },
                { name: "关于我", indexPath: "/about/", index: "2" }
            ],
            // screenWidth: document.body.clientWidth,
            screenHeight: document.documentElement.clientHeight
        };
    },
    mounted() {
        window.onresize = () => {
            this.screenHeight = document.documentElement.clientHeight;
        };
        // prerender-spa-plugin预渲染. for renderAfterDocumentEvent
        document.dispatchEvent(new Event("render-active"));
    },
    watch: {
        screenHeight(newValue) {
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if (!this.timer) {
                // 一旦监听到的screenHeight值改变，就将其重新赋给data里的screenHeight
                this.screenHeight = newValue;
                this.timer = true;
                setTimeout(() => {
                    // console.log(this.screenHeight);
                    this.timer = false;
                }, 500);
            }
        }
    },
    computed: {}
};
</script>

<style lang="scss">
body,
html,
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "San Francisco", "Helvetica Neue", "Segoe UI Variable",
        "Segoe UI", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB",
        "Microsoft YaHei UI", sans-serif;
    color: var(--el-text-color-primary);
    text-align: center;
}

#nav {
    width: 100%;
    height: 100%;
}

.el-popper .el-menu--popup {
    padding: 10px !important;
}

.el-menu-item a {
    text-decoration: none;
    color: inherit;
}

.nav-logo {
    color: var(--el-menu-item-font-color) !important;
    font-size: var(--el-font-size-medium) !important;
    opacity: 1 !important;
}

.nav-logo img {
    height: 35px;
    width: auto;
    margin-right: 8px;
    border-radius: 100%;
}

.el-footer,
footer {
    vertical-align: middle;
    font-size: var(--el-font-size-base);
    text-align: center;
    color: var(--el-text-color-secondary);
}

.footer > a {
    color: var(--el-text-color-secondary);
    text-decoration: none;
}

.el-popper {
    border-radius: 10px !important;
}

.el-menu--popup {
    min-width: 150px !important;
    padding: 10px 0 !important;
    border-radius: 10px !important;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-sub-menu__title {
    border-radius: 5px;
}

.noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.slide-fade-enter-active {
    transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}
</style>

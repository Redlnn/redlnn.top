<template>
    <div id="nav">
        <el-header class="noselect">
            <el-menu
                :default-active="this.$route.path"
                mode="horizontal"
                router
            >
                <el-menu-item disabled class="nav-logo">
                    <span
                        ><img src="./assets/logo.jpg" alt="logo" /><b
                            >Red_lnn</b
                        ></span
                    >
                </el-menu-item>
                <el-menu-item
                    v-for="(item, key) in leftNavItems"
                    :key="key"
                    :index="item.indexPath"
                    :route="item.activeIndex"
                    >{{ item.name }}</el-menu-item
                >
                <el-submenu
                    style="float: right"
                    class="right-item"
                    v-if="
                        Object.keys(rightNavItems).length === 0 ? false : true
                    "
                    index="10"
                >
                    <template #title>
                        <img
                            src="./assets/more.svg"
                            style="height: 24px; width: 24px"
                        />
                    </template>
                    <el-menu-item
                        :key="key"
                        v-for="(item, key) in rightNavItems"
                        :index="item.index"
                        :route="item.activeIndex"
                        >{{ item.name }}</el-menu-item
                    >
                </el-submenu>
            </el-menu>
        </el-header>
        <div
            :style="{ height: screenHeight - 61 + 'px' }"
            style="overflow: hidden"
        >
            <el-scrollbar>
                <el-backtop
                    target=".el-scrollbar__wrap"
                    right="50"
                    bottom="50"
                ></el-backtop>
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
    </div>
</template>

<script>
// import { defineComponent, ref } from 'vue';

export default {
    name: "App",
    data() {
        return {
            navItems: [
                { name: "首页", indexPath: "/", index: "1" },
                { name: "关于我", indexPath: "/about", index: "2" },
            ],
            screenWidth: document.body.clientWidth,
            screenHeight: document.documentElement.clientHeight,
            transitionName: "",
        };
    },
    mounted() {
        window.onresize = () => {
            this.screenWidth = document.body.clientWidth;
            this.screenHeight = document.documentElement.clientHeight;
        };
    },
    watch: {
        // $route() {},
        screenWidth(newValue) {
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if (!this.timer) {
                // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
                this.screenWidth = newValue;
                this.timer = true;
                setTimeout(() => {
                    //console.log(this.screenWidth);
                    this.timer = false;
                }, 500);
            }
        },
        screenHeight(newValue) {
            // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
            if (!this.timer) {
                // 一旦监听到的screenHeight值改变，就将其重新赋给data里的screenHeight
                this.screenHeight = newValue;
                this.timer = true;
                setTimeout(() => {
                    //   console.log(this.screenHeight);
                    this.timer = false;
                }, 500);
            }
        },
    },
    computed: {
        leftNavItems: function() {
            return this.screenWidth >= 600 ? this.navItems : {};
        },
        rightNavItems: function() {
            return this.screenWidth < 600 ? this.navItems : {};
        },
    },
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

.el-menu {
    background-color: inherit !important;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus {
    background-color: inherit !important;
}

.nav-logo {
    opacity: 1 !important;
    color: var(--el-menu-item-font-color) !important;
    font-size: var(--el-font-size-medium) !important;
}

.nav-logo img {
    height: 60%;
    border-radius: 100%;
    margin-right: 8px;
}

.el-footer,
footer {
    text-align: center;
    vertical-align: middle;
    color: var(--el-text-color-secondary);
    font-size: var(--el-font-size-base);
}

.footer > a {
    color: var(--el-text-color-secondary);
    text-decoration: none;
}

.noselect {
    -webkit-user-select: none;
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

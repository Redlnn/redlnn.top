<template>
    <div>
        <el-image
            src="https://sdn.geekzu.org/avatar/ca8a920ae3afca0139b116c033b00138?s=800"
            class="logo noselect"
            title="Logo"
            alt="Logo"
        >
            <template #placeholder>
                <div class="image-slot">
                    <el-icon :size="30" class="is-loading">
                        <Loading />
                    </el-icon>
                </div>
            </template>
            <template #error>
                <div class="image-slot">
                    <el-icon :size="30">
                        <PictureRounded />
                    </el-icon>
                </div>
            </template>
        </el-image>
        <div>
            <h1>Red_lnn</h1>
            <p>是个社恐 | 游戏渣</p>
            <p>
                这里是个简简单单的主页，什么都没有<br />（<del>主要是这人蠢蠢的，连上面的设定都想不出来</del>）
            </p>
            <p
                style="font-size:var(--el-font-size-base);color:var(--el-text-color-secondary)"
            >
                小水管服务器，各位大佬下手轻点可好
            </p>
            <div>
                <a href="https://github.com/Redlnn"
                    ><img
                        src="@/assets/github.svg"
                        class="svg"
                        title="Github"
                        alt="Github"/></a
                ><a href="https://space.bilibili.com/20858581"
                    ><img
                        src="@/assets/bilibili.svg"
                        class="svg"
                        title="哔哩哔哩"
                        alt="哔哩哔哩"/></a
                ><a href="https://music.163.com/#/user/home?id=333710186"
                    ><img
                        src="@/assets/netease-cloud-music.svg"
                        class="svg"
                        title="网易云音乐"
                        alt="网易云音乐"/></a
                ><a href="/about"
                    ><img
                        src="@/assets/share.svg"
                        class="svg"
                        title="更多"
                        alt="更多"
                        style="height: 43px;"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import { Loading } from "@element-plus/icons";
import { PictureRounded } from "@element-plus/icons";

export default {
    name: "Home",
    components: {
        Loading,
        PictureRounded
    }
};
</script>

<style lang="scss" scoped>
a {
    color: var(--el-color-primary);
}

.logo {
    height: auto;
    margin: 24px 0;
    border-radius: var(--el-border-radius-circle);
}

@media screen and (max-width: 260px) {
    .logo {
        width: 100%;
    }
}

@media screen and (max-height: 1000px) and (min-width: 260px) {
    .logo {
        width: 260px;
    }
}

@media screen and (min-height: 1000px) and (min-width: 450px) {
    .logo {
        width: 450px;
    }
}

.svg {
    height: 40px;
    margin: 0 10px;
    margin-top: 20px;
    vertical-align: middle;
    line-height: 40px;
    font-size: 40px;
}
</style>

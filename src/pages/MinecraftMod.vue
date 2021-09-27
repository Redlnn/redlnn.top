<template>
    <div>
        <el-row>
            <el-col :xs="0" :sm="2" :md="3" :lg="5" :xl="6"></el-col>
            <el-col :xs="24" :sm="20" :md="18" :lg="14" :xl="12"
                ><el-alert
                    title="该列表仅包含 1.16 开始常用的模组，仅适用于 Fabric 端，如有修改或添加建议请联系 Red_lnn"
                    type="success"
                    center
                    show-icon
                    :closable="closable"
                    style="margin: 10px;"
                ></el-alert>
                <el-alert
                    title="Optifine替代品列表：https://gist.github.com/LambdAurora/1f6a4a99af374ce500f250c6b42e8754"
                    type="info"
                    center
                    show-icon
                    :closable="closable"
                    style="margin: 10px;"
                ></el-alert>
                <el-alert
                    title="列表内部分模组存在互相冲突的情况，请勿盲目添加"
                    type="warning"
                    center
                    show-icon
                    :closable="closable"
                    style="margin: 10px;"
                ></el-alert>
                <el-alert
                    title="本页面正在测试与完善，部分简介、分类、适用范围存在问题"
                    type="error"
                    center
                    show-icon
                    :closable="closable"
                    style="margin: 10px;"
                ></el-alert
            ></el-col>
            <el-col :xs="0" :sm="2" :md="3" :lg="5" :xl="6"></el-col>
        </el-row>
        <!-- <el-row>
            <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="5"></el-col>
            <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="14">
                <el-divider content-position="center"
                    ><span style="color:var(--el-text-color-placeholder);"
                        >我 是 分 割 线</span
                    ></el-divider
                ></el-col
            >
            <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="5"></el-col>
        </el-row> -->
        <el-row>
            <el-col :xs="0" :sm="0" :md="0" :lg="0" :xl="2"></el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="20">
                <el-table
                    stripe
                    :data="tableData"
                    :cell-class-name="desc"
                    :height="screenHeight - 91"
                >
                    <el-table-column
                        prop="name"
                        label="模组名称"
                        min-width="100"
                        sortable
                    ></el-table-column>
                    <el-table-column
                        prop="nameCN"
                        label="中文名称"
                        width="100"
                        sortable
                    ></el-table-column>
                    <el-table-column
                        prop="type"
                        label="分类"
                        width="90"
                        sortable
                        :filters="[
                            { text: '辅助操作', value: '辅助操作' },
                            { text: '增加功能', value: '增加功能' },
                            { text: '修改界面', value: '修改界面' },
                            { text: '性能优化', value: '性能优化' },
                            { text: '联机优化', value: '联机优化' },
                            { text: '前置API', value: '前置API' },
                            { text: '信息展示', value: '信息展示' },
                            { text: '地图', value: '地图' },
                            { text: '其他', value: '其他' }
                        ]"
                        :filter-method="filterHandler"
                    ></el-table-column>
                    <el-table-column
                        prop="applation"
                        label="适用范围"
                        width="120"
                        sortable
                        :filters="[
                            { text: '客户端', value: '客户端' },
                            { text: '服务端', value: '服务端' },
                            { text: '通用', value: '通用' }
                        ]"
                        :filter-method="filterHandler"
                    ></el-table-column>
                    <el-table-column
                        prop="desc"
                        label="简介"
                        min-width="250"
                    ></el-table-column>
                    <el-table-column
                        prop="download"
                        label="相关地址"
                        width="350"
                    >
                        <template #default="scope">
                            <a
                                v-bind:href="scope.row.url"
                                v-if="scope.row.url"
                                class="button official"
                                style="font-weight: 600;letter-spacing: .1rem;"
                                >官方网站</a
                            >
                            <a
                                v-bind:href="scope.row.modrinth"
                                v-if="scope.row.modrinth"
                                class="button modrinth"
                                ><img
                                    src="@/assets/modrinth.svg"
                                    style="height: 1.1rem;"
                            /></a>
                            <a
                                v-bind:href="scope.row.curseforge"
                                v-if="scope.row.curseforge"
                                class="button curseforge"
                                ><img
                                    src="@/assets/anvil.svg"
                                    style="width: 1.3rem; margin-right: .3rem;"/><img
                                    src="@/assets/cf-logo.svg"
                                    style="height: .6rem;"
                            /></a>
                            <a
                                v-bind:href="scope.row.github"
                                v-if="scope.row.github"
                                class="button github"
                                style="font-weight: 600;letter-spacing: .03rem;"
                                ><img
                                    src="@/assets/github1.svg"
                                    style="height: 1.1rem; margin-right: .3rem;"
                                />GitHub</a
                            >
                            <a v-if="scope.row.other_url">{{
                                scope.row.other_url
                            }}</a>
                        </template>
                    </el-table-column>
                    <el-table-column prop="mcmod" label="mc百科" width="100">
                        <template #default="scope">
                            <a
                                v-bind:href="scope.row.mcmod"
                                v-if="scope.row.mcmod"
                                class="button mcmod"
                                ><img
                                    src="@/assets/mcmod.png"
                                    style="height: 1.1rem;"
                            /></a>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :xs="0" :sm="0" :md="0" :lg="0" :xl="2"></el-col>
        </el-row>
    </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
    name: "MinecraftMod",
    setup() {
        useMeta({
            keywords: "Red_lnn,我的世界,Minecraft,mod,模组",
            description: "Red_lnn 的 Minecraft 模组列表 | 这里是 Red_lnn 的小空间，感谢你的来访"
        });
    },
    data() {
        return {
            tableData: [
                {
                    name: "Advanced Chat",
                    nameCN: "高级聊天",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "对话框拥有更多功能，增加各类可配置项目，可以查询聊天记录。\n会使Chat Calc、Chat Emote、Chat Heads、Chat Up等所有聊天框相关Mod失效",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/advancedchat/files",
                    mcmod: "123"
                },
                {
                    name: "Advancement Info",
                    nameCN: "成就信息",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "显示成就的具体描述，提示所缺少的条件",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/advancementinfo/files"
                },
                {
                    name: "AFKPeace",
                    nameCN: "安心挂机",
                    type: "联机优化",
                    applation: "客户端",
                    desc:
                        "让你安心挂机的Mod，提供了断线重连、受伤断连等功能，并都是可配置的",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/afkpeace/files"
                },
                {
                    name: "Amecs",
                    type: "增加功能",
                    applation: "客户端",
                    desc:
                        "添加更多按键绑定选择，原版一次直接绑定一个键，安装此mod后，你可以像这样绑定键：（contro+ALt+Shift+c）添加搜索条，可以搜索已绑定的按键，amecs允许一个键只绑定多种功能。与optifine有冲突",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/amecs/files"
                },
                {
                    name: "AntiGhost",
                    nameCN: "反幽灵方块",
                    type: "联机优化",
                    applation: "通用",
                    desc:
                        "通过强制要求服务器重新发送周边的方块信息达到取消客户端的幽灵方块的效果，可能会加大服务器压力",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/antighost/files"
                },
                {
                    name: "AppleSkin",
                    nameCN: "苹果皮",
                    type: "信息展示",
                    applation: "通用",
                    desc: "饱和度显示",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/appleskin/files"
                },
                {
                    name: "Architectury",
                    type: "前置API",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/architectury-fabric/files"
                },
                {
                    name: "audiooutput",
                    nameCN: "音频输出设备选择",
                    type: "增加功能",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/audio-output/files"
                },
                {
                    name: "Auth Me",
                    type: "联机优化",
                    applation: "客户端",
                    desc: "游戏内正版登录/切换正版账号，外置登录/离线用户勿装",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/auth-me/files",
                    modrinth: "https://modrinth.com/mod/auth-me"
                },
                {
                    name: "AuthDomain",
                    type: "增加功能",
                    applation: "服务端",
                    desc:
                        "禁止玩家使用未经允许的域名进入服务器，或者是未使用允许域名的查询服务器状态请求",
                    github: "https://github.com/Forgot-Dream/Authdomain",
                    modrinth: "https://www.bilibili.com/read/cv9786524"
                },
                {
                    name: "Auto Reconnect",
                    nameCN: "自动重连",
                    type: "联机优化",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/autoreconnect/files"
                },
                {
                    name: "Autofish",
                    nameCN: "自动钓鱼",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "在部分服务器可能会当作作弊处理",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/autofish/files"
                },
                {
                    name: "BBOR\nBounding Box Outline Reloaded",
                    type: "信息展示",
                    applation: "通用",
                    desc:
                        "查看结构、生物群系边界，服务器使用需配合服务器mod，建议使用MiniHUD代替",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/bounding-box-outline-reloaded/files"
                },
                {
                    name: "Beenfo",
                    nameCN: "蜂箱信息查看",
                    type: "信息展示",
                    applation: "通用",
                    desc: "在背包鼠标悬浮菜单查看蜂箱信息",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/beenfo/files",
                    modrinth: "https://modrinth.com/mod/beenfo"
                },
                {
                    name: "Better Beds",
                    nameCN: "更好的床",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "使床以普通方块而不是方块实体的方式渲染\n（可以提升渲染速度。并自带床模型及床连接的材质包。）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/better-beds/files",
                    modrinth: "https://modrinth.com/mod/better-beds"
                },
                {
                    name: "Better Enchanted Books",
                    nameCN: "更好的附魔书",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "可以给附魔书添加专属材质",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/better-enchanted-books/files"
                },
                {
                    name: "Better Local Server",
                    nameCN: "更好的局域网联机",
                    type: "联机优化",
                    applation: "客户端",
                    desc: "为“对局域网开放”添加更多可配置项目",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/better-local-server/files"
                },
                {
                    name: "Better Minecart Rotation",
                    nameCN: "更好的矿车视角",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "让玩家的视角自动跟随矿车旋转",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/minecart-direction-follow/files"
                },
                {
                    name: "Better Ping Display",
                    nameCN: "更好的ping显示",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "在tab显示所有玩家的ping值",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/better-ping-display-fabric/files"
                },
                {
                    name: "Better Sodium Video Settings Button",
                    nameCN: "钠的更好的视频设置",
                    type: "性能优化",
                    applation: "客户端",
                    desc: "保留原版的视频设置，让钠的配置界面显得不那么突兀",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/better-sodium-video-settings-button/files"
                },
                {
                    name: "Better Third Person",
                    nameCN: "更好的第三人称",
                    type: "其他",
                    applation: "客户端",
                    desc:
                        "在第三人称中按方向键移动会带动人物身体转动，来达到更加舒适的第三人称视角\n与Perspective Mod Redux存在功能性兼容问题，会使视角转动看起来比较奇怪。\n与Camera Overhaul存在功能性兼容问题，会使第三人称中出现奇怪的抖动。",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/better-third-person/files"
                },
                {
                    name: "BetterF3",
                    nameCN: "更好的F3",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "F3界面分类、动画、上色",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/betterf3/files",
                    modrinth: "https://modrinth.com/mod/betterf3"
                },
                {
                    name: "Borderless Mining",
                    nameCN: "无边框窗口",
                    type: "其他",
                    applation: "客户端",
                    desc:
                        "可以将MC全屏更改成无边框全屏，避免切换窗口时游戏窗口最小化",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/borderless-mining/files"
                },
                {
                    name: "Break Process",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "Hwyla/WTHIT 附属 - 显示破坏进度",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/break-progress/files"
                },
                {
                    name: "Bright Ore",
                    nameCN: "矿物高亮",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "可能涉及作弊",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/bright-ore/files"
                },
                {
                    name: "Camera Overhaul",
                    nameCN: "镜头改造",
                    type: "其他",
                    applation: "客户端",
                    desc:
                        "添加非常明显的镜头摇晃效果，会使画面看起来很晕，建议可以调小效果，获得微小的视觉效果提升。\n与Better Third Person存在功能性兼容问题，会使第三人称中的某些视角下出现画面抖动。",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/cameraoverhaul/files"
                },
                {
                    name: "cAn i MiNe thIS bLOCk?",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "Hwyla/WTHIT 附属 - 显示可破坏情况",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/can-i-mine-this-block/files"
                },
                {
                    name: "Carpet",
                    nameCN: "地毯",
                    type: "增加功能",
                    applation: "通用",
                    github: "https://github.com/gnembon/fabric-carpet/releases"
                },
                {
                    name: "Carpet Extra",
                    nameCN: "地毯扩展",
                    type: "增加功能",
                    applation: "通用",
                    desc: "给地毯添加更多功能，需要地毯作为前置",
                    github: "https://github.com/gnembon/carpet-extra/releases"
                },
                {
                    name: "Carpet TIS Addition",
                    nameCN: "TIS地毯扩展",
                    type: "增加功能",
                    applation: "通用",
                    desc:
                        "给地毯添加更多功能，由TIS服务器开发，需要地毯作为前置",
                    github:
                        "https://github.com/TISUnion/Carpet-TIS-Addition/releases"
                },
                {
                    name: "Carpet TCTC Addition",
                    nameCN: "TCTC地毯扩展",
                    type: "增加功能",
                    applation: "通用",
                    desc: "给地毯添加更多功能，需要地毯作为前置",
                    github:
                        "https://github.com/The-Cat-Town-Craft/Carpet-TCTC-Addition"
                },
                {
                    name: "Chat Heads",
                    nameCN: "聊天头像",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "在聊天框中显示玩家头像",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/chat-heads/files"
                },
                {
                    name: "Chat Up!",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "gnembon写的一个小Mod，把聊天框的位置稍微提高了10个像素，就不会挡住盔甲栏了。",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/chat-up/files"
                },
                {
                    name: "Cherished Worlds",
                    nameCN: "值得珍惜的存档",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "为单人游戏存档添加收藏按钮并置顶",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/cherished-worlds-fabric/files"
                },
                {
                    name: "Chunk Borders",
                    nameCN: "区块边界",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "显示区块边界，比原版的F3+G简洁一些。打开配置页面可能会导致游戏崩溃",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/chunkborders/files"
                },
                {
                    name: "ClickThrough",
                    type: "辅助操作",
                    applation: "客户端",
                    desc:
                        "在右键贴在箱子（等容器）上的牌子（展示框）时，变为越过牌子右键箱子，要右键牌子请按住shift的同时右键，可能会被认为是作弊",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/clickthrough/files"
                },
                {
                    name: "Cloth API",
                    type: "前置API",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/cloth-api/files"
                },
                {
                    name: "Cloth Config API",
                    type: "前置API",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/cloth-config/files"
                },
                {
                    name: "Color Unchained",
                    nameCN: "彩色字体",
                    type: "增加功能",
                    applation: "通用",
                    desc: "需要服务器和客户端同时安装才有用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/color-unchained/files"
                },
                {
                    name: "Colormatic",
                    nameCN: "自定义色彩",
                    type: "增加功能",
                    applation: "客户端",
                    desc:
                        "自定义客户端显示的各种颜色（不影响服务端）：不同生物群系下的天空、水、部分方块、水下视角、岩浆下视角、迷雾的颜色；不同维度的光照映射；聊天颜色；染料颜色",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/colormatic/files"
                },
                {
                    name: "CompleteConfig",
                    type: "前置API",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/completeconfig/files"
                },
                {
                    name: "Controlling For Fabric",
                    nameCN: "键位冲突显示",
                    type: "增加功能",
                    applation: "客户端",
                    desc:
                        "为控制菜单添加搜索栏、查看冲突与未绑定快捷键等，与Amecs功能类似。",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/controlling-for-fabric/files"
                },
                {
                    name: "Cull Leaves",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "使树叶的渲染方式与Optifine中设置为“快速”一样\n效果建议看网页内的预览图",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/cull-leaves/files",
                    modrinth: "https://modrinth.com/mod/cull-leaves"
                },
                {
                    name: "Custom Fog",
                    nameCN: "自定义迷雾",
                    type: "性能优化",
                    applation: "客户端",
                    desc: "像Optifine一样自定义迷雾的距离与浓度",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/custom-fog/files"
                },
                {
                    name: "Custom skin loader",
                    nameCN: "万用皮肤补丁",
                    type: "其他",
                    applation: "客户端",
                    desc: "显示第三方皮肤站的皮肤和披风（不支持opt披风）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/customskinloader/files"
                },
                {
                    name: "Damage Tilt",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "优化受伤动画，当玩家受到伤害时会抖动视角，模拟真实的受伤视角",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/damage-tilt/files"
                },
                {
                    name: "Dark Loading Screen",
                    nameCN: "黑暗加载界面",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "把启动加载界面背景的红色改为黑色，还可以更改Mojang logo的颜色",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/dark-loading-screen/files"
                },
                {
                    name: "DashLoader",
                    type: "性能优化",
                    applation: "客户端",
                    desc: "启动加载提速，可能存在兼容性问题，服务端不兼容",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/dashloader/files",
                    modrinth: "https://modrinth.com/mod/dashloader"
                },
                {
                    name: "Durability 101",
                    type: "信息展示",
                    applation: "客户端",
                    desc:
                        "显示背包物品耐久，在物品栏中显示物品经过耐久附魔换算后的预期使用次数",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/durability101/files"
                },
                {
                    name: "Durability Viewer",
                    nameCN: "耐久显示",
                    type: "信息展示",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/giselbaers-durability-viewer/files"
                },
                {
                    name: "Dynamic FPS",
                    nameCN: "动态FPS",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "使mc在后台（失去焦点时）以较低的FPS渲染，可配置，类似Nvidia控制面板中的相关功能",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/dynamic-fps/files",
                    modrinth: "https://modrinth.com/mod/dynamic-fps"
                },
                {
                    name: "Dynamic Sound Filters",
                    nameCN: "动态音频过滤器",
                    type: "其他",
                    applation: "客户端",
                    desc:
                        "优化声音混响，为游戏音效添加混响等，声音效果更加真实，用了就知道有多舒服",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/dynamic-sound-filters/files"
                },
                {
                    name: "Easier Chests",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "物品栏快捷操作（如整理、移动整一排/列物品）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/easierchests/files"
                },
                {
                    name: "Easier Crafting",
                    nameCN: "更好的合成",
                    type: "辅助操作",
                    applation: "客户端",
                    desc:
                        "在右侧GUI显示当前能合成的物品并可快速合成，可能会被认为是作弊",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/easiercrafting/files"
                },
                {
                    name: "Easier Villager Trading",
                    nameCN: "更容易的村民交易",
                    type: "辅助操作",
                    applation: "客户端",
                    desc:
                        "去除了村民交易中移动物品这一步骤，点击交易列表即可交易。ItemScroller可能会使本mod失效。可能会被认为是作弊",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/easiervillagertrading/files"
                },
                {
                    name: "Elytra Auto Flight",
                    type: "辅助操作",
                    applation: "客户端",
                    desc:
                        "可以自动在鞘翅滑翔中调整至最佳视角，不使用火箭即可一直飞，而且海拔也会越来越高，并显示飞行曲线图。不过要注意它并不会判断飞行中的障碍物。可能会被认为是作弊",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/elytra-auto-flight/files"
                },
                {
                    name: "Enchantment Description",
                    nameCN: "附魔描述",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "为物品栏中附魔书的提示添加附魔的介绍",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files"
                },
                {
                    name: "Enhanced Attack Indicator",
                    nameCN: "更好的攻击指示器",
                    type: "增加功能",
                    applation: "客户端",
                    desc:
                        "让攻击指示器能指示更多内容，如食物进食、弓弩蓄力、末影珍珠cd等",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/enhanced-attack-indicator/files",
                    modrinth:
                        "https://modrinth.com/mod/enhanced-attack-indicator"
                },
                {
                    name: "EnhancedBlockEntities",
                    nameCN: "箱子渲染优化",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "使箱子、床等实体方块以普通方块而不是方块实体的方式渲染，相比其他同类mod，该mod可以保留箱子的打开动画，更好一点。\n与Sodium不兼容，在有Indium的情况下与Sodium兼容。\n可代替 Better Beds 和 Fast Chest",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/enhanced-block-entities/files",
                    modrinth: "https://modrinth.com/mod/ebe"
                },
                {
                    name: "Entity Culling",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "不渲染视角外的不可见实体和被方块挡住的无法寻路的实体\n由于使用了较为简单的视线路径算法，所以可能会出现视线角落处的实体也不渲染的情况。当玩家头部在方块内时，会看不到实体。\n与Entity Outliner兼容，当实体高亮时依然渲染",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/entityculling/files"
                },
                {
                    name: "Entity Outliner",
                    nameCN: "实体高亮",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "高亮显示实体（给实体常驻不同颜色的发光效果）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/entity-outliner/files"
                },
                {
                    name: "Euclid",
                    nameCN: "创世神CLI",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "创世神选择范围查看（貌似已停更）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/euclid/files"
                },
                {
                    name: "Extra Player Renderer",
                    nameCN: "额外玩家渲染",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "在游戏界面渲染一个第三视角的玩家模型，依赖malilib",
                    github: "https://github.com/LucunJi/ExtraPlayerRenderer"
                },
                {
                    name: "Fabric API",
                    type: "前置API",
                    applation: "通用",
                    desc: "大部分MOD的前置API",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fabric-api/files",
                    modrinth: "https://modrinth.com/mod/fabric-api"
                },
                {
                    name: "Fabric Capes",
                    nameCN: "披风",
                    type: "联机优化",
                    applation: "客户端",
                    desc: "显示第三方皮肤站与Optifine的披风",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/capes/files"
                },
                {
                    name: "Fabric Language Kotlin",
                    type: "前置API",
                    applation: "通用",
                    desc: "为使用Kotlin语言编写的mod提升支持",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fabric-language-kotlin/files",
                    modrinth: "https://modrinth.com/mod/fabric-language-kotlin"
                },
                {
                    name: "FabricProxy",
                    type: "联机优化",
                    applation: "服务端",
                    desc: "（已停更）使服务端支持BungeeCore和Velocity",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fabricproxy/files"
                },
                {
                    name: "FabricProxy-Lite",
                    type: "联机优化",
                    applation: "服务端",
                    desc: "使服务端支持Velocity",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fabricproxy-lite/files"
                },
                {
                    name: "Fabrishot",
                    type: "增加功能",
                    applation: "客户端",
                    desc:
                        "超分辨率截图，与Optifine的“截图分辨率”相似，按键为F9",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fabrishot/files"
                },
                {
                    name: "Fabulously Optimized",
                    nameCN: "极致优化",
                    type: "性能优化",
                    applation: "通用",
                    desc:
                        "大量优化和辅助mod的集合体，不要与其他性能优化mod一起安装\n不建议使用，建议单独安装其列表中的mod",
                    curseforge:
                        "https://www.curseforge.com/minecraft/modpacks/fabulously-optimized/files",
                    github: "https://github.com/Madis0/fabulously-optimized"
                },
                {
                    name: "Fancy Menu",
                    nameCN: "华丽的菜单",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "需Konkrete作为前置，让玩家可自定义修改游戏内所有GUI窗口的布局及添加删除新控件\nWiki：http://fm.keksuccino.de/books/fancymenu-v17x\n与Cherished Worlds存在兼容问题，无法使收藏的世界置顶。\n与Smooth Scrolling Everywhere存在兼容问题，会使平滑滚动失效，但是Fancy Menu已经内建了平滑滚动的功能选项。\n与Optifine存在兼容问题，会在每次重新启动游戏重置快捷键。",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fancymenu-fabric/files"
                },
                {
                    name: "Fast Bench",
                    type: "性能优化",
                    applation: "客户端",
                    desc: "通过缓存合成表来降低工作台卡顿",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fastbench-for-fabric/files"
                },
                {
                    name: "Fast Chest",
                    nameCN: "箱子渲染优化",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "使箱子以普通方块而不是方块实体的方式渲染（会导致其缺少开启动画）",
                    github: "https://github.com/FakeDomi/FastChest"
                },
                {
                    name: "Fast Furnace",
                    type: "性能优化",
                    applation: "客户端",
                    desc: "通过缓存熔炉合成表来降低熔炉工作卡顿",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/fast-furnace-for-fabric/files"
                },
                {
                    name: "FerriteCore",
                    nameCN: "铁氧体",
                    type: "性能优化",
                    applation: "通用",
                    desc: "减少内存占用，与Hydrogen（氢）冲突",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/ferritecore-fabric/files"
                },
                {
                    name: "First Person Model ",
                    nameCN: "第一人称模型",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "渲染在第一人称视角下的人物模型，并支持将玩家皮肤以3D体素形式渲染。并可以更改人物模型以及在屏幕上渲染额外的纸娃娃模型",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/first-person-model/files"
                },
                {
                    name: "Focal Engine",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "依赖OptiFabric。Continuum光影团队为开发新的Continuum RT系列光影解放硬件算力而开发的Mod，目前仅为初期版本，能为部分光影提供帧数提升。",
                    url: "https://continuum.graphics"
                },
                {
                    name: "G4mespeed",
                    nameCN: "游戏速度调整",
                    type: "增加功能",
                    applation: "通用",
                    desc:
                        "来自国外某曾退坑大佬，在服务器tick速度改变时平滑活塞等各种方块的动画，貌似也能改变游戏运行速度（地毯中有相似的功能）",
                    other_url:
                        "在该视频的简介中：\nhttps://www.youtube.com/watch?v=lRvNknl0QPM"
                },
                {
                    name: "Grass Bypass",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "攻击实体时，使目标不为指针与实体之间的草",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/grass-pass/files"
                },
                {
                    name: "HealthCare",
                    nameCN: "血量显示",
                    type: "信息展示",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/healthcare/files"
                },
                {
                    name: "Held Item Info",
                    nameCN: "手持物品信息",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "在快捷栏选中物品时显示一些信息，比如说附魔等",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/held-item-info/files"
                },
                {
                    name: "Hopper Optimization",
                    nameCN: "漏斗优化",
                    type: "性能优化",
                    applation: "通用",
                    desc:
                        "需配合2No2Name的Lithium修改版使用（https://github.com/2No2Name/lithium-fabric）",
                    github: "https://github.com/2No2Name/hopperOptimizations"
                },
                {
                    name: "Hwyla",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "显示在屏幕顶部的玩家正指向的方块或实体的信息（貌似已停更）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/hwyla/files"
                },
                {
                    name: "Hydrogen",
                    nameCN: "氢",
                    type: "性能优化",
                    applation: "通用",
                    desc:
                        "在锂的基础上增加一些更激进的优化，主要优化游戏内存占用，与Optifine冲突",
                    github:
                        "https://github.com/CaffeineMC/hydrogen-fabric/releases"
                },
                {
                    name: "i18n Update",
                    nameCN: "自动汉化更新",
                    type: "其他",
                    applation: "客户端",
                    desc:
                        "一个为中国玩家提供本地化的模组，安装并更新一个用于翻译Mod文本的资源包",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/i18nupdatemod/files"
                },
                {
                    name: "Indium",
                    nameCN: "铟",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "为使用Sodium的客户端提供Fabric Rendering API支持以兼容其他mod",
                    github: "https://github.com/comp500/Indium/releases"
                },
                {
                    name: "IngameIME",
                    nameCN: "游戏内输入法",
                    type: "增加功能",
                    applation: "客户端",
                    desc:
                        "使输入法候选栏在窗口模式时显示在正确的位置，在全屏时能够显示出来（基于系统当前输入法，非单独的输入法）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/ingameime/files"
                },
                {
                    name: "Inv Move",
                    nameCN: "物品栏移动",
                    type: "增加功能",
                    applation: "客户端",
                    desc: "让玩家在打开物品栏的时候可以继续使用方向键操控移动",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/invmove-fabric/files"
                },
                {
                    name: "Inventory Profile",
                    nameCN: "背包与箱子整理",
                    type: "辅助操作",
                    applation: "通用",
                    desc: "（貌似已停更，使用Inventory Profiles Next代替）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/inventory-profiles/files"
                },
                {
                    name: "Inventory Profiles Next",
                    nameCN: "背包与箱子整理",
                    type: "辅助操作",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next/files"
                },
                {
                    name: "InventoryHUD",
                    nameCN: "更好的HUD",
                    type: "修改界面",
                    applation: "客户端",
                    desc: "含耐久显示、药水效果显示、背包显示",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/inventory-hud-forge/files"
                },
                {
                    name: "Iris",
                    nameCN: "鸢尾花",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "1.16及以上的新的光影模组，暂时兼容性不太行，仅支持少部分光影，分两种版本，一种自带Sodium、一种要以Sodium作前置，与Optifine不兼容",
                    url: "https://irisshaders.net",
                    github: "https://github.com/IrisShaders/Iris/releases",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/irisshaders/files"
                },
                {
                    name: "Item Model Fix",
                    nameCN: "物品模型修复",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "修复3D物品（如剑、各种工具）的在模型边缘折叠材质的地方出现透明像素的问题",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/item-model-fix/files"
                },
                {
                    name: "ItemScroller",
                    nameCN: "物品滚轮",
                    type: "辅助操作",
                    applation: "客户端",
                    desc:
                        "masa-各种快捷操作，不建议与Mouse Wheelie一起使用。与Easier Village Trading可能存在冲突使其失效。可能会被认为是作弊",
                    url: "https://masa.dy.fi/mcmods/client_mods/?mcver=All"
                },
                {
                    name: "Konkrete",
                    type: "前置API",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/konkrete-fabric"
                },
                {
                    name: "Krypton",
                    type: "联机优化",
                    applation: "通用",
                    desc:
                        "网络优化并降低联机时的CPU占用与mspt\n请勿使用该mod小游戏服，有封号风险，也可能无法连接",
                    modrinth: "https://modrinth.com/mod/krypton/versions"
                },
                {
                    name: "LambdaBetterGrass",
                    nameCN: "更好的方块连接材质",
                    type: "增加功能",
                    applation: "客户端",
                    desc: "与Opt、Sodium不兼容，在有Indium的情况下与Sodium兼容",
                    modrinth:
                        "https://modrinth.com/mod/lambdabettergrass/versions"
                },
                {
                    name: "LambdaControls",
                    nameCN: "手柄控制",
                    type: "增加功能",
                    applation: "客户端",
                    desc: "使客户端支持使用手柄，不兼容较多Mod，如Optifine等",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/lambdacontrols/files"
                },
                {
                    name: "lambDynamicLights",
                    nameCN: "动态光源",
                    type: "增加功能",
                    applation: "客户端",
                    desc: "与opt不兼容",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/lambdynamiclights/files"
                },
                {
                    name: "Lazy DFU",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "缓式加载MC的DataFixerUpper，可能可以提升游戏的启动速度，与Dashloader冲突，会稍微增加加载某些地图的时间",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/lazydfu/files"
                },
                {
                    name: "Light Overlay",
                    nameCN: "刷怪亮度显示",
                    type: "信息展示",
                    applation: "客户端",
                    desc:
                        "需Architectury前置，建议使用masa的MiniHUD中的功能代替，默认按键为F7",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/light-overlay/files"
                },
                {
                    name: "Litematica",
                    nameCN: "投影",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "masa",
                    url: "https://masa.dy.fi/mcmods/client_mods/?mcver=All"
                },
                {
                    name: "Lithium",
                    nameCN: "锂",
                    type: "性能优化",
                    applation: "通用",
                    desc: "性能优化",
                    github:
                        "https://github.com/CaffeineMC/lithium-fabric/releases",
                    modrinth: "https://modrinth.com/mod/lithium/versions",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/lithium/files"
                },
                {
                    name: "malilib",
                    type: "前置API",
                    applation: "通用",
                    desc: "masa-API",
                    url: "https://masa.dy.fi/mcmods/client_mods/?mcver=All"
                },
                {
                    name: "MAmbience",
                    nameCN: "环境音效",
                    type: "增加功能",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/mambience/files"
                },
                {
                    name: "masa gadget",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "优化masa系列mod，使其更易用",
                    github: "https://github.com/plusls/MasaGadget/releases"
                },
                {
                    name: "minihud",
                    nameCN: "更多信息",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "masa",
                    url: "https://masa.dy.fi/mcmods/client_mods/?mcver=All"
                },
                {
                    name: "Minimal Menu",
                    nameCN: "简化菜单",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "自定义简化菜单，比如说可以去掉基本用不到的Realms，可以为单人游戏添加打开游戏文件夹的按钮",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/minimal-menu/files"
                },
                {
                    name: "ModMenu",
                    nameCN: "模组菜单",
                    type: "增加功能",
                    applation: "客户端",
                    desc: "同时也作为一些mod的前置",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/modmenu/files"
                },
                {
                    name: "More Tooltips",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "在物品的鼠标悬浮界面中显示更多信息",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/more-tooltips/files"
                },
                {
                    name: "Mouse Wheelie",
                    nameCN: "鼠标滚轮",
                    type: "增加功能",
                    applation: "客户端",
                    desc:
                        "给鼠标滚轮增加更多功能，不建议与ItemScroller一起使用，可能会被认为是作弊",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/mouse-wheelie/files"
                },
                {
                    name: "multiconnect",
                    type: "联机优化",
                    applation: "客户端",
                    desc: "用高版本客户端连接低版本世界，推荐使用ViaFabric",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/multiconnect/files"
                },
                {
                    name: "No Fade",
                    nameCN: "不要渐隐",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "移除进入和退出Mojang进度条界面的渐隐，没有优化效果（如果渐隐会卡，那就有一点效果）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/no-fade/files"
                },
                {
                    name: "Not Enough Antimations",
                    nameCN: "更多动画",
                    type: "其他",
                    applation: "客户端",
                    desc: "为吃东西、划船等动作提供人物动画",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/not-enough-animations/files"
                },
                {
                    name: "Not Enough Crashes",
                    nameCN: "阻止崩溃",
                    type: "其他",
                    applation: "客户端",
                    desc: "不太建议使用，可能会让某些mod出错",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/not-enough-crashes/files"
                },
                {
                    name: "okZoomer",
                    nameCN: "视角放大",
                    type: "增加功能",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/ok-zoomer/files"
                },
                {
                    name: "optiFabric",
                    nameCN: "高清修复前置",
                    type: "前置API",
                    applation: "客户端",
                    desc: "装了这个就必须装Optifine",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/optifabric/files"
                },
                {
                    name: "Optifine",
                    nameCN: "高清修复",
                    type: "性能优化",
                    applation: "客户端",
                    url: "https://optifine.net/downloads"
                },
                {
                    name: "orderly",
                    nameCN: "血量显示",
                    type: "信息展示",
                    applation: "客户端",
                    desc:
                        "原作者有两位，其中的一位负责人的旧Github仓库和CurseForge页面已停止更新，另一位在新的Github仓库更新，但需要自己编译",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/orderly/files",
                    github: "https://github.com/plusls/Orderly"
                },
                {
                    name: "Pet Owner",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "显示宠物的主人",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/pet-owner/files"
                },
                {
                    name: "Phosphorus",
                    nameCN: "磷",
                    type: "性能优化",
                    applation: "通用",
                    desc: "光照优化",
                    github:
                        "https://github.com/CaffeineMC/phosphor-fabric/releases",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/phosphor/files"
                },
                {
                    name: "Pistorder",
                    type: "增加功能",
                    applation: "客户端",
                    desc: "活塞移动顺序显示",
                    github: "https://github.com/Fallen-Breath/pistorder"
                },
                {
                    name: "Plusls Carpet Addition",
                    type: "增加功能",
                    applation: "通用",
                    desc:
                        "Plusls个人对carpet的扩展。可以配合Masa Gadget使用，需要地毯作为前置",
                    github: "https://github.com/plusls/plusls-carpet-addition"
                },
                {
                    name: "ReAuth",
                    nameCN: "重新登录",
                    type: "联机优化",
                    applation: "客户端",
                    desc:
                        "与AuthMe的功能类似，可在游戏内重新登录而不需要重启游戏",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/reauth/files"
                },
                {
                    name: "REI\nRoughly Enough Items",
                    nameCN: "REI合成表",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "在物品栏右侧显示所有方块及合成表",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items/files"
                },
                {
                    name: "Replay Mod",
                    nameCN: "录制/回放",
                    type: "增加功能",
                    applation: "客户端",
                    url: "https://www.replaymod.com/download/"
                },
                {
                    name: "ScreenshotToClipboard",
                    nameCN: "F2截图到剪贴板",
                    type: "增加功能",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/screenshot-to-clipboard-fabric/files"
                },
                {
                    name: "ShulkerBoxTooltip",
                    nameCN: "潜影盒预览",
                    type: "信息展示",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/shulkerboxtooltip/files"
                },
                {
                    name: "Slight' Gui Modifications",
                    nameCN: "细微UI改动",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "需Architectury和cloth-api前置，为UI添加动画与更多操作",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/slight-gui-modifications/files"
                },
                {
                    name: "Smooth Boot",
                    nameCN: "平滑启动",
                    type: "性能优化",
                    applation: "客户端",
                    desc:
                        "在启动时减少CPU占用防止卡死电脑，会稍微延长启动时间，与Dashloader冲突",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/smooth-boot/files"
                },
                {
                    name: "Smooth Scrolling Everywhere",
                    nameCN: "平滑滚动",
                    type: "修改界面",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/smooth-scrolling-everywhere-fabric/files"
                },
                {
                    name: "Sneak Tweak",
                    type: "其他",
                    applation: "客户端",
                    desc: "优化潜行动画，让玩家下蹲时画面平缓一些",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/sneak-tweak/files"
                },
                {
                    name: "Sodium",
                    nameCN: "钠",
                    type: "性能优化",
                    applation: "客户端",
                    desc: "渲染优化，部分版本的Iris会内置",
                    github:
                        "https://github.com/CaffeineMC/sodium-fabric/releases",
                    modrinth: "https://modrinth.com/mod/sodium/versions",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/sodium/files"
                },
                {
                    name: "Sodium Extra",
                    nameCN: "钠扩展",
                    type: "性能优化",
                    applation: "客户端",
                    desc: "为钠的设置界面加入更多选项，与内置Sodium的Iris兼容",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/sodium-extra/files"
                },
                {
                    name: "Starlight",
                    nameCN: "星光",
                    type: "性能优化",
                    applation: "通用",
                    desc:
                        "重写了光照引擎，与Phosphor不兼容，需自己编译（可能与一些mod冲突）",
                    github: "https://github.com/Tuinity/Starlight",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/starlight",
                    modrinth: "https://modrinth.com/mod/starlight"
                },
                {
                    name: "tellme",
                    type: "其他",
                    applation: "通用",
                    desc: "masa-获取更多调试信息",
                    url: "https://masa.dy.fi/mcmods/client_mods/?mcver=All"
                },
                {
                    name: "tic-tacs",
                    type: "性能优化",
                    applation: "通用",
                    desc: "区块加载优化，需自己编译",
                    github: "https://github.com/Gegy/tic-tacs"
                },
                {
                    name: "Time To Live",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "在TNT头顶显示爆炸剩余时间",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/time-to-live/files"
                },
                {
                    name: "ToolTipFix",
                    nameCN: "工具提示",
                    type: "修改界面",
                    applation: "客户端",
                    desc:
                        "防止因为文本过长导致物品栏鼠标悬浮的提示超出屏幕范围",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/tooltipfix/files"
                },
                {
                    name: "ToroHealth",
                    nameCN: "Toro血量显示",
                    type: "信息展示",
                    applation: "客户端",
                    desc: "还可以在攻击时显示伤害值",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/torohealth-damage-indicators/files"
                },
                {
                    name: "TRansliterationLib",
                    type: "前置API",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/transliterationlib/files"
                },
                {
                    name: "Tweakeroo",
                    nameCN: "更多功能",
                    type: "辅助操作",
                    applation: "客户端",
                    desc: "masa",
                    url: "https://masa.dy.fi/mcmods/client_mods/?mcver=All"
                },
                {
                    name: "ViaBackwards",
                    type: "联机优化",
                    applation: "通用",
                    desc:
                        "1.9+客户端：允许连接到比客户端版本新的服务器\nmod文件也同时适用于插件端服务器/Sponge服务器",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/viabackwards/files"
                },
                {
                    name: "ViaFabric",
                    type: "联机优化",
                    applation: "通用",
                    desc:
                        "客户端：允许连接到比客户端版本旧的服务器\n服务端：允许比服务器版本新的客户端连接到服务器",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/viafabric/files"
                },
                {
                    name: "ViaRewind",
                    type: "联机优化",
                    applation: "通用",
                    desc:
                        "1.7/1.8客户端：允许连接到比客户端版本新的服务器\nmod文件也同时适用于插件端服务器/Sponge服务器",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/viarewind/files"
                },
                {
                    name: "VoxelMap",
                    nameCN: "体素地图",
                    type: "地图",
                    applation: "通用",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/voxelmap/files"
                },
                {
                    name: "WI Zoom",
                    nameCN: "视角放大",
                    type: "增加功能",
                    applation: "客户端",
                    desc: "Wurst提取的视角放大（望远镜）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/wi-zoom/files"
                },
                {
                    name: "World Edit",
                    nameCN: "创世神",
                    type: "增加功能",
                    applation: "通用",
                    url: "https://enginehub.org/worldedit/#downloads",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/worldedit/files"
                },
                {
                    name: "Worldedit CUI",
                    nameCN: "创世神CUI",
                    type: "信息展示",
                    applation: "客户端",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/worldeditcui-fabric/files"
                },
                {
                    name: "WTHIT",
                    type: "信息展示",
                    applation: "客户端",
                    desc:
                        "取代Hwyla，显示在屏幕顶部的玩家正指向的方块或实体的信息（What?The?Hell Is That?）",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/wthit/files"
                },
                {
                    name: "Xaero's Minimap",
                    nameCN: "Xaero小地图",
                    type: "地图",
                    applation: "通用",
                    desc:
                        "貌似比Voxel优化更好功能更多，但界面不太好看\n介绍、汉化资源包：https://www.bilibili.com/read/cv11613668",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/xaeros-minimap/files",
                    url: "https://chocolateminecraft.com/minimapdownload.php"
                },
                {
                    name: "Xaero's World Map",
                    nameCN: "Xaero世界地图",
                    type: "地图",
                    applation: "通用",
                    desc:
                        "貌似比Voxel优化更好功能更多，但界面不太好看\n介绍、汉化资源包：https://www.bilibili.com/read/cv11613668",
                    curseforge:
                        "https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map/files",
                    url: "https://chocolateminecraft.com/worldmap.php"
                }
            ],
            closable: true,
            screenHeight: document.documentElement.clientHeight
        };
    },
    methods: {
        desc({ columnIndex }) {
            if (columnIndex == 4) {
                return "desc";
            }
        },
        filterHandler(value, row, column) {
            const property = column["property"];
            return row[property] === value;
        }
    },
    mounted() {
        window.addEventListener(
            "resize",
            () => {
                this.screenHeight = document.documentElement.clientHeight;
            },
            false
        );
    },
    watch: {
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
        }
    }
};
</script>

<style lang="scss">
.el-table__body-wrapper::-webkit-scrollbar {
    width: 8px; // 横向滚动条
    height: 8px; // 纵向滚动条
}

.el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 5px;
}

.el-table__body-wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
    border-radius: 5px;
}

.el-table__body-wrapper::-webkit-scrollbar-track,
.el-table__body-wrapper::-webkit-scrollbar-track-piece {
    background-color: #eee;
    border-radius: 5px;
}

.el-table {
    border-radius: 8px;
}

.el-table .el-table__cell {
    text-align: center;
}

.el-table-filter.el-popper {
    padding: 5px;
}

.el-table-filter__checkbox-group label.el-checkbox {
    display: flex;
}

.el-table-filter__content {
    justify-content: left;
    vertical-align: middle;
}

.el-table td.el-table__cell div {
    white-space: pre-wrap;
}

.desc {
    text-align: left !important;
}

.button {
    position: relative;
    white-space: nowrap;
    height: 1.3rem;
    padding: 0.4rem 0.8rem;
    color: #fff;
    background-color: var(--el-color-primary);
    font-size: 0.7rem;
    line-height: 1.3rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    text-decoration: none;
    outline: 0;
    border-radius: 0.5rem;
}

.curseforge {
    background-color: #333333;
    margin: 0.3rem 0.2rem;
}

.modrinth {
    background-color: #5fa33b;
    margin: 0.3rem 0.2rem;
}

.github {
    background-color: #24292f;
    margin: 0.3rem 0.2rem;
}

.mcmod {
    background-color: #3c454c;
}
</style>

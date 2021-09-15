<template>
    <div>
        <div class="background"></div>
        <div class="container">
            <el-row>
                <el-col :xs="0" :sm="2" :md="4" :xl="6"></el-col>
                <el-col :xs="24" :sm="20" :md="16" :xl="12">
                    <h1><del>食用手册</del></h1>
                    <el-alert
                        title="前排提示"
                        type="info"
                        description="这个页面是中二病突然发作时写的，非“人类高质量男性求偶现场”，如果看起来性格跟平时不一样，请以平时为准。"
                        show-icon
                        effect="dark"
                        :closable="closable"
                    ></el-alert>
                    <h2>自我介绍</h2>
                    <p>
                        1.1.
                        <del>僕は</del>
                        这里是<code>Red_lnn</code>，是<code>l</code>不是<code>i</code>。一般情况下叫<code>Red</code>就好了
                    </p>
                    <p>
                        1.2. 快毕业的学生党，被生活摁在地上摩擦ing
                    </p>
                    <p>
                        1.3. <code>Red_lnn</code>是 Minecraft
                        正版用户名。什么？来一个正常一点的名字？不存在的，没有的，笑死，根本就想不出来
                    </p>
                    <p>
                        1.4. 是<span title="你知道的太多了" class="heimu"
                            ><del>可爱的</del></span
                        >男孩纸
                    </p>
                    <p>
                        1.5.
                        挺废的，什么都不会。别看这个网站是<code>vue.js</code>，其实根本不会
                    </p>
                    <p>
                        1.6.
                        老社恐，现实中瑟瑟发抖，没几个朋友，不过也很感谢一直陪我的人
                    </p>
                    <p>
                        1.7. 不容易生气，但生起气来会坏（<span
                            title="你知道的太多了"
                            class="heimu"
                            >纠正：气急败坏</span
                        >）
                    </p>
                    <h2>喜欢的东西</h2>
                    <h3>吃的喝的</h3>
                    <p>2.1.1. 我永远喜欢可口可乐！<del>百事也不是不行</del></p>
                    <p>
                        2.1.2. 我永远喜欢炸鸡汉堡！
                    </p>
                    <h3>番剧</h3>
                    <p>
                        2.2.1. 二次元浓度低，AGCN
                        里面也就对游戏敢兴趣（但其实也玩得不多，<span
                            title="你知道的太多了"
                            class="heimu"
                            >所以我的青春都干嘛去了啊喂(#`O′)</span
                        >）
                    </p>
                    <p>
                        2.2.1. 不怎么看番，也不怎么看漫画
                    </p>
                    <p>
                        2.2.2. 比较喜欢的番的话，有这些吧：
                    </p>
                    <ul class="list">
                        <li>
                            <a
                                href="https://www.bilibili.com/bangumi/play/ss3756"
                                >《小樱》</a
                            >（百变小樱？百变小樱魔术卡？魔卡少女樱？），透明牌篇正在看，打算一两个月一集这样子，我就看一下我看完的时候能不能出下一季
                        </li>
                        <li>
                            <a
                                href="https://www.bilibili.com/bangumi/play/ss445"
                                >《翠星之加尔刚蒂亚》</a
                            >（大概没多少人知道？）
                        </li>
                        <li>
                            还有传统老番<a
                                href="https://www.bilibili.com/bangumi/play/ss33378"
                                >《名侦探柯南》</a
                            >（青山老贼是真的不打算完结啊！）
                        </li>
                    </ul>
                    <p>
                        2.2.3.
                        除了上面提到那些，正经番剧也就看过这<del>几（根本就不是几嘛）</del>三部，真的看得很少：
                    </p>
                    <ul class="list">
                        <li>
                            <a
                                href="https://www.bilibili.com/bangumi/play/ss24588"
                                >《工作细胞》</a
                            >，第一第二季都看了，说实话，挺好看，但是喜欢不起来hhh
                        </li>
                        <li>
                            《Lain》（又名《铃音》，应该也没多少人知道，介绍看这里
                            👉
                            <a
                                href="https://zh.wikipedia.org/wiki/%E7%8E%B2%E9%9F%B3"
                                >Wikipedia</a
                            >
                            |
                            <a
                                href="https://baike.baidu.com/item/%E7%8E%B2%E9%9F%B3/751714"
                                >百度百科1</a
                            >
                            |
                            <a href="https://baike.baidu.com/item/Lain/4867944"
                                >百度百科2</a
                            >
                            |
                            <a
                                href="https://zh.moegirl.org.cn/%E9%93%83%E9%9F%B3"
                                >萌娘百科</a
                            >），当初不是很看得懂，也没有深究，但不得不说，这部番挺压抑的
                        </li>
                        <li>
                            <a
                                href="https://www.bilibili.com/bangumi/play/ss3496/?spm_id_from=333.999.0.0"
                                >《机动战士高达独角兽(UC) RE:0096》</a
                            >，我能说剧情已经忘了吗？
                        </li>
                    </ul>
                    <h3>书、音乐或电影</h3>
                    <p>
                        2.4.1.
                        书的话，《三体》、《海底两万里》、《神秘岛》、《鲁滨逊漂流记》，还有小时候喜欢的皮皮鲁和舒克贝塔系列
                    </p>
                    <p>
                        2.4.2.
                        电影的话，《流浪地球》、《星际穿越》、《火星救援》之类的
                    </p>
                    <p>
                        2.4.3. 音乐这方面，什么类型都能听，没有特别喜欢的
                    </p>
                    <h3>动漫或影视角色？游戏角色？</h3>
                    <p>
                        2.5.1.
                        动漫角色的话，小樱、李小狼（<del>王小明</del>），还有就想不出来了
                    </p>
                    <p>
                        2.5.2.
                        游戏角色的话，原神里少年和少女模型的都喜欢！万叶，嘿嘿嘿~
                        空宝，嘿嘿嘿~
                    </p>
                    <h3>电子产品</h3>
                    <p>
                        2.6.1. 一加你被骂得好惨啊
                    </p>
                    <p>
                        2.6.2. 电脑（配件和整机都喜欢）、手机、平板
                    </p>
                    <p>
                        2.6.3. 曾经在耳机圈边缘徘徊过，发现太费钱了就算了
                    </p>
                    <h2>会些什么</h2>
                    <p>
                        3.1. 画画？不会。唱歌？不会。写作？不会。写代码？<code
                            >print('Hello World')</code
                        >这样的可以不？真的也就只会 Hello World 了
                    </p>
                    <p>
                        3.2. 只学了一学期的 <code>C</code> 和
                        <code>Pyhton</code
                        >。<code>C</code>基本忘得差不多了，<code>Python</code>也就偶尔用用，还没有深入学习过。<code>HTML</code>和<code>JavaScript</code>从来没学过，不过<code>HTML</code>处在能在搜索引擎的帮助下理解，<code>JavaScript</code>看都看不懂
                    </p>
                    <p>
                        3.3.
                        什么？不会<code>js</code>那这个网站怎么做的？看着文档，在搜索引擎的帮助下东拼西凑出来的啊~
                        还请各位大佬轻喷
                    </p>
                    <h2>玩些什么</h2>
                    <p>
                        4.1. 目前主要玩《原神（Genshin
                        Impact）》，偶尔也玩玩《我的世界（Minecraft）》，再多的就不玩了（<span
                            title="你知道的太多了"
                            class="heimu"
                            >主要还是玩不懂，而且肝不够</span
                        >）
                    </p>
                    <p>
                        4.2.
                        对其他游戏无感，不是米哈游无脑吹，本人不攻击其他游戏及其玩家
                    </p>
                    <p>
                        4.3. 你说原神抄袭？对，他抄了世界上所有游戏，<del
                            >米哈游该死</del
                        >
                    </p>
                    <h2>哪里能找到</h2>
                    <ul class="list" style="padding-left:20px;">
                        <li>
                            Github：<a href="https://github.com/Redlnn"
                                >Redlnn</a
                            >
                        </li>
                        <li>
                            Bilibili：<a
                                href="https://space.bilibili.com/20858581"
                                >Red_lnn</a
                            >
                        </li>
                        <li>
                            网易云音乐：<a
                                href="https://music.163.com/#/user/home?id=333710186"
                                >Red_lnn</a
                            >
                        </li>
                        <li>
                            Twitter：<a href="https://twitter.com/Red_lnn"
                                >@Red_lnn</a
                            >
                        </li>
                        <li>
                            酷安(CoolApk)：<a
                                href="http://www.coolapk.com/u/642684"
                                >Red_lnn</a
                            >
                        </li>
                        <li>剩下一些平台都是小透明就不列了吧 …</li>
                    </ul>
                    <h2>其他的</h2>
                    <p>
                        6.1. 不女装，坚决不女装！女装是不可能的！cos
                        也是不可能的！
                    </p>
                    <p>
                        6.2. 希望服务器平安无事（<del
                            >虽然也没有多少重要数据就是，但搭环境真的好麻烦啊啊啊啊啊啊啊</del
                        >
                    </p>
                    <h3>你知道吗？</h3>
                    <p>
                        6.3.1. 虽然有点内向，但是熟了的话，有时候会很话痨
                    </p>
                    <p>
                        6.3.2. 母胎 solo 至今，老惨了
                    </p></el-col
                >
                <el-col :xs="0" :sm="2" :md="4" :xl="6"></el-col>
            </el-row>
        </div>
        <div style="padding-bottom:20px">
            <p
                style="font-size:var(--el-font-size-base);line-height:25px; margin:5px 0"
            >
                本文采用<a
                    rel="license"
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                    >知识共享署名-非商业性使用-相同方式共享 4.0 (CC BY-NC-SA
                    4.0) 国际许可协议</a
                >进行许可。
            </p>
            <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                ><img
                    alt="知识共享许可协议"
                    src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            closable: false,
        };
    },
};
</script>

<style lang="scss" scoped>
a {
    color: var(--el-color-primary);
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.background {
    z-index: -10;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://sdn.geekzu.org/avatar/ca8a920ae3afca0139b116c033b00138?s=800");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.1;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
}
.container {
    text-align: left;
}
.container p {
    line-height: 28px;
}
h2:before {
    content: "#";
    color: var(--el-color-primary);
    padding-right: 8px;
    font-weight: 700;
}
h3 {
    border-left: 5px solid var(--el-color-primary);
    padding-left: 8px;
    margin-bottom: 5px;
    margin-top: 5px;
    vertical-align: middle;
}
.list {
    font-size: 95%;
    line-height: 30px;
}
code {
    font-size: 85%;
    color: #f0615c;
    margin: 0 0.2em;
    padding: 0.2em 0.4em;
    background-color: rgba(175, 184, 193, 0.2);
    border-radius: var(--el-border-radius-base);
    font-family: "Cascadia Mono PL", "Source Code Pro", "Source Han Mono",
        "Noto Mono", ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
        "Liberation Mono", monospace;
}
@keyframes heimuFadeOut {
    0% {
        background: var(--el-text-color-primary);
    }
    100% {
        background: none;
    }
}
@keyframes heimuFadeIn {
    0% {
        background: none;
    }
    100% {
        background: var(--el-text-color-primary);
    }
}
.heimu {
    margin-left: 0;
    margin-right: 0;
    background: var(--el-text-color-primary);
    animation: heimuFadeIn 0.1s ease-in-out;
    border-radius: var(--el-border-radius-base);
}
.heimu:hover {
    background: none;
    animation: heimuFadeOut 0.1s ease-in-out;
}
.heimu,
.heimu a,
a .heimu {
    color: var(--el-text-color-primary);
    text-shadow: none;
}
.heimu code,
code .heimu {
    color: var(--el-text-color-primary);
    padding: 0em 0.4em;
    background-color: var(--el-text-color-primary);
    border-radius: var(--el-border-radius-base);
}
.heimu code:hover,
code .heimu:hover {
    color: #f0615c;
    padding: 0.2em 0.4em;
    background-color: rgba(175, 184, 193, 0.2);
}
</style>

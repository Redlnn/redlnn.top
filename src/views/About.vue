<script setup>
import Banner from '@/components/Banner.vue'
</script>

<template>
  <main>
    <Banner height="50vh" text="About Me" />
    <div class="board">
      <div class="container">
        <p class="avatar">
          <img src="/assets/imgs/avatar.webp" />
        </p>
        <h2>简单介绍一下</h2>
        <p>
          这里是<code>Red_lnn</code>（是<code>l</code>不是<code>i</code>），一般情况下叫<code>Red</code>就好了。<code>Red_lnn</code>其实是
          Minecraft 正版用户名。什么？来一个正常一点的名字？不存在的，没有的，笑死，根本就想不出来。
        </p>
        <p>社恐，现实中瑟瑟发抖，没朋友，不过也很感谢一直陪我的人。</p>
        <h2>喜欢的番？</h2>
        <p>二次元浓度低，不怎么看番，也不怎么看漫画。比较喜欢的番的话，有这些吧：</p>
        <ul class="list">
          <li>
            <a href="https://www.bilibili.com/bangumi/play/ss3756" target="_blank">《小樱》</a
            >（百变小樱？百变小樱魔术卡？魔卡少女樱？），透明牌篇正在看，打算一两个月一集这样子，我就看一下我看完的时候能不能出下一季
          </li>
          <li>
            <a href="https://www.bilibili.com/bangumi/play/ss445" target="_blank">《翠星之加尔刚蒂亚》</a>（<span
              class="curtain"
              >大概没多少人知道？</span
            >）
          </li>
          <li>
            还有传统老番<a href="https://www.bilibili.com/bangumi/play/ss33378" target="_blank">《名侦探柯南》</a
            >（青山老贼是真的不打算完结啊！）
          </li>
          <li>
            <a href="https://www.bilibili.com/bangumi/play/ss24588" target="_blank">《工作细胞》</a
            >，第一第二季都看了，说实话，挺好看，但是喜欢不起来hhh
          </li>
          <li>
            《Lain》（又名《铃音》，应该也没多少人知道，介绍看这里 👉
            <a href="https://zh.wikipedia.org/wiki/%E7%8E%B2%E9%9F%B3" target="_blank">Wikipedia</a> |
            <a href="https://baike.baidu.com/item/%E7%8E%B2%E9%9F%B3/751714" target="_blank">百度百科1</a> |
            <a href="https://baike.baidu.com/item/Lain/4867944" target="_blank">百度百科2</a> |
            <a href="https://zh.moegirl.org.cn/%E9%93%83%E9%9F%B3" target="_blank">萌娘百科</a
            >），当初不是很看得懂，也没有深究，但不得不说，这部番挺压抑的
          </li>
          <li>
            <a href="https://www.bilibili.com/bangumi/play/ss3496/?spm_id_from=333.999.0.0" target="_blank"
              >《机动战士高达独角兽(UC) RE:0096》</a
            >，我能说剧情已经忘了吗？
          </li>
        </ul>
        <h2>玩些什么？</h2>
        <p>原神、我的世界</p>
        <h2>哪里能找到？</h2>
        <ul class="list" style="padding-left: 20px">
          <li>Github：<a href="https://github.com/Redlnn" target="_blank">@Redlnn</a></li>
          <li>Bilibili：<a href="https://space.bilibili.com/20858581" target="_blank">Red_lnn</a></li>
          <li>网易云音乐：<a href="https://music.163.com/#/user/home?id=333710186" target="_blank">Red_lnn</a></li>
          <li>Twitter：<a href="https://twitter.com/Red_lnn" target="_blank">@Red_lnn</a></li>
          <li>酷安(CoolApk)：<a href="http://www.coolapk.com/u/642684" target="_blank">Red_lnn</a></li>
          <li>剩下一些平台都是小透明就不列了吧 …</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.board {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  border-radius: 10px;
  padding: 60px 40px;
  background-color: white;
  margin-top: -60px;
  box-shadow: 0 12px 15px 0 #00000020;
  z-index: 1;
  transition: background-color 0.1s ease-in-out;
  html.dark & {
    background-color: #353535;
  }
}

@media screen and (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 720px;
    padding: 70px 60px;
  }
}

@media screen and (min-width: 992px) {
  .container {
    max-width: 960px;
    padding: 80px 90px;
  }
}

@media screen and (min-width: 1200px) {
  .container {
    max-width: 1140px;
    padding: 80px 100px;
  }
}

.avatar {
  margin: 20px 0 50px 0;
  text-align: center;

  img {
    width: 200px;
    border-radius: 50%;
    transition: filter 0.3s ease-in-out;
  }

  html.dark & {
    img {
      filter: brightness(0.8);
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: revert;
}

a {
  color: #409eff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  html.dark & {
    color: #3589de;
  }
}

h2:before {
  content: '#';
  padding-right: 8px;
  color: #409eff;
  font-weight: 700;

  html.dark & {
    color: #3589de;
  }
}

h3 {
  vertical-align: middle;
  border-left: 5px solid #409eff;
  padding-left: 8px;
  margin-bottom: 5px;
  margin-top: 5px;

  html.dark & {
    border-left: 5px solid #3589de;
  }
}

.list {
  font-size: 0.95rem;
  line-height: 2.2rem;
}

pre,
code {
  margin: 0 0.2rem;
  padding: 0.2rem 0.4rem;
  font-size: 85%;
  font-family: 'Cascadia Mono PL', 'Source Code Pro', 'Source Han Mono', 'Noto Mono', ui-monospace, SFMono-Regular,
    SF Mono, Menlo, Consolas, 'Liberation Mono', monospace;
  color: #f0615c;
  background-color: rgba(175, 184, 193, 0.2);
  border-radius: 4px;

  html.dark & {
    color: #fe8480;
  }
}

@keyframes curtainFadeOut {
  0% {
    background: currentColor;
  }
  100% {
    background: none;
  }
}

@keyframes curtainFadeIn {
  0% {
    background: none;
  }
  100% {
    background: currentColor;
  }
}

.curtain {
  margin-left: 0;
  margin-right: 0;
  background: currentColor;
  border-radius: 4px;
  animation: curtainFadeIn 0.1s ease-in-out;
  text-decoration-color: currentColor;
}

.curtain:hover {
  background: none;
  animation: curtainFadeOut 0.1s ease-in-out;
}

.curtain,
.curtain a,
a .curtain {
  color: currentColor;
  text-shadow: none;
}

.curtain code,
code .curtain {
  padding: 0rem 0.4rem;
  color: currentColor;
  background-color: currentColor;
  border-radius: 4px;
}

.curtain code:hover,
code .curtain:hover {
  padding: 0.2rem 0.4rem;
  color: #f0615c;
  background-color: rgba(175, 184, 193, 0.2);
}
</style>

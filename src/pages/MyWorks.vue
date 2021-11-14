<script setup>
import { useMeta } from 'vue-meta'

const tags = 'Red_lnn,博客,blog,个人主页'
const description = '这里是 Red_lnn 的小空间，感谢你的来访'

useMeta({
  description: description,
  meta: [{ name: 'keywords', content: tags }],
  og: {
    description: description,
  },
  twitter: {
    description: description,
  },
})
/* eslint-disable */
</script>

<template>
  <div>
    <div class="background"></div>
    <div class="container">
      <el-row>
        <el-col :xs="0" :sm="2" :lg="4" :xl="6"></el-col>
        <el-col :xs="24" :sm="20" :lg="16" :xl="12">
          <h1>一些稍微能看的个人小作品</h1>
          <h2>GitHub 项目</h2>
          <ul class="list">
            <li><a href="https://github.com/Redlnn/redlnn.top" target="_blank"><strong>redlnn.top</strong></a> —— 你正在看的这个网站</li>
            <li><a href="https://github.com/Redlnn/redbot" target="_blank"><strong>redbot</strong></a> —— 一个使用 Graia Ariadne 搭建的 QQ 机器人</li>
            <li><a href="https://github.com/Redlnn/Ruijie-ePorta-Tool" target="_blank"><strong>Ruijie ePorta toolTool</strong></a> —— 一个基于 Python3 的自动登录/断开锐捷 ePorta Web 网页认证的工具</li>
            <li><a href="https://github.com/Redlnn/genshin-lyre-auto-play-without-midi" target="_blank"><strong>无需MIDI文件的原神风物之诗琴自动演奏程序</strong></a></li>
          </ul>
          <h2>emmm...</h2>
          <ul class="list">
            <li>想不出来了惹...</li>
          </ul>
        </el-col>
        <el-col :xs="0" :sm="2" :lg="4" :xl="6"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
/* eslint-enable */
</script>

<style scoped>
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
  background-image: url('/@/assets/img/85467403_p0.jpg');
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
  min-height: 80vh;
  text-align: left;
}

.container p {
  line-height: 28px;
}

h2:before {
  content: '#';
  padding-right: 8px;
  color: var(--el-color-primary);
  font-weight: 700;
}

h3 {
  vertical-align: middle;
  border-left: 5px solid var(--el-color-primary);
  padding-left: 8px;
  margin-bottom: 5px;
  margin-top: 5px;
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
  border-radius: var(--el-border-radius-base);
}
</style>

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
</script>

<template>
  <div style="text-align: center">
    <el-image :src="'../assets/img/avatar.webp'" class="logo noselect" alt="Logo">
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
      <h1 style="margin: 0 0 1rem 0">Red_lnn</h1>
      <p style="font-weight: bold">社恐 | 游戏菜 | 代码渣 | 懒癌患者</p>
      <p style="margin: 2rem 0">喜欢偶尔学学代码，啥都不会，也没有精通</p>
      <div style>
        <a href="https://github.com/Redlnn">
          <img :src="'../assets/img/github.svg'" class="svg" title="Github" alt="Github" />
        </a>
        <a href="https://space.bilibili.com/20858581">
          <img :src="'../assets/img/bilibili.svg'" class="svg" title="哔哩哔哩" alt="哔哩哔哩" />
        </a>
        <a href="https://music.163.com/#/user/home?id=333710186">
          <img :src="'../assets/img/netease-cloud-music.svg'" class="svg" title="网易云音乐" alt="网易云音乐" />
        </a>
        <a href="/about">
          <img :src="'../assets/img/share.svg'" class="svg" title="更多" alt="更多" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Loading } from '@element-plus/icons'
import { PictureRounded } from '@element-plus/icons'

export default {
  components: {
    Loading,
    PictureRounded,
  },
}
</script>

<style scoped>
a {
  color: var(--el-color-primary);
}

.logo {
  height: auto;
  margin: 2rem 0;
  border-radius: var(--el-border-radius-circle);
}

@media screen and (max-width: 260px) {
  .logo {
    width: 100%;
  }
}

@media screen and (max-height: 1000px) and (min-width: 260px) {
  .logo {
    width: 280px;
  }
}

@media screen and (min-height: 1000px) and (min-width: 450px) {
  .logo {
    width: 450px;
  }
}

.svg {
  height: 2.5rem;
  margin: 0 0.5rem;
}
</style>

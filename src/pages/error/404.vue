<template>
  <div style="text-align: center">
    <el-image :src="'../assets/img/arere.webp'" class="logo noselect" alt="啊咧咧.jpg">
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
    <h1>啊咧咧？页面不见了呢~</h1>
  </div>
</template>

<script>
import { Loading } from '@element-plus/icons'
import { PictureRounded } from '@element-plus/icons'
import { useMeta } from 'vue-meta'

const description = '404 Not Found!'

export default {
  components: {
    Loading,
    PictureRounded,
  },
  setup() {
    // https://github.com/nuxt/vue-meta/issues/696#issuecomment-878377182
    useMeta({
      description: description,
      og: {
        description: description,
      },
      twitter: {
        description: description,
      },
    })
  },
}
</script>

<style>
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
</style>

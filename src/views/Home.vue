<script setup lang="ts">
import { onMounted, ref } from 'vue'

import Banner from '@/components/Banner.vue'
import genshin from '@/assets/statics/genshin'

const subtitle = ref('')
const poetry = ref('')

onMounted(() => {
  subtitle.value = genshin.lines[Math.floor(Math.random() * genshin.lines.length)]
  poetry.value = genshin.poetry[Math.floor(Math.random() * genshin.poetry.length)]
})
</script>

<template>
  <main>
    <banner height="100vh" text="Red_lnn" :subtitle="subtitle" />
    <div class="poetry">
      <div>
        <p style="white-space: pre-wrap">
          {{ poetry }}
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.poetry {
  margin: 100px 0;
  font-size: 25px;
  font-family: 'Source Han Serif TC', 'NSimSun', 'SimSun', serif;
  line-height: 1.5em;
  letter-spacing: 1px;
}

@media screen and (max-width: 600px) {
  .poetry {
    text-align: center;
  }
}

@media screen and (min-width: 601px) {
  .poetry {
    display: flex;
    align-items: center;
    width: 100%;
    line-height: 2em;
    writing-mode: vertical-rl;
    letter-spacing: 4px;
  }
}
</style>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useMediaQuery } from '@vueuse/core'

import NavigationBar from '@/components/NavigationBar.vue'
import Backtop from '@/components/Backtop.vue'
import Footer from '@/components/Footer.vue'

const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

watch(isPreferredDark, (isDark) => {
  if (isDark && !document.body.classList.contains('dark')) {
    document.querySelector('html')?.classList.add('dark')
  } else {
    document.querySelector('html')?.classList.remove('dark')
  }
})

onMounted(() => {
  if (localStorage.getItem('color-scheme') === 'dark') {
    document.querySelector('html')?.classList.add('dark')
  }
})
</script>

<template>
  <navigation-bar />
  <backtop />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

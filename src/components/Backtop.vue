<script setup>
import { useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

import { AngleUp } from '@vicons/fa'

const { y } = useWindowScroll()
const backtop = ref()

function scrollTop() {
  window.scrollTo(0, 0)
}

watch(y, (currentY) => {
  if (currentY > 10 && getComputedStyle(backtop.value).opacity === '0') {
    backtop.value.style.opacity = '1'
  } else if (currentY <= 10 && getComputedStyle(backtop.value).opacity === '1') {
    backtop.value.removeAttribute('style')
  }
})
</script>

<template>
  <div ref="backtop" class="backtop" @click="scrollTop"><AngleUp /></div>
</template>

<style lang="scss" scoped>
.backtop {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 45px;
  height: 45px;
  color: #4fb3ff;
  background-color: white;
  box-shadow: 0 0 6px #0078d480;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  z-index: 1000;
  opacity: 0;

  svg {
    width: 20px;
  }
}

html.dark {
  .backtop {
    color: #6ea9d6;
    background-color: #11111180;
    box-shadow: 0 0 6px #6ea9d680;
  }
}
</style>

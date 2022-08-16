<script setup>
import { ref, onMounted, watch } from 'vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { AngleDown } from '@vicons/fa'

import defaultBannerImg from '@/assets/imgs/banner.webp'

const props = defineProps({
  height: {
    type: String,
    default: '100vh',
  },
  bgImg: {
    type: String,
    default: defaultBannerImg,
  },
  text: String,
  subtitle: String,
})

const { y } = useWindowScroll()
const { height } = useWindowSize()
const banner = ref()
const scrollDownBar = ref()
const subtitle = ref()
const titleText = ref('')
let timer = 0

function type() {
  if (titleText.value.length < props.text.length) {
    titleText.value += props.text[titleText.value.length]
    timer = setTimeout(type, 50)
    return
  }
  clearTimeout(timer)
  timer = setTimeout(clean, 2000)
}

function clean() {
  if (titleText.value.length > 0) {
    titleText.value = titleText.value.substring(0, titleText.value.length - 1)
    timer = setTimeout(clean, 10)
    return
  }
  clearTimeout(timer)
  timer = setTimeout(type, 1000)
}

function scrollDown() {
  document.documentElement.scrollTop = banner.value.clientHeight
}

onMounted(() => {
  type()
  if (props.subtitle === undefined) {
    subtitle.value.style.display = 'none'
  }
})

onMounted(() => {
  if (height.value > (height.value / 100) * parseInt(props.height.substring(0, props.height.length - 2))) {
    scrollDownBar.value.style.display = 'none'
  }
})

watch(y, (currentY) => {
  if (height.value <= (height.value / 100) * parseInt(props.height.substring(0, props.height.length - 2))) {
    if (currentY >= 50 && getComputedStyle(scrollDownBar.value).opacity === '1') {
      scrollDownBar.value.style.opacity = '0'
      const timer = setTimeout(() => {
        scrollDownBar.value.style.display = 'none'
        clearTimeout(timer)
      }, 300)
    } else if (currentY < 50 && getComputedStyle(scrollDownBar.value).opacity === '0') {
      scrollDownBar.value.style.display = 'block'
      const timer = setTimeout(() => {
        scrollDownBar.value.style.opacity = '1'
        clearTimeout(timer)
      }, 10)
    }
  }
})
</script>

<template>
  <div ref="banner" style="position: relative">
    <div class="banner" :style="{ height: props.height, backgroundImage: `url(${props.bgImg})` }"></div>
    <div class="banner-container">
      <p class="title">
        <span class="title-text">{{ titleText }}</span>
        <span class="cursor"><span class="line"></span></span>
      </p>
      <p ref="subtitle" class="subtitle" v-html="props.subtitle"></p>
    </div>
    <div ref="scrollDownBar" class="scrollDownBar" @click="scrollDown()">
      <span class="scrollDownButton"><AngleDown /></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.5);
  transition: filter 0.3s ease-in-out;
  z-index: -1;

  html.dark & {
    filter: brightness(0.3);
  }
}

.banner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  color: white;
  transform: translateY(-50%);

  html.dark & {
    color: #fffffff0;
  }
}

.title {
  margin-left: 6px;
  margin-bottom: 0.4em;
  font-size: 2em;
}

.subtitle {
  position: relative;
  max-width: 60%;

  &::before {
    content: '『';
    position: absolute;
    top: -5px;
    left: -23px;
    font-weight: bold;
  }

  &::after {
    content: '』';
    position: absolute;
    bottom: -5px;
    right: -23px;
    font-weight: bold;
  }
}
.line {
  border-right: 3px solid currentColor;
}
.cursor {
  margin-left: 3px;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  10%,
  40% {
    opacity: 0;
  }
  60%,
  90% {
    opacity: 1;
  }
}

.scrollDownBar {
  position: absolute;
  bottom: 50px;
  height: 100px;
  width: 100%;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.scrollDownButton {
  position: relative;
  animation: scroll-down 2s infinite ease-in-out;

  svg {
    height: 50px;
  }
}

@keyframes scroll-down {
  0% {
    opacity: 0.8;
    top: 20px;
  }
  50% {
    opacity: 0.4;
    top: 40px;
  }
  100% {
    opacity: 0.8;
    top: 20px;
  }
}
</style>

<script setup>
import { useWindowScroll, useMediaQuery, useWindowSize } from '@vueuse/core'
import { ref, watch, onMounted } from 'vue'

import { Home, FileAlt, Heart, Sun, Moon } from '@vicons/fa'

const { y } = useWindowScroll()
const { width } = useWindowSize()
const nav = ref()
const navCollapse = ref()
const mask = ref()

let height = '0'

const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)')

const isDark = ref(false)

function navbarSwitch() {
  if (!nav.value.classList.contains('expand')) {
    mask.value.style.display = 'block'
    let timer = setTimeout(() => {
      mask.value.classList.add('active')
    }, 10)
    nav.value.classList.add('expand')
    nav.value.classList.add('collapsing')
    if (y.value > 50) {
      nav.value.style.height = parseInt(height.substring(0, height.length - 2)) - 10 + 'px'
    } else {
      nav.value.style.height = height
    }
    navCollapse.value.classList.add('show')
    timer = setTimeout(() => {
      nav.value.classList.remove('collapsing')
      nav.value.removeAttribute('style')
      clearTimeout(timer)
    }, 300)
  } else {
    if (y.value > 50) {
      nav.value.style.height = parseInt(height.substring(0, height.length - 2)) - 10 + 'px'
    } else {
      nav.value.style.height = height
    }
    mask.value.classList.remove('active')
    nav.value.classList.add('collapsing')
    nav.value.classList.remove('expand')
    let timer = setTimeout(() => {
      nav.value.removeAttribute('style')
    }, 10)
    timer = setTimeout(() => {
      nav.value.classList.remove('collapsing')
      navCollapse.value.classList.remove('show')
      mask.value.style.display = 'none'
      clearTimeout(timer)
    }, 300)
  }
}

if (localStorage.getItem('color-scheme') === 'dark' || isPreferredDark.value) {
  isDark.value = true
}

const switchColorScheme = function () {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.querySelector('html').classList.add('dark')
    localStorage.setItem('color-scheme', 'dark')
  } else {
    document.querySelector('html').classList.remove('dark')
    localStorage.removeItem('color-scheme')
  }
}

watch(y, (currentY) => {
  if (currentY > 50) {
    nav.value.classList.add('nav-thin')
  } else {
    nav.value.classList.remove('nav-thin')
  }
})

function collapseShowNavbar() {
  if (y.value > 50) {
    nav.value.style.height = parseInt(height.substring(0, height.length - 2)) - 10 + 'px'
  } else {
    nav.value.style.height = height
  }
  nav.value.classList.add('collapsing')
  nav.value.classList.remove('expand')
  let timer = setTimeout(() => {
    nav.value.removeAttribute('style')
  }, 10)
  timer = setTimeout(() => {
    nav.value.classList.remove('collapsing')
    navCollapse.value.classList.remove('show')
    clearTimeout(timer)
  }, 300)
}

watch(width, (currentWidth) => {
  if (currentWidth < 768 && parseInt(height.substring(0, height.length - 2)) < 70) {
    nav.value.classList.add('expand')
    navCollapse.value.classList.add('show')
    height = getComputedStyle(nav.value).height
    let timer1 = setTimeout(() => {
      collapseShowNavbar()
      clearTimeout(timer1)
    }, 380)
  }
})

onMounted(() => {
  height = getComputedStyle(nav.value).height
  collapseShowNavbar()
})
</script>

<template>
  <div>
    <nav ref="nav" class="nav expand">
      <div class="nav-top">
        <a class="nav-title"><span>红尘的小窝</span></a>
        <div class="nav-switcher" @click="navbarSwitch"><span></span></div>
      </div>
      <div ref="navCollapse" class="nav-collapse show">
        <div class="nav-items">
          <router-link to="/" class="nav-item" activeClass="active">
            <Home />
            <span>首页</span>
          </router-link>
          <a class="nav-item" href="https://blog.redlnn.top">
            <FileAlt />
            <span>博客</span>
          </a>
          <router-link to="/about" class="nav-item" activeClass="active">
            <Heart />
            <span>关于</span>
          </router-link>
        </div>
        <div class="nav-items">
          <span v-if="isDark" class="color-switch" @click="switchColorScheme"><Sun /></span>
          <span v-else class="color-switch" @click="switchColorScheme"><Moon /></span>
        </div>
      </div>
    </nav>
    <div ref="mask" class="mask" style="display: none" @click="navbarSwitch"></div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  padding: 0 100px;
  color: white;
  background-color: transparent;
  box-shadow: 0 0 10px #00000050;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(2px);
  z-index: 999;

  &.nav-thin {
    height: 50px;
    background-color: rgba(47, 65, 84, 0.7);
    backdrop-filter: blur(5px);
  }

  &.expand {
    height: auto;
  }

  html.dark & {
    color: #fffffff0;
  }
}

@media screen and (min-width: 1250px) {
  .nav {
    padding: 0 calc((100vw - 1250px) / 2 + 50px);
  }
}

.nav-switcher {
  display: none;
}

.nav-title {
  margin-right: 15px;
  font-size: 1.2em;
  font-weight: bold;
  line-height: 60px;
  transition: all 0.3s ease-in-out;

  * {
    vertical-align: middle;
  }

  .nav-thin & {
    line-height: 50px;
  }
}

.nav-collapse {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
}

.nav-item {
  display: inline-block;
  position: relative;
  margin: 0 10px;
  font-size: 0.9rem;
  text-align: center;

  * {
    vertical-align: middle;
  }

  &:link,
  &:visited,
  &:hover {
    color: inherit;
    text-decoration: none;
  }

  svg {
    height: 1em;
    margin-right: 5px;
  }

  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    bottom: -3px;
    background-color: currentColor;
    border: solid 1.3px currentColor;
    border-radius: 3px;
    transform: translateX(-50%);
    transition: width 0.2s ease-in-out, opacity 0.2s ease-in-out;
    opacity: 0;
  }

  &:not(.active):not(.title):hover::after,
  &.active::after {
    width: calc(100% + 8px);
    border-width: 1.3px;
    opacity: 1;
  }
}

.color-switch {
  cursor: pointer;

  svg {
    height: 1em;
    vertical-align: middle;
    margin: 0;
  }
}

@media screen and (max-width: 768px) {
  .nav {
    padding: 0;
    flex-direction: column;
    &.expand {
      background: rgba(47, 65, 84, 0.8);
      backdrop-filter: blur(5px);
    }

    &.collapsing {
      overflow: hidden;
    }
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 990;
    background-color: #00000080;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    backdrop-filter: blur(3px);

    &.active {
      opacity: 1;
    }
  }

  .nav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-switcher {
    cursor: pointer;
    display: block;
    height: 17px;
    width: 25px;
    margin: 0 25px 0 0;
  }

  .nav-switcher span,
  .nav-switcher span::before,
  .nav-switcher span::after {
    content: '';
    display: block;
    position: absolute;
    height: 3px;
    width: 23px;
    background-color: currentColor;
    border-radius: 2px;
  }

  .nav-switcher span::before {
    top: 7px;
  }

  .nav-switcher span::after {
    top: 14px;
  }

  .nav-title {
    margin-left: 25px;
  }

  .nav-collapse {
    flex-direction: column;
    justify-content: flex-start;

    nav.expand & {
      padding-bottom: 15px;
    }

    &:not(.show) {
      display: none;
    }
  }

  .nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-item {
    display: block;
    line-height: 40px;

    &::after {
      bottom: 2px;
    }
  }

  .color-switch {
    line-height: 40px;
  }
}
</style>

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Red_lnn | 主页',
    },
  },
  {
    path: '/about/',
    name: 'About',
    component: () => import('../pages/AboutMe.vue'),
    meta: {
      title: '关于我 | Red_lnn',
    },
  },
  {
    path: '/mcmod/',
    name: 'MinecraftMod',
    component: () => import('../pages/MinecraftMod.vue'),
    meta: {
      title: 'Minecraft 模组列表 | Red_lnn',
    },
  },
  {
    path: '/works/',
    name: '一些个人小作品',
    component: () => import('../pages/MyWorks.vue'),
    meta: {
      title: '一些个人小作品 | Red_lnn',
    },
  },
  {
    path: '/404/',
    name: '404',
    component: () => import('../pages/error/404.vue'),
    meta: {
      title: '404 Not Found! | Red_lnn',
    },
  },
  {
    // 匹配所有路径 vue2用* vue3用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
    path: '/:catchAll(.*)',
    redirect: '404',
    meta: {
      title: '404 Not Found! | Red_lnn',
    },
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const defaultTitle = 'Red_lnn'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle
  const $body = document.getElementsByTagName('body')
  const $iframe = document.createElement('iframe')
  $iframe.style.display = 'none'
  $body[0].appendChild($iframe)
  setTimeout(() => {
    document.title = to.meta.title ? to.meta.title : defaultTitle
    $body[0].removeChild($iframe)
  }, 200)
  next()
})

export default router

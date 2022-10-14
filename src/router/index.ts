import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
      meta: {
        title: 'Red_lnn | 主页',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About.vue'),
      meta: {
        title: '关于我 | Red_lnn',
      },
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('@/views/Links.vue'),
      meta: {
        title: '友情链接 | Red_lnn',
      },
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404.vue'),
      meta: {
        title: '404 Not Found | Red_lnn',
      },
    },
    {
      // 匹配所有路径 vue2用* vue3用/:pathMatch(.*)*或/:pathMatch(.*)或/:catchAll(.*)
      path: '/:catchAll(.*)',
      redirect: '404',
      meta: {
        title: '404 Not Found | Red_lnn',
      },
    },
  ],
})

const defaultTitle = 'Red_lnn'

router.beforeEach((to, from, next) => {
  document.title = typeof to.meta?.title === 'string' ? to.meta.title : defaultTitle
  const $body = document.getElementsByTagName('body')
  const $iframe = document.createElement('iframe')
  $iframe.style.display = 'none'
  $body[0].appendChild($iframe)
  setTimeout(() => {
    document.title = typeof to.meta?.title === 'string' ? to.meta.title : defaultTitle
    $body[0].removeChild($iframe)
  }, 200)
  next()
})

export default router

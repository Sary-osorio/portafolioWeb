/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Layout from '@/Layout/layout.vue'
import Index from '@/pages/index.vue'
import Nuevo from '@/pages/nuevo.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import { routes } from 'vue-router/auto-routes'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
         path: '', component: Index
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes

})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router

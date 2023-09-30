import { createRouter, createWebHistory } from 'vue-router'
import AppHome from "@/components/AppHome.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "appHome", component: AppHome }
  ]
})

export default router

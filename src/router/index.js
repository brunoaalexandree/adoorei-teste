import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/flows/signedOff/SignIn/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'signIn',
    component: SignInView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/flows/signedOff/SignIn/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'signIn',
    component: SignInView
  },
  {
    path: '/select-plan',
    name: 'Select Plan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../flows/signedOff/SelectPlan/SelectPlan.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

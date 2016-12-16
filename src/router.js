import Vue from 'vue'
import VueRouter from 'vue-router'
import { Auth } from './services'
import Home from './components/Home'
import LogIn from './components/LogIn'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit.vue'
import User from './components/User'
import About from './components/About'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: LogIn },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/profile/edit', component: ProfileEdit, meta: { requiresAuth: true } },
    { path: '/user/:id', component: User },
    { path: '/about', component: About },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    Auth.requiresUser()
      .then(() => {
        next()
      })
      .catch(() => {
        next({ path: 'login', query: { redirect: to.fullPath } })
      })
    return
  }
  next()
})

export default router

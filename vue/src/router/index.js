import Vue from 'vue'
import Router from 'vue-router'

// 登录注册部分
const LoginLayout = () => import('@/views/login/layout')
const Login = () => import('@/views/login/index')

// 应用主体部分
const AppLayout = () => import('@/views/app/layout')
const Index = () => import('@/views/app/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/app',
      component: AppLayout,
      children: [
        {
          path: '/',
          component: Index
        }
      ]
    },
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '/',
          component: Login
        }
      ]
    },
    {
      path: '/*',
      redirect: '/app'
    }
  ]
})

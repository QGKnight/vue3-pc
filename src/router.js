/* router vue路由管理 */
import Vue from 'vue';
import Router from 'vue-router';
import * as utils from './utils'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/home/index",
      component: resolve => require(['./views/Home'], resolve),
      meta: { title: 'home', keepAlive: false },
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: resolve => require(['./views/index'], resolve),
          meta: { title: '首页', keepAlive: false },
        },
        {
          path: '/home/property',
          name: 'property',
          component: resolve => require(['./views/Property'], resolve),
          meta: { title: '产权信息', keepAlive: false },
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['./views/Login'], resolve),
      meta: { title: '登录', keepAlive: false }
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['./views/Register'], resolve),
      meta: { title: '注册', keepAlive: false }
    },
    {
      path: "/notFound",
      name: "notFound",
      component: resolve => require(['./views/404'], resolve),
      meta: { title: '404', keepAlive: false }
    },
    {
      path: "*",
      redirect: "/notFound"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
const whiteList = ['login', 'register', 'home','index','property'];
router.beforeEach(function (to, from, next) {
  // 登录拦截
  const token = utils.storage.get('token') ? true : false;
  if (whiteList.indexOf(to.name) < 0 && !token) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})
export default router;


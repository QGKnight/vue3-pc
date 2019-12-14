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
          meta: { title: '首页', keepAlive: true },
        },
        {
          path: '/home/property',
          name: 'property',
          component: resolve => require(['./views/Property'], resolve),
          meta: { title: '产权信息', keepAlive: true },
        },
        {
          path: '/home/deal',
          name: 'deal',
          component: resolve => require(['./views/deal'], resolve),
          meta: { title: '成交公告', keepAlive: true },
        },
        {
          path: '/home/chart',
          name: 'chart',
          component: resolve => require(['./views/chart'], resolve),
          meta: { title: '数据分析', keepAlive: false },
        },
        {
          path: '/home/check',
          name: 'check',
          component: resolve => require(['./views/check'], resolve),
          meta: { title: '图像核对', keepAlive: false },
        },
        {
          path: '/home/guide',
          name: 'guide',
          component: resolve => require(['./views/guide'], resolve),
          meta: { title: '交易指南', keepAlive: false },
        },
        {
          path: '/home/policy',
          name: 'policy',
          component: resolve => require(['./views/policy'], resolve),
          meta: { title: '政策法规', keepAlive: false },
        },
        {
          path: '/home/news',
          name: 'news',
          component: resolve => require(['./views/news'], resolve),
          meta: { title: '新闻资讯', keepAlive: false },
        },
        {
          path: '/home/contact',
          name: 'contact',
          component: resolve => require(['./views/contact'], resolve),
          meta: { title: '联系我们', keepAlive: false },
        },
        {
          path: '/home/info',
          name: 'info',
          redirect: "/info/msg",
          component: resolve => require(['./views/info'], resolve),
          meta: { title: '个人中心', keepAlive: false },
          children:[
            {
              path: '/info/msg',
              name: 'info',
              component: resolve => require(['./views/infos/msg'], resolve),
              meta: { title: '个人信息', keepAlive: false ,type:'msg',showFlag:false},
            },
            {
              path: '/info/password',
              name: 'info',
              component: resolve => require(['./views/infos/password'], resolve),
              meta: { title: '登录密码', keepAlive: false ,type:'password',showFlag:false},
            },
            {
              path: "/info/upPage",
              name: "info",
              component: resolve => require(['./views/infos/upPage'], resolve),
              meta: { title: '产权申报', keepAlive: false ,type:'upPage',showFlag:false}
            },
            {
              path: "/info/result",
              name: "info",
              component: resolve => require(['./views/infos/result'], resolve),
              meta: { title: '查询结果', keepAlive: false ,type:'result',showFlag:false}
            },
            {
              path: "/info/edit",
              name: "info",
              component: resolve => require(['./views/infos/edit'], resolve),
              meta: { title: '材料详情', keepAlive: false ,type:'edit',showFlag:false}
            },
            {
              path: "/info/colle",
              name: "info",
              component: resolve => require(['./views/infos/colle'], resolve),
              meta: { title: '我的收藏', keepAlive: false ,type:'colle',showFlag:true}
            },
            {
              path: "/info/project",
              name: "info",
              component: resolve => require(['./views/infos/project'], resolve),
              meta: { title: '我的项目', keepAlive: false ,type:'project',showFlag:true}
            },
            {
              path: "/info/record",
              name: "info",
              component: resolve => require(['./views/infos/record'], resolve),
              meta: { title: '资金记录', keepAlive: false ,type:'record',showFlag:true}
            },
          ]
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
      path: '/forget',
      name: 'forget',
      component: resolve => require(['./views/forget'], resolve),
      meta: { title: '忘记密码', keepAlive: false }
    },
    {
      path: "/notFound",
      name: "notFound",
      component: resolve => require(['./views/404'], resolve),
      meta: { title: '404', keepAlive: false }
    },
    {
      path: "/notice",
      name: "notice",
      component: resolve => require(['./views/notice'], resolve),
      meta: { title: '公告详情', keepAlive: false }
    },
    {
      path: "/sigOne",
      name: "sigOne",
      component: resolve => require(['./views/sigOne'], resolve),
      meta: { title: '报名流程', keepAlive: false }
    },
    {
      path: "/detail",
      name: "detail",
      component: resolve => require(['./views/detail'], resolve),
      meta: { title: '详情', keepAlive: false }
    },
    {
      path: "/projectDetail",
      name: "projectDetail",
      component: resolve => require(['./views/projectDetail'], resolve),
      meta: { title: '详情', keepAlive: false }
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
const whiteList = ['projectDetail','detail','sigOne','password','msg','info','upPage','contact','login', 'register', 'home','index','property','notice','forget','deal','chart','check','guide','policy','news'];
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


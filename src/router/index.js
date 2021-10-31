import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import Index from '@/page/Index'
import View from '@/page/View'
import Home from '@/page/Home'
import Extension from '@/page/Extension'
import Options from '@/page/Options'
import History from '@/page/History'
import About from '@/page/About'

Vue.use(VueI18n)
Vue.use(Router);
Vue.use(ElementUI);


const messages = {
  'en': Object.assign(enLocale),
  'zh-cn': Object.assign(zhLocale)
}

const i18n = new VueI18n({
  locale: (navigator.language || navigator.browserLanguage).toLowerCase() ||'zh-cn', // set locale
  messages, // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

const router = new Router({
  routes: [
    {path: '/view', component: View, children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
      },
      {
        path: 'index',
        component: Index,
        name: 'index',
      },
      {
        path: 'extension',
        component: Extension,
        name: 'extension',
      },
      {
        path: 'options',
        component: Options,
        name: 'options',
      },
      {
        path: 'about',
        component: About,
        name: 'about',
      },
      {
        path: '*',
        redirect: { name: 'home' }
      },]
    },
    {
      path: '/history',
      component: History,
      name: 'history',
    },
  ]
});

if (PRODUCTION) import(
  /* webpackChunkName: "tracker", webpackMode: "lazy" */
  '@/common/util/tracker'
  ).then(({tracker}) => {
  tracker();
  router.beforeEach((to, from, next) => {
    dataLayer.push('event', 'page', to.name);
    dataLayer.push('config', 'pageview');
    next()
  })
});

export default router

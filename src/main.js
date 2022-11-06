// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from '../src/axios'
import VueParticles from 'vue-particles'
import VueCookies from 'vue-cookies';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(axios);
Vue.use(VueParticles);
Vue.use(VueCookies);

/* eslint-disable no-new */

// 判断是否登录  若未登录 跳转至登录页面
router.beforeEach((to,from,next)=>{
  if (to.matched.some(m => m.meta.requireAuth)) {
    let token = store.state.common.token
    if (token === '' || token === null){
      ElementUI.Message.error("暂未登录！请先登录！")
      next({path: '/Login'})
    }else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import Router from 'vue-router'
import Login from "../view/Login";
import Home from "../view/Home";
import User from "../view/User";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:'主页',
        requireAuth: true
      },
      children:[
        {
          path: '/User',
          name: 'User',
          component: User,
          meta:{
            title:'用户信息',
            requireAuth: true
          }
        }
        ]
    }
  ]
})

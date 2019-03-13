import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Users from './views/Users.vue'
import UserShow from './views/UserShow.vue'
import Vue404 from './views/errors/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    } ,
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/user/show/:id',
      name: 'user-show',
      component: UserShow
    },
    {
      path: '*',
      name: '404',
      component: Vue404
    }
  ]
})

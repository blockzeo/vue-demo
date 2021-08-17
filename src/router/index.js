import Vue from 'vue'
import Router from 'vue-router'
import OverView from '@/views/OverView'
import LoginView from '@/views/LoginView'
import LeftBar from '@/components/LeftBar'
import TopBar from '@/components/TopBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/overview',
      name: 'overview',
      components: {
        leftBar: LeftBar,
        topBar: TopBar,
        default: OverView
      }
    },
    {
      path: '/login',
      name: '',
      component: LoginView
    }
  ]
})

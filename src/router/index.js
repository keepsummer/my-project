
import Vue from 'vue'
import Router from 'vue-router'
import Dept from '../components/Dept'
import Page1 from  '../components/Page1'
import Page2 from  '../components/Page2'
import Page3 from  '../components/Page3'
import Page4 from  '../components/Page4'
import Index from '../components/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'导航1',
      component: Index,
      redirect:"/page1",
      // redirect 设置默认进入页面
      children:[
        {
          path: '/page1',
          name:'页面1',
          component: Page1
        },
        {
          path: '/page2',
          name:'页面2',
          component: Page2
        }
      ]
    },
    // {
    //   path: '/dept',
    //   component: Dept
    // },
    {
      path: '/nav',
      name:'导航2',
      component: Index,
      children:[
        {
          path: '/page3',
          name:'页面3',
          component: Page3
        },
        {
          path: '/page4',
          name:'页面4',
          component: Page4
        }
      ]
    }
  ],
  mode:'history'

})

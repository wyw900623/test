import Vue from 'vue'
import Router from 'vue-router'

import findProject from '@/components/page1'
import communityActivity from '@/components/page1-1'
import publishProject from '@/components/page1-2'
import personalCenter from '@/components/page2'
import manageCenter from '@/components/page4'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  hash: false,
  routes: [{
      path: '*',
      redirect: '/findProject'
  }, {
      path: '/findProject',
      name: 'findProject',
      component: findProject
  }, {
      path: '/communityActivity',
      name: 'communityActivity',
      component: communityActivity
  }, {
      path: '/publishProject',
      name: 'publishProject',
      component: publishProject
  }, {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
  }, {
      path: '/manageCenter',
      name: 'manageCenter',
      component: manageCenter
  }]
})

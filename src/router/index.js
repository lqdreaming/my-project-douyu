import Vue from 'vue'
import Router from 'vue-router'
import VideoPlayer from 'vue-video-player'
/* import recommendation from '../components/recommendation/recommendation'
import songs from '../components/songs/songs'
import radio from '../components/radio/radio'
import ranking from '../components/ranking/ranking' */

import '../common/stylus/index.styl'

Vue.use(Router)
Vue.use(VideoPlayer)
/* http */
// Vue.prototype.$http = Axios

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['@/components/login/login'], resolve)
    },
    {
      path: '/',
      component: resolve => require(['@/components/primary/primary'], resolve)
    },
    {
      name: 'wholeClassify',
      path: '/wholeClassify/:id',
      component: resolve => require(['@/components/wholeClassify/wholeClassify'], resolve)
    },
    {
      name: 'classifyContent',
      path: '/classifyContent/:cateId',
      component: resolve => require(['@/components/classifyContent/classifyContent'], resolve)
    },
    {
      name: 'myCenter',
      path: '/myCenter/:id',
      component: resolve => require(['@/components/myCenter/myCenter'], resolve)
    },
    {
      name: 'recommend',
      path: '/recommend/:id',
      component: resolve => require(['@/components/recommend/recommend'], resolve)
    },
    {
      name: 'room',
      path: '/room/:item',
      component: resolve => require(['@/components/room/room'], resolve)
    },
    {
      path: '/chat',
      component: resolve => require(['@/components/livefooter/chat/chat'], resolve)
    },
    {
      path: '/anchor',
      component: resolve => require(['@/components/livefooter/anchor/anchor'], resolve)
    },
    {
      path: '/conlist',
      component: resolve => require(['@/components/livefooter/conlist/conlist'], resolve)
    },
    {
      path: '/attention',
      component: resolve => require(['@/components/livefooter/attention/attention'], resolve)
    },
    {
      name: 'search',
      path: '/search/:value',
      component: resolve => require(['@/components/myCenter/search/search'], resolve)
    },
    {
      path: '/whole',
      component: resolve => require(['@/components/myCenter/search/whole/whole'], resolve)
    },
    {
      path: '/search/livepeople',
      component: resolve => require(['@/components/myCenter/search/livepeople/livepeople'], resolve)
    },
    {
      path: '/search/mainpeople',
      component: resolve => require(['@/components/myCenter/search/mainpeople/mainpeople'], resolve)
    }
  ]
})

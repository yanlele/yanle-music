import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer.vue'
import Rank from 'components/rank/rank.vue'
import Search from 'components/search/search.vue'
import SingerDetail from 'components/singer-detail/singer-detail'
import Disc from 'components/disc/disc'
import Toplist from 'components/top-list/top-list'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children:[
        {
          path:':id',
          component:Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children:[
        {
          path:':id',
          component:Toplist
        }
      ]
    },
    {
      path: '/search',
      component: Search
    }
  ]
})

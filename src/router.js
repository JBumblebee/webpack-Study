import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCarContainer from './components/tabbar/shopCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由規則
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
  ],
  linkActiveClass: 'mui-active' //覆蓋默認的路由高亮的類，默認的類是router-link-active
})

// 把路由对象暴露出去
export default router
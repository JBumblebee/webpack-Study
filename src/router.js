import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCarContainer from './components/tabbar/shopCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'



// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    //配置路由規則
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/NewsList', component: NewsList },
    { path: '/home/NewsInfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList }
  ],
  linkActiveClass: 'mui-active' //覆蓋默認的路由高亮的類，默認的類是router-link-active
})

// 把路由对象暴露出去
export default router
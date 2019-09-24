// 入口文件
// console.log('OK,项目框架可以使用了')

//導入 vue
import Vue from 'vue'

//安裝路由的包
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

//導入 MUI 的樣式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


//導入自己的 router.js 文件
import router from './router.js'

//按需導入 mint-ui 中的組件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
//导入 App 根组件
import app from './App.vue'
import { S_IWGRP } from 'constants'

var vm = new Vue({

    el: '#app',
    render: c => c(app),
    router
})
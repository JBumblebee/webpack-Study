// 入口文件
// console.log('OK,项目框架可以使用了')

//導入 vue
import Vue from 'vue'

//安裝路由的包
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)

import moment from 'moment'

//时间全局过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
//配置全局路由根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';
Vue.http.options.emulateJSON = true;


//導入 MUI 的樣式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


//導入自己的 router.js 文件
import router from './router.js'

//按需導入 mint-ui 中的組件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
//导入 App 根组件
import app from './App.vue'




var vm = new Vue({

    el: '#app',
    render: c => c(app),
    router
})
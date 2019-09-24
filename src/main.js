// 入口文件
// console.log('OK,项目框架可以使用了')

//導入 vue
import Vue from 'vue'

//導入 MUI 的樣式
import './lib/mui/css/mui.css'

//哈哈
//按需導入 mint-ui 中的組件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

//导入 App 根组件
import app from './App.vue'

var vm = new Vue({

    el: '#app',
    render: c => c(app)
})
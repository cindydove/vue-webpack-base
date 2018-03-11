import Vue from "vue"
// 安装路由
import VueRouter from 'vue-router'
// 为 Vue 安装 vue-router
Vue.use(VueRouter)

// 安装Vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 安装axios进行数据请求，axios要后台进行配合才能发送跨域请求
import axios from 'axios'
// 设置请求地址的根路径
axios.defaults.baseURL = ""
// 将axios挂载到Vue上
Vue.prototype.$http = axios;

// 安装fetch-jsonp获取跨域请求的数据
// fetch-jsonp专门用来进行跨域请求
import fetchJsonp from 'fetch-jsonp'
Vue.prototype.$ajax = fetchJsonp

import App from "./components/app.vue"

import router from './router.js'
var vm = new Vue({
    el: '#app',
    render: c => c(App),
    router
})
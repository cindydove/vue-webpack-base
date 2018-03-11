import VueRouter from 'vue-router'

import HomeContainer from './components/home.vue'

const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer}
    ]
})

// 导出路由配置
export default router
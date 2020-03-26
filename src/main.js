import Vue from 'vue'
import app from './App.vue'
import router from './router.js'
import '../lib/mui/css/mui.min.css'

// Vue.use(VueRouter)

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})

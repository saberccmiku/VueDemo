import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router.js'
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'

Vue.use(VueRouter)

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})

import Vue from 'vue'
import router from './router/index'

new Vue({
    el: '#app',
    router: router,
    render: h => h('router-view')
})
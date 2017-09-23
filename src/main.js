import Vue from 'vue'
import router from './router'
import store from './store'

new Vue({
    el: '#app',
    router: router,
    store,
    render: h => h('router-view')
})
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
    hashbang: false,
    history: true,
    linkActiveClass: 'active',
    routes
})

router.beforeEach((to, from, next) => {
    console.log('--------------->' + to.name)
    document.title = to.meta.title
    next()
})

export default router
import 'aid-elements/dist/css/aid.min.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import taurus from 'aid-taurus-desktop'
import store from './store'
import routes from './routes'
import container from './container.vue'

Vue.use(VueRouter)
Vue.use(taurus)

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0)
    next()
})

sync(store, router)

const app = new Vue({
    store,
    router,
    render(h) {
        return h(container)
    }
})

if (module.hot) {
    module.hot.accept()
}

app.$mount('#app')

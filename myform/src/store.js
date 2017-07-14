import Vuex from 'vuex'
import Vue from 'vue'
import client from './module/client'

Vue.use(Vuex)

const modules = {
    client,
}

const store = new Vuex.Store({
    state: {},
    modules
})

export default store

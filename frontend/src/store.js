import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentUser: null,
        users: []
    },
    mutations: {
        setCurrentUser: (state, payload) => state.currentUser = payload,
        setUsers: (state, payload) => state.users = payload,
    },
    actions: {

    }
})

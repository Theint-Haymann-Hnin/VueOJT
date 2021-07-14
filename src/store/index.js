import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
        },
    },
    actions: {
        login({ commit }, credentials) {
            return axios.post("/api/login", credentials).then(({ data }) => {
                console.log(data)
                commit("setUserData", data);
            });
        },
        logout({ commit }, credentials) {
            return axios.post("/api/logout", credentials).then(() => {
                commit("setUserData", null);
            });
        },
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        userType: (state) => {
            if (state.user && state.user.data.user.type) {
                return state.user.data.user.type;
            }
            return -1;
        },
        userId: (state) => {
            if (state.user && state.user.data.user.id) {
                return state.user.data.user.id;
            }
        },
        userName: (state) => {
            if (state.user && state.user.data.user.name) {
                return state.user.data.user.name;
            }
        },
        user: (state) => {
            if (state.user && state.user.data.user) {
                return state.user.data.user;
            }
        },
    },
    plugins: [createPersistedState()],
});

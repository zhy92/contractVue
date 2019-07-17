import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        'currentPath': 1
    },
    getters: {
        getPath(state) {
            return state.currentPath;
        }
    },
    mutations: {
        changePath(state, pathCode) {
            state.currentPath = pathCode;
        }
    },
    actions: {
        changeHistoryPath(context, path) {
            context.commit('changePath', path);
        }
    }
});
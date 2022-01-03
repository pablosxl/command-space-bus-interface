import Vue from 'vue'
import Vuex from 'vuex'
import mission from './modules/Mission';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mission
    }
})

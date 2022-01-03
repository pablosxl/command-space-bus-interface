import {
    SET_MISSION,
} from '../mutation-types'

export default {
    namespaced: true,

    state: {
        mission:{},
    },
    mutations: {
        [SET_MISSION]: (state, newMission) => {
            state.mission = newMission
        }
    },
    actions: {
        //Actions que commitam mutations
        setMission({ commit }, mission){
            commit(SET_MISSION, mission);
        }
    }
}
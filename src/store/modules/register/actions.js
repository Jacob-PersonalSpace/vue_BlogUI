import { REGIST, RESET, CHANGE_USERNAMEVALUE } from '../../types'

export default {
    regist({ commit }, payload) {
        commit(REGIST, payload)
    },
    reset({ commit }) {
        commit(RESET)
    },
    updateRegistFormData({ commit }) {
        commit(CHANGE_USERNAMEVALUE)
    },
}
import { REGIST, RESET } from '../../types'

export default {
    regist({ commit }) {
        commit(REGIST)
    },
    reset({ commit }) {
        commit(RESET)
    },
}
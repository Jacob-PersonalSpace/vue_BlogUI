import { INCREASE, RESET } from '../../types'

export default {
    increase({ commit }) {
        commit(INCREASE)
    },
    reset({ commit }) {
        commit(RESET)
    },
}
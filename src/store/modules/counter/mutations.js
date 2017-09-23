import { INCREASE, RESET } from '../../types'

export default {
    [INCREASE](state) {
        state.count++
    },
    [RESET](state) {
        state.count = 0
    },
}
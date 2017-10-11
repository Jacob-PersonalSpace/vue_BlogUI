import _ from 'lodash'
import { REGIST, RESET, CHANGE_USERNAMEVALUE } from '../../types'

export default {
    [RESET](state) {
        state.registFormData = {
            ...state.registFormData,
            newUserName: '',
            newPassword: '',
            newRePassword: '',
        }
    },
    [CHANGE_USERNAMEVALUE](state, payload) {
        state.registFormData = { ...state.registFormData, ...payload }
    },
    [REGIST](state, payload) {
        console.log('????', payload.canRegist)
    },
}
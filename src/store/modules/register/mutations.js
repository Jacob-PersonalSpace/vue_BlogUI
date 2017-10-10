import _ from 'lodash'
import { REGIST, RESET, CHANGE_USERNAMEVALUE } from '../../types'

export default {
    [RESET](state) {
        // state.newUserName = '',
        // state.newPassword = '',
        // state.newRePassword = ''
        state.registFormData = _.merge({}, state.registFormData, {
            newUserName: '',
            newPassword: '',
            newRePassword: '',
        })
    },
    [CHANGE_USERNAMEVALUE](state, obj) {
        state.registFormData = _.merge({}, state.registFormData, obj)
    },
}
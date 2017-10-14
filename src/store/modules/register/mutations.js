import _ from 'lodash'
import {
    SUCCESS_REGIST,
    REQUEST_REGIST,
    FAILURE_REGIST,
    RESET,
    CHANGE_FORMDATAVALUE,
    POPUP_MESSAGE,
} from '../../types'

export default {
    [RESET](state) {
        state.registFormData = {
            ...state.registFormData,
            newUserName: '',
            newPassword: '',
            newRePassword: '',
        }
    },
    [CHANGE_FORMDATAVALUE](state, payload) {
        state.registFormData = {
            ...state.registFormData,
            ...payload,
        }
    },
    [REQUEST_REGIST](state) {
        state.isRegisting = true;
    },
    [SUCCESS_REGIST](state, payload) {
        state.isRegisting = false;
        state.registFormData = {
            ...state.registFormData,
            newUserName: '',
            newPassword: '',
            newRePassword: '',
        }
    },
    [FAILURE_REGIST]({ isRegisting, shouldPopup }, payload) {
        isRegisting = false;
    },
    [POPUP_MESSAGE](state, payload) {
        state.popupFormData = {
            ...state.popupFormData,
            ...payload,
        }
    },
}
import {
    REQUEST_REGIST,
    SUCCESS_REGIST,
    FAILURE_REGIST,
    RESET,
    CHANGE_FORMDATAVALUE,
    POPUP_MESSAGE,
} from '../../types'
import apiUrl from '../../../config/apiUrl'

export default {
    regist({ commit, state }) {
        commit(REQUEST_REGIST)

        fetch(apiUrl[process.env.NODE_ENV]['regist'], {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                newUserName: state.registFormData.newUserName,
                newPassword: state.registFormData.newPassword,
                newRePassword: state.registFormData.newRePassword,
            })
        })
            .then(successRegistData => {
                commit(SUCCESS_REGIST)

                commit(POPUP_MESSAGE, {
                    alertMessage: '',
                    shouldPopup: true,
                    type: 'success',
                })
            })
            .catch(error => {
                commit(FAILURE_REGIST)

                commit(POPUP_MESSAGE, {
                    alertMessage: error,
                    shouldPopup: true,
                    type: 'error',
                })
            })
    },
    reset({ commit }) {
        commit(RESET)
    },
    popupMessage({ commit }, payload) {
        commit(POPUP_MESSAGE, payload)
    },
    updateRegistFormData({ commit }) {
        commit(CHANGE_FORMDATAVALUE)
    },
}
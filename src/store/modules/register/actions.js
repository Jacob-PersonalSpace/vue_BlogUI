import {
    REQUEST_REGIST,
    SUCCESS_REGIST,
    FAILURE_REGIST,
    RESET,
    CHANGE_FORMDATAVALUE,
    POPUP_MESSAGE,
} from '../../types'

export default {
    regist({ commit, state }) {
        commit(REQUEST_REGIST)
        api.regist()
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
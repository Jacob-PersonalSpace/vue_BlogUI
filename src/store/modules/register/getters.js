const getters = {
    isSamePassword: ({ registFormData }) => {
        return (registFormData.newPassword || registFormData.newRePassword) && registFormData.newPassword !== registFormData.newRePassword
            ?
            false
            :
            true
    },
    canRegist: ({ registFormData }, getters) => {
        return registFormData.newUserName &&
            registFormData.newPassword &&
            registFormData.newRePassword &&
            getters.isSamePassword
            ?
            true
            :
            false
    },
}

export default {
    ...getters,
}
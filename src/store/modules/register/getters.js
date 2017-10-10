export default {
    isSamePassword: (state) => {
        return state.registFormData.newPassword === state.registFormData.newRePassword ? true : false
    }
}
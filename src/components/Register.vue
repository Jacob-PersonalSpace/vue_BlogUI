<template>
    <div>
        <button type="button" @click="back()"><span>Back To Login</span></button>
        <div>Register</div>
    </div>
</template>

<script>
export default {
    methods: {
        back() {
            this.$router.push({ name: 'login' })
        },
    },
}
</script>

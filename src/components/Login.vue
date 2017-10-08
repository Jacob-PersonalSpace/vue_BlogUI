<template>
    <div>
        <div>Login</div>
        <button type="button" @click="doRegist()"><span>Regist</span></button>
    </div>
</template>

<script>
export default {
    methods: {
        doRegist() {
            this.$router.push({ name: 'register' })
        },
    },
}
</script>


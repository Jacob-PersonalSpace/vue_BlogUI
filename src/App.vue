<template>
    <router-view>
    </router-view>
</template>

<script>
export default {
    created() {
        console.log('----NODE_ENV----', process.env.NODE_ENV)
    }
}
</script>
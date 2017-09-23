<template>
    <div>
        <p>{{message}}</p>
        <p>click count: {{count}}, {{count2}}, {{getCount1}}, {{localComputed}}</p>
        <button @click="increase">increase</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    data: () => ({ message: 'Hello Vue.js!' }),
    computed: {
        localComputed() {
            return this.count + 10
        },
        ...mapState({
            count: state => state.counter.count,
            count2: state => state.counter.count + 1,
        }),
        ...mapGetters({
            getCount1: 'getCount',
        }),
    },
    methods: {
        ...mapActions([
            'increase',
            'reset',
        ])
    },
    // vuex: {
    //     actions: { increase, reset },
    //     getters: {
    //         count: ({ counter }) => counter.count
    //     }
    // }
}
</script>
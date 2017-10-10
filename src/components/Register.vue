<template>
    <div>
        <button class="btn btn-success btn-lg" @click="back()">
            <span>Back To Login</span>
        </button>

        <div class="centerContainer">
            <div class="wrapper">
                <div class="a">
                    <span>username</span>
                </div>
                <div class="b">
                    <input v-model="newUserName" type="text" placeholder="username" />
                </div>
                <!-- <div class="c">
                    <span>password</span>
                </div>
                <div class="d">
                    <input v-model="newPassword" type="password" placeholder="password" />
                </div>
                <div class="e">
                    <span>rePassword</span>
                </div>
                <div class="f">
                    <input v-model="newRePassword" type="password" placeholder="rePassword" />
                </div> -->
            </div>
            <div class="footer">
                <button>
                    <span>Regist</span>
                </button>
                <button @click="reset">
                    <span>Reset</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        newUserName: {
            get() {
                return this.$store.state.register.registFormData.newUserName
            },
            set(value) {
                this.$store.commit('CHANGE_USERNAMEVALUE', { newUserName: value })
            }
        },
        // ...mapState({
        //     newUserName: state => state.register.newUserName,
        //     newPassword: state => state.register.newPassword,
        //     newRePassword: state => state.register.newRePassword,
        // }),
        ...mapGetters({
            isSamePassword: 'isSamePassword',
        }),
    },
    methods: {
        ...mapActions([
            'regist',
            'reset',
        ]),
        back() {
            this.$router.push({ name: 'login' })
        },
    },
}
</script>

<style lang="less" scoped>
.centerContainer {
    position: absolute;
    width: 30%;
    height: 20%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #D8D8EB;
    border-radius: 10px;

    .footer {
        position: inherit;
        bottom: 0;
        left: 50%;
        transform: translate(-50%);
        width: 100%;
        text-align: center;

        button {
            width: 40%;
            height: 30px;
            border-radius: 5px;
        }
    }

    .wrapper {
        position: relative;
        padding: 20px;
        display: grid;
        grid-template-columns: 40% 10% 50%;
        grid-template-rows: auto 10px auto 10px auto;

        input {
            width: 100%;
        }

        .box {
            background-color: #444;
            color: #fff;
            font-size: 150%;
            padding: 5px;
            text-align: left;
        }

        .a {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 1;
            grid-row-end: 2;
        }

        .b {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 2;
        }

        .c {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 3;
            grid-row-end: 4;
        }

        .d {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 3;
            grid-row-end: 4;
        }

        .e {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 5;
            grid-row-end: 6;
        }

        .f {
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 5;
            grid-row-end: 6;
        }
    }
}
</style>

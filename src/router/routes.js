import Login from '../components/Login'
import Register from '../components/Register'

export default [
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            title: 'Login',
        },
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            title: 'Regist',
        },
    },
    {
        path: '*',
        redirect: { name: 'login' },
    },
]
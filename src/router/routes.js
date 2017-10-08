import Login from '../components/Login'
import Register from '../components/Register'

export default [
    {
        path: '/login',
        component: Login,
        name: 'login',
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
    },
    {
        path: '*',
        redirect: { name: 'login' },
    },
]
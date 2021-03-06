// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: "bg-light",
    routes: [
        {
            path: '/',
            name: 'Main',
            meta: {requiresAuth: true},
            components: require('../components/layouts/MainLayout'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: require('../views/home').default,
                }
            ]
        },
        //Guest routes
        {
            path: '/',
            name: 'Guess',
            components: require('../components/layouts/GuessLayout'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: require('../views/auth/login').default,
                }
            ]
        },
    ]
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.getters['auth/isAuth']) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
});


export default router;
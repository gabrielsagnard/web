import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Legals from '@/components/Legals'
import Terms from '@/components/Terms'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/legals',
            name: 'Legals',
            component: Legals
        },
        {
            path: '/terms',
            name: 'Terms',
            component: Terms
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition)
    {
        return { x: 0, y: 0 }
    }
})

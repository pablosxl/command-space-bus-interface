import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import BaseComponent from "@/views/base/BaseComponent.vue";

Vue.use(VueRouter)

    const routes = [
    {
        path: '/',
        name: 'BaseComponent',
        component: BaseComponent,
        redirect: {name: 'Missoes'},
        children: [
            {
                path: '/about',
                name: 'About',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            },
            {
                path: '/onibus',
                name: 'Onibus Espacial',
                component: () => import(/* webpackChunkName: "login" */ '../views/bus/SpaceBus.vue')
            },
            {
                path: '/torre',
                name: 'Torre de controle',
                component: () => import(/* webpackChunkName: "login" */ '../views/tower/ControlTower.vue')
            },
            {
                path: '/missoes',
                name: 'Missoes',
                component: () => import(/* webpackChunkName: "login" */ '../views/missions/MissionsList.vue')
            },
            {
                path:"notfound",
                name: "notFound",
                component: () => import(/* webpackChunkName: "NotFound" */ "@/views/base/NotFound.vue")
            },
        ]
    },
    {
        path:"*",
        name: "default",
        redirect: { name:"notFound" }
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

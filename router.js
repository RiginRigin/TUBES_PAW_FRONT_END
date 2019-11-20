import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../src/components/Dashboard.vue'
import galerry from '../src/components/galerry.vue'
import accomodation from '../src/components/accomodation.vue'
import aboutus from '../src/components/aboutus.vue'
import facilities from '../src/components/facilities.vue'
import login from '../src/components/login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/galerry',
            name: 'galerry',
            component: galerry
        },
        {
            path: '/accomodation',
            name: 'accomodation',
            component: accomodation
        },
        {
            path: '/facilities',
            name: 'facilities',
            component: facilities
        },
        {
            path: '/aboutus',
            name: 'aboutus',
            component: aboutus
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})
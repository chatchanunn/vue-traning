import VueRouter from 'vue-router'

import Home from './views/home.vue'
import About from './views/about.vue'
import About2 from './views/a1.vue'

import Contact from './views/a2.vue'
import Form from './views/form.vue'
import Photo from './views/photo.vue'
import User from './views/user.vue'
import UserProfile from './views/userprofile.vue'
import Search from './views/search.vue'
import Props from './views/props.vue'
const routes = [
    {
        path: '/', component : Home
    },
    {
        path: '/about' , component : About
    },
    {
        path: '/a1' , component : About2
    },
    {
        path: '/a2' , component : Contact
    },
    {
        path: '/form' , component : Form
    },
    {
        path: '/photo' , component : Photo
    },
    {
        path: '/user' , component : User
    },
    {
        path: '/user/:id' , component : UserProfile // parameter route
    },
    {
        path: '/search' , component : Search
    },
    {
        path: '/props' , component : Props
    }
]


const router = new VueRouter({
    routes : routes,
    mode : 'history'
})

export default router

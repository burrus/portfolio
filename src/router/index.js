import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
    },
    {
        path: "/hail",
        name: "Hail",
        component: () => import("../views/Hail.vue"),
    },
    {
        path: "/stormy",
        name: "Stormy",
        component: () => import("../views/Stormy.vue"),
    },
    {
        path: "/forcely",
        name: "Forcely",
        component: () => import("../views/Forcely.vue"),
    },
    {
        path: "/hotwire",
        name: "Hotwire",
        component: () => import("../views/Hotwire.vue"),
    },
    {
        path: "/hoteltonight",
        name: "HotelTonight",
        component: () => import("../views/HotelTonight.vue"),
    },
    {
        path: "/airbnb",
        name: "Airbnb",
        component: () => import("../views/Airbnb.vue"),
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

export default router

import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: Home,
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: () => import("../views/Contact.vue"),
    },
    {
        path: "/hail",
        name: "HailPage",
        component: () => import("../views/Hail.vue"),
    },
    {
        path: "/stormy",
        name: "StormyPage",
        component: () => import("../views/Stormy.vue"),
    },
    {
        path: "/forcely",
        name: "ForcelyPage",
        component: () => import("../views/Forcely.vue"),
    },
    {
        path: "/alchemy",
        name: "AlchemyPage",
        component: () => import("../views/Alchemy.vue"),
    },
    {
        path: "/hotwire",
        name: "HotwirePage",
        component: () => import("../views/Hotwire.vue"),
    },
    {
        path: "/hoteltonight",
        name: "HotelTonightPage",
        component: () => import("../views/HotelTonight.vue"),
    },
    {
        path: "/airbnb",
        name: "AirbnbPage",
        component: () => import("../views/Airbnb.vue"),
    },
]

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes,
})

export default router

<template>
    <div class="work">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="work-title">Stormy</span> 
                was a single-page weather app that allowed you to quickly grab the 
                weather forecast from anywhere in the world. I used the 
                <a href="https://darksky.net/dev" target="_blank">Dark Sky Weather API</a> 
                to grab weather conditions. This app was based on an app from 
                <a href="https://teamtreehouse.com/burrus" target="_blank">Treehouse</a>, 
                but I expanded upon it by adding several other features.
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/stormy-1.png" alt="Home screen with weather forecast">
                <img src="@/assets/img/stormy-2.png" alt="City search">
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

import "viewerjs/dist/viewer.css"
import VueViewer from "v-viewer"
import Vue from "vue"
Vue.use(VueViewer)

export default {
    name: "Stormy",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
</style>
<template>
    <div class="work">
        <HeaderComponent :showBackButton=true />
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
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from "@/components/Footer.vue"
import HeaderComponent from "@/components/Header.vue"

import "viewerjs/dist/viewer.css"
import VueViewer from "v-viewer"
import Vue from "vue"
Vue.use(VueViewer)

export default {
    name: "StormyPage",
    components: {
        FooterComponent,
        HeaderComponent,
    },
}
</script>

<style scoped>
</style>
<template>
    <div class="work">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="work-title">Airbnb</span> 
                helps you find vacation rentals, cabins, beach houses, unique homes, and experiences around the 
                world - all made possible by hosts.
            </p>
            <p>
                As a software engineer here I've done most of my work in 
                <a href="https://samara.com/" target="_blank">Samara</a>, 
                an R&amp;D division within Airbnb. I spent a lot of time doing backend work (Python/Django) 
                as well as frontend work (Javascript/Vue). However, this year I'm back to doing mostly iOS work.
            </p>
            <p>
                Unfortunately due to the confidential nature of this project I can't share any product images, 
                but here are a few photos of me hosting an internal employee experience. It was called 
                <i>An Afternoon with the Piano</i> where I held a brief music workshop followed by a 
                <a href="https://www.instagram.com/p/B2F5ZU0nRiv/" target="_blank">performance</a> 
                of some of my 
                <a href="https://www.instagram.com/p/B796isrnYQK/" target="_blank">favorite </a>
                <a href="https://www.instagram.com/p/COG2aWxnIFy/" target="_blank">piano </a>
                <a href="https://www.instagram.com/p/B5jJvbDnCFh/" target="_blank">pieces</a>.
                Enjoy! 😄
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/airbnb-1.jpg" alt="An Afternoon with the Piano 1/4">
                <img src="@/assets/img/airbnb-2.jpg" alt="An Afternoon with the Piano 2/4">
                <img src="@/assets/img/airbnb-3.jpg" alt="An Afternoon with the Piano 3/4">
                <img src="@/assets/img/airbnb-4.jpg" alt="An Afternoon with the Piano 4/4">
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
    name: "Airbnb",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
</style>
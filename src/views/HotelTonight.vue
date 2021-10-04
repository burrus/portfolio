<template>
    <div class="work">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="work-title">HotelTonight</span> 
                helps you get amazing last-minute deals at top-rated hotels.
            </p>
            <p>
                As an 
                <a href="https://apps.apple.com/us/app/hoteltonight-hotel-deals/id407690035" target="_blank">iOS</a> 
                engineer here I worked on implementing the <i>Weekend Escapes</i> feature, the 
                <i>Account Achievements</i> section, and the <i>Sift</i> implementation (fraud protocol) to name a few.
                I also did some work for the Web team implementing the <i>Seasonal Sweepstakes</i> form that was used by more 
                than 80k people in its first month.
            </p>
            <p>
                I was lucky enough to join HT in early 2019, just in time for the acquisition by Airbnb.
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/hoteltonight-1.png" alt="Weekend Escapes 1/3">
                <img src="@/assets/img/hoteltonight-2.png" alt="Weekend Escapes 2/3">
                <img src="@/assets/img/hoteltonight-3.png" alt="Weekend Escapes 3/3">
                <img src="@/assets/img/hoteltonight-4.png" alt="Account achievements 1/3">
                <img src="@/assets/img/hoteltonight-5.png" alt="Account achievements 2/3">
                <img src="@/assets/img/hoteltonight-6.png" alt="Account achievements 3/3">
                <img src="@/assets/img/hoteltonight-7.png" alt="Fraud protocol flow excerpts">
                <img src="@/assets/img/hoteltonight-8.png" alt="Seasonal sweepstakes form">
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
    name: "HotelTonight",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
</style>
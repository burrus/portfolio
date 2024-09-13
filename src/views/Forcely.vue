<template>
    <div class="work">
        <HeaderComponent :showBackButton=true />
        <div class="content">
            <p>
                <span class="work-title">Forcely</span> 
                provided code enforcement officers with a quick and easy way to log their day to day activities.
            </p>
            <p>
                This is a company I started in 2018 to reduce the amount of inefficiencies in 
                local government. I conducted research, designed, and built the entire app myself using Google’s 
                <a href="https://firebase.google.com/docs/firestore/" target="_blank">Firestore</a> 
                as the back-end. I also built a web dashboard in 
                <a href="https://angular.io/" target="blank">angular</a> 
                to accompany the iOS app. This allowed city supervisors to gain 
                insights into the activities their code enforcement officers were logging.
            </p>
            <p>
                I've since closed this business, but I did have one 
                <a href="https://goo.gl/Pv5rj7" target="_blank"> city</a> 
                using the platform for a while.
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/forcely-1.jpg" alt="App onboarding flow 1/4">
                <img src="@/assets/img/forcely-2.jpg" alt="App onboarding flow 2/4">
                <img src="@/assets/img/forcely-3.jpg" alt="App onboarding flow 3/4">
                <img src="@/assets/img/forcely-4.jpg" alt="App onboarding flow 4/4">
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
    name: "ForcelyPage",
    components: {
        FooterComponent,
        HeaderComponent,
    },
}
</script>

<style scoped>
</style>
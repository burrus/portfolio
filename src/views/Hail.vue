<template>
    <div class="work">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="work-title">Hail</span> 
                was a photo-messaging app, inspired by Snapchat, built entirely in Objective-C using 
                <a href="https://parseplatform.org/" target="_blank">Parse</a> 
                as the back-end. The app is no longer available on the app store.
            </p>
            <p>
                Hail was built in conjunction with my 
                <a href="https://techcrunch.com/2015/04/15/to-promote-diversity-apple-increases-the-number-of-wwdc-scholarships/" target="_blank">WWDC scholarship</a>
                application. I applied for one of the WWDC scholarships through an organization known as the 
                <a href="https://www.tmcf.org/" target="_blank">Thurgood Marshall College Fund</a> 
                back in 2015. I was lucky enough to have been selected for one of the scholarships and got to 
                spend a week in San Francisco attending the conference.
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/wwdc-1.png" alt="My WWDC '15 badge">
                <img src="@/assets/img/wwdc-2.png" alt="Me at WWDC '15">
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
    name: "Hail",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
</style>
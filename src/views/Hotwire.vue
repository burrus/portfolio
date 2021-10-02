<template>
    <div class="work">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="work-title">Hotwire</span> 
                helps you get great deals on name-brand hotels and car rentals around the world 
                at a fraction of the price.
            </p>
            <p>
                As an 
                <a href="https://itunes.apple.com/us/app/hotwire/id566635048?mt=8" target="_blank">iOS</a> 
                developer here I worked on implementing in-app customer service messaging as well as updating 
                the reviews section on the details screen to name a few. I learned a lot about how an agile 
                engineering team operates and picked up a lot of new skills along the way.
            </p>
            <p>
                I also spent some time working on the UX Labs team and I often found it frustrating to recruit 
                users for moderated studies. To solve this problem, I built an angular web app that tapped into 
                our customer database to automate the entire recruiting process. This project was a learning experience 
                for me as it was the first time I built a web app from scratch. I was responsible for all the research,
                design, and front-end development on this project.
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/hw-liveperson-1.png" alt="In-app messaging (LivePerson) for customer service">
                <img src="@/assets/img/hw-liveperson-2.png" alt="In-app messaging (LivePerson) for customer service">
                <img src="@/assets/img/hw-reviews-1.png" alt="hotwire-reviews-1">
                <img src="@/assets/img/hw-reviews-2.png" alt="hotwire-reviews-2">
                <img src="@/assets/img/hw-automation-1.png" alt="hotwire-automation-1">
                <img src="@/assets/img/hw-automation-2.png" alt="hotwire-automation-2">
                <img src="@/assets/img/hw-automation-3.png" alt="hotwire-automation-3">
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
    name: "Hotwire",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
</style>
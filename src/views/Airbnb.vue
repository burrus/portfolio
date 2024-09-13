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
                As an iOS engineer here, I lead the development of the 
                <a href="https://news.airbnb.com/smart-lock-integrations-available-to-all-us-and-canada-hosts/" target="_blank">smart lock integration feature </a>
                for hosts and guests. This initiative is a significant part of Airbnb’s strategy to onboard millions of new hosts. 
                Initially, the project began as an R&D exploration in our Special Projects division. During its early stages, 
                I was responsible for designing and building an iOS prototype that communicated with real smart locks via 
                local networking. This prototype was shown to the CEO, co-founders, and other executives several times, which 
                ultimately led to the project’s approval.
            </p>
            <p>
                We are now integrated with three smart lock vendors: August, Schlage, and Yale. Hosts can use the 
                <a href="https://apps.apple.com/us/app/airbnb/id401626263" target="_blank">Airbnb app</a> 
                to link their smart lock to a listing. Once connected, Airbnb manages the smart lock’s access codes for each 
                reservation, including sending the guest their access code, notifying the host when the guest checks in, and 
                removing the access code once the reservation is complete.
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/airbnb-1.jpg" alt="Airbnb smart lock host setup">
                <img src="@/assets/img/airbnb-2.jpg" alt="Airbnb smart lock host post-setup">
                <img src="@/assets/img/airbnb-3.jpg" alt="Airbnb smart lock host management">
                <img src="@/assets/img/airbnb-4.jpg" alt="Airbnb smart lock guest views">
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
<template>
    <div class="work">
        <HeaderComponent :showBackButton=true />
        <div class="content">
            <p>
                <span class="work-title">Alchemy</span> 
                was an iOS app that served as a chat-based client for 
                <a href="https://openai.com/" target="_blank">OpenAI</a>'s 
                 GPT-3 and GPT-4 models. In late 2022, following the launch of the ChatGPT
                web version, I decided to create this iOS app to deepen my understanding of 
                the underlying technology. It proved to be a valuable learning experience 
                and garnered several thousand downloads on the App Store. However, with the 
                launch of OpenAI’s official iOS app, I decided to shut down Alchemy.
            </p>
            <div class="images" v-viewer="{transition: false}">
                <img src="@/assets/img/alchemy-1.jpg" alt="Alchemy home screen">
                <img src="@/assets/img/alchemy-2.jpg" alt="Alchemy conversation">
                <img src="@/assets/img/alchemy-3.jpg" alt="Alchemy conversation sharing">
                <img src="@/assets/img/alchemy-4.jpg" alt="Alchemy past conversations">
                <img src="@/assets/img/alchemy-5.jpg" alt="Alchemy past conversation">
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
    name: "AlchemyPage",
    components: {
        FooterComponent,
        HeaderComponent,
    },
}
</script>

<style scoped>
</style>
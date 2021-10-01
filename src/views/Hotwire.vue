<template>
    <div class="hotwire">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="title">Hotwire</span> 
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
                I also spend some time working on the UX Labs team and I often found it frustrating to recruit 
                users for moderated studies. To solve this problem, I built an angular web app that tapped into 
                our customer database to automate the entire recruiting process. This project was a learning experience 
                for me as it was the first time I built a web app from scratch. I was responsible for all the research,
                design, and front-end development on this project.
            </p>
            <!-- <div class="ios">
                <img src="@/assets/img/wwdc-1.png" alt="wwdc-1">
                <img src="@/assets/img/wwdc-2.png" alt="wwdc-2">
            </div> -->
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
    name: "Hotwire",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
    .hotwire {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
    }

    .title {
        color: black;
        font-size: 1.5em;
        font-weight: bold;
    }

    .ios {
        margin-top: 25px;
        text-align: center;
    }

    img {
        max-width: 200px;
        padding: 10px;
    }
</style>
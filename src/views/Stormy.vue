<template>
    <div class="stormy">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="title">Stormy</span> 
                was a single-page weather app that allowed you to quickly grab the 
                weather forecast from anywhere in the world. I used the 
                <a href="https://darksky.net/dev" target="_blank">Dark Sky Weather API</a> 
                to grab weather conditions. This app was based on an app from 
                <a href="https://teamtreehouse.com/burrus" target="_blank">Treehouse</a>
                , but I expanded upon it by adding several other features.
            </p>
            <div class="ios">
                <img src="@/assets/img/stormy-1.png" alt="stormy-1">
                <img src="@/assets/img/stormy-2.png" alt="stormy-2">
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
    name: "Stormy",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
    .stormy {
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
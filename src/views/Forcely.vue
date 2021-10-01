<template>
    <div class="forcely">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="title">Forcely</span> 
                provided code enforcement officers with a quick and easy way to log their day to day activities.
            </p>
            <p>
                This is a company I started in 2018 to reduce the amount of inefficiencies in 
                local government. I conducted research, designed, and built the entire 
                <a href="https://itunes.apple.com/US/app/id1420946432?mt=8" target="_blank">app</a> 
                myself using Google’s 
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
            <!-- <div class="ios">
                <img src="@/assets/img/forcely-1.jpg" alt="forcely-1">
                <img src="@/assets/img/forcely-2.jpg" alt="forcely-2">
                <img src="@/assets/img/forcely-3.jpg" alt="forcely-3">
                <img src="@/assets/img/forcely-4.jpg" alt="forcely-4">
            </div> -->
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
    name: "Forcely",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
    .forcely {
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
        max-width: 150px;
        padding: 10px;
    }
</style>
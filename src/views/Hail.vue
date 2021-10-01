<template>
    <div class="hail">
        <Header :showBackButton=true />
        <div class="content">
            <p>
                <span class="title">Hail</span> 
                was a photo-messaging app, inspired by Snapchat, built entirely in Objective-C using 
                <a href="https://parseplatform.org/" target="_blank">Parse</a> 
                as the back-end. The app is no longer available on the app store.
            </p>
            <p>
                Hail was built in conjunction with my 
                <a href="https://developer.apple.com/wwdc/scholarships/" target="_blank">WWDC scholarship</a>
                application. I applied for one of the WWDC scholarships through an organization known as the 
                <a href="https://www.tmcf.org/" target="_blank">Thurgood Marshall College Fund</a> 
                back in 2015. I was lucky enough to have been selected for one of the scholarships and got to 
                spend a week in San Francisco attending the conference.
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
    name: "Hail",
    components: {
        Footer,
        Header,
    },
}
</script>

<style scoped>
    .hail {
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
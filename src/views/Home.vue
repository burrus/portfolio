<template>
    <div class="home">
        <HeaderComponent />
        <ul>
            <li class="title">
                <b>Work</b>
            </li>
            <li>
                <router-link to="/airbnb" class="list"><b>Airbnb.</b> May 2020 - Present.</router-link>
            </li>
            <li>
                <router-link to="/hoteltonight" class="list"><b>HotelTonight.</b> February 2019 - May 2020.</router-link>
            </li>
            <li>
                <router-link to="/hotwire" class="list"><b>Hotwire.</b> May 2016 - February 2019.</router-link>
            </li>
            <div class="ios-apps">
                <li class="title">
                    <b>Apps</b>
                </li>
                <li>
                    <router-link to="/alchemy" class="list"><b>Alchemy.</b> A ChatGPT client.</router-link>
                </li>
                <li>
                    <router-link to="/forcely" class="list"><b>Forcely.</b> A code enforcement app.</router-link>
                </li>
                <li>
                    <router-link to="/stormy" class="list"><b>Stormy.</b> A weather app.</router-link>
                </li>
                <li>
                    <router-link to="/hail" class="list"><b>Hail.</b> A WWDC scholarship app.</router-link>
                </li>
            </div>
            <div class="contact">
                <li class="title">
                    <b>Contact</b>
                </li>
                <li>
                    <router-link to="/contact" class="list">
                        <span v-if="ip">Hello {{ ip }} 👋🏾</span>
                        <span v-if="!ip">Hello there 👋🏾</span>
                    </router-link>
                </li>
            </div>
        </ul>
        <FooterComponent />
    </div>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/Footer.vue"
import HeaderComponent from "@/components/Header.vue"

export default {
    name: "HomePage",
    components: {
        FooterComponent,
        HeaderComponent,
    },
    created() {
        this.getIpAddress()
    },
    data() {
        return {
            ip: null,
        }
    },
    methods: {
        getIpAddress() {
            fetch("https://api.ipify.org?format=json")
                .then((x) => x.json())
                .then(({ ip }) => {
                    this.ip = ip
                })
        },
    },
}


</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-between;
    }

    ul {
        list-style-type: none;
        margin: 0 auto;
        padding: 0 25px;
        text-align: left;
    }

    li {
        font-size: 0.84em;
        margin: 20px 0;
    }

    .ios-apps, .contact {
        margin-top: 50px;
    }

    .list {
        color: black;
        text-decoration: none;
    }

    .list:hover {
        text-decoration: line-through;
    }

    .title {
        color: black;
        font-size: 1em;
        text-decoration: underline;
    }

    @media only screen and (min-width: 600px) {
        li {
            font-size: 0.95em;
        }
    }

    @media only screen and (min-width: 1000px) {
        li {
            font-size: 1em;
        }
    }
</style>
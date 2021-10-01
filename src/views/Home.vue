<template>
    <div class="home">
        <Header />
        <ul>
            <li class="title">
                <b>Work</b>
            </li>
            <li>
                <router-link to="/" class="list"><b>Airbnb.</b> May 2020 - Present.</router-link>
            </li>
            <li>
                <router-link to="/" class="list"><b>HotelTonight.</b> February 2019 - May 2020.</router-link>
            </li>
            <li>
                <router-link to="/" class="list"><b>Hotwire.</b> May 2016 - February 2019.</router-link>
            </li>
            <li>
                <router-link to="/forcely" class="list"><b>Forcely.</b> A code enforcement logging app.</router-link>
            </li>
            <li>
                <router-link to="/stormy" class="list"><b>Stormy.</b> A single-page weather app.</router-link>
            </li>
            <li>
                <router-link to="/hail" class="list"><b>Hail.</b> A WWDC scholarship app.</router-link>
            </li>
            <div class="contact">
                <li class="title">
                    <b>Contact</b>
                </li>
                <li>
                    <router-link to="/contact" class="list">
                        <span v-if="ip">Hello {{ ip }} 👋🏾</span>
                        <span v-if="!ip">Hello 👋🏾</span>
                    </router-link>
                </li>
            </div>
        </ul>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"

export default {
    name: "Home",
    components: {
        Footer,
        Header,
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
        margin: 20px 0;
    }

    .contact {
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
        text-decoration: underline;
    }
</style>
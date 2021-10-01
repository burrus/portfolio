<template>
    <div class="footer">
        <div class="container">
            <div class="social">
                <a href="https://instagram.com/wyatony" target="_blank">
                    <img alt="Instagram logo" src="@/assets/icons/instagram.svg" />
                </a>
                <a href="https://github.com/burrus" target="_blank">
                    <img alt="GitHub logo" src="@/assets/icons/github.svg" />
                </a>
                <a href="https://linkedin.com/burrus" target="_blank">
                    <img alt="LinkedIn logo" src="@/assets/icons/linkedin.svg" />
                </a>
            </div>
        </div>
        <OpenSource />
    </div>
</template>

<script>
import OpenSource from "@/components/OpenSource.vue"
export default {
    name: "Footer",
    components: {
        OpenSource,
    },
}
</script>

<style scoped>
a {
    padding: 5px;
}
.container {
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    width: 100%;
}
.footer {
    margin-top: 10px;
}
.social {
    align-self: flex-end;
}
@media only screen and (min-width: 600px) {
    .container {
        justify-content: space-around;
    }
    .footer {
        /* 
            (h) height(<OpenSource />) = 16px
            margin-bottom = -2h
         */
        margin-bottom: -32px;
    }
    .menu {
        display: none;
    }
}
</style>
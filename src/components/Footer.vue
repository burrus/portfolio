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
                <a href="https://linkedin.com/in/burrus" target="_blank">
                    <img alt="LinkedIn logo" src="@/assets/icons/linkedin.svg" />
                </a>
            </div>
        </div>
        <OpenSourceComponent />
    </div>
</template>

<script>
import OpenSourceComponent from "@/components/OpenSource.vue"
export default {
    name: "FooterComponent",
    components: {
        OpenSourceComponent,
    },
}
</script>

<style scoped>
a {
    padding: 10px;
}

.container {
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
    width: 100%;
}

.footer {
    margin-top: 10px;
    margin-bottom: -32px;
    /* 
        (h) height(<OpenSource />) = 16px
        margin-bottom = -2h
    */
}

.social {
    align-self: flex-end;
}
</style>
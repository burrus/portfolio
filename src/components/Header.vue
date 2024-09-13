<template>
    <div class="header">
        <div class="row">
            <div class="col-1">
                <router-link v-if="showBackButton" to="/" class="back">
                    &larr;
                </router-link>
                <p v-if="!showBackButton"></p>
            </div>
            <div class="col-2">
                <router-link to="/" class="name">Tony Burrus</router-link>
                <br>
                <router-link to="/" class="title">iOS Engineer</router-link>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        showBackButton: Boolean,
    },
}
</script>

<style scoped>
.header {
    margin-top: 20px;
    text-align: center;
}

.col-1 {
    float: left;
    width: 10%;
}

.col-2 {
    float: left;
    width: 80%;
}

.col-3 {
    float: left;
    width: 10%;
}

.row:after {
    content: "";
    display: table;
    clear: both;
}

.back {
    color: black;
    font-size: 1.5em;
}

.back, .back:hover {
    text-decoration: none;
}

.name {
    font-size: 1.5em;
    font-weight: bold;
}

.name, .title {
    color: black;
    text-decoration: none;
    text-align: center;
}
</style>

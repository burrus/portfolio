<template>
    <div class="header">
        <router-link to="/" class="name">Tony Burrus</router-link>
        <br>
        <router-link to="/" class="title">iOS Engineer</router-link>
    </div>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
.header {
    margin-top: 20px;
    text-align: center;
}

.name {
    font-size: 1.5em;
    font-weight: bold;
}

.name, .title {
    color: black;
    text-decoration: none;
}

/* @media only screen and (min-width: 1000px) {
    .name {}
} */
</style>

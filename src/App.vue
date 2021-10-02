<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap");
#app {
  color: black;
  font-family: "Roboto Mono", sans-serif;
  text-align: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.content {
    width: 90vw;
    margin: 25px auto 0;
    text-align: left;
}

.content a {
    color: black;
}

.content a:hover {
    text-decoration: line-through;
}

.images {
    margin: 50px 0;
    text-align: center;
}

.images img {
    object-fit: cover;
    height: 50px;
    width: 50px;
    padding: 10px;
}

.work {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
}

.work-title {
    color: black;
    font-size: 1.5em;
    font-weight: bold;
}

@media only screen and (min-width: 600px) {
    .content {
        width: 60vw;
    }
}

@media only screen and (min-width: 1000px) {
    .content {
        margin-top: 0;
        width: 50vw;
    }
}
</style>

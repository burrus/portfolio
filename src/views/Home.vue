<template>
  <div class="home">
    <Header/>
    <ul>
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
        <router-link to="/" class="list"><b>Forcely.</b> A code enforcement logging app.</router-link>
      </li>
      <li>
        <router-link to="/" class="list"><b>Stormy.</b> A single-page weather app.</router-link>
      </li>
      <li>
        <router-link to="/" class="list"><b>Hail.</b> A WWDC scholarship app.</router-link>
      </li>
      <li>
        <router-link to="/contact" class="list">Say hello 👋🏾</router-link>
      </li>
    </ul>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    Header,
  }
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
}

li {
  margin: 20px 0;
}
.list {
  color: black;
  text-decoration: none;
}

.list:hover {
  text-decoration: line-through;
}
</style>
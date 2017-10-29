<template>
  <div>
    <Navbar></Navbar>
    <!-- <router-view></router-view> -->
    <div class="hero">
      <div class="container" style="padding: 15em; color:white;">
        <h1 style="font-size:48px; line-height: 58px; letter-spacing: 1.1px;">WE’RE IN THE BUSINESS OF HELPING BUSINESSES</h1>
        <h2>We are ColorElephant</h2>
        <h3>A digital studio based out of Portugal working with clients globally creating technology to support their marketing and operational efforts.</h3>
        <br />
        <router-link tag="button" class="button is-info is-inverted is-outlined" :to="{name: 'Services'}">See What we Do</router-link> <router-link tag="button" class="button is-success is-inverted is-outlined" :to="{name: 'Company.About'}">About Us</router-link>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './_partials/Navbar';
import Footer from './_partials/Footer';

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  },
  created() {
  },
  mounted() {
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>
<style scoped>
.hero {
  background-color: #268ab7;
  background-image: linear-gradient(340deg,#023a6f,#064575 14%,#1b7893 35%,#21879c 45%,#22879f 55%,#268ab7 93%,#1398b3);
  margin-top: 52px;
}
</style>

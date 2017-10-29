<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
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
};
</script>
<template>
  <nav class="navbar is-transparent is-fixed">
    <div class="navbar-brand">
      <router-link :to="{ name: 'Home' }" class="navbar-item" exact>
        <img src="https://i.imgur.com/oS7LVaq.png" class="image" alt="ColorElephant Logo">
      </router-link>
      <a class="navbar-item is-hidden-desktop" href="https://www.facebook.com/ColorElephant" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-lg fa-facebook"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/ricardojrsousa" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-lg fa-twitter"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop" href="https://instagram.com/colorelephant" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-lg fa-instagram"></i>
        </span>
      </a>

      <div class="navbar-burger burger" data-target="navMenuTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link :to="{ name: 'Company' }" class="navbar-link" exact>Company</router-link>
          <div class="navbar-dropdown is-boxed">
            <router-link :to="{ name: 'Company.About' }" class="navbar-item" exact>About</router-link>
            <router-link :to="{ name: 'Company.Team' }" class="navbar-item" exact>Team</router-link>
            <router-link :to="{ name: 'Company.Careers' }" class="navbar-item" exact>Careers</router-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link :to="{ name: 'Services' }" class="navbar-link" exact>Services</router-link>
          <div class="navbar-dropdown is-boxed">
            <div class="columns is-gapless">
              <div class="column">
                <div class="navbar-item">
                  OPERATIONAL FOCUSED
                </div>
                <hr class="navbar-divider">
                <a class="navbar-item " href="#">
                  Internal Software
                </a>
                <a class="navbar-item " href="#">
                  Software Integration
                </a>
                <a class="navbar-item " href="#">
                  Bots &amp; AI
                </a>
              </div>
              <div class="column">
                <div class="navbar-item">
                  MARKETING FOCUSED
                </div>
                <hr class="navbar-divider">
                <a class="navbar-item " href="#">
                  Facebook Applications
                </a>
                <a class="navbar-item " href="#">
                  Online Stores
                </a>
                <a class="navbar-item " href="#">
                  Landing/Sales Pages
                </a>
              </div>
            </div>
            <hr class="navbar-divider">
            <a class="navbar-item is-dark" href="#">
              <p>
                <strong>Custom Development</strong>
                <br>
                <small>For your custom needs!</small>
              </p>
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <router-link :to="{ name: 'Contact' }" class="navbar-link" exact>Contact</router-link>
          <div class="navbar-dropdown is-boxed">
            <router-link :to="{ name: 'Contact.WhyUs' }" class="navbar-item" exact>Why Us?</router-link>
            <router-link :to="{ name: 'Contact.OurPromise' }" class="navbar-item" exact>Our Promise</router-link>
            <router-link :to="{ name: 'Contact.ContactUs' }" class="navbar-item" exact>Reach Us</router-link>
          </div>
        </div>
        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">
            More
          </div>
          <div id="moreDropdown" class="navbar-dropdown is-boxed">
            <a class="navbar-item " href="https://bulma.io/bulma-start/">
              <p>
                <strong>Bulma start</strong>
                <br>
                <small>A tiny npm package to get started</small>
              </p>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="https://bulma.io/made-with-bulma/">
              <p>
                <strong>Made with Bulma</strong>
                <br>
                <small>The official community badge</small>
              </p>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item " href="https://bulma.io/extensions/">
              <p>
                <strong>Extensions</strong>
                <br>
                <small>Side projects to enhance Bulma</small>
              </p>
            </a>
          </div>
        </div> -->
        <a class="navbar-item" target="_blank" href="https://colorelephant.com/blog/">Blog</a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item is-hidden-desktop-only" href="https://www.facebook.com/ColorElephant" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-lg fa-facebook"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/ricardojrsousa" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-twitter"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop-only" href="https://instagram.com/colorelephant" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-instagram"></i>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
<style scoped>
.is-fixed {
  position: fixed !important;
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 1;
}
</style>

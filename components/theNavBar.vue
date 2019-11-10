<template>
  <div>
    <nav id="top-bar">
      <div class="title">
        <span class="title-title">Green New Deal Maximum Program</span>
        <span class="title-subtitle">
          <em>for Calgary, Alberta</em>
        </span>
      </div>
      <div class="nav full-width">
        <span class="nav-item"><nuxt-link to="/">
          Home
        </nuxt-link></span>
        <span class="nav-item"><nuxt-link to="/toc">
          The Green New Deal
        </nuxt-link></span>
        <span class="nav-item"><nuxt-link to="/more">
          More
        </nuxt-link></span>
      </div>
      <div class="nav mobile-width">
        <span class="nav-item">
          <a href="#" v-on:click="toggleMobileNav">Menu</a>
        </span>
      </div>
    </nav>
    <div class="nav mobile-width" v-if="showMobileNav">
      <p class="nav-item"><nuxt-link to="/">
        Home
      </nuxt-link></p>
      <br/>
      <p class="nav-item"><nuxt-link to="/toc">
        The Green New Deal
      </nuxt-link></p>
      <br/>
      <p class="nav-item"><nuxt-link to="/more">
        More
      </nuxt-link></p>
    </div>
    <div class="mobile-width mobile-ruler"></div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        showMobileNav: false,
      }
    },
    methods: {
      toggleMobileNav: function(e) {
        e.preventDefault()
        this.showMobileNav = !this.showMobileNav
      } 
    }
  };
</script>

<style>


</style>

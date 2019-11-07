<template>
  <div class="container">
		<ul>
			<nuxt-link to="/backmatter">backmatter</nuxt-link>
			<nuxt-link to="/energy-sector">energy-sector</nuxt-link>
			<nuxt-link to="/food-security">food-security</nuxt-link>
			<nuxt-link to="/frontmatter">frontmatter</nuxt-link>
			<nuxt-link to="/housing">housing</nuxt-link>
			<nuxt-link to="/index">index</nuxt-link>
			<nuxt-link to="/social-services">social-services</nuxt-link>
			<nuxt-link to="/transit">transit</nuxt-link>
		</ul>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

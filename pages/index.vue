<template>
  <div class="container">
		<ul>
			<li><nuxt-link to="/backmatter">backmatter</nuxt-link></li>
			<li><nuxt-link to="/energy-sector">energy-sector</nuxt-link></li>
			<li><nuxt-link to="/food-security">food-security</nuxt-link></li>
			<li><nuxt-link to="/frontmatter">frontmatter</nuxt-link></li>
			<li><nuxt-link to="/housing">housing</nuxt-link></li>
			<li><nuxt-link to="/index">index</nuxt-link></li>
			<li><nuxt-link to="/social-services">social-services</nuxt-link></li>
			<li><nuxt-link to="/transit">transit</nuxt-link></li>
		</ul>
  </div>
</template>

<script>
export default {
	layout: 'article',
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

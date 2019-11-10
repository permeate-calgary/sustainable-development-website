<template>
  <div class="mobile-container">
  	<div class="container">
  		<theNavBar/>
      <div class="article-body">
    		<nuxt/>
      </div>
    <div class="logo-container">
      <img class="logo-image" src="permeate_logo.png">
    </div>
    </div>
	</div>
</template>

<script>
	import theNavBar from '@/components/theNavBar';
	export default {
		components: {
			theNavBar
		}
	}
</script>

<style>
	html {
		font-family: 'Crimson Text', serif;
		font-size: 1.25em;
	}
</style>

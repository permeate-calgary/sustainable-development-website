<template>
	<div class="container">
		<theNavBar/>
		<nuxt/>
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

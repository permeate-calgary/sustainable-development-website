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

<style scope>
	html {
		font-family: 'Crimson Text', serif;
	}
</style>

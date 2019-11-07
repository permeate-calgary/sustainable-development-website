<template>
	<nav id="top-bar">
		<div id="title"> 
			<div id="title-title">
			Green New Deal Maximum Program
			</div>
			<div id="title-subtitle">
			<em>Designed for Calgary, Alberta</em>
			</div>
		</div>
		<div id="nav">
			<span><nuxt-link to="/">
				Home
			</nuxt-link></span>
			<span><nuxt-link to="/">
				The Report
			</nuxt-link></span>
			<span><nuxt-link to="/">
				More
			</nuxt-link></span>
		</div>
	</nav>
</template>

<script>
	export default {
	};
</script>

<style>
	#top-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 2%;
		color: #224634;
	}
	#title-title {
		font-weight: 900;
	}
	#title-subtitle {
		text-align: center;
	}
</style>

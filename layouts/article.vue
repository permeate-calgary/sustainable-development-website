<template>
  <div class="mobile-container">
  	<div class="container">
  		<theNavBar/>
      <div class="article-body">
    		<nuxt/>
      </div>

      <div class="logo-container">
        <img class="logo-image" src="permeate_logo.png">
        <p class="footer-text">© 2019 the Authors. A project by <a href="https://permeatecalgary.blogspot.com">Permeate Calgary</a>.</p>
      </div>
    </div>
	</div>
</template>

<script>
	import theNavBar from '@/components/theNavBar';
	export default {
		components: {
			theNavBar
		},
    head: () => {
      return {
        title: "Calgary's Green New Deal",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Evidence based, ambitious, actionable proposals for the climate crisis and economic crisis: a Green New Deal for Calgary.' 
          }
        ]
      }
    }
	}
</script>

<style>
	html {
		font-family: 'Crimson Text', serif;
		font-size: 1.25em;
	}
</style>

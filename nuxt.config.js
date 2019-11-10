export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */



  head: {
    title: "Calgary's Green New Deal",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Evidence based, ambitious, actionable proposals for the climate crisis and economic crisis: a Green New Deal for Calgary.'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: "https://www.calgarygreennewdeal.ca",
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: "Calgary's Green New Deal",
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: "Evidence based, ambitious, actionable proposals for the climate crisis and economic crisis: a Green New Deal for Calgary.",
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: "https://www.calgarygreennewdeal.ca/permeate_logo.png",
      },
      {
        hid:'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid:'twitter:description',
        name: 'twitter:description',
        content: 'Evidence based, ambitious, actionable proposals for the climate crisis and economic crisis: a Green New Deal for Calgary.'
      },
      {
        hid:'twitter:creator',
        name: 'twitter:creator',
        content: '@PermeateCalgary'
      },
      {
        hid:'twitter:image',
        name: 'twitter:image',
        content: 'https://www.calgarygreennewdeal.ca/permeate_logo.png'
      },
    ],
    link: [
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Crimson+Text&display=swap'},
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
		'~/assets/main.scss'
	],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
		['nuxt-sass-resources-loader', '~/assets/main.scss']
	],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    dir: 'public'
  }
};

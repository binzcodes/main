export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {},
  /*
   ** PWA settings
   */
  pwa: {
    meta: {
      name: 'rbi.nz',
      description:
        'Freelance Software Engineer, DevOps guy and Digital Nomad. ' +
        'I make cloud-native web applications while backpacking, ' +
        'mostly with Node.js',
      ogHost: 'rbi.nz'
    },
    manifest: {
      short_name: 'rbi.nz',
      name: 'rbi.nz'
    }
  },
  googleAnalytics: {
    id: 'UA-56868171-2'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#184757' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/helper'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'riBmd7jZF4lWhbEtt2wRLwtt',
        cacheProvider: 'memory'
      }
    ],
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  webfontloader: {
    custom: {
      families: ['Montserrat:n1,n3,n4,n5,n7n9', 'Share Tech:n3,n4,n7'],
      urls: [
        'https://fonts.googleapis.com/css?family=Montserrat:100,300,400,500,700,900&display=swap',
        'https://fonts.googleapis.com/css?family=Share+Tech:100,300,400,500,700,900&display=swap'
      ]
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false
    },
    treeShake: true,
    theme: {
      options: { customeProperties: true },
      dark: false,
      themes: {
        light: {
          primary: '#184757',
          accent: '#43A1C5',
          secondary: '#83E0A4',
          info: '#36A8DA',
          success: '#2A9D8F',
          warning: '#E9C46A',
          error: '#E56140'
        },
        dark: {
          primary: '#43A1C5',
          accent: '#184757',
          secondary: '#83E0A4',
          info: '#36A8DA',
          success: '#2A9D8F',
          warning: '#E9C46A',
          error: '#E56140'
        }
      }
    }
  },
  /*
   ** Generate configuration
   */
  generate: {
    fallback: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}

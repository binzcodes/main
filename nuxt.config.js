import colors from 'vuetify/es5/util/colors'

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
        'Freelance software engineer, DevOps guy and Digital Nomad. ' +
        'I make cloud native web applications whilst traveling, ' +
        'mostly with Node.js',
      ogHost: 'rbi.nz'
    },
    manifest: {
      short_name: 'rbi.nz',
      name: 'rbi.nz'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {},
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader'],
  webfontloader: {
    custom: {
      families: ['Monserrat:n1,n3,n4,n5,n7n9', 'Share Tech:n3,n4,n7'],
      urls: [
        'https://fonts.googleapis.com/css?family=Monserrat:100,300,400,500,700,900&display=swap',
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
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
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

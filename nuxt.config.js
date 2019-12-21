import axios from 'axios'

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
  plugins: [
    '@/plugins/helper',
    '@/plugins/components',
    '@/plugins/imageService'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    [
      'storyblok-nuxt',
      {
        // TODO: move tokens to env var - can I use dotenv only for dev?
        accessToken:
          process.env.NODE_ENV === 'production'
            ? '7fDAg3Uru2EUbQDUdPP4pAtt'
            : 'riBmd7jZF4lWhbEtt2wRLwtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  webfontloader: {
    custom: {
      families: [
        'Montserrat:n1,n3,n4,n5,n7,n9',
        'Share Tech:n1,n3,n4,n5,n7,n9'
      ],
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
    fallback: true,
    routes(callback) {
      const token = `7fDAg3Uru2EUbQDUdPP4pAtt`
      const version = 'published'
      let cacheVersion = 0

      // other routes that are not in Storyblok with their slug.
      const routes = ['/'] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(spaceRes => {
          // timestamp of latest publish
          cacheVersion = spaceRes.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (res.data.links[key].slug !== 'home') {
                  routes.push('/' + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extractCSS: {
      allChunks: true
    }
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  }
}

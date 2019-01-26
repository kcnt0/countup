const pkg = require('./package')
const buildDate = +new Date()

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'KcNt Anniversary',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      },
      {
        hid: 'author',
        name: 'author',
        content: pkg.author
      },
      {
        hid: 'version',
        name: 'version',
        content: pkg.version
      },
      {
        hid: 'build-date',
        name: 'build-date',
        content: buildDate
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/font.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~plugins/firebase.js'
    },
    {
      src: '~plugins/vue-modal.js'
    },
    {
      src: '~plugins/notification.js'
    }
  ],

  env: {
    buildDate,
    version: pkg.version
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma'
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

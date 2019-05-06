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
  css: [
    '~/assets/styles/font.scss',
    '~/assets/styles/bulma.scss'
    // 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
  ],

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
      src: '~plugins/modal.js'
    },
    {
      src: '~plugins/notification.js'
    },
    {
      src: '~plugins/sliceshow.js'
    },
    {
      src: '~plugins/lazyload.js'
    },
    {
      src: '~plugins/tooltip.js'
    }
  ],

  env: {
    buildDate,
    version: pkg.version
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/google-analytics', 'nuxt-fontawesome'],

  'google-analytics': {
    id: 'UA-139654704-1'
  },

  fontawesome: {
    component: 'fa',
    imports: [
      //import whole set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  generate: {
    fallback: '404.html'
  },

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
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders }) {
      if (isDev) loaders.cssModules.localIdentName = '[name]_[local]'
      else
        loaders.cssModules.localIdentName =
          'kcnt__[name]_[contenthash:base64:18]'
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules
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

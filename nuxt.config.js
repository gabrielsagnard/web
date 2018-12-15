const marked = require('marked')
const dotenv = require('dotenv')
const renderer = new marked.Renderer();
dotenv.config()

module.exports = {
  mode: 'universal',

  env: {
    docsEndpoint: process.env.DOCS_ENDPOINT,
    apiEndpoint: process.env.API_ENDPOINT
  },

  /*
  ** Headers of the page
  */
  head: {
    title: "Retrobox",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Retrobox" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: 'i18n',
    scrollBehavior: function () {
      return { x: 0, y: 0 }
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/apitator.js',
    '~/plugins/env.js',
    {src: '~/plugins/cookie.js', ssr: false},
    {src: '~/plugins/transition.js', ssr: false},
    {src: '~/plugins/modal.js', ssr: false},
    {src: '~/plugins/scrollTo.js', ssr: false},
    {src: '~/plugins/tooltip.js', ssr: false},
    {src: '~/plugins/persistedState.js', ssr: false}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv', { systemvars: true }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              pedantic: true,
              renderer
            }
          }
        ]
      });
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  render: {
    bundleRenderer: {
      directives: {
        wtf: function (el, dir) {
          console.log(el)
          console.log(dir)
          console.log('wtf')
        }
      }
    }
  }
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Query Tool',
    script: [
      {
        src: 'https://w.appzi.io/w.js?token=YVTHd',
      },
    ],
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    target: 'static',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@plugins/bootstrap-vue',
    '@plugins/vue-select',
    { src: '@plugins/vue-js-modal', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Needed for environment variable to be visible in client-side code: https://v2.nuxt.com/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/#migrating-to-the-nuxt-runtime-config-from-nuxtjsdotenv
  publicRuntimeConfig: {
    apiQueryURLClient: process.env.API_QUERY_URL_CLIENT,
    apiQueryURLServer: process.env.API_QUERY_URL_SERVER,
    isFederationAPI: process.env.IS_FEDERATION_API,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};

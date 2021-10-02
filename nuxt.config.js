export default {
  loading: {
    color: '#4caf50 ',
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'investmentapp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/phone-input',
    '~/plugins/vuetify-money',
    '~/plugins/nairaFormat',
    '~/plugins/numberFormat',
    '~/plugins/otpInput'
  ],

  auth: {
    strategies: {
      'localAdmin': {
        provider: 'laravel/jwt',
        url: '192.168.100.27:8000/api/auth/admin',
        endpoints: {
          login: { url: '/login', method: 'post'},
          refresh: { url: '/refresh', method: 'post' },
          user: { url: '/user', method: 'get'},
          logout: { url: '/logout', method: 'post' }
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
      'localUser': {
        provider: 'laravel/jwt',
        url: '192.168.100.27:8000/api/auth/user',
        endpoints: {
          login: { url: '/login', method: 'post'},
          refresh: { url: '/refresh', method: 'post' },
          user: { url: '/user', method: 'get', propertyName: false},
          logout: { url: '/logout', method: 'post' }
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/login/',
      callback: false,
      home: false,
    }
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      'vue-tel-input-vuetify',
      'vuetify-money',
    ],
  }
}

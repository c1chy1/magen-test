// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


  css: ['assets/css/tailwind.css'],

  workbox: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },

  },
  modules: [

    '@nuxtjs/tailwindcss','@nuxtjs/apollo','@pinia/nuxt'
  ],



  apollo: {
    clients: {
    default: {
      httpEndpoint: 'https://venia.magento.com/graphql',
      inMemoryCacheOptions: {
        addTypename: false,
      },
    },
    },
  }

})

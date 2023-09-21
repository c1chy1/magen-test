// https://nuxt.com/docs/api/configuration/nuxt-config






import {config} from "~/utils/config";

export default defineNuxtConfig({

  css: ['assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },

  },
  modules: [

    '@nuxtjs/tailwindcss','@nuxtjs/apollo','@pinia/nuxt'
  ],
  typescript: {
    includeWorkspace: true,
  },

  devtools: {
    enabled: true,
  },


  apollo: {
    autoImports: false,
    proxyCookies: true,
      clientAwareness: true,
clients: {
   default : {

     httpEndpoint: "https://venia.magento.com/graphql",
     httpLinkOptions: {
       fetchOptions: {
         credentials: 'include',
       },
     },
     // wsEndpoint: '',
     // wsLinkOptions: {},
     // websocketsOnly: false,

     defaultOptions: {
       query: {
         errorPolicy: 'all',
       },
       watchQuery: {
         errorPolicy: 'all',
       },
       mutate: {
         errorPolicy: 'all',
       },
     },

     tokenStorage: 'cookie',
     authType: 'Bearer',


   }

    }
  }
})

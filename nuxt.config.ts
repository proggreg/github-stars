const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#0000F0'
  }
}
const myCustomDarkTheme = {
  dark: true,
  colors: {
    primary: '#FF0000'
  }
}

export default defineNuxtConfig({
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxt/devtools',
    '@vueuse/nuxt'
  ],

  experimental: {
    payloadExtraction: false
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    prerender: {
      routes: []
    }
  },

  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomDarkTheme,
          myCustomLightTheme
        }
      }
    }
  },

  devtools: {
    enabled: true
  }
})

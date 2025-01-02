// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-github',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxtjs-naive-ui'],
  build: {
    transpile: [
      'vueuc',
      '@css-render/vue3-ssr',
      '@juggle/resize-observer',
      'date-fns',
      'naive-ui',
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['date-fns-tz'],
    },
    // Add ssr options for better static generation
    ssr: {
      noExternal: ['naive-ui', '@css-render/vue3-ssr', 'vueuc'],
    },
  },
  // Add SSR configuration
  ssr: true,
  // Add experimental features to help with generation
  experimental: {
    payloadExtraction: false,
  },
  // Nitro configuration for better static generation
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
});

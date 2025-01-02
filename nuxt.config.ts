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
  },
});

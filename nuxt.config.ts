// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/nuxt-github/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
});

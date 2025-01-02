import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    nuxtApp.vueApp.provide('i18n-locale', 'en-US');
    nuxtApp.vueApp.provide('naive-ui-style-provider', {
      themeOverrides: {},
      theme: null,
    });
  }
});

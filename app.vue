<script setup lang="ts">
useHead({ titleTemplate: 'Nuxt & Github' });
</script>

<template>
  <Html lang="en">
    <Head>
      <Meta
        property="og:title"
        content="Nuxt & Github"
      />
      <Meta
        property="og:site:name"
        content="Nuxt & Github"
      />
      <Meta
        property="og:description"
        content="Nuxt & Github"
      />
      <Meta
        name="description"
        content="Nuxt & Github"
      />
      <Meta
        name="google"
        content="notranslate"
      />
      <Link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    <Body>
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>

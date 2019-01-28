<template>
  <nuxt/>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'dark'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variable.scss';

.dark {
  background-color: $dark;

  height: 100vh;
}
</style>

<template>
  <div :class="[$style.centerContainer, $style.fullSize]">
    <div :class="$style.content">
      <h1 :class="$style.title">{{ error.statusCode }} Error occurred</h1>
      <h4 :class="$style.subtitle">feel free to go back to <nuxt-link 
        :class="$style.link" 
        to="/">main page</nuxt-link></h4>

      <small>{{ error.message }}</small>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    return {
      title: '404 not found'
    }
  }
}
</script>

<style lang="scss" module>
@import '@/assets/styles/variable.scss';

.centerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  min-height: 94vh;
}

.fullSize {
  min-height: 100vh;
  min-width: 100vw;
}

.content {
  background-color: $black;
  color: $white;
  border-radius: $round-a;

  padding: $gap-f-2;

  opacity: 0.8;
}

.title {
  font-size: $size-1;
  color: $primary;
}

.subtitle {
  font-size: $size-6;
  color: $secondary;
}

.link {
  color: $link;
}
</style>

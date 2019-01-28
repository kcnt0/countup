<template>
  <div 
    :style="'background-image: url(\''+images[index].src+'\');'" 
    class="poster-background">
    <div class="root-container">
      <slot/>
    </div>
  </div>
</template>

<script>
import { GetImagesList } from '@/assets/apis/images.js'

export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    const images = GetImagesList()
    return {
      images
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variable.scss';

.root-container {
  height: 100vh;
  width: auto;
  display: block;
  position: relative;
  margin-left: $gap-f-2;
  margin-right: $gap-f-2;
}

.poster-background {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

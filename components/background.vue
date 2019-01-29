<template>
  <div 
    :style="'background-image: url(\''+images[index].src+'\');'" 
    :class="$style.background">
    <div :class="$style.rootContainer">
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

<style lang="scss" scoped module>
@import '@/assets/styles/variable.scss';

.rootContainer {
  height: 100vh;
  width: auto;
  display: block;
  position: relative;
}

@include mobile {
  .rootContainer {
    margin-left: $gap-f-0;
    margin-right: $gap-f-0;
  }
}

@include tablet {
  .rootContainer {
    margin-left: $gap-f-2;
    margin-right: $gap-f-2;
  }
}

.background {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

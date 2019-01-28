<template>
  <div 
    :style="'background-image: url(\''+images[index]+'\');'" 
    class="poster-background">
    <div class="root-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      images: [
        '/gallery/00.jpg',
        '/gallery/01.jpg',
        '/gallery/02.jpg',
        '/gallery/03.jpg',
        '/gallery/04.jpg',
        '/gallery/05.jpg'
      ]
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
  /* padding-right: 26px;
  padding-left: 26px; */
}

.root-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  min-height: 94vh;
}

.poster-background {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>

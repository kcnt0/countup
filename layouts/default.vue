<template>
  <div>
    <div  
      :class="[$style.pages, $style.centerContainer, mountLink ? $style.active:'']">
      <div 
        :class="$style.pageContainer">
        <nuxt-link 
          v-tooltip.bottom="'home'" 
          to="/beta">
          <fa 
            :class="[$style.iconLink, $style.iconHome]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'home']" 
            size="3x"
            transform="shrink-6"/>
        </nuxt-link>

        <nuxt-link 
          v-tooltip.bottom="'vote!'" 
          to="/beta/vote">
          <fa 
            :class="[$style.iconLink, $style.iconVote]"
            :mask="['fas', 'circle']"
            :icon="['far', 'comment']" 
            size="3x"
            transform="shrink-5"/>
        </nuxt-link>

        <nuxt-link 
          v-tooltip.bottom="'votes'" 
          to="/beta/votes">
          <fa 
            :class="[$style.iconLink, $style.iconVotes]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'list']" 
            size="3x"
            transform="shrink-6"/>
        </nuxt-link>

        <nuxt-link 
          v-tooltip.bottom="'history'" 
          to="/beta/history">
          <fa 
            :class="[$style.iconLink, $style.iconVotes]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'history']" 
            size="3x"
            transform="shrink-6"/>
        </nuxt-link>

        <nuxt-link
          v-tooltip.bottom="'gallery'" 
          to="/beta/gallery">
          <fa 
            :class="[$style.iconLink, $style.iconGallery]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'images']" 
            size="3x"
            transform="shrink-7"/>
        </nuxt-link>

        <nuxt-link 
          v-tooltip.bottom="'clock'" 
          to="/beta/watch">
          <fa 
            :class="[$style.iconLink, $style.iconWatch]"
            :mask="['fas', 'circle']"
            :icon="['far', 'clock']" 
            size="3x"
            transform="shrink-7"/>
        </nuxt-link>
      </div>
      <div 
        :class="[$style.arrowDown, mountLink ? $style.clean:'']" 
        @click="mountLink = !mountLink"/>
    </div>
    
    <div @click="mountLink = false">
      <nuxt/>
    </div>

    <div :class="[$style.socialMedia, $style.rightContainer]">
      <a 
        v-tooltip.auto="'kamontat'"
        href="https://facebook.com/kamontatc"
        target="_blank">
        <fa 
          :class="[$style.iconLink, $style.iconFacebook, $style.iconNet]"
          :mask="['fas', 'circle']"
          :icon="['fab', 'facebook-f']" 
          size="3x"
          transform="shrink-3.5 down-1.4 right-0.55"/>
      </a>

      <a 
        v-tooltip.auto="'natcha'"
        href="https://facebook.com/pprangnt"
        target="_blank">
        <fa 
          :class="[$style.iconLink, $style.iconFacebook, $style.iconPrang]" 
          :mask="['fas', 'circle']"
          :icon="['fab', 'facebook-f']" 
          size="3x"
          transform="shrink-3.5 down-1.4 right-0.55"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountLink: false
    }
  }
}
</script>

<style lang="scss" scoped module>
@import '@/assets/styles/variable.scss';

.centerContainer {
  position: fixed;
  left: 50%;

  transform: translate(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 10;
}

.rightContainer {
  position: fixed;
  right: $gap-f-1;

  display: flex;

  z-index: 10;
}

.pageContainer {
  padding-top: $gap-f-1;
}

.pages {
  top: -70px;

  transition: all 0.5s ease;

  &.active {
    top: 0;

    .pageContainer {
      padding: $gap-f-1;
      opacity: 0.7;
      background-color: $black;
      border-radius: $round-a;
    }
  }
}

.socialMedia {
  bottom: $gap-f-2;
}

.iconLink {
  margin: 5px;
  border-radius: 100%;

  opacity: 1;
}

.iconFacebook {
  color: $white;
  background-color: $black;
}

.iconNet:hover {
  color: $net-color;
}

.iconPrang:hover {
  color: $prang-color;
}

.iconVote,
.iconHome {
  color: $white;
  background-color: $black;

  &:hover {
    color: $black;
    background-color: $white;
  }
}

.iconGallery,
.iconVotes,
.iconWatch {
  color: $white;
  background-color: $black;

  &:hover {
    color: $black;
    background-color: $white;
  }
}

.arrowDown {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 30px solid #000;

  opacity: 0.3;

  transition: all 0.5s ease;

  &:hover {
    opacity: 1;
  }

  &.clean {
    opacity: 0;
  }
}
</style>


<style>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  min-height: 94vh;
}

.center-container.has-full-size {
  min-height: 100vh;
  min-width: 100vw;
}
</style>

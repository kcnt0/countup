<template>
  <div>
    <div  
      :class="[$style.pages, $style.centerContainer, mountLink ? $style.active:'']">
      <div 
        :class="$style.pageContainer">
        <nuxt-link 
          v-tooltip.bottom="'home'" 
          to="/">
          <fa 
            :class="[$style.iconLink, $style.iconHome]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'home']" 
            size="3x"
            transform="shrink-6"/>
        </nuxt-link>

        <nuxt-link 
          v-tooltip.bottom="'clock'" 
          to="/watch">
          <fa 
            :class="[$style.iconLink, $style.iconWatch]"
            :mask="['fas', 'circle']"
            :icon="['far', 'clock']" 
            size="3x"
            transform="shrink-7"/>
        </nuxt-link>

        <nuxt-link
          v-tooltip.bottom="'gallery'" 
          to="/gallery">
          <fa 
            :class="[$style.iconLink, $style.iconGallery]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'images']" 
            size="3x"
            transform="shrink-7"/>
        </nuxt-link>

        <!-- <nuxt-link 
          v-tooltip.bottom="'history'" 
          to="/history">
          <fa 
            :class="[$style.iconLink, $style.iconVotes]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'history']" 
            size="3x"
            transform="shrink-6"/>
        </nuxt-link> -->

        <nuxt-link 
          v-tooltip.bottom="'vote!'" 
          to="/vote">
          <fa 
            :class="[$style.iconLink, $style.iconVote]"
            :mask="['fas', 'circle']"
            :icon="['far', 'comment']" 
            size="3x"
            transform="shrink-5"/>
        </nuxt-link>

        <nuxt-link 
          v-tooltip.bottom="'infomation'" 
          to="/information">
          <fa 
            :class="[$style.iconLink, $style.iconInfo]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'info']" 
            size="3x"
            transform="shrink-6"/>
        </nuxt-link>

        <!-- <nuxt-link 
          v-tooltip.bottom="'votes'" 
          to="/votes">
          <fa 
            :class="[$style.iconLink, $style.iconVotes]"
            :mask="['fas', 'circle']"
            :icon="['fas', 'list']" 
            size="3x"
            transform="shrink-6"/>
        </nuxt-link> -->
      </div>
      <div 
        :class="[$style.arrowDown, mountLink ? $style.clean:'']" 
        @click="mountLink = !mountLink"/>
    </div>
    
    <div @click="mountLink = false; mountSocial = false">
      <nuxt/>
    </div>

    <div 
      :class="[$style.socialMedia, $style.footerContainer, mountSocial ? $style.active:'']">
      <div 
        v-tooltip.left="'social media'" 
        :class="[$style.arrowLeft, mountSocial ? $style.clean:'']" 
        @click="mountSocial = !mountSocial"/>
      <div :class="$style.socialContainer">
        <a 
          v-tooltip.left="'kamontat'"
          href="https://github.com/kamontat"
          target="_blank">
          <fa 
            :class="[$style.iconLink, $style.iconGithub, $style.iconNet]"
            :icon="['fab', 'github']" 
            size="3x"/>
        </a>

        <a 
          v-tooltip.left="'kamontat'"
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
          v-tooltip.left="'natcha'"
          href="https://github.com/prangnt"
          target="_blank">
          <fa 
            :class="[$style.iconLink, $style.iconGithub, $style.iconPrang]"
            :icon="['fab', 'github']" 
            size="3x"/>
        </a>

        <a 
          v-tooltip.left="'natcha'"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountLink: false,
      mountSocial: false
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

  z-index: 9999;
}

.pageContainer {
  min-height: 70px;

  padding-top: $gap-f-1;
}

.pages {
  top: -70px;
  min-width: 415px;

  transition: all 0.6s ease;

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

.footerContainer {
  position: fixed;
  display: flex;
  align-items: flex-end;
  z-index: 9999;
}

.socialContainer {
  display: flex;
  flex-direction: column;
}

.socialMedia {
  right: -60px - $gap-f-0;

  &.active {
    right: $gap-f-0;
  }

  transition: all 0.6s ease;
}

@include mobile {
  .socialMedia {
    bottom: 2px;
  }
}

@include tablet {
  .socialMedia {
    bottom: $gap-f-2;
  }
}

.iconLink {
  margin: 5px;
  border-radius: 100%;

  opacity: 1;

  transition: all 0.6 ease;
}

.iconNet:hover {
  color: $net-color !important;
}

.iconPrang:hover {
  color: $prang-color !important;
}

.iconVote,
.iconHome,
.iconInfo,
.iconFacebook,
.iconGithub {
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

  transition: all 0.6s ease;

  &:hover {
    opacity: 1;
  }

  &.clean {
    opacity: 0;
  }
}

.arrowLeft {
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;

  border-right: 30px solid #000;

  opacity: 0.3;

  transition: all 0.6s ease;

  margin-right: $gap-f-0;

  &:hover {
    opacity: 1;
  }

  &.clean {
    opacity: 0;
  }
}
</style>

<style lang="scss">
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  &[x-placement^='top'] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='bottom'] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='right'] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^='left'] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>

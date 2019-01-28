<template>
  <agile 
    :arrows="arrow" 
    :dots="dot"
    :timing="'ease-in-out'" 
    :fade="true"
    :autoplay="autoplay" 
    :autoplay-speed="autoplaySpeed"
    :pause-on-hover="false">
    <div 
      v-for="data in images" 
      :key="data.code" 
      :style="'background-image: url('+data.src+');'" 
      class="slide">
      <div 
        v-if="data.caption" 
        :class="$style.LowCenterContainer">
        <div :class="$style.subtitleContainer">
          <div 
            :class="data.caption.lang === 'th' ? 'font-thai' : 'font-english'" 
            class="content">
            <h4 
              v-if="data.caption.title" 
              :class="$style.subtitleHeader">{{ data.caption.title }} 
              <small :class="$style.subtitleDate">{{ data.caption.date }}</small>
            </h4>
            <p 
              v-if="data.caption.detail" 
              :class="$style.subtitleDetail" 
              v-html="data.caption.detail"/>
            <small 
              v-if="data.caption.location" 
              :class="$style.subtitleLocation">@{{ data.caption.location }}</small>
          </div>
        </div>
      </div>
    </div>
  </agile>
</template>

<script>
import { GetImagesList } from '@/assets/apis/images.js'

export default {
  data() {
    return {
      autoplay: false,
      autoplaySpeed: 30000,
      dot: true,
      arrow: true,
      images: GetImagesList()
    }
  },
  asyncData({ query }) {
    const data = {}

    if (query.autoplay) data.autoplay = query.autoplay
    if (query.speed) data.autoplaySpeed = query.speed
    if (query.dot) data.dot = query.dot !== 'false' && query.dot !== '0'
    if (query.arrow) data.arrow = query.arrow !== 'false' && query.arrow !== '0'

    return data
  }
}
</script>

<style src="./index.scss" lang="scss" scoped module>
</style>

<style src="./index.slide.scss" lang="scss">
</style>

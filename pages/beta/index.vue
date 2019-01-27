<template>
  <transition-group 
    name="watch-transition">
    <div 
      :key="'watch-container'"
      :class="{'watch-container': show !== 'watch', 'watch-center-container': show === 'watch'} "
      class="watch-setting" 
      @click="focus('watch')">
      <div 
        :key="'watch-panel'" 
        class="columns is-centered">
        <div 
          v-for="result in showResult"
          :key="'watch-panel-'+result.key" 
          class="column">
          <p 
            :key="'watch-'+result.key" 
            class="watch-digit">{{ result.value }}</p>
          <p class="watch-text">{{ result.key }}</p>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import moment from 'moment'

import { FindDuration, ShowDuration } from '@/assets/apis/duration.js'

export default {
  layout: 'background',
  data() {
    return {
      refreshInterval: 1000,
      watchList: ['Ady', 'Hr', 'Mi', 'Sc'],
      now: moment(),
      show: 'nothing' // nothing, images, watch
    }
  },
  computed: {
    duration() {
      return FindDuration(this.now)
    },
    showResult() {
      return ShowDuration(this.duration, this.watchList)
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = moment()
    }, this.refreshInterval)
  },
  methods: {
    focus(on) {
      if (this.show === on) this.show = 'nothing'
      else this.show = on
    }
  }
}
</script>

<style lang="scss">
.index-container {
  display: flex;
  position: relative;
}

.columns {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.column {
  text-align: center;
}
</style>

<style src="./index.transform.scss" lang="scss" scoped>
</style>

<style src="./index.scss" lang="scss" scoped>
</style>

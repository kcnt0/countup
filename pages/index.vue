<template>
  <div>
    <Firework 
      v-if="onFire" 
      :class="$style.onMid"
      @click="galleryIndex = imageIndex" />

    <Background :class="$style.onLow">
      <div 
        :class="$style.rootContainer" 
        @click="mountLink = false">
        <transition-group 
          :class="$style.onHigh"
          name="watch-transition">
          <div 
            :key="'watch-container'"
            :class="watchContainer"
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
                  :class="$style.watchDigit">{{ result.value }}</p>
                <p :class="$style.watchText">{{ result.key }}</p>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </Background>
  </div>
</template>

<script>
import moment from 'moment'

import { FindDuration, ShowDuration } from '@/assets/apis/duration.js'
import { IsCelebrationDay } from '@/assets/apis/date.js'

import Background from '@/components/background.vue'
import Firework from '@/components/firework.vue'

export default {
  components: {
    Background,
    Firework
  },
  asyncData({ query }) {
    const result = {}

    if (query.fire === 'true' || query.fire === '1') result.forceFire = true

    return result
  },
  data() {
    return {
      refreshInterval: 1000,
      watchList: ['Ady', 'Hr', 'Mi', 'Sc'],
      now: moment(),
      show: 'nothing', // nothing, images, watch
      mountLink: false
    }
  },
  computed: {
    onFire() {
      if (this.forceFire) return true // force firework
      return IsCelebrationDay(this.duration)
    },
    duration() {
      return FindDuration(this.now)
    },
    showResult() {
      return ShowDuration(this.duration, this.watchList)
    },
    watchContainer() {
      const result = {}

      result[this.$style.watchSetting] = true
      result[this.$style.watchContainer] = this.show !== 'watch'
      result[this.$style.watchCenterContainer] = this.show === 'watch'

      return result
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

<style src="./index.scss" lang="scss" scoped module>
</style>

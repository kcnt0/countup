<template>
  <div class="poster-background">
    <div 
      v-show="hasError" 
      class="notification-area">
      <div class="notification is-danger">
        <button 
          class="delete" 
          @click="hasError = false"/>
        {{ error }}
      </div>
    </div>
    <div 
      class="image-area" 
      @click="galleryIndex = imageIndex">
      <!-- <figure class="image" >
        <img 
          :src="images[imageIndex]"
          alt="poster images of the website" 
          class="poster" 
          @click="galleryIndex = imageIndex">
      </figure> -->
    </div>
    <div class="center-container has-full-size">
      <Firework v-if="onCalibrationDate" />
      <VueGallerySlideshow 
        :images="images" 
        :index="galleryIndex" 
        @close="closeGallery()"/>
      <section class="content-area section">
        <div class="container is-fluid">
          <div>
            <h1 class="title is-size-2 has-text-centered has-text-white-bis has-text-weight-semibold is-family-primary">
              KcNt <span class="important">Anniversary</span> Website
            </h1>
          </div>
          <!-- <div style="padding-top: 2rem;" >
            <figure class="image" >
              <img 
                :src="images[imageIndex]"
                alt="poster images of the website" 
                class="poster" 
                @click="galleryIndex = imageIndex">
            </figure>
          </div> -->
          <nav class="level is-marginless has-text-grey-light">
            <div 
              v-for="showQuery in show"
              :key="showQuery"
              class="level-item has-text-centered block">
              <p class="digit is-family-primary">{{ formatDateTime(queryDateTime(showQuery)).value }}</p>
              <p class="text is-family-secondary">{{ queryDateTime(showQuery).key }}</p>
            </div>
          </nav>

          <nav 
            v-if="!voted" 
            class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <button 
                  :disabled="saving" 
                  class="button is-success is-outlined is-large"
                  @click="queryFn({up: true})">Vote up ({{ onlyVoteUp.length }})!</button>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <button
                  :disabled="saving" 
                  class="button is-danger is-outlined is-large"
                  @click="queryFn({down: true})">Vote down ({{ onlyVoteDown.length }})!</button>
              </div>
            </div>
          </nav>

          <section class="section">
            <div class="history">
              <div class="field is-grouped is-grouped-multiline">
                <div 
                  v-for="node in history" 
                  :key="node.id" 
                  class="control">
                  <div class="tags has-addons">
                    <span class="tag">{{ node.ip.country }}{{ node.ip.city ? "-"+node.ip.city : '' }}</span>
                    <span 
                      :class="node.voteup ? 'is-success' : 'is-danger'" 
                      class="tag">{{ node.voteup ? "UP" : "DOWN" }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
import moment from 'moment'

import { queryIP } from '@/assets/apis/ip.js'

import VueGallerySlideshow from 'vue-gallery-slideshow'
import Firework from '@/components/firework.vue'

export default {
  components: {
    Firework: Firework,
    VueGallerySlideshow
  },
  // head: {
  //   bodyAttrs: {
  //     class: 'has-background-black-bis'
  //   }
  // },
  data() {
    const datingDate = moment('04 Jan 2018 23:52:00 +0700') // should be correct once.
    return {
      buildDate: process.env.buildDate,
      saving: false,
      id: '',
      ipaddress: {},
      now: moment(),
      hasError: false,
      error: '',
      datingDate,
      history: [],
      show: ['D', 'h', 'M', 's'],
      images: ['/poster.jpg', '/kcapstone.jpg'],
      imageIndex: 0,
      galleryIndex: null,
      voted: false
    }
  },
  computed: {
    onCalibrationDate() {
      if (this.asDays % 100 === 0) return true // every 100 days (fire on 1 day only)
      if (this.years !== 0 && this.months === 0 && this.days === 0) return true // every year (fire, first day of the year)
      return false
    },
    dateDuration() {
      return moment.duration(this.now.diff(this.datingDate))
    },
    milliseconds() {
      return this.dateDuration.milliseconds()
    },
    seconds() {
      return this.dateDuration.seconds()
    },
    minutes() {
      return this.dateDuration.minutes()
    },
    hours() {
      return this.dateDuration.hours()
    },
    asDays() {
      return Math.floor(this.dateDuration.asDays())
    },
    days() {
      return this.dateDuration.days()
    },
    months() {
      return this.dateDuration.months()
    },
    years() {
      return this.dateDuration.years()
    },
    onlyVoteUp() {
      return this.history.filter(node => node.voteup)
    },
    onlyVoteDown() {
      return this.history.filter(node => !node.voteup)
    }
  },
  mounted() {
    window.setInterval(() => {
      this.now = moment()
    }, 1000)

    const ref = this.$fireDb.ref(`vote/${this.buildDate}`)

    ref.once('value').then(snapshot => {
      this.history = []
      snapshot.forEach(childSnapshot => {
        this.history.push(childSnapshot.val())
      })

      const node = this.queryIPAddress()
      if (node) this.voted = true
    })

    ref.on('child_added', data => {
      this.history.push(data.val())
    })
  },
  async asyncData(ctx) {
    const query = ctx.query
    const show = query.show
    const image = query.image

    try {
      const ip = await queryIP(ctx.app.$axios)
      const result = {
        ipaddress: ip
      }

      if (show) result.show = show.split('')
      if (image) result.imageIndex = image

      return result
    } catch (e) {
      return {
        error: e.toString(),
        hasError: true
      }
    }

    return {
      ipaddress: {
        ip: '127.0.0.1',
        country: 'UNKNOWN'
      }
    }
  },
  methods: {
    queryDateTime(query) {
      switch (query) {
        case 'y':
          return { key: 'Years', value: this.years }
        case 'm':
          return { key: 'Months', value: this.months }
        case 'd':
          return { key: 'Days', value: this.days }
        case 'D':
          return { key: 'Days', value: this.asDays }
        case 'h':
          return { key: 'Hours', value: this.hours }
        case 'M':
          return { key: 'Minutes', value: this.minutes }
        case 's':
          return { key: 'Seconds', value: this.seconds }
        case 'S':
          return { key: 'Millisecond', value: this.milliseconds }
        default:
          return this.dateDuration
      }
    },
    formatDateTime(obj, number) {
      return {
        key: obj.key,
        value: obj.value.toString().padStart(number || 2, '0')
      }
    },
    queryIPAddress(ipObj) {
      return this.history.find(v => {
        if (ipObj) return v.ip.loc === ipObj.loc && v.ip.ip === ipObj.ip
        else
          return (
            v.ip.loc === this.ipaddress.loc && v.ip.ip === this.ipaddress.ip
          )
      })
    },
    async queryFn(query) {
      this.saving = true

      const date = +new Date()
      const _id = date - this.buildDate
      const postID = `${crypto.randomBytes(2).toString('hex')}`
      const id = `KCNT${_id}p${postID}`.toUpperCase()
      const ref = this.$fireDb.ref(`vote/${this.buildDate}`)

      const node = this.queryIPAddress()

      try {
        if (node)
          throw new Error(
            `You already voted (${moment(node.timestamp).toLocaleString()})!`
          )

        const newRef = ref.push()
        await newRef.set({
          id: id,
          voteup: (query && query.up) || (query && !query.down),
          ip: this.ipaddress,
          timestamp: date
        })
        this.id = id
        // this.$router.replace({ query: { id: this.id } })
      } catch (e) {
        this.error = e.toString()
        this.hasError = true
        this.delayError()
      }
      this.saving = false
    },
    closeGallery() {
      console.log(this.galleryIndex)
      this.galleryIndex = null
    },
    delayError(ms) {
      window.setTimeout(() => {
        this.hasError = false
      }, ms || 5000) // default 5 seconds
    }
  }
}
</script>

<style scoped>
.notification-area {
  z-index: 1000;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}

.image-area {
  z-index: 0;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}

.content-area {
  z-index: 500;
  background-color: black;
  opacity: 0.75;
  border-radius: 30px;
}

.section {
  min-width: 80vw;
}

.countdown {
  display: flex;
}

.poster {
  height: 100vh;
  width: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.poster-background {
  background-image: url('/poster.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.text {
  font-size: 20px;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 0.85;
}

.digit {
  color: #60c1e8;
  font-size: 5rem;
  font-weight: 100;
  margin: 10px;
  text-align: center;
}

.important:hover {
  color: #ff3333;
}

.history {
  text-align: start;
}
</style>

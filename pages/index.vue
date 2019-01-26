<template>
  <div>
    <notifications 
      :max="3" 
      group="vote"
      position="bottom right"
      width="100%" />

    <v-modal 
      :scrollable="true" 
      name="password"
      width="80%"
      height="auto"
      @closed="closed">
      <section class="section">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Username</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input 
                  v-model="username"
                  class="input" 
                  type="username" 
                  placeholder="Username">
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Password</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input 
                  v-model="password"
                  class="input" 
                  type="password" 
                  placeholder="Password">
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label"/>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button 
                  class="button is-primary" 
                  @click="submitVote()">
                  Send vote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </v-modal>

    <div 
      :style="'background-image: url(\''+images[imageIndex]+'\');'" 
      class="poster-background">

      <infoModal 
        v-model="showHelp" 
        :information="{version: version, moment: buildMoment}"/>

      <Firework 
        v-if="onCalibrationDate" 
        :firework-rate="fireworkRate"
        :firework="fireworkNumber"
        :class="{'always-top': focus === 'firework'}"
        class="firework-area"
        @click="galleryIndex = imageIndex" />

      <VueGallerySlideshow 
        :images="images"
        :index="galleryIndex" 
        class="gallery-area" 
        @close="closeGallery()"/>

      <div 
        class="image-area" 
        @click="galleryIndex = imageIndex" />


      <div class="center-container has-full-size">
        <transition name="fade">
          <section 
            v-if="showBanner"
            :class="{'always-top': focus === 'content'}" 
            class="content-area section is-paddingless">
            <div class="close-content-area">
              <button 
                class="delete is-large" 
                @click="showBanner = false"/>
            </div>
            <div 
              class="container is-fluid" 
              style="margin-right: 68px;margin-left: 68px;">
              <div class="title-container">
                <h1 class="title is-size-2 has-text-centered has-text-white-bis has-text-weight-semibold is-family-primary font-main">
                  KcNt <span class="important">Anniversary</span> Website <a 
                    class="always-top" 
                    @click="showHelp = true">?</a>
                </h1>
              </div>

              <div class="columns is-multiline has-text-grey-light is-centered" >
                <div 
                  v-for="showQuery in show"
                  :key="showQuery"
                  class="column is-narrow is-centered has-text-centered">
                  <div class="block">
                    <p 
                      :style="'color: '+queryDateTime(showQuery).color"
                      class="digit font-digital is-family-primary">{{ formatDateTime(queryDateTime(showQuery)).value }}</p>
                    <p 
                      class="text font-main is-family-secondary">{{ queryDateTime(showQuery).key }}</p>
                  </div>
                </div>
              </div>

              <nav 
                v-if="!voted" 
                class="level is-mobile">
                <div class="level-item has-text-centered">
                  <div>
                    <button 
                      :disabled="saving" 
                      class="button is-success is-outlined is-large font-main"
                      @click="queryFn({up: true})">Vote up ({{ onlyVoteUp.length }})!</button>
                  </div>
                </div>
                <div class="level-item has-text-centered">
                  <div>
                    <button
                      :disabled="saving" 
                      class="button is-danger is-outlined is-large font-main"
                      @click="queryFn({down: true})">Vote down ({{ onlyVoteDown.length }})!</button>
                  </div>
                </div>
              </nav>

              <section 
                v-show="history.length > 0" 
                class="section">
                <div class="history">
                  <div class="field is-grouped is-grouped-multiline">
                    <div 
                      v-for="node in history" 
                      :key="node.id" 
                      class="control">
                      <div class="tags has-addons">
                        <span class="tag">{{ node.user || node.ip.country }}{{ node.ip.city ? "-"+node.ip.city : '' }}</span>
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
        </transition>
      </div>

      <button 
        v-if="!showBanner"
        class="fab" 
        @click="showBanner = true">
        <span class="plus">+</span>
      </button>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
import moment from 'moment'
moment.locale('th')

import { queryIP } from '@/assets/apis/ip.js'

import VueGallerySlideshow from 'vue-gallery-slideshow'
import Firework from '@/components/firework.vue'
import InfoModal from '@/components/infoModal.vue'

export default {
  components: {
    Firework,
    InfoModal,
    VueGallerySlideshow
  },
  data() {
    const datingDate = moment('04 Jan 2018 23:52:00 +0700') // should be correct once.
    return {
      buildDate: process.env.buildDate,
      version: process.env.version,
      saving: false,
      voteup: false,
      id: '',
      ipaddress: {},
      now: moment(),
      hasNotify: false,
      notifyType: '',
      notifyTitle: '',
      notifyText: '',
      username: '',
      password: '',
      datingDate,
      history: [],
      show: ['Ady', 'Hr', 'Mi', 'Sc'],
      showColor: {},
      images: [
        '/poster.jpg',
        '/gallery/01.jpg',
        '/gallery/02.jpg',
        '/gallery/03.jpg',
        '/gallery/04.jpg',
        '/gallery/05.jpg'
      ],
      imageIndex: 0,
      showHelp: false,
      galleryIndex: null,
      voted: false,
      refreshInterval: 1000,
      forceFirework: false,
      fireworkRate: undefined,
      fireworkNumber: 6,
      colorful: false,
      showBanner: true,
      focus: 'content'
    }
  },
  computed: {
    onCalibrationDate() {
      if (this.forceFirework) return true // force firework
      if (this.asDays % 100 === 0) return true // every 100 days (fire on 1 day only)
      if (this.years !== 0 && this.months === 0 && this.days === 0) return true // every year (fire, first day of the year)
      return false
    },
    dateDuration() {
      return moment.duration(this.now.diff(this.datingDate))
    },
    buildMoment() {
      return moment(this.buildDate)
    },
    asMilliseconds() {
      return Math.floor(this.dateDuration.asMilliseconds())
    },
    milliseconds() {
      return this.dateDuration.milliseconds()
    },
    asSeconds() {
      return Math.floor(this.dateDuration.asSeconds())
    },
    seconds() {
      return this.dateDuration.seconds()
    },
    asMinutes() {
      return Math.floor(this.dateDuration.asMinutes())
    },
    minutes() {
      return this.dateDuration.minutes()
    },
    asHours() {
      return Math.floor(this.dateDuration.asHours())
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
    asMonths() {
      return Math.floor(this.dateDuration.asMonths())
    },
    months() {
      return this.dateDuration.months()
    },
    asYears() {
      return Math.floor(this.dateDuration.asYears())
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
    }, this.refreshInterval)

    const ref = this.$fireDb.ref(`vote/${this.buildDate}`)
    ref.on('child_added', data => {
      const v = data.val()
      if (!this.history.find(n => n.id === v.id)) this.history.push(v)
    })

    if (this.show)
      this.showColor = this.show.reduce((p, c) => {
        p[c] = (this.colorful && this.randomColor('100%')) || 'inherite'
        return p
      }, {})

    if (this.hasNotify) {
      this.$notify({
        group: 'vote',
        title: this.notifyTitle,
        text: this.notifyText,
        type: this.notifyType
      })

      this.hasNotify = false
    }
  },
  async asyncData(ctx) {
    const query = ctx.query
    const show = query.show
    const image = query.image
    const interval = query.interval
    const firework = query.firework
    const fireworkRate = query.fireworkRate
    const fireworkNumber = query.fireworkNumber
    const focus = query.focus
    const colorful = query.colorful

    try {
      const ip = await queryIP(ctx.app.$axios)
      const result = {
        ipaddress: ip
      }

      if (show) result.show = show.split(/(?=[A-Z])/)
      if (image) result.imageIndex = parseInt(image) || 0
      if (interval) result.refreshInterval = interval
      if (firework === 'true' || firework === '1') result.forceFirework = true
      if (colorful === 'true' || colorful === '1') result.colorful = true
      if (fireworkNumber) result.fireworkNumber = parseInt(fireworkNumber) || 6
      if (fireworkRate) result.fireworkRate = parseInt(fireworkRate) || 0

      if (focus) result.focus = focus

      // history setup
      const ref = ctx.app.$fireDb.ref(`vote/${process.env.buildDate}`)
      const snapshot = await ref.once('value')
      if (snapshot) {
        result.history = []

        snapshot.forEach(childSnapshot => {
          result.history.push(childSnapshot.val())
        })

        const node = result.history.find(v => {
          return v.ip.loc === ip.loc && v.ip.ip === ip.ip
        })

        // already voted
        if (node) {
          result.hasNotify = true
          result.notifyType = 'success'
          result.notifyTitle = 'Welcome back'
          result.notifyText = 'You already voted on my website, thank you'
          if (!result.focus) result.focus = 'firework'
        }
      }

      return result
    } catch (e) {
      return {
        ipaddress: {
          ip: '127.0.0.1',
          country: 'UNKNOWN'
        },
        hasNotify: true,
        notifyType: 'error',
        notifyTitle: 'Error',
        notifyText: e.toString()
      }
    }
  },
  methods: {
    queryDateTime(query) {
      switch (query) {
        case 'Yr':
          return {
            key: 'Years',
            value: this.years,
            color: this.showColor[query]
          }
        case 'Mt':
          return {
            key: 'Months',
            value: this.months,
            color: this.showColor[query]
          }
        case 'Dy':
          return { key: 'Days', value: this.days, color: this.showColor[query] }
        case 'Hr':
          return {
            key: 'Hours',
            value: this.hours,
            color: this.showColor[query]
          }
        case 'Mi':
          return {
            key: 'Minutes',
            value: this.minutes,
            color: this.showColor[query]
          }
        case 'Sc':
          return {
            key: 'Seconds',
            value: this.seconds,
            color: this.showColor[query]
          }
        case 'Ms':
          return {
            key: 'Milliseconds',
            value: this.milliseconds,
            color: this.showColor[query]
          }
        case 'Ayr':
          return {
            key: 'Years',
            value: this.asYears,
            color: this.showColor[query]
          }
        case 'Amt':
          return {
            key: 'Months',
            value: this.asMonths,
            color: this.showColor[query]
          }
        case 'Ady':
          return {
            key: 'Days',
            value: this.asDays,
            color: this.showColor[query]
          }
        case 'Ahr':
          return {
            key: 'Hours',
            value: this.asHours,
            color: this.showColor[query]
          }
        case 'Ami':
          return {
            key: 'Minutes',
            value: this.asMinutes,
            color: this.showColor[query]
          }
        case 'Asc':
          return {
            key: 'Seconds',
            value: this.asSeconds,
            color: this.showColor[query]
          }
        case 'Ams':
          return {
            key: 'Milliseconds',
            value: this.asMilliseconds,
            color: this.showColor[query]
          }
        default:
          return {
            key: 'Date',
            value: this.dateDuration,
            color: this.showColor[query]
          }
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
    submitVote() {
      if (this.password === 'kcnt-anniversary') {
        this.saving = false
        this.queryFn({ up: this.voteup, down: !this.voteup }, { force: true })
      } else {
        this.voted = true
      }

      this.$modal.hide('password')
    },
    isNodeExist() {
      return this.queryIPAddress() !== undefined
    },
    closed() {
      if (!this.password) this.voted = true
    },
    async queryFn(query, opts) {
      if (!opts) opts = {}

      this.saving = true
      this.voteup = query.up

      const ref = this.$fireDb.ref(`vote/${this.buildDate}`)

      const date = +new Date()
      const _id = date - this.buildDate
      const postID = `${crypto.randomBytes(2).toString('hex')}`
      const id = `KCNT${_id}p${postID}`.toUpperCase()

      try {
        if (!opts.force && this.isNodeExist()) {
          this.$modal.show('password')
          return
          // this.voted = true
          // throw new Error(
          //   `You already voted (${moment(node.timestamp).fromNow()})!`
          // )
        }

        const newRef = ref.push()
        await newRef.set({
          id: id,
          voteup: (query && query.up) || (query && !query.down),
          ip: this.ipaddress,
          user: this.username,
          timestamp: date
        })

        this.id = id
        this.$notify({
          group: 'vote',
          title: 'Thank you',
          text: 'Thank you for voting our website',
          type: 'success'
        })
      } catch (e) {
        this.$notify({
          group: 'vote',
          title: 'Error',
          text: e.toString(),
          type: 'error'
        })
      }
      this.saving = false
    },
    closeGallery() {
      this.galleryIndex = null
    },
    randomColor(opt) {
      const h = Math.floor(Math.random() * 360)
      const s = '100%'
      const l = (opt && opt.light) || '50%'
      return `hsla(${h}, ${s}, ${l}, 1)`
    }
  }
}
</script>

<style src="./index.scss" lang="scss" scoped>
</style>

<style src="./index.transform.scss" lang="scss" scoped>
</style>

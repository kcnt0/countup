<template>
  <div class="center-container has-background-black-bis">
    <Firework v-if="onCalibrationDate" />
    <section class="section">
      <div class="container is-fluid">
        <div>
          <h1 class="title has-text-centered">KcNt <span class="important">Anniversary</span> Website</h1>
        </div>

        <nav class="level">
          <div class="level-item has-text-centered block">
            <p class="digit">{{ days | three_digits }}</p>
            <p class="text">Days</p>
          </div>
          <div class="level-item has-text-centered block">
            <p class="digit">{{ hours | three_digits }}</p>
            <p class="text">Hours</p>
          </div>
          <div class="level-item has-text-centered block">
            <p class="digit">{{ minutes | three_digits }}</p>
            <p class="text">Minutes</p>
          </div>
          <div class="level-item has-text-centered block">
            <p class="digit">{{ seconds | three_digits }}</p>
            <p class="text">Seconds</p>
          </div>
        </nav>

        <nav class="level is-mobile">
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
</template>

<script>
import crypto from 'crypto'
import moment from 'moment'

import { queryIP } from '@/assets/apis/ip.js'

import Firework from '@/components/firework.vue'

export default {
  components: {
    Firework: Firework
  },
  data() {
    const datingDate = moment('04 Jan 2018 00:00:00 +0700')

    return {
      buildDate: process.env.buildDate,
      saving: false,
      id: '',
      ipaddress: {},
      now: moment(),
      datingDate,
      history: []
    }
  },
  computed: {
    onCalibrationDate() {
      if (this.days % 100 === 0) return true // every 100 days (fire on 1 day only)
      if (
        this.years !== 0 &&
        this.dateDuration.months() === 0 &&
        this.days === 0
      )
        return true // every year (fire, first day of the year)
      return false
    },
    dateDuration() {
      return moment.duration(this.now.diff(this.datingDate))
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
    days() {
      return Math.floor(this.dateDuration.asDays())
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
    })

    ref.on('child_added', data => {
      this.history.push(data.val())
    })
  },
  async asyncData(ctx) {
    try {
      const ip = await queryIP(ctx.app.$axios)
      const result = {
        ipaddress: ip
      }
      return result
    } catch (e) {
      console.error(e)
    }

    return {
      ipaddress: {
        ip: '127.0.0.1',
        country: 'UNKNOWN'
      }
    }
  },
  methods: {
    async queryFn(query) {
      this.saving = true

      const date = +new Date()
      const _id = date - this.buildDate
      const postID = `${crypto.randomBytes(2).toString('hex')}`
      const id = `KCNT${_id}p${postID}`.toUpperCase()
      const ref = this.$fireDb.ref(`vote/${this.buildDate}`)

      try {
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
        console.error(e)
      }

      this.saving = false
    }
  }
}
</script>

<style scoped>
.has-fullheight {
  height: 100vh;
}

.countdown {
  display: flex;
}

.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.text {
  color: #ffa6c9;
  font-size: 20px;
  font-family: 'Roboto Condensed', serif;
  font-weight: 40;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 0.9;
}

.digit {
  color: #60c1e8;
  font-size: 110px;
  font-weight: 100;
  font-family: 'Roboto', serif;
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

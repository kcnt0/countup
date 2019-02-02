<template>
  <div :class="$style.root">
    <notifications 
      :max="3" 
      :duration="-1"
      :speed="500"
      group="vote"
      position="top right"
      width="30vw" />
    <div :class="$style.container">
      <h1 class="title is-3">What do you think about this website ? </h1>
      <div :class="$style.voteContainer">
        <button 
          :class="$style.vote"
          class="button is-success is-outlined is-large" 
          @click="makeVote('up')">Up 
          <fa 
            :class="$style.icon" 
            :icon="['far', 'thumbs-up']" />
        </button>
        <button 
          :class="$style.vote" 
          class="button is-danger is-outlined is-large"
          @click="makeVote('down')">Down 
          <fa 
            :class="$style.icon" 
            :icon="['far', 'thumbs-down']" />
        </button>
      </div>

      <div 
        v-if="latest.id !== ''" 
        :class="$style.footer">
        <h2><span :class="$style.userText">{{ latest.user }}</span> just vote <span :class="$style['vote'+latest.vote.toUpperCase()]">{{ latest.vote.toUpperCase() }}</span> at {{ latest.city }}, {{ latest.country }}</h2>
      </div>

      <!-- FIXME: implement new logic of voting -->
    </div>
    
  </div>
</template>

<script>
import { queryIP } from '@/assets/apis/ip.js'
import { GenerateID } from '@/assets/apis/id.js'

import codeObj from './code.json'

export default {
  data() {
    return {
      buildDate: process.env.buildDate,
      disableVote: false,
      vote: 'none',
      history: [],
      notifyObject: {
        thankyou: id => {
          return {
            group: 'vote',
            type: 'success',
            title: `Voted id=${id}`,
            text: 'Thank you for voting our website'
          }
        },
        error: e => {
          return {
            group: 'vote',
            type: 'error',
            title: `Error`,
            text: e.toString()
          }
        }
      }
    }
  },
  computed: {
    latest() {
      if (this.history.length < 1)
        return {
          id: '',
          country: '',
          city: '',
          vote: '',
          user: '',
          timestamp: ''
        }
      return this.history[this.history.length - 1]
    }
  },
  async asyncData({ app }) {
    const ip = await queryIP(app.$axios)
    return {
      ip: ip
    }
  },
  mounted() {
    try {
      const ref = this.$fireDb.ref(`vote/${process.env.buildDate}`)
      ref.on('child_added', snapshot => {
        const o = snapshot.val()
        this.history.push({
          id: o.id,
          country: o.ip.country,
          city: o.ip.city,
          vote: o.vote,
          user: o.user.name,
          timestamp: o.timestamp
        })
      })
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    async makeVote(vote) {
      const current = vote ? vote : this.vote
      if (current !== 'up' && current !== 'down') {
        this.$notify({
          group: 'vote',
          type: 'error',
          title: 'something wrong',
          text: 'maybe you enter something wrong'
        })
        return
      }

      this.disableVote = true

      this.vote = current
      const id = GenerateID('date', {
        date: this.buildDate,
        suffix: `${this.vote.substr(0, 1).toUpperCase()}`,
        prefix: `KCNT`
      })

      try {
        const code = await this.$swal({
          text: 'Enter your vote code',
          content: 'input',
          button: {
            text: 'Check!',
            closeModal: false
          }
        })

        const codes = codeObj.code
        if (!codes.includes(code)) {
          this.$swal.close()

          if (code) throw new Error('Your code is invalid')
          else return
        }

        const username = await this.$swal({
          text: 'Enter your username',
          content: 'input',
          button: {
            text: 'Vote!',
            closeModal: false
          }
        })

        if (!username || username.length < 3) {
          this.$swal.close()
          throw new Error('You must enter username at least 3 character')
        }

        const ref = this.$fireDb.ref(`vote/${this.buildDate}`)
        const newRef = ref.push()
        await newRef.set({
          id: id,
          vote: this.vote,
          ip: this.ip,
          code: code,
          user: {
            name: username
          },
          timestamp: +new Date()
        })

        swal.stopLoading()
        swal.close()
        this.$notify(this.notifyObject.thankyou(id))
      } catch (e) {
        this.$notify(this.notifyObject.error(e))
      }

      this.disableVote = false
    }
  }
}
</script>

<style lang="scss" scoped module>
@import '@/assets/styles/variable.scss';

.root {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
}

.container {
  display: flex;
  flex-direction: column;

  align-content: center;

  margin: $gap-f-3;
  padding: $gap-f-2;
}

.voteContainer {
  text-align: center;

  margin: $gap-f-1;
}

.voteHelper {
  text-align: right !important;
  color: $grey;
}

.vote {
  margin-left: $gap-f-1;
  margin-right: $gap-f-1;
}

.footer {
  margin-top: $gap-f-0;
  text-align: center;
}

.icon {
  margin-left: 6px;
}

.userText {
  color: $primary;

  &:hover {
    color: $primary-dark;
  }
}

.voteUP {
  color: $green;

  &:hover {
    color: $green-dark;
  }
}

.voteDOWN {
  color: $red;

  &:hover {
    color: $red-dark;
  }
}
</style>

<style lang="scss">
@import '@/assets/styles/variable.scss';

.vue-notification {
  font-size: $size-6;
}
</style>

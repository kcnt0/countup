<template>
  <div 
    :style="'background-image: url(\''+images[imageIndex]+'\');'" 
    class="poster-background">
    <div 
      :class="{'is-active': showHelp}" 
      class="modal">
      <div class="modal-background"/>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="font-main modal-card-title">KcNt Anniversary</p>
          <button 
            class="delete"
            aria-label="close" 
            @click="help()"/>
        </header>
        <section class="modal-card-body">
          <div class="content font-thai" >
            <h1>จุดเริ่มต้น</h1>
            <p>เว็บไซต์นี้ สร้างเพื่อความพอใจส่วนตัวล้วนๆ และได้ถูกสร้างขึ้นในเดือนที่ครบรอบ 1 ปีพอดี ตั้งแต่วันที่ <span class="highlight">04 มกราคม 2561</span> ตอนประมาณ 23:52 (+0700) ที่เราได้ตกลงมาเป็นแฟนกัน</p>

            <h3>แรงบันดาลใจ</h3>
            <p>มีอยู่วันหนึ่งไปเปิดเจอเว็บไซต์คนๆหนึ่ง ที่เขาทำอะไรคล้ายๆแบบนี้ แล้วก็รู้สึกว่าอยากจะลองบ้าง แต่แล้วก็ผ่านไปหลายเดือนกว่าจะได้ทำจริงๆ ในตอนแรกที่ไม่ได้ทำ เพราะว่า<span class="highlight">คุณปรางค์ไม่อนุมัติ</span> 555</p>

            <h3>ความสามารถของเว็บไซต์</h3>
            <p>เว็บไซต์นี้ มีไว้เพื่อตรวจสอบวันและเวลาที่เราได้คบกันมา โดยมีความสามารถดังนี้</p>
            <ul>
              <li>พื้นหลังเป็นรูป และยัง<span class="highlight">สามารถคลิกเพื่อดูทั้งอัลบัมได้</span></li>
              <li>เวลาจะเพิ่มขึ้นเรื่อยๆ นับตั้งแต่วันที่ 4 มกราคม 2561 เป็นต้นมา</li>
              <li>ผู้ใช้งานเว็บสามารถกดโหวตความชอบได้ ผ่านการกดที่ปุ่ม 2 ปุ่ม <span class="highlight">ผู้ที่โหวตแล้ว ไม่สามารถโหวตซ้ำได้อีก</span></li>
              <li>ผู้ใช้งานเว็บไซต์สามารถเลือกรูปพื้นหลังได้เอง <span class="highlight"/>
                <ul>
                  <li>โดยดูตัวเลขที่อัลบัม <span class="highlight">1~n</span></li>
                  <li>เพิ่มตัวเลขที่ได้มาที่ link ตามรูปแบบนี้ <code>?image=&lt;id&gt;</code></li>
                  <li>ตัวอย่าง <code>https://kcnt.xyz?image=1</code></li>
                </ul>
              </li>
              <li>ผู้ใช้งานสามารถเลือกข้อมูลที่จะโชว์ได้
                <ul>
                  <li>โดยเพิ่มสิ่งที่ต้องการจะโชว์ไปยัง link ดังนี้ <code>?show=&lt;code&gt;</code> โดย code ที่เป็นไปได้คือ
                    <ul>
                      <li><code>Yr</code> - จำนวนปีที่คบกัน</li>
                      <li><code>Mt</code> - จำนวนเดือนที่คบกัน (ถ้าครบปีจะถูกปรับเป็น 0 ใหม่)</li>
                      <li><code>Dy</code> - จำนวนวันที่คบกัน (ถ้าครบเดือนจะถูกปรับเป็น 0 ใหม่)</li>
                      <li><code>Hr</code> - จำนวนชั่วโมงที่คบกัน (ถ้าครบวันจะถูกปรับเป็น 0 ใหม่)</li>
                      <li><code>Mi</code> - จำนวนนาทีที่คบกัน (ถ้าครบชั่วโมงจะถูกปรับเป็น 0 ใหม่)</li>
                      <li><code>Sc</code> - จำนวนวินาทีที่คบกัน (ถ้าครบนาทีจะถูกปรับเป็น 0 ใหม่)</li>
                      <li><code>Ms</code> - จำนวนเสี้ยววินาที (ms) ที่คบกัน (ถ้าครบวินาทีจะถูกปรับเป็น 0 ใหม่)</li>
                      <li><code>Ayr</code> - จำนวนปี<span class="highlight">ทั้งหมด</span>ที่คบกัน</li>
                      <li><code>Amt</code> - จำนวนเดือน<span class="highlight">ทั้งหมด</span>ที่คบกัน</li>
                      <li><code>Ady</code> - จำนวนวัน<span class="highlight">ทั้งหมด</span>ที่คบกัน</li>
                      <li><code>Ahr</code> - จำนวนชั่วโมง<span class="highlight">ทั้งหมด</span>ที่คบกัน</li>
                      <li><code>Ami</code> - จำนวนนาที<span class="highlight">ทั้งหมด</span>ที่คบกัน</li>
                      <li><code>Asc</code> - จำนวนวินาที<span class="highlight">ทั้งหมด</span>ที่คบกัน</li>
                      <li><code>Ams</code> - จำนวนเสี้ยววินาที (ms) <span class="highlight">ทั้งหมด</span>ที่คบกัน</li>
                    </ul>
                  </li>
                  <li>แบนเนอร์จะเรียงตาม code ที่ต่อกัน</li>
                  <li>ตัวอย่าง <code>https://kcnt.xyz?show=AdyHrMiSc</code></li>
                </ul>
              </li>
              <li>a</li>
            </ul>
            <blockquote><span class="highlight">หมายเหตุ</span> ถ้ามีการต่อ link มากกว่า 1 อัน ให้เปลื่ยน <code>?</code> เป็น <code>&</code> <br>
              เช่น <code>https://kcnt.xyz?a=a&b=b&c=c</code></blockquote>

            <h3>ข้อมูลของเว็บไซต์</h3>
            <ul>
              <li>เวอร์ชั่น: {{ version }}</li>
              <li>อัพเดตเมื่อ {{ buildMoment.fromNow() }}</li>
              <li>พัฒนาโดย คุณ<a 
                href="https://kcnt.info/net" 
                target="_blank">กมนทัต จันทราจีระธำรงค์</a></li>
              <li>ออกแบบและดีไซน์โดย คุณ<a 
                href="https://kcnt.info/prang" 
                target="_blank">ณัชชา ไตรรัตน์ชัชวาลย์</a></li>
              <li>โปรแกรมซอร์สโค้ด: Gitlab</li>
            </ul>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button 
            class="button is-success" 
            @click="help()">OK</button>
        </footer>
      </div>
    </div>

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
      @click="galleryIndex = imageIndex" />

    <div class="center-container has-full-size">
      <Firework v-if="onCalibrationDate" />
      <VueGallerySlideshow 
        :images="images" 
        :index="galleryIndex" 
        @close="closeGallery()"/>
      <section class="content-area section">
        <div class="container is-fluid">
          <div>
            <h1 class="title is-size-2 has-text-centered has-text-white-bis has-text-weight-semibold is-family-primary font-main">
              KcNt <span class="important">Anniversary</span> Website <a @click="help()">?</a>
            </h1>
          </div>
          <nav class="level is-marginless has-text-grey-light">
            <div 
              v-for="showQuery in show"
              :key="showQuery"
              class="level-item has-text-centered block">
              <p class="digit font-digital is-family-primary">{{ formatDateTime(queryDateTime(showQuery)).value }}</p>
              <p class="text font-main is-family-secondary">{{ queryDateTime(showQuery).key }}</p>
            </div>
          </nav>

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
moment.locale('th')

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
      version: process.env.version,
      saving: false,
      id: '',
      ipaddress: {},
      now: moment(),
      hasError: false,
      error: '',
      datingDate,
      history: [],
      show: ['Ady', 'Hr', 'Mi', 'Sc'],
      images: ['/poster.jpg', '/kcapstone.jpg'],
      imageIndex: 0,
      showHelp: false,
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

      if (show) result.show = show.split(/(?=[A-Z])/)
      if (image) result.imageIndex = parseInt(image) || 0

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
        case 'Yr':
          return { key: 'Years', value: this.years }
        case 'Mt':
          return { key: 'Months', value: this.months }
        case 'Dy':
          return { key: 'Days', value: this.days }
        case 'Hr':
          return { key: 'Hours', value: this.hours }
        case 'Mi':
          return { key: 'Minutes', value: this.minutes }
        case 'Sc':
          return { key: 'Seconds', value: this.seconds }
        case 'Ms':
          return { key: 'Milliseconds', value: this.milliseconds }
        case 'Ayr':
          return { key: 'Years', value: this.asYears }
        case 'Amt':
          return { key: 'Months', value: this.asMonths }
        case 'Ady':
          return { key: 'Days', value: this.asDays }
        case 'Ahr':
          return { key: 'Hours', value: this.asHours }
        case 'Ami':
          return { key: 'Minutes', value: this.asMinutes }
        case 'Asc':
          return { key: 'Seconds', value: this.asSeconds }
        case 'Ams':
          return { key: 'Milliseconds', value: this.asMilliseconds }
        default:
          return { key: 'Date', value: this.dateDuration }
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
        if (node) {
          this.voted = true
          throw new Error(
            `You already voted (${moment(node.timestamp).toLocaleString()})!`
          )
        }

        const newRef = ref.push()
        await newRef.set({
          id: id,
          voteup: (query && query.up) || (query && !query.down),
          ip: this.ipaddress,
          timestamp: date
        })

        this.id = id
        this.voted = true
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
    help() {
      this.showHelp = !this.showHelp
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
.modal {
  z-index: 9999;
}

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
  text-align: center;
}

.important:hover {
  color: #ff3333;
}

.history {
  text-align: start;
}

.highlight {
  color: #ff3333;
}

.highlight:hover {
  color: #e60000;
}
</style>

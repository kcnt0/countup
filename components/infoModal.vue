<template>
  <div 
    :class="{'is-active': value}" 
    class="modal">
    <div class="modal-background"/>
    <div class="modal-card container is-fluid">
      <header class="modal-card-head">
        <p class="font-main modal-card-title">KcNt Anniversary</p>
        <button 
          class="delete"
          aria-label="close" 
          @click="help()"/>
      </header>
      <section class="modal-card-body">
        <div class="content font-thai" >
          <h1 class="has-text-primary">จุดเริ่มต้น</h1>
          <p>เว็บไซต์นี้ สร้างเพื่อความพอใจส่วนตัวล้วนๆ และได้ถูกสร้างขึ้นในเดือนที่ครบรอบ 1 ปีพอดี ตั้งแต่วันที่ <span class="highlight">04 มกราคม 2561</span> ตอนประมาณ 23:52 (+0700) ที่เราได้ตกลงมาเป็นแฟนกัน</p>

          <h3 class="has-text-primary">แรงบันดาลใจ</h3>
          <p>มีอยู่วันหนึ่งไปเปิดเจอเว็บไซต์คนๆหนึ่ง ที่เขาทำอะไรคล้ายๆแบบนี้ แล้วก็รู้สึกว่าอยากจะลองบ้าง แต่แล้วก็ผ่านไปหลายเดือนกว่าจะได้ทำจริงๆ ในตอนแรกที่ไม่ได้ทำ เพราะว่า<span class="highlight">คุณปรางค์ไม่อนุมัติ</span> 555</p>

          <h3 class="has-text-primary">ความสามารถของเว็บไซต์</h3>
          <p>เว็บไซต์นี้ มีไว้เพื่อตรวจสอบวันและเวลาที่เราได้คบกันมา โดยมีความสามารถดังนี้</p>

          <blockquote><span class="highlight">หมายเหตุ</span> ถ้ามีการต่อ link มากกว่า 1 อัน ให้เปลื่ยน <code>?</code> เป็น <code>&</code> <br>
            เช่น <code>https://kcnt.xyz?bar=foo&baz=foo</code></blockquote>

          <h5>พื้นหลัง</h5>
          <p>
            พื้นหลังเป็นรูป และยัง<span class="highlight">สามารถคลิกเพื่อดูทั้งอัลบัมได้</span>
            อีกทั้งผู้ใช้งานเว็บไซต์ยังสามารถเลือกรูปพื้นหลังได้เองโดย
            <ol>
              <li>โดยดูตัวเลขรูปได้ที่อัลบัม โดยตัวเลขจะเป็น <span class="highlight">1~n</span></li>
              <li>หลังจากนั้นเพิ่มตัวเลขที่ได้มาที่ link ตามรูปแบบต่อไปนี้ <code>?image=&lt;id&gt;</code></li>
              <li>ตัวอย่าง <code>https://kcnt.xyz?image=1</code></li>
            </ol>
          </p>

          <h5>การโหวต</h5>
          <p>ผู้ใช้งานเว็บสามารถกดโหวตความชอบได้ ผ่านการกดที่ปุ่ม 2 ปุ่ม ที่อยู่ในหน้าแรก <span class="highlight">ผู้ที่โหวตแล้ว ไม่สามารถโหวตซ้ำได้อีก</span></p>
          <blockquote>หมายเหตุว่าข้อมูล vote จะถูกล้างในทุกๆ version ที่ปล่อยออกมา</blockquote>

          <h5>วัน-เดือน-ปี</h5>
          <p>
            ผู้ใช้งานสามารถเลือกข้อมูลที่จะโชว์ได้ ผ่าน link ดังนี้ <code>?show=&lt;code&gt;</code> ดังตัวอย่างการใช้งาน <code>https://kcnt.xyz?show=AdyHrMiSc</code> โดย code ที่สามารถใส่ได้คือ

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

            <small>เราสามารถใส่มากกว่า 1 ตัวได้โดยการต่อไปเรื่อยๆ เช่น <code>DyHr</code></small>
            <small>และการเรียงของ code ที่ใส่เข้ามา มีผลต่อการเรียงข้อมูลในเว็บไซต์เช่นกัน</small>
          </p>
          <blockquote><span class="highlight">โปรดระวัง</span>เมื่อต้องใส่ code มากกว่า 4 อัน นั้นอาจจะทำให้การข้อมูลหลุดจากหน้าจอได้</blockquote>

          <h5>การอัพเดตข้อมูล</h5>
          <p>
            โดยปกติ เวลาจะอัพเดตตัวเองทุกๆ 1 วินาที (1000 ms) ถ้าต้องการให้หน้าเว็บอัพเดตบ่อยกว่านั้น สามารถใช้ <code>?interval=&lt;time&gt;</code> โดยตัวเลขใน time จะมีหน่วยเป็น เสี้ยววินาที (ms)
            <br>
            ตัวอย่าง <code>https://kcnt.xyz?interval=200</code> - แปลว่าอัพเดตทุกๆ 0.2 วินาที
          </p>

          <h5>ความสวยงาม</h5>
          <p>
            เว็บไซต์นี้ ถูกสร้างมาด้วยแนวคิดที่ว่า ไม่มีใครที่จะชอบอะไรเหมือนกันทุกอย่าง ผมจึงเพื่มความสามารถให้เว็บไซต์นี้มากมาย
            เช่น การสุ่มสี เราสามารถทำได้ง่ายๆ โดยเพิ่ม <code>?colorful=true</code> ไปที่ link ของเว็บไซต์
          </p>

          <h5>การเฉลิมฉลอง</h5>
          <p>
            แน่นอนว่า ที่เป็นเว็บนับเวลาที่คบกันแล้ว จะไม่มีการเฉลิมฉลองได้อย่างไร ตัวเว็บไซต์นี้สามารถเล่น พลุได้ เมื่อถึงเวลาเฉลิงฉลองของมัน
            โดยการเฉลิมฉลองนั้น จะมี 2 กรณีด้วยกัน
            <ol>
              <li>ครบรอบ 100 วัน, 200 วัน, 300 วัน...</li>
              <li>ครบรอบทุกๆ 1 ปี</li>
            </ol>
            โดยทั้ง 2 กรณีจะทำให้หน้าเว็บมีพลุไป 1 วันเต็มๆ (24 ชั่วโมง)
          </p>

          <blockquote>
            หากแต่ว่าอาจจะมีบางเวลาที่รู้สึกอยากจะมีพลุฉลองอย่างอื่น หรือในเวลาอื่น ก็สามารถใส่ <code>?firework=true</code> ได้เช่นกัน
          </blockquote>

          <p>
            <span class="highlight">พลุจะถูกจุดไว้ข้างหลัง</span> โดยจะอยู่กับรูป เพื่อป้องกันการไม่สามารถกดปุ่มอื่นๆได้ ยกเว้นเมื่อคุณได้ทำการ<span class="highlight">โหวตไปแล้ว พลุจะถูกจุดไว้ข้างหน้า</span> 
            เราสามารถกำหนดวิธีการจุดพลุได้ผ่าน link <code>?focus=firework|content</code> โดยวิธีใช้คือเลือกแค่อันใดอันหนึ่งก็พอเพื่อกำหมดว่าจะสนใจเรื่องอะไร
          </p>

          <h6>การตั้งค่าพลุ</h6>
          <p>ผมได้เสนอวิธีไปมากมายแล้ว นอกจากนั้นในเว็บไซต์นี้ เรายังสามารถตั้งค่า พลุได้เองอีกด้วย โดยมีรูปแบบเช่นเคย คือการเพื่อมข้อมูลใน link</p>
          <ul>
            <li><code>fireworkRate</code> - โอกาศที่จะมีการจุดพลุ (ความบ่อยในการจุดนั้นเอง) ค่านี้หน่วยเป็น %</li>
            <li><code>fireworkNumber</code> - จำนวนมากที่สุดที่จะมีพลุในหน้าจอ (<span class="highlight">หากมากเกินอาจจะทำให้เว็บค้างได้</span>)</li>
          </ul>

          <h3 class="has-text-primary">ขอขอบคุณ</h3>
          <ol>
            <li>เจ้าของเว็บที่ไปเจอ - ผู้ให้ซึ่งแรงบรรดาใจ</li>
            <li>มหาวิทยาลัย - ที่สอนจนสามารถเขียนเว็บไซต์นี้ขึ้นมาได้</li>
            <li>แม่ - ผู้เป็นเสมือนทุกสิ่ง</li>
            <li>ปรางค์ - แฟน คนที่อยู่ข้างๆ ตลอดเวลา (ขัดตลอดเวลา &gt;&lt;)</li>
            <li>ตัวผมเอง - ที่ได้ลงมือทำเว็บนี้ขึ้นมา</li>
          </ol>
          <h4>ขอขอบคุณสิ่งที่ช่วยในการพัฒนา</h4>
          <ol>
            <li><a href="https://gitlab.com">Gitlab</a> - สถานที่โฮสโค๊ด และทำ CI/CD</li>
            <li><a href="https://github.com">Github</a> - สถานที่ที่ทำให้ผมรู้จักกับ git และเข้าใจมัน</li>
            <li><a href="https://vuejs.org/">Vuejs</a> - เว็บทั้งหมดนี้ถูกสร้างสรรค์โดย VueJS framework</li>
            <li><a href="https://nuxtjs.org/">Nuxtjs</a> - อีกหนึ่งตัวย่อยที่ใช้สร้าง static web แบบนี้</li>
            <li><a href="https://firebase.google.com/">Firebase</a> - noSQL หรือ database นั้นเอง ไว้ทำ ส่วนของ Vote ในเว็บ</li>
            <li><a href="https://bulma.io/">Bulma</a> - เป็น light weight css framework ที่ช่วนให้เราไม่ต้องเขียน css เองทั้งหมด</li>
            <li><a href="https://github.com/KitchenStories/vue-gallery-slideshow">vue-gallery-slideshow</a> - ตัวช่วยให้ทำ gallery ได้อย่างสวยงาม :)</li>
            <li><a href="https://github.com/dampion/Vue-fireworks">vue-firework</a> - code ส่วนของพลุที่<span class="highlight">น้องปรางค์อยากได้</span></li>
          </ol>

          <h3 class="has-text-primary">ข้อมูลของเว็บไซต์</h3>
          <ul>
            <li>เวอร์ชั่น: {{ information.version }}</li>
            <li>อัพเดตเมื่อ {{ information.moment.fromNow() }} ({{ information.timestamp }})</li>
            <li>พัฒนาโดย คุณ<a 
              :href="developer.link" 
              target="_blank">{{ developer.name }}</a></li>
            <li>ออกแบบและดีไซน์โดย คุณ<a 
              :href="designer.link" 
              target="_blank">{{ designer.name }}</a></li>
            <li>โปรแกรมซอร์สโค้ด: {{ sourcecode.git }}</li>
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
</template>

<script>
import moment from 'moment'

export default {
  props: {
    information: {
      type: Object,
      default: () => {
        return {
          version: '0.0.0',
          moment: moment(),
          timestamp: ''
        }
      }
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      developer: {
        name: 'กมนทัต จันทราจีระธำรงค์',
        link: 'https://kcnt.info/net'
      },
      designer: {
        name: 'ณัชชา ไตรรัตน์ชัชวาลย์',
        link: 'https://kcnt.info/prang'
      },
      sourcecode: {
        git: 'Gitlab'
      }
    }
  },
  methods: {
    help() {
      this.$emit('input', false)
    }
  }
}
</script>

<style scoped>
.highlight {
  color: #ff3333;
}

.highlight:hover {
  color: #e60000;
}
</style>

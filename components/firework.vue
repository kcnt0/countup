<template>
  <!-- code from https://github.com/dampion/Vue-fireworks -->
  <div
    :style="`
      height: ${canvasBoxHeight};
      width: ${canvasBoxWidth};`"
    class="canvasBox">
    <canvas id="canvas"/>
  </div>
</template>

<style scoped>
.canvasBox {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  overflow: hidden;
}
#canvas {
  height: 100%;
}
</style>

<script>
const InitalSeedAcceleration = 0.1
const InitalSeedSpeed = 5
const InitialSeedNumber = 10
const InitialReSeed = 5 // n% to reset and launch new seed

const InitialExplodeRate = 5

const explodeStartPosition = [0, 200] // top of screen until down 200px

export default {
  props: {
    boxHeight: {
      type: String,
      default: '100%'
    },
    boxWidth: {
      type: String,
      default: '100%'
    },
    fireworkRate: {
      type: Number,
      default: InitialReSeed
    },
    fireworkNumber: {
      type: Number,
      default: InitialSeedNumber
    }
  },
  data() {
    return {
      width: window.innerWidth,
      height: 490,
      seedAmount: 0,
      seeds: [],
      auto: false
    }
  },
  computed: {
    canvas() {
      return document.getElementById('canvas')
    },
    ctx() {
      if (this.canvas !== undefined) {
        return this.canvas.getContext('2d')
      }
      return null
    },
    canvasBoxHeight() {
      return this.boxHeight || '100%'
    },
    canvasBoxWidth() {
      return this.boxWidth || '100%'
    }
  },
  mounted() {
    const self = this

    self.init()
    self.loop()

    window.addEventListener('click', event => {
      self.$on('click', event)
      // const seed = self.Seed(event.pageX, event.pageY)
      // self.seeds.push(seed)
    })

    window.addEventListener('resize', () => {
      self.width = window.innerWidth
      self.height = window.innerHeight
      self.canvas.width = self.width
      self.clearCanvas()
    })
  },
  methods: {
    clearCanvas() {
      if (this.ctx !== undefined) {
        // this.ctx.fillStyle = 'hsla(0, 0, 7, 0)'
        this.ctx.fillRect(0, 0, this.width, this.height)
      }
    },
    circle(x, y, radius) {
      if (this.ctx !== undefined) {
        this.ctx.beginPath()
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI)
        this.ctx.closePath()
      }
    },
    loop() {
      if (this.ctx !== undefined) {
        this.clearCanvas()
        this.ctx.globalCompositeOperation = 'lighter'

        for (let i = 0; i < this.seeds.length; i += 1) {
          const firework = this.seeds[i]
          if (!firework.dead) {
            firework.move()
            firework.draw()
          } else {
            for (let j = 0; j < firework.particles.length; j++) {
              const particle = firework.particles[j]
              if (!particle.dead) {
                particle.move()
                particle.draw()
              }
            }
          }
        }

        for (let i = 0; i < this.seeds.length; i += 1) {
          const firework = this.seeds[i]
          for (let j = 0; j < firework.particles.length; j++) {
            const particle = firework.particles[j]
            if (particle.dead) {
              firework.reset()
              break
            }
          }
        }

        this.ctx.globalCompositeOperation = 'destination-out'
        requestAnimationFrame(this.loop)
        // this.seedAmount += 1
      }
    },
    Seed(x, y) {
      const self = this
      const radius = 3
      const acceleration = InitalSeedAcceleration
      const h = self.randomInt(0, 359)
      const s = '100%'
      const l = '50%'
      const finalColor = `hsla(${h}, ${s}, ${l}, 1)`

      const dead = false
      const fireSeed = { name: 'Seed' }

      fireSeed.x = x || self.randomInt(20, this.width - 20)
      fireSeed.y = y || self.height - 20
      fireSeed.speed = InitalSeedSpeed
      fireSeed.angle = self.randomInt(160, 190)
      fireSeed.particles = []
      fireSeed.color = finalColor
      fireSeed.hsl = {
        h: h,
        s: s,
        l: l
      }

      fireSeed.reset = function() {
        const h = self.randomInt(0, 359)
        const s = '100%'
        const l = '50%'
        const finalColor = `hsla(${h}, ${s}, ${l}, 1)`

        this.dead = false
        this.x = self.randomInt(20, self.width - 20)
        this.y = self.height - 20
        this.speed = InitalSeedSpeed
        this.angle = self.randomInt(160, 190)
        this.particles = []
        this.color = finalColor
        this.hsl = {
          h: h,
          s: s,
          l: l
        }
      }

      fireSeed.move = function() {
        if (
          this.y >
          self.randomInt(explodeStartPosition[0], explodeStartPosition[1])
        ) {
          this.speed += acceleration

          // console.log(speed * Math.sin((Math.PI / 180) * this.angle))
          // console.log(`before: ${this.x}`)
          this.x += this.speed * Math.sin((Math.PI / 180) * this.angle)
          this.y += this.speed * Math.cos((Math.PI / 180) * this.angle)
        } else if (!dead) {
          this.explode()
          this.dead = true
        }
      }
      fireSeed.draw = function() {
        self.ctx.fillStyle = this.color
        self.circle(this.x, this.y, radius)
        self.ctx.fill()
      }
      fireSeed.explode = function() {
        this.particles = []
        for (let i = 0; i < 359; i += InitialExplodeRate) {
          this.particles.push(
            self.Firework(this.x, this.y, i + self.randomInt(-250, 250) / 100, [
              this.hsl.h,
              this.hsl.s,
              this.hsl.l
            ])
          )
        }
      }

      fireSeed.dead = dead
      return fireSeed
    },
    Firework(x, y, angle, color) {
      const self = this
      const radius = 1
      const acceleration = -0.01
      const gravity = 0.01

      const fireSeed = {
        name: `Firework-${angle}`,
        x: x,
        y: y,
        opacity: 1,
        opacitySpeed: self.randomInt(10, 1000) / 100000,
        speed: self.randomInt(150, 200) / 100,
        vSpeed: 0,
        color: `hsla(${color[0]}, ${color[1]}, ${color[2]}, 1)`,
        angle,
        offset: self.randomInt(-20, 20) / 100,
        radius: radius,
        dead: false,
        move() {
          if (this.opacity > 0) {
            if (this.speed > 0) {
              this.speed += acceleration
            }

            this.angle += this.offset
            this.opacity -= this.opacitySpeed
            this.color = `hsla(${color[0]}, ${color[1]}, ${color[2]}, ${
              this.opacity
            })`
            this.vSpeed += gravity

            this.x += this.speed * Math.sin((Math.PI / 180) * this.angle)
            this.y +=
              this.speed * Math.cos((Math.PI / 180) * this.angle) + this.vSpeed
          } else if (!this.dead) {
            this.dead = true
          }
        },
        draw() {
          self.ctx.fillStyle = this.color
          self.circle(this.x, this.y, this.radius)
          self.ctx.fill()
        }
      }

      return fireSeed
    },
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    init() {
      this.canvas.width = this.width
      this.canvas.height = this.height

      for (let i = 0; i < this.fireworkNumber; i++) {
        const seed = this.Seed(
          this.randomInt(20, this.width - 20),
          this.height - 100,
          this.randomInt(175, 185)
        )
        this.seeds.push(seed)
      }
    }
  }
}
</script>

import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Settings: https://github.com/hilongjw/vue-lazyload
export default () => {
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    // error: 'dist/error.png',
    // loading: 'dist/loading.gif',
    attempt: 1
  })
}

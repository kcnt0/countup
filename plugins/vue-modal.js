import Vue from 'vue'
import VModal from 'vue-js-modal'

export default () => {
  Vue.use(VModal, {
    componentName: 'v-modal'
  })
}

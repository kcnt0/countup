import Vue from 'vue'
import NotificationsSSR from 'vue-notification/dist/ssr.js'
import Notifications from 'vue-notification'

export default ({ app }, inject) => {
  Vue.use(Notifications)

  inject('notify', Vue.notify)
}

import Vue from 'vue'

export default () => {
  Vue.filter('three_digits', value => {
    return value.toString().padStart(3, '0')
  })
}

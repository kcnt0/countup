<template>
  <div 
    v-if="value" 
    class="notification-area">
    <div 
      :class="'is-'+type" 
      class="notification">
      <button 
        class="delete" 
        @click="$emit('input', false)"/>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    },
    message: {
      type: String,
      default: ''
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.$emit('input', false)
    }, 3000) // default 5 seconds
  }
}
</script>

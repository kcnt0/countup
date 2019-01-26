<template/>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit() {
      this.$emit('send-data', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

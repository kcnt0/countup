<template>
  <div :class="$style.centerContainer">
    <div class="content">
      <h2>On <span :class="$style.highlight">implement</span> period</h2>
      <h5>Thank you for waiting our website</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped module>
@import '@/assets/styles/variable.scss';

.centerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  min-height: 94vh;
}

.highlight {
  color: $primary;
}
</style>

<template>
  <div class="app-layout">
    <c-header></c-header>
    <router-view/>
    <c-footer></c-footer>
  </div>
</template>

<script>
  import * as components from '@/components'

  export default {
    components
  }
</script>

<style lang="scss">
  @import './style.scss';
</style>

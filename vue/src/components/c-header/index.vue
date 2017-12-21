<template>
  <header class="c-header__wrap">
    <button v-if="showBackBtn">返回</button>
    <p>农大留言墙</p>
    <button>新增</button>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        showBackBtn: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>

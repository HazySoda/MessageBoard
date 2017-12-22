<template>
  <div class="v-home">
    <c-message
      v-for="msg in msgs"
      :key="msg.id"
      :data="msg">
    </c-message>
  </div>
</template>

<script>
  import * as components from '@/components'

  export default {
    components,
    data () {
      return {
        msgs: [
          {
            type: 0,
            id: 1,
            createTime: +new Date(),
            content: '这是一段测试文字。',
            imgSrc: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1332364188,2708258298&fm=27&gp=0.jpg',
            shareCount: 1,
            commentCount: 1,
            thumbUpCount: 1
          },
          {
            type: 1,
            id: 2,
            createTime: +new Date(),
            content: '这是一段测试文字。',
            imgSrc: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246571808,2035666757&fm=27&gp=0.jpg',
            shareCount: 1,
            commentCount: 1,
            thumbUpCount: 1
          },
          {
            type: 2,
            id: 3,
            createTime: +new Date(),
            content: '这是一段测试文字。',
            imgSrc: null,
            shareCount: 1,
            commentCount: 1,
            thumbUpCount: 1
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './style.scss';
</style>

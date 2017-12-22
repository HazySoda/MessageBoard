<template>
  <div class="c-message__wrap">
    <div class="c-message__header">
      <span class="tag">{{data.type | typeFilter}} #{{data.id}}</span>
      <span class="date">{{data.createTime | parseCreateTime}}</span>
    </div>
    <div class="c-message__body">
      <p>{{data.content}}</p>
      <div class="c-message__imgbox" v-if="data.imgSrc">
        <img :src="data.imgSrc" />
      </div>
    </div>
    <div class="c-message__footer" v-if="footer">
      <span>
        分享 {{data.shareCount}}
      </span>
      <span>
        评论 {{data.commentCount}}
      </span>
      <span>
        点赞 {{data.thumbUpCount}}
      </span>
    </div>
  </div>
</template>

<script>
  import { parseCreateTime } from '@/utils'

  export default {
    props: {
      data: {
        type: Object,
        default: {}
      },
      footer: {
        type: Boolean,
        default: true
      }
    },
    filters: {
      parseCreateTime,
      typeFilter: function (value) {
        const type = {
          '0': '表白',
          '1': '吐槽',
          '2': '树洞'
        }
        return type[value]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>

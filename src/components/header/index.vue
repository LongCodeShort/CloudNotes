<template>
  <header class="x-header">
    <img
      class="x-img"
      :src="imgUrl"
      @click="handleLogoClick"
    />
    <div class="x-item" @click="handleFeedbackClick">
      问题反馈
      <svg-icon icon="fankui" />
    </div>
    <div class="x-item" @click="handleToGitHub">
      Github
      <svg-icon icon="link" />
    </div>
    <feed-back v-model:visible="feedBackVisible" />
  </header>
</template>

<script>
import FeedBack from '../feedback'

export default {
  name: 'X-Header',
  components: { FeedBack },
  data () {
    return {
      imgUrl: require('../../assets/img/app.png'),
      feedBackVisible: false
    }
  },
  methods: {
    handleLogoClick () {
      this.$router.push('/')
    },
    handleFeedbackClick () {
      this.feedBackVisible = true
    },
    handleToGitHub () {
      window.open('https://github.com/LongCodeShort/CloudNotes', '_blank')
    }
  }
}

</script>

<style lang="scss" scoped>
.x-header{
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  overflow-wrap: break-word;
  padding: 16px 32px 16px 32px;
  z-index: 100;
  border: 1px solid $color-border-0;
  line-height: 21px;
  .x-img {
    left: 32px;
    position: absolute;
    height: 32px;
    line-height: 32px;
    cursor: pointer;
  }
  .x-item {
    margin-left: 10px;
    color: $color-font-1;
    cursor: pointer;
    &:hover {
      color: $color-hover-blue;
    }
  }
}
</style>

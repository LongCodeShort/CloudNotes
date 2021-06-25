<template>
  <div
    ref="XLabel"
    :class="['x-label', 'x-card', { 'is-active': isActive }]"
    @click.exact="handleClick"
    @click.ctrl.exact="handleCtrlClick"
    @mouseenter="isActive = true"
    @mouseleave="isActive = false"
  >
    <svg-icon :icon="icon" class="icon"/>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'X-Label',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  created () {
  },
  methods: {
    handleClick () {
      this.$router.push(this.url)
    },
    handleCtrlClick (e) {
      console.log(2)
    }
  }
}

</script>

<style lang="scss" scoped>
  .x-label{
    width: calc(25% - 10px);
    height: 70px;
    margin: 10px 10px 0 0;
    padding: 0;
    overflow: hidden;
    background: #ffffff;
    display: flex;
    flex-wrap: nowrap;
    .icon{
      font-size: 68px;
      width: 68px;
    }
    .title{
      width: calc(100% - 68px);
      line-height: 68px;
      text-align: center;
      font-size: 24px;
      color: $color-font-1;
    }
  }
  .is-active {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    .title {
      color: #409EFF;
    }
  }
</style>

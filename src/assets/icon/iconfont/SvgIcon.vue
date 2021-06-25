<template>
  <svg class="x-svg-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName () {
      return '#x-icon-' + this.icon
    }
  }
}
</script>

<style scoped>
  .x-svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>

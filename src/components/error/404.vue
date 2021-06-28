<template>
    <div class="x-error-page">
      <svg-icon class="error404" icon="404" />
    </div>
</template>

<script>
import SvgIcon from '../../assets/icon/iconfont/SvgIcon'
export default {
  name: '404',
  components: { SvgIcon }
}
</script>

<style lang="scss" scoped>
.error404 {
  font-size: 500px;
  color: $color-hover-red;
}
</style>

<template>
  <div class="x-profile">
    <div class="top">
      <svg-icon icon="shuqian" />
      本地书签
    </div>
    <div
      v-for="(item, index) of bookmarks"
      :key="index"
      class="bookmark x-card"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click.exact="handlePushBookMark(item)"
      @click.exact.ctrl="handleToBookMark(item)"
    >
      <span>{{ item.label }}</span>
      <i class="el-icon-circle-close" @click.stop="handleDeleteBookMark(item)" />
    </div>
  </div>
</template>

<script>

import SvgIcon from '../../../assets/icon/iconfont/SvgIcon'
export default {
  name: 'X-Profile',
  components: { SvgIcon },
  data () {
    return {
      bookmarks: this.$store.state.bookmarks.bookmarks
    }
  },
  methods: {
    handleMouseEnter (e) {
      const icon = e.target.childNodes[1]
      icon.style.display = 'inline'
    },
    handleMouseLeave (e) {
      const icon = e.target.childNodes[1]
      icon.style.display = 'none'
    },
    handlePushBookMark (mark) {
      this.$router.push(mark.path)
    },
    handleToBookMark (mark) {
      window.open(mark.path, '_blank')
    },
    handleDeleteBookMark (mark) {
      this.$store.commit('bookmarks/remove', mark)
    }
  }
}

</script>

<style lang="scss" scoped>
  .x-profile {
    height: 100%;
    overflow: hidden;
    .top {
      padding: 16px 0;
      text-align: center;
      font-size: 20px;
      color: $color-font-1;
      border-bottom: 1px solid $color-border-0;
      white-space:nowrap;
      overflow: hidden;
    }
    .bookmark {
      margin-top: 5px;
      height: 30px;
      line-height: 30px;
      color: $color-font-2;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      cursor: pointer;
      &:hover span{
        color: $color-hover-blue;
      }
      .el-icon-circle-close {
        float: right;
        line-height: 30px;
        margin-right: -12px;
        display: none;
        &:hover {
          color: $color-hover-red;
        }
      }
    }
  }
</style>

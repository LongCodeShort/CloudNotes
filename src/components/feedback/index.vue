<template>
  <el-dialog
    title="反馈"
    v-model="visible_2"
    width="700px"
    :close-on-click-modal="false"
    :before-close="handleClose"
  >
    <div class="dialog-body">
    <div class="part">
      <div>添加公众号发送消息反馈</div>
      <img :src="gzhImg"/>
    </div>
      <div class="part" @click="handleNewIssue">
        <div>新建Issue反馈问题</div>
        <div class="issueBox">
          <i class="el-icon-plus"></i>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Index',
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return {
      visible_2: false,
      gzhImg: require('../../assets/img/gzh.jpg')
    }
  },
  watch: {
    visible () {
      this.visible_2 = this.visible
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    },
    handleNewIssue () {
      window.open('https://github.com/LongCodeShort/CloudNotes/issues/new', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-body {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .part{
    width: 330px;
    padding: 16px;
    text-align: center;
  }
  .issueBox{
    border: 1px solid $color-border-0;
    height: 225px;
    width: 225px;
    line-height: 255px;
    margin: 18px auto 0 auto;
    .el-icon-plus {
      font-size: 50px;
    }
    &:hover .el-icon-plus{
      color: $color-hover-blue;
    }
  }
}
</style>

<template>
  <div class="x-home">
    <div  class="bookshelf x-card">
      <el-scrollbar style="width:100%">
        <x-label :key="index" v-for="(item,index) of labelList" :icon="item.icon" :title="item.title" :url="item.url" />
      </el-scrollbar>
    </div>
    <div class="aside">
      <x-profile class="x-card" />
    </div>
  </div>
</template>

<script>
import XLabel from './label'
import XProfile from './profile'
import { getLabelList } from '../../data/catalog'

export default {
  name: 'X-Home',
  components: {
    XLabel,
    XProfile
  },
  data () {
    return {
      labelList: []
    }
  },
  created () {
    this.labelList = getLabelList()
  }
}

</script>

<style lang="scss" scoped>
  .x-home {
    max-width: 1280px;
    margin: 32px auto auto;
    padding: 0 32px;
    display: flex;
    height: calc(100vh - 126px);
    .bookshelf {
      width: 75%;
      height: 100%;
      padding: 0 0 0 10px;
      overflow-y: auto;
      ::v-deep(.el-scrollbar__view) {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-bottom: 10px;
      }
    }
    .aside {
      width: 25%;
      padding: 0 16px;
    }
  }
</style>

<template>
  <div class="x-main">
      <div  class="bookshelf x-card">
        <el-scrollbar style="width:100%">
          <x-label icon="java" title="Java" url="java" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="redis" title="Redis" url="?????" />
          <x-label icon="redis" title="Redis" url="?????" />
          <x-label icon="redis" title="Redis" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="redis" title="Redis" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="redis" title="Redis" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
          <x-label icon="java" title="Java" url="?????" />
        </el-scrollbar>
      </div>
    <div class="aside">
      <x-profile />
    </div>
  </div>
</template>

<script>
import XLabel from './label'
import XProfile from './profile'

export default {
  name: 'X-Main',
  components: {
    XLabel,
    XProfile
  },
  data () {
    return {}
  },
  created () {
    console.log(process.env.BASE_URL)
  },
  methods: {}
}

</script>

<style lang="scss" scoped>
  .x-main {
    max-width: 1280px;
    margin: auto;
    padding: 0 32px;
    display: flex;
    height: calc(100vh - 126px);
    .bookshelf {
      width: 75%;
      height: 100%;
      padding: 0 0 0 10px;
      overflow-y: auto;
      ::v-deep .el-scrollbar__view {
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

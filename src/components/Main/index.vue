<template>
  <div class="x-main">
    <div class="bookshelf x-card">
      <x-label>
        Java
      </x-label>
    </div>
    <div class="profile">
      <div class="bookmark x-card">
        书签栏
      </div>
      新消息
      帮助
    </div>
  </div>
</template>

<script>
import XLabel from '../Label'

export default {
  name: 'index',
  components: {
    XLabel
  },
  data () {
    return {}
  },
  created () {
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
  .bookshelf {
    width: 75%;
    height: calc(100vh - 126px);
    display: flex;
    flex-wrap: wrap;
  }
  .profile {
    width: 25%;
    padding: 0 16px;
  }
}
</style>

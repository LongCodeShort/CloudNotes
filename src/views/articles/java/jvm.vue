<template>
  <!--  Test -->
  <el-button @click="test">添加书签</el-button>
  <!--  TODO -->
</template>

<script>
export default {
  name: 'jvm',
  data () {
    return {
    }
  },
  methods: {
    test () {
      this.$store.commit('bookmarks/add', this.$route.path)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <header class="x-header">
    <div>CloudNotes</div>
  </header>
</template>

<script>
export default {
  name: 'X-Header',
  data () {
    return {}
  },
  created () {
  },
  methods: {}
}

</script>

<style lang="scss" scoped>
.x-header{
  padding: 16px 32px;
  display: flex;
  overflow-wrap: break-word;
  flex-wrap: nowrap;
  font-size: 14px;
  z-index: 100;
  border: 1px solid $color-border-0;
  margin-bottom: 32px;
  line-height: 21px;
}
</style>

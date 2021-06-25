<template>
  <x-header />
  <x-menu />
  <router-view />
</template>

<script>
import XHeader from '../../components/header'
import XMenu from './menu'
export default {
  name: 'X-Note',
  components: {
    XHeader,
    XMenu
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {}
}

</script>

<style scoped>

</style>

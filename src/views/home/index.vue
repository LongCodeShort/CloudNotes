<template>
  <x-header />
  <x-main />
</template>

<script>
import XHeader from '../../components/header'
import XMain from './main'

export default {
  name: 'Home',
  components: {
    XHeader,
    XMain
  }
}
</script>

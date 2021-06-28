<template>
  <x-header />
  <router-view/>
  <div class="x-design">CLX</div>
</template>

<script>
import XHeader from './components/header'

export default {
  name: 'Home',
  components: {
    XHeader
  }
}
</script>

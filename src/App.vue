<template>
  <div id="app">
    <headerTitle></headerTitle>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import headerTitle from './components/headerTitle/headerTitle'

  export default {
    components: {
      headerTitle
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './assets/styles/icon.css'
@import './assets/styles/reset.css'
</style>

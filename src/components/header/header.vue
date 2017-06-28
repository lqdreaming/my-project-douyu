<template>
<div class="header">
	<header>
	    <div class="header-img" @click="back">
		  <img src="./long-arrow-left.png">
		</div>
		<h1>搜索列表</h1>
	</header>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin.styl'

.header
  width: 100%
  height: 100%
  padding-bottom: 10px
  background: #666
  header
    width: 100%
    height: 45px
    background: black
    .header-img
      display: inline-block
      width: 50px
      height: 45px
      img
        width: 30px
        height: 30px
        padding-top: 10px
        padding-left: 4px
    h1
      display: inline-block
      vertical-align: top
      width: 100px
      height: 45px
      padding-top: 17px
      color: #fff
      font-size: 16px 
</style>

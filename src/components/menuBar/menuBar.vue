<template>
<div class="menu-con">
	<ul>
		<router-link to="/" tag='li' :class="[!this.$route.params.id?'active':'']">
			<h1>首页</h1>
			<img src="./arrow.jpg">
		</router-link>
		<router-link :to="{name:'wholeClassify',params:{id:'1'}}" tag='li' :class="[this.$route.params.id==1?'active':'']">
			<h1>全部分类</h1>
			<img src="./arrow.jpg">
		</router-link>
		<router-link :to="{name:'recommend',params:{id:'2'}}" tag='li' :class="[this.$route.params.id==2?'active':'']">
			<h1>推荐</h1>
			<img src="./arrow.jpg">
		</router-link>
		<router-link :to="{name:'myCenter',params:{id:'3'}}" tag='li' :class="[this.$route.params.id==3?'active':'']">
			<h1>搜索</h1>
			<img src="./arrow.jpg">
		</router-link>
	</ul>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        lightBoole: false
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.menu-con
  width: 35%
  height: 100%
  background: #333333
  z-index: 999
  position: absolute
  left: 0
  top: 45px
  animation: moveWidth 0.5s forwards linear
  @keyframes moveWidth
  	0%
      width: 35%
    35%
      width: 45%
    75%
      width: 60%
    100%
      width: 75%
  ul
  	li
  	  height: 60px
  	  line-height: 60px
  	  padding-left: 5px
  	  border-bottom: thin solid #AAAAAA
  	  opacity: 0.6
  	  &.active
  	  	opacity: 1
  	  h1
  	  	font-size: 17px
  	  	font-family: '微软雅黑'
  	  img
  	  	float: right
  	  	padding: 22px 5px 0 0
  	  	opacity: 0.7
</style>

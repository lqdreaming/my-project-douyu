<template>
  <nav id="toolbar"  v-if="!this.$route.params.cateId&&!this.$route.params.item&&!this.$route.params.value">
  	<h1>
  		<a class="toolbar-title-icon" @click="menuShow()">
  			<img class="menu-ing" src="./menu.png" :class="[this.isShow?'active':'']">
  		</a>
  		<a class="toolbar-title">
  			<div :title="title">{{title}}</div>
  		</a>
  	</h1>
  	<router-link to="/login" id="nav-right">
        <img class="user-img" src="./user.png">
    </router-link>
    <menuBar v-if="isShow"></menuBar>
  </nav>
</template>

<script type="text/ecmascript-6">
import menuBar from '../menuBar/menuBar'

export default {
  components: {
    menuBar
  },
  data () {
    return {
      isShow: false
    }
  },
  watch: {
    title: function (newValue, oldValue) {
      if (oldValue !== newValue) {
        this.isShow = false
      }
    }
  },
  methods: {
    menuShow () {
      this.isShow = !this.isShow
    }
  },
  computed: {
    title () {
      switch (this.$route.params.id) {
        case '0':
          return '首页'
        case '1':
          return '全部分类'
        case '2':
          return '推荐'
        case '3':
          return '搜索'
        default:
          return '斗鱼TV'
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

#toolbar
  width: 100%
  height: 45px
  background: #282828
  img
  	width: 20px
  	height: 20px
  h1
    float: left
    color: #fff
    .toolbar-title-icon
      width: 25px
      height: 45px
   	  .menu-ing
   	  	display: inline-block
   	  	position: absolute
   	  	left: 5px
   	  	top: 12px
   	  	opacity: 0.8
   	  	&.active
      	  opacity: 1
   	.toolbar-title
   	  display: inline-block
   	  margin-left: 35px
   	  line-height: 45px
   	  font-size: 16px
   	  font-family: "微软雅黑"
  #nav-right
    width: 30px
    height: 35px
    .user-img
      position: absolute
      left: 90%
      top: 12px
      opacity: 0.8
</style>

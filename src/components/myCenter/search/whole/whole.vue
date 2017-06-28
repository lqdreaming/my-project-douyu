<template>
<div class="whole">
	<div class="whole-ancho">
	    <div>
		  <h2>主播</h2>
		  <span>更多<i> ></i></span>
		</div>
		<nav>
			<li v-for="(item, index) in result1">
			  <router-link :to="{name:'room',params:{item:item}}"> 
				<img :src="item.avatar">
				<p>{{item.room_name}}</p>
				<p>{{item.fans}} 人关注</p>
			  </router-link>
			</li>
		</nav>
	</div>
	<div class="whole-live">
		<div>
			<h2>直播</h2>
			<span>更多<i> ></i></span>
		</div>
		<nav>
			<li v-for="item in result">
			  <router-link :to="{name:'room',params:{item:item}}"> 
				<img :src="item.room_src" class="whole-live-img">
				<p class="whole-live-attention">
					<svg class="icon icon-eye-outline"><use xlink:href="#icon-eye-outline"></use>
						<symbol id="icon-eye-outline" viewBox="0 0 24 24">
						<title>eye-outline</title>
						<path d="M12 9c1.211 0 2.381 0.355 3.297 1.004 1.301 0.92 2.43 2.124 3.165 2.996-0.735 0.872-1.864 2.077-3.166 2.996-0.915 0.649-2.085 1.004-3.296 1.004s-2.382-0.355-3.299-1.004c-1.301-0.92-2.43-2.124-3.164-2.996 0.734-0.872 1.863-2.076 3.164-2.995 0.917-0.65 2.088-1.005 3.299-1.005M12 7c-1.691 0-3.242 0.516-4.453 1.371-2.619 1.852-4.547 4.629-4.547 4.629s1.928 2.777 4.547 4.629c1.211 0.855 2.762 1.371 4.453 1.371s3.242-0.516 4.451-1.371c2.619-1.852 4.549-4.629 4.549-4.629s-1.93-2.777-4.549-4.629c-1.209-0.855-2.76-1.371-4.451-1.371z"></path>
						<path d="M12 12c-0.553 0-1 0.447-1 1 0 0.551 0.447 1 1 1 0.551 0 1-0.449 1-1 0-0.553-0.449-1-1-1z"></path>
						<path d="M12 16c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM12 11c-1.104 0-2 0.896-2 2s0.896 2 2 2 2-0.896 2-2-0.896-2-2-2z"></path>
						</symbol>
					</svg>
					<span>{{item.fans}}</span>
				</p>
				<p class="whole-live-user">
					<svg class="icon icon-user"><use xlink:href="#icon-user"></use>
						<symbol id="icon-user" viewBox="0 0 20 20">
						<title>user</title>
						<path d="M7.725 2.146c-1.016 0.756-1.289 1.953-1.239 2.59 0.064 0.779 0.222 1.793 0.222 1.793s-0.313 0.17-0.313 0.854c0.109 1.717 0.683 0.976 0.801 1.729 0.284 1.814 0.933 1.491 0.933 2.481 0 1.649-0.68 2.42-2.803 3.334-2.13 0.918-4.326 2.073-4.326 4.073v1h18v-1c0-2-2.197-3.155-4.328-4.072-2.123-0.914-2.801-1.684-2.801-3.334 0-0.99 0.647-0.667 0.932-2.481 0.119-0.753 0.692-0.012 0.803-1.729 0-0.684-0.314-0.854-0.314-0.854s0.158-1.014 0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096-0.333-0.34-0.558-0.881 0.466-1.424-2.24-0.105-2.761 1.067-3.954 1.929z"></path>
						</symbol>
					</svg>
					<span>{{item.game_name}}</span>
				</p>
				<p>{{item.room_name}}</p>
			  </router-link>
			</li>
		</nav>
	</div>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        value: Object,
        result: {},
        result1: {}
      }
    },
    mounted () {
      this.$nextTick(function () {
        var value = this.$route.params.value
        this.$http.get('/v1/searchNew/' + value + '/1?limit=16&offset=0').then((response) => {
          this.result = response.data.data.room
        })
        this.$http.get('/v1/searchNew/' + value + '/1?limit=6&offset=0').then((response) => {
          this.result1 = response.data.data.room
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.whole
  width: 100%
  height: 100%
  color: black
  background: #fff
  .whole-ancho
    width: 100%
    div
      width: 100%
      height: 40px
      h2
        display: inline-block
        width: 30px
        height: 20px
        line-height: 20px
        font-size: 14px
        padding: 0 72% 0 15px
        border-left: 4px solid red
        border-radius: 4px
      span
        opacity: 0.6
        line-height: 42px
        i
         display: inline-block
         width: 12px
         height: 12px
         line-height: 10px
         padding-top: 2px
         background: #AAA
         border-radius: 6px
         color: #fff
    nav
      margin-left: 4px
      li
        display: inline-block
        width: 33%
        height: 150px
        overflow: hidden
        img
          width: 85%
          height: 99px
          border-radius: 5px
        p
          height: 20px
          line-height: 20px
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
          &:last-child
          	opacity: 0.6
  .whole-live
    width: 100%
    div
      width: 100%
      height: 40px
      h2
        display: inline-block
        width: 30px
        height: 20px
        line-height: 20px
        font-size: 14px
        padding: 0 72% 0 15px
        border-left: 4px solid red
        border-radius: 4px
      span
        opacity: 0.6
        line-height: 42px
        i
         display: inline-block
         width: 12px
         height: 12px
         line-height: 10px
         padding-top: 2px
         background: #AAA
         border-radius: 6px
         color: #fff
    nav
      width: 100%
      li
        display: inline-block
        width: 45%
        height: 150px
        position: relative
        .whole-live-img
          width: 95%
          height: 120px
          overflow: hidden
        p
          height: 20px
          line-height: 20px
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
          color: #fff
          &:last-child
            width: 90%
            height: 20px
            color: black
        .whole-live-attention
          display: inline-block
          position: absolute
          left: 5%
          top: 10px
        .whole-live-user
          display: inline-block
          position: absolute
          left: 10px
          top: 100px
  .icon
    display: inline-block
    width: 1em
    height: 1em
    stroke-width: 0
    stroke: currentColor
    fill: currentColor
</style>

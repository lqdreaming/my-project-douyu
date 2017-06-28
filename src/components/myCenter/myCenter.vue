<template>
	<div class="search">
		<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<defs>
				<symbol id="icon-search" viewBox="0 0 32 32">
					<title>search</title>
					<path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
				</symbol>
			</defs>
		</svg>
	<div class="search-inf">
		<input ref="inputvalue" @change="changevalue" type="text" name="serach" class="input-text" value="搜索房间/主播/分类">
		<router-link :to="{name:'search',params:{value:inputvalue}}" class="icon-ser"><svg class="icon icon-search"><use xlink:href="#icon-search"></use></svg></router-link>
	</div>
	<div class="search-late">
		<h1>最近热搜</h1>
		<ul>
			<router-link :to="{name:'search',params:{value:inputvalue1}}" tag="li">
				<span class="num num-red">1</span>
				<span ref="inputvalue1">阿冷</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue2}}" tag="li">
				<span class="num">6</span>
				<span ref="inputvalue2">斯祥</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue3}}" tag="li">
				<span class="num num-lightred">2</span>
				<span ref="inputvalue3">古剑奇谭</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue4}}" tag="li">
				<span class="num">7</span>
				<span ref="inputvalue4">LCK</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue5}}" tag="li">
				<span class="num num-dumred">3</span>
				<span ref="inputvalue5">变形金刚</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue6}}" tag="li">
				<span class="num">8</span>
				<span ref="inputvalue6">SKT</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue7}}" tag="li">
				<span class="num">4</span>
				<span ref="inputvalue7">绝地求生</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue8}}" tag="li">
				<span class="num">9</span>
				<span ref="inputvalue8">纳豆</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue9}}" tag="li">
				<span class="num">5</span>
				<span ref="inputvalue9">KPL</span>
			</router-link>
			<router-link :to="{name:'search',params:{value:inputvalue10}}" tag="li">
				<span class="num">10</span>
				<span ref="inputvalue10">暴走</span>
			</router-link>
		</ul>
	</div>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        inputvalue: Object,
        inpuvalue1: Object,
        inpuvalue2: Object,
        inpuvalue3: Object,
        inpuvalue4: Object,
        inpuvalue5: Object,
        inpuvalue6: Object,
        inpuvalue7: Object,
        inpuvalue8: Object,
        inpuvalue9: Object,
        inpuvalue10: Object
      }
    },
    mounted () {
      this.inputvalue = this.$refs.inputvalue.value
      this.inputvalue1 = this.$refs.inputvalue1.innerHTML
      this.inputvalue2 = this.$refs.inputvalue2.innerHTML
      this.inputvalue3 = this.$refs.inputvalue3.innerHTML
      this.inputvalue4 = this.$refs.inputvalue4.innerHTML
      this.inputvalue5 = this.$refs.inputvalue5.innerHTML
      this.inputvalue6 = this.$refs.inputvalue6.innerHTML
      this.inputvalue7 = this.$refs.inputvalue7.innerHTML
      this.inputvalue8 = this.$refs.inputvalue8.innerHTML
      this.inputvalue9 = this.$refs.inputvalue9.innerHTML
      this.inputvalue10 = this.$refs.inputvalue10.innerHTML
    },
    methods: {
      changevalue () {
        this.inputvalue = this.$refs.inputvalue.value
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  width: 100%
  background: #E0FFFF
  .search-inf
    width: 100%
    height: 40px
    line-height: 40px
    .input-text
      width: 90%
      height: 30px
      font-size: 12px
      margin-left: 2px
      padding-left: 2px
      border: 1px solid #DAA520
      border-right: none
      overflow: hidden
    .icon-ser
      display: inline-block
      width: 32px
      height: 30px
      margin-left: -5px
      border: 1px solid #DAA520
      background: #DAA520
      border-left: none
      position: absolute
      left: 92%
      top: 49px
      .icon
        width: 20px
        height: 20px
        stroke-width: 0
        veitical-align: top
        padding-top: 6px
        padding-left: 6px
        color: #fff
        stroke: currentColor
        fill: currentColor
  .search-late
    width: 100%
    margin: 10px 10px
    font-family: "微软雅黑"
    h1
      font-size: 14px
    ul
      font-size: 13px
      margin-top: 20px
      li
        display: inline-block
        width: 48%
        height: 30px
        .num
          display: inline-block
          width: 14px
          height: 15px
          opacity: 0.6
          padding: 1px 0 0 4px
          margin-right: 10px
        .num-red
          background: #FF0000
          opacity: 0.8
        .num-lightred
          background: #FF7744 
          opacity: 0.8
        .num-dumred
          background: #FFAA33
          opacity: 0.8
</style>

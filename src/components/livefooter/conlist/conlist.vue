<template>
<nav class="conlist">
	<li v-for="item in gifts">
		<div class="conlist-left">
			<img :src="item.mimg">
		</div>
		<div class="conlist-right">
			<h1>{{item.name}}(+{{item.gx/10}}鱼翅)</h1>
			<p class="conlist-one">
				<span>贡献 +{{item.gx}}</span>
				<span>经验 +{{item.pc}}</span>
			</p>
			<p class="conlist-sec">{{item.desc}}</p>
		    <p class="conlist-third">{{item.intro}}</p>
			<button>批量赠送</button>
		</div>
	</li>
</nav>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        item: Object,
        gifts: Object
      }
    },
    mounted () {
      this.$nextTick(function () {
        var item = this.$route.params.item
        var roomId = item.room_id
        this.$http.get('/RoomApi/room/' + roomId).then((response) => {
          this.gifts = response.data.data.gift
        })
      })
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.conlist
  padding-top: 10px
  li
    width: 100%
    height: 180px
    margin-bottom: 10px
    margin-left: 2px
    background: #ddd
    border-radius: 20px
    .conlist-left
      display: inline-block
      float: left
      img
        width: 160px
        height: 180px
        border-radius: 10px
        vertical-align: top
    .conlist-right
      display: inline-block
      padding-left: 10px
      font-family: "微软雅黑"
      h1
        font-size: 15px
        font-weight: bold
        color: red
      p
        font-size: 13px
        line-height: 30px
      .conlist-one
        opacity: 0.8
      .conlist-sec
        font-weight: bold
        opacity: 0.6
      .conlist-third
        color: #DC143C
      button
        width: 70px
        height: 40px
        border-radius: 10px
        font-size: 13px
        font-weight: bold
        color: #fff
        background: #FF4500
        opacity: 0.9
</style>

<template>
<div class="anchor">
	<div class="anchor-header">
		<img :src="room.avatar">
		<div class="anchor-inf">
			<p>主播：<span>{{room.owner_name}}</span></p>
			<p>体重：<span>{{room.owner_weight}}</span></p>
		</div>
	</div>
	<p class="anchor-midele">最近开播时间：<span>{{room.start_time}}</span></p>
	<div class="anchor-footer">
		<img :src="room.avatar" class="anchor-footer-img">
		<ul>
			<li>
				<img src="./message.png">
				<span>{{room.online}}人</span>
			</li>
			<li>
				<img src="./heart-outline.png">
				<span>关注</span>
			</li>
			<li>
				<img src="./share.png">
				<span>分享</span>
			</li>
		</ul>
	</div>
</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        item: Object,
        room: Object
      }
    },
    mounted () {
      this.$nextTick(function () {
        var item = this.$route.params.item
        var roomId = item.room_id
        this.$http.get('/RoomApi/room/' + roomId).then((response) => {
          this.room = response.data.data
        })
      })
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.anchor
  padding-top: 5px
  .anchor-header
    width: 100%
    height: 80px
    img
      width: 80px
      height: 80px
      float: left
      padding-left: 5px
      border-radius: 80px
    .anchor-inf
      display: inline-block
      margin-left: 5px
      float: left
      vertical-align: top
      margin-top: 10px
      font-size: 12px
      font-family: "微软雅黑"
      font-weight: bold
      p
        height: 20px
  .anchor-midele
    height: 30px
    line-height: 31px
    color: red
    float: left
    font-size: 12px
  .anchor-footer
    .anchor-footer-img
      width: 350px
      height: 200px
    ul
      display: flex
      width: 100%
      height: 32px
      margin-top: -14px
      float: left
      li
        display: inline-block
        flex: 2
        height: 30px
        float: left
        img
          vertical-align: top
          padding-top: 8px
</style>

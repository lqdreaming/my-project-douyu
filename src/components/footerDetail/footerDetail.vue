<template>
<nav class="live-content">
		<li v-for="item in myVideo.data">
      <router-link :to="{name:'room',params:{item:item}}"> 
  			<img :src="item.room_src" class="room-img">
  			<div class="room-top">
  				<span class="room-name" ref="text">{{item.nickname}}</span>
  				<img src="./users.png" class="img-user">
  				<span class="room-fans">{{item.fans}}</span>
  			</div>
  			<div class="room-bottom">
  				<img src="./film.png">
  				<span>{{item.room_name}}</span>
  			</div>
      </router-link>
		</li>
</nav>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      myVideo: []
    }
  },
  created () {
    this.$http.get('/v1/live?offset=5').then((response) => {
      this.myVideo = response.data
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.live-content
  width: 100%
  padding: 30px 8px
  margin-bottom: -20px
  background: #DDD
  li
    display: inline-block
    width: 48%
    height: 190px
    margin-left: 2px
    position: relative
    .room-img
      display: inline-block
      width: 95%
      height: 140px
      border-radius: 15px
    .room-top
      width: 95%
      height: 15px
      line-height: 15px
      font-size: 12px
      font-family: '微软雅黑'
      font-weight: bold
      color: #fff
      position: absolute
      left: 2px
      top: 120px
      .room-name
        display: inline-block
        width: 50%
        margin-left:2px
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .img-user
        display: inline-block
        width: 10%
        height: 15px
      .room-fans
        display: inline-block
        width: 28%
        text-align: center
    .room-bottom
      height: 15px
      opacity: 0.6
      img
        display: inline-block
        width: 15px
        height: 15px
        padding-bottom: 1px
        margin-top: 5px
      span
        display: inline-block
        width: 80%
        height: 15px
        font-size: 14px
        font-weight: bold
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
</style>

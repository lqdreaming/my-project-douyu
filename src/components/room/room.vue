<template>
<div>
	<header>
	    <div class="header-img" @click="back">
		  <img src="./long-arrow-left.png">
		</div>
		<h1>斗鱼TV</h1>
	</header>
	<div class="play">
	    <video-player :options="videoOptions"></video-player>
		<!--<video type="application/x-mpegURL" controls="true">
			<source src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" align="middle">
			<p>您的浏览器不支持 video 标签</p>
		</video>-->
		<!--视频
		<object data="https://staticlive.douyucdn.cn/common/simplayer/WebRoomNormal.swf?v86007" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" align="middle" width="100%" height="100%">
		<param name="quality" value="high">
		<param name="bgcolor" value="#333333">
		<param name="allowscriptaccess" value="always">
		<param name="allowfullscreen" value="true">
		<param name="wmode" value="Opaque">
		<param name="allowFullScreenInteractive" value="true">
		</object>-->
		<div class="live-con">
			<div class="live-con-left">
				<h1>主播：</h1>
				<p>共<span>{{room.online}}</span>人观看</p>
			</div>
			<div class="live-con-right">
				<p>分享</p>
				<img src="./share.png">
			</div>
		</div>
	</div>
	<div class="live-bar"></div>
	<livefooter></livefooter>
</div>
</template>

<script type="text/ecmascript-6">
  import livefooter from '../livefooter/livefooter'
  import { videoPlayer } from 'vue-video-player'
  export default {
    components: {
      livefooter,
      videoPlayer
    },
    data () {
      return {
        videoOptions: {
          sources: [{
            withCredentials: false,
            type: 'application/x-mpegURL',
            src: 'http://hls1a.douyucdn.cn/live/71017r4L7CBloAVe_550/playlist.m3u8?wsSecret=e8351a7ffa324ef7d5f23d31a2165b4e&wsTime=1498463430&did=&ver='
          }],
          controlBar: {
            timeDivider: false,
            durationDisplay: false
          },
          /* flash: {
             hls: { withCredentials: false }
          },
          html5: {
            hls: { withCredentials: false }
          }, */
          language: 'zh-CN',
          live: true,
          autoplay: true,
          height: 240
        },
        item: Object,
        roomId: Object,
        time: Object,
        auth: Object,
        room: Object,
        gift: []
      }
    },
    mounted () {
      this.$nextTick(function () {
        var item = this.$route.params.item
        var roomId = item.room_id
        this.$http.get('/RoomApi/room/' + roomId).then((response) => {
          this.room = response.data.data
          this.gift = this.room.gift
          this.img = this.room.room_thumb
        })
      })
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
.play
  width: 100%
  .live-img
    width: 100%   
  .live-con
    width: 100%
    height: 40px
    padding: 5px 5px
    .live-con-left
      display: inline-block
      h1
        font-size: 15px
        font-weight: bold
        padding-bottom: 5px
      p
        font-size: 14px
        span
          display: inline-block
          color: red
          padding: 0 3px
    .live-con-right
      display: inline-block
      float: right
      margin-right: 15px
      height: 40px
      p
        display: inline-block
        height: 40px
        font-size: 15px
        vertical-align: middle
        padding-top: 10px
      img
        display: inline-block
        padding-bottom: 1px
        opacity: 0.6
.live-bar
  width: 100%
  height: 10px
  background: #DCDCDC
  border: 1px solid #DDDDDD       
</style>

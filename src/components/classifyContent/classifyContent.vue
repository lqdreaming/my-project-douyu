<template>
<div class="classifyDetail">
	<header>
	    <div class="header-img" @click="back">
		  <img src="./long-arrow-left.png">
		</div>
		<h1>{{game_name}}</h1>
	</header>
	<nav class="middleCon" v-for="item in middlecontent">
		<li>
      <router-link :to="{name:'room',params:{item:item}}"> 
			  <img :src="item.room_src" class="room-img">
      </router-link>
			<div class="room-con">
				<p class="room-name">{{item.room_name}}</p>
				<p>
					<img src="./user.png">
					<span>{{item.nickname}}</span>
				</p>
				<p>
					<img src="./users.png">
					<span>{{item.online}}</span>
				</p>
			</div>
		</li>
	</nav>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        middlecontent: [],
        cateId: Object,
        game_name: Object
      }
    },
    mounted () {
      this.$nextTick(function () {
        var cateId = this.$route.params.cateId
        this.$http.get('/v1/getColumnRoom/' + cateId + '?limit=20&offset=0').then((response) => {
          this.middlecontent = response.body.data
          this.game_name = this.middlecontent[0].game_name
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
.classifyDetail
  width: 100%
  height: 100%
  padding-bottom: 10px
  background: #DDDDDD
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
  .middleCon
    width: 100%
    height: 100%
    opacity: 0.8
    li
      width: 100%
      height: 120px
      padding: 20px 0 0  15px
      .room-img
        width: 50%
        height: 120px
      .room-con
        display: inline-block
        width: 45%
        height: 60px
        vertical-align: top
        margin-top: 20px
        margin: 20px 4px 0 4px
        font-size: 14px
        font-family: "微软雅黑"
        font-weight: bold
        opacity: 0.7
        p
          margin-top: 5px
          img
            width: 15px
        .room-name
          font-weight: bold
          line-height: 20px
</style>

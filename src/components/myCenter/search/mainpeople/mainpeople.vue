<template>
<div class="mainpeople">
	<nav>
		<li v-for="item in result">
		  <router-link :to="{name:'room',params:{item:item}}"> 
			<div class="mainpeople-img">
				<img :src="item.avatar">
			</div>
			<div class="mainpeople-num">
				<p>{{item.nickname}}</p>
				<p class="mainpeople-num-user">
					<span>观看人数：{{item.online}}</span>
					<span>关注人数：{{item.fans}}</span>
				</p>
			</div>
		  </router-link>
		</li>
	</nav>
	<div class="mainpeople-more" @click="load" v-if="this.flag">加载更多</div>
	<div class="mainpeople-more" v-if="!this.flag">加载完毕</div>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        value: Object,
        result: {},
        flag: true
      }
    },
    mounted () {
      this.$nextTick(function () {
        var value = this.$route.params.value
        this.$http.get('/v1/searchNew/' + value + '/1?limit=20&offset=0').then((response) => {
          this.result = response.data.data.room
        })
      })
    },
    methods: {
      load () {
        this.flag = false
        var value = this.$route.params.value
        this.$http.get('/v1/searchNew/' + value + '/1?limit=100&offset=0').then((response) => {
          this.result = response.data.data.room
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.mainpeople
  width: 100%
  height: 100%
  background: #fff
  padding-top: 5px
  nav
    width: 100%
    li
     width: 100%
     height: 160px
     margin-top: 20px
     border-bottom: 1px solid #DDD
     .mainpeople-img
       display: inline-block
       width: 40%
       height: 160px
       float: left
       img
         width: 90%
         height: 140px
         border-radius: 90%
      .mainpeople-num
        display: inline-block
        width: 60%
        height: 160px
        padding-top: 40px
        p
          height: 25px
        .mainpeople-num-user
          opacity: 0.6
  .mainpeople-more
    font-size: 14px
    background: #DCDCDC  
</style>

<template>
<nav class="wholeClass">
	<router-link :to="{name:'classifyContent',params:{cateId:item.cate_id}}" tag="li" v-for="item in wholeClassify"> 
		<div>
		  <img :src="item.icon_url">
		  <p>{{item.tag_name}}</p>
		</div>
	</router-link>
</nav>
</div>
</template>

<script type="text/ecmascript-6">

  export default {
    data () {
      return {
        wholeClassify: []
      }
    },
    created () {
      this.$http.get('/v1/getColumnDetail').then((response) => {
        this.wholeClassify = response.data.data
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wholeClass
  width: 100%
  li
    display: inline-block
    width: 32.7%
    height: 140px
    border: 1px dashed #DCDCDC
    position: relative
    div
      width: 80%
      height: 140px
      padding-left: 22%
      padding-top: 20%
      img
        width: 70%
        height: 70px
        border-radius: 50px
      p
        width: 70%
        font-size: 14px
        font-family: '微软雅黑'
        font-weight: bold
        text-align: center
        padding-top: 10px
        opacity: 0.4
</style>

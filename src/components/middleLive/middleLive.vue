<template>
<swiper :options="swiperOption"  ref="mySwiper" class="rec-one">  
  <!-- 这部分放你要渲染的那些内容v-for="item in music" -->
    <swiper-slide v-for="item in myVideo.data">
      <router-link :to="{name:'room',params:{item:item}}"> 
        <img :src="item.room_src" class="swiper-img">
      </router-link>
    </swiper-slide>  
    <!-- 这是轮播的小圆点 -->  
    <div class="swiper-pagination" slot="pagination"></div>  
</swiper>
</template>

<script type="text/ecmascript-6">
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
        // 这个位置放swiper的回调方法
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      myVideo: []
    }
  },
  created () {
    this.$http.get('/v1/live?limit=5&offset=0').then((response) => {
      this.myVideo = response.data
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.rec-one
  width: 100%
  height: 230px
  background: #444444
  .swiper-img
    display: inline-block
    width: 95%
    height: 230px
    margin-left: 2.5%
</style>

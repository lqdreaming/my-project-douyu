<template>
<div class="search">
	<v-header></v-header>
	<div class="tab border-1px">
        <div class="tab-item" @click="iswhole()" id="tab-item">
	    <h1 :class="[datas[0].isshow?'active':'']">全部</h1>
  		<whole v-if="datas[0].isshow" class="tab-list"></whole> 
	</div>
	<div class="tab-item" @click="ismainpeople()" id="tab-item">
	    <h1 :class="[datas[1].isshow?'active':'']">主播</h1>
  		<mainpeople v-if="datas[1].isshow" class="tab-list"></mainpeople>
	</div>
	<div class="tab-item" @click="islivepeople()" id="tab-item">
	    <h1 :class="[datas[2].isshow?'active':'']">直播</h1>
  		<livepeople v-if="datas[2].isshow" class="tab-list"></livepeople>
	</div>
     </div>
</div>
</template>

<script type="text/ecmascript-6">
import header from '../../header/header.vue'
import whole from './whole/whole.vue'
import mainpeople from './mainpeople/mainpeople.vue'
import livepeople from './livepeople/livepeople.vue'

export default {
  components: {
    'v-header': header,
    'whole': whole,
    'mainpeople': mainpeople,
    'livepeople': livepeople
  },
  data () {
    return {
      datas: [
        {isshow: true},
        {isshow: false},
        {isshow: false}
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    iswhole () {
      for (var i = 0; i < this.datas.length; i++) {
        this.datas[i].isshow = false
        this.datas[0].isshow = true
      }
    },
    ismainpeople () {
      for (var i = 0; i < this.datas.length; i++) {
        this.datas[i].isshow = false
        this.datas[1].isshow = true
      }
    },
    islivepeople () {
      for (var i = 0; i < this.datas.length; i++) {
        this.datas[i].isshow = false
        this.datas[2].isshow = true
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixin.styl'

.search
  width: 100%
  height: 100%
  padding-bottom: 10px
  background: #666666
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    background: #666
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      h1
        display: block
        font-size: 14px
        color: #fff
        opacity: 0.7
        &.active
          color: #00FFFF
          opacity: 1
      .tab-list
        display: inline-block
        position: absolute
        left: 0px
        top: 40px
</style>
